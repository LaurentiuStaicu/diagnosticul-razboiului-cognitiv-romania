import React, { useState, useEffect, useCallback, useRef } from 'react';
import {
  ALL_SUBCHAPTER_STEPS,
  GLOSSARY_CONCEPTS,
  BIBLIOGRAPHY_DATA,
  CHAPTER_EXECUTIVE_SUMMARIES,
  OPERATIONAL_PROTOCOL_TABLE
} from './data/tablesAndReference';
import { StratumId, BibliographyItem } from './data/types';
import { InteractiveFigures, FIGURE_METADATA } from './components/InteractiveFigures';
import { TablesAndRegionalView } from './components/TablesAndRegionalView';
import { GlossaryAndBibliographyView } from './components/GlossaryAndBibliographyView';
import { SearchModal, PdfDocumentView } from './components/PdfAndSearchModal';
import { LandingCoverPage } from './components/LandingCoverPage';
import { SocialShareButtons } from './components/SocialShareButtons';
import {
  ContextualTooltip,
  INLINE_GLOSSARY_PATTERNS
} from './components/ContextualTooltip';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  Search,
  BookOpen,
  X
} from 'lucide-react';

type ActiveNavView = 'parcurs' | 'diagrame' | 'tabele' | 'glosar' | 'pdf';
type AudienceReadingMode = 'academic' | 'executive';

/**
 * Matches a parenthetical string or author label against BIBLIOGRAPHY_DATA
 */
function findMatchingBibliographyItems(citationText: string): BibliographyItem[] {
  const cleaned = citationText
    .replace(/^\(|\)$/g, '')
    .toLowerCase();

  // Extract candidate author surnames (words with >= 3 letters, plus 2-letter surnames like 'wu', that aren't common connectors)
  const stopWords = new Set([
    'et',
    'al',
    'and',
    'sau',
    'din',
    'pentru',
    'prin',
    'sub',
    'faza',
    'capitolul',
    'tabelul',
    'figura',
    'stratum',
    'stratul',
    'track',
    'grup',
    'lucru',
    'bază',
    'ipoteza',
    'the',
    'basic',
    'laws',
    'human',
    'stupidity'
  ]);

  const tokens = cleaned
    .split(/[^a-zăâîșțéöüä'-]+/i)
    .map((t) => t.trim())
    .filter((t) => (t.length >= 3 || t === 'wu') && !stopWords.has(t));

  if (tokens.length === 0) return [];

  return BIBLIOGRAPHY_DATA.filter((item) => {
    const itemAuthorsLower = item.authors.toLowerCase();
    return tokens.some((tok) => {
      // Match whole surname token in item.authors
      const regex = new RegExp(`\\b${tok}\\b`, 'i');
      return regex.test(itemAuthorsLower);
    });
  });
}

interface ParsedHashTarget {
  isPortalOpen: boolean;
  activeView?: ActiveNavView;
  currentStepNumber?: number;
  selectedChapterFilter?: number | 'ALL';
  activeConceptId?: string;
  labFigureId?: number;
}

function parseHashState(hashInput: string): ParsedHashTarget {
  const rawHash = hashInput.replace(/^#/, '').trim();
  if (!rawHash || rawHash === 'coperta' || rawHash === 'top') {
    return { isPortalOpen: false };
  }

  if (rawHash.startsWith('pasul-')) {
    const num = parseInt(rawHash.replace('pasul-', ''), 10);
    if (!isNaN(num) && num >= 1 && num <= ALL_SUBCHAPTER_STEPS.length) {
      const target = ALL_SUBCHAPTER_STEPS.find((s) => s.stepNumber === num);
      return {
        isPortalOpen: true,
        activeView: 'parcurs',
        currentStepNumber: num,
        activeConceptId:
          target && target.keyConceptIds.length > 0 ? target.keyConceptIds[0] : undefined
      };
    }
    return { isPortalOpen: false };
  }

  // Chapter navigation: #capitolul-0 .. #capitolul-6 and #introducere
  if (rawHash === 'introducere' || rawHash === 'capitolul-0') {
    return { isPortalOpen: true, activeView: 'parcurs', currentStepNumber: 1, selectedChapterFilter: 0 };
  }
  if (rawHash.startsWith('capitolul-')) {
    const chapNum = parseInt(rawHash.replace('capitolul-', ''), 10);
    const chapterFirstSteps: Record<number, number> = { 0: 1, 1: 2, 2: 5, 3: 8, 4: 11, 5: 14, 6: 16 };
    if (!isNaN(chapNum) && chapterFirstSteps[chapNum] !== undefined) {
      return {
        isPortalOpen: true,
        activeView: 'parcurs',
        currentStepNumber: chapterFirstSteps[chapNum],
        selectedChapterFilter: chapNum
      };
    }
  }

  // Graceful legacy mappings for existing bookmarks
  if (rawHash.startsWith('actul-')) {
    const actNum = parseInt(rawHash.replace('actul-', ''), 10);
    const actFirstStep = actNum === 1 ? 1 : actNum === 2 ? 5 : actNum === 3 ? 11 : 16;
    return {
      isPortalOpen: true,
      activeView: 'parcurs',
      currentStepNumber: actFirstStep
    };
  }
  if (rawHash === '4-acte') {
    return { isPortalOpen: true, activeView: 'parcurs', currentStepNumber: 1 };
  }

  if (rawHash.startsWith('figura-')) {
    const figNum = parseInt(rawHash.replace('figura-', ''), 10);
    return {
      isPortalOpen: true,
      activeView: 'diagrame',
      labFigureId: !isNaN(figNum) && figNum >= 1 && figNum <= 7 ? figNum : 1
    };
  }

  if (rawHash === 'diagrame') {
    return { isPortalOpen: true, activeView: 'diagrame' };
  }

  if (rawHash === 'tabele') {
    return { isPortalOpen: true, activeView: 'tabele' };
  }

  if (rawHash === 'glosar') {
    return { isPortalOpen: true, activeView: 'glosar' };
  }

  if (rawHash === 'pdf') {
    return { isPortalOpen: true, activeView: 'pdf' };
  }

  if (rawHash === 'parcurs') {
    return {
      isPortalOpen: true,
      activeView: 'parcurs'
    };
  }

  return { isPortalOpen: false };
}

function getInitialAudienceMode(): AudienceReadingMode {
  if (typeof window === 'undefined') return 'academic';
  try {
    const params = new URLSearchParams(window.location.search);
    const mode = params.get('mode');
    if (mode === 'executive') return 'executive';
    if (mode === 'deep' || mode === 'academic') return 'academic';
    const stored = localStorage.getItem('readingMode');
    if (stored === 'executive' || stored === 'academic') return stored;
  } catch {
    // fallback
  }
  return 'academic';
}

export function App() {
  const [initialHash] = useState<ParsedHashTarget>(() =>
    parseHashState(typeof window !== 'undefined' ? window.location.hash : '')
  );

  const [isPortalOpen, setIsPortalOpen] = useState<boolean>(initialHash.isPortalOpen);
  const [activeView, setActiveView] = useState<ActiveNavView>(
    initialHash.activeView ?? 'parcurs'
  );
  const [currentStepNumber, setCurrentStepNumber] = useState<number>(
    initialHash.currentStepNumber ?? 1
  );
  const [selectedChapterFilter, setSelectedChapterFilter] = useState<number | 'ALL'>(
    initialHash.selectedChapterFilter ?? 'ALL'
  );
  const [selectedStratumHighlight, setSelectedStratumHighlight] = useState<StratumId | 'ALL'>('ALL');
  const [readingTab, setReadingTab] = useState<'integral' | 'registre' | 'ambele'>('ambele');
  const [audienceMode, setAudienceMode] = useState<AudienceReadingMode>(getInitialAudienceMode);
  const [isAcademicAccordionOpen, setIsAcademicAccordionOpen] = useState<boolean>(false);

  const handleAudienceModeChange = useCallback((newMode: AudienceReadingMode) => {
    setAudienceMode(newMode);
    if (typeof window === 'undefined') return;
    try {
      localStorage.setItem('readingMode', newMode);
      const url = new URL(window.location.href);
      if (newMode === 'executive') {
        url.searchParams.set('mode', 'executive');
      } else {
        url.searchParams.delete('mode');
      }
      window.history.replaceState(null, '', `${url.pathname}${url.search}${url.hash}`);
    } catch {
      // ignore
    }
  }, []);

  const [activeConceptId, setActiveConceptId] = useState<string>(
    initialHash.activeConceptId ?? 'al-saselea-domeniu'
  );
  const [selectedAuthorCitation, setSelectedAuthorCitation] = useState<string | null>(null);
  const [labFigureId, setLabFigureId] = useState<number>(initialHash.labFigureId ?? 1);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);

  // Refs for accurate mobile & desktop scroll positioning
  const readingStageRef = useRef<HTMLElement | null>(null);
  const railContainerRef = useRef<HTMLDivElement | null>(null);
  const activeStepButtonRef = useRef<HTMLButtonElement | null>(null);
  const citationDossierRef = useRef<HTMLDivElement | null>(null);
  const conceptCardRef = useRef<HTMLDivElement | null>(null);

  const getStickyHeaderOffset = useCallback(() => {
    if (typeof window === 'undefined') return 0;
    // On mobile (< 1024px): main header (~49px) + sticky mobile switcher (~46px) + margin = 108px
    // On desktop (>= 1024px): main header (~53px) + margin = 72px
    return window.innerWidth < 1024 ? 108 : 72;
  }, []);

  const scrollToElementOnMobile = useCallback(
    (targetRef: React.RefObject<HTMLElement | null>) => {
      if (typeof window !== 'undefined' && window.innerWidth < 1024) {
        setTimeout(() => {
          if (!targetRef.current) return;
          const offset = getStickyHeaderOffset();
          const rect = targetRef.current.getBoundingClientRect();
          const targetY = rect.top + window.scrollY - offset;
          window.scrollTo({ top: Math.max(0, targetY), behavior: 'smooth' });
        }, 70);
      }
    },
    [getStickyHeaderOffset]
  );

  const scrollToReadingStage = useCallback(() => {
    if (typeof window === 'undefined') return;
    setTimeout(() => {
      if (readingStageRef.current) {
        const offset = getStickyHeaderOffset();
        const rect = readingStageRef.current.getBoundingClientRect();
        const targetY = rect.top + window.scrollY - offset;
        window.scrollTo({ top: Math.max(0, targetY), behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 50);
  }, [getStickyHeaderOffset]);

  // Center the active step button strictly inside the horizontal rail container (zero vertical window jump)
  useEffect(() => {
    if (!isPortalOpen || activeView !== 'parcurs') return;
    const timer = setTimeout(() => {
      if (railContainerRef.current && activeStepButtonRef.current) {
        const container = railContainerRef.current;
        const btn = activeStepButtonRef.current;
        const targetScrollLeft = btn.offsetLeft - (container.clientWidth - btn.clientWidth) / 2;
        container.scrollTo({
          left: Math.max(0, targetScrollLeft),
          behavior: 'smooth'
        });
      }
    }, 80);
    return () => clearTimeout(timer);
  }, [currentStepNumber, isPortalOpen, activeView]);

  const applyHashState = useCallback(() => {
    const parsed = parseHashState(window.location.hash);

    setIsPortalOpen((prev) => (prev === parsed.isPortalOpen ? prev : parsed.isPortalOpen));

    if (!parsed.isPortalOpen) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (parsed.activeView !== undefined) {
      const nextView = parsed.activeView;
      setActiveView((prev) => (prev === nextView ? prev : nextView));
    }
    if (parsed.currentStepNumber !== undefined) {
      const nextStep = parsed.currentStepNumber;
      setCurrentStepNumber((prev) => (prev === nextStep ? prev : nextStep));
      setSelectedAuthorCitation((prev) => (prev === null ? prev : null));
    }
    if (parsed.selectedChapterFilter !== undefined) {
      const nextChap = parsed.selectedChapterFilter;
      setSelectedChapterFilter((prev) => (prev === nextChap ? prev : nextChap));
    }
    if (parsed.activeConceptId !== undefined) {
      const nextConcept = parsed.activeConceptId;
      setActiveConceptId((prev) => (prev === nextConcept ? prev : nextConcept));
    }
    if (parsed.labFigureId !== undefined) {
      const nextFig = parsed.labFigureId;
      setLabFigureId((prev) => (prev === nextFig ? prev : nextFig));
    }

    setIsSearchOpen((prev) => (prev === false ? prev : false));
    if (parsed.currentStepNumber !== undefined) {
      scrollToReadingStage();
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [scrollToReadingStage]);

  useEffect(() => {
    if (initialHash.isPortalOpen) {
      if (initialHash.currentStepNumber !== undefined && window.innerWidth < 1024) {
        scrollToReadingStage();
      } else {
        window.scrollTo({ top: 0, behavior: 'auto' });
      }
    }
    window.addEventListener('hashchange', applyHashState);
    window.addEventListener('popstate', applyHashState);
    return () => {
      window.removeEventListener('hashchange', applyHashState);
      window.removeEventListener('popstate', applyHashState);
    };
  }, [applyHashState, initialHash.isPortalOpen, initialHash.currentStepNumber, scrollToReadingStage]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsPortalOpen(true);
        setIsSearchOpen((prev) => !prev);
      } else if (e.key === 'Escape') {
        setIsSearchOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const updateUrlHash = useCallback((hash: string) => {
    const normalized = hash.replace(/^#/, '').trim();
    const targetHash = normalized ? `#${normalized}` : '';
    const currentHash = window.location.hash === '#' ? '' : window.location.hash;
    if (currentHash !== targetHash) {
      const nextUrl = `${window.location.pathname}${window.location.search}${targetHash}`;
      window.history.pushState(null, '', nextUrl);
    }
  }, []);

  const currentStep =
    ALL_SUBCHAPTER_STEPS.find((s) => s.stepNumber === currentStepNumber) ||
    ALL_SUBCHAPTER_STEPS[0];

  const currentExecutiveSummary =
    CHAPTER_EXECUTIVE_SUMMARIES.find((s) => s.chapterNumber === currentStep.chapterNumber) ||
    CHAPTER_EXECUTIVE_SUMMARIES[0];

  // Dynamically synchronize <head> OpenGraph & Twitter Card meta tags with the active section, chapter, or figure
  useEffect(() => {
    const baseUrl = 'https://laurentiustaicu.github.io/diagnosticul-razboiului-cognitiv-romania';
    let metaTitle = 'Diagnosticul războiului cognitiv în România (Versiunea 1.0)';
    let metaDescription =
      'Arhitectura instituțională, neurocognitivă și culturală a vulnerabilității și rezilienței societale în fața operațiunilor informaționale ruse și a ideologiei putiniste.';
    let metaImage = `${baseUrl}/og-cover.png`;
    let metaImageAlt =
      'Diagnosticul războiului cognitiv în România (Arhitectura cauzală pe trei straturi, Stratul A, Stratul B, Stratul C)';
    let metaUrl = `${baseUrl}/`;

    if (isPortalOpen) {
      if (activeView === 'parcurs') {
        const figId = currentStep.linkedFigureId || 1;
        const figMeta = FIGURE_METADATA[figId] || FIGURE_METADATA[1];
        metaTitle =
          currentStep.stepNumber === 1
            ? 'Introducere · Diagnosticul războiului cognitiv în România (Versiunea 1.0)'
            : `${currentStep.title} (Diagnosticul războiului cognitiv în România)`;
        metaDescription = currentStep.summaryThesis;
        metaImage = `${baseUrl}/og/og-fig-${figId}.png`;
        metaImageAlt = `${currentStep.title} (${figMeta.title})`;
        metaUrl = `${baseUrl}/share/pasul-${currentStep.stepNumber}.html`;
      } else if (activeView === 'diagrame') {
        const fig = FIGURE_METADATA[labFigureId] || FIGURE_METADATA[1];
        metaTitle = `${fig.title} (Diagnosticul războiului cognitiv în România)`;
        metaDescription = fig.caption;
        metaImage = `${baseUrl}/og/og-fig-${fig.id}.png`;
        metaImageAlt = `${fig.title} (${fig.subtitle})`;
        metaUrl = `${baseUrl}/share/figura-${fig.id}.html`;
      } else if (activeView === 'tabele') {
        metaTitle = 'Tabelele de sinteză (1 și 2) și grupul de control regional (Diagnosticul războiului cognitiv în România)';
        metaDescription =
          'Sinteza matricială a diagnosticului pe Straturile A, B și C (Tabelul 1), protocolul secvențial Lalonde-Dever în 3 faze (Tabelul 2) și comparația cu grupul de control regional.';
        metaImage = `${baseUrl}/og/og-fig-7.png`;
        metaImageAlt = 'Tabelele de sinteză 1 și 2 și protocolul Lalonde-Dever';
        metaUrl = `${baseUrl}/share/tabele.html`;
      } else if (activeView === 'glosar') {
        metaTitle = 'Glosar conceptual (50 concepte) și bibliografie integrală (122 lucrări) (Diagnosticul războiului cognitiv în România)';
        metaDescription =
          'Aparatul conceptual interdisciplinar și cele 122 de referințe academice verificate ale monografiei.';
        metaImage = `${baseUrl}/og/og-fig-1.png`;
        metaImageAlt = 'Glosar conceptual și bibliografie integrală';
        metaUrl = `${baseUrl}/share/glosar.html`;
      }
    }

    document.title = metaTitle;
    const setMetaContent = (id: string, value: string) => {
      const el = document.getElementById(id);
      if (el) el.setAttribute('content', value);
    };
    setMetaContent('meta-og-title', metaTitle);
    setMetaContent('meta-og-description', metaDescription);
    setMetaContent('meta-og-url', metaUrl);
    setMetaContent('meta-og-image', metaImage);
    setMetaContent('meta-og-image-alt', metaImageAlt);
    setMetaContent('meta-twitter-title', metaTitle);
    setMetaContent('meta-twitter-description', metaDescription);
    setMetaContent('meta-twitter-image', metaImage);
    setMetaContent('meta-twitter-image-alt', metaImageAlt);
  }, [isPortalOpen, activeView, currentStep, labFigureId]);

  const filteredStepsForRail =
    selectedChapterFilter === 'ALL'
      ? ALL_SUBCHAPTER_STEPS
      : ALL_SUBCHAPTER_STEPS.filter((s) => s.chapterNumber === selectedChapterFilter);

  const activeGlossaryConcept =
    GLOSSARY_CONCEPTS.find((c) => c.id === activeConceptId) ||
    GLOSSARY_CONCEPTS.find((c) => currentStep.keyConceptIds.includes(c.id)) ||
    GLOSSARY_CONCEPTS[0];

  const matchedBibliographyForInspector = selectedAuthorCitation
    ? findMatchingBibliographyItems(selectedAuthorCitation)
    : [];

  const matchedSubchaptersForAuthor = selectedAuthorCitation
    ? ALL_SUBCHAPTER_STEPS.filter((step) => {
        const q = selectedAuthorCitation
          .replace(/^\(|\)$/g, '')
          .split(',')[0]
          .split('&')[0]
          .split(';')[0]
          .split('(')[0]
          .trim()
          .toLowerCase();
        if (!q || (q.length < 3 && q !== 'wu')) return false;
        return (
          step.citedAuthorNames.some((a) => a.toLowerCase().includes(q)) ||
          step.paragraphs.some((p) => p.toLowerCase().includes(q))
        );
      })
    : [];

  const handleStepSelect = useCallback(
    (stepNum: number) => {
      const target = ALL_SUBCHAPTER_STEPS.find((s) => s.stepNumber === stepNum);
      setCurrentStepNumber((prev) => (prev === stepNum ? prev : stepNum));
      setSelectedAuthorCitation((prev) => (prev === null ? prev : null));
      if (target && target.keyConceptIds.length > 0) {
        const firstConcept = target.keyConceptIds[0];
        setActiveConceptId((prev) => (prev === firstConcept ? prev : firstConcept));
      }
      updateUrlHash(`pasul-${stepNum}`);
      scrollToReadingStage();
    },
    [updateUrlHash, scrollToReadingStage]
  );

  const handleCitationSelect = useCallback(
    (citationKey: string) => {
      setSelectedAuthorCitation(citationKey);
      scrollToElementOnMobile(citationDossierRef);
    },
    [scrollToElementOnMobile]
  );

  const handleConceptSelect = useCallback(
    (conceptId: string) => {
      setActiveConceptId(conceptId);
      scrollToElementOnMobile(conceptCardRef);
    },
    [scrollToElementOnMobile]
  );

  /**
   * Renders a plain text segment with inline ContextualTooltip for key glossary terms
   * (highlighting at most the first occurrence of each term per paragraph to preserve editorial readability)
   */
  const renderTextSegmentWithGlossaryTooltips = (
    textSegment: string,
    usedConceptsInParagraph: Set<string>,
    keyPrefix: string
  ): React.ReactNode => {
    for (const entry of INLINE_GLOSSARY_PATTERNS) {
      if (usedConceptsInParagraph.has(entry.conceptId)) continue;
      const match = entry.regex.exec(textSegment);
      if (match && match.index !== undefined) {
        const conceptObj = GLOSSARY_CONCEPTS.find((c) => c.id === entry.conceptId);
        if (!conceptObj) continue;

        usedConceptsInParagraph.add(entry.conceptId);
        const before = textSegment.slice(0, match.index);
        const matchedText = match[0];
        const after = textSegment.slice(match.index + matchedText.length);

        return (
          <React.Fragment key={keyPrefix}>
            {before
              ? renderTextSegmentWithGlossaryTooltips(
                  before,
                  usedConceptsInParagraph,
                  `${keyPrefix}-b`
                )
              : null}
            <ContextualTooltip
              conceptId={conceptObj.id}
              matchedText={matchedText}
              onSelectConcept={handleConceptSelect}
            />
            {after
              ? renderTextSegmentWithGlossaryTooltips(
                  after,
                  usedConceptsInParagraph,
                  `${keyPrefix}-a`
                )
              : null}
          </React.Fragment>
        );
      }
    }
    return textSegment;
  };

  /**
   * Renders a paragraph with interactive parenthetical academic citations (e.g. "(Luhmann, 1995, 2004)" or "Coleman (1990)")
   * and inline contextual glossary tooltips for key technical concepts.
   */
  const renderParagraphWithCitations = (paragraph: string) => {
    // Match parenthetical segments containing a 4-digit year (1700-2029)
    const citationRegex = /(\([^()]*\b(?:17|18|19|20)\d{2}[a-b]?\b[^()]*\))/g;
    const parts = paragraph.split(citationRegex);
    const usedConceptsInParagraph = new Set<string>();

    return parts.map((part, idx) => {
      if (part.startsWith('(') && part.endsWith(')') && /\b(?:17|18|19|20)\d{2}[a-b]?\b/.test(part)) {
        let queryKey = part;
        let matches = findMatchingBibliographyItems(part);

        // If the parentheses only contain years/editions (e.g. "Niklas Luhmann (1995, 2004)"), look at preceding words
        if (matches.length === 0 && idx > 0 && part.length < 48) {
          const prevContext = parts[idx - 1].slice(-75);
          const contextualMatches = findMatchingBibliographyItems(`${prevContext} ${part}`);
          if (contextualMatches.length > 0) {
            matches = contextualMatches;
            const firstMatchedSurname = contextualMatches[0].authors.split(',')[0].trim();
            queryKey = `${firstMatchedSurname} ${part}`;
          }
        }

        if (matches.length > 0) {
          const isSelected = selectedAuthorCitation === queryKey;
          return (
            <button
              key={idx}
              type="button"
              onClick={() => handleCitationSelect(queryKey)}
              title="Selectați pentru a deschide fișa bibliografică în panoul lateral"
              className={`inline font-mono text-[13px] px-1 mx-0.5 border-b border-dotted transition-colors cursor-pointer ${
                isSelected
                  ? 'bg-[#E5B822] text-[#222426] border-[#222426] font-bold'
                  : 'bg-[#F4F1EA] text-[#222426] border-[#222426] hover:bg-[#E5B822]/40'
              }`}
            >
              {part}
            </button>
          );
        }
      }
      return (
        <React.Fragment key={idx}>
          {renderTextSegmentWithGlossaryTooltips(
            part,
            usedConceptsInParagraph,
            `seg-${idx}`
          )}
        </React.Fragment>
      );
    });
  };

  if (!isPortalOpen) {
    return (
      <LandingCoverPage
        onOpenInteractivePage={() => {
          setIsPortalOpen(true);
          updateUrlHash(`pasul-${currentStepNumber}`);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#F6F5EE] text-[#222426] overflow-x-clip">
      {/* TOP NAVIGATION BAR (Strict 3-Zone Contract, responsive on narrow mobile screens) */}
      <header className="sticky top-0 z-40 bg-[#F6F5EE]/95 backdrop-blur-sm border-b border-[#222426] px-3 sm:px-8 py-3 flex items-center justify-between gap-2 sm:gap-8">
        {/* Zone 1: Brand Wordmark (single text element) */}
        <a
          href="#coperta"
          onClick={(e) => {
            e.preventDefault();
            setIsPortalOpen(false);
            updateUrlHash('');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          title="Revenire la coperta principală (Landing page)"
          className="font-serif text-sm sm:text-lg font-bold tracking-tight text-[#222426] truncate max-w-[62vw] sm:max-w-none"
        >
          Diagnosticul războiului cognitiv în România
        </a>

        {/* Zone 2: 5 concise single-line text navigation links */}
        <nav className="hidden lg:flex items-center gap-6 text-xs sm:text-sm font-medium text-[#6E7376]">
          <button
            onClick={() => {
              setActiveView('parcurs');
              updateUrlHash(`pasul-${currentStepNumber}`);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className={`hover:text-[#222426] transition-colors whitespace-nowrap shrink-0 cursor-pointer pb-0.5 ${
              activeView === 'parcurs'
                ? 'text-[#222426] font-semibold border-b-2 border-[#222426]'
                : ''
            }`}
          >
            Parcurs pas cu pas
          </button>
          <button
            onClick={() => {
              setActiveView('diagrame');
              updateUrlHash(`figura-${labFigureId}`);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className={`hover:text-[#222426] transition-colors whitespace-nowrap shrink-0 cursor-pointer pb-0.5 ${
              activeView === 'diagrame'
                ? 'text-[#222426] font-semibold border-b-2 border-[#222426]'
                : ''
            }`}
          >
            Laborator diagrame
          </button>
          <button
            onClick={() => {
              setActiveView('tabele');
              updateUrlHash('tabele');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className={`hover:text-[#222426] transition-colors whitespace-nowrap shrink-0 cursor-pointer pb-0.5 ${
              activeView === 'tabele'
                ? 'text-[#222426] font-semibold border-b-2 border-[#222426]'
                : ''
            }`}
          >
            Tabele și sinteză
          </button>
          <button
            onClick={() => {
              setActiveView('glosar');
              updateUrlHash('glosar');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className={`hover:text-[#222426] transition-colors whitespace-nowrap shrink-0 cursor-pointer pb-0.5 ${
              activeView === 'glosar'
                ? 'text-[#222426] font-semibold border-b-2 border-[#222426]'
                : ''
            }`}
          >
            Glosar și bibliografie
          </button>
          <button
            onClick={() => {
              setActiveView('pdf');
              updateUrlHash('pdf');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className={`hover:text-[#222426] transition-colors whitespace-nowrap shrink-0 cursor-pointer pb-0.5 ${
              activeView === 'pdf'
                ? 'text-[#222426] font-semibold border-b-2 border-[#222426]'
                : ''
            }`}
          >
            Document PDF
          </button>
        </nav>

        {/* Zone 3: 1 Primary Action */}
        <div className="flex items-center shrink-0">
          <button
            onClick={() => setIsSearchOpen(true)}
            className="px-2.5 sm:px-3.5 py-1.5 sm:py-2 text-xs font-semibold text-[#222426] bg-[#E5B822] border border-[#222426] hover:bg-[#D9A714] transition-colors whitespace-nowrap shrink-0 cursor-pointer flex items-center gap-1.5 sm:gap-2"
          >
            <Search className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Căutare în monografie</span>
            <span className="sm:hidden">Căutare</span>
          </button>
        </div>
      </header>

      {/* Mobile View Switcher (sticky below header on phones & tablets < lg) */}
      <div className="lg:hidden sticky top-[49px] z-30 bg-[#F4F1EA]/95 backdrop-blur-sm border-b border-[#222426] px-3 py-2 flex items-center gap-1.5 overflow-x-auto">
        {(
          [
            { id: 'parcurs', label: 'Parcurs pas cu pas' },
            { id: 'diagrame', label: 'Laborator diagrame' },
            { id: 'tabele', label: 'Tabele și sinteză' },
            { id: 'glosar', label: 'Glosar și bibliografie' },
            { id: 'pdf', label: 'Document PDF' }
          ] as const
        ).map((tab) => (
          <button
            key={tab.id}
            onClick={() => {
              setActiveView(tab.id);
              if (tab.id === 'parcurs') {
                updateUrlHash(`pasul-${currentStepNumber}`);
              } else if (tab.id === 'diagrame') {
                updateUrlHash(`figura-${labFigureId}`);
              } else {
                updateUrlHash(tab.id);
              }
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className={`px-2.5 py-1.5 text-xs font-medium border whitespace-nowrap shrink-0 cursor-pointer ${
              activeView === tab.id
                ? 'bg-[#222426] text-[#F6F5EE] border-[#222426]'
                : 'bg-[#F6F5EE] text-[#222426] border-[#8C9BA5]'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* MAIN WORKSPACE CONTAINER */}
      <main className="flex-1 max-w-[1440px] w-full mx-auto px-3 sm:px-8 py-5 sm:py-8">
        {/* VIEW 1: PARCURS PAS CU PAS (Main Monograph Reader) */}
        {activeView === 'parcurs' && (
          <div className="space-y-6">
            {/* Editorial Header Section */}
            <section className="bg-[#F4F1EA] border border-[#222426] p-4 sm:p-6">
              <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 pb-5 border-b border-[#D0D5D9]">
                <div className="max-w-3xl">
                  <div className="text-xs font-mono text-[#6E7376] mb-1.5">
                    Monografie științifică integrată (Versiunea 1.0 · Al șaselea domeniu operațional NATO ACT)
                  </div>
                  <h1 className="font-serif text-xl sm:text-3xl lg:text-4xl font-bold text-[#222426] headline-balance leading-tight">
                    Diagnosticul războiului cognitiv în România
                  </h1>
                  <p className="text-xs sm:text-sm font-normal text-[#2C3539] mt-2 leading-relaxed">
                    (Arhitectura instituțională, neurocognitivă și culturală a vulnerabilității și rezilienței societale în fața operațiunilor informaționale ruse și a ideologiei putiniste, versiunea 1.0)
                  </p>
                </div>

                {/* Display Register Controls */}
                <div className="flex flex-col sm:flex-row lg:flex-col items-start sm:items-center lg:items-end gap-2 shrink-0">
                  <div className="text-xs font-mono text-[#6E7376]">
                    Mod de afișare a conținutului
                  </div>
                  <div className="flex flex-wrap items-center gap-1.5">
                    <button
                      onClick={() => setReadingTab('ambele')}
                      className={`px-2.5 sm:px-3 py-1.5 text-xs font-medium border transition-colors cursor-pointer ${
                        readingTab === 'ambele'
                          ? 'bg-[#222426] text-[#F6F5EE] border-[#222426]'
                          : 'bg-[#F6F5EE] text-[#222426] border-[#8C9BA5]'
                      }`}
                    >
                      Text integral și două registre
                    </button>
                    <button
                      onClick={() => setReadingTab('integral')}
                      className={`px-2.5 sm:px-3 py-1.5 text-xs font-medium border transition-colors cursor-pointer ${
                        readingTab === 'integral'
                          ? 'bg-[#222426] text-[#F6F5EE] border-[#222426]'
                          : 'bg-[#F6F5EE] text-[#222426] border-[#8C9BA5]'
                      }`}
                    >
                      Doar textul integral
                    </button>
                    <button
                      onClick={() => setReadingTab('registre')}
                      className={`px-2.5 sm:px-3 py-1.5 text-xs font-medium border transition-colors cursor-pointer ${
                        readingTab === 'registre'
                          ? 'bg-[#222426] text-[#F6F5EE] border-[#222426]'
                          : 'bg-[#F6F5EE] text-[#222426] border-[#8C9BA5]'
                      }`}
                    >
                      Descompunere pe două registre
                    </button>
                  </div>
                </div>
              </div>

              {/* Selector pe Capitole (Introducere și Capitolele 1–6) */}
              <div className="mt-5">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <div className="text-xs font-mono font-semibold text-[#222426]">
                    Navigare pe capitole (Selectați pentru salt la primul subcapitol)
                  </div>
                  {selectedChapterFilter !== 'ALL' && (
                    <button
                      type="button"
                      onClick={() => setSelectedChapterFilter('ALL')}
                      className="text-xs font-mono text-[#6E7376] hover:text-[#222426] underline cursor-pointer"
                    >
                      Arată toate subcapitolele (1–19)
                    </button>
                  )}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
                  {[
                    {
                      num: 0,
                      title: 'Introducere',
                      sub: 'Cadrul ontologic și metodologic',
                      stepsLabel: 'Pasul 1 (Introducere)',
                      firstStep: 1
                    },
                    {
                      num: 1,
                      title: 'Capitolul 1',
                      sub: 'Vulnerabilitatea structurală internă',
                      stepsLabel: 'Subcap. 1.1–1.3 (Pașii 2–4)',
                      firstStep: 2
                    },
                    {
                      num: 2,
                      title: 'Capitolul 2',
                      sub: 'Vectorul rus și falsificarea axiologică',
                      stepsLabel: 'Subcap. 2.1–2.3 (Pașii 5–7)',
                      firstStep: 5
                    },
                    {
                      num: 3,
                      title: 'Capitolul 3',
                      sub: 'Mecanismul capturării în bucla OODA',
                      stepsLabel: 'Subcap. 3.1–3.3 (Pașii 8–10)',
                      firstStep: 8
                    },
                    {
                      num: 4,
                      title: 'Capitolul 4',
                      sub: 'Dinamica forțelor și filtrele Umbrei',
                      stepsLabel: 'Subcap. 4.1–4.3 (Pașii 11–13)',
                      firstStep: 11
                    },
                    {
                      num: 5,
                      title: 'Capitolul 5',
                      sub: 'Matricea Cipolla și bifurcația în criză',
                      stepsLabel: 'Subcap. 5.1–5.2 (Pașii 14–15)',
                      firstStep: 14
                    },
                    {
                      num: 6,
                      title: 'Capitolul 6',
                      sub: 'Protocolul de reconstrucție în trei faze',
                      stepsLabel: 'Subcap. 6.1–6.4 (Pașii 16–19)',
                      firstStep: 16
                    }
                  ].map((ch) => {
                    const isCurrentChapter = currentStep.chapterNumber === ch.num;
                    const isFilterActive = selectedChapterFilter === ch.num;
                    return (
                      <button
                        key={ch.num}
                        onClick={() => {
                          setSelectedChapterFilter(ch.num);
                          handleStepSelect(ch.firstStep);
                        }}
                        className={`p-3 border text-left transition-all cursor-pointer ${
                          isCurrentChapter || isFilterActive
                            ? 'border-2 border-[#222426] bg-[#E5B822]/25 shadow-sm'
                            : 'border-[#8C9BA5] bg-[#F6F5EE] hover:border-[#222426]'
                        }`}
                      >
                        <div className="flex items-center justify-between text-[11px] font-mono text-[#6E7376]">
                          <span className="font-bold text-[#222426]">{ch.title}</span>
                          <span>{ch.stepsLabel}</span>
                        </div>
                        <div className="font-serif text-xs sm:text-sm font-semibold text-[#222426] mt-1 leading-snug">
                          {ch.sub}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step-by-Step Horizontal Rail (Subcapitolele 1 la 19) */}
              <div className="mt-5 pt-4 border-t border-[#D0D5D9]">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5">
                  <div className="text-xs font-mono text-[#222426]">
                    <span className="font-bold">Subcapitole: </span>
                    <span>Pasul {currentStep.stepNumber} din 19 ({currentStep.code})</span>
                    {selectedChapterFilter !== 'ALL' && (
                      <span className="text-[#6E7376] ml-1.5">(filtrat pe Capitolul {selectedChapterFilter})</span>
                    )}
                  </div>
                  <div className="flex flex-wrap items-center gap-1.5 text-xs font-mono">
                    <span className="text-[#6E7376]">Filtru straturi (A, B, C)</span>
                    {(['ALL', 'A', 'B', 'C'] as const).map((st) => (
                      <button
                        key={st}
                        onClick={() => setSelectedStratumHighlight(st)}
                        className={`px-2 py-0.5 border cursor-pointer whitespace-nowrap shrink-0 ${
                          selectedStratumHighlight === st
                            ? 'bg-[#222426] text-[#F6F5EE] border-[#222426]'
                            : 'bg-[#F6F5EE] text-[#222426] border-[#8C9BA5]'
                        }`}
                      >
                        {st === 'ALL' ? 'Toate' : `Stratul ${st}`}
                      </button>
                    ))}
                  </div>
                </div>

                <div ref={railContainerRef} className="flex items-center gap-1.5 overflow-x-auto pb-2 scroll-smooth">
                  {filteredStepsForRail.map((step) => {
                    const isSelected = step.stepNumber === currentStepNumber;
                    const matchesStratum =
                      selectedStratumHighlight === 'ALL' ||
                      step.dominantStrata.includes(selectedStratumHighlight);
                    return (
                      <button
                        key={step.id}
                        ref={isSelected ? activeStepButtonRef : null}
                        onClick={() => handleStepSelect(step.stepNumber)}
                        className={`px-2.5 py-1.5 text-xs font-mono border transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                          isSelected
                            ? 'bg-[#222426] text-[#F6F5EE] border-[#222426] font-bold'
                            : matchesStratum
                            ? 'bg-[#F6F5EE] text-[#222426] border-[#222426] hover:bg-[#E5B822]/20'
                            : 'bg-[#F4F1EA] text-[#8C9BA5] border-[#D0D5D9] opacity-50'
                        }`}
                        title={step.title}
                      >
                        {step.stepNumber}. {step.code.replace('Subcapitolul ', 'Subcap. ')}
                      </button>
                    );
                  })}
                </div>
              </div>
            </section>

                {/* TWO-COLUMN ASYMMETRIC READING & SIMULATION WORKSPACE */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* LEFT COLUMN (7 Cols): Verbatim Text, Executive Synthesis & Dual Register Decomposition */}
                  <div className="lg:col-span-7 space-y-6">
                    <article
                      id="reading-stage"
                      ref={readingStageRef}
                      className="scroll-mt-28 bg-[#F6F5EE] border border-[#222426] p-4 sm:p-8"
                    >
                      {/* Step Header & Prev/Next Top Controls */}
                      <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-4 border-b border-[#D0D5D9]">
                        <div className="text-xs font-mono text-[#6E7376]">
                          Pasul {currentStep.stepNumber} din 19 · {currentStep.chapterTitle} · Straturi active ({currentStep.dominantStrata.join(', ')})
                        </div>
                        <div className="flex flex-wrap items-center gap-2">
                          <button
                            disabled={currentStepNumber <= 1}
                            onClick={() => handleStepSelect(currentStepNumber - 1)}
                            className="px-2.5 py-1 text-xs font-mono border border-[#222426] bg-[#F4F1EA] hover:bg-[#E5B822]/20 disabled:opacity-40 disabled:pointer-events-none cursor-pointer flex items-center gap-1 whitespace-nowrap shrink-0"
                          >
                            <ArrowLeft className="w-3.5 h-3.5" />
                            <span>Pasul anterior</span>
                          </button>
                          <button
                            disabled={currentStepNumber >= ALL_SUBCHAPTER_STEPS.length}
                            onClick={() => handleStepSelect(currentStepNumber + 1)}
                            className="px-2.5 py-1 text-xs font-mono border border-[#222426] bg-[#E5B822] hover:bg-[#D9A714] disabled:opacity-40 disabled:pointer-events-none cursor-pointer flex items-center gap-1 font-semibold whitespace-nowrap shrink-0"
                          >
                            <span>Pasul următor</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>

                      {/* Dual-Audience Reading Mode Toggle: Academic Full Text vs. Executive Synthesis */}
                      <div className="mb-5 p-3 bg-[#F4F1EA] border border-[#222426] flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                        <div className="text-xs font-mono text-[#222426] font-semibold">
                          Registru de lectură (Comutator dublu pentru cercetători și decidenți)
                        </div>
                        <div className="flex flex-wrap items-center gap-1.5">
                          <button
                            type="button"
                            onClick={() => handleAudienceModeChange('academic')}
                            className={`px-3 py-1.5 text-xs font-mono border transition-colors cursor-pointer ${
                              audienceMode === 'academic'
                                ? 'bg-[#222426] text-[#F6F5EE] border-[#222426] font-bold'
                                : 'bg-[#F6F5EE] text-[#222426] border-[#8C9BA5] hover:border-[#222426]'
                            }`}
                          >
                            Text integral academic
                          </button>
                          <button
                            type="button"
                            onClick={() => handleAudienceModeChange('executive')}
                            className={`px-3 py-1.5 text-xs font-mono border transition-colors cursor-pointer ${
                              audienceMode === 'executive'
                                ? 'bg-[#E5B822] text-[#222426] border-[#222426] font-bold'
                                : 'bg-[#F6F5EE] text-[#222426] border-[#8C9BA5] hover:border-[#222426]'
                            }`}
                          >
                            Sinteză executivă (decidenți)
                          </button>
                        </div>
                      </div>

                      {/* Social Share Bar for Current Section */}
                      <div className="mb-5 pb-3 border-b border-[#D0D5D9] flex flex-wrap items-center justify-between gap-2">
                        <SocialShareButtons
                          url={`https://laurentiustaicu.github.io/diagnosticul-razboiului-cognitiv-romania/share/pasul-${currentStep.stepNumber}.html`}
                          title={`${currentStep.title} (Diagnosticul războiului cognitiv în România)`}
                          label="Distribuie această secțiune pe"
                        />
                      </div>

                      {/* Chapter Kicker & Subchapter Title */}
                      <div className="text-xs font-mono font-semibold text-[#6E7376] mb-1.5">
                        {currentStep.chapterNumber === 0
                          ? currentStep.chapterTitle
                          : `Capitolul ${currentStep.chapterNumber} · ${currentStep.chapterTitle.replace(/^Capitolul\s+[0-9]+:\s*/, '').replace(/^[0-9]+\.\s*/, '')}`}
                      </div>
                      <h2 className="font-serif text-xl sm:text-3xl font-bold text-[#222426] headline-balance leading-snug">
                        {currentStep.title}
                      </h2>
                      {currentStep.subtitle && (
                        <p className="font-serif text-base sm:text-lg font-normal text-[#2C3539] mt-2 leading-relaxed">
                          {currentStep.subtitle}
                        </p>
                      )}

                      {/* Systemic Thesis Box */}
                      <div className="mt-5 p-4 bg-[#F4F1EA] border border-[#222426]">
                        <div className="text-xs font-mono font-semibold text-[#222426] mb-1">
                          Sinteză cauzală și teză structurală
                        </div>
                        <p className="text-xs sm:text-sm text-[#222426] leading-relaxed">
                          {currentStep.summaryThesis}
                        </p>
                      </div>

                      {/* EXECUTIVE SYNTHESIS VIEW (3 Structured Decision Cards + Institutional Protocol Matrix) */}
                      {audienceMode === 'executive' && (
                        <div className="mt-6 p-4 sm:p-5 bg-[#F4F1EA] border-2 border-[#222426] space-y-5">
                          <div className="border-b border-[#222426] pb-3">
                            <div className="text-xs font-mono font-bold text-[#222426] uppercase tracking-wider">
                              Sinteză executivă de capitol pentru decidenți instituționali și politici publice
                            </div>
                            <h3 className="font-serif text-lg sm:text-xl font-bold text-[#222426] mt-1">
                              {currentExecutiveSummary.chapterTitle}
                            </h3>
                            <p className="text-xs sm:text-sm font-mono text-[#6E7376] mt-1">
                              Decupaj metodologic · {currentStep.code} (Pasul {currentStep.stepNumber} din 19)
                            </p>
                          </div>

                          <div className="grid grid-cols-1 gap-3.5">
                            {currentExecutiveSummary.executiveSynthesis.map((pt, idx) => (
                              <div
                                key={pt.id}
                                className={`p-4 border-2 bg-[#F6F5EE] ${
                                  idx === 1
                                    ? 'border-[#F01E1E]'
                                    : idx === 2
                                    ? 'border-[#D9A714]'
                                    : 'border-[#222426]'
                                }`}
                              >
                                <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                                  <span
                                    className={`px-2 py-0.5 text-[11px] font-mono font-bold ${
                                      idx === 1
                                        ? 'bg-[#F01E1E] text-[#F6F5EE]'
                                        : idx === 2
                                        ? 'bg-[#E5B822] text-[#222426]'
                                        : 'bg-[#222426] text-[#F6F5EE]'
                                    }`}
                                  >
                                    {pt.title}
                                  </span>
                                </div>
                                <p className="font-serif text-sm sm:text-base font-bold text-[#222426] mb-1.5 leading-snug">
                                  {pt.takeaway}
                                </p>
                                <p className="text-xs sm:text-sm text-[#2C3539] leading-relaxed">
                                  {pt.implication}
                                </p>
                              </div>
                            ))}
                          </div>

                          {/* In executive mode, display the Institutional Operationalization Matrix */}
                          <div className="pt-4 border-t border-[#222426] space-y-3">
                            <div className="text-xs font-mono font-bold text-[#222426]">
                              Matricea de operaționalizare instituțională (România și UE: DNSC, ANCOM, CSAT, CNA, Ministerul Educației, Biserica Ortodoxă Română)
                            </div>
                            <div className="space-y-2.5">
                              {OPERATIONAL_PROTOCOL_TABLE.map((row) => (
                                <div
                                  key={row.id}
                                  className="p-3.5 bg-[#F6F5EE] border border-[#222426] text-xs space-y-1.5"
                                >
                                  <div className="flex flex-wrap items-center justify-between gap-2 font-mono font-bold text-[#222426] border-b border-[#D0D5D9] pb-1">
                                    <span>{row.phaseTitle}</span>
                                    <span className="text-[#6E7376]">{row.horizon}</span>
                                  </div>
                                  <div className="font-serif font-semibold text-sm text-[#222426]">
                                    {row.targetObjective}
                                  </div>
                                  <p className="text-[#2C3539] leading-relaxed">
                                    {row.concreteIntervention}
                                  </p>
                                  <div className="pt-1 text-[11px] font-mono text-[#222426]">
                                    <span className="font-bold">Instituții responsabile: </span>
                                    {row.responsibleActors}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="pt-2 flex justify-end">
                            <button
                              type="button"
                              onClick={() => handleAudienceModeChange('academic')}
                              className="px-3.5 py-2 text-xs font-mono font-semibold bg-[#222426] text-[#F6F5EE] border border-[#222426] hover:bg-[#2C3539] cursor-pointer"
                            >
                              Comută la textul integral academic al secțiunii →
                            </button>
                          </div>
                        </div>
                      )}

                      {/* Interactive Concept Anchors */}
                      <div className="mt-5 pt-4 border-t border-[#D0D5D9]">
                        <div className="text-xs font-mono text-[#6E7376] mb-2">
                          Concepte-cheie în această secțiune (selectați pentru descompunere în panoul de inspecție)
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {currentStep.keyConceptIds.map((cid) => {
                            const conceptObj = GLOSSARY_CONCEPTS.find((c) => c.id === cid);
                            if (!conceptObj) return null;
                            const isSelected = activeConceptId === cid;
                            return (
                              <button
                                key={cid}
                                onClick={() => handleConceptSelect(cid)}
                                className={`px-3 py-1.5 text-xs font-medium border transition-colors cursor-pointer ${
                                  isSelected
                                    ? 'bg-[#E5B822] text-[#222426] border-[#222426] font-semibold'
                                    : 'bg-[#F4F1EA] text-[#222426] border-[#8C9BA5] hover:border-[#222426]'
                                }`}
                              >
                                {conceptObj.term}
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* DUAL REGISTER DECOMPOSITION (Theoretical vs. Empirical) */}
                      {(readingTab === 'registre' || readingTab === 'ambele') && (
                        <div className="mt-6 pt-6 border-t border-[#222426]">
                          <div className="text-xs font-mono uppercase tracking-wider text-[#6E7376] mb-1">
                            Anatomia tensiunii și descompunerea pe două registre (Master Blueprint)
                          </div>
                          <h3 className="font-serif text-lg font-bold text-[#222426] mb-4">
                            Stratul teoretic și conceptual în oglindă cu realitatea practică și istorică
                          </h3>

                          <div className="space-y-4">
                            {currentStep.dualRegister.map((dr) => (
                              <div
                                key={dr.id}
                                className="grid grid-cols-1 md:grid-cols-2 border border-[#222426] bg-[#F4F1EA]"
                              >
                                {/* Left: Theoretical Register */}
                                <div className="p-4 border-b md:border-b-0 md:border-r border-[#222426]">
                                  <div className="text-xs font-mono text-[#6E7376] mb-1">
                                    Stratul teoretic și conceptual (Stratul {dr.stratum})
                                  </div>
                                  <div className="font-serif text-sm font-bold text-[#222426]">
                                    {dr.theoreticalConcept}
                                  </div>
                                  <div className="text-xs font-mono text-[#6E7376] mt-0.5 mb-2">
                                    {dr.theoreticalAuthor}
                                  </div>
                                  <p className="text-xs sm:text-sm text-[#222426] leading-relaxed">
                                    {dr.theoreticalMechanism}
                                  </p>
                                </div>

                                {/* Right: Empirical Reality */}
                                <div
                                  className={`p-4 ${
                                    dr.systemicOutcome === 'tension'
                                      ? 'bg-[#F01E1E]/5'
                                      : 'bg-[#E5B822]/15'
                                  }`}
                                >
                                  <div
                                    className={`text-xs font-mono font-semibold mb-1 ${
                                      dr.systemicOutcome === 'tension'
                                        ? 'text-[#F01E1E]'
                                        : 'text-[#222426]'
                                    }`}
                                  >
                                    {dr.systemicOutcome === 'tension'
                                      ? 'Stratul empiric (falie structurală și vulnerabilitate)'
                                      : 'Stratul empiric (mecanism de echilibrare și reziliență)'}
                                  </div>
                                  <p className="text-xs sm:text-sm text-[#222426] leading-relaxed mt-2">
                                    {dr.empiricalReality}
                                  </p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* FULL VERBATIM MONOGRAPH TEXT (Direct in Academic Mode, Accordion Fold in Executive Mode) */}
                      {audienceMode === 'executive' ? (
                        <div className="mt-8 pt-6 border-t border-[#222426]">
                          <div className="p-4 sm:p-5 bg-[#F4F1EA] border border-[#222426]">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                              <div>
                                <div className="text-xs font-mono font-bold text-[#222426] uppercase tracking-wider">
                                  Textul academic integral al secțiunii (Fidelitate completă)
                                </div>
                                <div className="text-xs text-[#6E7376] mt-0.5">
                                  {isAcademicAccordionOpen
                                    ? 'Textul complet al monografiei este expandat mai jos.'
                                    : 'Restrâns în modul executiv. Puteți expandata analiza completă fără a părăsi sinteza decizională.'}
                                </div>
                              </div>
                              <button
                                type="button"
                                onClick={() => setIsAcademicAccordionOpen((prev) => !prev)}
                                className="px-4 py-2 text-xs font-mono font-bold bg-[#222426] text-[#F6F5EE] hover:bg-[#34383C] transition-colors cursor-pointer shrink-0"
                              >
                                {isAcademicAccordionOpen
                                  ? 'Restrânge analiza academică ↑'
                                  : 'Expandează analiza academică integrală a capitolului ↓'}
                              </button>
                            </div>

                            {isAcademicAccordionOpen && (
                              <div className="mt-5 pt-4 border-t border-[#D0D5D9]">
                                <div className="space-y-5 font-serif text-base sm:text-[17px] text-[#222426] leading-[1.8] max-w-[70ch]">
                                  {currentStep.paragraphs.map((paragraph, index) => {
                                    const isFigureCaption = paragraph.startsWith('Figura ');
                                    if (isFigureCaption) {
                                      return (
                                        <div
                                          key={index}
                                          className="p-4 bg-[#F6F5EE] border border-[#222426] text-xs sm:text-sm italic text-[#2C3539] leading-relaxed"
                                        >
                                          {paragraph}
                                        </div>
                                      );
                                    }
                                    return (
                                      <p
                                        key={index}
                                        className={
                                          index === 0
                                            ? 'first-letter:text-4xl first-letter:font-serif first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-[#222426]'
                                            : ''
                                        }
                                      >
                                        {renderParagraphWithCitations(paragraph)}
                                      </p>
                                    );
                                  })}
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      ) : (
                        (readingTab === 'integral' || readingTab === 'ambele') && (
                          <div className="mt-6 pt-6 border-t border-[#222426]">
                            <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                              <div className="text-xs font-mono uppercase tracking-wider text-[#6E7376]">
                                Textul integral al secțiunii din monografie (Fidelitate textuală completă)
                              </div>
                              <div className="text-[11px] font-mono text-[#6E7376]">
                                Selectați citările (autor, an) sau termenii subliniați pentru explicații contextuale
                              </div>
                            </div>
                            <div className="space-y-5 font-serif text-base sm:text-[17px] text-[#222426] leading-[1.8] max-w-[70ch]">
                              {currentStep.paragraphs.map((paragraph, index) => {
                                const isFigureCaption = paragraph.startsWith('Figura ');
                                if (isFigureCaption) {
                                  return (
                                    <div
                                      key={index}
                                      className="p-4 bg-[#F4F1EA] border border-[#222426] text-xs sm:text-sm italic text-[#2C3539] leading-relaxed"
                                    >
                                      {paragraph}
                                    </div>
                                  );
                                }
                                return (
                                  <p
                                    key={index}
                                    className={
                                      index === 0
                                        ? 'first-letter:text-4xl first-letter:font-serif first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-[#222426]'
                                        : ''
                                    }
                                  >
                                    {renderParagraphWithCitations(paragraph)}
                                  </p>
                                );
                              })}
                            </div>
                          </div>
                        )
                      )}

                      {/* Cited Authors in this Step (Interactive Pills) */}
                      <div className="mt-8 pt-4 border-t border-[#D0D5D9]">
                        <div className="text-xs font-mono font-semibold text-[#222426] mb-2">
                          Autori și lucrări de referință citate în această secțiune (selectați pentru verificarea sursei în bibliografie)
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {currentStep.citedAuthorNames.map((authorLabel, idx) => {
                            const isSelected = selectedAuthorCitation === authorLabel;
                            return (
                              <button
                                key={idx}
                                type="button"
                                onClick={() => handleCitationSelect(authorLabel)}
                                className={`px-2.5 py-1 text-xs font-mono border transition-colors cursor-pointer ${
                                  isSelected
                                    ? 'bg-[#222426] text-[#F6F5EE] border-[#222426] font-bold'
                                    : 'bg-[#F4F1EA] text-[#222426] border-[#8C9BA5] hover:border-[#222426]'
                                }`}
                              >
                                {authorLabel}
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* Bottom Step Navigation */}
                      <div className="mt-6 pt-5 border-t-2 border-[#222426] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                        {currentStepNumber > 1 ? (
                          <button
                            onClick={() => handleStepSelect(currentStepNumber - 1)}
                            className="px-4 py-2.5 text-xs font-medium border border-[#222426] bg-[#F4F1EA] hover:bg-[#E5B822]/20 transition-colors cursor-pointer flex items-center gap-2"
                          >
                            <ArrowLeft className="w-4 h-4 shrink-0" />
                            <span className="truncate">
                              Pasul {currentStepNumber - 1} ({ALL_SUBCHAPTER_STEPS[currentStepNumber - 2].code})
                            </span>
                          </button>
                        ) : (
                          <div />
                        )}

                        {currentStepNumber < ALL_SUBCHAPTER_STEPS.length ? (
                          <button
                            onClick={() => handleStepSelect(currentStepNumber + 1)}
                            className="px-5 py-2.5 text-xs font-semibold border border-[#222426] bg-[#E5B822] hover:bg-[#D9A714] transition-colors cursor-pointer flex items-center justify-center gap-2"
                          >
                            <span className="truncate">
                              Pasul următor ({ALL_SUBCHAPTER_STEPS[currentStepNumber].code})
                            </span>
                            <ArrowRight className="w-4 h-4 shrink-0" />
                          </button>
                        ) : (
                          <button
                            onClick={() => {
                              setActiveView('tabele');
                              updateUrlHash('tabele');
                              window.scrollTo({ top: 0, behavior: 'smooth' });
                            }}
                            className="px-5 py-2.5 text-xs font-semibold border border-[#222426] bg-[#E5B822] hover:bg-[#D9A714] transition-colors cursor-pointer flex items-center justify-center gap-2"
                          >
                            <span>Explorează Tabelele 1 și 2 de sinteză</span>
                            <ArrowRight className="w-4 h-4 shrink-0" />
                          </button>
                        )}
                      </div>
                    </article>
                  </div>

                  {/* RIGHT COLUMN (5 Cols): Synchronized Interactive Figure, Citation Dossier & Concept Inspector */}
                  <aside
                    id="inspector-panel"
                    className="lg:col-span-5 space-y-6 lg:sticky lg:top-20"
                  >

                    {/* Active Bibliographic Citation Dossier (when an inline citation or author pill is clicked) */}
                    {selectedAuthorCitation && (
                      <div
                        ref={citationDossierRef}
                        className="scroll-mt-28 bg-[#F6F5EE] border-2 border-[#222426] p-4 sm:p-5 space-y-3"
                      >
                        <div className="flex items-center justify-between gap-2 pb-2 border-b border-[#222426]">
                          <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-[#222426]">
                            <BookOpen className="w-3.5 h-3.5 shrink-0" />
                            <span>Dosarul referinței bibliografice ({selectedAuthorCitation})</span>
                          </div>
                          <button
                            type="button"
                            onClick={() => setSelectedAuthorCitation(null)}
                            className="p-1 border border-[#222426] bg-[#F4F1EA] hover:bg-[#E5B822]/30 cursor-pointer shrink-0"
                            aria-label="Închide dosarul referinței"
                          >
                            <X className="w-3.5 h-3.5 text-[#222426]" />
                          </button>
                        </div>

                        {matchedBibliographyForInspector.length > 0 ? (
                          <div className="space-y-2.5 max-h-60 overflow-y-auto pr-1">
                            {matchedBibliographyForInspector.map((bib) => (
                              <div
                                key={bib.id}
                                className="p-3 bg-[#F4F1EA] border border-[#222426] text-xs"
                              >
                                <div className="flex items-center justify-between font-mono text-[11px] text-[#6E7376] mb-1">
                                  <span>
                                    {bib.authors} ({bib.year})
                                  </span>
                                  <span>{bib.domain}</span>
                                </div>
                                <p className="font-serif text-[#222426] leading-relaxed">
                                  {bib.fullCitation}
                                </p>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <p className="text-xs text-[#6E7376]">
                            Referință contextuală în cadrul secțiunii curente.
                          </p>
                        )}

                        {matchedSubchaptersForAuthor.length > 0 && (
                          <div className="pt-2 border-t border-[#D0D5D9]">
                            <div className="text-[11px] font-mono text-[#6E7376] mb-1.5">
                              Secțiuni din monografie în care apare această referință ({matchedSubchaptersForAuthor.length})
                            </div>
                            <div className="flex flex-wrap gap-1.5">
                              {matchedSubchaptersForAuthor.map((st) => (
                                <button
                                  key={st.id}
                                  type="button"
                                  onClick={() => handleStepSelect(st.stepNumber)}
                                  className={`px-2 py-1 text-[11px] font-mono border cursor-pointer ${
                                    st.stepNumber === currentStepNumber
                                      ? 'bg-[#222426] text-[#F6F5EE] border-[#222426] font-bold'
                                      : 'bg-[#F4F1EA] text-[#222426] border-[#8C9BA5] hover:border-[#222426]'
                                  }`}
                                >
                                  Pasul {st.stepNumber} ({st.code.replace('Subcapitolul ', 'Cap. ')})
                                </button>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Mobile-only quick return button to the reading stage */}
                        <div className="lg:hidden pt-2 border-t border-[#D0D5D9]">
                          <button
                            type="button"
                            onClick={scrollToReadingStage}
                            className="w-full px-3 py-1.5 text-xs font-mono bg-[#F4F1EA] border border-[#222426] text-[#222426] flex items-center justify-center gap-1.5 cursor-pointer"
                          >
                            <ArrowUp className="w-3.5 h-3.5" />
                            <span>Înapoi la textul secțiunii</span>
                          </button>
                        </div>
                      </div>
                    )}

                    {/* Active Concept Card */}
                    {activeGlossaryConcept && (
                      <div
                        ref={conceptCardRef}
                        className="scroll-mt-28 bg-[#F4F1EA] border border-[#222426] p-4 sm:p-5"
                      >
                        <div className="flex items-center justify-between gap-2 text-xs font-mono text-[#6E7376] pb-2 mb-2 border-b border-[#D0D5D9]">
                          <span>Fișă conceptuală sincronizată (Stratul {activeGlossaryConcept.stratum})</span>
                          <span>{activeGlossaryConcept.domain}</span>
                        </div>
                        <h3 className="font-serif text-lg font-bold text-[#222426]">
                          {activeGlossaryConcept.term}
                        </h3>
                        <div className="text-xs font-mono text-[#6E7376] mt-0.5 mb-2.5">
                          {activeGlossaryConcept.authors}
                        </div>
                        <p className="text-xs sm:text-sm text-[#222426] leading-relaxed mb-3">
                          {activeGlossaryConcept.definition}
                        </p>
                        <div
                          className={`p-3 border text-xs leading-relaxed ${
                            activeGlossaryConcept.polarity === 'tension'
                              ? 'border-[#F01E1E] bg-[#F01E1E]/5 text-[#222426]'
                              : 'border-[#D9A714] bg-[#E5B822]/20 text-[#222426]'
                          }`}
                        >
                          <span className="font-mono font-semibold block mb-0.5">
                            Aplicație în diagnosticul României
                          </span>
                          {activeGlossaryConcept.monographContext}
                        </div>

                        {/* Mobile-only quick return button to the reading stage */}
                        <div className="lg:hidden mt-3 pt-2.5 border-t border-[#D0D5D9]">
                          <button
                            type="button"
                            onClick={scrollToReadingStage}
                            className="w-full px-3 py-1.5 text-xs font-mono bg-[#F6F5EE] border border-[#222426] text-[#222426] flex items-center justify-center gap-1.5 cursor-pointer"
                          >
                            <ArrowUp className="w-3.5 h-3.5" />
                            <span>Înapoi la textul secțiunii</span>
                          </button>
                        </div>
                      </div>
                    )}

                    {/* Synchronized Interactive Figure for the Current Chapter */}
                    {currentStep.linkedFigureId && (
                      <InteractiveFigures
                        figureId={currentStep.linkedFigureId}
                        showSelector={false}
                      />
                    )}
                  </aside>
                </div>
              </div>
            )}

        {/* VIEW 2: LABORATORUL CELOR 7 DIAGRAME DE SISTEM */}
        {activeView === 'diagrame' && (
          <div className="space-y-6">
            <div className="bg-[#F4F1EA] border border-[#222426] p-4 sm:p-5">
              <div className="text-xs font-mono text-[#6E7376] mb-1">
                Hărți sistemice 2D în stil gravură vectorială (Figurile 1–7 din monografie)
              </div>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#222426]">
                Laboratorul diagramelor cauzale din monografie
              </h2>
              <p className="text-xs sm:text-sm text-[#6E7376] mt-1">
                Interacționați cu toate cele șapte diagrame vectoriale ale lucrării pentru a inspecta propagarea stresului alostatic, dubla falsificare axiologică, deturnarea buclei OODA, filtrele Umbrei colective, matricea lui Cipolla, bifurcația Track A / Track B și protocolul în trei faze.
              </p>
            </div>

            <InteractiveFigures
              figureId={labFigureId}
              onSelectFigure={(id) => {
                setLabFigureId(id);
                updateUrlHash(`figura-${id}`);
              }}
              showSelector={true}
            />
          </div>
        )}

        {/* VIEW 3: TABELELE 1 & 2 ȘI GRUPUL DE CONTROL REGIONAL */}
        {activeView === 'tabele' && <TablesAndRegionalView />}

        {/* VIEW 4: GLOSAR, BIBLIOGRAFIE ȘI MASTER BLUEPRINT */}
        {activeView === 'glosar' && <GlossaryAndBibliographyView />}

        {/* VIEW 5: DOCUMENT PDF ORIGINAL */}
        {activeView === 'pdf' && <PdfDocumentView />}
      </main>

      {/* CLEAN EDITORIAL FOOTER */}
      <footer className="mt-12 border-t border-[#222426] bg-[#F4F1EA] px-4 sm:px-8 py-6">
        <div className="max-w-[1440px] mx-auto space-y-4">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-4 border-b border-[#D0D5D9]">
            <div className="text-xs text-[#6E7376]">
              <span className="font-serif font-bold text-[#222426]">
                Diagnosticul războiului cognitiv în România (Versiunea 1.0)
              </span>
              <span> · </span>
              <span>
                Arhitectura instituțională, neurocognitivă și culturală a vulnerabilității și rezilienței societale
              </span>
            </div>
            <SocialShareButtons
              url="https://laurentiustaicu.github.io/diagnosticul-razboiului-cognitiv-romania/"
              label="Distribuie platforma pe"
            />
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-[#6E7376]">
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => {
                  setIsPortalOpen(false);
                  updateUrlHash('');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="hover:text-[#222426] transition-colors cursor-pointer"
              >
                Copertă (Landing page)
              </button>
              <span>·</span>
              <button
                onClick={() => {
                  setActiveView('parcurs');
                  updateUrlHash(`pasul-${currentStepNumber}`);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="hover:text-[#222426] transition-colors cursor-pointer"
              >
                Parcurs pe capitole și subcapitole (19 secțiuni)
              </button>
              <span>·</span>
              <button
                onClick={() => {
                  setActiveView('diagrame');
                  updateUrlHash(`figura-${labFigureId}`);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="hover:text-[#222426] transition-colors cursor-pointer"
              >
                Cele 7 figuri vectoriale
              </button>
              <span>·</span>
              <button
                onClick={() => {
                  setActiveView('pdf');
                  updateUrlHash('pdf');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="hover:text-[#222426] transition-colors cursor-pointer"
              >
                Document PDF original
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* GLOBAL SEARCH MODAL */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onNavigateToStep={(stepNum) => {
          setActiveView('parcurs');
          handleStepSelect(stepNum);
        }}
      />
    </div>
  );
}

export default App;


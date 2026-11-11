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
import { SearchModal } from './components/PdfAndSearchModal';
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
  Minimize2,
  Maximize2,
  X
} from 'lucide-react';

type ActiveNavView = 'parcurs' | 'diagrame' | 'tabele' | 'glosar';
type AudienceReadingMode = 'academic' | 'executive';

/**
 * Matches a parenthetical string or author label against BIBLIOGRAPHY_DATA
 */
function findMatchingBibliographyItems(citationText: string): BibliographyItem[] {
  const cleaned = citationText
    .replace(/^\(|\)$/g, '')
    .toLowerCase();

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
  const [isReaderMode, setIsReaderMode] = useState<boolean>(false);

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
      window.history.replaceState({}, '', url.toString());
    } catch {
      // ignore
    }
  }, []);

  const [activeConceptId, setActiveConceptId] = useState<string | undefined>(
    initialHash.activeConceptId ?? ALL_SUBCHAPTER_STEPS[0].keyConceptIds[0]
  );
  const [selectedAuthorCitation, setSelectedAuthorCitation] = useState<string | null>(null);
  const [labFigureId, setLabFigureId] = useState<number>(initialHash.labFigureId ?? 1);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);

  const readingStageRef = useRef<HTMLDivElement>(null);
  const conceptCardRef = useRef<HTMLDivElement>(null);
  const citationDossierRef = useRef<HTMLDivElement>(null);
  const activeStepButtonRef = useRef<HTMLButtonElement>(null);
  const railContainerRef = useRef<HTMLDivElement>(null);

  const currentStep =
    ALL_SUBCHAPTER_STEPS.find((s) => s.stepNumber === currentStepNumber) ||
    ALL_SUBCHAPTER_STEPS[0];

  const currentExecutiveSummary =
    CHAPTER_EXECUTIVE_SUMMARIES.find(
      (ch) => ch.chapterNumber === currentStep.chapterNumber
    ) || CHAPTER_EXECUTIVE_SUMMARIES[0];

  const activeGlossaryConcept = GLOSSARY_CONCEPTS.find((c) => c.id === activeConceptId);

  const matchedBibliographyForInspector = selectedAuthorCitation
    ? findMatchingBibliographyItems(selectedAuthorCitation)
    : [];

  const matchedSubchaptersForAuthor = selectedAuthorCitation
    ? ALL_SUBCHAPTER_STEPS.filter((st) =>
        st.citedAuthorNames.some((authorStr) =>
          authorStr.toLowerCase().includes(selectedAuthorCitation.toLowerCase())
        )
      )
    : [];

  const updateUrlHash = useCallback((hashStr: string) => {
    if (typeof window === 'undefined') return;
    const cleanHash = hashStr ? `#${hashStr.replace(/^#/, '')}` : '';
    if (window.location.hash !== cleanHash) {
      window.history.replaceState(null, '', cleanHash || window.location.pathname);
    }
  }, []);

  const scrollToReadingStage = useCallback(() => {
    if (readingStageRef.current) {
      readingStageRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  const handleStepSelect = useCallback(
    (stepNum: number) => {
      const stepObj = ALL_SUBCHAPTER_STEPS.find((s) => s.stepNumber === stepNum);
      if (!stepObj) return;

      setCurrentStepNumber(stepNum);
      setSelectedAuthorCitation(null);

      if (stepObj.keyConceptIds.length > 0) {
        setActiveConceptId(stepObj.keyConceptIds[0]);
      }

      updateUrlHash(`pasul-${stepNum}`);
      scrollToReadingStage();
    },
    [updateUrlHash, scrollToReadingStage]
  );

  const handleCitationSelect = useCallback(
    (authorLabel: string) => {
      setSelectedAuthorCitation((prev) => (prev === authorLabel ? null : authorLabel));

      setTimeout(() => {
        if (citationDossierRef.current) {
          citationDossierRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 50);
    },
    []
  );

  const handleConceptSelect = useCallback((conceptId: string) => {
    setActiveConceptId(conceptId);
    setTimeout(() => {
      if (conceptCardRef.current) {
        conceptCardRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 50);
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      const target = parseHashState(window.location.hash);
      setIsPortalOpen(target.isPortalOpen);

      if (target.activeView) {
        setActiveView(target.activeView);
      }
      if (target.currentStepNumber !== undefined) {
        setCurrentStepNumber(target.currentStepNumber);
      }
      if (target.selectedChapterFilter !== undefined) {
        setSelectedChapterFilter(target.selectedChapterFilter);
      }
      if (target.activeConceptId !== undefined) {
        setActiveConceptId(target.activeConceptId);
      }
      if (target.labFigureId !== undefined) {
        setLabFigureId(target.labFigureId);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    if (activeStepButtonRef.current && railContainerRef.current) {
      const container = railContainerRef.current;
      const button = activeStepButtonRef.current;
      const containerWidth = container.clientWidth;
      const buttonLeft = button.offsetLeft;
      const buttonWidth = button.clientWidth;
      const targetScroll = buttonLeft - containerWidth / 2 + buttonWidth / 2;

      container.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      });
    }
  }, [currentStepNumber]);

  const filteredStepsForRail = ALL_SUBCHAPTER_STEPS.filter((step) => {
    if (selectedChapterFilter === 'ALL') return true;
    return step.chapterNumber === selectedChapterFilter;
  });

  const renderParagraphWithCitations = (paragraphText: string) => {
    const citationRegex = /\(([^)]+?\b(?:19\d{2}|20\d{2})[a-z]?\b[^)]*)\)/g;
    const matchedConceptsInParagraph = new Set<string>();

    const applyGlossaryTooltips = (
      textSegment: string,
      keyPrefix: string
    ): React.ReactNode[] => {
      const nodes: React.ReactNode[] = [];
      let remaining = textSegment;
      let segmentCounter = 0;

      while (remaining.length > 0) {
        let earliestMatch: {
          index: number;
          length: number;
          matchedText: string;
          conceptId: string;
        } | null = null;

        for (const rule of INLINE_GLOSSARY_PATTERNS) {
          if (matchedConceptsInParagraph.has(rule.conceptId)) continue;
          const m = rule.regex.exec(remaining);
          if (m && m.index !== undefined) {
            if (
              earliestMatch === null ||
              m.index < earliestMatch.index ||
              (m.index === earliestMatch.index && m[0].length > earliestMatch.length)
            ) {
              earliestMatch = {
                index: m.index,
                length: m[0].length,
                matchedText: m[0],
                conceptId: rule.conceptId
              };
            }
          }
        }

        if (!earliestMatch) {
          nodes.push(
            <React.Fragment key={`${keyPrefix}-plain-${segmentCounter}`}>
              {remaining}
            </React.Fragment>
          );
          break;
        }

        if (earliestMatch.index > 0) {
          nodes.push(
            <React.Fragment key={`${keyPrefix}-pre-${segmentCounter}`}>
              {remaining.slice(0, earliestMatch.index)}
            </React.Fragment>
          );
        }

        matchedConceptsInParagraph.add(earliestMatch.conceptId);
        nodes.push(
          <ContextualTooltip
            key={`${keyPrefix}-tt-${earliestMatch.conceptId}-${segmentCounter}`}
            conceptId={earliestMatch.conceptId}
            matchedText={earliestMatch.matchedText}
            onSelectConcept={handleConceptSelect}
          />
        );

        remaining = remaining.slice(earliestMatch.index + earliestMatch.length);
        segmentCounter += 1;
      }

      return nodes;
    };

    const parts: React.ReactNode[] = [];
    let lastIndex = 0;
    let match: RegExpExecArray | null;

    while ((match = citationRegex.exec(paragraphText)) !== null) {
      const matchIndex = match.index;
      const fullMatch = match[0];
      const innerCitation = match[1];

      if (matchIndex > lastIndex) {
        const textChunk = paragraphText.substring(lastIndex, matchIndex);
        parts.push(...applyGlossaryTooltips(textChunk, `chunk-${lastIndex}`));
      }

      const isSelected = selectedAuthorCitation === innerCitation;

      parts.push(
        <button
          key={`cite-${matchIndex}`}
          type="button"
          onClick={() => handleCitationSelect(innerCitation)}
          className={`inline font-serif text-inherit p-0 m-0 bg-transparent border-0 text-left transition-colors cursor-pointer ${
            isSelected
              ? 'font-bold underline decoration-[#222426]'
              : 'hover:underline text-[#222426]'
          }`}
          title="Verifică fișa referinței bibliografice în panoul lateral"
        >
          {fullMatch}
        </button>
      );

      lastIndex = citationRegex.lastIndex;
    }

    if (lastIndex < paragraphText.length) {
      const remainingText = paragraphText.substring(lastIndex);
      parts.push(...applyGlossaryTooltips(remainingText, 'chunk-end'));
    }

    return parts;
  };

  if (!isPortalOpen) {
    return (
      <LandingCoverPage
        onOpenInteractivePage={() => {
          setIsPortalOpen(true);
          setActiveView('parcurs');
          updateUrlHash(`pasul-${currentStepNumber}`);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#F6F5EE] text-[#222426] overflow-x-clip">
      {/* TOP NAVIGATION BAR (Strict 3-Zone Contract) */}
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

        {/* Zone 2: Single-line text navigation links */}
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
        </nav>

        {/* Zone 3: 1 Primary Action */}
        <div className="flex items-center shrink-0">
          <button
            onClick={() => setIsSearchOpen(true)}
            className="px-2.5 sm:px-3.5 py-1.5 sm:py-2 text-xs font-semibold text-[#222426] bg-[#E5B822] border border-[#222426] hover:bg-[#E5B822]/85 transition-colors whitespace-nowrap shrink-0 cursor-pointer flex items-center gap-1.5 sm:gap-2"
          >
            <Search className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Căutare în monografie</span>
            <span className="sm:hidden">Căutare</span>
          </button>
        </div>
      </header>

      {/* Mobile View Switcher */}
      <div className="lg:hidden sticky top-[49px] z-30 bg-[#F6F5EE]/95 backdrop-blur-sm border-b border-[#222426] px-3 py-2 flex items-center gap-1.5 overflow-x-auto">
        {(
          [
            { id: 'parcurs', label: 'Parcurs pas cu pas' },
            { id: 'diagrame', label: 'Laborator diagrame' },
            { id: 'tabele', label: 'Tabele și sinteză' },
            { id: 'glosar', label: 'Glosar și bibliografie' }
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
            <section className="bg-[#F6F5EE] border border-[#222426] p-4 sm:p-6">
              <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 pb-5 border-b border-[#8C9BA5]">
                <div className="max-w-3xl">
                  <div className="text-xs font-mono text-[#6E7376] mb-1.5">
                    <span className="inline-block px-2.5 py-0.5 text-[11px] font-mono font-semibold tracking-wider text-[#222426] uppercase bg-[#F6F5EE] border border-[#222426]">
                      MONOGRAFIE ȘTIINȚIFICĂ • VERSIUNEA 1.0
                    </span>
                  </div>
                  <h1 className="font-serif text-xl sm:text-3xl lg:text-4xl font-bold text-[#222426] headline-balance leading-tight mt-1">
                    Diagnosticul războiului cognitiv în România
                  </h1>
                  <p className="text-xs sm:text-sm font-normal text-[#222426] mt-2 leading-relaxed">
                    Arhitectura instituțională, neurocognitivă și culturală a vulnerabilității și rezilienței societale în fața operațiunilor informaționale ruse și a ideologiei putiniste
                  </p>
                </div>

                {/* Reader Controls: Lectură concentrată + Filtru straturi (A, B, C) */}
                <div className="flex flex-col items-start lg:items-end gap-3 shrink-0">
                  <button
                    onClick={() => setIsReaderMode((prev) => !prev)}
                    className={`px-3 py-1.5 text-xs font-mono border transition-colors cursor-pointer flex items-center gap-1.5 ${
                      isReaderMode
                        ? 'bg-[#E5B822] text-[#222426] border-[#222426] font-bold'
                        : 'bg-[#F6F5EE] text-[#222426] border-[#8C9BA5] hover:border-[#222426]'
                    }`}
                    title="Comută modul de lectură concentrată (ascunde/arată barele laterale)"
                  >
                    {isReaderMode ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
                    <span>{isReaderMode ? 'Afișează panourile' : 'Lectură concentrată'}</span>
                  </button>

                  <div className="flex flex-wrap items-center gap-1.5 text-xs font-mono">
                    {(['ALL', 'A', 'B', 'C'] as const).map((st) => (
                      <button
                        key={st}
                        onClick={() => setSelectedStratumHighlight(st)}
                        className={`px-2.5 py-1 border cursor-pointer whitespace-nowrap shrink-0 transition-colors ${
                          selectedStratumHighlight === st
                            ? 'bg-[#E5B822] text-[#222426] border-[#222426] font-bold'
                            : 'bg-[#F6F5EE] text-[#222426] border-[#8C9BA5] hover:border-[#222426]'
                        }`}
                      >
                        {st === 'ALL' ? 'Toate straturile' : `Stratul ${st}`}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* THREE-COLUMN DESKTOP ARCHITECTURE */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
              {/* LEFT COLUMN: Sticky Table of Contents (TOC) - 3 cols */}
              {!isReaderMode && (
                <aside className="hidden lg:block lg:col-span-3 space-y-4 lg:sticky lg:top-20 max-h-[calc(100vh-6rem)] overflow-y-auto pr-1">
                  <div className="bg-[#F6F5EE] border border-[#222426] p-4 space-y-3">
                    <div className="flex items-center justify-between text-xs font-mono font-bold text-[#222426] border-b border-[#8C9BA5] pb-2">
                      <span className="uppercase tracking-wider">Cuprinsul monografiei</span>
                      <span>19 secțiuni</span>
                    </div>

                    <div className="space-y-3 text-xs font-mono">
                      {[
                        { chapNum: 0, title: 'Introducere', steps: [1] },
                        { chapNum: 1, title: 'Capitolul 1: Vulnerabilități', steps: [2, 3, 4] },
                        { chapNum: 2, title: 'Capitolul 2: Ideologia putinistă', steps: [5, 6, 7] },
                        { chapNum: 3, title: 'Capitolul 3: Capturarea OODA', steps: [8, 9, 10] },
                        { chapNum: 4, title: 'Capitolul 4: Polarizare și Umbra colectivă', steps: [11, 12, 13] },
                        { chapNum: 5, title: 'Capitolul 5: Matricea Cipolla', steps: [14, 15] },
                        { chapNum: 6, title: 'Capitolul 6: Reconstrucție', steps: [16, 17, 18, 19] }
                      ].map((group) => (
                        <div key={group.chapNum} className="space-y-1">
                          <div className="text-[11px] font-bold text-[#222426] pt-1 border-t border-[#8C9BA5]/60">
                            {group.title}
                          </div>
                          <div className="pl-1.5 space-y-0.5">
                            {group.steps.map((stNum) => {
                              const stObj = ALL_SUBCHAPTER_STEPS.find((s) => s.stepNumber === stNum);
                              if (!stObj) return null;
                              const isActive = stNum === currentStepNumber;
                              return (
                                <button
                                  key={stNum}
                                  onClick={() => handleStepSelect(stNum)}
                                  className={`w-full text-left px-2 py-1 text-[11px] border transition-colors cursor-pointer block truncate ${
                                    isActive
                                      ? 'bg-[#222426] text-[#F6F5EE] border-[#222426] font-bold'
                                      : 'bg-[#F6F5EE] text-[#222426] border-transparent hover:border-[#8C9BA5]'
                                  }`}
                                  title={stObj.title}
                                >
                                  {stNum}. {stObj.code}
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </aside>
              )}

              {/* CENTER COLUMN: Main Reading Stage */}
              <div
                className={
                  isReaderMode
                    ? 'lg:col-span-12 max-w-[88ch] mx-auto space-y-6'
                    : 'lg:col-span-6 space-y-6'
                }
              >
                <article
                  id="reading-stage"
                  ref={readingStageRef}
                  className="scroll-mt-28 bg-[#F6F5EE] border border-[#222426] p-4 sm:p-8"
                >
                  {/* Step Header & Navigation */}
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-4 border-b border-[#8C9BA5]">
                    <div className="text-xs font-mono text-[#6E7376]">
                      Pasul {currentStep.stepNumber} din 19 · {currentStep.chapterTitle}
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                      <button
                        disabled={currentStepNumber <= 1}
                        onClick={() => handleStepSelect(currentStepNumber - 1)}
                        className="px-2.5 py-1 text-xs font-mono border border-[#222426] bg-[#F6F5EE] hover:bg-[#E5B822]/20 disabled:opacity-40 disabled:pointer-events-none cursor-pointer flex items-center gap-1 whitespace-nowrap shrink-0"
                      >
                        <ArrowLeft className="w-3.5 h-3.5" />
                        <span>Pasul anterior</span>
                      </button>
                      <button
                        disabled={currentStepNumber >= ALL_SUBCHAPTER_STEPS.length}
                        onClick={() => handleStepSelect(currentStepNumber + 1)}
                        className="px-2.5 py-1 text-xs font-mono border border-[#222426] bg-[#E5B822] hover:bg-[#E5B822]/85 disabled:opacity-40 disabled:pointer-events-none cursor-pointer flex items-center gap-1 font-semibold whitespace-nowrap shrink-0"
                      >
                        <span>Pasul următor</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* Dual-Audience Reading Mode Toggle */}
                  <div className="mb-5 p-3 bg-[#F6F5EE] border border-[#222426] flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                    <div className="text-xs font-mono text-[#222426] font-semibold">
                      Mod de lectură
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
                        Sinteză executivă
                      </button>
                    </div>
                  </div>

                  {/* Social Share Bar for Current Section */}
                  <div className="mb-5 pb-3 border-b border-[#8C9BA5] flex flex-wrap items-center justify-between gap-2">
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
                  <div>
                    <h2 className="font-serif text-base sm:text-lg font-bold text-[#222426] headline-balance leading-snug">
                      {currentStep.title}
                    </h2>
                  </div>
                  {currentStep.subtitle && (
                    <p className="font-serif text-sm sm:text-base font-normal text-[#222426] mt-2 leading-relaxed">
                      {currentStep.subtitle}
                    </p>
                  )}

                  {/* Systemic Thesis Box */}
                  <div className="mt-5 p-4 bg-[#F6F5EE] border border-[#222426]">
                    <div className="text-xs font-mono font-semibold text-[#222426] mb-1">
                      Sinteză cauzală și teză structurală
                    </div>
                    <p className="text-xs sm:text-sm text-[#222426] leading-relaxed">
                      {currentStep.summaryThesis}
                    </p>
                  </div>

                  {/* EXECUTIVE SYNTHESIS VIEW */}
                  {audienceMode === 'executive' && (
                    <div className="mt-6 p-4 sm:p-5 bg-[#F6F5EE] border-2 border-[#222426] space-y-5">
                      <div className="border-b border-[#222426] pb-3">
                        <div className="text-xs font-mono font-bold text-[#222426] uppercase tracking-wider">
                          Sinteză executivă de capitol pentru decidenți instituționali și politici publice
                        </div>
                        <h3 className="font-serif text-base sm:text-lg font-bold text-[#222426] mt-1">
                          {currentExecutiveSummary.chapterTitle}
                        </h3>
                        <p className="text-xs sm:text-sm font-mono text-[#6E7376] mt-1">
                          Decupaj metodologic · {currentStep.code} · Pasul {currentStep.stepNumber} din 19
                        </p>
                      </div>

                      <div className="grid grid-cols-1 gap-3.5">
                        {currentExecutiveSummary.executiveSynthesis.map((pt, idx) => (
                          <div
                            key={pt.id}
                            className="p-3.5 bg-[#F6F5EE] border border-[#222426] space-y-1.5"
                          >
                            <div className="flex items-center justify-between gap-2 border-b border-[#8C9BA5] pb-1">
                              <span className="text-xs font-mono font-bold text-[#222426]">
                                Directiva {idx + 1}
                              </span>
                              <span
                                className={`text-[11px] font-mono px-2 py-0.5 border ${
                                  idx === 0
                                    ? 'bg-[#F01E1E]/10 text-[#F01E1E] border-[#F01E1E]'
                                    : 'bg-[#E5B822]/25 text-[#222426] border-[#222426]'
                                }`}
                              >
                                {pt.title}
                              </span>
                            </div>
                            <p className="font-serif text-sm sm:text-base font-bold text-[#222426] mb-1.5 leading-snug">
                              {pt.takeaway}
                            </p>
                            <p className="text-xs sm:text-sm text-[#222426] leading-relaxed">
                              {pt.implication}
                            </p>
                          </div>
                        ))}
                      </div>

                      <div className="pt-2 flex justify-end">
                        <button
                          type="button"
                          onClick={() => handleAudienceModeChange('academic')}
                          className="px-3.5 py-2 text-xs font-mono font-semibold bg-[#222426] text-[#F6F5EE] border border-[#222426] hover:bg-[#6E7376] cursor-pointer"
                        >
                          Comută la textul integral academic al secțiunii →
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Interactive Concept Anchors */}
                  <div className="mt-5 pt-4 border-t border-[#8C9BA5]">
                    <div className="text-xs font-mono text-[#6E7376] mb-2">
                      Concepte-cheie în această secțiune
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {currentStep.keyConceptIds.map((cid) => {
                        const conceptObj = GLOSSARY_CONCEPTS.find((c) => c.id === cid);
                        if (!conceptObj) return null;
                        const isSelected = activeConceptId === cid;
                        const isStratumMatch =
                          selectedStratumHighlight !== 'ALL' &&
                          conceptObj.stratum === selectedStratumHighlight;
                        const isStratumDimmed =
                          selectedStratumHighlight !== 'ALL' &&
                          conceptObj.stratum !== selectedStratumHighlight;
                        return (
                          <button
                            key={cid}
                            onClick={() => handleConceptSelect(cid)}
                            className={`px-3 py-1.5 text-xs font-medium border transition-all cursor-pointer ${
                              isSelected
                                ? 'bg-[#E5B822] text-[#222426] border-[#222426] font-semibold'
                                : isStratumMatch
                                  ? 'bg-[#E5B822]/25 text-[#222426] border-2 border-[#E5B822] ring-2 ring-[#E5B822]/40 font-semibold'
                                  : 'bg-[#F6F5EE] text-[#222426] border-[#8C9BA5] hover:border-[#222426]'
                            } ${isStratumDimmed ? 'opacity-40' : ''}`}
                          >
                            {conceptObj.term}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* DUAL REGISTER DECOMPOSITION */}
                  {(readingTab === 'registre' || readingTab === 'ambele') && (
                    <div className="mt-6 pt-6 border-t border-[#222426]">
                      <div className="text-xs font-mono uppercase tracking-wider text-[#6E7376] mb-1">
                        Anatomia tensiunii și descompunerea pe două registre
                      </div>
                      <h3 className="font-serif text-base font-bold text-[#222426] mb-4">
                        Stratul teoretic și conceptual în oglindă cu realitatea practică și istorică
                      </h3>

                      <div className="space-y-4">
                        {currentStep.dualRegister.map((dr) => {
                          const isStratumMatch =
                            selectedStratumHighlight !== 'ALL' &&
                            dr.stratum === selectedStratumHighlight;
                          const isStratumDimmed =
                            selectedStratumHighlight !== 'ALL' &&
                            dr.stratum !== selectedStratumHighlight;
                          return (
                            <div
                              key={dr.id}
                              className={`grid grid-cols-1 md:grid-cols-2 bg-[#F6F5EE] transition-all ${
                                isStratumMatch
                                  ? 'border-2 border-[#E5B822] ring-2 ring-[#E5B822]/40'
                                  : 'border border-[#222426]'
                              } ${isStratumDimmed ? 'opacity-40' : ''}`}
                            >
                              {/* Left: Theoretical Register */}
                              <div className="p-4 border-b md:border-b-0 md:border-r border-[#222426]">
                                <div className="text-xs font-mono text-[#6E7376] mb-1">
                                  <span>Registrul teoretic · Stratul {dr.stratum}</span>
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
                                    ? 'Realitatea empirică · Vulnerabilitate structurală'
                                    : 'Realitatea empirică · Mecanism de reziliență'}
                                </div>
                                <p className="text-xs sm:text-sm text-[#222426] leading-relaxed mt-2">
                                  {dr.empiricalReality}
                                </p>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* FULL VERBATIM MONOGRAPH TEXT (62-65ch Measure + Full-Width Inline Figures) */}
                  {(readingTab === 'integral' || readingTab === 'ambele') && (
                    <div className="mt-6 pt-6 border-t border-[#222426]">
                      <div className="mb-4">
                        <div className="text-xs font-mono uppercase tracking-wider text-[#6E7376]">
                          Textul integral al secțiunii din monografie
                        </div>
                      </div>
                      <div className="space-y-5 font-serif text-[17px] sm:text-[18px] text-[#222426] leading-[1.65]">
                        {currentStep.paragraphs.map((paragraph, index) => {
                          const isFigureCaption = paragraph.startsWith('Figura ');
                          if (isFigureCaption && currentStep.linkedFigureId) {
                            return (
                              <div
                                key={`inline-figure-${currentStep.linkedFigureId}-${index}`}
                                className="my-6 font-sans w-full"
                              >
                                <InteractiveFigures
                                  figureId={currentStep.linkedFigureId}
                                  showSelector={false}
                                />
                              </div>
                            );
                          }
                          if (isFigureCaption) {
                            return (
                              <div
                                key={index}
                                className="p-4 bg-[#F6F5EE] border border-[#222426] text-xs sm:text-sm italic text-[#222426] leading-relaxed my-4 max-w-[65ch]"
                              >
                                {paragraph}
                              </div>
                            );
                          }
                          return (
                            <p
                              key={index}
                              className={`max-w-[65ch] ${
                                index === 0
                                  ? 'first-letter:text-4xl first-letter:font-serif first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-[#222426]'
                                  : ''
                              }`}
                            >
                              {renderParagraphWithCitations(paragraph)}
                            </p>
                          );
                        })}

                        {/* Render full-width figure at the end of section if linkedFigureId is set and no paragraph started with 'Figura ' */}
                        {currentStep.linkedFigureId &&
                          !currentStep.paragraphs.some((p) => p.startsWith('Figura ')) && (
                            <div
                              key={`inline-figure-end-${currentStep.linkedFigureId}`}
                              className="my-6 font-sans w-full"
                            >
                              <InteractiveFigures
                                figureId={currentStep.linkedFigureId}
                                showSelector={false}
                              />
                            </div>
                          )}
                      </div>

                      {/* Midpoint Summary Callout at Dense Steps */}
                      {[1, 4, 7, 10, 13, 15, 19].includes(currentStep.stepNumber) && (
                        <div className="mt-8 p-4.5 bg-[#F6F5EE] border-2 border-[#222426] space-y-2 max-w-[65ch]">
                          <div className="text-xs font-mono font-bold text-[#222426] uppercase tracking-wider flex items-center gap-2">
                            <span className="w-2 h-2 bg-[#E5B822] border border-[#222426] inline-block" />
                            <span>Punct de control și sinteză intermediară</span>
                          </div>
                          <p className="text-xs sm:text-sm font-serif text-[#222426] leading-relaxed italic">
                            {currentStep.summaryThesis}
                          </p>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Cited Authors Pills */}
                  <div className="mt-8 pt-4 border-t border-[#8C9BA5]">
                    <div className="text-xs font-mono font-semibold text-[#222426] mb-2">
                      Autori și lucrări de referință citate în această secțiune
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
                                : 'bg-[#F6F5EE] text-[#222426] border-[#8C9BA5] hover:border-[#222426]'
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
                        className="px-4 py-2.5 text-xs font-medium border border-[#222426] bg-[#F6F5EE] hover:bg-[#E5B822]/20 transition-colors cursor-pointer flex items-center gap-2"
                      >
                        <ArrowLeft className="w-4 h-4 shrink-0" />
                        <span className="truncate">
                          Pasul {currentStepNumber - 1} · {ALL_SUBCHAPTER_STEPS[currentStepNumber - 2].code}
                        </span>
                      </button>
                    ) : (
                      <div />
                    )}

                    {currentStepNumber < ALL_SUBCHAPTER_STEPS.length ? (
                      <button
                        onClick={() => handleStepSelect(currentStepNumber + 1)}
                        className="px-5 py-2.5 text-xs font-semibold border border-[#222426] bg-[#E5B822] hover:bg-[#E5B822]/85 transition-colors cursor-pointer flex items-center justify-center gap-2"
                      >
                        <span className="truncate">
                          Pasul următor · {ALL_SUBCHAPTER_STEPS[currentStepNumber].code}
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
                        className="px-5 py-2.5 text-xs font-semibold border border-[#222426] bg-[#E5B822] hover:bg-[#E5B822]/85 transition-colors cursor-pointer flex items-center justify-center gap-2"
                      >
                        <span>Explorează Tabelele 1 și 2 de sinteză</span>
                        <ArrowRight className="w-4 h-4 shrink-0" />
                      </button>
                    )}
                  </div>
                </article>
              </div>

              {/* RIGHT COLUMN: Sticky Sidenotes & Inspector Rail - 3 cols */}
              {!isReaderMode && (
                <aside
                  id="inspector-panel"
                  className="lg:col-span-3 space-y-6 lg:sticky lg:top-20 max-h-[calc(100vh-6rem)] overflow-y-auto pr-1"
                >
                  {/* Sidenote Cards for Current Step Key Terms */}
                  <div className="space-y-3">
                    <div className="text-xs font-mono font-bold text-[#222426] border-b border-[#8C9BA5] pb-1.5 uppercase tracking-wider flex items-center justify-between">
                      <span>Note marginale</span>
                      <span>{currentStep.keyConceptIds.length} termeni</span>
                    </div>

                    {currentStep.keyConceptIds.map((cid) => {
                      const conceptObj = GLOSSARY_CONCEPTS.find((c) => c.id === cid);
                      if (!conceptObj) return null;
                      const isSelected = activeConceptId === cid;
                      const isStratumMatch =
                        selectedStratumHighlight !== 'ALL' &&
                        conceptObj.stratum === selectedStratumHighlight;
                      const isStratumDimmed =
                        selectedStratumHighlight !== 'ALL' &&
                        conceptObj.stratum !== selectedStratumHighlight;
                      return (
                        <div
                          key={cid}
                          onClick={() => handleConceptSelect(cid)}
                          className={`p-3 bg-[#F6F5EE] transition-all cursor-pointer space-y-1 ${
                            isStratumMatch
                              ? 'border-2 border-[#E5B822] ring-2 ring-[#E5B822]/40'
                              : isSelected
                                ? 'border-2 border-[#222426]'
                                : 'border border-[#8C9BA5] hover:border-[#222426]'
                          } ${isStratumDimmed ? 'opacity-40' : ''}`}
                        >
                          <div className="flex flex-wrap items-center gap-1.5 text-[11px] font-mono text-[#6E7376] pb-1 mb-1 border-b border-[#8C9BA5]/60">
                            <span
                              className={
                                isStratumMatch
                                  ? 'px-1.5 py-0.5 bg-[#E5B822] text-[#222426] border border-[#222426] font-bold'
                                  : 'font-bold text-[#222426]'
                              }
                            >
                              Stratul {conceptObj.stratum}
                            </span>
                            <span aria-hidden="true">·</span>
                            <span>{conceptObj.domain}</span>
                          </div>
                          <div className="font-serif font-bold text-xs sm:text-sm text-[#222426]">
                            {conceptObj.term}
                          </div>
                          <div className="text-[11px] font-mono text-[#6E7376]">
                            {conceptObj.authors}
                          </div>
                          <p className="text-xs text-[#222426] leading-relaxed line-clamp-3">
                            {conceptObj.definition}
                          </p>
                        </div>
                      );
                    })}
                  </div>

                  {/* Active Bibliographic Citation Dossier */}
                  {selectedAuthorCitation && (
                    <div
                      ref={citationDossierRef}
                      className="scroll-mt-28 bg-[#F6F5EE] border-2 border-[#222426] p-4 space-y-3"
                    >
                      <div className="flex items-center justify-between gap-2 pb-2 border-b border-[#222426]">
                        <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-[#222426]">
                          <BookOpen className="w-3.5 h-3.5 shrink-0" />
                          <span>Referință: {selectedAuthorCitation}</span>
                        </div>
                        <button
                          type="button"
                          onClick={() => setSelectedAuthorCitation(null)}
                          className="p-1 border border-[#222426] bg-[#F6F5EE] hover:bg-[#E5B822]/30 cursor-pointer shrink-0"
                          aria-label="Închide referința"
                        >
                          <X className="w-3.5 h-3.5 text-[#222426]" />
                        </button>
                      </div>

                      {matchedBibliographyForInspector.length > 0 ? (
                        <div className="space-y-2.5 max-h-60 overflow-y-auto pr-1">
                          {matchedBibliographyForInspector.map((bib) => (
                            <div
                              key={bib.id}
                              className="p-3 bg-[#F6F5EE] border border-[#222426] text-xs"
                            >
                              <div className="flex items-center justify-between font-mono text-[11px] text-[#6E7376] mb-1">
                                <span>
                                  {bib.authors} ({bib.year})
                                </span>
                              </div>
                              <p className="font-serif text-[#222426] leading-relaxed">
                                {bib.fullCitation}
                              </p>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p className="text-xs text-[#6E7376]">
                          Referință contextuală în cadrul secțiunii.
                        </p>
                      )}
                    </div>
                  )}

                  {/* Active Concept Detailed Inspector */}
                  {activeGlossaryConcept && (
                    <div
                      ref={conceptCardRef}
                      className="scroll-mt-28 bg-[#F6F5EE] border border-[#222426] p-4"
                    >
                      <div className="flex flex-wrap items-center gap-1.5 text-[11px] font-mono text-[#6E7376] pb-2 mb-2 border-b border-[#8C9BA5]">
                        <span className="font-bold text-[#222426]">
                          Stratul {activeGlossaryConcept.stratum}
                        </span>
                        <span aria-hidden="true">·</span>
                        <span>{activeGlossaryConcept.domain}</span>
                      </div>
                      <h3 className="font-serif text-base font-bold text-[#222426]">
                        {activeGlossaryConcept.term}
                      </h3>
                      <div className="text-xs font-mono text-[#6E7376] mt-0.5 mb-2">
                        {activeGlossaryConcept.authors}
                      </div>
                      <p className="text-xs text-[#222426] leading-relaxed mb-3">
                        {activeGlossaryConcept.definition}
                      </p>
                      <div
                        className={`p-3 border text-xs leading-relaxed ${
                          activeGlossaryConcept.polarity === 'tension'
                            ? 'border-[#F01E1E] bg-[#F01E1E]/5 text-[#222426]'
                            : 'border-[#222426] bg-[#E5B822]/25 text-[#222426]'
                        }`}
                      >
                        <span className="font-mono font-semibold block mb-0.5">
                          Aplicație în diagnosticul României
                        </span>
                        {activeGlossaryConcept.monographContext}
                      </div>
                    </div>
                  )}

                  {/* Compact Quick-Reference Figure Card in Right Sidebar */}
                  {currentStep.linkedFigureId && (
                    <div className="bg-[#F6F5EE] border-2 border-[#222426] p-4 space-y-2.5">
                      <div className="flex flex-wrap items-center gap-1.5 text-[11px] font-mono text-[#6E7376] border-b border-[#8C9BA5] pb-1.5">
                        <span className="font-bold text-[#222426]">
                          DIAGRAMĂ ASOCIATĂ · FIGURA {currentStep.linkedFigureId}
                        </span>
                        <span aria-hidden="true">·</span>
                        <span>{FIGURE_METADATA[currentStep.linkedFigureId]?.chapterRef}</span>
                      </div>
                      <div className="font-serif text-xs sm:text-sm font-bold text-[#222426] leading-snug">
                        {FIGURE_METADATA[currentStep.linkedFigureId]?.title}
                      </div>
                      <p className="text-[11px] text-[#6E7376] leading-relaxed">
                        Diagrama interactivă este afișată pe întreaga lățime a coloanei centrale de lectură. Pentru inspecție extinsă și compararea celor 7 planșe, deschideți Laboratorul de diagrame.
                      </p>
                      <button
                        type="button"
                        onClick={() => {
                          const figId = currentStep.linkedFigureId!;
                          setLabFigureId(figId);
                          setActiveView('diagrame');
                          updateUrlHash(`figura-${figId}`);
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className="w-full px-3 py-2 text-xs font-mono font-bold text-[#222426] bg-[#E5B822] border border-[#222426] hover:bg-[#E5B822]/85 transition-colors cursor-pointer flex items-center justify-center gap-1.5"
                      >
                        <span>Vezi Figura {currentStep.linkedFigureId} în Laboratorul de diagrame →</span>
                      </button>
                    </div>
                  )}
                </aside>
              )}
            </div>
          </div>
        )}

        {/* VIEW 2: LABORATORUL CELOR 7 DIAGRAME DE SISTEM */}
        {activeView === 'diagrame' && (
          <div className="space-y-6">
            <div className="bg-[#F6F5EE] border border-[#222426] p-4 sm:p-5">
              <div className="text-xs font-mono text-[#6E7376] mb-1">
                Hărți sistemice 2D în stil gravură vectorială · Figurile 1–7 din monografie
              </div>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#222426]">
                Laboratorul diagramelor cauzale din monografie
              </h2>
              <p className="text-xs sm:text-sm text-[#6E7376] mt-1">
                Interacționați cu toate cele șapte diagrame vectoriale ale lucrării pentru a inspecta propagarea stresului alostatic, dubla falsificare axiologică, deturnarea buclei OODA, proiecția Umbrei colective și enantiodromia, matricea lui Cipolla, bifurcația Track A / Track B și protocolul în trei faze.
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
      </main>

      {/* STICKY BACK TO TOP BUTTON */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 z-40 p-3 bg-[#222426] text-[#F6F5EE] border border-[#222426] hover:bg-[#6E7376] cursor-pointer flex items-center gap-1.5 text-xs font-mono"
        title="Înapoi la începutul paginii"
      >
        <ArrowUp className="w-4 h-4" />
        <span className="hidden sm:inline">Sus</span>
      </button>

      {/* CLEAN EDITORIAL FOOTER */}
      <footer className="mt-12 border-t border-[#222426] bg-[#F6F5EE] px-4 sm:px-8 py-6">
        <div className="max-w-[1440px] mx-auto space-y-4">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-4 border-b border-[#8C9BA5]">
            <div className="text-xs text-[#6E7376]">
              <span className="font-serif font-bold text-[#222426]">
                Diagnosticul războiului cognitiv în România · Versiunea 1.0
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
                Coperta monografiei
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
                Parcurs pe capitole și subcapitole · 19 secțiuni
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

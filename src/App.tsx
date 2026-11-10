import React, { useState } from 'react';
import {
  ALL_SUBCHAPTER_STEPS,
  GLOSSARY_CONCEPTS,
  BIBLIOGRAPHY_DATA
} from './data/tablesAndReference';
import { StratumId, BibliographyItem } from './data/types';
import { InteractiveFigures } from './components/InteractiveFigures';
import { TablesAndRegionalView } from './components/TablesAndRegionalView';
import { GlossaryAndBibliographyView } from './components/GlossaryAndBibliographyView';
import { SearchModal, PdfDocumentView } from './components/PdfAndSearchModal';
import { FourActsPresentation } from './components/FourActsPresentation';
import { LandingCoverPage } from './components/LandingCoverPage';
import { VideoSynthesisBox } from './components/VideoSynthesisBox';
import {
  ArrowLeft,
  ArrowRight,
  Search,
  BookOpen,
  X
} from 'lucide-react';

type ActiveNavView = 'parcurs' | 'diagrame' | 'tabele' | 'glosar' | 'pdf';
type ParcursSubMode = 'subcapitole' | 'patru-acte';

/**
 * Matches a parenthetical string or author label against BIBLIOGRAPHY_DATA
 */
function findMatchingBibliographyItems(citationText: string): BibliographyItem[] {
  const cleaned = citationText
    .replace(/^\(|\)$/g, '')
    .toLowerCase();

  // Extract candidate author surnames (words with >= 3 letters that aren't common connectors)
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
    'ipoteza'
  ]);

  const tokens = cleaned
    .split(/[^a-zăâîșțéöüä'-]+/i)
    .map((t) => t.trim())
    .filter((t) => t.length >= 3 && !stopWords.has(t));

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

export function App() {
  const [isPortalOpen, setIsPortalOpen] = useState<boolean>(false);
  const [activeView, setActiveView] = useState<ActiveNavView>('parcurs');
  const [parcursSubMode, setParcursSubMode] = useState<ParcursSubMode>('subcapitole');
  const [currentStepNumber, setCurrentStepNumber] = useState<number>(1);
  const [selectedActFilter, setSelectedActFilter] = useState<number | 'ALL'>('ALL');
  const [selectedStratumHighlight, setSelectedStratumHighlight] = useState<StratumId | 'ALL'>('ALL');
  const [readingTab, setReadingTab] = useState<'integral' | 'registre' | 'ambele'>('ambele');
  const [activeConceptId, setActiveConceptId] = useState<string>('al-saselea-domeniu');
  const [selectedAuthorCitation, setSelectedAuthorCitation] = useState<string | null>(null);
  const [labFigureId, setLabFigureId] = useState<number>(1);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);

  const currentStep =
    ALL_SUBCHAPTER_STEPS.find((s) => s.stepNumber === currentStepNumber) ||
    ALL_SUBCHAPTER_STEPS[0];

  const filteredStepsForRail =
    selectedActFilter === 'ALL'
      ? ALL_SUBCHAPTER_STEPS
      : ALL_SUBCHAPTER_STEPS.filter((s) => s.actNumber === selectedActFilter);

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
          .trim()
          .toLowerCase();
        if (!q || q.length < 3) return false;
        return (
          step.citedAuthorNames.some((a) => a.toLowerCase().includes(q)) ||
          step.paragraphs.some((p) => p.toLowerCase().includes(q))
        );
      })
    : [];

  const handleStepSelect = (stepNum: number) => {
    const target = ALL_SUBCHAPTER_STEPS.find((s) => s.stepNumber === stepNum);
    setCurrentStepNumber(stepNum);
    if (target && target.keyConceptIds.length > 0) {
      setActiveConceptId(target.keyConceptIds[0]);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  /**
   * Renders a paragraph with interactive parenthetical academic citations (e.g. "(Luhmann, 1995, 2004)")
   */
  const renderParagraphWithCitations = (paragraph: string) => {
    // Match parenthetical segments containing a 4-digit year (1700-2029)
    const citationRegex = /(\([^()]*\b(?:17|18|19|20)\d{2}[a-b]?\b[^()]*\))/g;
    const parts = paragraph.split(citationRegex);

    return parts.map((part, idx) => {
      if (part.startsWith('(') && part.endsWith(')') && /\b(?:17|18|19|20)\d{2}[a-b]?\b/.test(part)) {
        const matches = findMatchingBibliographyItems(part);
        if (matches.length > 0) {
          const isSelected = selectedAuthorCitation === part;
          return (
            <button
              key={idx}
              type="button"
              onClick={() => setSelectedAuthorCitation(part)}
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
      return <React.Fragment key={idx}>{part}</React.Fragment>;
    });
  };

  if (!isPortalOpen) {
    return (
      <LandingCoverPage
        onOpenInteractivePage={() => {
          setIsPortalOpen(true);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#F6F5EE] text-[#222426]">
      {/* TOP NAVIGATION BAR (Strict 3-Zone Contract) */}
      <header className="sticky top-0 z-40 bg-[#F6F5EE]/95 backdrop-blur-sm border-b border-[#222426] px-4 sm:px-8 py-3.5 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark (single text element) */}
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            setIsPortalOpen(false);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          title="Revenire la coperta principală (Landing page)"
          className="font-serif text-base sm:text-lg font-bold tracking-tight text-[#222426] whitespace-nowrap shrink-0"
        >
          Diagnosticul războiului cognitiv în România
        </a>

        {/* Zone 2: 5 concise single-line text navigation links */}
        <nav className="hidden lg:flex items-center gap-6 text-xs sm:text-sm font-medium text-[#6E7376]">
          <button
            onClick={() => setActiveView('parcurs')}
            className={`hover:text-[#222426] transition-colors whitespace-nowrap shrink-0 cursor-pointer pb-0.5 ${
              activeView === 'parcurs'
                ? 'text-[#222426] font-semibold border-b-2 border-[#222426]'
                : ''
            }`}
          >
            Parcurs pas cu pas
          </button>
          <button
            onClick={() => setActiveView('diagrame')}
            className={`hover:text-[#222426] transition-colors whitespace-nowrap shrink-0 cursor-pointer pb-0.5 ${
              activeView === 'diagrame'
                ? 'text-[#222426] font-semibold border-b-2 border-[#222426]'
                : ''
            }`}
          >
            Laborator diagrame
          </button>
          <button
            onClick={() => setActiveView('tabele')}
            className={`hover:text-[#222426] transition-colors whitespace-nowrap shrink-0 cursor-pointer pb-0.5 ${
              activeView === 'tabele'
                ? 'text-[#222426] font-semibold border-b-2 border-[#222426]'
                : ''
            }`}
          >
            Tabele și sinteză
          </button>
          <button
            onClick={() => setActiveView('glosar')}
            className={`hover:text-[#222426] transition-colors whitespace-nowrap shrink-0 cursor-pointer pb-0.5 ${
              activeView === 'glosar'
                ? 'text-[#222426] font-semibold border-b-2 border-[#222426]'
                : ''
            }`}
          >
            Glosar și bibliografie
          </button>
          <button
            onClick={() => setActiveView('pdf')}
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
            className="px-3.5 py-2 text-xs font-semibold text-[#222426] bg-[#E5B822] border border-[#222426] hover:bg-[#D9A714] transition-colors whitespace-nowrap shrink-0 cursor-pointer flex items-center gap-2"
          >
            <Search className="w-3.5 h-3.5" />
            <span>Căutare în monografie</span>
          </button>
        </div>
      </header>

      {/* Mobile View Switcher (visible below lg) */}
      <div className="lg:hidden bg-[#F4F1EA] border-b border-[#222426] px-4 py-2 flex items-center gap-2 overflow-x-auto">
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
            onClick={() => setActiveView(tab.id)}
            className={`px-3 py-1.5 text-xs font-medium border whitespace-nowrap shrink-0 cursor-pointer ${
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
      <main className="flex-1 max-w-[1440px] w-full mx-auto px-4 sm:px-8 py-6 sm:py-8">
        {/* VIEW 1: PARCURS PAS CU PAS (Main Progressive Disclosure Explorer) */}
        {activeView === 'parcurs' && (
          <div className="space-y-6">
            {/* Mode Switcher Bar between 19-Subchapter Analytical Reader & 4-Act Cinematic Presentation */}
            <div className="bg-[#F4F1EA] border border-[#222426] px-4 py-3 flex flex-wrap items-center justify-between gap-3">
              <div className="text-xs font-mono text-[#222426]">
                Arhitectura de explorare a monografiei (Dezvăluire progresivă)
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <button
                  onClick={() => setParcursSubMode('subcapitole')}
                  className={`px-3.5 py-1.5 text-xs font-medium border transition-colors cursor-pointer ${
                    parcursSubMode === 'subcapitole'
                      ? 'bg-[#222426] text-[#F6F5EE] border-[#222426] font-semibold'
                      : 'bg-[#F6F5EE] text-[#222426] border-[#8C9BA5] hover:border-[#222426]'
                  }`}
                >
                  Lectură analitică pas cu pas (Cele 19 secțiuni integrale)
                </button>
                <button
                  onClick={() => setParcursSubMode('patru-acte')}
                  className={`px-3.5 py-1.5 text-xs font-medium border transition-colors cursor-pointer ${
                    parcursSubMode === 'patru-acte'
                      ? 'bg-[#E5B822] text-[#222426] border-[#222426] font-semibold'
                      : 'bg-[#F6F5EE] text-[#222426] border-[#8C9BA5] hover:border-[#222426]'
                  }`}
                >
                  Prezentare progresivă în 4 acte (Modul cinematic din Master Blueprint)
                </button>
              </div>
            </div>

            {parcursSubMode === 'patru-acte' ? (
              <FourActsPresentation
                onSelectStepInReader={(stepNum) => {
                  setParcursSubMode('subcapitole');
                  handleStepSelect(stepNum);
                }}
              />
            ) : (
              <>
                {/* Editorial Banner & 4-Act Architecture Bar */}
                <section className="bg-[#F4F1EA] border border-[#222426] p-5 sm:p-6">
                  <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 pb-5 border-b border-[#D0D5D9]">
                    <div className="max-w-3xl">
                      <div className="text-xs font-mono text-[#6E7376] mb-1.5">
                        Monografie științifică integrată (Versiunea 1.0 · Al șaselea domeniu operațional NATO ACT)
                      </div>
                      <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#222426] headline-balance leading-tight">
                        Arhitectura instituțională, neurocognitivă și culturală a vulnerabilității și rezilienței societale
                      </h1>
                      <p className="text-xs sm:text-sm text-[#6E7376] mt-2 leading-relaxed">
                        Explorare deterministă pas cu pas a întregului document (Introducere și Capitolele 1–6), articulând sociologia instituțională (Stratul A), neuroștiințele cognitive și semiotica (Stratul B) și psihologia analitică postjungiană (Stratul C).
                      </p>
                    </div>

                    {/* Reading Mode Controls */}
                    <div className="flex flex-col sm:flex-row lg:flex-col items-start sm:items-center lg:items-end gap-2 shrink-0">
                      <div className="text-xs font-mono text-[#6E7376]">
                        Mod de afișare a conținutului
                      </div>
                      <div className="flex items-center gap-1.5">
                        <button
                          onClick={() => setReadingTab('ambele')}
                          className={`px-3 py-1.5 text-xs font-medium border transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                            readingTab === 'ambele'
                              ? 'bg-[#222426] text-[#F6F5EE] border-[#222426]'
                              : 'bg-[#F6F5EE] text-[#222426] border-[#8C9BA5]'
                          }`}
                        >
                          Text integral + Două registre
                        </button>
                        <button
                          onClick={() => setReadingTab('integral')}
                          className={`px-3 py-1.5 text-xs font-medium border transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                            readingTab === 'integral'
                              ? 'bg-[#222426] text-[#F6F5EE] border-[#222426]'
                              : 'bg-[#F6F5EE] text-[#222426] border-[#8C9BA5]'
                          }`}
                        >
                          Doar textul integral
                        </button>
                        <button
                          onClick={() => setReadingTab('registre')}
                          className={`px-3 py-1.5 text-xs font-medium border transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                            readingTab === 'registre'
                              ? 'bg-[#222426] text-[#F6F5EE] border-[#222426]'
                              : 'bg-[#F6F5EE] text-[#222426] border-[#8C9BA5]'
                          }`}
                        >
                          Descompunere (Teoretic / Empiric)
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* 4 Logical Acts Progressive Disclosure Selector */}
                  <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                    {[
                      {
                        act: 1,
                        title: 'Actul I (Cadrul macro și rădăcina sistemică)',
                        sub: 'Introducere și Capitolul 1 (Pașii 1–4)',
                        firstStep: 1
                      },
                      {
                        act: 2,
                        title: 'Actul II (Anatomia tensiunii și capturarea)',
                        sub: 'Capitolele 2 și 3 (Pașii 5–10)',
                        firstStep: 5
                      },
                      {
                        act: 3,
                        title: 'Actul III (Buclele de sistem și bifurcația)',
                        sub: 'Capitolele 4 și 5 (Pașii 11–15)',
                        firstStep: 11
                      },
                      {
                        act: 4,
                        title: 'Actul IV (Protocolul secvențial și sinteza)',
                        sub: 'Capitolul 6 (Pașii 16–19)',
                        firstStep: 16
                      }
                    ].map((actItem) => {
                      const isCurrentAct = currentStep.actNumber === actItem.act;
                      return (
                        <button
                          key={actItem.act}
                          onClick={() => {
                            setSelectedActFilter('ALL');
                            handleStepSelect(actItem.firstStep);
                          }}
                          className={`p-3.5 border text-left transition-all cursor-pointer ${
                            isCurrentAct
                              ? 'border-2 border-[#222426] bg-[#E5B822]/25'
                              : 'border-[#8C9BA5] bg-[#F6F5EE] hover:border-[#222426]'
                          }`}
                        >
                          <div className="text-xs font-mono text-[#6E7376]">{actItem.sub}</div>
                          <div className="font-serif text-sm font-bold text-[#222426] mt-0.5">
                            {actItem.title}
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  {/* Step-by-Step Horizontal Rail (Steps 1 to 19) */}
                  <div className="mt-5 pt-4 border-t border-[#D0D5D9]">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5">
                      <div className="text-xs font-mono text-[#222426]">
                        Parcurs secvențial pas cu pas (Pasul curent {currentStep.stepNumber} din 19, {currentStep.code})
                      </div>
                      <div className="flex items-center gap-1.5 text-xs font-mono">
                        <span className="text-[#6E7376]">Filtru straturi cauzale (A, B, C)</span>
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

                    <div className="flex items-center gap-1.5 overflow-x-auto pb-2">
                      {filteredStepsForRail.map((step) => {
                        const isSelected = step.stepNumber === currentStepNumber;
                        const matchesStratum =
                          selectedStratumHighlight === 'ALL' ||
                          step.dominantStrata.includes(selectedStratumHighlight);
                        return (
                          <button
                            key={step.id}
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
                            {step.stepNumber}. {step.code.replace('Subcapitolul ', 'Cap. ')}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </section>

                {/* TWO-COLUMN ASYMMETRIC READING & SIMULATION WORKSPACE */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* LEFT COLUMN (7 Cols): Verbatim Text & Dual Register Decomposition */}
                  <div className="lg:col-span-7 space-y-6">
                    <article className="bg-[#F6F5EE] border border-[#222426] p-6 sm:p-8">
                      {/* Step Header & Prev/Next Top Controls */}
                      <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-5 border-b border-[#D0D5D9]">
                        <div className="text-xs font-mono text-[#6E7376]">
                          Pasul {currentStep.stepNumber} din 19 · {currentStep.actTitle} · Straturi active ({currentStep.dominantStrata.join(', ')})
                        </div>
                        <div className="flex items-center gap-2">
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

                      {/* Chapter Kicker & Subchapter Title */}
                      {currentStep.chapterNumber > 0 && (
                        <div className="text-xs font-mono font-semibold text-[#6E7376] mb-1">
                          {currentStep.chapterTitle}
                        </div>
                      )}
                      <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#222426] headline-balance leading-snug">
                        {currentStep.title}
                      </h2>

                      {/* Systemic Thesis Box */}
                      <div className="mt-5 p-4 bg-[#F4F1EA] border border-[#222426]">
                        <div className="text-xs font-mono font-semibold text-[#222426] mb-1">
                          Sinteză cauzală și teză structurală
                        </div>
                        <p className="text-xs sm:text-sm text-[#222426] leading-relaxed">
                          {currentStep.summaryThesis}
                        </p>
                      </div>

                      {/* Interactive Concept Anchors */}
                      <div className="mt-5 pt-4 border-t border-[#D0D5D9]">
                        <div className="text-xs font-mono text-[#6E7376] mb-2">
                          Concepte-cheie în această secțiune (selectați pentru descompunere în panoul lateral)
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {currentStep.keyConceptIds.map((cid) => {
                            const conceptObj = GLOSSARY_CONCEPTS.find((c) => c.id === cid);
                            if (!conceptObj) return null;
                            const isSelected = activeConceptId === cid;
                            return (
                              <button
                                key={cid}
                                onClick={() => setActiveConceptId(cid)}
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
                                      ? 'Stratul empiric (Falie structurală / Vulnerabilitate)'
                                      : 'Stratul empiric (Mecanism de echilibrare / Reziliență)'}
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

                      {/* FULL VERBATIM MONOGRAPH TEXT WITH CLICKABLE ACADEMIC CITATIONS */}
                      {(readingTab === 'integral' || readingTab === 'ambele') && (
                        <div className="mt-6 pt-6 border-t border-[#222426]">
                          <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                            <div className="text-xs font-mono uppercase tracking-wider text-[#6E7376]">
                              Textul integral al secțiunii din monografie (Fidelitate textuală completă)
                            </div>
                            <div className="text-[11px] font-mono text-[#6E7376]">
                              Selectați orice citare între paranteze (Autor, An) pentru fișa bibliografică
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
                                onClick={() => setSelectedAuthorCitation(authorLabel)}
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
                            onClick={() => setActiveView('tabele')}
                            className="px-5 py-2.5 text-xs font-semibold border border-[#222426] bg-[#E5B822] hover:bg-[#D9A714] transition-colors cursor-pointer flex items-center justify-center gap-2"
                          >
                            <span>Explorează Tabelele 1 și 2 de sinteză</span>
                            <ArrowRight className="w-4 h-4 shrink-0" />
                          </button>
                        )}
                      </div>
                    </article>
                  </div>

                  {/* RIGHT COLUMN (5 Cols): Video Synthesis Box, Synchronized Interactive Figure, Citation Dossier & Concept Inspector */}
                  <aside className="lg:col-span-5 space-y-6 lg:sticky lg:top-20">
                    {/* Video Synthesis Box (Gemini Notebook Video) */}
                    <VideoSynthesisBox allowCollapse={true} />

                    {/* Active Bibliographic Citation Dossier (when an inline citation or author pill is clicked) */}
                    {selectedAuthorCitation && (
                      <div className="bg-[#F6F5EE] border-2 border-[#222426] p-5 space-y-3">
                        <div className="flex items-center justify-between gap-2 pb-2 border-b border-[#222426]">
                          <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-[#222426]">
                            <BookOpen className="w-3.5 h-3.5" />
                            <span>Dosarul referinței bibliografice ({selectedAuthorCitation})</span>
                          </div>
                          <button
                            type="button"
                            onClick={() => setSelectedAuthorCitation(null)}
                            className="p-1 border border-[#222426] bg-[#F4F1EA] hover:bg-[#E5B822]/30 cursor-pointer"
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
                      </div>
                    )}

                    {/* Active Concept Card */}
                    {activeGlossaryConcept && (
                      <div className="bg-[#F4F1EA] border border-[#222426] p-5">
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
              </>
            )}
          </div>
        )}

        {/* VIEW 2: LABORATORUL CELOR 7 DIAGRAME DE SISTEM */}
        {activeView === 'diagrame' && (
          <div className="space-y-6">
            <div className="bg-[#F4F1EA] border border-[#222426] p-5">
              <div className="text-xs font-mono text-[#6E7376] mb-1">
                Hărți sistemice 2D în stil gravură vectorială (Figurile 1–7 din monografie)
              </div>
              <h2 className="font-serif text-2xl font-bold text-[#222426]">
                Laboratorul diagramelor cauzale din monografie
              </h2>
              <p className="text-xs sm:text-sm text-[#6E7376] mt-1">
                Interacționați cu toate cele șapte diagrame vectoriale ale lucrării pentru a inspecta propagarea stresului alostatic, dubla falsificare axiologică, deturnarea buclei OODA, filtrele Umbrei colective, matricea lui Cipolla, bifurcația Track A / Track B și protocolul în trei faze.
              </p>
            </div>

            <InteractiveFigures
              figureId={labFigureId}
              onSelectFigure={(id) => setLabFigureId(id)}
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
        <div className="max-w-[1440px] mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#6E7376]">
          <div>
            <span className="font-serif font-bold text-[#222426]">
              Diagnosticul războiului cognitiv în România (Versiunea 1.0)
            </span>
            <span> · </span>
            <span>
              Arhitectura instituțională, neurocognitivă și culturală a vulnerabilității și rezilienței societale
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={() => {
                setIsPortalOpen(false);
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
                setParcursSubMode('subcapitole');
              }}
              className="hover:text-[#222426] transition-colors cursor-pointer"
            >
              Parcurs pas cu pas (19 secțiuni)
            </button>
            <span>·</span>
            <button
              onClick={() => {
                setActiveView('parcurs');
                setParcursSubMode('patru-acte');
              }}
              className="hover:text-[#222426] transition-colors cursor-pointer"
            >
              Prezentare în 4 acte
            </button>
            <span>·</span>
            <button
              onClick={() => setActiveView('diagrame')}
              className="hover:text-[#222426] transition-colors cursor-pointer"
            >
              Cele 7 figuri vectoriale
            </button>
            <span>·</span>
            <button
              onClick={() => setActiveView('pdf')}
              className="hover:text-[#222426] transition-colors cursor-pointer"
            >
              Document PDF original
            </button>
          </div>
        </div>
      </footer>

      {/* GLOBAL SEARCH MODAL */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onNavigateToStep={(stepNum) => {
          setActiveView('parcurs');
          setParcursSubMode('subcapitole');
          handleStepSelect(stepNum);
        }}
      />
    </div>
  );
}

export default App;

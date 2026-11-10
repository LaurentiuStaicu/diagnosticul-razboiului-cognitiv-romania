import React, { useState } from 'react';
import { GLOSSARY_CONCEPTS, BIBLIOGRAPHY_DATA, MASTER_STYLE_PROMPT } from '../data/tablesAndReference';
import { StratumId } from '../data/types';
import { Search, Copy, Check } from 'lucide-react';
import { CitationBox } from './CitationBox';

export const GlossaryAndBibliographyView: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'glossary' | 'bibliography' | 'blueprint'>('glossary');
  const [searchQuery, setSearchQuery] = useState('');
  const [stratumFilter, setStratumFilter] = useState<'ALL' | StratumId>('ALL');
  const [domainFilter, setDomainFilter] = useState<string>('ALL');
  const [copiedPrompt, setCopiedPrompt] = useState(false);

  const filteredGlossary = GLOSSARY_CONCEPTS.filter((item) => {
    const matchesStratum = stratumFilter === 'ALL' || item.stratum === stratumFilter;
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !q ||
      item.term.toLowerCase().includes(q) ||
      item.authors.toLowerCase().includes(q) ||
      item.definition.toLowerCase().includes(q) ||
      item.monographContext.toLowerCase().includes(q);
    return matchesStratum && matchesSearch;
  });

  const domains = [
    'ALL',
    'Sociologie instituțională',
    'Neuroștiințe și psihobiologie',
    'Cibernetică și semiotică',
    'Psihologie analitică și memorie',
    'Geopolitică și ideologie rusă'
  ];

  const filteredBibliography = BIBLIOGRAPHY_DATA.filter((item) => {
    const matchesDomain = domainFilter === 'ALL' || item.domain === domainFilter;
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !q ||
      item.authors.toLowerCase().includes(q) ||
      item.title.toLowerCase().includes(q) ||
      item.year.toLowerCase().includes(q) ||
      item.fullCitation.toLowerCase().includes(q);
    return matchesDomain && matchesSearch;
  });

  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(MASTER_STYLE_PROMPT);
    setCopiedPrompt(true);
    setTimeout(() => setCopiedPrompt(false), 2500);
  };

  return (
    <div className="space-y-6">
      {/* Header & Sub-nav */}
      <div className="bg-[#F4F1EA] border border-[#222426] p-5">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="text-xs font-mono text-[#6E7376] mb-1">
              Aparat conceptual, surse academice verificate și directive de prezentare
            </div>
            <h2 className="font-serif text-2xl font-bold text-[#222426]">
              Glosar teoretic, bibliografie integrală și șablon vizual
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveTab('glossary')}
              className={`px-3.5 py-2 text-xs font-medium border transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                activeTab === 'glossary'
                  ? 'bg-[#222426] text-[#F6F5EE] border-[#222426]'
                  : 'bg-[#F6F5EE] text-[#222426] border-[#8C9BA5] hover:border-[#222426]'
              }`}
            >
              Glosar conceptual și autori
            </button>
            <button
              onClick={() => setActiveTab('bibliography')}
              className={`px-3.5 py-2 text-xs font-medium border transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                activeTab === 'bibliography'
                  ? 'bg-[#222426] text-[#F6F5EE] border-[#222426]'
                  : 'bg-[#F6F5EE] text-[#222426] border-[#8C9BA5] hover:border-[#222426]'
              }`}
            >
              Bibliografie integrală ({BIBLIOGRAPHY_DATA.length} lucrări, paginile 42–47)
            </button>
            <button
              onClick={() => setActiveTab('blueprint')}
              className={`px-3.5 py-2 text-xs font-medium border transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                activeTab === 'blueprint'
                  ? 'bg-[#222426] text-[#F6F5EE] border-[#222426]'
                  : 'bg-[#F6F5EE] text-[#222426] border-[#8C9BA5] hover:border-[#222426]'
              }`}
            >
              Șablon de identitate vizuală (Master Blueprint)
            </button>
          </div>
        </div>

        {activeTab !== 'blueprint' && (
          <div className="mt-5 pt-4 border-t border-[#D0D5D9] flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-[#6E7376] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={
                  activeTab === 'glossary'
                    ? 'Căutați un concept (ex. închidere operațională, alostazie, OODA, Bobok, Edinger)...'
                    : 'Căutați un autor, an sau titlu în bibliografie (ex. Luhmann, Sapolsky, Lefebvre, Lotman)...'
                }
                className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm bg-[#F6F5EE] border border-[#222426] text-[#222426] placeholder:text-[#6E7376] focus:outline-none focus:ring-2 focus:ring-[#E5B822]"
              />
            </div>

            {activeTab === 'glossary' && (
              <div className="flex flex-wrap gap-1.5">
                {(['ALL', 'A', 'B', 'C'] as const).map((st) => (
                  <button
                    key={st}
                    onClick={() => setStratumFilter(st)}
                    className={`px-3 py-2 text-xs font-medium border transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                      stratumFilter === st
                        ? 'bg-[#E5B822] text-[#222426] border-[#222426] font-semibold'
                        : 'bg-[#F6F5EE] text-[#222426] border-[#8C9BA5]'
                    }`}
                  >
                    {st === 'ALL' ? 'Toate straturile' : `Stratul ${st}`}
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

        {activeTab === 'bibliography' && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {domains.map((dom) => (
              <button
                key={dom}
                onClick={() => setDomainFilter(dom)}
                className={`px-2.5 py-1 text-xs font-medium border transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  domainFilter === dom
                    ? 'bg-[#E5B822] text-[#222426] border-[#222426] font-semibold'
                    : 'bg-[#F6F5EE] text-[#222426] border-[#8C9BA5]'
                }`}
              >
                {dom === 'ALL' ? 'Toate domeniile științifice' : dom}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* GLOSAR CONCEPTUAL */}
      {activeTab === 'glossary' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filteredGlossary.map((concept) => (
            <div
              key={concept.id}
              className="bg-[#F6F5EE] border border-[#222426] p-5 flex flex-col justify-between"
            >
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-[#6E7376] pb-2 mb-3 border-b border-[#D0D5D9]">
                  <span>
                    Stratul {concept.stratum} · {concept.domain}
                  </span>
                  <span
                    className={`font-semibold ${
                      concept.polarity === 'tension'
                        ? 'text-[#F01E1E]'
                        : concept.polarity === 'synthesis'
                        ? 'text-[#D9A714]'
                        : 'text-[#222426]'
                    }`}
                  >
                    {concept.polarity === 'tension'
                      ? 'Mecanism de vulnerabilitate / tensiune'
                      : concept.polarity === 'synthesis'
                      ? 'Mecanism de reziliență / sinteză'
                      : 'Cadru analitic structural'}
                  </span>
                </div>

                <h3 className="font-serif text-lg font-bold text-[#222426]">
                  {concept.term}
                </h3>
                <div className="text-xs font-mono text-[#6E7376] mt-1 mb-3">
                  Referințe teoretice ({concept.authors})
                </div>

                <p className="text-xs sm:text-sm text-[#222426] leading-relaxed mb-3">
                  {concept.definition}
                </p>
              </div>

              <div
                className={`p-3 border text-xs leading-relaxed ${
                  concept.polarity === 'tension'
                    ? 'border-[#F01E1E]/60 bg-[#F01E1E]/5 text-[#222426]'
                    : 'border-[#D9A714] bg-[#E5B822]/15 text-[#222426]'
                }`}
              >
                <span className="font-mono font-semibold block mb-0.5">
                  Funcția în arhitectura monografiei
                </span>
                {concept.monographContext}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* BIBLIOGRAFIE INTEGRALĂ */}
      {activeTab === 'bibliography' && (
        <div className="bg-[#F6F5EE] border border-[#222426] divide-y divide-[#D0D5D9]">
          <div className="p-3.5 bg-[#F4F1EA] text-xs font-mono text-[#6E7376] flex items-center justify-between">
            <span>
              Lucrări afișate ({filteredBibliography.length} din {BIBLIOGRAPHY_DATA.length} lucrări academice individuale verificate în paginile 42–47)
            </span>
            <span>Ordine alfabetică după autor și an (APA 7th Edition)</span>
          </div>

          <div className="p-4 bg-[#F6F5EE]">
            <CitationBox />
          </div>

          {filteredBibliography.map((item, idx) => (
            <div key={item.id} className="p-4 sm:p-5 hover:bg-[#F4F1EA] transition-colors">
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-[#6E7376] mb-1">
                <span>
                  [{idx + 1}] {item.authors} ({item.year})
                </span>
                <span>{item.domain}</span>
              </div>
              <p className="font-serif text-sm sm:text-base text-[#222426] leading-relaxed pl-[1.4em] -indent-[1.4em]">
                {item.fullCitation}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* MASTER BLUEPRINT */}
      {activeTab === 'blueprint' && (
        <div className="space-y-6">
          <div className="bg-[#F6F5EE] border border-[#222426] p-6 space-y-6">
            <div className="border-b border-[#222426] pb-4">
              <div className="text-xs font-mono text-[#6E7376] mb-1">
                Directive de sistem, paletă cromatică și dinamică narativă
              </div>
              <h3 className="font-serif text-xl font-bold text-[#222426]">
                Șablon universal de identitate vizuală și prezentare (Master Blueprint)
              </h3>
            </div>

            {/* Color Palette Swatches */}
            <div>
              <h4 className="font-serif text-base font-bold text-[#222426] mb-3">
                Paleta cromatică obligatorie (Diagramă conceptuală 2D și gravură vectorială)
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
                <div className="border border-[#222426] p-3 bg-[#F6F5EE]">
                  <div className="h-10 bg-[#F6F5EE] border border-[#222426] mb-2" />
                  <div className="text-xs font-bold text-[#222426]">Fundal principal (Canvas)</div>
                  <div className="text-[11px] font-mono text-[#6E7376]">#F6F5EE / #F4F1EA</div>
                  <div className="text-[11px] text-[#222426] mt-1">
                    Alb-crem cald / pergament deschis cu textură editorială.
                  </div>
                </div>

                <div className="border border-[#222426] p-3 bg-[#F6F5EE]">
                  <div className="h-10 bg-[#222426] border border-[#222426] mb-2" />
                  <div className="text-xs font-bold text-[#222426]">Structură și tipografie</div>
                  <div className="text-[11px] font-mono text-[#6E7376]">#222426 / #2C3539</div>
                  <div className="text-[11px] text-[#222426] mt-1">
                    Negru-cărbune și gri-antracit închis, linii vectoriale curate.
                  </div>
                </div>

                <div className="border border-[#222426] p-3 bg-[#F6F5EE]">
                  <div className="h-10 bg-[#6E7376] border border-[#222426] mb-2" />
                  <div className="text-xs font-bold text-[#222426]">Context și tranziții</div>
                  <div className="text-[11px] font-mono text-[#6E7376]">#6E7376 / #8C9BA5 / #D0D5D9</div>
                  <div className="text-[11px] text-[#222426] mt-1">
                    Gri mediu și gri-ardezie pentru straturi de context.
                  </div>
                </div>

                <div className="border border-[#222426] p-3 bg-[#F6F5EE]">
                  <div className="h-10 bg-[#E5B822] border border-[#222426] mb-2" />
                  <div className="text-xs font-bold text-[#222426]">Claritate și sinteză</div>
                  <div className="text-[11px] font-mono text-[#6E7376]">#E5B822 / #D9A714</div>
                  <div className="text-[11px] text-[#222426] mt-1">
                    Galben-muștar / auriu-ocru pentru direcții adaptative și soluții.
                  </div>
                </div>

                <div className="border border-[#222426] p-3 bg-[#F6F5EE]">
                  <div className="h-10 bg-[#F01E1E] border border-[#222426] mb-2" />
                  <div className="text-xs font-bold text-[#222426]">Tensiune și blocaj</div>
                  <div className="text-[11px] font-mono text-[#6E7376]">#F01E1E</div>
                  <div className="text-[11px] text-[#222426] mt-1">
                    Roșu-vermilion strict pentru puncte de presiune și bucle vicioase.
                  </div>
                </div>
              </div>
            </div>

            {/* Prompt Box */}
            <div className="bg-[#F4F1EA] border-2 border-[#222426] p-5">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                <div>
                  <div className="text-xs font-mono text-[#6E7376]">
                    Prompt scurt gata de copiat în câmpul „Customize” din Gemini Notebook (modul cinematic)
                  </div>
                  <h4 className="font-serif text-base font-bold text-[#222426]">
                    Instrucțiune de generare (șablonul de stil din Master Blueprint)
                  </h4>
                </div>
                <button
                  onClick={handleCopyPrompt}
                  className="flex items-center gap-2 px-4 py-2 text-xs font-semibold bg-[#E5B822] text-[#222426] border border-[#222426] hover:bg-[#D9A714] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                >
                  {copiedPrompt ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Prompt copiat</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copiază instrucțiunea de stil</span>
                    </>
                  )}
                </button>
              </div>
              <pre className="whitespace-pre-wrap font-mono text-xs sm:text-sm text-[#222426] bg-[#F6F5EE] p-4 border border-[#8C9BA5] leading-relaxed">
                {MASTER_STYLE_PROMPT}
              </pre>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

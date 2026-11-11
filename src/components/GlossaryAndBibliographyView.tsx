import React, { useState } from 'react';
import { GLOSSARY_CONCEPTS, BIBLIOGRAPHY_DATA, MASTER_STYLE_PROMPT } from '../data/tablesAndReference';
import { StratumId } from '../data/types';
import { Search, Copy, Check } from 'lucide-react';

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
      <div className="bg-[#F6F5EE] border border-[#222426] p-5">
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
              Bibliografie integrală · {BIBLIOGRAPHY_DATA.length} lucrări
            </button>
            <button
              onClick={() => setActiveTab('blueprint')}
              className={`px-3.5 py-2 text-xs font-medium border transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                activeTab === 'blueprint'
                  ? 'bg-[#222426] text-[#F6F5EE] border-[#222426]'
                  : 'bg-[#F6F5EE] text-[#222426] border-[#8C9BA5] hover:border-[#222426]'
              }`}
            >
              Șablon de identitate vizuală
            </button>
          </div>
        </div>

        {activeTab !== 'blueprint' && (
          <div className="mt-5 pt-4 border-t border-[#8C9BA5] flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-[#6E7376] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={
                  activeTab === 'glossary'
                    ? 'Căutați un concept: închidere operațională, alostazie, OODA, Bobok, Edinger...'
                    : 'Căutați un autor, an sau titlu în bibliografie: Luhmann, Sterling, Menon, Sapolsky, Lefebvre, Lotman...'
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
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-[#6E7376] pb-2 mb-3 border-b border-[#8C9BA5]">
                  <span>
                    Stratul {concept.stratum} · {concept.domain}
                  </span>
                  <span
                    className={`font-semibold ${
                      concept.polarity === 'tension'
                        ? 'text-[#F01E1E]'
                        : concept.polarity === 'synthesis'
                        ? 'text-[#222426] bg-[#E5B822]/25 px-2 py-0.5 border border-[#222426]'
                        : 'text-[#222426]'
                    }`}
                  >
                    {concept.polarity === 'tension'
                      ? 'Vulnerabilitate și tensiune'
                      : concept.polarity === 'synthesis'
                      ? 'Reziliență și sinteză'
                      : 'Cadru analitic'}
                  </span>
                </div>

                <h3 className="font-serif text-lg font-bold text-[#222426]">
                  {concept.term}
                </h3>
                <div className="text-xs font-mono text-[#6E7376] mt-1 mb-3">
                  Referințe teoretice: {concept.authors}
                </div>

                <p className="text-xs sm:text-sm text-[#222426] leading-relaxed mb-3">
                  {concept.definition}
                </p>
              </div>

              <div
                className={`p-3 border text-xs leading-relaxed ${
                  concept.polarity === 'tension'
                    ? 'border-[#F01E1E] bg-[#F01E1E]/5 text-[#222426]'
                    : 'border-[#222426] bg-[#E5B822]/20 text-[#222426]'
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
        <div className="bg-[#F6F5EE] border border-[#222426] divide-y divide-[#8C9BA5]">
          <div className="p-3.5 bg-[#F6F5EE] text-xs font-mono text-[#6E7376] flex flex-wrap items-center justify-between gap-2">
            <span>
              {filteredBibliography.length} din {BIBLIOGRAPHY_DATA.length} lucrări academice
            </span>
            <span>Ordine alfabetică după autor și an · APA 7th Edition</span>
          </div>

          {filteredBibliography.map((item, idx) => (
            <div key={item.id} className="p-4 sm:p-5 hover:bg-[#E5B822]/10 transition-colors">
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
                Șablon universal de identitate vizuală și prezentare
              </h3>
            </div>

            {/* Color Palette Swatches */}
            <div>
              <h4 className="font-serif text-base font-bold text-[#222426] mb-3">
                Paleta cromatică obligatorie · Diagramă conceptuală 2D și gravură vectorială
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
                <div className="border border-[#222426] p-3 bg-[#F6F5EE]">
                  <div className="h-10 bg-[#F6F5EE] border border-[#222426] mb-2" />
                  <div className="text-xs font-bold text-[#222426]">Fundal principal · Canvas</div>
                  <div className="text-[11px] font-mono text-[#6E7376]">#F6F5EE</div>
                  <div className="text-[11px] text-[#222426] mt-1">
                    Alb-crem cald cu textură editorială.
                  </div>
                </div>

                <div className="border border-[#222426] p-3 bg-[#F6F5EE]">
                  <div className="h-10 bg-[#222426] border border-[#222426] mb-2" />
                  <div className="text-xs font-bold text-[#222426]">Structură și tipografie</div>
                  <div className="text-[11px] font-mono text-[#6E7376]">#222426</div>
                  <div className="text-[11px] text-[#222426] mt-1">
                    Negru-cărbune, contururi primare și linii vectoriale curate.
                  </div>
                </div>

                <div className="border border-[#222426] p-3 bg-[#F6F5EE]">
                  <div className="h-10 bg-[#6E7376] border border-[#222426] mb-2" />
                  <div className="text-xs font-bold text-[#222426]">Context și tranziții</div>
                  <div className="text-[11px] font-mono text-[#6E7376]">#6E7376 / #8C9BA5</div>
                  <div className="text-[11px] text-[#222426] mt-1">
                    Gri-ardezie pentru axe, delimitări de straturi și contururi secundare.
                  </div>
                </div>

                <div className="border border-[#222426] p-3 bg-[#F6F5EE]">
                  <div className="h-10 bg-[#E5B822] border border-[#222426] mb-2" />
                  <div className="text-xs font-bold text-[#222426]">Claritate și sinteză</div>
                  <div className="text-[11px] font-mono text-[#6E7376]">#E5B822</div>
                  <div className="text-[11px] text-[#222426] mt-1">
                    Galben-muștar (conturat cu #222426) pentru filtre morale, Track B și soluții.
                  </div>
                </div>

                <div className="border border-[#222426] p-3 bg-[#F6F5EE]">
                  <div className="h-10 bg-[#F01E1E] border border-[#222426] mb-2" />
                  <div className="text-xs font-bold text-[#222426]">Tensiune și blocaj</div>
                  <div className="text-[11px] font-mono text-[#6E7376]">#F01E1E</div>
                  <div className="text-[11px] text-[#222426] mt-1">
                    Roșu-vermilion strict pentru puncte de presiune, Track A și bucle de blocaj.
                  </div>
                </div>
              </div>
            </div>

            {/* Prompt Box */}
            <div className="bg-[#F6F5EE] border-2 border-[#222426] p-5">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                <div>
                  <div className="text-xs font-mono text-[#6E7376]">
                    Prompt scurt gata de copiat pentru generarea planșelor vizuale
                  </div>
                  <h4 className="font-serif text-base font-bold text-[#222426]">
                    Instrucțiune de generare · Șablonul de stil al monografiei
                  </h4>
                </div>
                <button
                  onClick={handleCopyPrompt}
                  className="flex items-center gap-2 px-4 py-2 text-xs font-semibold bg-[#E5B822] text-[#222426] border border-[#222426] hover:bg-[#E5B822]/85 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
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

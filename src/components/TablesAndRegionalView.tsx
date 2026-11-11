import React, { useState } from 'react';
import {
  TABLE_1_DATA,
  TABLE_2_DATA,
  OPERATIONAL_PROTOCOL_TABLE,
  REGIONAL_CONTROL_GROUP
} from '../data/tablesAndReference';
import { StratumId } from '../data/types';

export const TablesAndRegionalView: React.FC = () => {
  const [activeSubView, setActiveSubView] = useState<'table1' | 'table2' | 'regional'>('table1');
  const [selectedStratumFilter, setSelectedStratumFilter] = useState<'ALL' | StratumId>('ALL');
  const [selectedPhaseFilter, setSelectedPhaseFilter] = useState<'ALL' | 'Faza I' | 'Faza II' | 'Faza III'>('ALL');
  const [selectedCountryId, setSelectedCountryId] = useState<string>('estonia');

  const filteredTable2 =
    selectedPhaseFilter === 'ALL'
      ? TABLE_2_DATA
      : TABLE_2_DATA.filter((row) => row.phaseCode === selectedPhaseFilter);

  const filteredOperationalProtocol =
    selectedPhaseFilter === 'ALL'
      ? OPERATIONAL_PROTOCOL_TABLE
      : OPERATIONAL_PROTOCOL_TABLE.filter((row) => row.phaseCode === selectedPhaseFilter);

  return (
    <div className="space-y-8">
      {/* Sub-navigation bar */}
      <div className="bg-[#F6F5EE] border border-[#222426] p-4 sm:p-5">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="text-xs font-mono text-[#6E7376] mb-1">
              Sinteze matriciale și analiză comparativă · Capitolele 2, 5 și 6
            </div>
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#222426] headline-balance">
              Tabelele de sinteză 1 și 2, matricea instituțională și grupul de control regional
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveSubView('table1')}
              className={`px-3.5 py-2 text-xs font-medium border transition-colors text-left sm:whitespace-nowrap cursor-pointer ${
                activeSubView === 'table1'
                  ? 'bg-[#222426] text-[#F6F5EE] border-[#222426]'
                  : 'bg-[#F6F5EE] text-[#222426] border-[#8C9BA5] hover:border-[#222426]'
              }`}
            >
              Tabelul 1 · Sinteza diagnosticului pe 3 straturi
            </button>
            <button
              onClick={() => setActiveSubView('table2')}
              className={`px-3.5 py-2 text-xs font-medium border transition-colors text-left sm:whitespace-nowrap cursor-pointer ${
                activeSubView === 'table2'
                  ? 'bg-[#222426] text-[#F6F5EE] border-[#222426]'
                  : 'bg-[#F6F5EE] text-[#222426] border-[#8C9BA5] hover:border-[#222426]'
              }`}
            >
              Tabelul 2 · Protocolul Lalonde-Dever și matricea instituțională
            </button>
            <button
              onClick={() => setActiveSubView('regional')}
              className={`px-3.5 py-2 text-xs font-medium border transition-colors text-left sm:whitespace-nowrap cursor-pointer ${
                activeSubView === 'regional'
                  ? 'bg-[#222426] text-[#F6F5EE] border-[#222426]'
                  : 'bg-[#F6F5EE] text-[#222426] border-[#8C9BA5] hover:border-[#222426]'
              }`}
            >
              Grupul de control regional · Estonia, Polonia, Moldova
            </button>
          </div>
        </div>
      </div>

      {/* TABELUL 1 */}
      {activeSubView === 'table1' && (
        <div className="space-y-5">
          <div className="bg-[#F6F5EE] border border-[#222426] p-4 sm:p-5">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-4 pb-4 border-b border-[#8C9BA5]">
              <div>
                <h3 className="font-serif text-lg font-bold text-[#222426]">
                  Tabelul 1. Sinteza arhitecturii cauzale ascendente a diagnosticului instituțional, neurocognitiv și cultural
                </h3>
                <p className="text-xs text-[#6E7376] mt-1">
                  Articularea celor cinci dimensiuni majore de vulnerabilitate societală pe Straturile A, B și C · Paginile 31–34 din monografie.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-1.5">
                <span className="text-xs font-mono text-[#6E7376] mr-1">Evidențiere strat</span>
                {(['ALL', 'A', 'B', 'C'] as const).map((stratum) => (
                  <button
                    key={stratum}
                    onClick={() => setSelectedStratumFilter(stratum)}
                    className={`px-3 py-1.5 text-xs font-medium border transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                      selectedStratumFilter === stratum
                        ? 'bg-[#222426] text-[#F6F5EE] border-[#222426]'
                        : 'bg-[#F6F5EE] text-[#222426] border-[#8C9BA5]'
                    }`}
                  >
                    {stratum === 'ALL' ? 'Toate straturile · A, B, C' : `Stratul ${stratum}`}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile Stacked Cards Layout (<640px) */}
            <div className="sm:hidden space-y-4">
              {TABLE_1_DATA.map((row) => (
                <div key={row.id} className="bg-[#F6F5EE] border-2 border-[#222426] p-4 space-y-3 text-xs">
                  <div className="font-serif font-bold text-sm text-[#222426] pb-2 border-b border-[#222426] bg-[#F6F5EE] -mx-4 -mt-4 p-3">
                    {row.dimensionTitle}
                  </div>
                  {(selectedStratumFilter === 'ALL' || selectedStratumFilter === 'A') && (
                    <div className="space-y-1">
                      <div className="font-mono font-bold text-[11px] text-[#6E7376]">
                        Stratul A · Instituțional, istoric și sociologic:
                      </div>
                      <p className="text-[#222426] leading-relaxed">{row.stratumA}</p>
                    </div>
                  )}
                  {(selectedStratumFilter === 'ALL' || selectedStratumFilter === 'B') && (
                    <div className="space-y-1 pt-2 border-t border-[#8C9BA5]">
                      <div className="font-mono font-bold text-[11px] text-[#6E7376]">
                        Stratul B · Neurocognitiv, semiotic și axiologic:
                      </div>
                      <p className="text-[#222426] leading-relaxed">{row.stratumB}</p>
                    </div>
                  )}
                  {(selectedStratumFilter === 'ALL' || selectedStratumFilter === 'C') && (
                    <div className="space-y-1 pt-2 border-t border-[#8C9BA5]">
                      <div className="font-mono font-bold text-[11px] text-[#6E7376]">
                        Stratul C · Inconștient cultural și arhetipal:
                      </div>
                      <p className="text-[#222426] leading-relaxed">{row.stratumC}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Desktop Table View (>=640px) */}
            <div className="hidden sm:block overflow-x-auto">
              <table className="w-full min-w-[680px] border-collapse border border-[#222426] text-left bg-[#F6F5EE]">
                <thead>
                  <tr className="bg-[#F6F5EE] border-b-2 border-[#222426]">
                    <th className="p-4 border-b border-[#222426] text-xs font-serif font-bold text-[#222426] w-1/5">
                      Dimensiunea analitică și domeniul de vulnerabilitate
                    </th>
                    {(selectedStratumFilter === 'ALL' || selectedStratumFilter === 'A') && (
                      <th className="p-4 border-b border-[#222426] text-xs font-serif font-bold text-[#222426] w-1/4">
                        Stratul A · Mecanismul instituțional, istoric și sociologic
                      </th>
                    )}
                    {(selectedStratumFilter === 'ALL' || selectedStratumFilter === 'B') && (
                      <th className="p-4 border-b border-[#222426] text-xs font-serif font-bold text-[#222426] w-1/4">
                        Stratul B · Mecanismul neurocognitiv, semiotic și axiologic
                      </th>
                    )}
                    {(selectedStratumFilter === 'ALL' || selectedStratumFilter === 'C') && (
                      <th className="p-4 border-b border-[#222426] text-xs font-serif font-bold text-[#222426] w-1/4">
                        Stratul C · Expresia în inconștientul cultural și dinamica arhetipală
                      </th>
                    )}
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#222426]">
                  {TABLE_1_DATA.map((row) => (
                    <tr key={row.id} className="align-top hover:bg-[#E5B822]/10 transition-colors">
                      <td className="p-4 border-b border-[#8C9BA5] font-serif font-semibold text-sm text-[#222426] bg-[#F6F5EE]">
                        {row.dimensionTitle}
                      </td>
                      {(selectedStratumFilter === 'ALL' || selectedStratumFilter === 'A') && (
                        <td className="p-4 border-b border-[#8C9BA5] text-xs sm:text-sm text-[#222426] leading-relaxed">
                          {row.stratumA}
                        </td>
                      )}
                      {(selectedStratumFilter === 'ALL' || selectedStratumFilter === 'B') && (
                        <td className="p-4 border-b border-[#8C9BA5] text-xs sm:text-sm text-[#222426] leading-relaxed">
                          {row.stratumB}
                        </td>
                      )}
                      {(selectedStratumFilter === 'ALL' || selectedStratumFilter === 'C') && (
                        <td className="p-4 border-b border-[#8C9BA5] text-xs sm:text-sm text-[#222426] leading-relaxed">
                          {row.stratumC}
                        </td>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* TABELUL 2 + MATRICEA DE OPERAȚIONALIZARE INSTITUȚIONALĂ */}
      {activeSubView === 'table2' && (
        <div className="space-y-6">
          <div className="bg-[#F6F5EE] border border-[#222426] p-4 sm:p-5">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-4 pb-4 border-b border-[#8C9BA5]">
              <div>
                <h3 className="font-serif text-lg font-bold text-[#222426]">
                  Tabelul 2. Protocolul secvențial de reconstrucție a rezilienței cognitive și instituționale structurat pe determinanții modelului Lalonde-Dever
                </h3>
                <p className="text-xs text-[#6E7376] mt-1">
                  Ordinea cauzală obligatorie a intervențiilor pe cele trei faze și cei patru determinanți sistemici · Paginile 39–42 din monografie.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-1.5">
                {(['ALL', 'Faza I', 'Faza II', 'Faza III'] as const).map((phase) => (
                  <button
                    key={phase}
                    onClick={() => setSelectedPhaseFilter(phase)}
                    className={`px-3 py-1.5 text-xs font-medium border transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                      selectedPhaseFilter === phase
                        ? 'bg-[#E5B822] text-[#222426] border-[#222426] font-semibold'
                        : 'bg-[#F6F5EE] text-[#222426] border-[#8C9BA5]'
                    }`}
                  >
                    {phase === 'ALL' ? 'Toate cele 3 faze' : phase}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile Stacked Cards Layout (<640px) */}
            <div className="sm:hidden space-y-4">
              {filteredTable2.map((row) => (
                <div key={row.id} className="bg-[#F6F5EE] border-2 border-[#222426] p-4 space-y-3 text-xs">
                  <div className="font-mono font-bold text-xs text-[#222426] pb-2 border-b border-[#222426] bg-[#E5B822]/25 -mx-4 -mt-4 p-3">
                    {row.phaseCode} · {row.horizon}
                  </div>
                  <div className="space-y-1">
                    <div className="font-mono font-bold text-[11px] text-[#6E7376]">
                      Biologia umană și rezerva neurocognitivă:
                    </div>
                    <p className="text-[#222426] leading-relaxed">{row.humanBiology}</p>
                  </div>
                  <div className="space-y-1 pt-2 border-t border-[#8C9BA5]">
                    <div className="font-mono font-bold text-[11px] text-[#6E7376]">
                      Mediul digital și sociospațial:
                    </div>
                    <p className="text-[#222426] leading-relaxed">{row.digitalAndSociospatial}</p>
                  </div>
                  <div className="space-y-1 pt-2 border-t border-[#8C9BA5]">
                    <div className="font-mono font-bold text-[11px] text-[#6E7376]">
                      Stil de viață informațional și axiologie:
                    </div>
                    <p className="text-[#222426] leading-relaxed">{row.informationalLifestyle}</p>
                  </div>
                  <div className="space-y-1 pt-2 border-t border-[#8C9BA5]">
                    <div className="font-mono font-bold text-[11px] text-[#6E7376]">
                      Sistem instituțional și constituțional:
                    </div>
                    <p className="text-[#222426] leading-relaxed">{row.institutionalSystem}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop Table View (>=640px) */}
            <div className="hidden sm:block overflow-x-auto">
              <table className="w-full min-w-[680px] border-collapse border border-[#222426] text-left bg-[#F6F5EE]">
                <thead>
                  <tr className="bg-[#F6F5EE] border-b-2 border-[#222426]">
                    <th className="p-4 border-b border-[#222426] text-xs font-serif font-bold text-[#222426] w-1/4">
                      Biologia umană și rezerva neurocognitivă
                    </th>
                    <th className="p-4 border-b border-[#222426] text-xs font-serif font-bold text-[#222426] w-1/4">
                      Mediul digital și sociospațial
                    </th>
                    <th className="p-4 border-b border-[#222426] text-xs font-serif font-bold text-[#222426] w-1/4">
                      Stilul de viață informațional, asociativ și filtrul moral
                    </th>
                    <th className="p-4 border-b border-[#222426] text-xs font-serif font-bold text-[#222426] w-1/4">
                      Sistemul instituțional, juridic și constituțional
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#222426]">
                  {filteredTable2.map((row) => (
                    <tr key={row.id} className="align-top hover:bg-[#E5B822]/10 transition-colors">
                      <td className="p-4 border-b border-[#8C9BA5] text-xs sm:text-sm text-[#222426] leading-relaxed">
                        <div className="text-xs font-mono font-bold text-[#222426] mb-1.5 pb-1 border-b border-[#8C9BA5]">
                          {row.phaseCode} · {row.horizon}
                        </div>
                        {row.humanBiology}
                      </td>
                      <td className="p-4 border-b border-[#8C9BA5] text-xs sm:text-sm text-[#222426] leading-relaxed">
                        <div className="text-xs font-mono font-bold text-[#6E7376] mb-1.5 pb-1 border-b border-[#8C9BA5]">
                          Determinant II · Mediu
                        </div>
                        {row.digitalAndSociospatial}
                      </td>
                      <td className="p-4 border-b border-[#8C9BA5] text-xs sm:text-sm text-[#222426] leading-relaxed">
                        <div className="text-xs font-mono font-bold text-[#6E7376] mb-1.5 pb-1 border-b border-[#8C9BA5]">
                          Determinant III · Stil de viață și axiologie
                        </div>
                        {row.informationalLifestyle}
                      </td>
                      <td className="p-4 border-b border-[#8C9BA5] text-xs sm:text-sm text-[#222426] leading-relaxed">
                        <div className="text-xs font-mono font-bold text-[#6E7376] mb-1.5 pb-1 border-b border-[#8C9BA5]">
                          Determinant I · Sistem instituțional
                        </div>
                        {row.institutionalSystem}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Matricea de operaționalizare instituțională (România și UE) */}
          <div className="bg-[#F6F5EE] border-2 border-[#222426] p-4 sm:p-5">
            <div className="mb-4 pb-3 border-b border-[#222426]">
              <div className="text-xs font-mono text-[#6E7376] mb-1">
                Operaționalizare administrativă, juridică și comunitară · Capitolul 6 · România și Uniunea Europeană
              </div>
              <h3 className="font-serif text-lg font-bold text-[#222426]">
                Matricea responsabilităților instituționale pe cele trei faze secvențiale: DNSC, ANCOM, CSAT, CNA, Ministerul Educației și Biserica Ortodoxă Română
              </h3>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[680px] border-collapse border border-[#222426] text-left bg-[#F6F5EE]">
                <thead>
                  <tr className="bg-[#222426] text-[#F6F5EE]">
                    <th className="p-3.5 border-r border-[#6E7376] text-xs font-serif font-bold w-1/6">
                      Faza și orizontul temporal
                    </th>
                    <th className="p-3.5 border-r border-[#6E7376] text-xs font-serif font-bold w-1/5">
                      Obiectivul strategic și neurocognitiv
                    </th>
                    <th className="p-3.5 border-r border-[#6E7376] text-xs font-serif font-bold w-1/3">
                      Acțiuni tactice, legislative și algoritmice · DSA Art. 34–35 și AI Act
                    </th>
                    <th className="p-3.5 text-xs font-serif font-bold w-1/4">
                      Instituții responsabile și parteneri societali · România și UE
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#222426]">
                  {filteredOperationalProtocol.map((row) => (
                    <tr key={row.id} className="align-top hover:bg-[#E5B822]/15 transition-colors">
                      <td className="p-4 border-r border-[#222426] bg-[#F6F5EE]">
                        <div className="font-serif font-bold text-sm text-[#222426]">
                          {row.phaseTitle}
                        </div>
                        <div className="text-xs font-mono text-[#6E7376] mt-1">
                          {row.horizon}
                        </div>
                      </td>
                      <td className="p-4 border-r border-[#222426] text-xs sm:text-sm text-[#222426] font-medium leading-relaxed">
                        {row.targetObjective}
                      </td>
                      <td className="p-4 border-r border-[#222426] text-xs sm:text-sm text-[#222426] leading-relaxed">
                        {row.concreteIntervention}
                      </td>
                      <td className="p-4 text-xs sm:text-sm text-[#222426] font-mono leading-relaxed bg-[#F6F5EE]">
                        {row.responsibleActors}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* GRUPUL DE CONTROL REGIONAL */}
      {activeSubView === 'regional' && (
        <div className="space-y-6">
          <div className="bg-[#F6F5EE] border border-[#222426] p-5">
            <h3 className="font-serif text-lg font-bold text-[#222426]">
              Comparația sistematică a României cu grupul de control regional · Subcapitolul 2.3
            </h3>
            <p className="text-xs sm:text-sm text-[#6E7376] mt-1 leading-relaxed">
              Analiza comparativă cu trei state expuse aceluiași vector de război cognitiv rus — Estonia, Polonia și Republica Moldova — permite izolarea variabilelor cauzale interne și demonstrează că vulnerabilitatea României nu decurge dintr-o fatalitate culturală, ci din ordinea instituțională semiconformată.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-5">
              {REGIONAL_CONTROL_GROUP.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setSelectedCountryId(item.id)}
                  className={`p-4 border-2 text-left transition-all cursor-pointer ${
                    selectedCountryId === item.id
                      ? item.statusType === 'tension'
                        ? 'border-[#F01E1E] bg-[#F01E1E]/10'
                        : 'border-[#222426] bg-[#E5B822]/25'
                      : 'border-[#8C9BA5] bg-[#F6F5EE] hover:border-[#222426]'
                  }`}
                >
                  <div className="text-xs font-mono text-[#6E7376] mb-1">
                    {item.statusType === 'tension' ? 'Diagnostic de vulnerabilitate' : 'Model de reziliență'}
                  </div>
                  <div className="font-serif text-sm font-bold text-[#222426]">
                    {item.country}
                  </div>
                </button>
              ))}
            </div>

            {/* Side-by-side comparison: Romania vs Selected Control Country */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
              {[
                REGIONAL_CONTROL_GROUP[0],
                REGIONAL_CONTROL_GROUP.find((c) => c.id === selectedCountryId && c.id !== 'romania') ||
                  REGIONAL_CONTROL_GROUP[1]
              ].map((country) => (
                <div
                  key={country.id}
                  className={`border-2 p-5 bg-[#F6F5EE] ${
                    country.statusType === 'tension' ? 'border-[#F01E1E]' : 'border-[#222426]'
                  }`}
                >
                  <div className="pb-3 mb-4 border-b border-[#8C9BA5]">
                    <div className="text-xs font-mono text-[#6E7376]">{country.roleInModel}</div>
                    <h4 className="font-serif text-lg font-bold text-[#222426] mt-0.5">
                      {country.country}
                    </h4>
                  </div>

                  <div className="space-y-3 text-xs sm:text-sm">
                    <div className="p-3 bg-[#F6F5EE] border border-[#8C9BA5]">
                      <div className="font-mono text-xs font-semibold text-[#6E7376] mb-1">
                        Profil de expunere la vectorul rus
                      </div>
                      <p className="text-[#222426] leading-relaxed">{country.exposureProfile}</p>
                    </div>

                    <div className="p-3 bg-[#F6F5EE] border border-[#8C9BA5]">
                      <div className="font-mono text-xs font-semibold text-[#222426] mb-1">
                        Stratul A · Arhitectura instituțională și serviciile publice
                      </div>
                      <p className="text-[#222426] leading-relaxed">{country.stratumA}</p>
                    </div>

                    <div className="p-3 bg-[#F6F5EE] border border-[#8C9BA5]">
                      <div className="font-mono text-xs font-semibold text-[#222426] mb-1">
                        Stratul B · Pregătirea neurocognitivă și apărarea informațională
                      </div>
                      <p className="text-[#222426] leading-relaxed">{country.stratumB}</p>
                    </div>

                    <div className="p-3 bg-[#F6F5EE] border border-[#8C9BA5]">
                      <div className="font-mono text-xs font-semibold text-[#222426] mb-1">
                        Stratul C · Inconștientul cultural și axa Ego–Sine
                      </div>
                      <p className="text-[#222426] leading-relaxed">{country.stratumC}</p>
                    </div>

                    <div
                      className={`p-3.5 border ${
                        country.statusType === 'tension'
                          ? 'border-[#F01E1E] bg-[#F01E1E]/10'
                          : 'border-[#222426] bg-[#E5B822]/25'
                      }`}
                    >
                      <div className="font-mono text-xs font-bold text-[#222426] mb-1">
                        Concluzie cauzală demonstrată
                      </div>
                      <p className="text-[#222426] font-medium leading-relaxed">
                        {country.strategicLesson}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

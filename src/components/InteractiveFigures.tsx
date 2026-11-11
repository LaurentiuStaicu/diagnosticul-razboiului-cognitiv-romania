import React, { useState } from 'react';
import { SocialShareButtons } from './SocialShareButtons';

interface InteractiveFiguresProps {
  figureId: number;
  onSelectFigure?: (id: number) => void;
  showSelector?: boolean;
}

export const FIGURE_METADATA: Record<
  number,
  {
    id: number;
    title: string;
    subtitle: string;
    chapterRef: string;
    pdfPage: number;
    caption: string;
    methodologicalNote: string;
  }
> = {
  1: {
    id: 1,
    title: 'Figura 1. Arhitectura cauzală pe trei straturi a vulnerabilității societale endogene',
    subtitle:
      'Articularea modelului Macro–Micro–Macro al lui Coleman și Hedström cu determinanții sistemici Lalonde-Dever',
    chapterRef: 'Capitolul 1 · Subcapitolul 1.3',
    pdfPage: 8,
    caption:
      'Deficitele structurale din Stratul A — deficitul de servicii publice, închiderea operațională incompletă a instituțiilor și mediul socioeconomic precar — induc în Stratul B o stare cronică de stres alostatic și hipervigilență amigdaliană, care inhibă deliberarea prefrontală și împinge cetățenii spre comportamente reactive de supraviețuire. Aceste mecanisme neurocognitive se sedimentează în Stratul C sub forma fatalismului defensiv, a neputinței învățate și a neîncrederii cronice în ordinea constituțională, oferind vectorului de război cognitiv suprafețe directe de cuplare și amplificare.',
    methodologicalNote:
      'Modelul cauzal Macro–Micro–Macro (Coleman, 1990; Hedström & Swedberg, 1998) articulează determinanții instituționali și sociospațiali din Stratul A cu mecanismele de uzură alostatică din Stratul B și cu structurile defensive ale inconștientului cultural din Stratul C.'
  },
  2: {
    id: 2,
    title: 'Figura 2. Mecanismul dublei falsificări axiologice și al parazitării semiotice',
    subtitle:
      'Opoziția structurală dintre sinteza creștin-seculară europeană și ideologia revizionistă a Antilumii',
    chapterRef: 'Capitolul 2 · Subcapitolul 2.2',
    pdfPage: 12,
    caption:
      'În jumătatea stângă este reprezentată sinteza creștin-seculară europeană, în care principiul demnității umane inalienabile, întemeiat pe conceptul de Imago Dei și pe universalismul drepturilor fundamentale, susține filtrul moral și constituțional al statului de drept, generând modernitate organică și libertate responsabilă. În jumătatea dreaptă este ilustrată operațiunea de disimulare a ideologiei revizioniste a Antilumii (Epstein, 2022), care proiectează la suprafață un camuflaj tradiționalist ortodox și suveranist pentru a ocoli aversiunea istorică a populației-țintă față de Rusia, mascând nucleul operativ real bazat pe inversiune normativă și cinism transgresiv, a cărui finalitate strategică este subordonarea imperială și anomizarea societății vizate.',
    methodologicalNote:
      'Modelul semiotic comparativ evidențiază contrastul dintre antropologia persoanei libere din sinteza creștin-seculară europeană și operațiunea de disimulare axiologică prin care ideologia Antilumii maschează inversiunea normativă sub un camuflaj tradiționalist.'
  },
  3: {
    id: 3,
    title:
      'Figura 3. Mecanismul cibernetic și semiotic al capturării cognitive în al șaselea domeniu operațional',
    subtitle:
      'Integrarea buclei decizionale OODA a lui Boyd, a controlului reflexiv al lui Lefebvre și a semioticii culturii a lui Lotman și Peirce',
    chapterRef: 'Capitolul 3 · Subcapitolele 3.1–3.3',
    pdfPage: 20,
    caption:
      'Fluxul informațional brut din faza de Observare, amplificat algoritmic prin capturarea circuitelor dopaminergice, intră în faza de Orientare, unde modelele mentale și culturale ale subiectului sunt țintite de controlul reflexiv de rang secund. Această intervenție compromite filtrul axiologic al primului sistem etic, blochează calea medierii ternare și a discernământului rațional prefrontal și deviază procesarea pe traseul celui de-al doilea sistem etic și al logicii binare a anihilării. Rezultatul este o fază de Decizie dominată de selecția emoțională indusă, închiderea cognitivă și procesarea defensivă motivată de protejarea identității de grup, care se traduce în faza de Acțiune prin polarizare socială acută și conflict antiinstituțional.',
    methodologicalNote:
      'Modelul cibernetic integrează bucla decizională OODA (Boyd, 1987/2018) cu teoria controlului reflexiv (Lefebvre, 1982, 2001) și cu semiotica ternară (Peirce, 1931–1958; Lotman, 1990), demonstrând cum capturarea fazei de Orientare suprimă compromisul democratic.'
  },
  4: {
    id: 4,
    title: 'Figura 4. Conversia funcțională a resurselor latente din Umbra colectivă',
    subtitle:
      'Arhitectura de mediere instituțională și metacognitivă pe axa Ego–Sine și conversia fluxurilor psihodinamice',
    chapterRef: 'Capitolul 4 · Subcapitolul 4.2',
    pdfPage: 24,
    caption:
      'În stânga sunt reprezentate energiile psihodinamice refulate în Stratul C: memoria istorică defensivă și vitalitatea adaptativă necanalizată asociată arhetipului Trickster-ului. În absența medierii, aceste resurse alunecă pe traseul inferior, marcat cu roșu, în enantiodromie, cinism și revoltă anomizantă. Atunci când sunt procesate prin cele trei filtre centrale din Straturile A și B — cadrul legii impersonale drepte cu închidere operațională, discernământul critic și vigilența metacognitivă prefrontală — ele sunt convertite pe axa Ego–Sine în modernitate organică, încredere și cooperare instituțională autonomă.',
    methodologicalNote:
      'Diagrama ilustrează condițiile structurale prin care resursele refulate în Umbra colectivă, respectiv memoria istorică defensivă și vitalitatea adaptativă a arhetipului Trickster-ului, încetează să alimenteze revolta anomizantă și sunt convertite în modernitate organică.'
  },
  5: {
    id: 5,
    title: 'Figura 5. Matricea comportamentală a lui Carlo M. Cipolla în războiul cognitiv',
    subtitle:
      'Dinamica spolierii sistemice (+X, -Y), a vulnerabilizării (-X, +Y) și a autosabotajului colectiv (-X, -Y)',
    chapterRef: 'Capitolul 4 · Subcapitolul 4.3',
    pdfPage: 27,
    caption:
      'Presiunea de spoliere sistemică exercitată de actorii extractivi din Cadranul IV (+X, -Y) asupra cetățeanului vulnerabil din Cadranul II (-X, +Y), pe fondul unei bariere instituționale fisurate, creează condițiile de uzură alostatică și resentiment. Intervenția vectorului de război cognitiv deturnează această frustrare legitimă, împingându-l pe cetățeanul vulnerabil vertical în jos, în Cadranul III al autosabotajului colectiv (-X, -Y), unde acțiunile sale antiinstituționale distrug simultan bunul public și propria sa securitate socioeconomică, subminând spațiul cooperării inteligente din Cadranul I (+X, +Y).',
    methodologicalNote:
      'Adaptarea matricei bidimensionale a lui Carlo M. Cipolla (1976/2011) evidențiază mecanismul prin care presiunea de spoliere sistemică exercitată de actorii extractivi (+X, -Y) și fisurarea barierei instituționale împing cetățeanul vulnerabil (-X, +Y), sub impulsul capturării cognitive externe, în cadranul comportamentului autodistructiv și al autosabotajului colectiv (-X, -Y).'
  },
  6: {
    id: 6,
    title: 'Figura 6. Modelul comparativ al procesării cognitive în criză acută: Track A vs. Track B',
    subtitle:
      'Divergența dintre bucla reactivă defensivă Track A și traseul deliberativ adaptativ Track B',
    chapterRef: 'Capitolul 5 · Subcapitolul 5.2',
    pdfPage: 30,
    caption:
      'Nodul unic de bifurcație superior, declanșat de stresul acut și policriză, desprinde divergent procesarea defensivă Track A, în stânga, de procesarea adaptativă Track B, în dreapta. În Track A, anxietatea cronică și nevoia de închidere cognitivă — caracterizată prin intoleranță la ambiguitate și urgență decizională — activează persona mimetică și generează o tensiune compensatorie cu umbra colectivă, închisă într-o buclă de autoamplificare algoritmică. În Track B, procesarea parcurge etapele cognitive adaptative: acceptarea incertitudinii, reactivarea Sistemului 2, toleranța disonanței cu recuperarea ingeniozității arhetipului Trickster, discernământul critic și creația suverană, conectată la bază cu axa Ego–Sine.',
    methodologicalNote:
      'Modelul sistemic al procesării cognitive în criză, fundamentat pe lucrările lui Kruglanski, Kahneman și pe psihologia analitică, evidențiază bifurcarea dintre bucla reactivă de autoamplificare și traseul deliberativ adaptativ de integrare suverană pe axa Ego–Sine.'
  },
  7: {
    id: 7,
    title: 'Figura 7. Protocolul secvențial în trei faze al reconstrucției rezilienței societale',
    subtitle:
      'Ordinea obligatorie a intervențiilor pe determinanții Lalonde-Dever și palierele Straturilor A, B și C',
    chapterRef: 'Capitolul 6 · Subcapitolele 6.1–6.4',
    pdfPage: 39,
    caption:
      'Diagrama evidențiază ordinea cauzală obligatorie a intervențiilor fundamentate pe determinanții modelului Lalonde-Dever: Faza I, dedicată decompresiei alostatice și reglementării ecosistemului digital, creează condițiile neurobiologice pentru Faza a II-a, axată pe pregătirea psihocognitivă preventivă prin prebunking, consolidarea mnezică Ebbinghaus și reconcilierea filtrului moral creștin-secular. Aceasta susține la rândul ei Faza a III-a, care vizează închiderea operațională a statului de drept, guvernanța policentrică și individuarea colectivă, culminând în arhitectura suveranității democratice și a modernității organice.',
    methodologicalNote:
      'Arhitectura secvențială a reconstrucției rezilienței cognitive și instituționale demonstrează de ce intervențiile educaționale din Faza II și reformele structurale din Faza III depind cauzal de realizarea prealabilă a Fazei I, constând în decompresia alostatică a populației și reglementarea ecosistemului digital.'
  }
};

const SharedSvgDefs: React.FC = () => (
  <defs>
    <marker
      id="arrow-dark"
      viewBox="0 0 10 10"
      refX="8"
      refY="5"
      markerWidth="6.5"
      markerHeight="6.5"
      orient="auto-start-reverse"
    >
      <path d="M 0 1.5 L 8.5 5 L 0 8.5 z" fill="#222426" />
    </marker>
    <marker
      id="arrow-slate"
      viewBox="0 0 10 10"
      refX="8"
      refY="5"
      markerWidth="6"
      markerHeight="6"
      orient="auto-start-reverse"
    >
      <path d="M 0 1.5 L 8.5 5 L 0 8.5 z" fill="#6E7376" />
    </marker>
    <marker
      id="arrow-gold"
      viewBox="0 0 10 10"
      refX="8"
      refY="5"
      markerWidth="6.5"
      markerHeight="6.5"
      orient="auto-start-reverse"
    >
      <path d="M 0 1.5 L 8.5 5 L 0 8.5 z" fill="#E5B822" stroke="#222426" strokeWidth="0.8" />
    </marker>
    <marker
      id="arrow-red"
      viewBox="0 0 10 10"
      refX="8"
      refY="5"
      markerWidth="6.5"
      markerHeight="6.5"
      orient="auto-start-reverse"
    >
      <path d="M 0 1.5 L 8.5 5 L 0 8.5 z" fill="#F01E1E" />
    </marker>
    <pattern id="stipple-bg" width="12" height="12" patternUnits="userSpaceOnUse">
      <circle cx="2" cy="2" r="0.6" fill="#222426" fillOpacity="0.12" />
      <circle cx="8" cy="7" r="0.5" fill="#222426" fillOpacity="0.09" />
    </pattern>
    <pattern
      id="diagonal-hatch"
      width="8"
      height="8"
      patternTransform="rotate(45 0 0)"
      patternUnits="userSpaceOnUse"
    >
      <line x1="0" y1="0" x2="0" y2="8" stroke="#222426" strokeWidth="1" strokeOpacity="0.12" />
    </pattern>
  </defs>
);

export const InteractiveFigures: React.FC<InteractiveFiguresProps> = ({
  figureId,
  onSelectFigure,
  showSelector = false
}) => {
  const meta = FIGURE_METADATA[figureId] || FIGURE_METADATA[1];

  // Figure 1 state
  const [fig1Mode, setFig1Mode] = useState<'vulnerable' | 'resilient'>('vulnerable');
  const [fig1SelectedNode, setFig1SelectedNode] = useState<string>('vector');

  // Figure 2 state
  const [fig2Inspect, setFig2Inspect] = useState<'left' | 'right' | 'camuflaj'>('camuflaj');

  // Figure 3 state
  const [fig3ReflexiveActive, setFig3ReflexiveActive] = useState<boolean>(true);
  const [fig3SelectedStage, setFig3SelectedStage] = useState<string>('orientare');

  // Figure 4 state
  const [fig4FiltersActive, setFig4FiltersActive] = useState<boolean>(true);
  const [fig4ActiveNode, setFig4ActiveNode] = useState<string>('filtru-lege');

  // Figure 5 state
  const [fig5BarrierIntact, setFig5BarrierIntact] = useState<boolean>(false);
  const [fig5SelectedQuadrant, setFig5SelectedQuadrant] = useState<'I' | 'II' | 'III' | 'IV'>('III');

  // Figure 6 state
  const [fig6ActiveTrack, setFig6ActiveTrack] = useState<'A' | 'B'>('A');
  const [fig6SelectedStep, setFig6SelectedStep] = useState<string>('bifurcatie');

  // Figure 7 state
  const [fig7ActivePhase, setFig7ActivePhase] = useState<1 | 2 | 3>(1);
  const [fig7SelectedNode, setFig7SelectedNode] = useState<string>('faza1');

  // Mobile responsive SVG display mode ('fit' scales cleanly to phone screen; 'pan' enables horizontal zoom)
  const [mobileSvgMode, setMobileSvgMode] = useState<'fit' | 'pan'>('fit');
  const svgClass =
    mobileSvgMode === 'fit'
      ? 'w-full h-auto select-none'
      : 'w-full h-auto min-w-[660px] select-none';

  return (
    <div className="bg-[#F6F5EE] border border-[#222426] p-5 sm:p-6">
      {showSelector && onSelectFigure && (
        <div className="mb-6 pb-4 border-b border-[#8C9BA5]">
          <div className="flex flex-wrap gap-1.5">
            {[1, 2, 3, 4, 5, 6, 7].map((id) => (
              <button
                key={id}
                onClick={() => onSelectFigure(id)}
                className={`px-3 py-1.5 text-xs font-medium border transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  figureId === id
                    ? 'bg-[#222426] text-[#F6F5EE] border-[#222426]'
                    : 'bg-[#F6F5EE] text-[#222426] border-[#8C9BA5] hover:border-[#222426]'
                }`}
              >
                Figura {id}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Header */}
      <div className="mb-5 pb-4 border-b border-[#8C9BA5]">
        <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-[#6E7376] mb-1">
          <span>{meta.chapterRef}</span>
        </div>
        <h3 className="font-serif text-lg sm:text-xl font-semibold text-[#222426] headline-balance">
          {meta.title}
        </h3>
        <p className="text-xs sm:text-sm text-[#6E7376] mt-1">{meta.subtitle}</p>
        <div className="mt-3 pt-2.5 border-t border-[#8C9BA5] flex flex-wrap items-center justify-between gap-2">
          <SocialShareButtons
            url={`https://laurentiustaicu.github.io/diagnosticul-razboiului-cognitiv-romania/share/figura-${meta.id}.html`}
            title={`${meta.title} (Diagnosticul războiului cognitiv în România)`}
            label={`Distribuie Figura ${meta.id} pe`}
            compact={!showSelector}
          />
          <div className="flex md:hidden items-center gap-1 text-[11px] font-mono">
            <span className="text-[#6E7376] mr-1">Afișare mobilă</span>
            <button
              type="button"
              onClick={() => setMobileSvgMode('fit')}
              className={`px-2 py-1 border cursor-pointer ${
                mobileSvgMode === 'fit'
                  ? 'bg-[#222426] text-[#F6F5EE] border-[#222426] font-bold'
                  : 'bg-[#F6F5EE] text-[#222426] border-[#8C9BA5]'
              }`}
            >
              Adaptat la ecran
            </button>
            <button
              type="button"
              onClick={() => setMobileSvgMode('pan')}
              className={`px-2 py-1 border cursor-pointer ${
                mobileSvgMode === 'pan'
                  ? 'bg-[#222426] text-[#F6F5EE] border-[#222426] font-bold'
                  : 'bg-[#F6F5EE] text-[#222426] border-[#8C9BA5]'
              }`}
            >
              Lupă panoramabilă
            </button>
          </div>
        </div>
      </div>

      {/* =====================================================================
          FIGURA 1: Arhitectura cauzală pe trei straturi (Pagina 8)
         ===================================================================== */}
      {/* =====================================================================
          FIGURA 1: Arhitectura cauzală pe trei straturi (Pagina 8)
         ===================================================================== */}
      {figureId === 1 && (
        <div className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3 bg-[#F6F5EE] p-3 border border-[#8C9BA5]">
            <span className="text-xs font-medium text-[#222426]">
              Regim sistemic pe Straturile A, B și C
            </span>
            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={() => setFig1Mode('vulnerable')}
                className={`px-3 py-1.5 text-xs font-medium border transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  fig1Mode === 'vulnerable'
                    ? 'bg-[#F01E1E] text-[#F6F5EE] border-[#F01E1E]'
                    : 'bg-[#F6F5EE] text-[#222426] border-[#8C9BA5]'
                }`}
              >
                Vulnerabilitate endogenă și cuplare ostilă
              </button>
              <button
                type="button"
                onClick={() => setFig1Mode('resilient')}
                className={`px-3 py-1.5 text-xs font-medium border transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  fig1Mode === 'resilient'
                    ? 'bg-[#E5B822] text-[#222426] border-[#222426] font-semibold'
                    : 'bg-[#F6F5EE] text-[#222426] border-[#8C9BA5]'
                }`}
              >
                Filtru axiologic și închidere operațională
              </button>
            </div>
          </div>

          <div className="bg-[#F6F5EE] border border-[#222426] p-3 sm:p-5 overflow-x-auto">
            <svg
              viewBox="0 0 900 540"
              className={svgClass}
              role="img"
              aria-label={meta.title}
            >
              <SharedSvgDefs />
              <rect x="0" y="0" width="900" height="540" fill="#F6F5EE" />
              <rect x="0" y="0" width="900" height="540" fill="url(#stipple-bg)" />

              {/* STRATUL A CONTAINER: Casete rectangulare cu contur ferm (#222426) */}
              <rect
                x="35"
                y="28"
                width="605"
                height="125"
                fill="#F6F5EE"
                stroke="#222426"
                strokeWidth="2.5"
              />
              <rect x="175" y="16" width="325" height="24" fill="#F6F5EE" stroke="#6E7376" strokeWidth="1" />
              <text
                x="337"
                y="32"
                textAnchor="middle"
                className="font-sans text-[12.5px] font-bold fill-[#222426]"
              >
                Stratul A · Determinanți structurali și instituționali
              </text>

              {/* Node A1: Deficit de servicii publice */}
              <g
                onClick={() => setFig1SelectedNode('servicii')}
                className="cursor-pointer"
              >
                <rect
                  x="55"
                  y="52"
                  width="240"
                  height="76"
                  fill={fig1SelectedNode === 'servicii' ? '#E5B822' : '#F6F5EE'}
                  fillOpacity={fig1SelectedNode === 'servicii' ? '0.3' : '1'}
                  stroke="#222426"
                  strokeWidth="2"
                />
                <text
                  x="175"
                  y="83"
                  textAnchor="middle"
                  className="font-sans text-[13px] font-semibold fill-[#222426]"
                >
                  {fig1Mode === 'vulnerable' ? 'Deficit de servicii publice' : 'Servicii publice integre'}
                </text>
                <text
                  x="175"
                  y="104"
                  textAnchor="middle"
                  className="font-sans text-[12px] fill-[#6E7376]"
                >
                  {fig1Mode === 'vulnerable' ? 'și închidere operațională' : 'închidere operațională fermă'}
                </text>
              </g>

              {/* Horizontal arrow A1 -> A2 */}
              {fig1Mode === 'resilient' && (
                <line
                  x1="295"
                  y1="90"
                  x2="370"
                  y2="90"
                  stroke="#222426"
                  strokeWidth="4.5"
                />
              )}
              <line
                x1="295"
                y1="90"
                x2="370"
                y2="90"
                stroke={fig1Mode === 'vulnerable' ? '#F01E1E' : '#E5B822'}
                strokeWidth="3"
                markerEnd={fig1Mode === 'vulnerable' ? 'url(#arrow-red)' : 'url(#arrow-gold)'}
              />

              {/* Node A2: Mediu socioeconomic precar */}
              <g
                onClick={() => setFig1SelectedNode('mediu')}
                className="cursor-pointer"
              >
                <rect
                  x="378"
                  y="52"
                  width="240"
                  height="76"
                  fill={fig1SelectedNode === 'mediu' ? '#E5B822' : '#F6F5EE'}
                  fillOpacity={fig1SelectedNode === 'mediu' ? '0.3' : '1'}
                  stroke="#222426"
                  strokeWidth="2"
                />
                <text
                  x="498"
                  y="83"
                  textAnchor="middle"
                  className="font-sans text-[13px] font-semibold fill-[#222426]"
                >
                  {fig1Mode === 'vulnerable' ? 'Mediu socioeconomic precar' : 'Coeziune sociospațială'}
                </text>
                <text
                  x="498"
                  y="104"
                  textAnchor="middle"
                  className="font-sans text-[12px] fill-[#6E7376]"
                >
                  {fig1Mode === 'vulnerable' ? 'disparități și polarizare' : 'capital social și echilibru'}
                </text>
              </g>

              {/* Vertical downward arrows from Stratul A to Stratul B */}
              <line
                x1="175"
                y1="128"
                x2="175"
                y2="190"
                stroke="#222426"
                strokeWidth="2.5"
                markerEnd="url(#arrow-dark)"
              />
              <line
                x1="498"
                y1="128"
                x2="498"
                y2="190"
                stroke="#222426"
                strokeWidth="2.5"
                markerEnd="url(#arrow-dark)"
              />

              {/* STRATUL B CONTAINER: Noduri romboidale/circulare și bucle cibernetice de feedback */}
              <rect
                x="35"
                y="194"
                width="605"
                height="138"
                fill="#F6F5EE"
                stroke="#222426"
                strokeWidth="2.5"
              />
              <rect x="175" y="182" width="325" height="24" fill="#F6F5EE" stroke="#6E7376" strokeWidth="1" />
              <text
                x="337"
                y="198"
                textAnchor="middle"
                className="font-sans text-[12.5px] font-bold fill-[#222426]"
              >
                Stratul B · Mecanisme neurocognitive și cibernetice
              </text>

              {/* Node B1: Romb / Diamond (Stres alostatic / Amigdală) */}
              <g
                onClick={() => setFig1SelectedNode('alostazie')}
                className="cursor-pointer"
              >
                <polygon
                  points="175,212 265,260 175,308 85,260"
                  fill={fig1SelectedNode === 'alostazie' ? '#E5B822' : '#F6F5EE'}
                  fillOpacity={fig1SelectedNode === 'alostazie' ? '0.35' : '1'}
                  stroke="#222426"
                  strokeWidth="2.5"
                />
                <text
                  x="175"
                  y="254"
                  textAnchor="middle"
                  className="font-sans text-[12px] font-bold fill-[#222426]"
                >
                  {fig1Mode === 'vulnerable' ? 'Stres alostatic' : 'Reglare executivă'}
                </text>
                <text
                  x="175"
                  y="272"
                  textAnchor="middle"
                  className="font-sans text-[11px] fill-[#6E7376]"
                >
                  {fig1Mode === 'vulnerable' ? 'Sistemul 1 amigdalian' : 'Latență prefrontală'}
                </text>
              </g>

              {/* Forward arrow B1 -> B2 */}
              {fig1Mode === 'resilient' && (
                <line
                  x1="265"
                  y1="250"
                  x2="400"
                  y2="250"
                  stroke="#222426"
                  strokeWidth="4"
                />
              )}
              <line
                x1="265"
                y1="250"
                x2="400"
                y2="250"
                stroke={fig1Mode === 'vulnerable' ? '#F01E1E' : '#E5B822'}
                strokeWidth="2.5"
                markerEnd={fig1Mode === 'vulnerable' ? 'url(#arrow-red)' : 'url(#arrow-gold)'}
              />

              {/* Cybernetic Feedback Arc B2 -> B1 (returning back) */}
              {fig1Mode === 'resilient' && (
                <path
                  d="M 435,285 C 385,312 285,312 235,285"
                  fill="none"
                  stroke="#222426"
                  strokeWidth="3.5"
                  strokeDasharray="4 3"
                />
              )}
              <path
                d="M 435,285 C 385,312 285,312 235,285"
                fill="none"
                stroke={fig1Mode === 'vulnerable' ? '#F01E1E' : '#E5B822'}
                strokeWidth="2"
                strokeDasharray="4 3"
                markerEnd={fig1Mode === 'vulnerable' ? 'url(#arrow-red)' : 'url(#arrow-gold)'}
              />
              <rect x="272" y="292" width="130" height="18" fill="#F6F5EE" />
              <text
                x="337"
                y="305"
                textAnchor="middle"
                className="font-mono text-[9.5px] font-semibold fill-[#6E7376]"
              >
                Buclă cibernetică
              </text>

              {/* Node B2: Romb / Diamond (Inhibitie dlPFC / Deficit discernamant) */}
              <g
                onClick={() => setFig1SelectedNode('reactiv')}
                className="cursor-pointer"
              >
                <polygon
                  points="498,212 588,260 498,308 408,260"
                  fill={fig1SelectedNode === 'reactiv' ? '#E5B822' : '#F6F5EE'}
                  fillOpacity={fig1SelectedNode === 'reactiv' ? '0.35' : '1'}
                  stroke="#222426"
                  strokeWidth="2.5"
                />
                <text
                  x="498"
                  y="254"
                  textAnchor="middle"
                  className="font-sans text-[12px] font-bold fill-[#222426]"
                >
                  {fig1Mode === 'vulnerable' ? 'Inhibiție dlPFC' : 'Sistemul 2 activ'}
                </text>
                <text
                  x="498"
                  y="272"
                  textAnchor="middle"
                  className="font-sans text-[11px] fill-[#6E7376]"
                >
                  {fig1Mode === 'vulnerable' ? 'Deficit discernământ' : 'Mediere rațională'}
                </text>
              </g>

              {/* Vertical downward arrows from Stratul B to Stratul C */}
              <line
                x1="175"
                y1="308"
                x2="175"
                y2="375"
                stroke="#222426"
                strokeWidth="2.5"
                markerEnd="url(#arrow-dark)"
              />
              <line
                x1="498"
                y1="308"
                x2="498"
                y2="375"
                stroke="#222426"
                strokeWidth="2.5"
                markerEnd="url(#arrow-dark)"
              />

              {/* STRATUL C CONTAINER: Elipse, axa Ego–Sine și filtrul moral creștin-secular */}
              <rect
                x="35"
                y="375"
                width="605"
                height="145"
                fill="#F6F5EE"
                stroke="#222426"
                strokeWidth="2.5"
              />
              <rect x="175" y="363" width="325" height="24" fill="#F6F5EE" stroke="#6E7376" strokeWidth="1" />
              <text
                x="337"
                y="379"
                textAnchor="middle"
                className="font-sans text-[12.5px] font-bold fill-[#222426]"
              >
                Stratul C · Arhitectură psihoculturală și inconștient
              </text>

              {/* Node C1: Elipsă Persona mimetică */}
              <g
                onClick={() => setFig1SelectedNode('persona')}
                className="cursor-pointer"
              >
                <ellipse
                  cx="175"
                  cy="435"
                  rx="95"
                  ry="38"
                  fill={fig1SelectedNode === 'persona' ? '#E5B822' : '#F6F5EE'}
                  fillOpacity={fig1SelectedNode === 'persona' ? '0.3' : '1'}
                  stroke="#222426"
                  strokeWidth="2.5"
                />
                <text
                  x="175"
                  y="430"
                  textAnchor="middle"
                  className="font-sans text-[12.5px] font-bold fill-[#222426]"
                >
                  Persona mimetică
                </text>
                <text
                  x="175"
                  y="448"
                  textAnchor="middle"
                  className="font-sans text-[11px] fill-[#6E7376]"
                >
                  „forme fără fond”
                </text>
              </g>

              {/* Axa de simetrie psihoculturală: Axa Ego–Sine */}
              <line
                x1="270"
                y1="435"
                x2="403"
                y2="435"
                stroke="#6E7376"
                strokeWidth="2"
                strokeDasharray="4 3"
              />
              <rect x="297" y="426" width="78" height="18" fill="#F6F5EE" />
              <text
                x="336"
                y="439"
                textAnchor="middle"
                className="font-mono text-[10px] font-bold fill-[#6E7376]"
              >
                Axa Ego–Sine
              </text>

              {/* Node C2: Elipsă Umbra colectivă */}
              <g
                onClick={() => setFig1SelectedNode('fatalism')}
                className="cursor-pointer"
              >
                <ellipse
                  cx="498"
                  cy="435"
                  rx="95"
                  ry="38"
                  fill={fig1SelectedNode === 'fatalism' ? '#E5B822' : '#F6F5EE'}
                  fillOpacity={fig1SelectedNode === 'fatalism' ? '0.3' : '1'}
                  stroke="#222426"
                  strokeWidth="2.5"
                />
                <text
                  x="498"
                  y="430"
                  textAnchor="middle"
                  className="font-sans text-[12.5px] font-bold fill-[#222426]"
                >
                  {fig1Mode === 'vulnerable' ? 'Umbra colectivă' : 'Integrare psihodinamică'}
                </text>
                <text
                  x="498"
                  y="448"
                  textAnchor="middle"
                  className="font-sans text-[11px] fill-[#6E7376]"
                >
                  {fig1Mode === 'vulnerable' ? 'neputință învățată' : 'asumare critică'}
                </text>
              </g>

              {/* FILTRUL VALORILOR MORALE CREȘTINE ȘI SECULARE: Reprezentat EXPLICIT în arhitectură */}
              <g
                onClick={() => setFig1SelectedNode('filtru-moral')}
                className="cursor-pointer"
              >
                <rect
                  x="195"
                  y="480"
                  width="285"
                  height="30"
                  fill={fig1Mode === 'resilient' ? '#E5B822' : '#F6F5EE'}
                  stroke={fig1Mode === 'resilient' ? '#222426' : '#6E7376'}
                  strokeWidth={fig1Mode === 'resilient' ? '2.5' : '1.5'}
                  strokeDasharray={fig1Mode === 'vulnerable' ? '4 3' : undefined}
                />
                <text
                  x="337"
                  y="500"
                  textAnchor="middle"
                  className="font-sans text-[11.5px] font-bold fill-[#222426]"
                >
                  {fig1Mode === 'resilient'
                    ? 'Filtru moral creștin-secular integru'
                    : 'Filtru moral creștin-secular scurtcircuitat'}
                </text>
              </g>

              {/* Săgeată punctată ascendentă de retroacțiune pe flancul stâng (Stratul C -> Stratul B -> Stratul A) */}
              <line
                x1="48"
                y1="435"
                x2="48"
                y2="92"
                stroke="#6E7376"
                strokeWidth="2"
                strokeDasharray="4 3"
                markerEnd="url(#arrow-slate)"
              />
              <rect
                x="42"
                y="334"
                width="132"
                height="18"
                fill="#F6F5EE"
                stroke="#6E7376"
                strokeWidth="1"
              />
              <text
                x="108"
                y="346"
                textAnchor="middle"
                className="font-mono text-[9.5px] font-bold fill-[#222426]"
              >
                Recursivitate C → B → A
              </text>

              {/* In vulnerable mode: Scurtcircuitarea filtrului moral de catre vectorul rosu (rutare ortogonală) */}
              {fig1Mode === 'vulnerable' && (
                <path
                  d="M 675,435 L 675,495 L 485,495"
                  fill="none"
                  stroke="#F01E1E"
                  strokeWidth="3"
                  strokeDasharray="6 3"
                  markerEnd="url(#arrow-red)"
                />
              )}

              {/* RIGHT SIDE: VECTOR DE RAZBOI COGNITIV & COUPLING SPINE */}
              <g
                onClick={() => setFig1SelectedNode('vector')}
                className="cursor-pointer"
              >
                <rect
                  x="715"
                  y="225"
                  width="160"
                  height="78"
                  fill={fig1SelectedNode === 'vector' ? '#F01E1E' : '#F6F5EE'}
                  fillOpacity={fig1SelectedNode === 'vector' ? '0.14' : '1'}
                  stroke="#F01E1E"
                  strokeWidth="3"
                />
                <text
                  x="795"
                  y="257"
                  textAnchor="middle"
                  className="font-sans text-[13.5px] font-bold fill-[#F01E1E]"
                >
                  Vector de
                </text>
                <text
                  x="795"
                  y="278"
                  textAnchor="middle"
                  className="font-sans text-[13.5px] font-bold fill-[#F01E1E]"
                >
                  război cognitiv
                </text>
              </g>

              {/* Vertical red collector spine at x=675 */}
              <line
                x1="715"
                y1="264"
                x2="675"
                y2="264"
                stroke="#F01E1E"
                strokeWidth="3"
                strokeDasharray={fig1Mode === 'resilient' ? '5 4' : undefined}
              />
              <line
                x1="675"
                y1="90"
                x2="675"
                y2="435"
                stroke="#F01E1E"
                strokeWidth="3"
                strokeDasharray={fig1Mode === 'resilient' ? '5 4' : undefined}
              />

              {/* 3 Horizontal coupling arrows into Strata A, B, C */}
              <line
                x1="675"
                y1="90"
                x2="618"
                y2="90"
                stroke="#F01E1E"
                strokeWidth="3"
                strokeDasharray={fig1Mode === 'resilient' ? '5 4' : undefined}
                markerEnd="url(#arrow-red)"
              />
              <line
                x1="675"
                y1="250"
                x2="592"
                y2="250"
                stroke="#F01E1E"
                strokeWidth="3"
                strokeDasharray={fig1Mode === 'resilient' ? '5 4' : undefined}
                markerEnd="url(#arrow-red)"
              />
              <line
                x1="675"
                y1="435"
                x2="593"
                y2="435"
                stroke="#F01E1E"
                strokeWidth="3"
                strokeDasharray={fig1Mode === 'resilient' ? '5 4' : undefined}
                markerEnd="url(#arrow-red)"
              />

              {/* Resilient Shield Bar when in resilient mode */}
              {fig1Mode === 'resilient' && (
                <g>
                  <line
                    x1="648"
                    y1="45"
                    x2="648"
                    y2="505"
                    stroke="#222426"
                    strokeWidth="8"
                  />
                  <line
                    x1="648"
                    y1="45"
                    x2="648"
                    y2="505"
                    stroke="#E5B822"
                    strokeWidth="6"
                  />
                  <rect
                    x="620"
                    y="512"
                    width="155"
                    height="24"
                    fill="#E5B822"
                    stroke="#222426"
                    strokeWidth="1.5"
                  />
                  <text
                    x="697"
                    y="528"
                    textAnchor="middle"
                    className="font-mono text-[10px] font-bold fill-[#222426]"
                  >
                    Închidere operațională
                  </text>
                </g>
              )}
            </svg>

            {/* Node inspection detail */}
            <div className="mt-4 pt-4 border-t border-[#222426] bg-[#F6F5EE] p-3.5">
              <p className="text-xs sm:text-sm text-[#222426] leading-relaxed">
                {fig1SelectedNode === 'servicii' &&
                  'Stratul A: Organizarea sistemului instituțional și a serviciilor publice (primul determinant Lalonde-Dever). Atunci când justiția, administrația, educația și sănătatea suferă de un deficit de închidere operațională (Luhmann) și sunt permeabile la rețelele clientelare extractive, cetățeanul percepe regulile formale ca pe un paravan ipocrit.'}
                {fig1SelectedNode === 'mediu' &&
                  'Stratul A: Mediul socioeconomic și sociospațial (al doilea determinant Lalonde-Dever). Polarizarea severă dintre centrele metropolitane și periferiile dezindustrializate sau rurale, adâncită de emigrația masivă, distruge capitalul social de punte (bridging, Putnam) prin familism amoral (Banfield) la un pol și secesiune tacită în servicii private la celălalt pol.'}
                {fig1SelectedNode === 'alostazie' &&
                  'Stratul B: Alostazia (Sterling & Eyer, 1988), sarcina / uzura alostatică (McEwen & Stellar, 1993; McEwen, 1998) și modelul triadei rețelelor cerebrale (Menon, 2011; Sapolsky, Arnsten). Expunerea cronică la insecuritate și umilință birocratică eliberează excesiv cortizol, provocând hipertrofia amigdalei bazolaterale, hiperactivarea rețelei de saliență (SN) și decuplarea rețelei executive centrale (CEN) ancorate în cortexul prefrontal dorsolateral (dlPFC).'}
                {fig1SelectedNode === 'reactiv' &&
                  'Stratul B: Comutarea de pe Sistemul 2 pe Sistemul 1 (Kahneman). Inhibiția funcțiilor executive prefrontale blochează gândirea lentă, analitică și verificarea surselor, lăsând cetățeanul pradă procesării rapide, euristice și reacțiilor defensive automate.'}
                {fig1SelectedNode === 'persona' &&
                  'Stratul C: Persona instituțională mimetică („forme fără fond”, Maiorescu). Copierea formală a instituțiilor occidentale fără asimilarea conținutului lor normativ creează o fațadă birocratică vulnerabilă, deconectată de nevoile reale ale cetățenilor.'}
                {fig1SelectedNode === 'fatalism' &&
                  'Stratul C: Expresia în inconștientul cultural (Stratul C). Scăderea tensiunii conștiente (abaissement du niveau mental, Janet și Jung) și blocarea axei Ego–Sine (Edinger) produc oscilația între neputința învățată (Seligman) și inflația defensivă compensatoare.'}
                {fig1SelectedNode === 'filtru-moral' &&
                  'Stratul C: Filtrul valorilor morale creștine și seculare. În stare integră, antropologia patristică a demnității umane (Imago Dei) reconciliată cu universalismul secular protejează conștiința civică. În condiții de război cognitiv, vectorul ostil scurtcircuitează acest filtru prin instrumentalizarea etnofiletistă și inversiunea normativă.'}
                {fig1SelectedNode === 'vector' &&
                  'Vectorul de război cognitiv extern nu creează din nimic vulnerabilitățile societății-țintă, ci se cuplează parazitar pe fisurile din Straturile A, B și C, oferind explicații conspirative simple, țapi ispășitori vizibili și promisiunea unei revanșe simbolice imediate.'}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* =====================================================================
          FIGURA 2: Mecanismul dublei falsificări axiologice (Pagina 12)
         ===================================================================== */}
      {figureId === 2 && (
        <div className="space-y-4">
          <div className="bg-[#F6F5EE] border border-[#222426] p-3 sm:p-5 overflow-x-auto">
            <svg
              viewBox="0 0 820 450"
              className={svgClass}
              role="img"
              aria-label={meta.title}
            >
              <SharedSvgDefs />
              <rect x="0" y="0" width="820" height="450" fill="#F6F5EE" />
              <rect x="0" y="0" width="820" height="450" fill="url(#stipple-bg)" />

              {/* Central Vertical Divider & Top Header Line */}
              <line x1="410" y1="15" x2="410" y2="435" stroke="#8C9BA5" strokeWidth="2" />
              <line x1="20" y1="82" x2="800" y2="82" stroke="#8C9BA5" strokeWidth="1.5" />

              {/* Left Column Header */}
              <text
                x="205"
                y="42"
                textAnchor="middle"
                className="font-sans text-[17px] font-bold fill-[#222426]"
              >
                Sinteza creștin-seculară
              </text>
              <text
                x="205"
                y="65"
                textAnchor="middle"
                className="font-sans text-[17px] font-bold fill-[#222426]"
              >
                europeană
              </text>

              {/* Right Column Header */}
              <text
                x="615"
                y="42"
                textAnchor="middle"
                className="font-sans text-[17px] font-bold fill-[#222426]"
              >
                Ideologia revizionistă
              </text>
              <text
                x="615"
                y="65"
                textAnchor="middle"
                className="font-sans text-[17px] font-bold fill-[#222426]"
              >
                a Antilumii
              </text>

              {/* LEFT COLUMN NODES */}
              <g onClick={() => setFig2Inspect('left')} className="cursor-pointer">
                {/* Box L1 */}
                <rect
                  x="75"
                  y="112"
                  width="260"
                  height="68"
                  fill={fig2Inspect === 'left' ? '#E5B822' : '#F6F5EE'}
                  fillOpacity={fig2Inspect === 'left' ? '0.35' : '1'}
                  stroke="#222426"
                  strokeWidth="2.5"
                />
                <text
                  x="205"
                  y="142"
                  textAnchor="middle"
                  className="font-sans text-[15px] font-semibold fill-[#222426]"
                >
                  Demnitate umană
                </text>
                <text
                  x="205"
                  y="163"
                  textAnchor="middle"
                  className="font-sans text-[15px] font-semibold fill-[#222426]"
                >
                  inalienabilă
                </text>

                {/* Arrow L1 -> L2 */}
                <line
                  x1="205"
                  y1="180"
                  x2="205"
                  y2="222"
                  stroke="#222426"
                  strokeWidth="5"
                />
                <line
                  x1="205"
                  y1="180"
                  x2="205"
                  y2="222"
                  stroke="#E5B822"
                  strokeWidth="3.5"
                  markerEnd="url(#arrow-gold)"
                />

                {/* Box L2 */}
                <rect
                  x="75"
                  y="230"
                  width="260"
                  height="68"
                  fill={fig2Inspect === 'left' ? '#E5B822' : '#F6F5EE'}
                  fillOpacity={fig2Inspect === 'left' ? '0.35' : '1'}
                  stroke="#222426"
                  strokeWidth="2.5"
                />
                <text
                  x="205"
                  y="260"
                  textAnchor="middle"
                  className="font-sans text-[15px] font-semibold fill-[#222426]"
                >
                  Filtru moral și
                </text>
                <text
                  x="205"
                  y="281"
                  textAnchor="middle"
                  className="font-sans text-[15px] font-semibold fill-[#222426]"
                >
                  constituțional
                </text>

                {/* Arrow L2 -> L3 */}
                <line
                  x1="205"
                  y1="298"
                  x2="205"
                  y2="340"
                  stroke="#222426"
                  strokeWidth="5"
                />
                <line
                  x1="205"
                  y1="298"
                  x2="205"
                  y2="340"
                  stroke="#E5B822"
                  strokeWidth="3.5"
                  markerEnd="url(#arrow-gold)"
                />

                {/* Box L3 */}
                <rect
                  x="75"
                  y="348"
                  width="260"
                  height="68"
                  fill={fig2Inspect === 'left' ? '#E5B822' : '#F6F5EE'}
                  fillOpacity={fig2Inspect === 'left' ? '0.35' : '1'}
                  stroke="#222426"
                  strokeWidth="2.5"
                />
                <text
                  x="205"
                  y="378"
                  textAnchor="middle"
                  className="font-sans text-[15px] font-semibold fill-[#222426]"
                >
                  Modernitate organică
                </text>
                <text
                  x="205"
                  y="399"
                  textAnchor="middle"
                  className="font-sans text-[15px] font-semibold fill-[#222426]"
                >
                  și libertate
                </text>
              </g>

              {/* RIGHT COLUMN NODES (Disimulare & Inversiune normativă) */}
              {/* Outer Camouflage Box (slate gray #8C9BA5) wrapping the Inner Core Box */}
              <g onClick={() => setFig2Inspect('camuflaj')} className="cursor-pointer">
                <rect
                  x="470"
                  y="110"
                  width="290"
                  height="140"
                  fill="#8C9BA5"
                  fillOpacity="0.22"
                  stroke="#6E7376"
                  strokeWidth="2"
                  strokeDasharray="5 3"
                />
                <text
                  x="615"
                  y="134"
                  textAnchor="middle"
                  className="font-sans text-[12.5px] font-bold fill-[#222426]"
                >
                  Camuflaj tradiționalist și suveranist
                </text>
              </g>

              {/* Inner Core Box: Inversiune normativă și cinism */}
              <g onClick={() => setFig2Inspect('right')} className="cursor-pointer">
                <rect
                  x="490"
                  y="152"
                  width="250"
                  height="76"
                  fill="#F6F5EE"
                  stroke="#F01E1E"
                  strokeWidth="2.5"
                />
                <text
                  x="615"
                  y="182"
                  textAnchor="middle"
                  className="font-sans text-[14.5px] font-semibold fill-[#222426]"
                >
                  Inversiune normativă
                </text>
                <text
                  x="615"
                  y="204"
                  textAnchor="middle"
                  className="font-sans text-[14.5px] font-semibold fill-[#222426]"
                >
                  și cinism
                </text>

                {/* Red arrow down to Subordonare imperială și anomie */}
                <line
                  x1="615"
                  y1="228"
                  x2="615"
                  y2="340"
                  stroke="#F01E1E"
                  strokeWidth="3.5"
                  markerEnd="url(#arrow-red)"
                />

                {/* Bottom Right Box */}
                <rect
                  x="490"
                  y="348"
                  width="250"
                  height="68"
                  fill={fig2Inspect === 'right' ? '#F01E1E' : '#F6F5EE'}
                  fillOpacity={fig2Inspect === 'right' ? '0.12' : '1'}
                  stroke="#F01E1E"
                  strokeWidth="2.5"
                />
                <text
                  x="615"
                  y="378"
                  textAnchor="middle"
                  className="font-sans text-[15px] font-semibold fill-[#222426]"
                >
                  Subordonare imperială
                </text>
                <text
                  x="615"
                  y="399"
                  textAnchor="middle"
                  className="font-sans text-[15px] font-semibold fill-[#222426]"
                >
                  și anomie
                </text>
              </g>
            </svg>

            <div className="mt-4 pt-4 border-t border-[#222426] bg-[#F6F5EE] p-3.5">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <div className="flex flex-wrap items-center gap-1.5">
                  {(
                    [
                      { id: 'left', label: 'Sinteza creștin-seculară' },
                      { id: 'camuflaj', label: 'Camuflajul discursiv' },
                      { id: 'right', label: 'Nucleul Antilumii' }
                    ] as const
                  ).map((btn) => (
                    <button
                      key={btn.id}
                      onClick={() => setFig2Inspect(btn.id)}
                      className={`px-2.5 py-1 text-[11px] font-mono border cursor-pointer ${
                        fig2Inspect === btn.id
                          ? 'bg-[#222426] text-[#F6F5EE] border-[#222426]'
                          : 'bg-[#F6F5EE] text-[#222426] border-[#8C9BA5]'
                      }`}
                    >
                      {btn.label}
                    </button>
                  ))}
                </div>
              </div>
              <p className="text-xs sm:text-sm text-[#222426] leading-relaxed">
                {fig2Inspect === 'left' &&
                  'Sinteza creștin-seculară europeană unește antropologia patristică a persoanei libere create după chipul divin (Imago Dei, Berdiaev, Stăniloae, Kalaitzidis) cu domnia legii impersonale și autonomia judecății critice (Habermas, Taylor). Rezultatul este o modernitate organică în care tradiția spirituală susține democrația constituțională.'}
                {fig2Inspect === 'camuflaj' &&
                  'Dubla falsificare axiologică (disimularea). Din cauza memoriei traumatice a celor douăsprezece invazii rusești, a răpirii Basarabiei, a Tezaurului și a Gulagului, propaganda rusă nu se poate prezenta deschis în România. Ea proiectează la suprafață un camuflaj etnofiletist (Russkii Mir, condamnat ca erezie la Sinodul de la Constantinopol din 1872) și un fals discurs suveranist pentru a masca nihilismul stării Bobok.'}
                {fig2Inspect === 'right' &&
                  'Nucleul operativ al Antilumii (Epstein, 2022) și starea Bobok (Dostoievski, 1873). Sub masca apărării tradiției și a suveranității, operațiunea funcționează prin inversiune normativă și cinism transgresiv, urmărind decuplarea României de garanțiile NATO și UE și readucerea statului-țintă într-o zonă gri de bilateralism asimetric.'}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* =====================================================================
          FIGURA 3: Mecanismul cibernetic și semiotic în bucla OODA (Pagina 20)
         ===================================================================== */}
      {figureId === 3 && (
        <div className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3 bg-[#F6F5EE] p-3 border border-[#8C9BA5]">
            <span className="text-xs font-medium text-[#222426]">
              Faza de Orientare în bucla decizională OODA
            </span>
            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={() => setFig3ReflexiveActive(true)}
                className={`px-3 py-1.5 text-xs font-medium border transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  fig3ReflexiveActive
                    ? 'bg-[#F01E1E] text-[#F6F5EE] border-[#F01E1E]'
                    : 'bg-[#F6F5EE] text-[#222426] border-[#8C9BA5]'
                }`}
              >
                Compresie binară prin control reflexiv
              </button>
              <button
                type="button"
                onClick={() => setFig3ReflexiveActive(false)}
                className={`px-3 py-1.5 text-xs font-medium border transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  !fig3ReflexiveActive
                    ? 'bg-[#E5B822] text-[#222426] border-[#222426] font-semibold'
                    : 'bg-[#F6F5EE] text-[#222426] border-[#8C9BA5]'
                }`}
              >
                Compromis democratic și mediere ternară
              </button>
            </div>
          </div>

          <div className="bg-[#F6F5EE] border border-[#222426] p-3 sm:p-5 overflow-x-auto">
            <svg
              viewBox="0 0 960 430"
              className={svgClass}
              role="img"
              aria-label={meta.title}
            >
              <SharedSvgDefs />
              <rect x="0" y="0" width="960" height="430" fill="#F6F5EE" />
              <rect x="0" y="0" width="960" height="430" fill="url(#stipple-bg)" />

              {/* ============================================================
                  ZONA STÂNGA: Triunghiul echilibrat în #E5B822
                  (Primul sistem etic / Spațiul compromisului democratic)
                 ============================================================ */}
              <g
                onClick={() => setFig3SelectedStage('primul-sistem')}
                className="cursor-pointer"
              >
                <text
                  x="122"
                  y="42"
                  textAnchor="middle"
                  className="font-sans text-[11px] font-bold tracking-wider fill-[#6E7376]"
                >
                  PRIMUL SISTEM ETIC
                </text>
                <polygon
                  points="122,65 30,250 215,250"
                  fill="#E5B822"
                  fillOpacity={fig3SelectedStage === 'primul-sistem' ? '0.4' : '0.22'}
                  stroke="#222426"
                  strokeWidth="2.5"
                />
                <text
                  x="122"
                  y="145"
                  textAnchor="middle"
                  className="font-sans text-[13px] font-bold fill-[#222426]"
                >
                  Primul sistem etic
                </text>
                <text
                  x="122"
                  y="166"
                  textAnchor="middle"
                  className="font-sans text-[11.5px] font-semibold fill-[#222426]"
                >
                  Compromis democratic
                </text>
                <text
                  x="122"
                  y="185"
                  textAnchor="middle"
                  className="font-sans text-[11px] fill-[#6E7376]"
                >
                  și mediere ternară
                </text>
                <text
                  x="122"
                  y="204"
                  textAnchor="middle"
                  className="font-sans text-[10.5px] fill-[#6E7376]"
                >
                  concurent legitim
                </text>
              </g>

              {/* Dotted border line separating Left and Center zones */}
              <line
                x1="230"
                y1="30"
                x2="230"
                y2="380"
                stroke="#8C9BA5"
                strokeWidth="1.5"
                strokeDasharray="4 3"
              />

              {/* ============================================================
                  ZONA CENTRU: Bucla cibernetică OODA în 4 pași
                  cu injecția de control reflexiv străpungând Orientarea
                 ============================================================ */}
              <text
                x="510"
                y="42"
                textAnchor="middle"
                className="font-sans text-[11px] font-bold tracking-wider fill-[#6E7376]"
              >
                BUCLA CIBERNETICĂ OODA · BOYD
              </text>

              {/* TOP BOX: Control reflexiv de rang secund */}
              <g
                onClick={() => setFig3SelectedStage('reflexiv')}
                className="cursor-pointer"
              >
                <rect
                  x="375"
                  y="55"
                  width="170"
                  height="56"
                  fill={fig3ReflexiveActive ? '#F6F5EE' : '#F6F5EE'}
                  stroke={fig3ReflexiveActive ? '#F01E1E' : '#8C9BA5'}
                  strokeWidth={fig3ReflexiveActive ? '2.5' : '1.5'}
                />
                <text
                  x="460"
                  y="78"
                  textAnchor="middle"
                  className="font-sans text-[12px] font-bold fill-[#222426]"
                >
                  Control reflexiv
                </text>
                <text
                  x="460"
                  y="96"
                  textAnchor="middle"
                  className="font-sans text-[12px] font-bold fill-[#222426]"
                >
                  de rang secund
                </text>
              </g>

              {/* PIERCING VERMILION VECTOR: Injecție de control reflexiv străpungând Orientarea */}
              <line
                x1="460"
                y1="111"
                x2="460"
                y2="188"
                stroke={fig3ReflexiveActive ? '#F01E1E' : '#8C9BA5'}
                strokeWidth={fig3ReflexiveActive ? '4' : '2'}
                strokeDasharray={fig3ReflexiveActive ? undefined : '5 4'}
                markerEnd={fig3ReflexiveActive ? 'url(#arrow-red)' : 'url(#arrow-slate)'}
              />
              <rect x="375" y="136" width="170" height="22" fill="#F6F5EE" />
              <text
                x="460"
                y="151"
                textAnchor="middle"
                className="font-sans text-[11px] font-bold fill-[#F01E1E]"
              >
                Injecție de control reflexiv
              </text>

              {/* Săgeată dinspre triunghiul stâng („Primul sistem etic”) către nodul „Orientare” */}
              {!fig3ReflexiveActive ? (
                <g>
                  <line
                    x1="215"
                    y1="215"
                    x2="395"
                    y2="215"
                    stroke="#222426"
                    strokeWidth="4"
                  />
                  <line
                    x1="215"
                    y1="215"
                    x2="395"
                    y2="215"
                    stroke="#E5B822"
                    strokeWidth="2.5"
                    markerEnd="url(#arrow-gold)"
                  />
                </g>
              ) : (
                <g>
                  <line
                    x1="215"
                    y1="215"
                    x2="395"
                    y2="215"
                    stroke="#F01E1E"
                    strokeWidth="2"
                    strokeDasharray="4 3"
                  />
                  {/* T-bar roșu de blocare a primului sistem etic */}
                  <line
                    x1="230"
                    y1="203"
                    x2="230"
                    y2="227"
                    stroke="#F01E1E"
                    strokeWidth="4"
                  />
                </g>
              )}

              {/* OODA 1: Observare */}
              <g
                onClick={() => setFig3SelectedStage('observare')}
                className="cursor-pointer"
              >
                <rect
                  x="245"
                  y="190"
                  width="100"
                  height="72"
                  fill={fig3SelectedStage === 'observare' ? '#E5B822' : '#F6F5EE'}
                  fillOpacity={fig3SelectedStage === 'observare' ? '0.35' : '1'}
                  stroke="#222426"
                  strokeWidth="2"
                />
                <text
                  x="295"
                  y="218"
                  textAnchor="middle"
                  className="font-sans text-[12px] font-bold fill-[#222426]"
                >
                  Observare
                </text>
                <text
                  x="295"
                  y="236"
                  textAnchor="middle"
                  className="font-sans text-[10.5px] fill-[#6E7376]"
                >
                  flux de date
                </text>
              </g>

              {/* Arrow Observare -> Orientare */}
              <line
                x1="345"
                y1="226"
                x2="392"
                y2="226"
                stroke="#222426"
                strokeWidth="2.5"
                markerEnd="url(#arrow-dark)"
              />

              {/* OODA 2: Orientare (străpunsă de vectorul roșu de sus) */}
              <g
                onClick={() => setFig3SelectedStage('orientare')}
                className="cursor-pointer"
              >
                <rect
                  x="400"
                  y="190"
                  width="120"
                  height="72"
                  fill={fig3SelectedStage === 'orientare' ? '#E5B822' : '#F6F5EE'}
                  fillOpacity={fig3SelectedStage === 'orientare' ? '0.35' : '1'}
                  stroke={fig3ReflexiveActive ? '#F01E1E' : '#222426'}
                  strokeWidth="2.5"
                />
                <text
                  x="460"
                  y="218"
                  textAnchor="middle"
                  className="font-sans text-[12px] font-bold fill-[#222426]"
                >
                  Orientare
                </text>
                <text
                  x="460"
                  y="236"
                  textAnchor="middle"
                  className="font-sans text-[10.5px] fill-[#6E7376]"
                >
                  modele mentale
                </text>
              </g>

              {/* Arrow Orientare -> Decizie */}
              {!fig3ReflexiveActive && (
                <line
                  x1="520"
                  y1="226"
                  x2="552"
                  y2="226"
                  stroke="#222426"
                  strokeWidth="4"
                />
              )}
              <line
                x1="520"
                y1="226"
                x2="552"
                y2="226"
                stroke={fig3ReflexiveActive ? '#F01E1E' : '#E5B822'}
                strokeWidth="2.5"
                markerEnd={fig3ReflexiveActive ? 'url(#arrow-red)' : 'url(#arrow-gold)'}
              />

              {/* OODA 3: Decizie */}
              <g
                onClick={() => setFig3SelectedStage('decizie')}
                className="cursor-pointer"
              >
                <rect
                  x="560"
                  y="190"
                  width="95"
                  height="72"
                  fill={fig3SelectedStage === 'decizie' ? (fig3ReflexiveActive ? '#F01E1E' : '#E5B822') : '#F6F5EE'}
                  fillOpacity={fig3SelectedStage === 'decizie' ? '0.2' : '1'}
                  stroke={fig3ReflexiveActive ? '#F01E1E' : '#222426'}
                  strokeWidth="2"
                />
                <text
                  x="607"
                  y="218"
                  textAnchor="middle"
                  className="font-sans text-[12px] font-bold fill-[#222426]"
                >
                  Decizie
                </text>
                <text
                  x="607"
                  y="236"
                  textAnchor="middle"
                  className="font-sans text-[10px] fill-[#6E7376]"
                >
                  {fig3ReflexiveActive ? 'emoțională' : 'deliberativă'}
                </text>
              </g>

              {/* Arrow Decizie -> Actiune */}
              {!fig3ReflexiveActive && (
                <line
                  x1="655"
                  y1="226"
                  x2="677"
                  y2="226"
                  stroke="#222426"
                  strokeWidth="4"
                />
              )}
              <line
                x1="655"
                y1="226"
                x2="677"
                y2="226"
                stroke={fig3ReflexiveActive ? '#F01E1E' : '#E5B822'}
                strokeWidth="2.5"
                markerEnd={fig3ReflexiveActive ? 'url(#arrow-red)' : 'url(#arrow-gold)'}
              />

              {/* OODA 4: Actiune */}
              <g
                onClick={() => setFig3SelectedStage('actiune')}
                className="cursor-pointer"
              >
                <rect
                  x="685"
                  y="190"
                  width="85"
                  height="72"
                  fill={fig3SelectedStage === 'actiune' ? (fig3ReflexiveActive ? '#F01E1E' : '#E5B822') : '#F6F5EE'}
                  fillOpacity={fig3SelectedStage === 'actiune' ? '0.2' : '1'}
                  stroke={fig3ReflexiveActive ? '#F01E1E' : '#222426'}
                  strokeWidth="2"
                />
                <text
                  x="727"
                  y="218"
                  textAnchor="middle"
                  className="font-sans text-[12px] font-bold fill-[#222426]"
                >
                  Acțiune
                </text>
                <text
                  x="727"
                  y="236"
                  textAnchor="middle"
                  className="font-sans text-[10px] fill-[#6E7376]"
                >
                  comportament
                </text>
              </g>

              {/* Cybernetic Feedback Loop: beneath from Actiune returning to Orientare and Observare */}
              <polyline
                points="727,262 727,330 295,330 295,264"
                fill="none"
                stroke="#8C9BA5"
                strokeWidth="1.5"
                markerEnd="url(#arrow-slate)"
              />
              <line
                x1="460"
                y1="330"
                x2="460"
                y2="264"
                stroke="#8C9BA5"
                strokeWidth="1.5"
                markerEnd="url(#arrow-slate)"
              />
              <rect x="420" y="320" width="165" height="20" fill="#F6F5EE" />
              <text
                x="502"
                y="334"
                textAnchor="middle"
                className="font-mono text-[9.5px] font-semibold fill-[#6E7376]"
              >
                Buclă cibernetică de feedback
              </text>

              {/* Arrow connecting Actiune to Right Zone (Binary Wall) */}
              <line
                x1="770"
                y1="226"
                x2="795"
                y2="200"
                stroke={fig3ReflexiveActive ? '#F01E1E' : '#8C9BA5'}
                strokeWidth="2.5"
                strokeDasharray={fig3ReflexiveActive ? undefined : '4 3'}
                markerEnd={fig3ReflexiveActive ? 'url(#arrow-red)' : 'url(#arrow-slate)'}
              />

              {/* Dotted border line separating Center and Right zones */}
              <line
                x1="785"
                y1="30"
                x2="785"
                y2="380"
                stroke="#8C9BA5"
                strokeWidth="1.5"
                strokeDasharray="4 3"
              />

              {/* ============================================================
                  ZONA DREAPTA: Compresia în sistemul binar fracturat
                  (Noi / Victime vs. Ei / Dușmani), separate de zidul de fractură
                 ============================================================ */}
              <text
                x="875"
                y="42"
                textAnchor="middle"
                className="font-sans text-[11px] font-bold tracking-wider fill-[#F01E1E]"
              >
                AL DOILEA SISTEM ETIC
              </text>

              {/* Binary Node Top: Noi / Victime */}
              <g
                onClick={() => setFig3SelectedStage('binar')}
                className="cursor-pointer"
              >
                <rect
                  x="800"
                  y="110"
                  width="145"
                  height="60"
                  fill="#F6F5EE"
                  stroke="#F01E1E"
                  strokeWidth="2"
                />
                <text
                  x="872"
                  y="135"
                  textAnchor="middle"
                  className="font-sans text-[12px] font-bold fill-[#F01E1E]"
                >
                  Noi / Victime
                </text>
                <text
                  x="872"
                  y="153"
                  textAnchor="middle"
                  className="font-sans text-[10.5px] fill-[#6E7376]"
                >
                  puritate morală
                </text>
              </g>

              {/* Fractured Wall in Vermilion Red (#F01E1E) */}
              <path
                d="M 795,198 L 825,190 L 855,204 L 885,192 L 915,206 L 950,198"
                fill="none"
                stroke="#F01E1E"
                strokeWidth="4"
              />
              <rect x="805" y="188" width="135" height="20" fill="#F6F5EE" stroke="#F01E1E" strokeWidth="1.5" />
              <text
                x="872"
                y="202"
                textAnchor="middle"
                className="font-mono text-[9.5px] font-bold fill-[#F01E1E]"
              >
                Zid de fractură identitară
              </text>

              {/* Binary Node Bottom: Ei / Dușmani */}
              <g
                onClick={() => setFig3SelectedStage('binar')}
                className="cursor-pointer"
              >
                <rect
                  x="800"
                  y="226"
                  width="145"
                  height="60"
                  fill="#F6F5EE"
                  stroke="#F01E1E"
                  strokeWidth="2"
                />
                <text
                  x="872"
                  y="251"
                  textAnchor="middle"
                  className="font-sans text-[12px] font-bold fill-[#F01E1E]"
                >
                  Ei / Dușmani
                </text>
                <text
                  x="872"
                  y="269"
                  textAnchor="middle"
                  className="font-sans text-[10.5px] fill-[#6E7376]"
                >
                  țapi ispășitori
                </text>
              </g>
            </svg>

            <div className="mt-4 pt-4 border-t border-[#222426] bg-[#F6F5EE] p-3.5">
              <p className="text-xs sm:text-sm text-[#222426] leading-relaxed">
                {fig3SelectedStage === 'primul-sistem' &&
                  'Primul sistem etic (Lefebvre, 1982, 2001). Cadrul axiologic al democrației constituționale în care compromisul legal și dialogul sunt privite ca virtuți cardinale, iar adversarul politic rămâne un concurent legitim în interiorul statului de drept.'}
                {fig3SelectedStage === 'observare' &&
                  'Faza de Observare. Fluxul informațional brut este capturat algoritmic prin optimizarea retenției pe platformele digitale, inundat de dezinformare și conținut sintetic menit să provoace reacții afective primare.'}
                {fig3SelectedStage === 'orientare' &&
                  'Faza de Orientare (Schwerpunkt-ul lui John Boyd). Matricea interpretativă unde experiența istorică, valorile morale și modelele mentale conferă semnificație datelor brute. Este ținta principală a injecției de control reflexiv.'}
                {fig3SelectedStage === 'reflexiv' &&
                  'Controlul reflexiv de rang secund (Lefebvre). Nu livrează simple știri false, ci transferă o matrice de decizie în mintea țintei, determinând-o să aleagă singură opțiunea dorită de agresor crezând că acționează suveran.'}
                {fig3SelectedStage === 'decizie' &&
                  'Faza de Decizie sub capturare reflexivă. Inhibarea deliberării prefrontale produce adoptarea precipitată și necritică a unei explicații simpliste (seizing) și înghețarea epistemică (freezing, Kruglanski), refuzând dovezile contrare.'}
                {fig3SelectedStage === 'actiune' &&
                  'Faza de Acțiune. Traducerea deciziei în comportamente polarizante, boicot instituțional sau conflict social anti-sistem, alimentând bucla cibernetică de reacție.'}
                {fig3SelectedStage === 'binar' &&
                  'Compresia în sistemul binar fracturat (al doilea sistem etic). Prăbușirea nuanțelor și a spațiului de mediere într-o dihotomie maniheică între poporul pur (victime) și trădători (dușmani ce trebuie anihilați).'}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* =====================================================================
          FIGURA 4: Conversia funcțională a resurselor latente din Umbră (Pagina 24)
         ===================================================================== */}
      {figureId === 4 && (
        <div className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3 bg-[#F6F5EE] p-3 border border-[#8C9BA5]">
            <span className="text-xs font-medium text-[#222426]">
              Traseu psihodinamic
            </span>
            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={() => setFig4FiltersActive(true)}
                className={`px-3 py-1.5 text-xs font-medium border transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  fig4FiltersActive
                    ? 'bg-[#E5B822] text-[#222426] border-[#222426] font-semibold'
                    : 'bg-[#F6F5EE] text-[#222426] border-[#8C9BA5]'
                }`}
              >
                Conversie în modernitate organică
              </button>
              <button
                type="button"
                onClick={() => setFig4FiltersActive(false)}
                className={`px-3 py-1.5 text-xs font-medium border transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  !fig4FiltersActive
                    ? 'bg-[#F01E1E] text-[#F6F5EE] border-[#F01E1E]'
                    : 'bg-[#F6F5EE] text-[#222426] border-[#8C9BA5]'
                }`}
              >
                Alunecare în enantiodromie și cinism
              </button>
            </div>
          </div>

          <div className="bg-[#F6F5EE] border border-[#222426] p-3 sm:p-5 overflow-x-auto">
            <svg
              viewBox="0 0 920 470"
              className={svgClass}
              role="img"
              aria-label={meta.title}
            >
              <SharedSvgDefs />
              <rect x="0" y="0" width="920" height="470" fill="#F6F5EE" />
              <rect x="0" y="0" width="920" height="470" fill="url(#stipple-bg)" />

              {/* 3 Column Headers */}
              <text
                x="145"
                y="34"
                textAnchor="middle"
                className="font-sans text-[12px] font-bold tracking-wider fill-[#6E7376]"
              >
                STRATUL C · UMBRA COLECTIVĂ
              </text>
              <text
                x="455"
                y="34"
                textAnchor="middle"
                className="font-sans text-[12px] font-bold tracking-wider fill-[#6E7376]"
              >
                FILTRE DE CONVERSIE · STRATURILE A ȘI B
              </text>
              <text
                x="765"
                y="34"
                textAnchor="middle"
                className="font-sans text-[12px] font-bold tracking-wider fill-[#6E7376]"
              >
                SINTEZA AXEI EGO–SINE
              </text>

              {/* Converging Bézier curves from Left Column (x=255) to Middle Filters (x=345) */}
              <path
                d="M 255 96 C 295 96, 305 96, 338 96"
                fill="none"
                stroke="#222426"
                strokeWidth="2"
                markerEnd="url(#arrow-dark)"
              />
              <path
                d="M 255 200 C 295 200, 305 110, 338 104"
                fill="none"
                stroke="#222426"
                strokeWidth="2"
                markerEnd="url(#arrow-dark)"
              />
              <path
                d="M 255 200 C 295 200, 305 200, 338 200"
                fill="none"
                stroke="#222426"
                strokeWidth="2"
                markerEnd="url(#arrow-dark)"
              />
              <path
                d="M 255 304 C 295 304, 305 215, 338 208"
                fill="none"
                stroke="#222426"
                strokeWidth="2"
                markerEnd="url(#arrow-dark)"
              />
              <path
                d="M 255 304 C 295 304, 305 304, 338 304"
                fill="none"
                stroke="#222426"
                strokeWidth="2"
                markerEnd="url(#arrow-dark)"
              />

              {/* Converging Gold Curves from Middle Filters (x=565) to Right Ego-Self Synthesis (x=640) */}
              <path
                d="M 565 96 C 600 96, 610 140, 634 142"
                fill="none"
                stroke="#222426"
                strokeWidth="4.5"
                opacity={fig4FiltersActive ? '1' : '0.35'}
              />
              <path
                d="M 565 96 C 600 96, 610 140, 634 142"
                fill="none"
                stroke="#E5B822"
                strokeWidth="3"
                opacity={fig4FiltersActive ? '1' : '0.35'}
                markerEnd="url(#arrow-gold)"
              />
              <path
                d="M 565 200 C 600 200, 610 155, 634 152"
                fill="none"
                stroke="#222426"
                strokeWidth="4.5"
                opacity={fig4FiltersActive ? '1' : '0.35'}
              />
              <path
                d="M 565 200 C 600 200, 610 155, 634 152"
                fill="none"
                stroke="#E5B822"
                strokeWidth="3"
                opacity={fig4FiltersActive ? '1' : '0.35'}
                markerEnd="url(#arrow-gold)"
              />
              <path
                d="M 565 200 C 600 200, 610 265, 634 268"
                fill="none"
                stroke="#222426"
                strokeWidth="4.5"
                opacity={fig4FiltersActive ? '1' : '0.35'}
              />
              <path
                d="M 565 200 C 600 200, 610 265, 634 268"
                fill="none"
                stroke="#E5B822"
                strokeWidth="3"
                opacity={fig4FiltersActive ? '1' : '0.35'}
                markerEnd="url(#arrow-gold)"
              />
              <path
                d="M 565 304 C 600 304, 610 280, 634 278"
                fill="none"
                stroke="#222426"
                strokeWidth="4.5"
                opacity={fig4FiltersActive ? '1' : '0.35'}
              />
              <path
                d="M 565 304 C 600 304, 610 280, 634 278"
                fill="none"
                stroke="#E5B822"
                strokeWidth="3"
                opacity={fig4FiltersActive ? '1' : '0.35'}
                markerEnd="url(#arrow-gold)"
              />

              {/* LEFT COLUMN BOXES (3 nodes) */}
              <g onClick={() => setFig4ActiveNode('umbra-bruta')} className="cursor-pointer">
                <rect
                  x="35"
                  y="60"
                  width="220"
                  height="72"
                  fill={fig4ActiveNode === 'umbra-bruta' ? '#E5B822' : '#F6F5EE'}
                  fillOpacity={fig4ActiveNode === 'umbra-bruta' ? '0.22' : '1'}
                  stroke="#222426"
                  strokeWidth="2"
                />
                <text
                  x="145"
                  y="89"
                  textAnchor="middle"
                  className="font-sans text-[12.5px] font-bold fill-[#222426]"
                >
                  Resurse latente în Umbră
                </text>
                <text
                  x="145"
                  y="110"
                  textAnchor="middle"
                  className="font-sans text-[11px] fill-[#6E7376]"
                >
                  Potențial psihodinamic neintegrat
                </text>
              </g>

              <g onClick={() => setFig4ActiveNode('memorie')} className="cursor-pointer">
                <rect
                  x="35"
                  y="164"
                  width="220"
                  height="72"
                  fill={fig4ActiveNode === 'memorie' ? '#E5B822' : '#F6F5EE'}
                  fillOpacity={fig4ActiveNode === 'memorie' ? '0.22' : '1'}
                  stroke="#222426"
                  strokeWidth="2"
                />
                <text
                  x="145"
                  y="193"
                  textAnchor="middle"
                  className="font-sans text-[12.5px] font-bold fill-[#222426]"
                >
                  Memorie istorică defensivă
                </text>
                <text
                  x="145"
                  y="214"
                  textAnchor="middle"
                  className="font-sans text-[11px] fill-[#6E7376]"
                >
                  Scepticism față de hegemonie
                </text>
              </g>

              <g onClick={() => setFig4ActiveNode('trickster')} className="cursor-pointer">
                <rect
                  x="35"
                  y="268"
                  width="220"
                  height="72"
                  fill={fig4ActiveNode === 'trickster' ? '#E5B822' : '#F6F5EE'}
                  fillOpacity={fig4ActiveNode === 'trickster' ? '0.22' : '1'}
                  stroke="#222426"
                  strokeWidth="2"
                />
                <text
                  x="145"
                  y="297"
                  textAnchor="middle"
                  className="font-sans text-[12.5px] font-bold fill-[#222426]"
                >
                  Vitalitate adaptativă necanalizată
                </text>
                <text
                  x="145"
                  y="318"
                  textAnchor="middle"
                  className="font-sans text-[11px] fill-[#6E7376]"
                >
                  Ambivalența arhetipului Trickster
                </text>
              </g>

              {/* MIDDLE COLUMN BOXES (3 conversion filters) */}
              <g onClick={() => setFig4ActiveNode('filtru-lege')} className="cursor-pointer">
                <rect
                  x="345"
                  y="60"
                  width="220"
                  height="72"
                  fill={fig4ActiveNode === 'filtru-lege' ? '#E5B822' : '#F6F5EE'}
                  fillOpacity={fig4ActiveNode === 'filtru-lege' ? '0.25' : '1'}
                  stroke="#222426"
                  strokeWidth="2"
                />
                <text
                  x="455"
                  y="89"
                  textAnchor="middle"
                  className="font-sans text-[12px] font-bold fill-[#222426]"
                >
                  Lege impersonală dreaptă
                </text>
                <text
                  x="455"
                  y="110"
                  textAnchor="middle"
                  className="font-sans text-[11px] fill-[#6E7376]"
                >
                  Închidere operațională a statului de drept
                </text>
              </g>

              <g onClick={() => setFig4ActiveNode('filtru-istorie')} className="cursor-pointer">
                <rect
                  x="345"
                  y="164"
                  width="220"
                  height="72"
                  fill={fig4ActiveNode === 'filtru-istorie' ? '#E5B822' : '#F6F5EE'}
                  fillOpacity={fig4ActiveNode === 'filtru-istorie' ? '0.25' : '1'}
                  stroke="#222426"
                  strokeWidth="2"
                />
                <text
                  x="455"
                  y="193"
                  textAnchor="middle"
                  className="font-sans text-[12.5px] font-bold fill-[#222426]"
                >
                  Discernământ critic
                </text>
                <text
                  x="455"
                  y="214"
                  textAnchor="middle"
                  className="font-sans text-[11px] fill-[#6E7376]"
                >
                  Asumarea adevărului istoric
                </text>
              </g>

              <g onClick={() => setFig4ActiveNode('filtru-meta')} className="cursor-pointer">
                <rect
                  x="345"
                  y="268"
                  width="220"
                  height="72"
                  fill={fig4ActiveNode === 'filtru-meta' ? '#E5B822' : '#F6F5EE'}
                  fillOpacity={fig4ActiveNode === 'filtru-meta' ? '0.25' : '1'}
                  stroke="#222426"
                  strokeWidth="2"
                />
                <text
                  x="455"
                  y="297"
                  textAnchor="middle"
                  className="font-sans text-[12.5px] font-bold fill-[#222426]"
                >
                  Vigilență metacognitivă
                </text>
                <text
                  x="455"
                  y="318"
                  textAnchor="middle"
                  className="font-sans text-[11px] fill-[#6E7376]"
                >
                  Reglare executivă prefrontală
                </text>
              </g>

              {/* RIGHT COLUMN BOXES (2 synthesis outputs) */}
              <g onClick={() => setFig4ActiveNode('modernitate')} className="cursor-pointer">
                <rect
                  x="642"
                  y="108"
                  width="245"
                  height="74"
                  fill="#E5B822"
                  fillOpacity={fig4ActiveNode === 'modernitate' ? '0.38' : '0.2'}
                  stroke="#222426"
                  strokeWidth="2.5"
                />
                <text
                  x="764"
                  y="138"
                  textAnchor="middle"
                  className="font-sans text-[12.5px] font-bold fill-[#222426]"
                >
                  Modernitate organică și încredere
                </text>
                <text
                  x="764"
                  y="159"
                  textAnchor="middle"
                  className="font-sans text-[11px] fill-[#6E7376]"
                >
                  Interiorizarea autentică a normei
                </text>
              </g>

              {/* Bidirectional vertical arrow between the 2 synthesis nodes */}
              <line
                x1="764"
                y1="186"
                x2="764"
                y2="230"
                stroke="#222426"
                strokeWidth="2"
                markerStart="url(#arrow-dark)"
                markerEnd="url(#arrow-dark)"
              />

              <g onClick={() => setFig4ActiveNode('cooperare')} className="cursor-pointer">
                <rect
                  x="642"
                  y="236"
                  width="245"
                  height="74"
                  fill="#E5B822"
                  fillOpacity={fig4ActiveNode === 'cooperare' ? '0.38' : '0.2'}
                  stroke="#222426"
                  strokeWidth="2.5"
                />
                <text
                  x="764"
                  y="266"
                  textAnchor="middle"
                  className="font-sans text-[12.5px] font-bold fill-[#222426]"
                >
                  Cooperare instituțională autonomă
                </text>
                <text
                  x="764"
                  y="287"
                  textAnchor="middle"
                  className="font-sans text-[11px] fill-[#6E7376]"
                >
                  Capital social de punte și reziliență
                </text>
              </g>

              {/* BOTTOM RED BYPASS PATH: Fara filtru (Enantiodromie si cinism) -> Capturare in revolta anomizanta */}
              <polyline
                points="145,340 145,415 478,415"
                fill="none"
                stroke="#F01E1E"
                strokeWidth="2.5"
                strokeDasharray="6 4"
                markerEnd="url(#arrow-red)"
              />
              <text
                x="310"
                y="406"
                textAnchor="middle"
                className="font-sans text-[11.5px] font-bold fill-[#F01E1E]"
              >
                Alunecare în enantiodromie și cinism
              </text>

              <g onClick={() => setFig4ActiveNode('anomizare')} className="cursor-pointer">
                <rect
                  x="488"
                  y="392"
                  width="235"
                  height="46"
                  fill={!fig4FiltersActive || fig4ActiveNode === 'anomizare' ? '#F01E1E' : '#F6F5EE'}
                  fillOpacity={!fig4FiltersActive || fig4ActiveNode === 'anomizare' ? '0.12' : '1'}
                  stroke="#F01E1E"
                  strokeWidth="2.5"
                />
                <text
                  x="605"
                  y="420"
                  textAnchor="middle"
                  className="font-sans text-[12px] font-bold fill-[#F01E1E]"
                >
                  Capturare în revoltă anomizantă
                </text>
              </g>
            </svg>

            {/* Legend for Psychodynamic Flows */}
            <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono bg-[#F6F5EE] border border-[#8C9BA5] p-3">
              <div className="flex items-center gap-2">
                <span className="inline-block w-6 h-0.5 bg-[#F01E1E] border-b border-dashed border-[#F01E1E] shrink-0" />
                <span className="text-[#222426]">
                  Regresie în enantiodromie și revoltă anomizantă
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-block w-6 h-1 bg-[#E5B822] shrink-0" />
                <span className="text-[#222426]">
                  Conversie în modernitate organică pe axa Ego–Sine
                </span>
              </div>
            </div>

            <div className="mt-3 pt-4 border-t border-[#222426] bg-[#F6F5EE] p-3.5">
              <p className="text-xs sm:text-sm text-[#222426] leading-relaxed">
                {fig4ActiveNode === 'umbra-bruta' &&
                  'Umbra colectivă (Jung, 1951/1968; Edinger, 1972; von Franz, 1972/1995). Nu conține doar pulsiuni distructive, ci și resurse vitale de energie psihică, instincte legitime de conservare și potențialități de înnoire excluse de Persona instituțională mimetică.'}
                {fig4ActiveNode === 'memorie' &&
                  'Memoria istorică defensivă. Neîncrederea cetățeanului român în discursurile oficiale pompoase își are rădăcina într-un reflex istoric sănătos de autoconservare, format în secolele de rezistență în fața imperiilor hegemonice.'}
                {fig4ActiveNode === 'trickster' &&
                  'Ambivalența arhetipului Trickster-ului (Jung, 1954/1968; Radin, 1956). În forma sa regresivă se manifestă ca șmecherie cinică și ocolire a legii, dar în dimensiunea sa prospectivă conține agilitate cognitivă, adaptare rapidă și rezistență la îndoctrinarea dogmatică.'}
                {fig4ActiveNode === 'filtru-lege' &&
                  'Primul filtru (Stratul A). Cadrul instituțional și constituțional stabil, definit prin închiderea operațională a statului de drept (Luhmann, 1995, 2004). Energia adaptativă devine inovație civică doar când cetățeanul constată empiric că legea este dreaptă și impersonală.'}
                {fig4ActiveNode === 'filtru-istorie' &&
                  'Al doilea filtru (Stratul B). Discernământul critic și asumarea adevărului istoric, care deconstruiesc proiecțiile paranoide prin separarea tradiției spirituale autentice de falsificările etnofiletiste și totalitare.'}
                {fig4ActiveNode === 'filtru-meta' &&
                  'Al treilea filtru (Stratul B). Vigilența metacognitivă, susținută de reglarea executivă a cortexului prefrontal, care îi permite cetățeanului să își recunoască propriile vulnerabilități afective înainte ca acestea să fie instrumentalizate prin control reflexiv.'}
                {fig4ActiveNode === 'modernitate' &&
                  'Modernitate organică și încredere (Sinteza axei Ego–Sine). Funcția transcendentă (Jung, 1916/1960) integrează potențialul din Umbră în conștiința civică, înlocuind conformismul de fațadă cu interiorizarea autentică a normelor.'}
                {fig4ActiveNode === 'cooperare' &&
                  'Cooperare instituțională autonomă. Refacerea capitalului social de punte (bridging, Putnam, 2000) și transformarea naționalismului reactiv în patriotism constituțional responsabil.'}
                {fig4ActiveNode === 'anomizare' &&
                  'Traseul inferior fără filtru (Enantiodromie și cinism). Atunci când cele trei filtre lipsesc sau energiile din Umbră sunt reprimate arogant, acestea sunt capturate de vectorii de război cognitiv în revoltă anomizantă și autodistrugere socială.'}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* =====================================================================
          FIGURA 5: Matricea comportamentală a lui Carlo M. Cipolla (Pagina 27)
         ===================================================================== */}
      {figureId === 5 && (
        <div className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3 bg-[#F6F5EE] p-3 border border-[#8C9BA5]">
            <span className="text-xs font-medium text-[#222426]">
              Traiectorie în matricea lui Cipolla
            </span>
            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={() => setFig5BarrierIntact(false)}
                className={`px-3 py-1.5 text-xs font-medium border transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  !fig5BarrierIntact
                    ? 'bg-[#F01E1E] text-[#F6F5EE] border-[#F01E1E]'
                    : 'bg-[#F6F5EE] text-[#222426] border-[#8C9BA5]'
                }`}
              >
                Prăbușire în autosabotaj colectiv · Cadranul III
              </button>
              <button
                type="button"
                onClick={() => setFig5BarrierIntact(true)}
                className={`px-3 py-1.5 text-xs font-medium border transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  fig5BarrierIntact
                    ? 'bg-[#E5B822] text-[#222426] border-[#222426] font-semibold'
                    : 'bg-[#F6F5EE] text-[#222426] border-[#8C9BA5]'
                }`}
              >
                Tranziție spre cooperare inteligentă · Cadranul I
              </button>
            </div>
          </div>

          <div className="bg-[#F6F5EE] border border-[#222426] p-3 sm:p-5 overflow-x-auto">
            <svg
              viewBox="0 0 880 540"
              className={svgClass}
              role="img"
              aria-label={meta.title}
            >
              <SharedSvgDefs />
              <rect x="0" y="0" width="880" height="540" fill="#F6F5EE" />
              <rect x="0" y="0" width="880" height="540" fill="url(#stipple-bg)" />

              {/* Outer Matrix Frame */}
              <rect
                x="70"
                y="45"
                width="740"
                height="450"
                fill="none"
                stroke="#222426"
                strokeWidth="1.5"
              />

              {/* CADRANUL II (Top-Left): Cetățeni vulnerabili / Naivi (-X, +Y) */}
              <g
                onClick={() => setFig5SelectedQuadrant('II')}
                className="cursor-pointer"
              >
                <rect
                  x="70"
                  y="45"
                  width="370"
                  height="225"
                  fill={fig5SelectedQuadrant === 'II' ? '#E5B822' : '#F6F5EE'}
                  fillOpacity={fig5SelectedQuadrant === 'II' ? '0.18' : '0.6'}
                  stroke="#8C9BA5"
                  strokeWidth="1"
                />
                <text
                  x="255"
                  y="92"
                  textAnchor="middle"
                  className="font-sans text-[14.5px] font-bold fill-[#6E7376]"
                >
                  Cadranul II · Cetățeni vulnerabili
                </text>
                <text
                  x="255"
                  y="117"
                  textAnchor="middle"
                  className="font-sans text-[12px] fill-[#6E7376]"
                >
                  Pierdere proprie · Beneficiu societal
                </text>
                <text
                  x="255"
                  y="139"
                  textAnchor="middle"
                  className="font-sans text-[12px] fill-[#6E7376]"
                >
                  Uzură alostatică și neputință învățată
                </text>
              </g>

              {/* CADRANUL I (Top-Right): Cooperare inteligentă (+X, +Y) */}
              <g
                onClick={() => setFig5SelectedQuadrant('I')}
                className="cursor-pointer"
              >
                <rect
                  x="440"
                  y="45"
                  width="370"
                  height="225"
                  fill="#E5B822"
                  fillOpacity={fig5SelectedQuadrant === 'I' ? '0.3' : '0.12'}
                  stroke="#222426"
                  strokeWidth="1.5"
                />
                <text
                  x="625"
                  y="92"
                  textAnchor="middle"
                  className="font-sans text-[14.5px] font-bold fill-[#222426]"
                >
                  Cadranul I · Cooperare inteligentă
                </text>
                <text
                  x="625"
                  y="117"
                  textAnchor="middle"
                  className="font-sans text-[12px] fill-[#222426]"
                >
                  Beneficiu propriu · Beneficiu colectiv
                </text>
                <text
                  x="625"
                  y="139"
                  textAnchor="middle"
                  className="font-sans text-[12px] fill-[#6E7376]"
                >
                  Modernitate organică și stat de drept
                </text>
              </g>

              {/* CADRANUL III (Bottom-Left): Autosabotaj social / Iraționalitate autodistructivă (-X, -Y) */}
              <g
                onClick={() => setFig5SelectedQuadrant('III')}
                className="cursor-pointer"
              >
                <rect
                  x="70"
                  y="270"
                  width="370"
                  height="225"
                  fill="#F01E1E"
                  fillOpacity={fig5SelectedQuadrant === 'III' ? '0.18' : '0.08'}
                  stroke="#F01E1E"
                  strokeWidth="1.5"
                />
                <text
                  x="255"
                  y="395"
                  textAnchor="middle"
                  className="font-sans text-[14.5px] font-bold fill-[#F01E1E]"
                >
                  Cadranul III · Autosabotaj colectiv
                </text>
                <text
                  x="255"
                  y="418"
                  textAnchor="middle"
                  className="font-sans text-[12px] font-semibold fill-[#F01E1E]"
                >
                  Iraționalitate autodistructivă
                </text>
                <text
                  x="255"
                  y="440"
                  textAnchor="middle"
                  className="font-sans text-[11.5px] fill-[#6E7376]"
                >
                  Pierdere proprie · Daună societală
                </text>
              </g>

              {/* CADRANUL IV (Bottom-Right): Elite extractive / Banditism (+X, -Y) */}
              <g
                onClick={() => setFig5SelectedQuadrant('IV')}
                className="cursor-pointer"
              >
                <rect
                  x="440"
                  y="270"
                  width="370"
                  height="225"
                  fill={fig5SelectedQuadrant === 'IV' ? '#E5B822' : '#F6F5EE'}
                  fillOpacity={fig5SelectedQuadrant === 'IV' ? '0.18' : '0.6'}
                  stroke="#222426"
                  strokeWidth="1"
                />
                <text
                  x="625"
                  y="395"
                  textAnchor="middle"
                  className="font-sans text-[14.5px] font-bold fill-[#222426]"
                >
                  Cadranul IV · Elite extractive
                </text>
                <text
                  x="625"
                  y="418"
                  textAnchor="middle"
                  className="font-sans text-[12px] fill-[#6E7376]"
                >
                  Câștig propriu · Daună societală
                </text>
                <text
                  x="625"
                  y="440"
                  textAnchor="middle"
                  className="font-sans text-[11.5px] fill-[#6E7376]"
                >
                  Extracție de rentă și vector de război cognitiv
                </text>
              </g>

              {/* CARTESIAN AXES (#222426) */}
              {/* Horizontal Axis -X to +X */}
              <line
                x1="50"
                y1="270"
                x2="830"
                y2="270"
                stroke="#222426"
                strokeWidth="2.5"
                markerStart="url(#arrow-dark)"
                markerEnd="url(#arrow-dark)"
              />
              {/* Vertical Axis -Y to +Y */}
              <line
                x1="440"
                y1="505"
                x2="440"
                y2="35"
                stroke="#222426"
                strokeWidth="2.5"
                markerStart="url(#arrow-dark)"
                markerEnd="url(#arrow-dark)"
              />

              {/* Axis Labels */}
              <rect x="365" y="10" width="150" height="24" fill="#F6F5EE" />
              <text
                x="440"
                y="26"
                textAnchor="middle"
                className="font-sans text-[12.5px] font-bold fill-[#222426]"
              >
                +Y · Beneficiu societal
              </text>

              <rect x="375" y="515" width="130" height="22" fill="#F6F5EE" />
              <text
                x="440"
                y="530"
                textAnchor="middle"
                className="font-sans text-[12.5px] font-bold fill-[#222426]"
              >
                -Y · Daună societală
              </text>

              <rect x="74" y="236" width="138" height="22" fill="#F6F5EE" />
              <text
                x="78"
                y="251"
                textAnchor="start"
                className="font-sans text-[12px] font-bold fill-[#222426]"
              >
                -X · Pierdere proprie
              </text>

              <rect x="676" y="236" width="130" height="22" fill="#F6F5EE" />
              <text
                x="802"
                y="251"
                textAnchor="end"
                className="font-sans text-[12px] font-bold fill-[#222426]"
              >
                +X · Câștig propriu
              </text>

              {/* Diagonal Dashed Vector: Presiune de spoliere sistemică din (+X, -Y) spre (-X, +Y) */}
              <line
                x1="570"
                y1="365"
                x2="335"
                y2="165"
                stroke="#222426"
                strokeWidth="2"
                strokeDasharray="6 4"
                markerEnd="url(#arrow-dark)"
              />
              <rect
                x="446"
                y="290"
                width="195"
                height="26"
                fill="#F6F5EE"
                stroke="#222426"
                strokeWidth="1.5"
              />
              <text
                x="543"
                y="307"
                textAnchor="middle"
                className="font-sans text-[11.5px] font-bold fill-[#222426]"
              >
                Presiune de spoliere sistemică
              </text>

              {/* DINAMICA 1: Traiectoria orizontală de la (-X, +Y) spre (+X, +Y) */}
              {!fig5BarrierIntact ? (
                <g>
                  {/* Traiectorie orizontală blocată de T-bar în #F01E1E */}
                  <line
                    x1="265"
                    y1="165"
                    x2="425"
                    y2="165"
                    stroke="#F01E1E"
                    strokeWidth="3.5"
                  />
                  {/* T-BAR TRANSVERSAL în #F01E1E */}
                  <line
                    x1="425"
                    y1="135"
                    x2="425"
                    y2="195"
                    stroke="#F01E1E"
                    strokeWidth="7"
                  />
                  <rect
                    x="270"
                    y="142"
                    width="145"
                    height="20"
                    fill="#F6F5EE"
                    stroke="#F01E1E"
                    strokeWidth="1.5"
                  />
                  <text
                    x="342"
                    y="156"
                    textAnchor="middle"
                    className="font-sans text-[10px] font-bold fill-[#F01E1E]"
                  >
                    Tranziție blocată
                  </text>

                  {/* DINAMICA 2: Vectorul descendent masiv în #F01E1E */}
                  <line
                    x1="185"
                    y1="165"
                    x2="185"
                    y2="365"
                    stroke="#F01E1E"
                    strokeWidth="5"
                    markerEnd="url(#arrow-red)"
                  />
                  <rect
                    x="90"
                    y="255"
                    width="190"
                    height="28"
                    fill="#F6F5EE"
                    stroke="#F01E1E"
                    strokeWidth="1.5"
                  />
                  <text
                    x="185"
                    y="273"
                    textAnchor="middle"
                    className="font-sans text-[11px] font-bold fill-[#F01E1E]"
                  >
                    Alunecare în autosabotaj colectiv
                  </text>
                </g>
              ) : (
                <g>
                  {/* Barieră consolidată și tranziție orizontală deblocată în #E5B822 */}
                  <line
                    x1="75"
                    y1="276"
                    x2="435"
                    y2="276"
                    stroke="#222426"
                    strokeWidth="7"
                  />
                  <line
                    x1="75"
                    y1="276"
                    x2="435"
                    y2="276"
                    stroke="#E5B822"
                    strokeWidth="5"
                  />
                  <rect
                    x="214"
                    y="256"
                    width="216"
                    height="26"
                    rx="3"
                    fill="#E5B822"
                    stroke="#222426"
                    strokeWidth="1.5"
                  />
                  <text
                    x="322"
                    y="273"
                    textAnchor="middle"
                    className="font-sans text-[11.5px] font-bold fill-[#222426]"
                  >
                    Barieră instituțională consolidată
                  </text>
                  <line
                    x1="265"
                    y1="165"
                    x2="520"
                    y2="165"
                    stroke="#222426"
                    strokeWidth="5.5"
                  />
                  <line
                    x1="265"
                    y1="165"
                    x2="520"
                    y2="165"
                    stroke="#E5B822"
                    strokeWidth="4"
                    markerEnd="url(#arrow-gold)"
                  />
                  <rect
                    x="306"
                    y="148"
                    width="184"
                    height="22"
                    fill="#F6F5EE"
                    stroke="#222426"
                    strokeWidth="1.5"
                  />
                  <text
                    x="398"
                    y="163"
                    textAnchor="middle"
                    className="font-sans text-[10.5px] font-bold fill-[#222426]"
                  >
                    Tranziție spre cooperare inteligentă
                  </text>
                </g>
              )}
            </svg>

            <div className="mt-4 pt-4 border-t border-[#222426] bg-[#F6F5EE] p-3.5">
              <p className="text-xs sm:text-sm text-[#222426] leading-relaxed">
                {fig5SelectedQuadrant === 'I' &&
                  'Cadranul I (+X, +Y, cooperare inteligentă). Cetățenii, antreprenorii și instituțiile incluzive își urmăresc propriul interes legitim prin muncă, inovație și respectarea legii impersonale, generând simultan valoare adăugată și încredere pentru întreaga comunitate (ordinea socială cu acces deschis, North, Wallis & Weingast, 2009).'}
                {fig5SelectedQuadrant === 'II' &&
                  'Cadranul II (-X, +Y, cetățenii vulnerabili / naivii, Helpless). Indivizii cinstiți care muncesc, plătesc taxe și susțin funcționarea societății (+Y), dar care, din cauza asimetriei informaționale și a precarității serviciilor publice, înregistrează o pierdere netă de bunăstare, sănătate și demnitate (-X).'}
                {fig5SelectedQuadrant === 'IV' &&
                  'Cadranul IV (+X, -Y, elitele extractive / banditismul, Bandits). Rețelele politico-economice clientelare și birocrațiile parazitare interne (precum și agresorul geopolitic extern) care își însușesc câștiguri substanțiale (+X) prin spolierea bugetelor publice și degradarea instituțiilor (-Y).'}
                {fig5SelectedQuadrant === 'III' &&
                  'Cadranul III (-X, -Y, autosabotajul social / iraționalitatea autodistructivă). Crezând că se mută în Cadranul I sau că îi pedepsește exclusiv pe spoliatorii din Cadranul IV, cetățeanul vulnerabil, blocat de T-bar pe traseul cooperării, este împins de vectorul descendent masiv în Cadranul III, unde votul punitiv extrem distruge bunul public (-Y) și propria securitate socioeconomică (-X).'}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* =====================================================================
          FIGURA 6: Modelul comparativ al procesării cognitive în criză (Track A vs. Track B)
         ===================================================================== */}
      {figureId === 6 && (
        <div className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3 bg-[#F6F5EE] p-3 border border-[#8C9BA5]">
            <span className="text-xs font-medium text-[#222426]">
              Procesare cognitivă în criză
            </span>
            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={() => {
                  setFig6ActiveTrack('A');
                  setFig6SelectedStep('trackA');
                }}
                className={`px-3 py-1.5 text-xs font-medium border transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  fig6ActiveTrack === 'A'
                    ? 'bg-[#F01E1E] text-[#F6F5EE] border-[#F01E1E]'
                    : 'bg-[#F6F5EE] text-[#222426] border-[#8C9BA5]'
                }`}
              >
                Track A · Procesare defensivă și autoamplificare
              </button>
              <button
                type="button"
                onClick={() => {
                  setFig6ActiveTrack('B');
                  setFig6SelectedStep('trackB');
                }}
                className={`px-3 py-1.5 text-xs font-medium border transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  fig6ActiveTrack === 'B'
                    ? 'bg-[#E5B822] text-[#222426] border-[#222426] font-semibold'
                    : 'bg-[#F6F5EE] text-[#222426] border-[#8C9BA5]'
                }`}
              >
                Track B · Procesare adaptativă și creație suverană
              </button>
            </div>
          </div>

          <div className="bg-[#F6F5EE] border border-[#222426] p-3 sm:p-5 overflow-x-auto">
            <svg
              viewBox="0 0 920 620"
              className={svgClass}
              role="img"
              aria-label={meta.title}
            >
              <SharedSvgDefs />
              <rect x="0" y="0" width="920" height="620" fill="#F6F5EE" />
              <rect x="0" y="0" width="920" height="620" fill="url(#stipple-bg)" />

              {/* NOD UNIC DE BIFURCAȚIE CENTRAL SUPERIOR */}
              <g
                onClick={() => setFig6SelectedStep('bifurcatie')}
                className="cursor-pointer"
              >
                <rect
                  x="300"
                  y="18"
                  width="320"
                  height="62"
                  rx="4"
                  fill={fig6SelectedStep === 'bifurcatie' ? '#E5B822' : '#F6F5EE'}
                  fillOpacity={fig6SelectedStep === 'bifurcatie' ? '0.25' : '1'}
                  stroke="#222426"
                  strokeWidth="2.5"
                />
                <text
                  x="460"
                  y="43"
                  textAnchor="middle"
                  className="font-sans text-[13px] font-bold fill-[#222426]"
                >
                  Nod unic de bifurcație cognitivă
                </text>
                <text
                  x="460"
                  y="63"
                  textAnchor="middle"
                  className="font-sans text-[11px] fill-[#6E7376]"
                >
                  Stres material acut și policriză
                </text>
              </g>

              {/* SĂGEȚI DIVERGENTE DE BIFURCAȚIE */}
              {/* Spre Track A (stânga) */}
              <path
                d="M 360 80 C 310 96, 250 106, 230 120"
                fill="none"
                stroke="#F01E1E"
                strokeWidth="3.5"
                markerEnd="url(#arrow-red)"
              />
              <rect
                x="200"
                y="86"
                width="155"
                height="20"
                fill="#F6F5EE"
                stroke="#F01E1E"
                strokeWidth="1"
              />
              <text
                x="277"
                y="100"
                textAnchor="middle"
                className="font-sans text-[9.5px] font-bold fill-[#F01E1E]"
              >
                Track A: Procesare defensivă
              </text>

              {/* Spre Track B (dreapta) */}
              <path
                d="M 560 80 C 610 96, 670 106, 690 120"
                fill="none"
                stroke="#222426"
                strokeWidth="4.5"
              />
              <path
                d="M 560 80 C 610 96, 670 106, 690 120"
                fill="none"
                stroke="#E5B822"
                strokeWidth="3"
                markerEnd="url(#arrow-gold)"
              />
              <rect
                x="565"
                y="86"
                width="155"
                height="20"
                fill="#F6F5EE"
                stroke="#222426"
                strokeWidth="1"
              />
              <text
                x="642"
                y="100"
                textAnchor="middle"
                className="font-sans text-[9.5px] font-bold fill-[#222426]"
              >
                Track B: Procesare adaptativă
              </text>

              {/* ============================================================
                  TRACK A: PROCESARE DEFENSIVĂ (Stânga)
                 ============================================================ */}
              <g>
                {/* Header bar Track A */}
                <rect
                  x="85"
                  y="126"
                  width="290"
                  height="26"
                  fill="#F01E1E"
                  fillOpacity="0.1"
                  stroke="#F01E1E"
                  strokeWidth="1.5"
                />
                <text
                  x="230"
                  y="143"
                  textAnchor="middle"
                  className="font-sans text-[11px] font-bold fill-[#F01E1E]"
                >
                  Track A · Procesare defensivă și reactivă
                </text>

                {/* A1: Anxietate cronică */}
                <g
                  onClick={() => setFig6SelectedStep('anxietate')}
                  className="cursor-pointer"
                >
                  <rect
                    x="85"
                    y="158"
                    width="290"
                    height="50"
                    rx="3"
                    fill={fig6SelectedStep === 'anxietate' ? '#F01E1E' : '#F6F5EE'}
                    fillOpacity={fig6SelectedStep === 'anxietate' ? '0.12' : '1'}
                    stroke="#F01E1E"
                    strokeWidth="2"
                  />
                  <text
                    x="230"
                    y="178"
                    textAnchor="middle"
                    className="font-sans text-[11.5px] font-bold fill-[#222426]"
                  >
                    Anxietate cronică
                  </text>
                  <text
                    x="230"
                    y="196"
                    textAnchor="middle"
                    className="font-sans text-[10px] fill-[#6E7376]"
                  >
                    Hiperreactivitate și inhibiție prefrontală
                  </text>
                </g>

                {/* Săgeată A1 -> A2 */}
                <line
                  x1="230"
                  y1="208"
                  x2="230"
                  y2="228"
                  stroke="#F01E1E"
                  strokeWidth="2.5"
                  markerEnd="url(#arrow-red)"
                />

                {/* A2: Nevoia de închidere cognitivă (NFCC) - strict intoleranța la ambiguitate și urgența */}
                <g
                  onClick={() => setFig6SelectedStep('nfcc')}
                  className="cursor-pointer"
                >
                  <rect
                    x="85"
                    y="230"
                    width="290"
                    height="50"
                    rx="3"
                    fill={fig6SelectedStep === 'nfcc' ? '#F01E1E' : '#F6F5EE'}
                    fillOpacity={fig6SelectedStep === 'nfcc' ? '0.12' : '1'}
                    stroke="#F01E1E"
                    strokeWidth="2"
                  />
                  <text
                    x="230"
                    y="250"
                    textAnchor="middle"
                    className="font-sans text-[11.5px] font-bold fill-[#222426]"
                  >
                    Nevoia de închidere cognitivă
                  </text>
                  <text
                    x="230"
                    y="268"
                    textAnchor="middle"
                    className="font-sans text-[10px] fill-[#6E7376]"
                  >
                    Intoleranță la ambiguitate și urgență decizională
                  </text>
                </g>

                {/* Săgeată A2 -> A3 */}
                <line
                  x1="230"
                  y1="280"
                  x2="230"
                  y2="300"
                  stroke="#F01E1E"
                  strokeWidth="2.5"
                  markerEnd="url(#arrow-red)"
                />

                {/* A3: Persona mimetică - conformism formal, copiere modele externe, aparență */}
                <g
                  onClick={() => setFig6SelectedStep('persona')}
                  className="cursor-pointer"
                >
                  <rect
                    x="85"
                    y="302"
                    width="290"
                    height="50"
                    rx="3"
                    fill={fig6SelectedStep === 'persona' ? '#F01E1E' : '#F6F5EE'}
                    fillOpacity={fig6SelectedStep === 'persona' ? '0.12' : '1'}
                    stroke="#F01E1E"
                    strokeWidth="2"
                  />
                  <text
                    x="230"
                    y="322"
                    textAnchor="middle"
                    className="font-sans text-[11.5px] font-bold fill-[#222426]"
                  >
                    Persona mimetică
                  </text>
                  <text
                    x="230"
                    y="340"
                    textAnchor="middle"
                    className="font-sans text-[10px] fill-[#6E7376]"
                  >
                    Conformism formal și „forme fără fond”
                  </text>
                </g>

                {/* Vector bidirecțional Persona mimetică <-> Umbra colectivă */}
                <line
                  x1="210"
                  y1="352"
                  x2="210"
                  y2="390"
                  stroke="#F01E1E"
                  strokeWidth="2"
                  markerEnd="url(#arrow-red)"
                />
                <line
                  x1="250"
                  y1="392"
                  x2="250"
                  y2="354"
                  stroke="#F01E1E"
                  strokeWidth="2"
                  markerEnd="url(#arrow-red)"
                />
                <rect
                  x="150"
                  y="363"
                  width="160"
                  height="18"
                  fill="#F6F5EE"
                  stroke="#F01E1E"
                  strokeWidth="1"
                />
                <text
                  x="230"
                  y="376"
                  textAnchor="middle"
                  className="font-sans text-[9px] font-bold fill-[#F01E1E]"
                >
                  Tensiune și compensare
                </text>

                {/* A4: Umbra colectivă */}
                <g
                  onClick={() => setFig6SelectedStep('umbra')}
                  className="cursor-pointer"
                >
                  <rect
                    x="85"
                    y="394"
                    width="290"
                    height="50"
                    rx="3"
                    fill={fig6SelectedStep === 'umbra' ? '#F01E1E' : '#F6F5EE'}
                    fillOpacity={fig6SelectedStep === 'umbra' ? '0.15' : '1'}
                    stroke="#F01E1E"
                    strokeWidth="2"
                  />
                  <text
                    x="230"
                    y="414"
                    textAnchor="middle"
                    className="font-sans text-[11.5px] font-bold fill-[#F01E1E]"
                  >
                    Umbra colectivă
                  </text>
                  <text
                    x="230"
                    y="432"
                    textAnchor="middle"
                    className="font-sans text-[10px] fill-[#6E7376]"
                  >
                    Resentiment refulat și defensă antiinstituțională
                  </text>
                </g>

                {/* Săgeată A4 -> A5 */}
                <line
                  x1="230"
                  y1="444"
                  x2="230"
                  y2="466"
                  stroke="#F01E1E"
                  strokeWidth="2.5"
                  markerEnd="url(#arrow-red)"
                />

                {/* A5: Buclă de feedback algoritmic */}
                <g
                  onClick={() => setFig6SelectedStep('bucla_algoritmica')}
                  className="cursor-pointer"
                >
                  <rect
                    x="85"
                    y="468"
                    width="290"
                    height="50"
                    rx="3"
                    fill={fig6SelectedStep === 'bucla_algoritmica' ? '#F01E1E' : '#F6F5EE'}
                    fillOpacity={fig6SelectedStep === 'bucla_algoritmica' ? '0.15' : '1'}
                    stroke="#F01E1E"
                    strokeWidth="2"
                  />
                  <text
                    x="230"
                    y="488"
                    textAnchor="middle"
                    className="font-sans text-[11.5px] font-bold fill-[#F01E1E]"
                  >
                    Buclă de feedback algoritmic
                  </text>
                  <text
                    x="230"
                    y="506"
                    textAnchor="middle"
                    className="font-sans text-[10px] fill-[#6E7376]"
                  >
                    Amplificare virală și polarizare emoțională
                  </text>
                </g>

                {/* ÎNCHIDEREA FIZICĂ A BUCLEI ALGORITMICE (R) ÎNAPOI LA ANXIETATE CRONICĂ */}
                <polyline
                  points="85,493 36,493 36,183 83,183"
                  fill="none"
                  stroke="#F01E1E"
                  strokeWidth="2.5"
                  strokeDasharray="5 3"
                  markerEnd="url(#arrow-red)"
                />
                <circle
                  cx="36"
                  cy="338"
                  r="14"
                  fill="#F6F5EE"
                  stroke="#F01E1E"
                  strokeWidth="2"
                />
                <text
                  x="36"
                  y="343"
                  textAnchor="middle"
                  className="font-sans text-[11px] font-bold fill-[#F01E1E]"
                >
                  R
                </text>
                <rect
                  x="6"
                  y="360"
                  width="60"
                  height="26"
                  fill="#F6F5EE"
                  stroke="#F01E1E"
                  strokeWidth="1"
                />
                <text
                  x="36"
                  y="371"
                  textAnchor="middle"
                  className="font-sans text-[8px] font-bold fill-[#F01E1E]"
                >
                  Reacție
                </text>
                <text
                  x="36"
                  y="381"
                  textAnchor="middle"
                  className="font-sans text-[8px] font-bold fill-[#F01E1E]"
                >
                  pozitivă
                </text>
              </g>

              {/* RECUPERAREA SELECTIVĂ A INGENIOZITĂȚII (TRICKSTER) */}
              <path
                d="M 375 419 C 430 419, 475 306, 543 306"
                fill="none"
                stroke="#6E7376"
                strokeWidth="2"
                strokeDasharray="4 4"
                markerEnd="url(#arrow-slate)"
              />
              <rect
                x="400"
                y="348"
                width="130"
                height="30"
                fill="#F6F5EE"
                stroke="#6E7376"
                strokeWidth="1"
              />
              <text
                x="465"
                y="361"
                textAnchor="middle"
                className="font-sans text-[8.5px] font-bold fill-[#222426]"
              >
                Recuperare ingeniozitate
              </text>
              <text
                x="465"
                y="372"
                textAnchor="middle"
                className="font-sans text-[8.5px] fill-[#6E7376]"
              >
                integrare Trickster
              </text>

              {/* ============================================================
                  TRACK B: PROCESARE ADAPTATIVĂ (Dreapta)
                 ============================================================ */}
              <g>
                {/* Header bar Track B */}
                <rect
                  x="545"
                  y="126"
                  width="290"
                  height="26"
                  fill="#E5B822"
                  fillOpacity="0.2"
                  stroke="#222426"
                  strokeWidth="1.5"
                />
                <text
                  x="690"
                  y="143"
                  textAnchor="middle"
                  className="font-sans text-[11px] font-bold fill-[#222426]"
                >
                  Track B · Procesare adaptativă și deliberativă
                </text>

                {/* B1: Acceptarea incertitudinii */}
                <g
                  onClick={() => setFig6SelectedStep('b1')}
                  className="cursor-pointer"
                >
                  <rect
                    x="545"
                    y="158"
                    width="290"
                    height="44"
                    rx="3"
                    fill={fig6SelectedStep === 'b1' ? '#E5B822' : '#F6F5EE'}
                    fillOpacity={fig6SelectedStep === 'b1' ? '0.25' : '1'}
                    stroke="#222426"
                    strokeWidth="2"
                  />
                  <text
                    x="690"
                    y="176"
                    textAnchor="middle"
                    className="font-sans text-[11px] font-bold fill-[#222426]"
                  >
                    1. Acceptarea incertitudinii
                  </text>
                  <text
                    x="690"
                    y="192"
                    textAnchor="middle"
                    className="font-sans text-[9.5px] fill-[#6E7376]"
                  >
                    Capacitate negativă și suspendarea urgenței
                  </text>
                </g>

                {/* Săgeată B1 -> B2 */}
                <line
                  x1="690"
                  y1="202"
                  x2="690"
                  y2="218"
                  stroke="#222426"
                  strokeWidth="4"
                />
                <line
                  x1="690"
                  y1="202"
                  x2="690"
                  y2="218"
                  stroke="#E5B822"
                  strokeWidth="2.5"
                  markerEnd="url(#arrow-gold)"
                />

                {/* B2: Reactivarea Sistemului 2 */}
                <g
                  onClick={() => setFig6SelectedStep('b2')}
                  className="cursor-pointer"
                >
                  <rect
                    x="545"
                    y="220"
                    width="290"
                    height="44"
                    rx="3"
                    fill={fig6SelectedStep === 'b2' ? '#E5B822' : '#F6F5EE'}
                    fillOpacity={fig6SelectedStep === 'b2' ? '0.25' : '1'}
                    stroke="#222426"
                    strokeWidth="2"
                  />
                  <text
                    x="690"
                    y="238"
                    textAnchor="middle"
                    className="font-sans text-[11px] font-bold fill-[#222426]"
                  >
                    2. Reactivarea Sistemului 2
                  </text>
                  <text
                    x="690"
                    y="254"
                    textAnchor="middle"
                    className="font-sans text-[9.5px] fill-[#6E7376]"
                  >
                    Reglare executivă prefrontală
                  </text>
                </g>

                {/* Săgeată B2 -> B3 */}
                <line
                  x1="690"
                  y1="264"
                  x2="690"
                  y2="280"
                  stroke="#222426"
                  strokeWidth="4"
                />
                <line
                  x1="690"
                  y1="264"
                  x2="690"
                  y2="280"
                  stroke="#E5B822"
                  strokeWidth="2.5"
                  markerEnd="url(#arrow-gold)"
                />

                {/* B3: Toleranța disonanței */}
                <g
                  onClick={() => setFig6SelectedStep('b3')}
                  className="cursor-pointer"
                >
                  <rect
                    x="545"
                    y="282"
                    width="290"
                    height="48"
                    rx="3"
                    fill={fig6SelectedStep === 'b3' ? '#E5B822' : '#F6F5EE'}
                    fillOpacity={fig6SelectedStep === 'b3' ? '0.25' : '1'}
                    stroke="#222426"
                    strokeWidth="2"
                  />
                  <text
                    x="690"
                    y="300"
                    textAnchor="middle"
                    className="font-sans text-[11px] font-bold fill-[#222426]"
                  >
                    3. Toleranța disonanței
                  </text>
                  <text
                    x="690"
                    y="316"
                    textAnchor="middle"
                    className="font-sans text-[9.5px] font-medium fill-[#222426]"
                  >
                    Integrarea ingeniozității adaptative Trickster
                  </text>
                </g>

                {/* Săgeată B3 -> B4 */}
                <line
                  x1="690"
                  y1="330"
                  x2="690"
                  y2="346"
                  stroke="#222426"
                  strokeWidth="4"
                />
                <line
                  x1="690"
                  y1="330"
                  x2="690"
                  y2="346"
                  stroke="#E5B822"
                  strokeWidth="2.5"
                  markerEnd="url(#arrow-gold)"
                />

                {/* B4: Discernământ critic */}
                <g
                  onClick={() => setFig6SelectedStep('b4')}
                  className="cursor-pointer"
                >
                  <rect
                    x="545"
                    y="348"
                    width="290"
                    height="44"
                    rx="3"
                    fill={fig6SelectedStep === 'b4' ? '#E5B822' : '#F6F5EE'}
                    fillOpacity={fig6SelectedStep === 'b4' ? '0.25' : '1'}
                    stroke="#222426"
                    strokeWidth="2"
                  />
                  <text
                    x="690"
                    y="366"
                    textAnchor="middle"
                    className="font-sans text-[11px] font-bold fill-[#222426]"
                  >
                    4. Discernământ critic
                  </text>
                  <text
                    x="690"
                    y="382"
                    textAnchor="middle"
                    className="font-sans text-[9.5px] fill-[#6E7376]"
                  >
                    Mediere semiotică ternară și verificare probatorie
                  </text>
                </g>

                {/* Săgeată B4 -> B5 */}
                <line
                  x1="690"
                  y1="392"
                  x2="690"
                  y2="408"
                  stroke="#222426"
                  strokeWidth="4"
                />
                <line
                  x1="690"
                  y1="392"
                  x2="690"
                  y2="408"
                  stroke="#E5B822"
                  strokeWidth="2.5"
                  markerEnd="url(#arrow-gold)"
                />

                {/* B5: Creație suverană */}
                <g
                  onClick={() => setFig6SelectedStep('b5')}
                  className="cursor-pointer"
                >
                  <rect
                    x="545"
                    y="410"
                    width="290"
                    height="48"
                    rx="3"
                    fill="#E5B822"
                    stroke="#222426"
                    strokeWidth="2.5"
                  />
                  <text
                    x="690"
                    y="430"
                    textAnchor="middle"
                    className="font-sans text-[12px] font-bold fill-[#222426]"
                  >
                    5. Creație suverană
                  </text>
                  <text
                    x="690"
                    y="447"
                    textAnchor="middle"
                    className="font-sans text-[10px] font-medium fill-[#222426]"
                  >
                    Acțiune civică, reziliență și autonomie
                  </text>
                </g>

                {/* Linie punctată spre Axa Ego-Sine la bază */}
                <line
                  x1="690"
                  y1="458"
                  x2="690"
                  y2="520"
                  stroke="#222426"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                  markerEnd="url(#arrow-dark)"
                />
                <rect
                  x="635"
                  y="478"
                  width="110"
                  height="18"
                  fill="#F6F5EE"
                  stroke="#8C9BA5"
                  strokeWidth="1"
                />
                <text
                  x="690"
                  y="491"
                  textAnchor="middle"
                  className="font-sans text-[8.5px] font-bold fill-[#6E7376]"
                >
                  Aliniere ontologică
                </text>

                {/* Baza: Axa Ego–Sine */}
                <ellipse
                  cx="690"
                  cy="546"
                  rx="145"
                  ry="24"
                  fill="#F6F5EE"
                  stroke="#222426"
                  strokeWidth="2"
                />
                <text
                  x="690"
                  y="550"
                  textAnchor="middle"
                  className="font-sans text-[11px] font-bold fill-[#222426]"
                >
                  Axa Ego–Sine · Integritate profundă
                </text>

                {/* Buclă de consolidare a rezilienței */}
                <polyline
                  points="835,434 870,434 870,178 837,178"
                  fill="none"
                  stroke="#6E7376"
                  strokeWidth="1.8"
                  strokeDasharray="4 4"
                  markerEnd="url(#arrow-slate)"
                />
                <rect
                  x="830"
                  y="290"
                  width="80"
                  height="32"
                  fill="#F6F5EE"
                  stroke="#6E7376"
                  strokeWidth="1"
                />
                <text
                  x="870"
                  y="303"
                  textAnchor="middle"
                  className="font-sans text-[8px] font-bold fill-[#6E7376]"
                >
                  Consolidare
                </text>
                <text
                  x="870"
                  y="314"
                  textAnchor="middle"
                  className="font-sans text-[8px] fill-[#6E7376]"
                >
                  reziliență
                </text>
              </g>
            </svg>

            <div className="mt-4 pt-4 border-t border-[#222426] bg-[#F6F5EE] p-3.5">
              <p className="text-xs sm:text-sm text-[#222426] leading-relaxed">
                {fig6SelectedStep === 'bifurcatie' &&
                  'Nodul unic de bifurcație (stresul material acut și policriza). Reprezintă punctul de incidență al șocului cognitiv și socioeconomic. În absența unei pauze metacognitive și a rezervei neurobiologice, presiunea crizei împinge procesarea în mod automat spre reacția defensivă din Track A.'}
                {fig6SelectedStep === 'anxietate' &&
                  'Anxietatea cronică și hiperreactivitatea (Track A). Starea de alertă prelungită activează circuitele subcorticale amigdaliene și rețeaua de saliență (Menon, 2011), inducând inhibarea sinaptică catecolaminergică și decuplarea funcțională a cortexului prefrontal dorsolateral (dlPFC) și ventromedial (vmPFC), ceea ce blochează capacitatea de analiză critică și declanșează reflexe reactive automate de apărare.'}
                {fig6SelectedStep === 'nfcc' &&
                  'Nevoia de închidere cognitivă (NFCC, Need for Cognitive Closure). Sub presiunea anxietății, individul manifestă o intoleranță acută la ambiguitate (Seizing) și o urgență extremă de a adopta concluzii categorice, rapide și simplificatoare (Freezing), refuzând orice nuanță sau complexitate.'}
                {fig6SelectedStep === 'persona' &&
                  'Persona mimetică (Track A). Conformismul formal de fațadă și copierea modelelor externe neintegrate („forme fără fond”). Individul adoptă discursuri și aparențe gata fabricate pentru a simula apartenența și a reduce disonanța, fără o asimilare critică reală.'}
                {fig6SelectedStep === 'umbra' &&
                  'Umbra colectivă (Track A). Conținuturile psihosociale refulate, frustrarea istorică și resentimentul acumulat. Între Persona mimetică și Umbra colectivă se instalează o tensiune compensatorie permanentă: cu cât conformismul de fațadă este mai rigid, cu atât umbra proiectează agresivitate și ostilitate antiinstituțională.'}
                {fig6SelectedStep === 'bucla_algoritmica' &&
                  'Bucla de feedback algoritmic și închiderea fizică (R). Resentimentul umbrei este capturat de algoritmii de optimizare a atenției și de operatorii de război cognitiv, amplificând polarizarea. Săgeata buclei se întoarce fizic la Anxietate cronică ca reacție pozitivă (Reinforcing Loop - R), autoamplificând criza.'}
                {fig6SelectedStep === 'b1' &&
                  '1. Acceptarea incertitudinii (Track B). Punctul de intrare în procesarea adaptativă constă în capacitatea negativă (Bion) — rezistența la impulsul de a închide prematur cogniția (rezistență la NFCC) și acceptarea calmă a stării de necunoscut fără panică.'}
                {fig6SelectedStep === 'b2' &&
                  '2. Reactivarea Sistemului 2 (Track B). Reglarea executivă a rețelei prefrontale (dlPFC și vmPFC), care reia controlul asupra impulsurilor amigdaliene, permițând analiza logică, contextualizarea istorică și decuplarea de stimulii virali extremi.'}
                {fig6SelectedStep === 'b3' &&
                  '3. Toleranța disonanței și integrarea ingeniozității Trickster (Track B). Individul tolerează contradicțiile inerente realității și recuperează creativ conținuturile umbrei colective — ingeniozitatea adaptativă, adaptabilitatea și umorul subversiv (figura arhetipală a Trickster-ului) transformate din resentiment destructiv în resursă de supraviețuire și inovație.'}
                {fig6SelectedStep === 'b4' &&
                  '4. Discernământ critic (Track B). Mediere semiotică ternară (semn–obiect–interpretant) care deconstruiește narațiunea falsă și verifică probele empirice, realizând o filtrare etică și morală conform valorilor democratice și umane.'}
                {fig6SelectedStep === 'b5' &&
                  '5. Creație suverană și Axa Ego–Sine (Track B). Punctul culminant al procesării adaptative: acțiune civică responsabilă, autonomie decizională și coerență profundă pe axa Ego–Sine, producând reziliență sistemică autentică.'}
                {(fig6SelectedStep === 'trackA' ||
                  (!fig6SelectedStep && fig6ActiveTrack === 'A')) &&
                  'Track A (procesare defensivă): o traiectorie închisă într-o buclă de autoamplificare (R), guvernată de anxietate, intoleranță la ambiguitate (NFCC), conformism mimetic și resentiment al umbrei colective, exploatată de platformele digitale.'}
                {(fig6SelectedStep === 'trackB' ||
                  (!fig6SelectedStep && fig6ActiveTrack === 'B')) &&
                  'Track B (procesare adaptativă): o succesiune deliberată de transformări cognitive și psihosociale, de la suspendarea reacției impulsive până la creația suverană conectată pe axa Ego–Sine.'}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* =====================================================================
          FIGURA 7: Protocolul secvențial în trei faze (Pagina 39)
         ===================================================================== */}
      {figureId === 7 && (
        <div className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3 bg-[#F6F5EE] p-3 border border-[#8C9BA5]">
            <span className="text-xs font-medium text-[#222426]">
              Fazele reconstrucției rezilienței
            </span>
            <div className="flex flex-wrap items-center gap-2">
              {([1, 2, 3] as const).map((ph) => (
                <button
                  key={ph}
                  onClick={() => {
                    setFig7ActivePhase(ph);
                    setFig7SelectedNode(`faza${ph}`);
                  }}
                  className={`px-3 py-1.5 text-xs font-medium border transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    fig7ActivePhase === ph
                      ? 'bg-[#E5B822] text-[#222426] border-[#222426] font-semibold'
                      : 'bg-[#F6F5EE] text-[#222426] border-[#8C9BA5]'
                  }`}
                >
                  {ph === 1
                    ? 'Faza I · Decompresie și igienă digitală'
                    : ph === 2
                      ? 'Faza II · Prebunking și validare morală'
                      : 'Faza III · Stat de drept și individuare'}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-[#F6F5EE] border border-[#222426] p-3 sm:p-5 overflow-x-auto">
            <svg
              viewBox="0 0 920 480"
              className={svgClass}
              role="img"
              aria-label={meta.title}
            >
              <SharedSvgDefs />
              <rect x="0" y="0" width="920" height="480" fill="#F6F5EE" />
              <rect x="0" y="0" width="920" height="480" fill="url(#stipple-bg)" />

              {/* TOP FRONTON: Arhitectura suveranitatii democratice si sinteza modernitatii organice */}
              <g
                onClick={() => setFig7SelectedNode('fronton')}
                className="cursor-pointer"
              >
                <rect
                  x="45"
                  y="22"
                  width="830"
                  height="64"
                  fill="#E5B822"
                  fillOpacity="0.22"
                  stroke="#222426"
                  strokeWidth="2.5"
                />
                <text
                  x="460"
                  y="48"
                  textAnchor="middle"
                  className="font-sans text-[14px] font-bold fill-[#222426]"
                >
                  Arhitectura suveranității democratice și sinteza modernității organice
                </text>
                <text
                  x="460"
                  y="68"
                  textAnchor="middle"
                  className="font-sans text-[11px] fill-[#6E7376]"
                >
                  Închidere operațională a statului de drept · Discernământ critic · Axa Ego–Sine consolidată
                </text>
              </g>

              {/* 3 Upward Gold Arrows into Top Fronton */}
              <line
                x1="168"
                y1="130"
                x2="168"
                y2="92"
                stroke="#222426"
                strokeWidth="4"
              />
              <line
                x1="168"
                y1="130"
                x2="168"
                y2="92"
                stroke="#E5B822"
                strokeWidth="2.5"
                markerEnd="url(#arrow-gold)"
              />
              <line
                x1="460"
                y1="130"
                x2="460"
                y2="92"
                stroke="#222426"
                strokeWidth="4"
              />
              <line
                x1="460"
                y1="130"
                x2="460"
                y2="92"
                stroke="#E5B822"
                strokeWidth="2.5"
                markerEnd="url(#arrow-gold)"
              />
              <line
                x1="752"
                y1="130"
                x2="752"
                y2="92"
                stroke="#222426"
                strokeWidth="4"
              />
              <line
                x1="752"
                y1="130"
                x2="752"
                y2="92"
                stroke="#E5B822"
                strokeWidth="2.5"
                markerEnd="url(#arrow-gold)"
              />

              {/* ============================================================
                  COLUMN 1: FAZA I (x=45, width=246)
                 ============================================================ */}
              <g
                onClick={() => {
                  setFig7ActivePhase(1);
                  setFig7SelectedNode('faza1');
                }}
                className="cursor-pointer"
              >
                <rect
                  x="45"
                  y="132"
                  width="246"
                  height="68"
                  rx="4"
                  fill={fig7ActivePhase === 1 ? '#E5B822' : '#F6F5EE'}
                  fillOpacity={fig7ActivePhase === 1 ? '0.25' : '1'}
                  stroke="#222426"
                  strokeWidth="2.5"
                />
                <text
                  x="168"
                  y="155"
                  textAnchor="middle"
                  className="font-sans text-[12px] font-bold fill-[#222426]"
                >
                  Faza I · Decompresie și
                </text>
                <text
                  x="168"
                  y="171"
                  textAnchor="middle"
                  className="font-sans text-[12px] font-bold fill-[#222426]"
                >
                  igienă digitală
                </text>
                <text
                  x="168"
                  y="188"
                  textAnchor="middle"
                  className="font-sans text-[10.5px] fill-[#6E7376]"
                >
                  Orizont tactic · 0–12 luni
                </text>

                {/* Sub-box 1.1 */}
                <rect
                  x="45"
                  y="218"
                  width="246"
                  height="56"
                  fill="#F6F5EE"
                  stroke="#6E7376"
                  strokeWidth="1.5"
                />
                <text
                  x="168"
                  y="242"
                  textAnchor="middle"
                  className="font-sans text-[11.5px] font-bold fill-[#222426]"
                >
                  Decompresie alostatică
                </text>
                <text
                  x="168"
                  y="260"
                  textAnchor="middle"
                  className="font-sans text-[10.5px] fill-[#6E7376]"
                >
                  Refacerea rezervei prefrontale
                </text>

                {/* Sub-box 1.2 */}
                <rect
                  x="45"
                  y="288"
                  width="246"
                  height="56"
                  fill="#F6F5EE"
                  stroke="#6E7376"
                  strokeWidth="1.5"
                />
                <text
                  x="168"
                  y="312"
                  textAnchor="middle"
                  className="font-sans text-[11.5px] font-bold fill-[#222426]"
                >
                  Reglementare ecosistem digital
                </text>
                <text
                  x="168"
                  y="330"
                  textAnchor="middle"
                  className="font-sans text-[10.5px] fill-[#6E7376]"
                >
                  Audit algoritmic și frâne de viralitate
                </text>
              </g>

              {/* Horizontal Causal Arrow Faza I -> Faza II */}
              <line
                x1="291"
                y1="166"
                x2="330"
                y2="166"
                stroke="#222426"
                strokeWidth="3"
                markerEnd="url(#arrow-dark)"
              />

              {/* ============================================================
                  COLUMN 2: FAZA II (x=337, width=246)
                 ============================================================ */}
              <g
                onClick={() => {
                  setFig7ActivePhase(2);
                  setFig7SelectedNode('faza2');
                }}
                className="cursor-pointer"
              >
                <rect
                  x="337"
                  y="132"
                  width="246"
                  height="68"
                  rx="4"
                  fill={fig7ActivePhase === 2 ? '#E5B822' : '#F6F5EE'}
                  fillOpacity={fig7ActivePhase === 2 ? '0.25' : '1'}
                  stroke="#222426"
                  strokeWidth="2.5"
                />
                <text
                  x="460"
                  y="155"
                  textAnchor="middle"
                  className="font-sans text-[12px] font-bold fill-[#222426]"
                >
                  Faza II · Prebunking și
                </text>
                <text
                  x="460"
                  y="171"
                  textAnchor="middle"
                  className="font-sans text-[12px] font-bold fill-[#222426]"
                >
                  validare morală
                </text>
                <text
                  x="460"
                  y="188"
                  textAnchor="middle"
                  className="font-sans text-[10.5px] fill-[#6E7376]"
                >
                  Orizont operațional · 1–3 ani
                </text>

                {/* Sub-box 2.1 */}
                <rect
                  x="337"
                  y="218"
                  width="246"
                  height="56"
                  fill="#F6F5EE"
                  stroke="#6E7376"
                  strokeWidth="1.5"
                />
                <text
                  x="460"
                  y="242"
                  textAnchor="middle"
                  className="font-sans text-[11.5px] font-bold fill-[#222426]"
                >
                  Consolidare mnezică Ebbinghaus
                </text>
                <text
                  x="460"
                  y="260"
                  textAnchor="middle"
                  className="font-sans text-[10.5px] fill-[#6E7376]"
                >
                  Antrenament cognitiv preventiv
                </text>

                {/* Sub-box 2.2 */}
                <rect
                  x="337"
                  y="288"
                  width="246"
                  height="56"
                  fill="#F6F5EE"
                  stroke="#6E7376"
                  strokeWidth="1.5"
                />
                <text
                  x="460"
                  y="312"
                  textAnchor="middle"
                  className="font-sans text-[11.5px] font-bold fill-[#222426]"
                >
                  Filtru moral creștin-secular
                </text>
                <text
                  x="460"
                  y="330"
                  textAnchor="middle"
                  className="font-sans text-[10.5px] fill-[#6E7376]"
                >
                  Validare comunitară și empatie
                </text>
              </g>

              {/* Horizontal Causal Arrow Faza II -> Faza III */}
              <line
                x1="583"
                y1="166"
                x2="622"
                y2="166"
                stroke="#222426"
                strokeWidth="3"
                markerEnd="url(#arrow-dark)"
              />

              {/* ============================================================
                  COLUMN 3: FAZA III (x=629, width=246)
                 ============================================================ */}
              <g
                onClick={() => {
                  setFig7ActivePhase(3);
                  setFig7SelectedNode('faza3');
                }}
                className="cursor-pointer"
              >
                <rect
                  x="629"
                  y="132"
                  width="246"
                  height="68"
                  rx="4"
                  fill={fig7ActivePhase === 3 ? '#E5B822' : '#F6F5EE'}
                  fillOpacity={fig7ActivePhase === 3 ? '0.25' : '1'}
                  stroke="#222426"
                  strokeWidth="2.5"
                />
                <text
                  x="752"
                  y="155"
                  textAnchor="middle"
                  className="font-sans text-[12px] font-bold fill-[#222426]"
                >
                  Faza III · Stat de drept și
                </text>
                <text
                  x="752"
                  y="171"
                  textAnchor="middle"
                  className="font-sans text-[12px] font-bold fill-[#222426]"
                >
                  individuare
                </text>
                <text
                  x="752"
                  y="188"
                  textAnchor="middle"
                  className="font-sans text-[10.5px] fill-[#6E7376]"
                >
                  Orizont strategic · 3–10 ani
                </text>

                {/* Sub-box 3.1 */}
                <rect
                  x="629"
                  y="218"
                  width="246"
                  height="56"
                  fill="#F6F5EE"
                  stroke="#6E7376"
                  strokeWidth="1.5"
                />
                <text
                  x="752"
                  y="242"
                  textAnchor="middle"
                  className="font-sans text-[11.5px] font-bold fill-[#222426]"
                >
                  Guvernanță policentrică
                </text>
                <text
                  x="752"
                  y="260"
                  textAnchor="middle"
                  className="font-sans text-[10.5px] fill-[#6E7376]"
                >
                  Instituții incluzive și meritocrație
                </text>

                {/* Sub-box 3.2 */}
                <rect
                  x="629"
                  y="288"
                  width="246"
                  height="56"
                  fill="#F6F5EE"
                  stroke="#6E7376"
                  strokeWidth="1.5"
                />
                <text
                  x="752"
                  y="312"
                  textAnchor="middle"
                  className="font-sans text-[11.5px] font-bold fill-[#222426]"
                >
                  Individuare colectivă
                </text>
                <text
                  x="752"
                  y="330"
                  textAnchor="middle"
                  className="font-sans text-[10.5px] fill-[#6E7376]"
                >
                  Asumarea critică a istoriei
                </text>
              </g>

              {/* 3 Upward Dark Arrows from Bottom Foundation to the 3 Phases */}
              <line
                x1="168"
                y1="388"
                x2="168"
                y2="350"
                stroke="#222426"
                strokeWidth="2"
                markerEnd="url(#arrow-dark)"
              />
              <line
                x1="460"
                y1="388"
                x2="460"
                y2="350"
                stroke="#222426"
                strokeWidth="2"
                markerEnd="url(#arrow-dark)"
              />
              <line
                x1="752"
                y1="388"
                x2="752"
                y2="350"
                stroke="#222426"
                strokeWidth="2"
                markerEnd="url(#arrow-dark)"
              />

              {/* BOTTOM FOUNDATION: Determinanții Lalonde-Dever */}
              <g
                onClick={() => setFig7SelectedNode('fundament')}
                className="cursor-pointer"
              >
                <rect
                  x="45"
                  y="390"
                  width="830"
                  height="54"
                  fill="#F6F5EE"
                  stroke="#222426"
                  strokeWidth="2.5"
                />
                <text
                  x="460"
                  y="412"
                  textAnchor="middle"
                  className="font-sans text-[12.5px] font-bold fill-[#222426]"
                >
                  Fundamentul sistemic Lalonde–Dever
                </text>
                <text
                  x="460"
                  y="431"
                  textAnchor="middle"
                  className="font-sans text-[11px] fill-[#6E7376]"
                >
                  Rezervă neurobiologică · Mediu digital și sociospațial · Stil de viață · Sistem instituțional
                </text>
              </g>
            </svg>

            <div className="mt-4 pt-4 border-t border-[#222426] bg-[#F6F5EE] p-3.5">
              <p className="text-xs sm:text-sm text-[#222426] leading-relaxed">
                {fig7SelectedNode === 'faza1' &&
                  'Faza I · Orizont tactic imediat, 0–12 luni. Nicio campanie de educație mediatică nu poate reuși dacă este aplicată direct asupra unei populații aflate în plină uzură alostatică și capturare dopaminergică. Faza I oprește bucla reactivă din Track A prin debirocratizare transparentă, după modelul e-Estonia, și prin aplicarea strictă a Regulamentului DSA în baza Legii nr. 50/2024 (ANCOM ca DSC, acces la date pentru „cercetătorii agreați” conform art. 40 din DSA, notificatori de încredere în cooperare cu EDMO/BROD și DNSC) și a AI Act: audit algoritmic, frâne de viralitate și etichetarea datelor sintetice.'}
                {fig7SelectedNode === 'faza2' &&
                  'Faza II · Orizont operațional mediu, 1–3 ani. Odată ce cortexul prefrontal își recapătă disponibilitatea funcțională, Faza a II-a reconstruiește faza de Orientare din bucla OODA prin trei piloni: validarea comunitară empatică în infrastructura asociativă de proximitate, pregătirea preventivă prebunking calibrată pe curba uitării a lui Ebbinghaus și reconcilierea filtrului moral creștin-secular.'}
                {fig7SelectedNode === 'faza3' &&
                  'Faza III · Orizont strategic, 3–10 ani. Elimină cauzele profunde ale „formelor fără fond” prin închiderea operațională autentică a justiției și administrației (Luhmann), guvernanță policentrică (Ostrom) care îi redă cetățeanului capacitatea de acțiune politică autonomă (political agency) și sentimentul autoeficacității percepute (self-efficacy, Bandura, 1997), precum și individuare colectivă pe axa Ego–Sine, depășind incapacitatea de a ține doliu și sindromul Puer Aeternus.'}
                {fig7SelectedNode === 'fronton' &&
                  'Sinteza modernității organice și a suveranității democratice. Formele constituționale și de securitate occidentale încetează să mai fie „forme fără fond” mimate superficial de o elită extractivă și devin expresia instituțională firească a unui fond cultural și moral autohton regenerat.'}
                {fig7SelectedNode === 'fundament' &&
                  'Fundamentul Lalonde-Dever (Lalonde, 1974; Dever, 1976). Demonstrează că reziliența cognitivă a unei națiuni depinde simultan de organizarea sistemului instituțional, de mediul socioeconomic și digital, de stilul de viață asociativ și de rezerva neurobiologică a cetățenilor.'}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Official Monograph Caption & Methodological Note */}
      <div className="mt-5 pt-4 border-t border-[#8C9BA5] space-y-2">
        <p className="text-xs sm:text-sm font-serif italic text-[#222426] leading-relaxed">
          <span className="font-bold not-italic">{meta.title}. </span>
          {meta.caption}
        </p>
        <p className="text-xs font-mono text-[#6E7376] leading-relaxed">
          Notă metodologică · {meta.chapterRef}. {meta.methodologicalNote}
        </p>
      </div>
    </div>
  );
};

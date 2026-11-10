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
    title: 'Figura 1 (Arhitectura cauzală pe trei straturi a vulnerabilității societale endogene)',
    subtitle:
      'Articularea modelului Macro–Micro–Macro (Coleman și Hedström) cu determinanții sistemici Lalonde-Dever',
    chapterRef: 'Capitolul 1 (Subcapitolul 1.3)',
    pdfPage: 8,
    caption:
      'Deficitele structurale din Stratul A (deficitul de servicii publice, închiderea operațională incompletă a instituțiilor și mediul socioeconomic precar) induc în Stratul B o stare cronică de stres alostatic și hipervigilență amigdaliană, care inhibă deliberarea prefrontală și împinge cetățenii spre comportamente reactive de supraviețuire. Aceste mecanisme neurocognitive se sedimentează în Stratul C sub forma fatalismului defensiv, a neputinței învățate și a neîncrederii cronice în ordinea constituțională, oferind vectorului de război cognitiv suprafețe directe de cuplare și amplificare.',
    methodologicalNote:
      'Selectați direct în diagrama vectorială SVG orice nod structural sau comutați starea sistemului pentru a urmări propagarea cauzală între instituții (Stratul A), neurobiologie (Stratul B) și inconștientul cultural (Stratul C).'
  },
  2: {
    id: 2,
    title: 'Figura 2 (Mecanismul dublei falsificări axiologice și al parazitării semiotice)',
    subtitle:
      'Opoziția structurală dintre sinteza creștin-seculară europeană și ideologia revizionistă a Antilumii',
    chapterRef: 'Capitolul 2 (Subcapitolul 2.2)',
    pdfPage: 12,
    caption:
      'În jumătatea stângă este reprezentată sinteza creștin-seculară europeană, în care principiul demnității umane inalienabile (Imago Dei și universalismul drepturilor fundamentale) susține filtrul moral și constituțional al statului de drept, generând modernitate organică și libertate responsabilă. În jumătatea dreaptă este ilustrată operațiunea de disimilare a ideologiei revizioniste a Antilumii (Epstein, 2022), care proiectează la suprafață un camuflaj tradiționalist ortodox și suveranist pentru a ocoli aversiunea istorică a populației-țintă față de Rusia, mascând nucleul operativ real bazat pe inversiune normativă și cinism transgresiv, a cărui finalitate strategică este subordonarea imperială și anomizarea societății vizate.',
    methodologicalNote:
      'Faceți click pe nodurile din diagrama vectorială SVG pentru a compara sinteza creștin-seculară cu mecanismul de camuflaj discursiv și inversiune normativă.'
  },
  3: {
    id: 3,
    title:
      'Figura 3 (Mecanismul cibernetic și semiotic al capturării cognitive în al șaselea domeniu operațional)',
    subtitle:
      'Integrarea buclei decizionale OODA (Boyd), a controlului reflexiv (Lefebvre) și a semioticii culturii (Lotman și Peirce)',
    chapterRef: 'Capitolul 3 (Subcapitolele 3.1–3.3)',
    pdfPage: 20,
    caption:
      'Fluxul informațional brut din faza de Observare, amplificat algoritmic prin capturarea circuitelor dopaminergice, intră în faza de Orientare, unde modelele mentale și culturale ale subiectului sunt țintite de controlul reflexiv de rang secund. Această intervenție compromite filtrul axiologic al primului sistem etic, blochează calea medierii ternare și a discernământului rațional prefrontal și deviază procesarea pe traseul celui de-al doilea sistem etic și al logicii binare a anihilării. Rezultatul este o fază de Decizie dominată de selecția emoțională indusă, închiderea cognitivă și cogniția protectoare a identității, care se traduce în faza de Acțiune prin polarizare socială acută și conflict antiinstituțional.',
    methodologicalNote:
      'Comutați între intervenția controlului reflexiv de rang secund și starea de mediere ternară intactă sau faceți click pe etapele OODA în diagrama SVG.'
  },
  4: {
    id: 4,
    title: 'Figura 4 (Conversia funcțională a resurselor latente din Umbra colectivă)',
    subtitle:
      'Arhitectura de mediere instituțională și metacognitivă pe axa Ego–Sine (selectați nodurile în diagrama vectorială)',
    chapterRef: 'Capitolul 4 (Subcapitolul 4.2)',
    pdfPage: 24,
    caption:
      'În stânga sunt reprezentate energiile psihodinamice refulate în Stratul C (memoria istorică defensivă și vitalitatea adaptativă necanalizată asociată arhetipului Trickster-ului). În absența medierii, aceste resurse alunecă pe traseul inferior (marcat cu roșu) în enantiodromie, cinism și revoltă anomizantă. Atunci când sunt procesate prin cele trei filtre centrale din Straturile A și B (cadrul legii impersonale drepte cu închidere operațională, discernământul critic și vigilența metacognitivă prefrontală), ele sunt convertite pe axa Ego–Sine în modernitate organică, încredere și cooperare instituțională autonomă.',
    methodologicalNote:
      'Diagrama ilustrează condițiile structurale prin care resursele refulate în Umbra colectivă (memoria istorică defensivă și vitalitatea adaptativă a arhetipului Trickster-ului) încetează să alimenteze revolta anomizantă și sunt convertite în modernitate organică.'
  },
  5: {
    id: 5,
    title: 'Figura 5 (Matricea comportamentală a lui Carlo M. Cipolla în războiul cognitiv)',
    subtitle:
      'Dinamica spolierea sistemică (+X, -Y) → vulnerabilizare (-X, +Y) → autosabotaj colectiv (-X, -Y)',
    chapterRef: 'Capitolul 4 (Subcapitolul 4.3)',
    pdfPage: 27,
    caption:
      'Presiunea de spoliere sistemică exercitată de actorii extractivi din Cadranul IV (+X, -Y) asupra cetățeanului vulnerabil din Cadranul II (-X, +Y), pe fondul unei barierei instituționale fisurate, creează condițiile de uzură alostatică și resentiment. Intervenția vectorului de război cognitiv deturnează această frustrare legitimă, împingându-l pe cetățeanul vulnerabil vertical în jos, în Cadranul III al autosabotajului colectiv (-X, -Y), unde acțiunile sale antiinstituționale distrug simultan bunul public și propria sa securitate socioeconomică, subminând spațiul cooperării inteligente din Cadranul I (+X, +Y).',
    methodologicalNote:
      'Adaptarea matricei bidimensionale a lui Carlo M. Cipolla (1976/2011) evidențiază mecanismul prin care presiunea de spoliere sistemică exercitată de actorii extractivi (+X, -Y) și fisurarea barierei instituționale împing cetățeanul vulnerabil (-X, +Y), sub impulsul capturării cognitive externe, în cadranul comportamentului autodistructiv și al autosabotajului colectiv (-X, -Y).'
  },
  6: {
    id: 6,
    title: 'Figura 6 (Bifurcarea procesării neurocognitive sub presiunea crizei acute)',
    subtitle:
      'Opoziția funcțională dintre bucla reactivă dezadaptativă (Track A) și traseul deliberativ adaptativ (Track B)',
    chapterRef: 'Capitolul 5 (Subcapitolul 5.2)',
    pdfPage: 30,
    caption:
      'La întâlnirea stimulului de criză acută în nodul de bifurcație cognitivă, absența reglării executive deviază procesarea pe Track A (sus, marcat cu roșu), unde hiperactivarea amigdaliană, inhibiția cortexului prefrontal dorsolateral și capturarea dopaminergică a atenției produc paralizie decizională, furie și o buclă de autoamplificare reactivă. În contrast, activarea conexiunilor prefrontale și a capacității negative orientează procesarea pe Track B (jos, marcat cu galben-muștar), permițând analiza deliberativă, validarea epistemică și comunitară în regim de mediere ternară și generând reziliență și acțiune suverană.',
    methodologicalNote:
      'Arhitectura bifurcării procesării cognitive în condiții de criză acută (adaptată după Cogniție și Manipulare) arată modul în care stimulul stresor este direcționat fie pe bucla reactivă dezadaptativă (Track A), dominată de amigdala bazolaterală și de capturarea dopaminergică, fie pe traseul deliberativ adaptativ (Track B), guvernat de cortexul prefrontal dorsolateral și ventromedial.'
  },
  7: {
    id: 7,
    title: 'Figura 7 (Protocolul secvențial în trei faze al reconstrucției rezilienței societale)',
    subtitle:
      'Ordinea obligatorie a intervențiilor pe determinanții Lalonde-Dever și palierele Straturilor A, B și C',
    chapterRef: 'Capitolul 6 (Subcapitolele 6.1–6.4)',
    pdfPage: 39,
    caption:
      'Diagrama evidențiază ordinea cauzală obligatorie a intervențiilor fundamentate pe determinanții modelului Lalonde-Dever: Faza I (decompresia alostatică și reglementarea ecosistemului digital) creează condițiile neurobiologice pentru Faza a II-a (pregătirea psihocognitivă preventivă prebunking, consolidarea mnezică Ebbinghaus și reconcilierea filtrului moral creștin-secular), care susține la rândul ei Faza a III-a (închiderea operațională a statului de drept, guvernanța policentrică și individuarea colectivă), culminând în arhitectura suveranității democratice și a modernității organice.',
    methodologicalNote:
      'Arhitectura secvențială a reconstrucției rezilienței cognitive și instituționale demonstrează de ce intervențiile educaționale din Faza II și reformele structurale din Faza III depind cauzal de realizarea prealabilă a Fazei I (decompresia alostatică a populației și reglementarea ecosistemului digital), culminând în sinteza modernității organice și a suveranității democratice.'
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
      <path d="M 0 1.5 L 8.5 5 L 0 8.5 z" fill="#D9A714" />
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

  return (
    <div className="bg-[#F4F1EA] border border-[#222426] p-5 sm:p-6">
      {showSelector && onSelectFigure && (
        <div className="mb-6 pb-4 border-b border-[#D0D5D9]">
          <div className="text-xs font-mono text-[#6E7376] mb-2">
            Selectați diagrama vectorială de sistem (Figurile 1–7 din monografie)
          </div>
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
                Figura {id} (p. {FIGURE_METADATA[id].pdfPage})
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Header */}
      <div className="mb-5 pb-4 border-b border-[#D0D5D9]">
        <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-[#6E7376] mb-1">
          <span>
            {meta.chapterRef} · Pagina {meta.pdfPage} în PDF
          </span>
          <span>Diagramă conceptuală vectorială 2D (SVG interactiv)</span>
        </div>
        <h3 className="font-serif text-lg sm:text-xl font-semibold text-[#222426] headline-balance">
          {meta.title}
        </h3>
        <p className="text-xs sm:text-sm text-[#6E7376] mt-1">{meta.subtitle}</p>
        <div className="mt-3 pt-2.5 border-t border-[#D0D5D9]">
          <SocialShareButtons
            url={`https://laurentiustaicu.github.io/diagnosticul-razboiului-cognitiv-romania/share/figura-${meta.id}.html`}
            title={`${meta.title} (Diagnosticul războiului cognitiv în România)`}
            label={`Distribuie Figura ${meta.id} pe`}
            compact={!showSelector}
          />
        </div>
      </div>

      {/* =====================================================================
          FIGURA 1: Arhitectura cauzală pe trei straturi (Pagina 8)
         ===================================================================== */}
      {figureId === 1 && (
        <div className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3 bg-[#F6F5EE] p-3 border border-[#D0D5D9]">
            <span className="text-xs font-medium text-[#222426]">
              Regimul sistemic simulat pe Straturile A, B și C
            </span>
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => setFig1Mode('vulnerable')}
                className={`px-3 py-1.5 text-xs font-medium border transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  fig1Mode === 'vulnerable'
                    ? 'bg-[#F01E1E] text-[#F6F5EE] border-[#F01E1E]'
                    : 'bg-[#F4F1EA] text-[#222426] border-[#8C9BA5]'
                }`}
              >
                Vulnerabilitate endogenă și cuplare ostilă
              </button>
              <button
                onClick={() => setFig1Mode('resilient')}
                className={`px-3 py-1.5 text-xs font-medium border transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  fig1Mode === 'resilient'
                    ? 'bg-[#E5B822] text-[#222426] border-[#222426] font-semibold'
                    : 'bg-[#F4F1EA] text-[#222426] border-[#8C9BA5]'
                }`}
              >
                Filtru axiologic și închidere operațională
              </button>
            </div>
          </div>

          <div className="bg-[#F6F5EE] border border-[#222426] p-3 sm:p-5 overflow-x-auto">
            <svg
              viewBox="0 0 880 510"
              className="w-full h-auto min-w-[640px] select-none"
              role="img"
              aria-label={meta.title}
            >
              <SharedSvgDefs />
              <rect x="0" y="0" width="880" height="510" fill="#F6F5EE" />
              <rect x="0" y="0" width="880" height="510" fill="url(#stipple-bg)" />

              {/* STRATUL A CONTAINER */}
              <rect
                x="35"
                y="32"
                width="575"
                height="118"
                fill="#F4F1EA"
                stroke="#D9A714"
                strokeWidth="2.5"
              />
              <rect x="200" y="18" width="245" height="24" fill="#F6F5EE" />
              <text
                x="322"
                y="34"
                textAnchor="middle"
                className="font-sans text-[13px] font-bold fill-[#222426]"
              >
                Stratul A (Arhitectură instituțională)
              </text>

              {/* Node A1: Deficit de servicii publice */}
              <g
                onClick={() => setFig1SelectedNode('servicii')}
                className="cursor-pointer"
              >
                <rect
                  x="65"
                  y="56"
                  width="215"
                  height="68"
                  fill={fig1SelectedNode === 'servicii' ? '#E5B822' : '#F6F5EE'}
                  fillOpacity={fig1SelectedNode === 'servicii' ? '0.3' : '1'}
                  stroke="#222426"
                  strokeWidth={fig1SelectedNode === 'servicii' ? '3' : '2'}
                />
                <text
                  x="172"
                  y="85"
                  textAnchor="middle"
                  className="font-sans text-[13px] font-semibold fill-[#222426]"
                >
                  {fig1Mode === 'vulnerable' ? 'Deficit de' : 'Servicii publice'}
                </text>
                <text
                  x="172"
                  y="104"
                  textAnchor="middle"
                  className="font-sans text-[13px] font-semibold fill-[#222426]"
                >
                  {fig1Mode === 'vulnerable' ? 'servicii publice' : 'și închidere operațională'}
                </text>
              </g>

              {/* Horizontal arrow A1 -> A2 */}
              <line
                x1="280"
                y1="90"
                x2="358"
                y2="90"
                stroke={fig1Mode === 'vulnerable' ? '#F01E1E' : '#D9A714'}
                strokeWidth="3.5"
                markerEnd={fig1Mode === 'vulnerable' ? 'url(#arrow-red)' : 'url(#arrow-gold)'}
              />

              {/* Node A2: Mediu socioeconomic precar */}
              <g
                onClick={() => setFig1SelectedNode('mediu')}
                className="cursor-pointer"
              >
                <rect
                  x="368"
                  y="56"
                  width="215"
                  height="68"
                  fill={fig1SelectedNode === 'mediu' ? '#E5B822' : '#F6F5EE'}
                  fillOpacity={fig1SelectedNode === 'mediu' ? '0.3' : '1'}
                  stroke="#222426"
                  strokeWidth={fig1SelectedNode === 'mediu' ? '3' : '2'}
                />
                <text
                  x="475"
                  y="85"
                  textAnchor="middle"
                  className="font-sans text-[13px] font-semibold fill-[#222426]"
                >
                  {fig1Mode === 'vulnerable' ? 'Mediu socioeconomic' : 'Coeziune sociospațială'}
                </text>
                <text
                  x="475"
                  y="104"
                  textAnchor="middle"
                  className="font-sans text-[13px] font-semibold fill-[#222426]"
                >
                  {fig1Mode === 'vulnerable' ? 'precar' : 'și predictibilitate'}
                </text>
              </g>

              {/* Vertical arrows Stratul A -> Stratul B */}
              <line
                x1="172"
                y1="124"
                x2="172"
                y2="188"
                stroke="#222426"
                strokeWidth="3.5"
                markerEnd="url(#arrow-dark)"
              />
              <line
                x1="475"
                y1="124"
                x2="475"
                y2="188"
                stroke="#222426"
                strokeWidth="3.5"
                markerEnd="url(#arrow-dark)"
              />

              {/* STRATUL B CONTAINER */}
              <rect
                x="35"
                y="196"
                width="575"
                height="118"
                fill="#F4F1EA"
                stroke="#D9A714"
                strokeWidth="2.5"
              />
              <rect x="200" y="182" width="245" height="24" fill="#F6F5EE" />
              <text
                x="322"
                y="198"
                textAnchor="middle"
                className="font-sans text-[13px] font-bold fill-[#222426]"
              >
                Stratul B (Procesare neurocognitivă)
              </text>

              {/* Node B1: Stres alostatic si hipervigilenta */}
              <g
                onClick={() => setFig1SelectedNode('alostazie')}
                className="cursor-pointer"
              >
                <rect
                  x="65"
                  y="220"
                  width="215"
                  height="68"
                  fill={fig1SelectedNode === 'alostazie' ? '#E5B822' : '#F6F5EE'}
                  fillOpacity={fig1SelectedNode === 'alostazie' ? '0.3' : '1'}
                  stroke="#222426"
                  strokeWidth={fig1SelectedNode === 'alostazie' ? '3' : '2'}
                />
                <text
                  x="172"
                  y="249"
                  textAnchor="middle"
                  className="font-sans text-[13px] font-semibold fill-[#222426]"
                >
                  {fig1Mode === 'vulnerable' ? 'Stres alostatic și' : 'Rezervă neurobiologică'}
                </text>
                <text
                  x="172"
                  y="268"
                  textAnchor="middle"
                  className="font-sans text-[13px] font-semibold fill-[#222426]"
                >
                  {fig1Mode === 'vulnerable' ? 'hipervigilență' : 'și reglare prefrontală'}
                </text>
              </g>

              {/* Horizontal arrow B1 -> B2 */}
              <line
                x1="280"
                y1="254"
                x2="358"
                y2="254"
                stroke={fig1Mode === 'vulnerable' ? '#F01E1E' : '#D9A714'}
                strokeWidth="3.5"
                markerEnd={fig1Mode === 'vulnerable' ? 'url(#arrow-red)' : 'url(#arrow-gold)'}
              />

              {/* Node B2: Comportamente reactive de supravietuire */}
              <g
                onClick={() => setFig1SelectedNode('reactiv')}
                className="cursor-pointer"
              >
                <rect
                  x="368"
                  y="220"
                  width="215"
                  height="68"
                  fill={fig1SelectedNode === 'reactiv' ? '#E5B822' : '#F6F5EE'}
                  fillOpacity={fig1SelectedNode === 'reactiv' ? '0.3' : '1'}
                  stroke="#222426"
                  strokeWidth={fig1SelectedNode === 'reactiv' ? '3' : '2'}
                />
                <text
                  x="475"
                  y="249"
                  textAnchor="middle"
                  className="font-sans text-[13px] font-semibold fill-[#222426]"
                >
                  {fig1Mode === 'vulnerable' ? 'Comportamente' : 'Deliberare rațională'}
                </text>
                <text
                  x="475"
                  y="268"
                  textAnchor="middle"
                  className="font-sans text-[13px] font-semibold fill-[#222426]"
                >
                  {fig1Mode === 'vulnerable'
                    ? 'reactive de supraviețuire'
                    : 'și mediere ternară'}
                </text>
              </g>

              {/* Vertical arrows Stratul B -> Stratul C */}
              <line
                x1="172"
                y1="288"
                x2="172"
                y2="352"
                stroke="#222426"
                strokeWidth="3.5"
                markerEnd="url(#arrow-dark)"
              />
              <line
                x1="475"
                y1="288"
                x2="475"
                y2="352"
                stroke="#222426"
                strokeWidth="3.5"
                markerEnd="url(#arrow-dark)"
              />

              {/* STRATUL C CONTAINER */}
              <rect
                x="35"
                y="360"
                width="575"
                height="118"
                fill="#F4F1EA"
                stroke="#D9A714"
                strokeWidth="2.5"
              />
              <rect x="210" y="346" width="225" height="24" fill="#F6F5EE" />
              <text
                x="322"
                y="362"
                textAnchor="middle"
                className="font-sans text-[13px] font-bold fill-[#222426]"
              >
                Stratul C (Inconștient cultural)
              </text>

              {/* Node C1: Fatalism si neincredere cronica */}
              <g
                onClick={() => setFig1SelectedNode('fatalism')}
                className="cursor-pointer"
              >
                <rect
                  x="220"
                  y="384"
                  width="215"
                  height="68"
                  fill={fig1SelectedNode === 'fatalism' ? '#E5B822' : '#F6F5EE'}
                  fillOpacity={fig1SelectedNode === 'fatalism' ? '0.3' : '1'}
                  stroke="#222426"
                  strokeWidth={fig1SelectedNode === 'fatalism' ? '3' : '2'}
                />
                <text
                  x="327"
                  y="413"
                  textAnchor="middle"
                  className="font-sans text-[13px] font-semibold fill-[#222426]"
                >
                  {fig1Mode === 'vulnerable' ? 'Fatalism și' : 'Coerență pe axa'}
                </text>
                <text
                  x="327"
                  y="432"
                  textAnchor="middle"
                  className="font-sans text-[13px] font-semibold fill-[#222426]"
                >
                  {fig1Mode === 'vulnerable' ? 'neîncredere cronică' : 'Ego–Sine și încredere'}
                </text>
              </g>

              {/* RIGHT SIDE: VECTOR DE RAZBOI COGNITIV & COUPLING SPINE */}
              <g
                onClick={() => setFig1SelectedNode('vector')}
                className="cursor-pointer"
              >
                <rect
                  x="695"
                  y="214"
                  width="155"
                  height="80"
                  fill={fig1SelectedNode === 'vector' ? '#F01E1E' : '#F6F5EE'}
                  fillOpacity={fig1SelectedNode === 'vector' ? '0.14' : '1'}
                  stroke="#F01E1E"
                  strokeWidth="3"
                />
                <text
                  x="772"
                  y="249"
                  textAnchor="middle"
                  className="font-sans text-[14px] font-bold fill-[#F01E1E]"
                >
                  Vector de
                </text>
                <text
                  x="772"
                  y="269"
                  textAnchor="middle"
                  className="font-sans text-[14px] font-bold fill-[#F01E1E]"
                >
                  război cognitiv
                </text>
              </g>

              {/* Vertical red collector spine at x=660 */}
              <line
                x1="695"
                y1="254"
                x2="660"
                y2="254"
                stroke="#F01E1E"
                strokeWidth="3.5"
                strokeDasharray={fig1Mode === 'resilient' ? '5 4' : undefined}
              />
              <line
                x1="660"
                y1="90"
                x2="660"
                y2="418"
                stroke="#F01E1E"
                strokeWidth="3.5"
                strokeDasharray={fig1Mode === 'resilient' ? '5 4' : undefined}
              />
              {/* 3 Horizontal coupling arrows into Strata A, B, C */}
              <line
                x1="660"
                y1="90"
                x2="594"
                y2="90"
                stroke="#F01E1E"
                strokeWidth="3.5"
                strokeDasharray={fig1Mode === 'resilient' ? '5 4' : undefined}
                markerEnd="url(#arrow-red)"
              />
              <line
                x1="660"
                y1="254"
                x2="594"
                y2="254"
                stroke="#F01E1E"
                strokeWidth="3.5"
                strokeDasharray={fig1Mode === 'resilient' ? '5 4' : undefined}
                markerEnd="url(#arrow-red)"
              />
              <line
                x1="660"
                y1="418"
                x2="446"
                y2="418"
                stroke="#F01E1E"
                strokeWidth="3.5"
                strokeDasharray={fig1Mode === 'resilient' ? '5 4' : undefined}
                markerEnd="url(#arrow-red)"
              />

              {/* Resilient Shield Bar when in resilient mode */}
              {fig1Mode === 'resilient' && (
                <g>
                  <line
                    x1="622"
                    y1="50"
                    x2="622"
                    y2="455"
                    stroke="#D9A714"
                    strokeWidth="6"
                  />
                  <rect
                    x="595"
                    y="462"
                    width="150"
                    height="24"
                    fill="#E5B822"
                    stroke="#222426"
                    strokeWidth="1.5"
                  />
                  <text
                    x="670"
                    y="478"
                    textAnchor="middle"
                    className="font-mono text-[10px] font-bold fill-[#222426]"
                  >
                    Filtru axiologic activ
                  </text>
                </g>
              )}
            </svg>

            {/* Node inspection detail */}
            <div className="mt-4 pt-4 border-t border-[#222426] bg-[#F4F1EA] p-3.5">
              <div className="text-xs font-mono text-[#6E7376] mb-1">
                Mecanism cauzal selectat în Figura 1 (click pe casetele din diagramă)
              </div>
              <p className="text-xs sm:text-sm text-[#222426] leading-relaxed">
                {fig1SelectedNode === 'servicii' &&
                  'Organizarea sistemului instituțional și a serviciilor publice (primul determinant Lalonde-Dever). Atunci când justiția, administrația, educația și sănătatea suferă de un deficit de închidere operațională (Luhmann) și sunt permeabile la rețelele clientelare extractive, cetățeanul percepe regulile formale ca pe un paravan ipocrit.'}
                {fig1SelectedNode === 'mediu' &&
                  'Mediul socioeconomic și sociospațial (al doilea determinant Lalonde-Dever). Polarizarea severă dintre centrele metropolitane și periferiile dezindustrializate sau rurale, adâncită de emigrația masivă, distruge capitalul social de punte (Putnam) prin familism amoral (Banfield) la un pol și secesiune tacită în servicii private la celălalt pol.'}
                {fig1SelectedNode === 'alostazie' &&
                  'Uzura alostatică și hiperactivarea axei HPA (McEwen, Sapolsky, Arnsten). Expunerea cronică la insecuritate și umilință birocratică eliberează excesiv cortizol, provocând hipertrofia amigdalei bazolaterale și atrofia dendritică în hipocamp și în cortexul prefrontal dorsolateral (dlPFC).'}
                {fig1SelectedNode === 'reactiv' &&
                  'Comutarea de pe Sistemul 2 pe Sistemul 1 (Kahneman). Inhibiția funcțiilor executive prefrontale blochează gândirea lentă, analitică și verificarea surselor, lăsând cetățeanul pradă procesării rapide, euristice și reacțiilor defensive automate.'}
                {fig1SelectedNode === 'fatalism' &&
                  'Expresia în inconștientul cultural (Stratul C). Scăderea tensiunii conștiente (abaissement du niveau mental, Janet și Jung) și blocarea axei Ego–Sine (Edinger) produc oscilația între neputința învățată (Seligman) și inflația naționalistă compensatoare.'}
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
              className="w-full h-auto min-w-[600px] select-none"
              role="img"
              aria-label={meta.title}
            >
              <SharedSvgDefs />
              <rect x="0" y="0" width="820" height="450" fill="#F6F5EE" />
              <rect x="0" y="0" width="820" height="450" fill="url(#stipple-bg)" />

              {/* Central Vertical Divider & Top Header Line (exact match to PDF p. 12) */}
              <line x1="410" y1="15" x2="410" y2="435" stroke="#D0D5D9" strokeWidth="2" />
              <line x1="20" y1="82" x2="800" y2="82" stroke="#D0D5D9" strokeWidth="1.5" />

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
                  fillOpacity={fig2Inspect === 'left' ? '0.2' : '1'}
                  stroke="#D9A714"
                  strokeWidth="2.5"
                />
                <text
                  x="205"
                  y="142"
                  textAnchor="middle"
                  className="font-sans text-[15px] fill-[#222426]"
                >
                  Demnitate umană
                </text>
                <text
                  x="205"
                  y="163"
                  textAnchor="middle"
                  className="font-sans text-[15px] fill-[#222426]"
                >
                  inalienabilă
                </text>

                {/* Arrow L1 -> L2 */}
                <line
                  x1="205"
                  y1="180"
                  x2="205"
                  y2="222"
                  stroke="#D9A714"
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
                  fillOpacity={fig2Inspect === 'left' ? '0.2' : '1'}
                  stroke="#D9A714"
                  strokeWidth="2.5"
                />
                <text
                  x="205"
                  y="260"
                  textAnchor="middle"
                  className="font-sans text-[15px] fill-[#222426]"
                >
                  Filtru moral și
                </text>
                <text
                  x="205"
                  y="281"
                  textAnchor="middle"
                  className="font-sans text-[15px] fill-[#222426]"
                >
                  constituțional
                </text>

                {/* Arrow L2 -> L3 */}
                <line
                  x1="205"
                  y1="298"
                  x2="205"
                  y2="340"
                  stroke="#D9A714"
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
                  fillOpacity={fig2Inspect === 'left' ? '0.3' : '1'}
                  stroke="#D9A714"
                  strokeWidth="2.5"
                />
                <text
                  x="205"
                  y="378"
                  textAnchor="middle"
                  className="font-sans text-[15px] fill-[#222426]"
                >
                  Modernitate organică
                </text>
                <text
                  x="205"
                  y="399"
                  textAnchor="middle"
                  className="font-sans text-[15px] fill-[#222426]"
                >
                  și libertate
                </text>
              </g>

              {/* RIGHT COLUMN NODES (Disimulation & Normative Inversion) */}
              {/* Outer Camouflage Box (slate gray #8C9BA5 / #D0D5D9, exact match to PDF p. 12) */}
              <g onClick={() => setFig2Inspect('camuflaj')} className="cursor-pointer">
                <rect
                  x="475"
                  y="112"
                  width="280"
                  height="80"
                  fill="#8C9BA5"
                  fillOpacity="0.38"
                  stroke="#6E7376"
                  strokeWidth="2"
                />
                <text
                  x="615"
                  y="142"
                  textAnchor="middle"
                  className="font-sans text-[14px] font-medium fill-[#222426]"
                >
                  Camuflaj tradiționalist ortodox
                </text>
              </g>

              {/* Inner Core Box: Inversiune normativa si cinism (overlapping below camouflage) */}
              <g onClick={() => setFig2Inspect('right')} className="cursor-pointer">
                <rect
                  x="490"
                  y="160"
                  width="250"
                  height="68"
                  fill="#F6F5EE"
                  stroke="#F01E1E"
                  strokeWidth="2.5"
                />
                <text
                  x="615"
                  y="190"
                  textAnchor="middle"
                  className="font-sans text-[15px] fill-[#222426]"
                >
                  Inversiune normativă
                </text>
                <text
                  x="615"
                  y="211"
                  textAnchor="middle"
                  className="font-sans text-[15px] fill-[#222426]"
                >
                  și cinism
                </text>

                {/* Red arrow down to Subordonare imperiala si anomie */}
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
                  className="font-sans text-[15px] fill-[#222426]"
                >
                  Subordonare imperială
                </text>
                <text
                  x="615"
                  y="399"
                  textAnchor="middle"
                  className="font-sans text-[15px] fill-[#222426]"
                >
                  și anomie
                </text>
              </g>
            </svg>

            <div className="mt-4 pt-4 border-t border-[#222426] bg-[#F4F1EA] p-3.5">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                <span className="text-xs font-mono text-[#6E7376]">
                  Explicație semiotică și axiologică (Figura 2)
                </span>
                <div className="flex items-center gap-1.5">
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
                  'Dubla falsificare axiologică (disimilarea). Din cauza memoriei traumatice a celor douăsprezece invazii rusești, a răpirii Basarabiei, a Tezaurului și a Gulagului, propaganda rusă nu se poate prezenta deschis în România. Ea proiectează la suprafață un camuflaj etnofiletist (Russkii Mir, condamnat ca erezie la Sinodul de la Constantinopol din 1872) și un fals discurs suveranist pentru a masca nihilismul stării Bobok.'}
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
          <div className="flex flex-wrap items-center justify-between gap-3 bg-[#F6F5EE] p-3 border border-[#D0D5D9]">
            <span className="text-xs font-medium text-[#222426]">
              Starea fazei de Orientare (Schwerpunkt) în bucla decizională OODA
            </span>
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => setFig3ReflexiveActive(true)}
                className={`px-3 py-1.5 text-xs font-medium border transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  fig3ReflexiveActive
                    ? 'bg-[#F01E1E] text-[#F6F5EE] border-[#F01E1E]'
                    : 'bg-[#F4F1EA] text-[#222426] border-[#8C9BA5]'
                }`}
              >
                Control reflexiv de rang secund activ (Capturare)
              </button>
              <button
                onClick={() => setFig3ReflexiveActive(false)}
                className={`px-3 py-1.5 text-xs font-medium border transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  !fig3ReflexiveActive
                    ? 'bg-[#E5B822] text-[#222426] border-[#222426] font-semibold'
                    : 'bg-[#F4F1EA] text-[#222426] border-[#8C9BA5]'
                }`}
              >
                Mediere semiotică ternară deblocată (Reziliență)
              </button>
            </div>
          </div>

          <div className="bg-[#F6F5EE] border border-[#222426] p-3 sm:p-5 overflow-x-auto">
            <svg
              viewBox="0 0 900 410"
              className="w-full h-auto min-w-[660px] select-none"
              role="img"
              aria-label={meta.title}
            >
              <SharedSvgDefs />
              <rect x="0" y="0" width="900" height="410" fill="#F6F5EE" />
              <rect x="0" y="0" width="900" height="410" fill="url(#stipple-bg)" />

              {/* TOP BOX: Control reflexiv de rang secund */}
              <g
                onClick={() => setFig3SelectedStage('reflexiv')}
                className="cursor-pointer"
              >
                <rect
                  x="212"
                  y="24"
                  width="146"
                  height="64"
                  fill={fig3ReflexiveActive ? '#F6F5EE' : '#F4F1EA'}
                  stroke={fig3ReflexiveActive ? '#F01E1E' : '#8C9BA5'}
                  strokeWidth="2.5"
                />
                <text
                  x="285"
                  y="51"
                  textAnchor="middle"
                  className="font-sans text-[13px] font-bold fill-[#222426]"
                >
                  Control reflexiv
                </text>
                <text
                  x="285"
                  y="70"
                  textAnchor="middle"
                  className="font-sans text-[13px] font-bold fill-[#222426]"
                >
                  de rang secund
                </text>
              </g>

              {/* Thick vertical red arrow from Control reflexiv down into Orientare */}
              <line
                x1="285"
                y1="88"
                x2="285"
                y2="165"
                stroke={fig3ReflexiveActive ? '#F01E1E' : '#8C9BA5'}
                strokeWidth={fig3ReflexiveActive ? '6' : '2.5'}
                strokeDasharray={fig3ReflexiveActive ? undefined : '5 4'}
                markerEnd={fig3ReflexiveActive ? 'url(#arrow-red)' : 'url(#arrow-slate)'}
              />

              {/* NODE 1: Observare */}
              <g
                onClick={() => setFig3SelectedStage('observare')}
                className="cursor-pointer"
              >
                <rect
                  x="32"
                  y="175"
                  width="128"
                  height="74"
                  fill={fig3SelectedStage === 'observare' ? '#E5B822' : '#F6F5EE'}
                  fillOpacity={fig3SelectedStage === 'observare' ? '0.25' : '1'}
                  stroke="#222426"
                  strokeWidth="2"
                />
                <text
                  x="96"
                  y="198"
                  textAnchor="middle"
                  className="font-sans text-[12px] font-bold fill-[#222426]"
                >
                  Observare
                </text>
                <text
                  x="96"
                  y="214"
                  textAnchor="middle"
                  className="font-sans text-[12px] fill-[#222426]"
                >
                  (Flux
                </text>
                <text
                  x="96"
                  y="229"
                  textAnchor="middle"
                  className="font-sans text-[12px] fill-[#222426]"
                >
                  informațional
                </text>
                <text
                  x="96"
                  y="243"
                  textAnchor="middle"
                  className="font-sans text-[12px] fill-[#222426]"
                >
                  brut)
                </text>
              </g>

              {/* Arrow Observare -> Orientare */}
              <line
                x1="160"
                y1="212"
                x2="210"
                y2="212"
                stroke="#222426"
                strokeWidth="2.5"
                markerEnd="url(#arrow-dark)"
              />

              {/* NODE 2: Orientare */}
              <g
                onClick={() => setFig3SelectedStage('orientare')}
                className="cursor-pointer"
              >
                <rect
                  x="220"
                  y="175"
                  width="130"
                  height="74"
                  fill={fig3SelectedStage === 'orientare' ? '#E5B822' : '#F6F5EE'}
                  fillOpacity={fig3SelectedStage === 'orientare' ? '0.25' : '1'}
                  stroke="#222426"
                  strokeWidth="2.5"
                />
                <text
                  x="285"
                  y="201"
                  textAnchor="middle"
                  className="font-sans text-[12px] font-bold fill-[#222426]"
                >
                  Orientare
                </text>
                <text
                  x="285"
                  y="218"
                  textAnchor="middle"
                  className="font-sans text-[12px] fill-[#222426]"
                >
                  (Modele mentale
                </text>
                <text
                  x="285"
                  y="235"
                  textAnchor="middle"
                  className="font-sans text-[12px] fill-[#222426]"
                >
                  culturale)
                </text>
              </g>

              {/* UPPER BRANCH: Mediere ternara (with T-bar block `┤` as in PDF page 20) */}
              <polyline
                points="350,196 382,196 382,146 410,146"
                fill="none"
                stroke="#D9A714"
                strokeWidth="2.5"
              />
              <g
                onClick={() => setFig3SelectedStage('ternar')}
                className="cursor-pointer"
              >
                <rect
                  x="410"
                  y="112"
                  width="135"
                  height="68"
                  fill={!fig3ReflexiveActive ? '#E5B822' : '#F6F5EE'}
                  fillOpacity={!fig3ReflexiveActive ? '0.25' : '1'}
                  stroke="#222426"
                  strokeWidth="2"
                />
                <text
                  x="477"
                  y="136"
                  textAnchor="middle"
                  className="font-sans text-[12px] font-semibold fill-[#222426]"
                >
                  Mediere ternară
                </text>
                <text
                  x="477"
                  y="153"
                  textAnchor="middle"
                  className="font-sans text-[12px] fill-[#222426]"
                >
                  (Discernământ
                </text>
                <text
                  x="477"
                  y="169"
                  textAnchor="middle"
                  className="font-sans text-[12px] fill-[#222426]"
                >
                  rațional)
                </text>
              </g>

              {/* T-Block symbol `┤` in gold (exact match to PDF p. 20) */}
              {fig3ReflexiveActive ? (
                <g>
                  <line
                    x1="545"
                    y1="146"
                    x2="592"
                    y2="146"
                    stroke="#D9A714"
                    strokeWidth="6"
                  />
                  <line
                    x1="592"
                    y1="120"
                    x2="592"
                    y2="172"
                    stroke="#D9A714"
                    strokeWidth="6"
                  />
                </g>
              ) : (
                <polyline
                  points="545,146 655,146 655,232"
                  fill="none"
                  stroke="#D9A714"
                  strokeWidth="3.5"
                  markerEnd="url(#arrow-gold)"
                />
              )}

              {/* LOWER BRANCH: Logica binara a anihilarii -> Decizie -> Actiune */}
              <polyline
                points="350,228 382,228 382,276 402,276"
                fill="none"
                stroke="#F01E1E"
                strokeWidth="3"
                markerEnd="url(#arrow-red)"
              />

              {/* Box: Logica binara a anihilarii */}
              <g
                onClick={() => setFig3SelectedStage('binar')}
                className="cursor-pointer"
              >
                <rect
                  x="410"
                  y="242"
                  width="135"
                  height="68"
                  fill={fig3SelectedStage === 'binar' ? '#F01E1E' : '#F6F5EE'}
                  fillOpacity={fig3SelectedStage === 'binar' ? '0.12' : '1'}
                  stroke="#F01E1E"
                  strokeWidth="2.5"
                />
                <text
                  x="477"
                  y="272"
                  textAnchor="middle"
                  className="font-sans text-[12px] font-semibold fill-[#222426]"
                >
                  Logică binară
                </text>
                <text
                  x="477"
                  y="290"
                  textAnchor="middle"
                  className="font-sans text-[12px] fill-[#222426]"
                >
                  a anihilării
                </text>
              </g>

              {/* Red arrow Logica binara -> Decizie */}
              <line
                x1="545"
                y1="276"
                x2="584"
                y2="276"
                stroke="#F01E1E"
                strokeWidth="3"
                markerEnd="url(#arrow-red)"
              />

              {/* Box: Decizie */}
              <g
                onClick={() => setFig3SelectedStage('decizie')}
                className="cursor-pointer"
              >
                <rect
                  x="592"
                  y="242"
                  width="128"
                  height="68"
                  fill={fig3SelectedStage === 'decizie' ? '#F01E1E' : '#F6F5EE'}
                  fillOpacity={fig3SelectedStage === 'decizie' ? '0.12' : '1'}
                  stroke={fig3ReflexiveActive ? '#F01E1E' : '#D9A714'}
                  strokeWidth="2.5"
                />
                <text
                  x="656"
                  y="265"
                  textAnchor="middle"
                  className="font-sans text-[12px] font-bold fill-[#222426]"
                >
                  Decizie
                </text>
                <text
                  x="656"
                  y="281"
                  textAnchor="middle"
                  className="font-sans text-[12px] fill-[#222426]"
                >
                  {fig3ReflexiveActive ? '(Selecție' : '(Judecată'}
                </text>
                <text
                  x="656"
                  y="295"
                  textAnchor="middle"
                  className="font-sans text-[12px] fill-[#222426]"
                >
                  {fig3ReflexiveActive ? 'emoțională' : 'critică'}
                </text>
                <text
                  x="656"
                  y="307"
                  textAnchor="middle"
                  className="font-sans text-[11px] fill-[#222426]"
                >
                  {fig3ReflexiveActive ? 'indusă)' : 'autonomă)'}
                </text>
              </g>

              {/* Red arrow Decizie -> Actiune */}
              <line
                x1="720"
                y1="276"
                x2="758"
                y2="276"
                stroke={fig3ReflexiveActive ? '#F01E1E' : '#D9A714'}
                strokeWidth="3"
                markerEnd={fig3ReflexiveActive ? 'url(#arrow-red)' : 'url(#arrow-gold)'}
              />

              {/* Box: Actiune */}
              <g
                onClick={() => setFig3SelectedStage('actiune')}
                className="cursor-pointer"
              >
                <rect
                  x="766"
                  y="242"
                  width="115"
                  height="68"
                  fill={fig3SelectedStage === 'actiune' ? '#F01E1E' : '#F6F5EE'}
                  fillOpacity={fig3SelectedStage === 'actiune' ? '0.12' : '1'}
                  stroke={fig3ReflexiveActive ? '#F01E1E' : '#D9A714'}
                  strokeWidth="2.5"
                />
                <text
                  x="823"
                  y="266"
                  textAnchor="middle"
                  className="font-sans text-[12px] font-bold fill-[#222426]"
                >
                  Acțiune
                </text>
                <text
                  x="823"
                  y="283"
                  textAnchor="middle"
                  className="font-sans text-[12px] fill-[#222426]"
                >
                  {fig3ReflexiveActive ? '(Polarizare și' : '(Cooperare și'}
                </text>
                <text
                  x="823"
                  y="299"
                  textAnchor="middle"
                  className="font-sans text-[12px] fill-[#222426]"
                >
                  {fig3ReflexiveActive ? 'conflict)' : 'reziliență)'}
                </text>
              </g>

              {/* Bottom Cybernetic Feedback Loop (from Actiune back to Orientare and Observare, exact match to PDF p. 20) */}
              <polyline
                points="823,310 823,365 96,365 96,256"
                fill="none"
                stroke="#8C9BA5"
                strokeWidth="1.5"
                markerEnd="url(#arrow-slate)"
              />
              <line
                x1="285"
                y1="365"
                x2="285"
                y2="256"
                stroke="#8C9BA5"
                strokeWidth="1.5"
                markerEnd="url(#arrow-slate)"
              />
            </svg>

            <div className="mt-4 pt-4 border-t border-[#222426] bg-[#F4F1EA] p-3.5">
              <div className="text-xs font-mono text-[#6E7376] mb-1">
                Etapă selectată în bucla OODA (Figura 3)
              </div>
              <p className="text-xs sm:text-sm text-[#222426] leading-relaxed">
                {fig3SelectedStage === 'observare' &&
                  'Faza de Observare. Platformele sociale optimizează retenția prin manipularea erorii de predicție a recompensei în nucleul accumbens (Schultz, Lembke), în timp ce rețelele Doppelgänger, Matrioșka și Pravda inundă spațiul digital cu date sintetice care induc Model Collapse (Shumailov) și Model Autophagy Disorder (Alemohammad).'}
                {fig3SelectedStage === 'orientare' &&
                  'Faza de Orientare (centrul de greutate al buclei lui John Boyd). Matricea interpretativă unde moștenirea culturală, experiența istorică și valorile morale conferă sens datelor observate. Dacă faza de Orientare este compromisă, chiar și faptele reale sunt interpretate printr-o lentilă distorsionată.'}
                {fig3SelectedStage === 'reflexiv' &&
                  'Controlul reflexiv de rang secund (Lefebvre, 1982, 2001). Nu furnizează doar informații false punctuale, ci modifică algoritmul moral al țintei, comutând-o din primul sistem etic (în care dialogul și compromisul legal sunt virtuți) în al doilea sistem etic (în care cooperarea este văzută ca trădare, iar agresivitatea ca demnitate).'}
                {fig3SelectedStage === 'ternar' &&
                  'Medierea semiotică ternară (Peirce, Lotman). Existența unui spațiu axiologic neutru și instituționalizat (interpretantul) în care adversarul politic rămâne un concurent legitim, iar ipotezele sunt verificate empiric. În Figura 3, simbolul în formă de T marchează blocarea acestei căi sub efectul controlului reflexiv.'}
                {fig3SelectedStage === 'binar' &&
                  'Semiotica binară a anihilării (Lotman & Uspenski, 1985). Distrugerea zonei neutre de mediere și reîncadrarea oricărei teme de politică publică într-o confruntare apocaliptică între poporul pur și trădătorii care vor să ne extermine.'}
                {fig3SelectedStage === 'decizie' &&
                  'Faza de Decizie sub capturare. Subiectul declanșează captarea precipitată (seizing) și înghețarea epistemică (freezing, Kruglanski), fuzionând poziția binară cu identitatea de grup prin cogniția protectoare a identității (Kahan) și contagiunea complexă artificială (Centola).'}
                {fig3SelectedStage === 'actiune' &&
                  'Faza de Acțiune. Cetățeanul capturat cognitiv acționează din proprie convingere pentru demolarea garanțiilor constituționale și euroatlantice ale propriului stat, fiind convins că își apără astfel suveranitatea.'}
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
          <div className="flex flex-wrap items-center justify-between gap-3 bg-[#F6F5EE] p-3 border border-[#D0D5D9]">
            <span className="text-xs font-medium text-[#222426]">
              Starea filtrelor structurale de conversie (Straturile A și B)
            </span>
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => setFig4FiltersActive(true)}
                className={`px-3 py-1.5 text-xs font-medium border transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  fig4FiltersActive
                    ? 'bg-[#E5B822] text-[#222426] border-[#222426] font-semibold'
                    : 'bg-[#F4F1EA] text-[#222426] border-[#8C9BA5]'
                }`}
              >
                Filtre active (Conversie în modernitate organică)
              </button>
              <button
                onClick={() => setFig4FiltersActive(false)}
                className={`px-3 py-1.5 text-xs font-medium border transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  !fig4FiltersActive
                    ? 'bg-[#F01E1E] text-[#F6F5EE] border-[#F01E1E]'
                    : 'bg-[#F4F1EA] text-[#222426] border-[#8C9BA5]'
                }`}
              >
                Fără filtru (Alunecare în enantiodromie și cinism)
              </button>
            </div>
          </div>

          <div className="bg-[#F6F5EE] border border-[#222426] p-3 sm:p-5 overflow-x-auto">
            <svg
              viewBox="0 0 920 470"
              className="w-full h-auto min-w-[680px] select-none"
              role="img"
              aria-label={meta.title}
            >
              <SharedSvgDefs />
              <rect x="0" y="0" width="920" height="470" fill="#F6F5EE" />
              <rect x="0" y="0" width="920" height="470" fill="url(#stipple-bg)" />

              {/* 3 Column Headers (exact match to PDF p. 24) */}
              <text
                x="145"
                y="34"
                textAnchor="middle"
                className="font-sans text-[12px] font-bold tracking-wider fill-[#6E7376]"
              >
                STRATUL C (UMBRĂ COLECTIVĂ)
              </text>
              <text
                x="455"
                y="34"
                textAnchor="middle"
                className="font-sans text-[12px] font-bold tracking-wider fill-[#6E7376]"
              >
                FILTRE DE CONVERSIE (A ȘI B)
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
                stroke="#E5B822"
                strokeWidth="3"
                opacity={fig4FiltersActive ? '1' : '0.35'}
                markerEnd="url(#arrow-gold)"
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
                stroke="#E5B822"
                strokeWidth="3"
                opacity={fig4FiltersActive ? '1' : '0.35'}
                markerEnd="url(#arrow-gold)"
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
                  Filtru (Lege impersonală dreaptă)
                </text>
                <text
                  x="455"
                  y="110"
                  textAnchor="middle"
                  className="font-sans text-[11px] fill-[#6E7376]"
                >
                  Închidere operațională (Luhmann)
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
                  Filtru (Discernământ critic)
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
                  fill={fig4ActiveNode === 'modernitate' ? '#E5B822' : '#F6F5EE'}
                  fillOpacity={fig4ActiveNode === 'modernitate' ? '0.28' : '1'}
                  stroke="#E5B822"
                  strokeWidth="3"
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
                  fill={fig4ActiveNode === 'cooperare' ? '#E5B822' : '#F6F5EE'}
                  fillOpacity={fig4ActiveNode === 'cooperare' ? '0.28' : '1'}
                  stroke="#E5B822"
                  strokeWidth="3"
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
                Fără filtru (Enantiodromie și cinism)
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

            <div className="mt-4 pt-4 border-t border-[#222426] bg-[#F4F1EA] p-3.5">
              <div className="text-xs font-mono text-[#6E7376] mb-1">
                Nod selectat în arhitectura conversiei (Figura 4)
              </div>
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
                  'Al treilea filtru (Stratul B). Vigilența metacognitivă, susținută de reglarea executivă a cortexului prefrontal, care îi permite cetățeanului să își recunoască propriile vulnerabilități afective înainte ca acestea să fie instrumentate prin control reflexiv.'}
                {fig4ActiveNode === 'modernitate' &&
                  'Modernitate organică și încredere (Sinteza axei Ego–Sine). Funcția transcendentă (Jung, 1916/1960) integrează potențialul din Umbră în conștiința civică, înlocuind conformismul de fațadă cu interiorizarea autentică a normelor.'}
                {fig4ActiveNode === 'cooperare' &&
                  'Cooperare instituțională autonomă. Refacerea capitalului social de punte (Putnam, 2000) și transformarea naționalismului reactiv în patriotism constituțional responsabil.'}
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
          <div className="flex flex-wrap items-center justify-between gap-3 bg-[#F6F5EE] p-3 border border-[#D0D5D9]">
            <span className="text-xs font-medium text-[#222426]">
              Starea barierei instituționale și juridice dintre Cadranul II și Cadranul III
            </span>
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => setFig5BarrierIntact(false)}
                className={`px-3 py-1.5 text-xs font-medium border transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  !fig5BarrierIntact
                    ? 'bg-[#F01E1E] text-[#F6F5EE] border-[#F01E1E]'
                    : 'bg-[#F4F1EA] text-[#222426] border-[#8C9BA5]'
                }`}
              >
                Barieră instituțională fisurată (Alunecare în Cadranul III)
              </button>
              <button
                onClick={() => setFig5BarrierIntact(true)}
                className={`px-3 py-1.5 text-xs font-medium border transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  fig5BarrierIntact
                    ? 'bg-[#E5B822] text-[#222426] border-[#222426] font-semibold'
                    : 'bg-[#F4F1EA] text-[#222426] border-[#8C9BA5]'
                }`}
              >
                Barieră consolidată în Faza III (Atracție în Cadranul I)
              </button>
            </div>
          </div>

          <div className="bg-[#F6F5EE] border border-[#222426] p-3 sm:p-5 overflow-x-auto">
            <svg
              viewBox="0 0 880 540"
              className="w-full h-auto min-w-[640px] select-none"
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
                stroke="#D0D5D9"
                strokeWidth="1.5"
              />

              {/* QUADRANT II (Top-Left): Cetatean vulnerabil (-X, +Y) */}
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
                  fillOpacity={fig5SelectedQuadrant === 'II' ? '0.16' : '0.6'}
                  stroke="#D0D5D9"
                  strokeWidth="1"
                />
                <text
                  x="255"
                  y="95"
                  textAnchor="middle"
                  className="font-sans text-[15px] font-bold fill-[#222426]"
                >
                  Cetățean vulnerabil (-X, +Y)
                </text>
                <text
                  x="255"
                  y="120"
                  textAnchor="middle"
                  className="font-sans text-[12px] fill-[#6E7376]"
                >
                  Pierdere proprie / Beneficiu pentru alții
                </text>
                <text
                  x="255"
                  y="142"
                  textAnchor="middle"
                  className="font-sans text-[12px] fill-[#6E7376]"
                >
                  Uzură alostatică și neputință învățată
                </text>
              </g>

              {/* QUADRANT I (Top-Right): Cooperare inteligenta (+X, +Y) */}
              <g
                onClick={() => setFig5SelectedQuadrant('I')}
                className="cursor-pointer"
              >
                <rect
                  x="440"
                  y="45"
                  width="370"
                  height="225"
                  fill={fig5SelectedQuadrant === 'I' ? '#E5B822' : '#F6F5EE'}
                  fillOpacity={fig5SelectedQuadrant === 'I' ? '0.25' : '0.6'}
                  stroke="#D0D5D9"
                  strokeWidth="1"
                />
                <text
                  x="625"
                  y="95"
                  textAnchor="middle"
                  className="font-sans text-[15px] font-bold fill-[#222426]"
                >
                  Cooperare inteligentă (+X, +Y)
                </text>
                <text
                  x="625"
                  y="120"
                  textAnchor="middle"
                  className="font-sans text-[12px] fill-[#6E7376]"
                >
                  Beneficiu propriu / Beneficiu colectiv
                </text>
                <text
                  x="625"
                  y="142"
                  textAnchor="middle"
                  className="font-sans text-[12px] fill-[#222426]"
                >
                  Modernitate organică și stat de drept
                </text>
              </g>

              {/* QUADRANT III (Bottom-Left): Autosabotaj colectiv (-X, -Y) */}
              <g
                onClick={() => setFig5SelectedQuadrant('III')}
                className="cursor-pointer"
              >
                <rect
                  x="70"
                  y="270"
                  width="370"
                  height="225"
                  fill={fig5SelectedQuadrant === 'III' ? '#F01E1E' : '#F6F5EE'}
                  fillOpacity={fig5SelectedQuadrant === 'III' ? '0.1' : '0.6'}
                  stroke="#D0D5D9"
                  strokeWidth="1"
                />
                <text
                  x="255"
                  y="395"
                  textAnchor="middle"
                  className="font-sans text-[15px] font-bold fill-[#F01E1E]"
                >
                  Autosabotaj colectiv (-X, -Y)
                </text>
                <text
                  x="255"
                  y="420"
                  textAnchor="middle"
                  className="font-sans text-[12px] fill-[#222426]"
                >
                  Pierdere proprie / Distrugere colectivă
                </text>
                <text
                  x="255"
                  y="442"
                  textAnchor="middle"
                  className="font-sans text-[12px] fill-[#6E7376]"
                >
                  Vot punitiv antiinstituțional și anomie
                </text>
              </g>

              {/* QUADRANT IV (Bottom-Right): Actor extractiv (+X, -Y) */}
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
                  fillOpacity={fig5SelectedQuadrant === 'IV' ? '0.16' : '0.6'}
                  stroke="#D0D5D9"
                  strokeWidth="1"
                />
                <text
                  x="625"
                  y="395"
                  textAnchor="middle"
                  className="font-sans text-[15px] font-bold fill-[#222426]"
                >
                  Actor extractiv (+X, -Y)
                </text>
                <text
                  x="625"
                  y="420"
                  textAnchor="middle"
                  className="font-sans text-[12px] fill-[#6E7376]"
                >
                  Beneficiu propriu / Pierdere colectivă
                </text>
                <text
                  x="625"
                  y="442"
                  textAnchor="middle"
                  className="font-sans text-[12px] fill-[#6E7376]"
                >
                  Extracție de rentă și război cognitiv
                </text>
              </g>

              {/* CARTESIAN AXES (exact match to PDF p. 27) */}
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
              <text
                x="440"
                y="22"
                textAnchor="middle"
                className="font-sans text-[12.5px] font-bold fill-[#222426]"
              >
                +Y (Beneficiu societal)
              </text>
              <text
                x="440"
                y="526"
                textAnchor="middle"
                className="font-sans text-[12.5px] font-bold fill-[#222426]"
              >
                -Y (Daună societală)
              </text>
              <text
                x="115"
                y="258"
                textAnchor="middle"
                className="font-sans text-[12px] font-bold fill-[#222426]"
              >
                -X (Pierdere proprie)
              </text>
              <text
                x="760"
                y="258"
                textAnchor="middle"
                className="font-sans text-[12px] font-bold fill-[#222426]"
              >
                +X (Câștig propriu)
              </text>

              {/* Diagonal Dashed Vector: Presiune de spoliere sistemica (Quadrant IV -> Quadrant II) */}
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
                x="390"
                y="290"
                width="195"
                height="26"
                fill="#F6F5EE"
                stroke="#222426"
                strokeWidth="1.5"
              />
              <text
                x="487"
                y="307"
                textAnchor="middle"
                className="font-sans text-[11.5px] font-bold fill-[#222426]"
              >
                Presiune de spoliere sistemică
              </text>

              {/* Institutional Barrier on Left -X Axis */}
              {!fig5BarrierIntact ? (
                <g>
                  <line
                    x1="75"
                    y1="278"
                    x2="435"
                    y2="278"
                    stroke="#F01E1E"
                    strokeWidth="3.5"
                    strokeDasharray="10 6"
                  />
                  <rect
                    x="155"
                    y="256"
                    width="195"
                    height="26"
                    fill="#F6F5EE"
                    stroke="#F01E1E"
                    strokeWidth="1.5"
                  />
                  <text
                    x="252"
                    y="273"
                    textAnchor="middle"
                    className="font-sans text-[11.5px] font-bold fill-[#F01E1E]"
                  >
                    Barieră instituțională fisurată
                  </text>

                  {/* Vertical Red Vector: Alunecare in autosabotaj (Quadrant II -> Quadrant III) */}
                  <line
                    x1="210"
                    y1="168"
                    x2="210"
                    y2="358"
                    stroke="#F01E1E"
                    strokeWidth="3.5"
                    markerEnd="url(#arrow-red)"
                  />
                  <rect
                    x="130"
                    y="306"
                    width="160"
                    height="26"
                    fill="#F6F5EE"
                    stroke="#F01E1E"
                    strokeWidth="1.5"
                  />
                  <text
                    x="210"
                    y="323"
                    textAnchor="middle"
                    className="font-sans text-[11.5px] font-bold fill-[#F01E1E]"
                  >
                    Alunecare în autosabotaj
                  </text>
                </g>
              ) : (
                <g>
                  {/* Intact Gold Barrier & Horizontal Transition to Quadrant I */}
                  <line
                    x1="75"
                    y1="276"
                    x2="435"
                    y2="276"
                    stroke="#D9A714"
                    strokeWidth="6"
                  />
                  <rect
                    x="145"
                    y="256"
                    width="220"
                    height="26"
                    fill="#E5B822"
                    stroke="#222426"
                    strokeWidth="1.5"
                  />
                  <text
                    x="255"
                    y="273"
                    textAnchor="middle"
                    className="font-sans text-[11.5px] font-bold fill-[#222426]"
                  >
                    Barieră instituțională consolidată
                  </text>
                  <line
                    x1="335"
                    y1="115"
                    x2="505"
                    y2="115"
                    stroke="#D9A714"
                    strokeWidth="4"
                    markerEnd="url(#arrow-gold)"
                  />
                </g>
              )}
            </svg>

            <div className="mt-4 pt-4 border-t border-[#222426] bg-[#F4F1EA] p-3.5">
              <div className="text-xs font-mono text-[#6E7376] mb-1">
                Cadran selectat în matricea lui Carlo M. Cipolla (Figura 5)
              </div>
              <p className="text-xs sm:text-sm text-[#222426] leading-relaxed">
                {fig5SelectedQuadrant === 'I' &&
                  'Cadranul I (+X, +Y, Cooperare inteligentă). Cetățenii, antreprenorii și instituțiile incluzive își urmăresc propriul interes legitim prin muncă, inovație și respectarea legii impersonale, generând simultan valoare adăugată și încredere pentru întreaga comunitate (ordinea socială cu acces deschis, North, Wallis & Weingast, 2009).'}
                {fig5SelectedQuadrant === 'II' &&
                  'Cadranul II (-X, +Y, Cetățeanul vulnerabil, Helpless). Indivizii cinstiți care muncesc, plătesc taxe și susțin funcționarea societății (+Y), dar care, din cauza asimetriei informaționale și a precarității serviciilor publice, înregistrează o pierdere netă de bunăstare, sănătate și demnitate (-X).'}
                {fig5SelectedQuadrant === 'IV' &&
                  'Cadranul IV (+X, -Y, Actorii extractivi, Bandits). Rețelele politico-economice clientelare și birocrațiile parazitare interne (precum și agresorul geopolitic extern) care își însușesc câștiguri substanțiale (+X) prin spolierea bugetelor publice și degradarea instituțiilor (-Y).'}
                {fig5SelectedQuadrant === 'III' &&
                  'Cadranul III (-X, -Y, Autosabotajul colectiv). Crezând că se mută în Cadranul I sau că îi pedepsește exclusiv pe spoliatorii din Cadranul IV, cetățeanul capturat cognitiv traversează bariera instituțională fisurată și se prăbușește vertical în Cadranul III, unde votul punitiv extrem și blocarea alianțelor provoacă daune societății (-Y) și propria sa ruină socioeconomică (-X).'}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* =====================================================================
          FIGURA 6: Bifurcarea procesării neurocognitive în criză acută (Pagina 30)
         ===================================================================== */}
      {figureId === 6 && (
        <div className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3 bg-[#F6F5EE] p-3 border border-[#D0D5D9]">
            <span className="text-xs font-medium text-[#222426]">
              Direcția de procesare în nodul de bifurcație cognitivă
            </span>
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => {
                  setFig6ActiveTrack('A');
                  setFig6SelectedStep('trackA');
                }}
                className={`px-3 py-1.5 text-xs font-medium border transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  fig6ActiveTrack === 'A'
                    ? 'bg-[#F01E1E] text-[#F6F5EE] border-[#F01E1E]'
                    : 'bg-[#F4F1EA] text-[#222426] border-[#8C9BA5]'
                }`}
              >
                Track A (Buclă reactivă dezadaptativă, Sistemul 1)
              </button>
              <button
                onClick={() => {
                  setFig6ActiveTrack('B');
                  setFig6SelectedStep('trackB');
                }}
                className={`px-3 py-1.5 text-xs font-medium border transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  fig6ActiveTrack === 'B'
                    ? 'bg-[#E5B822] text-[#222426] border-[#222426] font-semibold'
                    : 'bg-[#F4F1EA] text-[#222426] border-[#8C9BA5]'
                }`}
              >
                Track B (Traseu deliberativ adaptativ, Sistemul 2)
              </button>
            </div>
          </div>

          <div className="bg-[#F6F5EE] border border-[#222426] p-3 sm:p-5 overflow-x-auto">
            <svg
              viewBox="0 0 920 480"
              className="w-full h-auto min-w-[680px] select-none"
              role="img"
              aria-label={meta.title}
            >
              <SharedSvgDefs />
              <rect x="0" y="0" width="920" height="480" fill="#F6F5EE" />
              <rect x="0" y="0" width="920" height="480" fill="url(#stipple-bg)" />

              {/* LEFT INPUT NODES */}
              {/* 1. Stimul de criza acuta */}
              <g
                onClick={() => setFig6SelectedStep('stimul')}
                className="cursor-pointer"
              >
                <rect
                  x="28"
                  y="112"
                  width="185"
                  height="64"
                  rx="4"
                  fill="#F6F5EE"
                  stroke="#F01E1E"
                  strokeWidth="2.5"
                />
                <text
                  x="120"
                  y="140"
                  textAnchor="middle"
                  className="font-sans text-[12.5px] font-bold fill-[#222426]"
                >
                  Stimul de criză acută
                </text>
                <text
                  x="120"
                  y="160"
                  textAnchor="middle"
                  className="font-sans text-[11px] fill-[#6E7376]"
                >
                  Șoc informațional și stres
                </text>
              </g>

              {/* Vertical arrow Stimul -> Nod de bifurcatie */}
              <line
                x1="120"
                y1="176"
                x2="120"
                y2="246"
                stroke="#222426"
                strokeWidth="2.5"
                markerEnd="url(#arrow-dark)"
              />

              {/* 2. Nod de bifurcatie cognitiva */}
              <g
                onClick={() => setFig6SelectedStep('bifurcatie')}
                className="cursor-pointer"
              >
                <rect
                  x="28"
                  y="254"
                  width="185"
                  height="64"
                  rx="4"
                  fill={fig6SelectedStep === 'bifurcatie' ? '#E5B822' : '#F6F5EE'}
                  fillOpacity={fig6SelectedStep === 'bifurcatie' ? '0.25' : '1'}
                  stroke="#222426"
                  strokeWidth="2.5"
                />
                <text
                  x="120"
                  y="282"
                  textAnchor="middle"
                  className="font-sans text-[12px] font-bold fill-[#222426]"
                >
                  Nod de bifurcație cognitivă
                </text>
                <text
                  x="120"
                  y="302"
                  textAnchor="middle"
                  className="font-sans text-[11px] fill-[#6E7376]"
                >
                  Prag amigdalian / prefrontal
                </text>
              </g>

              {/* Bifurcation diagonal arrows from Nod de bifurcatie (x=213) to Track A (y=130) and Track B (y=350) */}
              <line
                x1="213"
                y1="275"
                x2="290"
                y2="132"
                stroke="#F01E1E"
                strokeWidth={fig6ActiveTrack === 'A' ? '3.5' : '2'}
                markerEnd="url(#arrow-red)"
              />
              <line
                x1="213"
                y1="298"
                x2="290"
                y2="348"
                stroke="#E5B822"
                strokeWidth={fig6ActiveTrack === 'B' ? '3.5' : '2'}
                markerEnd="url(#arrow-gold)"
              />

              {/* ============================================================
                  UPPER CONTAINER: TRACK A (Bucla reactiva, Sistemul 1)
                 ============================================================ */}
              <g
                onClick={() => {
                  setFig6ActiveTrack('A');
                  setFig6SelectedStep('trackA');
                }}
                className="cursor-pointer"
              >
                {/* Header bar */}
                <rect
                  x="295"
                  y="26"
                  width="595"
                  height="32"
                  fill="#F01E1E"
                  fillOpacity="0.08"
                  stroke="#F01E1E"
                  strokeWidth="2"
                />
                <text
                  x="592"
                  y="47"
                  textAnchor="middle"
                  className="font-sans text-[12.5px] font-bold fill-[#F01E1E]"
                >
                  Track A (Buclă reactivă, Sistemul 1 / Hiperreactivitate subcorticală)
                </text>

                {/* Step A1 */}
                <rect
                  x="295"
                  y="78"
                  width="175"
                  height="76"
                  fill="#F6F5EE"
                  stroke="#F01E1E"
                  strokeWidth="2"
                />
                <text
                  x="382"
                  y="104"
                  textAnchor="middle"
                  className="font-sans text-[11.5px] font-bold fill-[#222426]"
                >
                  Hiperactivare amigdaliană
                </text>
                <text
                  x="382"
                  y="120"
                  textAnchor="middle"
                  className="font-sans text-[11.5px] font-bold fill-[#222426]"
                >
                  și frică
                </text>
                <text
                  x="382"
                  y="140"
                  textAnchor="middle"
                  className="font-sans text-[10.5px] fill-[#6E7376]"
                >
                  Inhibiție prefrontală (dlPFC)
                </text>

                <line
                  x1="470"
                  y1="116"
                  x2="498"
                  y2="116"
                  stroke="#F01E1E"
                  strokeWidth="2.5"
                  markerEnd="url(#arrow-red)"
                />

                {/* Step A2 */}
                <rect
                  x="505"
                  y="78"
                  width="175"
                  height="76"
                  fill="#F6F5EE"
                  stroke="#F01E1E"
                  strokeWidth="2"
                />
                <text
                  x="592"
                  y="104"
                  textAnchor="middle"
                  className="font-sans text-[11.5px] font-bold fill-[#222426]"
                >
                  Capturare dopaminergică
                </text>
                <text
                  x="592"
                  y="120"
                  textAnchor="middle"
                  className="font-sans text-[11.5px] font-bold fill-[#222426]"
                >
                  a atenției
                </text>
                <text
                  x="592"
                  y="140"
                  textAnchor="middle"
                  className="font-sans text-[10.5px] fill-[#6E7376]"
                >
                  Adicție de stimuli extremi
                </text>

                <line
                  x1="680"
                  y1="116"
                  x2="708"
                  y2="116"
                  stroke="#F01E1E"
                  strokeWidth="2.5"
                  markerEnd="url(#arrow-red)"
                />

                {/* Step A3 */}
                <rect
                  x="715"
                  y="78"
                  width="175"
                  height="76"
                  fill="#F6F5EE"
                  stroke="#F01E1E"
                  strokeWidth="2"
                />
                <text
                  x="802"
                  y="104"
                  textAnchor="middle"
                  className="font-sans text-[11.5px] font-bold fill-[#F01E1E]"
                >
                  Paralizie decizională
                </text>
                <text
                  x="802"
                  y="120"
                  textAnchor="middle"
                  className="font-sans text-[11.5px] font-bold fill-[#F01E1E]"
                >
                  și furie
                </text>
                <text
                  x="802"
                  y="140"
                  textAnchor="middle"
                  className="font-sans text-[10.5px] fill-[#6E7376]"
                >
                  Blocaj instituțional
                </text>

                {/* Track A Red Dashed Feedback Loop (exact match to PDF p. 30) */}
                <polyline
                  points="802,154 802,198 382,198 382,162"
                  fill="none"
                  stroke="#F01E1E"
                  strokeWidth="2"
                  strokeDasharray="5 4"
                  markerEnd="url(#arrow-red)"
                />
                <text
                  x="592"
                  y="191"
                  textAnchor="middle"
                  className="font-sans text-[11px] font-semibold fill-[#F01E1E]"
                >
                  Buclă de autoamplificare reactivă și contagiune a fricii
                </text>
              </g>

              {/* ============================================================
                  LOWER CONTAINER: TRACK B (Traseu adaptativ, Sistemul 2)
                 ============================================================ */}
              <g
                onClick={() => {
                  setFig6ActiveTrack('B');
                  setFig6SelectedStep('trackB');
                }}
                className="cursor-pointer"
              >
                {/* Header bar */}
                <rect
                  x="295"
                  y="244"
                  width="595"
                  height="32"
                  fill="#E5B822"
                  fillOpacity="0.18"
                  stroke="#222426"
                  strokeWidth="2"
                />
                <text
                  x="592"
                  y="265"
                  textAnchor="middle"
                  className="font-sans text-[12.5px] font-bold fill-[#222426]"
                >
                  Track B (Traseu adaptativ, Sistemul 2 / Reglare executivă prefrontală)
                </text>

                {/* Step B1 */}
                <rect
                  x="295"
                  y="296"
                  width="175"
                  height="76"
                  fill="#F6F5EE"
                  stroke="#E5B822"
                  strokeWidth="2.5"
                />
                <text
                  x="382"
                  y="322"
                  textAnchor="middle"
                  className="font-sans text-[11.5px] font-bold fill-[#222426]"
                >
                  Activare prefrontală
                </text>
                <text
                  x="382"
                  y="338"
                  textAnchor="middle"
                  className="font-sans text-[11.5px] font-bold fill-[#222426]"
                >
                  și analiză
                </text>
                <text
                  x="382"
                  y="358"
                  textAnchor="middle"
                  className="font-sans text-[10.5px] fill-[#6E7376]"
                >
                  Capacitate negativă și calm
                </text>

                <line
                  x1="470"
                  y1="334"
                  x2="498"
                  y2="334"
                  stroke="#E5B822"
                  strokeWidth="3"
                  markerEnd="url(#arrow-gold)"
                />

                {/* Step B2 */}
                <rect
                  x="505"
                  y="296"
                  width="175"
                  height="76"
                  fill="#F6F5EE"
                  stroke="#E5B822"
                  strokeWidth="2.5"
                />
                <text
                  x="592"
                  y="322"
                  textAnchor="middle"
                  className="font-sans text-[11.5px] font-bold fill-[#222426]"
                >
                  Validare epistemică
                </text>
                <text
                  x="592"
                  y="338"
                  textAnchor="middle"
                  className="font-sans text-[11.5px] font-bold fill-[#222426]"
                >
                  și comunitară
                </text>
                <text
                  x="592"
                  y="358"
                  textAnchor="middle"
                  className="font-sans text-[10.5px] fill-[#6E7376]"
                >
                  Mediere semiotică ternară
                </text>

                <line
                  x1="680"
                  y1="334"
                  x2="708"
                  y2="334"
                  stroke="#E5B822"
                  strokeWidth="3"
                  markerEnd="url(#arrow-gold)"
                />

                {/* Step B3 */}
                <rect
                  x="715"
                  y="296"
                  width="175"
                  height="76"
                  fill="#F6F5EE"
                  stroke="#E5B822"
                  strokeWidth="2.5"
                />
                <text
                  x="802"
                  y="322"
                  textAnchor="middle"
                  className="font-sans text-[11.5px] font-bold fill-[#222426]"
                >
                  Reziliență și acțiune
                </text>
                <text
                  x="802"
                  y="338"
                  textAnchor="middle"
                  className="font-sans text-[11.5px] font-bold fill-[#222426]"
                >
                  suverană
                </text>
                <text
                  x="802"
                  y="358"
                  textAnchor="middle"
                  className="font-sans text-[10.5px] fill-[#6E7376]"
                >
                  Coerență pe axa Ego–Sine
                </text>

                {/* Track B Dashed Consolidation Loop (exact match to PDF p. 30) */}
                <polyline
                  points="802,372 802,418 382,418 382,380"
                  fill="none"
                  stroke="#6E7376"
                  strokeWidth="2"
                  strokeDasharray="5 4"
                  markerEnd="url(#arrow-slate)"
                />
                <text
                  x="592"
                  y="411"
                  textAnchor="middle"
                  className="font-sans text-[11px] font-semibold fill-[#222426]"
                >
                  Consolidare mnezică a rezilienței și creșterea rezervei neurocognitive
                </text>
              </g>
            </svg>

            <div className="mt-4 pt-4 border-t border-[#222426] bg-[#F4F1EA] p-3.5">
              <div className="text-xs font-mono text-[#6E7376] mb-1">
                Sinteză neurocognitivă (Figura 6, adaptată după Cogniție și Manipulare)
              </div>
              <p className="text-xs sm:text-sm text-[#222426] leading-relaxed">
                {fig6SelectedStep === 'stimul' &&
                  'Stimulul de criză acută. Un șoc informațional major, o amenințare de securitate iminentă sau o campanie intensă de manipulare algoritmică în prag electoral, construită pe amenințare existențială și indignare morală.'}
                {fig6SelectedStep === 'bifurcatie' &&
                  'Nodul de bifurcație cognitivă. Punctul critic în care direcția procesării depinde de disponibilitatea rezervei neurobiologice și de capacitatea subiectului de a interpune o pauză metacognitivă între stimul și reacție.'}
                {(fig6SelectedStep === 'trackA' ||
                  (fig6ActiveTrack === 'A' &&
                    fig6SelectedStep !== 'stimul' &&
                    fig6SelectedStep !== 'bifurcatie')) &&
                  'În arhitectura Traseului A (bucla reactivă dezadaptativă), expunerea repetată la stimuli informaționali construiți pe amenințare existențială și indignare morală declanșează o cascadă neurobiologică de urgență în care amigdala bazolaterală și rețeaua de detecție a relevanței preiau comanda exclusivă a aparatului decizional, inhibând funcțional cortexul prefrontal dorsolateral și ventromedial. Subiectul nu mai procesează informația prin analiză semantică și verificare probatorie, ci prin reflexe defensive automate de tip luptă-sau-fugi, amplificate de descărcările fazice de dopamină din nucleul accumbens (Cogniție și Manipulare).'}
                {(fig6SelectedStep === 'trackB' ||
                  (fig6ActiveTrack === 'B' &&
                    fig6SelectedStep !== 'stimul' &&
                    fig6SelectedStep !== 'bifurcatie')) &&
                  'Traseul B (traseul deliberativ adaptativ) se activează atunci când subiectul dispune de rezerva neurocognitivă și de antrenamentul metacognitiv necesare pentru a suspenda reacția impulsivă imediată și pentru a menține deschis spațiul incertitudinii critice (capacitatea negativă, Bion, 1962, 1970). Prin angajarea cortexului prefrontal dorsolateral în evaluarea probelor și prin reglarea afectelor subcorticale de către cortexul prefrontal ventromedial, stimulul informațional este extras din regimul urgenței emoționale și este supus contextualizării istorice, analizei logice și verificării intersubiective în comunități epistemice deschise (Cogniție și Manipulare).'}
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
          <div className="flex flex-wrap items-center justify-between gap-3 bg-[#F6F5EE] p-3 border border-[#D0D5D9]">
            <span className="text-xs font-medium text-[#222426]">
              Inspectați fazele ordonate cauzal pe determinanții Lalonde-Dever
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
                      : 'bg-[#F4F1EA] text-[#222426] border-[#8C9BA5]'
                  }`}
                >
                  Faza {ph === 1 ? 'I (Tactic)' : ph === 2 ? 'II (Operațional)' : 'III (Strategic)'}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-[#F6F5EE] border border-[#222426] p-3 sm:p-5 overflow-x-auto">
            <svg
              viewBox="0 0 920 480"
              className="w-full h-auto min-w-[680px] select-none"
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
                  fill="#F6F5EE"
                  stroke="#E5B822"
                  strokeWidth="3"
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
                  Închidere operațională a statului de drept · Discernământ critic (Track B) · Axa Ego–Sine consolidată
                </text>
              </g>

              {/* 3 Upward Gold Arrows into Top Fronton */}
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
                stroke="#E5B822"
                strokeWidth="2.5"
                markerEnd="url(#arrow-gold)"
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
                  Faza I (Decompresie și
                </text>
                <text
                  x="168"
                  y="171"
                  textAnchor="middle"
                  className="font-sans text-[12px] font-bold fill-[#222426]"
                >
                  igienă digitală)
                </text>
                <text
                  x="168"
                  y="188"
                  textAnchor="middle"
                  className="font-sans text-[10.5px] fill-[#6E7376]"
                >
                  Orizont tactic (stabilizare)
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
                  Faza II (Prebunking și
                </text>
                <text
                  x="460"
                  y="171"
                  textAnchor="middle"
                  className="font-sans text-[12px] font-bold fill-[#222426]"
                >
                  validare morală)
                </text>
                <text
                  x="460"
                  y="188"
                  textAnchor="middle"
                  className="font-sans text-[10.5px] fill-[#6E7376]"
                >
                  Orizont operațional (mediere)
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
                  Consolidare mnezică (Ebbinghaus)
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
                  Faza III (Stat de drept și
                </text>
                <text
                  x="752"
                  y="171"
                  textAnchor="middle"
                  className="font-sans text-[12px] font-bold fill-[#222426]"
                >
                  individuare)
                </text>
                <text
                  x="752"
                  y="188"
                  textAnchor="middle"
                  className="font-sans text-[10.5px] fill-[#6E7376]"
                >
                  Orizont strategic (consolidare)
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
                  y="422"
                  textAnchor="middle"
                  className="font-sans text-[12.5px] font-bold fill-[#222426]"
                >
                  Fundament (Determinanții Lalonde-Dever, Rezervă neurobiologică · Mediu · Stil de viață · Sistem instituțional)
                </text>
              </g>
            </svg>

            <div className="mt-4 pt-4 border-t border-[#222426] bg-[#F4F1EA] p-3.5">
              <div className="text-xs font-mono text-[#6E7376] mb-1">
                Explicația secvențialității cauzale (Figura 7)
              </div>
              <p className="text-xs sm:text-sm text-[#222426] leading-relaxed">
                {fig7SelectedNode === 'faza1' &&
                  'Faza I (Orizont tactic imediat, de la zero la douăsprezece luni). Nicio campanie de educație mediatică nu poate reuși dacă este aplicată direct asupra unei populații aflate în plină uzură alostatică și capturare dopaminergică. Faza I oprește bucla reactivă (Track A) prin debirocratizare transparentă (modelul e-Estonia) și prin aplicarea strictă a DSA și AI Act (audit algoritmic, frâne de viralitate și etichetarea datelor sintetice).'}
                {fig7SelectedNode === 'faza2' &&
                  'Faza II (Orizont operațional mediu, de la unu la trei ani). Odată ce cortexul prefrontal își recapătă disponibilitatea funcțională, Faza a II-a reconstruiește faza de Orientare din bucla OODA prin trei piloni (validarea comunitară empatică în infrastructura asociativă de proximitate, pregătirea preventivă prebunking calibrată pe curba uitării a lui Ebbinghaus și reconcilierea filtrului moral creștin-secular).'}
                {fig7SelectedNode === 'faza3' &&
                  'Faza III (Orizont strategic, de la trei la zece ani). Elimină cauzele profunde ale formelor fără fond prin închiderea operațională autentică a justiției și administrației (Luhmann), guvernanță policentrică (Ostrom) care redă cetățeanului autoeficacitatea politică (Bandura) și individuare colectivă pe axa Ego–Sine (depășirea incapacității de a ține doliu și a sindromului Puer Aeternus).'}
                {fig7SelectedNode === 'fronton' &&
                  'Sinteza modernității organice și a suveranității democratice. Formele constituționale și de securitate occidentale încetează să mai fie forme fără fond mimate superficial de o elită extractivă și devin expresia instituțională firească a unui fond cultural și moral autohton regenerat.'}
                {fig7SelectedNode === 'fundament' &&
                  'Fundamentul Lalonde-Dever (Lalonde, 1974; Dever, 1976). Demonstrează că reziliența cognitivă a unei națiuni depinde simultan de organizarea sistemului instituțional, de mediul socioeconomic și digital, de stilul de viață asociativ și de rezerva neurobiologică a cetățenilor.'}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Official Monograph Caption & Methodological Note */}
      <div className="mt-5 pt-4 border-t border-[#D0D5D9] space-y-2">
        <p className="text-xs sm:text-sm font-serif italic text-[#222426] leading-relaxed">
          <span className="font-bold not-italic">{meta.title}. </span>
          {meta.caption}
        </p>
        <p className="text-xs font-mono text-[#6E7376] leading-relaxed">
          Notă metodologică ({meta.chapterRef}). {meta.methodologicalNote}
        </p>
      </div>
    </div>
  );
};

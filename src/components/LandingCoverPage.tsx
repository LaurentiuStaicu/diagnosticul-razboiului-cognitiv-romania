import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { SocialShareButtons } from './SocialShareButtons';
import { BIBLIOGRAPHY_DATA } from '../data/tablesAndReference';

interface LandingCoverPageProps {
  onOpenInteractivePage: () => void;
  onNavigateToTarget?: (hash: string) => void;
}

type CoverBlockId = 'stratul-a' | 'stratul-b' | 'filtrul-moral' | 'stratul-c' | 'protocol';

const COVER_BLOCK_INFO: Record<
  CoverBlockId,
  {
    badge: string;
    title: string;
    synthesis: string;
    chapterLabel: string;
    chapterHash: string;
    figureLabel: string;
    figureHash: string;
  }
> = {
  'stratul-a': {
    badge: 'STRATUL A · MACRO-INSTITUȚIONAL',
    title: 'Cadrul constituțional, închiderea operațională și vectorul revizionist',
    synthesis:
      'Examinează tensiunea istorică dintre arhitectura constituțională occidentală („forme fără fond”) și rețelele extractive dintr-o ordine socială cu acces limitat, deficitul cronic de închidere operațională (Luhmann) și polarizarea sociospațială, pe care vectorul revizionist al Antilumii (Epstein) și nihilismul stării Bobok (Dostoievski) le exploatează oportunist.',
    chapterLabel: 'Capitolul 1',
    chapterHash: '#pasul-2',
    figureLabel: 'Figura 1',
    figureHash: '#figura-1'
  },
  'stratul-b': {
    badge: 'STRATUL B · NEUROCOGNITIV ȘI CIBERNETIC',
    title: 'Uzura alostatică, raționalizarea motivată și capturarea buclei OODA',
    synthesis:
      'Investighează dublul mecanism neurocognitiv al vulnerabilității — inhibiția funcțională a cortexului prefrontal dorsolateral (dlPFC) și comutarea pe Sistemul 1 reactiv în mediile precarizate, respectiv deturnarea Sistemului 2 în disraționalitate și raționalizare motivată (Stanovich; Kahan) în bulele urbane educate —, alături de colonizarea fazei de Orientare din bucla OODA prin control reflexiv de rang secund (Lefebvre) și poluare algoritmică.',
    chapterLabel: 'Capitolul 3',
    chapterHash: '#pasul-8',
    figureLabel: 'Figura 3',
    figureHash: '#figura-3'
  },
  'filtrul-moral': {
    badge: 'FILTRUL AXIOLOGIC CREȘTIN-SECULAR',
    title: 'Demnitatea persoanei (Imago Dei) versus dubla falsificare axiologică',
    synthesis:
      'Sinteza creștin-seculară europeană unește antropologia patristică a persoanei libere (Imago Dei și discernământul proairesis — Soloviov, Berdiaev, Stăniloae) cu domnia legii impersonale (Habermas, Taylor). Propaganda Kremlinului operează o dublă falsificare mimetică: substituie ortodoxia canonică cu erezia etnofiletistă militaristă Russkii Mir și suveranitatea constituțională cu dezarmarea strategică izolaționistă.',
    chapterLabel: 'Capitolul 2',
    chapterHash: '#pasul-6',
    figureLabel: 'Figura 2',
    figureHash: '#figura-2'
  },
  'stratul-c': {
    badge: 'STRATUL C · INCONȘTIENTUL CULTURAL ȘI PSIHODINAMICA GRUPURILOR',
    title: 'Traseul A (Ipoteze de bază, enantiodromie, Cadranul III) vs. Traseul B (Grup de lucru, Cadranul I)',
    synthesis:
      'Opune regresia colectivă de pe Traseul A — proiecția Umbrei, enantiodromia suveranistă, ipotezele de bază ale lui Wilfred R. Bion (dependența baD, împerecherea mesianică baP, luptă-sau-fugi baF) și prăbușirea în Cadranul III al autosabotajului din matricea lui Cipolla (-X, -Y) — maturizării de pe Traseul B: constituirea comunității ca „grup de lucru” rațional (Bion, 1961), activarea funcției transcendente (Jung), refacerea axei Ego–Sine și cooperarea inteligentă în Cadranul I (+X, +Y).',
    chapterLabel: 'Capitolele 4–5',
    chapterHash: '#pasul-11',
    figureLabel: 'Figurile 4–6',
    figureHash: '#figura-4'
  },
  protocol: {
    badge: 'CAPITOLUL 6 · PROTOCOLUL SECVENȚIAL ÎN TREI FAZE',
    title: 'Arhitectura cauzală Lalonde–Dever și sinteza modernității organice',
    synthesis:
      'Stabilește ordinea cauzală obligatorie a reconstrucției pentru evitarea efectului de bumerang (Nyhan & Reifler): Faza I (0–72h triaj CERC, DSA și Follow the Money · 0–12 luni decompresie alostatică e-Estonia), Faza II (1–3 ani validare comunitară, prebunking calibrat pe curba Ebbinghaus și parteneriat axiologic creștin-secular) și Faza III (3–10 ani închidere operațională, isonomie fiscală art. 182/281 CPF, guvernanță policentrică Ostrom prin Legea 566/2004 și individuare colectivă în „coridorul îngust”).',
    chapterLabel: 'Capitolul 6',
    chapterHash: '#pasul-16',
    figureLabel: 'Figura 7',
    figureHash: '#figura-7'
  }
};

export const LandingCoverPage: React.FC<LandingCoverPageProps> = ({
  onOpenInteractivePage,
  onNavigateToTarget
}) => {
  const [selectedBlock, setSelectedBlock] = useState<CoverBlockId>('stratul-a');

  const handleNavigate = (hash: string) => {
    if (onNavigateToTarget) {
      onNavigateToTarget(hash);
    } else {
      window.location.hash = hash;
      onOpenInteractivePage();
    }
  };

  const activeBlockInfo = COVER_BLOCK_INFO[selectedBlock];

  return (
    <div className="min-h-screen bg-[#F6F5EE] text-[#222426] flex flex-col justify-between p-4 sm:p-8 lg:p-12">
      {/* Outer Editorial Monograph Frame */}
      <div className="max-w-[1360px] w-full mx-auto flex-1 border-2 border-[#222426] bg-[#F6F5EE] p-6 sm:p-10 lg:p-14 flex flex-col justify-between">
        {/* Top Archival Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#222426] text-xs font-mono text-[#6E7376]">
          <span className="inline-block px-3 py-1 text-[11px] font-mono font-semibold tracking-wider text-[#222426] uppercase bg-[#F6F5EE] border border-[#222426]">
            MONOGRAFIE ȘTIINȚIFICĂ • VERSIUNEA 1.0
          </span>
          <span>
            19 secțiuni analitice · 7 diagrame vectoriale · 2 tabele de sinteză · {BIBLIOGRAPHY_DATA.length} referințe academice
          </span>
        </div>

        {/* Center Split: Monograph Title, Subtitle, Abstract, Action Button + 2D Cover Plate */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start my-8 lg:my-12">
          {/* Left 7 Columns: Title, Subtitle, Abstract & Action Button */}
          <div className="lg:col-span-7 space-y-6">
            <div className="text-xs font-mono text-[#6E7376]">
              Arhitectura cauzală pe trei straturi: Sociologie instituțională · Neuroștiințe și semiotică · Psihologie analitică
            </div>

            <h1 className="font-serif text-2xl sm:text-4xl lg:text-[42px] font-bold text-[#222426] leading-[1.12] headline-balance">
              Diagnosticul războiului cognitiv în România
            </h1>

            <p className="font-serif text-sm sm:text-base font-normal text-[#222426] leading-relaxed headline-balance">
              Arhitectura instituțională, neurocognitivă și culturală a vulnerabilității și rezilienței societale în fața operațiunilor informaționale ruse și a ideologiei putiniste
            </p>

            <div className="pt-2 border-t border-[#8C9BA5] space-y-3 text-xs sm:text-sm text-[#222426] leading-relaxed max-w-[65ch]">
              <p>
                Această lucrare demonstrează că vulnerabilitatea cognitivă a societății românești nu reprezintă un simplu deficit de alfabetizare media, ci rezultatul emergent al interacțiunii dintre trei paliere cauzale: anomalia istorică a „formelor fără fond”, deficitul cronic de închidere operațională și persistența instituțiilor extractive (Stratul A); uzura alostatică cronică și capturarea fazei de Orientare din bucla OODA prin control reflexiv (Stratul B); respectiv proiecția Umbrei colective, enantiodromia și alunecarea în autosabotaj colectiv în condiții de criză acută (Stratul C).
              </p>
              <p className="text-[#6E7376]">
                Explorarea interactivă reunește textul integral al celor șase capitole, sinteza executivă pentru decidenți, descompunerea în oglindă pe două registre — teoretic și empiric —, laboratorul celor șapte diagrame cibernetice și protocolul secvențial de reconstrucție în trei faze.
              </p>
            </div>

            {/* Primary Action Button + Social Share Bar */}
            <div className="pt-4 space-y-4">
              <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3">
                <button
                  type="button"
                  onClick={onOpenInteractivePage}
                  className="px-6 py-3.5 text-xs sm:text-sm font-serif font-bold text-[#222426] bg-[#E5B822] border-2 border-[#222426] hover:bg-[#E5B822]/85 transition-colors cursor-pointer inline-flex items-center justify-center gap-2"
                >
                  <span>Citește monografia online</span>
                  <ArrowRight className="w-4 h-4 shrink-0" />
                </button>
                <button
                  type="button"
                  onClick={() => {
                    document
                      .getElementById('video-teaser-section')
                      ?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                  }}
                  className="px-5 py-3.5 text-xs sm:text-sm font-mono font-semibold text-[#222426] bg-[#F6F5EE] border-2 border-[#222426] hover:bg-[#E5B822]/25 transition-colors cursor-pointer inline-flex items-center justify-center gap-2"
                >
                  <span>Urmărește sinteza video (Teaser)</span>
                </button>
              </div>

              <div className="pt-3 border-t border-[#8C9BA5]">
                <SocialShareButtons
                  url="https://laurentiustaicu.github.io/diagnosticul-razboiului-cognitiv-romania/"
                  label="Distribuie monografia pe"
                />
              </div>
            </div>
          </div>

          {/* Right 5 Columns: 2D Vector Engraving Cover Plate */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#F6F5EE] border-2 border-[#222426] p-4 sm:p-6">
              <div className="text-[11px] font-mono text-[#6E7376] pb-2 mb-3 border-b border-[#8C9BA5] flex items-center justify-between">
                <span>Planșa sinoptică de copertă · Modelul Macro–Micro–Macro</span>
                <span>Fig. I–VII · Click pe straturi</span>
              </div>

              <svg
                viewBox="0 0 460 476"
                className="w-full h-auto block"
                role="img"
                aria-label="Harta conceptuală a arhitecturii pe trei straturi din monografie"
              >
                <defs>
                  <pattern
                    id="cover-grid"
                    width="18"
                    height="18"
                    patternUnits="userSpaceOnUse"
                  >
                    <circle cx="1.5" cy="1.5" r="0.7" fill="#8C9BA5" opacity="0.4" />
                  </pattern>
                  <marker
                    id="cover-arrow-dark"
                    viewBox="0 0 10 10"
                    refX="8"
                    refY="5"
                    markerWidth="6"
                    markerHeight="6"
                    orient="auto-start-reverse"
                  >
                    <path d="M 0 1 L 9 5 L 0 9 z" fill="#222426" />
                  </marker>
                  <marker
                    id="cover-arrow-red"
                    viewBox="0 0 10 10"
                    refX="8"
                    refY="5"
                    markerWidth="6"
                    markerHeight="6"
                    orient="auto-start-reverse"
                  >
                    <path d="M 0 1 L 9 5 L 0 9 z" fill="#F01E1E" />
                  </marker>
                  <marker
                    id="cover-arrow-gold"
                    viewBox="0 0 10 10"
                    refX="8"
                    refY="5"
                    markerWidth="6.5"
                    markerHeight="6.5"
                    orient="auto-start-reverse"
                  >
                    <path d="M 0 1 L 9 5 L 0 9 z" fill="#E5B822" stroke="#222426" strokeWidth="0.8" />
                  </marker>
                </defs>

                <rect x="0" y="0" width="460" height="476" fill="#F6F5EE" />
                <rect x="0" y="0" width="460" height="476" fill="url(#cover-grid)" />

                {/* Top Macro Frame: Stratum A */}
                <g
                  onClick={() => setSelectedBlock('stratul-a')}
                  className="cursor-pointer"
                >
                  <rect
                    x="18"
                    y="14"
                    width="424"
                    height="94"
                    fill={selectedBlock === 'stratul-a' ? '#E5B822' : '#F6F5EE'}
                    fillOpacity={selectedBlock === 'stratul-a' ? '0.2' : '1'}
                    stroke="#222426"
                    strokeWidth={selectedBlock === 'stratul-a' ? '2.5' : '2'}
                  />
                  <text
                    x="30"
                    y="34"
                    fontFamily="Inter, sans-serif"
                    fontSize="9.5"
                    fontWeight="700"
                    fill="#6E7376"
                  >
                    STRATUL A · MACRO-INSTITUȚIONAL · CAPITOLELE 1–2
                  </text>
                  <text
                    x="30"
                    y="55"
                    fontFamily="Inter, sans-serif"
                    fontSize="13"
                    fontWeight="800"
                    fill="#222426"
                  >
                    Cadrul constituțional și închiderea operațională
                  </text>
                  <text
                    x="30"
                    y="75"
                    fontFamily="Inter, sans-serif"
                    fontSize="10.5"
                    fill="#222426"
                  >
                    Instituții extractive și „forme fără fond” vs. statul de drept
                  </text>
                  <text
                    x="30"
                    y="93"
                    fontFamily="Inter, sans-serif"
                    fontSize="10.5"
                    fill="#6E7376"
                  >
                    Vectorul revizionist al Antilumii și nihilismul stării Bobok
                  </text>
                </g>

                {/* Downward Causal Arrows from Stratum A to Stratum B */}
                <line
                  x1="150"
                  y1="108"
                  x2="150"
                  y2="130"
                  stroke="#222426"
                  strokeWidth="1.75"
                  markerEnd="url(#cover-arrow-dark)"
                />
                <line
                  x1="310"
                  y1="108"
                  x2="310"
                  y2="130"
                  stroke="#222426"
                  strokeWidth="1.75"
                  markerEnd="url(#cover-arrow-dark)"
                />

                {/* Middle Micro/Meso Frame: Stratum B */}
                <g
                  onClick={() => setSelectedBlock('stratul-b')}
                  className="cursor-pointer"
                >
                  <rect
                    x="18"
                    y="134"
                    width="424"
                    height="96"
                    fill={selectedBlock === 'stratul-b' ? '#F01E1E' : '#F6F5EE'}
                    fillOpacity={selectedBlock === 'stratul-b' ? '0.1' : '1'}
                    stroke="#F01E1E"
                    strokeWidth={selectedBlock === 'stratul-b' ? '2.5' : '1.75'}
                  />
                  <text
                    x="30"
                    y="154"
                    fontFamily="Inter, sans-serif"
                    fontSize="9.5"
                    fontWeight="700"
                    fill="#F01E1E"
                  >
                    STRATUL B · NEUROCOGNITIV ȘI CIBERNETIC · CAPITOLUL 3
                  </text>
                  <text
                    x="30"
                    y="175"
                    fontFamily="Inter, sans-serif"
                    fontSize="13"
                    fontWeight="800"
                    fill="#222426"
                  >
                    Uzura alostatică cronică și capturarea buclei OODA
                  </text>
                  <text
                    x="30"
                    y="195"
                    fontFamily="Inter, sans-serif"
                    fontSize="10"
                    fill="#222426"
                  >
                    Inhibiție prefrontală (S1) și raționalizare motivată (S2 deturnat)
                  </text>
                  <text
                    x="30"
                    y="213"
                    fontFamily="Inter, sans-serif"
                    fontSize="10"
                    fill="#6E7376"
                  >
                    Control reflexiv de rang secund vs. mediere semiotică ternară
                  </text>
                </g>

                {/* Arrows from Stratum B through Moral Filter to Stratum C */}
                <line
                  x1="120"
                  y1="230"
                  x2="120"
                  y2="294"
                  stroke="#F01E1E"
                  strokeWidth="1.75"
                  markerEnd="url(#cover-arrow-red)"
                />
                <line
                  x1="340"
                  y1="230"
                  x2="340"
                  y2="294"
                  stroke="#222426"
                  strokeWidth="3.25"
                />
                <line
                  x1="340"
                  y1="230"
                  x2="340"
                  y2="294"
                  stroke="#E5B822"
                  strokeWidth="1.75"
                  markerEnd="url(#cover-arrow-gold)"
                />

                {/* Explicit Moral Filter Bar between Stratum B and Stratum C */}
                <g
                  onClick={() => setSelectedBlock('filtrul-moral')}
                  className="cursor-pointer"
                >
                  <rect
                    x="48"
                    y="248"
                    width="364"
                    height="28"
                    rx="14"
                    fill="#E5B822"
                    stroke="#222426"
                    strokeWidth={selectedBlock === 'filtrul-moral' ? '2.5' : '1.5'}
                  />
                  <text
                    x="230"
                    y="266"
                    textAnchor="middle"
                    fontFamily="Inter, sans-serif"
                    fontSize="9.5"
                    fontWeight="700"
                    fill="#222426"
                  >
                    Filtrul moral creștin-secular · Imago Dei și discernământ
                  </text>
                </g>

                {/* Lower Frame: Stratum C Split (Track A vs Track B) */}
                <g
                  onClick={() => setSelectedBlock('stratul-c')}
                  className="cursor-pointer"
                >
                  <rect
                    x="18"
                    y="298"
                    width="204"
                    height="92"
                    rx="12"
                    fill={selectedBlock === 'stratul-c' ? '#F01E1E' : '#F6F5EE'}
                    fillOpacity={selectedBlock === 'stratul-c' ? '0.12' : '1'}
                    stroke="#F01E1E"
                    strokeWidth={selectedBlock === 'stratul-c' ? '2.5' : '1.75'}
                  />
                  <text
                    x="30"
                    y="318"
                    fontFamily="Inter, sans-serif"
                    fontSize="9"
                    fontWeight="700"
                    fill="#F01E1E"
                  >
                    STRATUL C · TENSIUNE · TRASEUL A
                  </text>
                  <text
                    x="30"
                    y="337"
                    fontFamily="Inter, sans-serif"
                    fontSize="12"
                    fontWeight="800"
                    fill="#222426"
                  >
                    Proiecția Umbrei și Cipolla
                  </text>
                  <text
                    x="30"
                    y="355"
                    fontFamily="Inter, sans-serif"
                    fontSize="9.2"
                    fill="#222426"
                  >
                    Enantiodromie și ipoteze de bază (Bion)
                  </text>
                  <text
                    x="30"
                    y="371"
                    fontFamily="Inter, sans-serif"
                    fontSize="9.5"
                    fill="#6E7376"
                  >
                    Autosabotaj în Cadranul III
                  </text>

                  <rect
                    x="238"
                    y="298"
                    width="204"
                    height="92"
                    rx="12"
                    fill="#E5B822"
                    fillOpacity={selectedBlock === 'stratul-c' ? '0.32' : '0.18'}
                    stroke="#222426"
                    strokeWidth={selectedBlock === 'stratul-c' ? '2.5' : '1.75'}
                  />
                  <text
                    x="250"
                    y="318"
                    fontFamily="Inter, sans-serif"
                    fontSize="9"
                    fontWeight="700"
                    fill="#222426"
                  >
                    STRATUL C · SINTEZĂ · TRASEUL B
                  </text>
                  <text
                    x="250"
                    y="337"
                    fontFamily="Inter, sans-serif"
                    fontSize="11.5"
                    fontWeight="800"
                    fill="#222426"
                  >
                    Grup de lucru (Bion) și individuare
                  </text>
                  <text
                    x="250"
                    y="355"
                    fontFamily="Inter, sans-serif"
                    fontSize="9.5"
                    fill="#222426"
                  >
                    Refacerea axei Ego–Sine
                  </text>
                  <text
                    x="250"
                    y="371"
                    fontFamily="Inter, sans-serif"
                    fontSize="9.5"
                    fill="#222426"
                  >
                    Cooperare în Cadranul I
                  </text>
                </g>

                {/* Convergence into Bottom Protocol Banner (Chapter 6) */}
                <line
                  x1="120"
                  y1="390"
                  x2="180"
                  y2="416"
                  stroke="#222426"
                  strokeWidth="1.5"
                  markerEnd="url(#cover-arrow-dark)"
                />
                <line
                  x1="340"
                  y1="390"
                  x2="280"
                  y2="416"
                  stroke="#222426"
                  strokeWidth="3.25"
                />
                <line
                  x1="340"
                  y1="390"
                  x2="280"
                  y2="416"
                  stroke="#E5B822"
                  strokeWidth="1.75"
                  markerEnd="url(#cover-arrow-gold)"
                />

                <g
                  onClick={() => setSelectedBlock('protocol')}
                  className="cursor-pointer"
                >
                  <rect
                    x="18"
                    y="420"
                    width="424"
                    height="42"
                    fill="#222426"
                    stroke={selectedBlock === 'protocol' ? '#E5B822' : '#222426'}
                    strokeWidth={selectedBlock === 'protocol' ? '2.5' : '1.5'}
                  />
                  <text
                    x="230"
                    y="437"
                    textAnchor="middle"
                    fontFamily="Inter, sans-serif"
                    fontSize="9"
                    fontWeight="700"
                    fill="#E5B822"
                  >
                    CAPITOLUL 6 · PROTOCOLUL SECVENȚIAL ÎN TREI FAZE · LALONDE–DEVER
                  </text>
                  <text
                    x="230"
                    y="453"
                    textAnchor="middle"
                    fontFamily="Inter, sans-serif"
                    fontSize="9.5"
                    fontWeight="600"
                    fill="#F6F5EE"
                  >
                    Faza I (0–12 luni) → Faza II (1–3 ani) → Faza III (3–10 ani, guvernanță)
                  </text>
                </g>
              </svg>

              {/* Interactive Cover Plate Inspector */}
              <div className="mt-4 pt-3.5 border-t border-[#222426] space-y-2.5">
                <div className="flex flex-wrap items-center gap-1.5">
                  {(
                    [
                      { id: 'stratul-a', label: 'Stratul A' },
                      { id: 'stratul-b', label: 'Stratul B' },
                      { id: 'filtrul-moral', label: 'Filtru moral' },
                      { id: 'stratul-c', label: 'Stratul C' },
                      { id: 'protocol', label: 'Protocol Cap. 6' }
                    ] as const
                  ).map((tab) => (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setSelectedBlock(tab.id)}
                      className={`px-2 py-1 text-[10.5px] font-mono font-semibold border cursor-pointer transition-colors ${
                        selectedBlock === tab.id
                          ? 'bg-[#222426] text-[#F6F5EE] border-[#222426]'
                          : 'bg-[#F6F5EE] text-[#222426] border-[#8C9BA5] hover:border-[#222426]'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                <div className="bg-[#F6F5EE] border border-[#8C9BA5] p-3 space-y-2">
                  <div className="text-[10px] font-mono font-bold tracking-wider text-[#6E7376] uppercase">
                    {activeBlockInfo.badge}
                  </div>
                  <div className="text-xs font-serif font-bold text-[#222426]">
                    {activeBlockInfo.title}
                  </div>
                  <p className="text-xs text-[#222426] leading-relaxed">
                    {activeBlockInfo.synthesis}
                  </p>
                  <div className="pt-1.5 flex flex-wrap items-center gap-2">
                    <button
                      type="button"
                      onClick={() => handleNavigate(activeBlockInfo.chapterHash)}
                      className="px-2.5 py-1 text-[11px] font-mono font-semibold bg-[#E5B822] text-[#222426] border border-[#222426] hover:bg-[#E5B822]/85 transition-colors cursor-pointer inline-flex items-center gap-1"
                    >
                      <span>Deschide {activeBlockInfo.chapterLabel}</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                    <button
                      type="button"
                      onClick={() => handleNavigate(activeBlockInfo.figureHash)}
                      className="px-2.5 py-1 text-[11px] font-mono font-semibold bg-[#F6F5EE] text-[#222426] border border-[#222426] hover:bg-[#E5B822]/25 transition-colors cursor-pointer inline-flex items-center gap-1"
                    >
                      <span>Inspectează {activeBlockInfo.figureLabel}</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dedicated Video Teaser Plate (#video-teaser-section) */}
        <section
          id="video-teaser-section"
          className="pt-8 lg:pt-10 mt-4 mb-8 lg:mb-10 border-t border-[#222426]"
        >
          <div className="max-w-[860px] w-full mx-auto bg-[#F6F5EE] border-2 border-[#222426] p-4 sm:p-6">
            {/* Header Bar */}
            <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-4 border-b border-[#8C9BA5]">
              <div>
                <span className="inline-block px-2.5 py-0.5 text-[11px] font-mono font-bold tracking-wider text-[#222426] uppercase bg-[#E5B822] border border-[#222426]">
                  SINTEZĂ VIDEO • INTRODUCERE VIZUALĂ
                </span>
                <h2 className="font-serif text-base sm:text-lg font-bold text-[#222426] mt-1.5">
                  Prezentare video a arhitecturii cauzale din monografie
                </h2>
              </div>
              <a
                href="https://youtu.be/alJXGWmn3lU"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-[#6E7376] hover:text-[#222426] underline underline-offset-4"
              >
                Deschide pe YouTube ↗
              </a>
            </div>

            {/* 16:9 Video Player Inner Frame */}
            <div className="relative w-full aspect-video border-2 border-[#222426] bg-[#222426] overflow-hidden">
              <iframe
                src="https://www.youtube-nocookie.com/embed/alJXGWmn3lU?rel=0&modestbranding=1"
                title="Diagnosticul războiului cognitiv în România — Video Teaser Oficial"
                className="absolute inset-0 w-full h-full border-0"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>

            {/* Footer Caption */}
            <p className="mt-3 text-xs font-serif italic text-[#6E7376] leading-relaxed">
              Sinteză audio-vizuală a modelului pe trei straturi (instituțional, neurocognitiv și cultural), construită fără indicatori statistici bruți, exclusiv pe dinamici structurale și cauzale.
            </p>
          </div>
        </section>

        {/* Bottom Archival Summary Strip (Static Text Metadata — Zero Buttons) */}
        <div className="pt-6 border-t border-[#222426] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs text-[#6E7376]">
          <div>
            <div className="font-mono font-semibold text-[#222426]">
              Stratul A · Capitolele 0–1
            </div>
            <div>Cadrul macro, arhitectura Macro–Micro–Macro (Coleman–Hedström) și rădăcina instituțională</div>
          </div>
          <div>
            <div className="font-mono font-semibold text-[#222426]">
              Stratul B · Capitolele 2–3
            </div>
            <div>Antilumea putinistă, dubla falsificare axiologică și bucla OODA</div>
          </div>
          <div>
            <div className="font-mono font-semibold text-[#222426]">
              Stratul C · Capitolele 4–5
            </div>
            <div>Proiecția Umbrei colective și enantiodromia, matricea lui Cipolla și bifurcația Track A/B</div>
          </div>
          <div>
            <div className="font-mono font-semibold text-[#222426]">
              Reconstrucție · Capitolul 6
            </div>
            <div>Protocolul secvențial Lalonde–Dever, policentricitate, capital social de punte și modernitate organică</div>
          </div>
        </div>
      </div>
    </div>
  );
};

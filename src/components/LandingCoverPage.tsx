import React from 'react';
import { ArrowRight } from 'lucide-react';
import { SocialShareButtons } from './SocialShareButtons';

interface LandingCoverPageProps {
  onOpenInteractivePage: () => void;
}

export const LandingCoverPage: React.FC<LandingCoverPageProps> = ({
  onOpenInteractivePage
}) => {
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
            19 secțiuni analitice · 7 diagrame vectoriale · 2 tabele de sinteză · 122 referințe academice
          </span>
        </div>

        {/* Center Split: Monograph Title, Subtitle, Abstract, Action Button + 2D Cover Plate */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center my-8 lg:my-12">
          {/* Left 7 Columns: Title, Subtitle, Abstract & Action Button */}
          <div className="lg:col-span-7 space-y-6">
            <div className="text-xs font-mono text-[#6E7376]">
              Arhitectura cauzală pe trei straturi (Sociologie instituțională · Neuroștiințe și semiotică · Psihologie analitică)
            </div>

            <h1 className="font-serif text-2xl sm:text-4xl lg:text-[42px] font-bold text-[#222426] leading-[1.12] headline-balance">
              Diagnosticul războiului cognitiv în România
            </h1>

            <p className="font-serif text-sm sm:text-base font-normal text-[#222426] leading-relaxed headline-balance">
              Arhitectura instituțională, neurocognitivă și culturală a vulnerabilității și rezilienței societale în fața operațiunilor informaționale ruse și a ideologiei putiniste
            </p>

            <div className="pt-2 border-t border-[#8C9BA5] space-y-3 text-xs sm:text-sm text-[#222426] leading-relaxed max-w-[65ch]">
              <p>
                Această lucrare demonstrează că vulnerabilitatea cognitivă a societății românești nu reprezintă un simplu deficit de alfabetizare media, ci rezultatul emergent al interacțiunii dintre anomalia istorică a „formelor fără fond” și închiderea operațională a instituțiilor extractive (Stratul A), uzura alostatică cronică și capturarea fazei de Orientare din bucla OODA prin control reflexiv (Stratul B), respectiv proiecția Umbrei colective, enantiodromia și alunecarea în autosabotaj colectiv (-X, -Y) în criză acută (Stratul C).
              </p>
              <p className="text-[#6E7376]">
                Explorarea interactivă reunește textul integral al celor șase capitole, sinteza executivă pentru decidenți, descompunerea în oglindă pe două registre (teoretic și empiric), laboratorul celor șapte diagrame cibernetice și protocolul secvențial de reconstrucție în trei faze.
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
                <span>Planșa sinoptică de copertă (Modelul Macro–Micro–Macro)</span>
                <span>Fig. I–VII</span>
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
                <rect
                  x="18"
                  y="14"
                  width="424"
                  height="94"
                  fill="#F6F5EE"
                  stroke="#222426"
                  strokeWidth="2"
                />
                <text
                  x="30"
                  y="34"
                  fontFamily="Inter, sans-serif"
                  fontSize="9.5"
                  fontWeight="700"
                  fill="#6E7376"
                >
                  STRATUL A (MACRO-INSTITUȚIONAL · CAPITOLELE 1–2)
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
                  Instituții extractive („forme fără fond”) vs. statul de drept (Luhmann)
                </text>
                <text
                  x="30"
                  y="93"
                  fontFamily="Inter, sans-serif"
                  fontSize="10.5"
                  fill="#6E7376"
                >
                  Vectorul revizionist al Antilumii (Epstein) și starea Bobok (Dostoievski)
                </text>

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
                <rect
                  x="18"
                  y="134"
                  width="424"
                  height="96"
                  fill="#F6F5EE"
                  stroke="#F01E1E"
                  strokeWidth="1.75"
                />
                <text
                  x="30"
                  y="154"
                  fontFamily="Inter, sans-serif"
                  fontSize="9.5"
                  fontWeight="700"
                  fill="#F01E1E"
                >
                  STRATUL B (NEUROCOGNITIV ȘI CIBERNETIC · CAPITOLUL 3)
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
                  fontSize="10.5"
                  fill="#222426"
                >
                  Inhibare dlPFC, hiperactivare amigdaliană și închidere cognitivă (NFCC)
                </text>
                <text
                  x="30"
                  y="213"
                  fontFamily="Inter, sans-serif"
                  fontSize="10.5"
                  fill="#6E7376"
                >
                  Control reflexiv de rang secund (Lefebvre) vs. mediere semiotică ternară
                </text>

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
                <rect
                  x="48"
                  y="248"
                  width="364"
                  height="28"
                  rx="14"
                  fill="#E5B822"
                  stroke="#222426"
                  strokeWidth="1.5"
                />
                <text
                  x="230"
                  y="266"
                  textAnchor="middle"
                  fontFamily="Inter, sans-serif"
                  fontSize="10"
                  fontWeight="800"
                  fill="#222426"
                >
                  Filtrul moral creștin-secular (Imago Dei și discernământ)
                </text>

                {/* Lower Frame: Stratum C Split (Track A vs Track B) */}
                <rect
                  x="18"
                  y="298"
                  width="204"
                  height="92"
                  rx="12"
                  fill="#F6F5EE"
                  stroke="#F01E1E"
                  strokeWidth="1.75"
                />
                <text
                  x="30"
                  y="318"
                  fontFamily="Inter, sans-serif"
                  fontSize="9"
                  fontWeight="700"
                  fill="#F01E1E"
                >
                  STRATUL C · TENSIUNE (TRACK A)
                </text>
                <text
                  x="30"
                  y="338"
                  fontFamily="Inter, sans-serif"
                  fontSize="12"
                  fontWeight="800"
                  fill="#222426"
                >
                  Proiecția Umbrei și Cipolla
                </text>
                <text
                  x="30"
                  y="356"
                  fontFamily="Inter, sans-serif"
                  fontSize="10"
                  fill="#222426"
                >
                  Enantiodromie, ipoteze de bază (Bion)
                </text>
                <text
                  x="30"
                  y="372"
                  fontFamily="Inter, sans-serif"
                  fontSize="10"
                  fill="#6E7376"
                >
                  și autosabotaj colectiv (-X, -Y)
                </text>

                <rect
                  x="238"
                  y="298"
                  width="204"
                  height="92"
                  rx="12"
                  fill="#E5B822"
                  fillOpacity="0.18"
                  stroke="#222426"
                  strokeWidth="1.75"
                />
                <text
                  x="250"
                  y="318"
                  fontFamily="Inter, sans-serif"
                  fontSize="9"
                  fontWeight="700"
                  fill="#222426"
                >
                  STRATUL C · SINTEZĂ (TRACK B)
                </text>
                <text
                  x="250"
                  y="338"
                  fontFamily="Inter, sans-serif"
                  fontSize="12"
                  fontWeight="800"
                  fill="#222426"
                >
                  Grup de lucru și individuare
                </text>
                <text
                  x="250"
                  y="356"
                  fontFamily="Inter, sans-serif"
                  fontSize="10"
                  fill="#222426"
                >
                  Refacerea axei Ego–Sine (Edinger)
                </text>
                <text
                  x="250"
                  y="372"
                  fontFamily="Inter, sans-serif"
                  fontSize="10"
                  fill="#222426"
                >
                  și cooperare inteligentă (+X, +Y)
                </text>

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

                <rect
                  x="18"
                  y="420"
                  width="424"
                  height="42"
                  fill="#222426"
                  stroke="#222426"
                  strokeWidth="1.5"
                />
                <text
                  x="230"
                  y="437"
                  textAnchor="middle"
                  fontFamily="Inter, sans-serif"
                  fontSize="9.5"
                  fontWeight="700"
                  fill="#E5B822"
                >
                  CAPITOLUL 6 · PROTOCOLUL SECVENȚIAL ÎN TREI FAZE (LALONDE–DEVER)
                </text>
                <text
                  x="230"
                  y="453"
                  textAnchor="middle"
                  fontFamily="Inter, sans-serif"
                  fontSize="10.5"
                  fontWeight="600"
                  fill="#F6F5EE"
                >
                  Faza I (0–12 luni) → Faza II (1–3 ani) → Faza III (3–10 ani, policentricitate Ostrom)
                </text>
              </svg>
            </div>
          </div>
        </div>

        {/* Bottom Archival Summary Strip (Static Text Metadata — Zero Buttons) */}
        <div className="pt-6 border-t border-[#222426] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs text-[#6E7376]">
          <div>
            <div className="font-mono font-semibold text-[#222426]">
              Stratul A (Capitolele 0–1)
            </div>
            <div>Cadrul macro, barca lui Coleman-Hedström și rădăcina instituțională</div>
          </div>
          <div>
            <div className="font-mono font-semibold text-[#222426]">
              Stratul B (Capitolele 2–3)
            </div>
            <div>Antilumea putinistă, dubla falsificare axiologică și bucla OODA</div>
          </div>
          <div>
            <div className="font-mono font-semibold text-[#222426]">
              Stratul C (Capitolele 4–5)
            </div>
            <div>Proiecția Umbrei colective și enantiodromia, matricea lui Cipolla și bifurcația Track A/B</div>
          </div>
          <div>
            <div className="font-mono font-semibold text-[#222426]">
              Reconstrucție (Capitolul 6)
            </div>
            <div>Protocolul secvențial Lalonde-Dever, policentricitate și modernitate organică</div>
          </div>
        </div>
      </div>
    </div>
  );
};

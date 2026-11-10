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
      <div className="max-w-[1360px] w-full mx-auto flex-1 border-2 border-[#222426] bg-[#F4F1EA] p-6 sm:p-10 lg:p-14 flex flex-col justify-between">
        {/* Top Archival Header (Static Typography Only — Zero Buttons) */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#222426] text-xs font-mono text-[#6E7376]">
          <span>
            Monografie științifică integrată · Versiunea 1.0 · Al șaselea domeniu operațional (NATO ACT)
          </span>
          <span>
            19 secțiuni analitice · 7 diagrame vectoriale · 2 tabele de sinteză · 122 referințe academice
          </span>
        </div>

        {/* Center Split: Monograph Title, Abstract, Single CTA Button + 2D Vector Engraving Cover Plate */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center my-8 lg:my-12">
          {/* Left 7 Columns: Title, Subtitle, Abstract & The Single Button */}
          <div className="lg:col-span-7 space-y-6">
            <div className="text-xs font-mono text-[#6E7376]">
              Arhitectura cauzală pe trei straturi (Sociologie instituțională · Neuroștiințe și semiotică · Psihologie analitică)
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl lg:text-[54px] font-bold text-[#222426] leading-[1.12] headline-balance">
              Diagnosticul războiului cognitiv în România
            </h1>

            <p className="font-serif text-lg sm:text-xl text-[#2C3539] leading-relaxed headline-balance">
              Arhitectura instituțională, neurocognitivă și culturală a vulnerabilității și rezilienței societale în fața operațiunilor informaționale ruse și a ideologiei putiniste (Versiunea 1.0)
            </p>

            <div className="pt-2 border-t border-[#D0D5D9] space-y-3 text-xs sm:text-sm text-[#222426] leading-relaxed max-w-[65ch]">
              <p>
                Această lucrare demonstrează că vulnerabilitatea cognitivă a societății românești nu reprezintă un simplu deficit de alfabetizare media, ci rezultatul emergent al interacțiunii dintre anomalia istorică a „formelor fără fond” și închiderea operațională a instituțiilor extractive (Stratul A), uzura alostatică cronică și capturarea fazei de Orientare din bucla OODA prin control reflexiv (Stratul B), respectiv activarea filtrelor Umbrei colective și a comportamentului contraproductiv sistemic în criză acută (Stratul C).
              </p>
              <p className="text-[#6E7376]">
                Explorarea interactivă reunește textul integral al celor șase capitole, descompunerea în oglindă pe două registre (Teoretic și Empiric), modul de prezentare progresivă în patru acte, laboratorul celor șapte diagrame cibernetice și protocolul secvențial de reconstrucție în trei faze.
              </p>
            </div>

            {/* Primary Action Button + Social Share Bar */}
            <div className="pt-4 space-y-4">
              <div>
                <button
                  type="button"
                  onClick={onOpenInteractivePage}
                  className="px-7 py-4 text-sm sm:text-base font-serif font-bold text-[#222426] bg-[#E5B822] border-2 border-[#222426] hover:bg-[#D9A714] transition-colors cursor-pointer inline-flex items-center gap-3 whitespace-nowrap shrink-0"
                >
                  <span>Deschide pagina interactivă a monografiei</span>
                  <ArrowRight className="w-5 h-5 shrink-0" />
                </button>
              </div>

              <div className="pt-3 border-t border-[#D0D5D9]">
                <SocialShareButtons
                  url="https://laurentiustaicu.github.io/diagnosticul-razboiului-cognitiv-romania/"
                  label="Distribuie monografia pe"
                />
              </div>
            </div>
          </div>

          {/* Right 5 Columns: Video Synthesis Box + 2D Vector Engraving Cover Plate */}
          <div className="lg:col-span-5 space-y-6">
            {/* Embedded Documentary Video Box */}
            <div className="bg-[#F6F5EE] border-2 border-[#222426] p-4 sm:p-5">
              <div className="text-[11px] font-mono text-[#6E7376] pb-2 mb-2.5 border-b border-[#D0D5D9] flex items-center justify-between">
                <span>Sinteză video realizată pe baza monografiei</span>
                <span>Modul cinematic</span>
              </div>
              <div className="relative w-full aspect-video border border-[#222426] bg-[#222426] overflow-hidden">
                <iframe
                  src="https://www.youtube.com/embed/DgeyWNYP80c?si=e4yihOKlropuTaI8&rel=0"
                  title="Prezentare video (Diagnosticul războiului cognitiv în România)"
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
              <p className="text-[11px] font-serif italic text-[#6E7376] mt-2 leading-relaxed">
                Prezentare audiovizuală a arhitecturii instituționale, neurocognitive și culturale a vulnerabilității și rezilienței societale.
              </p>
            </div>

            <div className="bg-[#F6F5EE] border-2 border-[#222426] p-4 sm:p-6">
              <div className="text-[11px] font-mono text-[#6E7376] pb-2 mb-3 border-b border-[#D0D5D9] flex items-center justify-between">
                <span>Planșa sinoptică de copertă (Modelul Macro–Micro–Macro)</span>
                <span>Fig. I–VII</span>
              </div>

              <svg
                viewBox="0 0 460 440"
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
                    markerWidth="6"
                    markerHeight="6"
                    orient="auto-start-reverse"
                  >
                    <path d="M 0 1 L 9 5 L 0 9 z" fill="#D9A714" />
                  </marker>
                </defs>

                <rect x="0" y="0" width="460" height="440" fill="url(#cover-grid)" />

                {/* Top Macro Frame: Stratum A */}
                <rect
                  x="20"
                  y="16"
                  width="420"
                  height="86"
                  fill="#F4F1EA"
                  stroke="#222426"
                  strokeWidth="1.75"
                />
                <text
                  x="32"
                  y="36"
                  fontFamily="IBM Plex Mono, monospace"
                  fontSize="9.5"
                  fontWeight="600"
                  fill="#6E7376"
                >
                  STRATUL A (MACRO-INSTITUȚIONAL · CAPITOLELE 1 ȘI 2)
                </text>
                <text
                  x="32"
                  y="56"
                  fontFamily="Source Serif 4, Georgia, serif"
                  fontSize="13.5"
                  fontWeight="700"
                  fill="#222426"
                >
                  Forme fără fond, închidere operațională (Luhmann) și sistema
                </text>
                <text
                  x="32"
                  y="76"
                  fontFamily="Plus Jakarta Sans, sans-serif"
                  fontSize="10.5"
                  fill="#2C3539"
                >
                  Instituții extractive (Acemoglu și Robinson) + Vectorul Russkii Antimir / Bobok
                </text>

                {/* Downward Causal Arrows from Stratum A to Stratum B */}
                <line
                  x1="145"
                  y1="102"
                  x2="145"
                  y2="136"
                  stroke="#F01E1E"
                  strokeWidth="1.75"
                  markerEnd="url(#cover-arrow-red)"
                />
                <line
                  x1="315"
                  y1="102"
                  x2="315"
                  y2="136"
                  stroke="#222426"
                  strokeWidth="1.75"
                  markerEnd="url(#cover-arrow-dark)"
                />

                {/* Middle Micro/Meso Frame: Stratum B */}
                <rect
                  x="20"
                  y="140"
                  width="420"
                  height="96"
                  fill="#F4F1EA"
                  stroke="#F01E1E"
                  strokeWidth="1.75"
                />
                <text
                  x="32"
                  y="160"
                  fontFamily="IBM Plex Mono, monospace"
                  fontSize="9.5"
                  fontWeight="600"
                  fill="#F01E1E"
                >
                  STRATUL B (NEUROCOGNITIV ȘI SEMIOTIC · CAPITOLUL 3)
                </text>
                <text
                  x="32"
                  y="180"
                  fontFamily="Source Serif 4, Georgia, serif"
                  fontSize="13.5"
                  fontWeight="700"
                  fill="#222426"
                >
                  Sarcină alostatică cronică și capturarea Orientării (Bucla OODA)
                </text>
                <text
                  x="32"
                  y="200"
                  fontFamily="Plus Jakarta Sans, sans-serif"
                  fontSize="10.5"
                  fill="#2C3539"
                >
                  Inhibare dlPFC + Hiperactivare amigdală (McEwen, Sapolsky, Arnsten)
                </text>
                <text
                  x="32"
                  y="218"
                  fontFamily="Plus Jakarta Sans, sans-serif"
                  fontSize="10.5"
                  fill="#2C3539"
                >
                  Control reflexiv (Lefebvre), semioză binară (Lotman) și dublă falsificare axiologică
                </text>

                {/* Arrows from Stratum B to Stratum C */}
                <line
                  x1="145"
                  y1="236"
                  x2="145"
                  y2="270"
                  stroke="#F01E1E"
                  strokeWidth="1.75"
                  markerEnd="url(#cover-arrow-red)"
                />
                <line
                  x1="315"
                  y1="236"
                  x2="315"
                  y2="270"
                  stroke="#D9A714"
                  strokeWidth="1.75"
                  markerEnd="url(#cover-arrow-gold)"
                />

                {/* Lower Frame: Stratum C Split (Vicious Loop vs Adaptive Synthesis) */}
                <rect
                  x="20"
                  y="274"
                  width="202"
                  height="82"
                  fill="#F6F5EE"
                  stroke="#F01E1E"
                  strokeWidth="1.75"
                />
                <text
                  x="30"
                  y="293"
                  fontFamily="IBM Plex Mono, monospace"
                  fontSize="9"
                  fontWeight="600"
                  fill="#F01E1E"
                >
                  STRATUL C · TENSIUNE (TRACK A)
                </text>
                <text
                  x="30"
                  y="312"
                  fontFamily="Source Serif 4, Georgia, serif"
                  fontSize="12.5"
                  fontWeight="700"
                  fill="#222426"
                >
                  Filtrele Umbrei și Cipolla
                </text>
                <text
                  x="30"
                  y="330"
                  fontFamily="Plus Jakarta Sans, sans-serif"
                  fontSize="10"
                  fill="#2C3539"
                >
                  Ipotezele lui Bion (baD / baF) și
                </text>
                <text
                  x="30"
                  y="344"
                  fontFamily="Plus Jakarta Sans, sans-serif"
                  fontSize="10"
                  fill="#2C3539"
                >
                  conversia în cadranul Neghiob
                </text>

                <rect
                  x="238"
                  y="274"
                  width="202"
                  height="82"
                  fill="#F4F1EA"
                  stroke="#D9A714"
                  strokeWidth="1.75"
                />
                <text
                  x="248"
                  y="293"
                  fontFamily="IBM Plex Mono, monospace"
                  fontSize="9"
                  fontWeight="600"
                  fill="#222426"
                >
                  STRATUL C · SINTEZĂ (TRACK B)
                </text>
                <text
                  x="248"
                  y="312"
                  fontFamily="Source Serif 4, Georgia, serif"
                  fontSize="12.5"
                  fontWeight="700"
                  fill="#222426"
                >
                  Grup de Lucru și Individuație
                </text>
                <text
                  x="248"
                  y="330"
                  fontFamily="Plus Jakarta Sans, sans-serif"
                  fontSize="10"
                  fill="#2C3539"
                >
                  Refacerea axei Ego–Sine (Edinger)
                </text>
                <text
                  x="248"
                  y="344"
                  fontFamily="Plus Jakarta Sans, sans-serif"
                  fontSize="10"
                  fill="#2C3539"
                >
                  și capital social bridging (Putnam)
                </text>

                {/* Convergence into Bottom Protocol Banner (Chapter 6) */}
                <line
                  x1="121"
                  y1="356"
                  x2="180"
                  y2="384"
                  stroke="#222426"
                  strokeWidth="1.5"
                  markerEnd="url(#cover-arrow-dark)"
                />
                <line
                  x1="339"
                  y1="356"
                  x2="280"
                  y2="384"
                  stroke="#D9A714"
                  strokeWidth="1.75"
                  markerEnd="url(#cover-arrow-gold)"
                />

                <rect
                  x="20"
                  y="388"
                  width="420"
                  height="40"
                  fill="#222426"
                  stroke="#222426"
                  strokeWidth="1.5"
                />
                <text
                  x="230"
                  y="405"
                  textAnchor="middle"
                  fontFamily="IBM Plex Mono, monospace"
                  fontSize="9.5"
                  fontWeight="600"
                  fill="#E5B822"
                >
                  CAPITOLUL 6 · PROTOCOLUL SECVENȚIAL ÎN TREI FAZE (LALONDE-DEVER)
                </text>
                <text
                  x="230"
                  y="420"
                  textAnchor="middle"
                  fontFamily="Source Serif 4, Georgia, serif"
                  fontSize="11.5"
                  fill="#F6F5EE"
                >
                  Faza I (0–18 luni) → Faza II (18–60 luni) → Faza III (5–15 ani, Policentricitate Ostrom)
                </text>
              </svg>
            </div>
          </div>
        </div>

        {/* Bottom Archival Summary Strip (Static Text Metadata — Zero Buttons) */}
        <div className="pt-6 border-t border-[#222426] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs text-[#6E7376]">
          <div>
            <div className="font-mono font-semibold text-[#222426]">
              Actul I (Capitolele 0–1)
            </div>
            <div>Cadrul macro, barca lui Coleman-Hedström și rădăcina instituțională</div>
          </div>
          <div>
            <div className="font-mono font-semibold text-[#222426]">
              Actul II (Capitolele 2–3)
            </div>
            <div>Antilumea putinistă, dubla falsificare axiologică și bucla OODA</div>
          </div>
          <div>
            <div className="font-mono font-semibold text-[#222426]">
              Actul III (Capitolele 4–5)
            </div>
            <div>Filtrele Umbrei colective, matricea lui Cipolla și bifurcația Track A/B</div>
          </div>
          <div>
            <div className="font-mono font-semibold text-[#222426]">
              Actul IV (Capitolul 6)
            </div>
            <div>Protocolul secvențial Lalonde-Dever, policentricitate și modernitate organică</div>
          </div>
        </div>
      </div>
    </div>
  );
};

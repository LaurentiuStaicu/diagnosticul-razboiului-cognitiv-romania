import React, { useState } from 'react';
import { Film, Volume2, Clapperboard, BookOpen, Layers, ArrowRight } from 'lucide-react';

interface DocumentaryGuideViewProps {
  onOpenMonographReader: () => void;
}

export const DocumentaryGuideView: React.FC<DocumentaryGuideViewProps> = ({
  onOpenMonographReader
}) => {
  const [activeActTab, setActiveActTab] = useState<number>(1);

  const ACTS_DATA = [
    {
      actNumber: 1,
      code: 'ACTUL I',
      title: 'Cadrul macro și rădăcina sistemică',
      timeframe: 'Minutul 00:00 – 12:30',
      focus: 'Stratul A (Sociologie instituțională & Forme fără fond)',
      visualDirection:
        'Cadre largi de arhitectură instituțională bucureșteană în contrast cu sate depopulate; iluminare rece, umbre adânci, estetice cinemascop 2.39:1.',
      audioDesign:
        'Frecvențe joase sintetice (drone sub-bass 40Hz) suprapuse peste zgomotul de fond al aparaturii de imprimat și tic-tac-ul metronomului instituțional.',
      keyScenes: [
        {
          sceneNumber: '1.1',
          heading: 'Anomalia istorică a formelor fără fond (Maiorescu & Zeletin)',
          narration:
            'Aparatul de stat a adoptat arhitectura formală a democrației constituționale euroatlantice, păstrând însă în profunzime dinamica patrimonială și extractivă a relațiilor de putere.',
          scriptNote:
            'Voce din off sobră, fără inflexiuni dramatice. Transziție bruscă de la textul legii din 1866 la imagini aeriene cu clădirile birocratice contemporane.'
        },
        {
          sceneNumber: '1.2',
          heading: 'Insecuritatea cotidiană și uzura alostatică cronică',
          narration:
            'Înainte de prima întâlnire cu discursul propagandistic digital, cetățeanul român este deja epuizat biologic de uzura cotidiană a serviciilor publice nefuncționale.',
          scriptNote:
            'Montaj alert de secvențe cotidiene: săli de așteptare din spitale, ghișee administrative, trafic urban blocat. Ritm de montaj sincopat.'
        }
      ]
    },
    {
      actNumber: 2,
      code: 'ACTUL II',
      title: 'Anatomia tensiunii și camuflajul discursiv',
      timeframe: 'Minutul 12:30 – 25:00',
      focus: 'Stratul B (Antilumea putinistă & Dubla falsificare axiologică)',
      visualDirection:
        'Dualitate cromatică vizuală: stânga luminoasă (sinteza creștin-seculară europeană) versus dreapta întunecată (camuflajul suveranist al Antilumii).',
      audioDesign:
        'Coruri ecoulice distorsionate digital, armonii de orgă suprapuse peste impulsuri sintetice de tip rețea cibernetică.',
      keyScenes: [
        {
          sceneNumber: '2.1',
          heading: 'Rețeaua Sistema și starea Bobok (Dostoiévski & Thom)',
          narration:
            'Operațiunea rusească de război cognitiv nu urmărește convingerea rațională, ci parazitarea semiotică a spațiului discursiv și transgresiunea cinică a tuturor normelor.',
          scriptNote:
            'Suprapunere de texturi din rețelele sociale, comentarii conspirative, simboluri ortodoxe parazitate și secvențe din discursurile revizioniste.'
        },
        {
          sceneNumber: '2.2',
          heading: 'Dubla falsificare axiologică a conservatorismului',
          narration:
            'Naționalismul defensiv este deturnat din interior, transformând valorile comunitare în instrumente de mobilizare antiinstituțională.',
          scriptNote:
            'Planuri de detaliu pe icoane vechi în oglindă cu ecrane de smartphone illuminate în întuneric. Contrast puternic lumină-umbră.'
        }
      ]
    },
    {
      actNumber: 3,
      code: 'ACTUL III',
      title: 'Buclele de sistem și capturarea OODA',
      timeframe: 'Minutul 25:00 – 37:30',
      focus: 'Stratul B/C (Bucla OODA, Control reflexiv & Filtrele Umbrei)',
      visualDirection:
        'Diagrame cibernetice animate în overlay peste imagini reale; grafică vectorială aurie și roșie reprezentând fluxurile de informație și interferență.',
      audioDesign:
        'Impulsuri Binaural Beats (stare Alfa/Beta), semnale morse de frecvență înaltă, declanșări acustice de alarmă scurtă.',
      keyScenes: [
        {
          sceneNumber: '3.1',
          heading: 'Deturnarea fazei de Orientare (Boyd & Lefebvre)',
          narration:
            'Subiecții primesc informații construite pentru a le confirma fricile profunde, manipulându-le discernământul prefrontal și obligându-i la decizii autodistructive.',
          scriptNote:
            'Vizualizarea buclei OODA în spațiu 3D cu noduri decizionale scurtcircuitate de atacuri de rang secund.'
        },
        {
          sceneNumber: '3.2',
          heading: 'Conversia în Cadranul III al Matricei lui Cipolla',
          narration:
            'Cetățeanul capturat acționează împotriva propriilor interese de securitate și comunitare, generând un autosabotaj colectiv în stare de criză.',
          scriptNote:
            'Graficul matricei bidimensionale a lui Cipolla suprapus peste secvențe de proteste anomizante și panică de rețea.'
        }
      ]
    },
    {
      actNumber: 4,
      code: 'ACTUL IV',
      title: 'Protocolul secvențial și reconstrucția',
      timeframe: 'Minutul 37:30 – 50:00',
      focus: 'Reconstrucție societală (Protocolul Lalonde-Dever & Modernitate organică)',
      visualDirection:
        'Tranziție de la tonuri rece-monocrome la lumină naturală caldă, peisaje instituționale deschise, spații educaționale moderne și laboratoare de cercetare.',
      audioDesign:
        'Pian acustic organic integrat cu cvartet de coarde susținut de un tempo ascendent stabil (72 BPM).',
      keyScenes: [
        {
          sceneNumber: '4.1',
          heading: 'Faza I: Decompresia alostatică și igiena digitală (0–12 luni)',
          narration:
            'Restabilirea capacității executive prefrontale necesită mai întâi reducere presiunii de stres și reglementarea mediului informațional digital.',
          scriptNote:
            'Secvențe din centre de securitate cibernetică, săli de clasă cu programe de alfabetizare media și comunități de tineri.'
        },
        {
          sceneNumber: '4.2',
          heading: 'Faza II & III: Prebunking și modernitate organică (1–10 ani)',
          narration:
            'Reconstrucția rezilienței societale pe termen lung se fundamentează pe policentricitatea Ostrom, prebunking calibrat și apărarea antropologiei persoanei libere.',
          scriptNote:
            'Plan final panoramic asupra societății civile românești ancorate în spațiul euroatlantic, închidere în lumină solara plină.'
        }
      ]
    }
  ];

  return (
    <div className="space-y-8">
      {/* Editorial Banner */}
      <div className="bg-[#F6F5EE] border-2 border-[#222426] p-6 sm:p-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-[#8C9BA5]">
          <div className="max-w-3xl space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono text-[#6E7376]">
              <Film className="w-4 h-4 text-[#222426]" />
              <span>Ghid de Regie & Producție Documentar · Tratament Cinematografic</span>
            </div>
            <h1 className="font-serif text-2xl sm:text-4xl font-bold text-[#222426] leading-tight">
              Ghidul de Regie & Producție Documentar „Diagnosticul războiului cognitiv”
            </h1>
            <p className="text-xs sm:text-sm text-[#222426] leading-relaxed max-w-[70ch]">
              Acest livrabil tehnic secundar este decuplat de textul monografiei academice. El oferă specificațiile regizorale, indicațiile de sonorizare acustică și secvențierea cadrelor cinematografice pentru adaptarea audiovizuală a cercetării.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
            <button
              onClick={onOpenMonographReader}
              className="px-4 py-2.5 text-xs font-serif font-bold text-[#222426] bg-[#E5B822] border border-[#222426] hover:bg-[#E5B822]/85 transition-colors cursor-pointer flex items-center justify-center gap-2"
            >
              <BookOpen className="w-4 h-4" />
              <span>Revin la Monografia Academică</span>
            </button>
          </div>
        </div>

        {/* Act Selector Buttons */}
        <div className="mt-6">
          <div className="text-xs font-mono font-semibold text-[#222426] mb-2.5">
            Selectați Actul cinematografic pentru vizualizarea scenariului și indicațiilor de regie:
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {ACTS_DATA.map((act) => (
              <button
                key={act.actNumber}
                onClick={() => setActiveActTab(act.actNumber)}
                className={`p-3.5 border text-left transition-all cursor-pointer ${
                  activeActTab === act.actNumber
                    ? 'border-2 border-[#222426] bg-[#E5B822]/25'
                    : 'border-[#8C9BA5] bg-[#F6F5EE] hover:border-[#222426]'
                }`}
              >
                <div className="flex items-center justify-between text-[11px] font-mono text-[#6E7376]">
                  <span className="font-bold text-[#222426]">{act.code}</span>
                  <span>{act.timeframe}</span>
                </div>
                <div className="font-serif text-xs sm:text-sm font-semibold text-[#222426] mt-1 leading-snug">
                  {act.title}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Selected Act Treatment Workspace */}
      {(() => {
        const currentAct = ACTS_DATA.find((a) => a.actNumber === activeActTab) || ACTS_DATA[0];
        return (
          <div className="space-y-6">
            <div className="bg-[#F6F5EE] border-2 border-[#222426] p-6 sm:p-8">
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-6 border-b border-[#222426]">
                <div>
                  <span className="text-xs font-mono font-bold text-[#222426] uppercase tracking-wider">
                    {currentAct.code} · Specificații de Regie
                  </span>
                  <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#222426] mt-1">
                    {currentAct.title}
                  </h2>
                </div>
                <div className="text-xs font-mono text-[#6E7376]">
                  Segment cronologic: {currentAct.timeframe}
                </div>
              </div>

              {/* Technical Specifications Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="p-4 bg-[#F6F5EE] border border-[#222426] space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#222426]">
                    <Clapperboard className="w-4 h-4 text-[#F01E1E]" />
                    <span>Direcție Vizuală & Imagine</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#222426] leading-relaxed">
                    {currentAct.visualDirection}
                  </p>
                </div>

                <div className="p-4 bg-[#F6F5EE] border border-[#222426] space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#222426]">
                    <Volume2 className="w-4 h-4 text-[#222426]" />
                    <span>Design Sonor & Design Acustic</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#222426] leading-relaxed">
                    {currentAct.audioDesign}
                  </p>
                </div>
              </div>

              {/* Key Scenes Breakdown */}
              <div className="space-y-4">
                <div className="text-xs font-mono font-bold text-[#222426] uppercase tracking-wider">
                  Decupaj secvențial și indicații de voce din off:
                </div>

                {currentAct.keyScenes.map((scene) => (
                  <div
                    key={scene.sceneNumber}
                    className="p-4 sm:p-5 bg-[#F6F5EE] border border-[#222426] space-y-3"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#8C9BA5] pb-2">
                      <span className="text-xs font-mono font-bold text-[#222426]">
                        Secvența {scene.sceneNumber}
                      </span>
                      <span className="text-xs font-serif font-semibold text-[#222426]">
                        {scene.heading}
                      </span>
                    </div>

                    <div className="space-y-2">
                      <div className="text-[11px] font-mono text-[#6E7376]">Text narațiune:</div>
                      <p className="font-serif text-sm sm:text-base italic text-[#222426] leading-relaxed bg-[#F6F5EE] p-3 border border-[#8C9BA5]">
                        „{scene.narration}”
                      </p>
                    </div>

                    <div className="text-xs font-mono text-[#222426] pt-1">
                      <span className="font-bold">Notă de regie: </span>
                      {scene.scriptNote}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Link back to Monograph */}
            <div className="p-4 bg-[#F6F5EE] border border-[#222426] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-[#222426]">
                Doriți să aprofundați fundamentul teoretic și demonstrativ al acestei secvențe?
              </div>
              <button
                onClick={onOpenMonographReader}
                className="px-4 py-2 text-xs font-serif font-bold text-[#222426] bg-[#E5B822] border border-[#222426] hover:bg-[#E5B822]/85 transition-colors cursor-pointer flex items-center gap-2 whitespace-nowrap"
              >
                <span>Deschide Monografia Academică</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        );
      })()}
    </div>
  );
};

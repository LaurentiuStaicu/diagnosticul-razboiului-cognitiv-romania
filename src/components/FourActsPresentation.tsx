import React, { useState } from 'react';
import { InteractiveFigures } from './InteractiveFigures';
import { VideoSynthesisBox } from './VideoSynthesisBox';
import { ALL_SUBCHAPTER_STEPS, REGIONAL_CONTROL_GROUP } from '../data/tablesAndReference';
import { ArrowLeft, ArrowRight, Compass, Layers } from 'lucide-react';

interface FourActsPresentationProps {
  onSelectStepInReader: (stepNumber: number) => void;
}

interface ActBlueprint {
  actNumber: 1 | 2 | 3 | 4;
  title: string;
  subtitle: string;
  visualDirective: string;
  narrativeVoiceover: string;
  theoreticalPillars: {
    stratum: 'A' | 'B' | 'C';
    concept: string;
    authors: string;
    mechanism: string;
  }[];
  empiricalManifestations: {
    polarity: 'tension' | 'synthesis';
    label: string;
    detail: string;
  }[];
  figures: number[];
  stepNumbers: number[];
  terminalSynthesis: string;
}

const FOUR_ACTS_BLUEPRINT: ActBlueprint[] = [
  {
    actNumber: 1,
    title: 'Actul I (Cadrul macro și rădăcina sistemică)',
    subtitle: 'Introducere și Capitolul 1 (Arhitectura cauzală ascendentă și rădăcina instituțională)',
    visualDirective:
      'Perspectivă macro asupra hărții cauzale pe trei straturi (Stratul A instituțional, Stratul B neurocognitiv și semiotic, Stratul C inconștientul cultural și dinamica arhetipală), articulată prin barca lui Coleman-Hedström (Macro–Micro–Macro) și determinanții Lalonde-Dever.',
    narrativeVoiceover:
      'Vulnerabilitatea societății românești în fața operațiunilor informaționale ruse nu este un accident de comunicare și nici un deficit izolat de alfabetizare media. Ea reprezintă rezultatul emergent, cumulativ și determinist al unei arhitecturi instituționale extractive (Acemoglu și Robinson) și al închiderii operaționale autoreferențiale a aparatului de stat (Luhmann).',
    theoreticalPillars: [
      {
        stratum: 'A',
        concept: 'Forme fără fond și închidere operațională',
        authors: 'Maiorescu (1868), Luhmann (1995, 2004), Acemoglu și Robinson (2012)',
        mechanism:
          'Instituțiile adoptă mimetic fațada formală euro-atlantică, dar își conservă logica internă extractivă și autoreferențială, tratând cetățeanul ca pe o perturbație externă.'
      },
      {
        stratum: 'B',
        concept: 'Sarcină alostatică cronică și down-regulation prefrontal',
        authors: 'McEwen (1998), Sapolsky (2004, 2017), Arnsten (2009)',
        mechanism:
          'Frica de interacțiunea cu statul punitiv și imprevizibilitatea normativă mențin axa HPA în hiperactivare, atrofiind rețelele prefrontale (dlPFC) și hiperactivând amigdala.'
      },
      {
        stratum: 'C',
        concept: 'Neputința învățată instituțional și leziunea axei Ego–Sine',
        authors: 'Seligman (1975), Edinger (1972), Singer și Kimbles (2004)',
        mechanism:
          'Decuplarea istorică dintre acțiunea civică și rezultatul instituțional sedimentează fatalismul adaptativ și cinismul defensiv în inconștientul cultural.'
      }
    ],
    empiricalManifestations: [
      {
        polarity: 'tension',
        label: 'Falia structurală (Dualismul cetățeanului român)',
        detail:
          'Disocierea dintre conformismul de fațadă în spațiul public oficial și refugiul în rețele informale și narative compensatorii în spațiul privat și digital.'
      },
      {
        polarity: 'tension',
        label: 'Eroarea de atribuire cauzală',
        detail:
          'Suferința generată intern de disfuncția instituțiilor naționale devine materie primă psihologică disponibilă pentru deturnarea externă.'
      },
      {
        polarity: 'synthesis',
        label: 'Principiul de diagnostic (Determinanții Lalonde-Dever)',
        detail:
          'Orice intervenție de reziliență trebuie să vizeze simultan instituțiile (Determinantul I), mediul digital și sociospațial (II), stilul de viață asociativ (III) și rezerva neurobiologică (IV).'
      }
    ],
    figures: [1],
    stepNumbers: [1, 2, 3, 4],
    terminalSynthesis:
      'Capitolul 1 demonstrează că războiul cognitiv rus nu creează faliile societății românești din nimic, ci parazitează o rezervă cognitivă deja epuizată de frica instituțională și de anomalia „formelor fără fond”.'
  },
  {
    actNumber: 2,
    title: 'Actul II (Anatomia tensiunii și mecanismul intern pe două registre)',
    subtitle: 'Capitolele 2 și 3 (Antilumea putinistă, dubla falsificare axiologică și capturarea buclei OODA)',
    visualDirective:
      'Descompunere în oglindă între Stratul Teoretic/Conceptual (sistema, Russkii Antimir, Bobok, controlul reflexiv de ordinul al doilea, semioza binară) și Stratul Practic/Empiric (inversarea valorilor, deturnarea Orientării OODA și comparația cu grupul de control regional).',
    narrativeVoiceover:
      'Operațiunile informaționale ruse nu propun o ideologie coerentă concurentă, ci proiectează în exterior patologia internă a regimului putinist (sistema și Russkii Antimir) pentru a induce starea de Bobok — punctul de descompunere morală în care distincția dintre adevăr și minciună devine irelevantă.',
    theoreticalPillars: [
      {
        stratum: 'A',
        concept: 'Sistema, Russkii Antimir și starea de Bobok',
        authors: 'Ledeneva (2013), Pomerantsev (2014, 2019), Thom (2018, 2022), Dostoievski (1873)',
        mechanism:
          'Guvernarea prin complicitate (krugovaya poruka), suspendarea adevărului faptic și inversarea sistematică a semnificației conceptelor democratice și creștine.'
      },
      {
        stratum: 'B',
        concept: 'Dubla falsificare axiologică și capturarea Orientării (OODA)',
        authors: 'Rokeach (1973), Schwartz (1992), Boyd (1987), Lefebvre (1982, 2001), Lotman (1990)',
        mechanism:
          'Securitatea este redefinită ca supunere, tradiția ca izolaționism antioccidental, iar faza de Orientare a buclei OODA este colonizată prin pachete prefabricate de control reflexiv.'
      },
      {
        stratum: 'B',
        concept: 'Eroarea de predicție dopaminică și nevoia de închidere cognitivă',
        authors: 'Schultz (1998, 2016), Kruglanski (1996, 2004), Kahneman (2011)',
        mechanism:
          'Arhitectura algoritmică a platformelor transformă indignarea morală și explicațiile conspiraționiste binare în recompense neurochimice imediate care ocolesc Sistemul 2.'
      }
    ],
    empiricalManifestations: [
      {
        polarity: 'tension',
        label: 'Falsificarea tradiției și a creștinismului răsăritean',
        detail:
          'Înlocuirea eticii chenotice și agapice cu filetismul politic (Kalaitzidis) și idolatria puterii suverane (doctrina Katechon-ului militarizat).'
      },
      {
        polarity: 'tension',
        label: 'Colapsul terțului inclus (Semioza binară Lotman)',
        detail:
          'Orice nuanță sau analiză graduală este abolită în favoarea unei logici apocaliptice de tipul „noi împotriva lor”, anulând spațiul deliberării democratice.'
      },
      {
        polarity: 'synthesis',
        label: 'Proba grupului de control regional (Estonia, Polonia, Moldova)',
        detail:
          'Comparația sistematică demonstrează că reziliența nu depinde de absența agresiunii ruse, ci de digitalizarea debirocratizată, memoria istorică integrată și infrastructura civică densă.'
      }
    ],
    figures: [2, 3],
    stepNumbers: [5, 6, 7, 8, 9, 10],
    terminalSynthesis:
      'Capitolele 2 și 3 arată cum vectorul extern folosește dubla falsificare axiologică și controlul reflexiv pentru a deturna suferința instituțională internă către țapi ispășitori externi.'
  },
  {
    actNumber: 3,
    title: 'Actul III (Dinamica forțelor și buclele de sistem)',
    subtitle: 'Capitolele 4 și 5 (Filtrele Umbrei colective, matricea lui Cipolla și bifurcația Track A / Track B)',
    visualDirective:
      'Vizualizarea paralelă a buclelor vicioase de amplificare (marcate în roșu-vermilion #F01E1E) și a traiectoriilor adaptative de echilibrare (marcate în galben-ocru #E5B822) prin cele cinci filtre ale inconștientului cultural, matricea lui Cipolla și bifurcația de criză acută.',
    narrativeVoiceover:
      'Trecerea de la vulnerabilitatea pasivă la adeziunea activă la ideologia putinistă nu se produce direct, ci prin cinci filtre secvențiale de conversie psihodinamică. În momente de criză acută, acest ansamblu împinge grupul social într-o bifurcație decisivă între regresia în Ipotezele de Bază ale lui Bion (Track A) și mobilizarea Grupului de Lucru (Track B).',
    theoreticalPillars: [
      {
        stratum: 'C',
        concept: 'Cele cinci filtre ale Umbrei colective și inflația arhetipală',
        authors: 'Jung (1959, 1968a), Volkan (1997, 2004), von Franz (1995), Festinger (1957)',
        mechanism:
          'Rezonanța cu traumele neintegrate (F1), proiecția Umbrei (F2), inflația mesianică compensatorie (F3), contagiunea de câmp (F4) și blindarea identitară a disonanței (F5).'
      },
      {
        stratum: 'C',
        concept: 'Matricea comportamentală a lui Cipolla și neghiobia sistemică',
        authors: 'Cipolla (1976), Arendt (1951, 1963), Bion (1961)',
        mechanism:
          'Războiul cognitiv funcționează ca un convertor ecologic care împinge actorii din cadranele Neajutorat și Inteligent în cadranul Neghiob (distrugere reciprocă fără câștig propriu), exploatat de Bandiții strategici.'
      },
      {
        stratum: 'B',
        concept: 'Bifurcația neurocognitivă în criză acută (Track A vs. Track B)',
        authors: 'Bion (1961), Arnsten (2009), Luhmann (1979), Putnam (2000)',
        mechanism:
          'Sub șoc informațional acut, absența încrederii instituționale declanșează Track A (amigdală + baD / baF + colaps epistemic), în timp ce transparența și punțile sociale activează Track B (dlPFC + Work Group W).'
      }
    ],
    empiricalManifestations: [
      {
        polarity: 'tension',
        label: 'Bucla vicioasă (Track A — Regresie și auto-sabotaj)',
        detail:
          'Șoc acut -> hiperactivare amigdală -> căutarea unui salvator providențial (baD) sau a unui inamic absolut (baF) -> polarizare extremă -> paralizie decizională.'
      },
      {
        polarity: 'synthesis',
        label: 'Bucla adaptativă (Track B — Reziliență și Grup de Lucru)',
        detail:
          'Șoc acut -> comunicare instituțională calmă și verificabilă -> conservarea tonusului prefrontal (dlPFC) -> activarea Grupului de Lucru (W) -> cooperare bazată pe realitate.'
      },
      {
        polarity: 'synthesis',
        label: 'Sinteza matricială pe 5 dimensiuni (Tabelul 1)',
        detail:
          'Unificarea cauzală a arhitecturii statului, economiei atenției, dinamicii identitare, memoriei istorice și coeziunii sociale pe Straturile A, B și C.'
      }
    ],
    figures: [4, 5, 6],
    stepNumbers: [11, 12, 13, 14, 15],
    terminalSynthesis:
      'Capitolele 4 și 5 demonstrează că „neghiobia” din matricea lui Cipolla nu este un defect genetic sau intelectual, ci o stare funcțională indusă ecologic de frică, umilință instituțională și manipulare algoritmică.'
  },
  {
    actNumber: 4,
    title: 'Actul IV (Sinteza terminală și soluția structurală)',
    subtitle: 'Capitolul 6 (Protocolul secvențial în trei faze, guvernanța policentrică și modernitatea organică)',
    visualDirective:
      'Convergența tuturor liniilor cauzale în Protocolul secvențial obligatoriu în trei faze (Figura 7 și Tabelul 2), structurat pe determinanții Lalonde-Dever, guvernanța policentrică (Ostrom) și individuația colectivă (Edinger).',
    narrativeVoiceover:
      'Orice tentativă de alfabetizare media sau fact-checking aplicată unei populații aflate în epuizare alostatică și sub asediul algoritmilor de indignare este sortită eșecului. Reconstrucția rezilienței impune o ordine cauzală strictă în trei faze secvențiale care conduc de la decompresia neurobiologică la modernitatea organică.',
    theoreticalPillars: [
      {
        stratum: 'A',
        concept: 'Faza I (Stabilizare, decompresie alostatică și deparazitare algoritmică)',
        authors: 'McEwen (1998), Luhmann (1995), Zuboff (2019)',
        mechanism:
          'Orizont 0–18 luni (prerechizită obligatorie): simplificare administrativă radicală, interzicerea surprizelor fiscale și auditarea algoritmică a amplificării furiei.'
      },
      {
        stratum: 'B',
        concept: 'Faza II (Inoculare psihologică, deliberare și punți de capital social)',
        authors: 'McGuire (1964), Roozenbeek și van der Linden (2019, 2022), Putnam (2000), Volkan (2004)',
        mechanism:
          'Orizont 18–60 luni: prebunking la scară largă împotriva tehnicilor de manipulare, reconstrucția capitalului social de tip bridging și integrarea onestă a traumelor istorice.'
      },
      {
        stratum: 'C',
        concept: 'Faza III (Guvernanță policentrică, individuație colectivă și modernitate organică)',
        authors: 'Ostrom (1990, 2010), Edinger (1972), Kalaitzidis (2012), Lotman (1990)',
        mechanism:
          'Orizont 5–15 ani: subsidiaritate autentică, refacerea axei Ego colectiv–Sine cultural și depășirea istorică a anomaliei „formelor fără fond”.'
      }
    ],
    empiricalManifestations: [
      {
        polarity: 'tension',
        label: 'Eroarea intervențiilor inversate (Efectul de ricoșeu)',
        detail:
          'Campaniile de demontare a falsurilor lansate fără Faza I de decompresie alostatică sunt percepute de un creier hipervigilent drept propagandă a unui stat ostil.'
      },
      {
        polarity: 'synthesis',
        label: 'Imunitatea structurală la dubla falsificare axiologică',
        detail:
          'O comunitate care își exercită zilnic autonomia locală (Ostrom) și își integrează Umbra istorică nu mai poate fi sedusă de mirajul mesianic al tătucului salvator.'
      },
      {
        polarity: 'synthesis',
        label: 'Rezoluția modelului (Modernitatea organică)',
        detail:
          'Sinteza matură dintre instituțiile democratice transparente (Fondul funcțional) și matricea cultural-spirituală autohtonă (Forma vie și integrată).'
      }
    ],
    figures: [7],
    stepNumbers: [16, 17, 18, 19],
    terminalSynthesis:
      'Capitolul 6 închide arhitectura monografiei: apărarea cognitivă a României coincide cu însăși reconstrucția contractului social, a rezervei neurobiologice a cetățenilor și a modernității organice.'
  }
];

export const FourActsPresentation: React.FC<FourActsPresentationProps> = ({
  onSelectStepInReader
}) => {
  const [activeActNum, setActiveActNum] = useState<1 | 2 | 3 | 4>(1);
  const [selectedFigureInAct, setSelectedFigureInAct] = useState<number>(1);

  const currentAct =
    FOUR_ACTS_BLUEPRINT.find((a) => a.actNumber === activeActNum) || FOUR_ACTS_BLUEPRINT[0];

  const handleSelectAct = (actNum: 1 | 2 | 3 | 4) => {
    setActiveActNum(actNum);
    const targetAct = FOUR_ACTS_BLUEPRINT.find((a) => a.actNumber === actNum);
    if (targetAct && targetAct.figures.length > 0) {
      setSelectedFigureInAct(targetAct.figures[0]);
    }
  };

  const actSteps = ALL_SUBCHAPTER_STEPS.filter((s) =>
    currentAct.stepNumbers.includes(s.stepNumber)
  );

  return (
    <div className="space-y-6">
      {/* 4-Act Cinematic Progression Selector */}
      <div className="bg-[#F4F1EA] border-2 border-[#222426] p-5 sm:p-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 mb-5 border-b border-[#222426]">
          <div>
            <div className="text-xs font-mono text-[#6E7376] mb-1">
              Arhitectura de prezentare și dinamică vizuală (Secțiunea 3 din Master Blueprint)
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#222426]">
              Prezentare progresivă în 4 acte logice (Dezvăluire sistemică)
            </h2>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              disabled={activeActNum <= 1}
              onClick={() => handleSelectAct((activeActNum - 1) as 1 | 2 | 3 | 4)}
              className="px-3 py-2 text-xs font-mono border border-[#222426] bg-[#F6F5EE] hover:bg-[#E5B822]/20 disabled:opacity-40 disabled:pointer-events-none cursor-pointer flex items-center gap-1.5"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Actul anterior</span>
            </button>
            <button
              disabled={activeActNum >= 4}
              onClick={() => handleSelectAct((activeActNum + 1) as 1 | 2 | 3 | 4)}
              className="px-3.5 py-2 text-xs font-mono font-semibold border border-[#222426] bg-[#E5B822] hover:bg-[#D9A714] disabled:opacity-40 disabled:pointer-events-none cursor-pointer flex items-center gap-1.5"
            >
              <span>Actul următor</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* 4 Act Stepper Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {FOUR_ACTS_BLUEPRINT.map((act) => {
            const isSelected = act.actNumber === activeActNum;
            return (
              <button
                key={act.actNumber}
                onClick={() => handleSelectAct(act.actNumber)}
                className={`p-4 border-2 text-left transition-all cursor-pointer ${
                  isSelected
                    ? 'border-[#222426] bg-[#E5B822]/30'
                    : 'border-[#8C9BA5] bg-[#F6F5EE] hover:border-[#222426]'
                }`}
              >
                <div className="flex items-center justify-between text-xs font-mono text-[#6E7376] mb-1">
                  <span>Actul {act.actNumber} din 4</span>
                  <span>Fig. {act.figures.join(', ')}</span>
                </div>
                <div className="font-serif text-sm font-bold text-[#222426]">
                  {act.title}
                </div>
                <div className="text-[11px] text-[#6E7376] mt-1 line-clamp-2">
                  {act.subtitle}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Act Stage */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left 6 Cols: Narrative Voiceover, Dual Register Matrix & Subchapter Anchors */}
        <div className="lg:col-span-6 space-y-6">
          <div className="bg-[#F6F5EE] border-2 border-[#222426] p-6 space-y-5">
            <div className="border-b border-[#D0D5D9] pb-4">
              <div className="text-xs font-mono text-[#6E7376] mb-1">
                {currentAct.subtitle}
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#222426]">
                {currentAct.title}
              </h3>
            </div>

            {/* Visual & Narrative Directives */}
            <div className="p-4 bg-[#F4F1EA] border border-[#222426] space-y-3">
              <div>
                <div className="text-xs font-mono font-semibold text-[#6E7376]">
                  Directivă vizuală (Cadrul sistemic 2D)
                </div>
                <p className="text-xs sm:text-sm text-[#222426] leading-relaxed mt-0.5">
                  {currentAct.visualDirective}
                </p>
              </div>
              <div className="pt-3 border-t border-[#D0D5D9]">
                <div className="text-xs font-mono font-semibold text-[#222426]">
                  Registrul narativ și teza centrală a actului
                </div>
                <p className="font-serif text-sm sm:text-base text-[#222426] leading-relaxed mt-1">
                  {currentAct.narrativeVoiceover}
                </p>
              </div>
            </div>

            {/* Register 1: Theoretical & Conceptual Stratum */}
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-[#6E7376] mb-2.5">
                Registrul I (Stratul teoretic și mecanismele cauzale pe Straturile A, B, C)
              </div>
              <div className="space-y-3">
                {currentAct.theoreticalPillars.map((pillar, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-[#F4F1EA] border border-[#222426]"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-[#6E7376] mb-1">
                      <span className="font-bold text-[#222426]">
                        Stratul {pillar.stratum} · {pillar.concept}
                      </span>
                      <span>{pillar.authors}</span>
                    </div>
                    <p className="text-xs sm:text-sm text-[#222426] leading-relaxed mt-1">
                      {pillar.mechanism}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Register 2: Empirical & Dynamic Loops */}
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-[#6E7376] mb-2.5">
                Registrul II (Realitatea empirică, faliile de tensiune și buclele de reziliență)
              </div>
              <div className="space-y-3">
                {currentAct.empiricalManifestations.map((emp, idx) => (
                  <div
                    key={idx}
                    className={`p-4 border ${
                      emp.polarity === 'tension'
                        ? 'border-[#F01E1E] bg-[#F01E1E]/5'
                        : 'border-[#D9A714] bg-[#E5B822]/20'
                    }`}
                  >
                    <div
                      className={`text-xs font-mono font-bold mb-1 ${
                        emp.polarity === 'tension' ? 'text-[#F01E1E]' : 'text-[#222426]'
                      }`}
                    >
                      {emp.label}
                    </div>
                    <p className="text-xs sm:text-sm text-[#222426] leading-relaxed">
                      {emp.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Terminal Resolution of the Act */}
            <div className="p-4 bg-[#222426] text-[#F6F5EE]">
              <div className="text-xs font-mono text-[#E5B822] mb-1">
                Concluzie structurală a Actului {currentAct.actNumber}
              </div>
              <p className="font-serif text-sm leading-relaxed">
                {currentAct.terminalSynthesis}
              </p>
            </div>

            {/* Direct Jump to Full Verbatim Subchapters */}
            <div className="pt-4 border-t border-[#D0D5D9]">
              <div className="text-xs font-mono text-[#6E7376] mb-2.5">
                Secțiuni integrale din monografie aferente acestui act (selectați pentru lectura textului complet)
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {actSteps.map((st) => (
                  <button
                    key={st.id}
                    onClick={() => onSelectStepInReader(st.stepNumber)}
                    className="p-3 border border-[#222426] bg-[#F4F1EA] hover:bg-[#E5B822]/25 text-left transition-colors cursor-pointer flex items-center justify-between gap-2"
                  >
                    <div className="min-w-0">
                      <div className="text-[11px] font-mono text-[#6E7376]">
                        Pasul {st.stepNumber} · {st.code}
                      </div>
                      <div className="font-serif text-xs font-bold text-[#222426] truncate">
                        {st.title}
                      </div>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-[#222426] shrink-0" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right 6 Cols: Video Synthesis Box + Interactive Vector SVG Diagrams for the Active Act */}
        <div className="lg:col-span-6 space-y-6 lg:sticky lg:top-20">
          <VideoSynthesisBox allowCollapse={true} />

          {currentAct.figures.length > 1 && (
            <div className="bg-[#F4F1EA] border border-[#222426] p-3.5 flex flex-wrap items-center justify-between gap-2">
              <span className="text-xs font-mono text-[#222426]">
                Diagrame vectoriale asociate Actului {currentAct.actNumber}
              </span>
              <div className="flex flex-wrap gap-1.5">
                {currentAct.figures.map((fid) => (
                  <button
                    key={fid}
                    onClick={() => setSelectedFigureInAct(fid)}
                    className={`px-3 py-1 text-xs font-mono border cursor-pointer ${
                      selectedFigureInAct === fid
                        ? 'bg-[#222426] text-[#F6F5EE] border-[#222426] font-bold'
                        : 'bg-[#F6F5EE] text-[#222426] border-[#8C9BA5]'
                    }`}
                  >
                    Figura {fid}
                  </button>
                ))}
              </div>
            </div>
          )}

          <InteractiveFigures
            figureId={
              currentAct.figures.includes(selectedFigureInAct)
                ? selectedFigureInAct
                : currentAct.figures[0]
            }
            showSelector={false}
          />
        </div>
      </div>
    </div>
  );
};

import React, { useState, useRef, useEffect } from 'react';
import { GLOSSARY_CONCEPTS } from '../data/tablesAndReference';
import { BookOpen, X, ArrowRight } from 'lucide-react';

interface ContextualTooltipProps {
  conceptId: string;
  matchedText: string;
  onSelectConcept?: (conceptId: string) => void;
}

export const ContextualTooltip: React.FC<ContextualTooltipProps> = ({
  conceptId,
  matchedText,
  onSelectConcept
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLSpanElement>(null);

  const concept = GLOSSARY_CONCEPTS.find((c) => c.id === conceptId);

  useEffect(() => {
    if (!isOpen) return;
    const handleClickOutside = (e: MouseEvent | TouchEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isOpen]);

  if (!concept) {
    return <>{matchedText}</>;
  }

  return (
    <span
      ref={containerRef}
      className="relative inline"
      onMouseEnter={() => {
        if (typeof window !== 'undefined' && window.innerWidth >= 1024) {
          setIsOpen(true);
        }
      }}
      onMouseLeave={() => {
        if (typeof window !== 'undefined' && window.innerWidth >= 1024) {
          setIsOpen(false);
        }
      }}
    >
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen((prev) => !prev);
        }}
        className={`inline font-serif border-b border-dotted border-[#222426] transition-colors cursor-pointer rounded-none ${
          isOpen
            ? 'bg-[#E5B822] text-[#222426] font-semibold'
            : 'bg-transparent text-[#222426] hover:bg-[#E5B822]/20'
        }`}
        title={`Definiție contextuală (${concept.term})`}
      >
        {matchedText}
      </button>

      {isOpen && (
        <span
          role="dialog"
          aria-label={concept.term}
          className="fixed bottom-4 left-3 right-3 z-50 sm:absolute sm:bottom-full sm:left-1/2 sm:right-auto sm:-translate-x-1/2 sm:mb-2 sm:w-[340px] bg-[#222426] text-[#F6F5EE] border-2 border-[#E5B822] p-4 text-left font-sans normal-case block"
        >
          <span className="flex items-center justify-between gap-2 pb-2 mb-2 border-b border-[#6E7376]">
            <span className="text-[11px] font-mono font-bold text-[#E5B822]">
              Stratul {concept.stratum} · {concept.domain}
            </span>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setIsOpen(false);
              }}
              className="p-0.5 text-[#F6F5EE] hover:text-[#E5B822] cursor-pointer"
              aria-label="Închide explicația"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </span>

          <span className="font-serif text-sm font-bold text-[#F6F5EE] block leading-snug">
            {concept.term}
          </span>
          <span className="text-[11px] font-mono text-[#8C9BA5] block mt-0.5 mb-2">
            {concept.authors}
          </span>
          <span className="text-xs text-[#F6F5EE] leading-relaxed block mb-3">
            {concept.definition}
          </span>

          {onSelectConcept && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onSelectConcept(concept.id);
                setIsOpen(false);
              }}
              className="w-full px-3 py-1.5 text-[11px] font-mono font-semibold bg-[#E5B822] text-[#222426] hover:bg-[#E5B822]/85 transition-colors cursor-pointer flex items-center justify-between gap-2"
            >
              <span className="flex items-center gap-1.5">
                <BookOpen className="w-3 h-3 shrink-0" />
                <span>Deschide fișa în inspector</span>
              </span>
              <ArrowRight className="w-3 h-3 shrink-0" />
            </button>
          )}
        </span>
      )}
    </span>
  );
};

export interface GlossaryPatternRule {
  conceptId: string;
  regex: RegExp;
}

export const INLINE_GLOSSARY_PATTERNS: GlossaryPatternRule[] = [
  // Stratul A: Instituțional & Sociologic
  {
    conceptId: 'stratul-a',
    regex: /(?<!\p{L})(Stratul\s+A(?:\s*[:–-]\s*Arhitectura\s+instituțională)?|Stratului\s+A)(?!\p{L})/u
  },
  {
    conceptId: 'macro-micro-macro',
    regex: /(?<!\p{L})(Macro[–-]Micro[–-]Macro|bărc(?:ii|a)\s+lui\s+Coleman|barc(?:a|ii)\s+lui\s+Coleman)(?!\p{L})/iu
  },
  {
    conceptId: 'determinantii-lalonde-dever',
    regex: /(?<!\p{L})(determinanț(?:i|ii|ilor)\s+(?:sistemici\s+)?(?:ai\s+modelului\s+|modelului\s+)?Lalonde[–-]Dever|model(?:ul|ului)\s+Lalonde[–-]Dever|determinanț(?:ii|ilor)\s+sănătății\s+publice(?:\s+\(și\s+mintale\)|\s+și\s+mintale))(?!\p{L})/iu
  },
  {
    conceptId: 'inchidere-operationala',
    regex: /(?<!\p{L})(închider(?:e|ea|ii|i)\s+operațional(?:ă|e|i)|autonomi(?:e|a|ei)\s+funcțional(?:ă|e))(?!\p{L})/iu
  },
  {
    conceptId: 'forme-fara-fond',
    regex: /(?<!\p{L})(formelor\s+fără\s+fond|formele\s+fără\s+fond|forme\s+fără\s+fond|formă\s+fără\s+fond)(?!\p{L})/iu
  },
  {
    conceptId: 'institutii-extractive',
    regex: /(?<!\p{L})(instituți(?:i|ile|ilor)\s+extractive|ordin(?:e|ea|ii)\s+social(?:ă|e)\s+cu\s+acces\s+limitat|coridor(?:ul|ului)?\s+îngust)(?!\p{L})/iu
  },
  {
    conceptId: 'familism-amoral',
    regex: /(?<!\p{L})(familism(?:ul|ului)?\s+amoral|capital(?:ul|ului)?\s+social\s+de\s+punte)(?!\p{L})/iu
  },
  {
    conceptId: 'guvernanta-policentrica-ostrom',
    regex: /(?<!\p{L})(guvernanț(?:ă|a|ei|e)\s+policentric(?:ă|e))(?!\p{L})/iu
  },
  {
    conceptId: 'protocolul-secvential-trei-faze',
    regex: /(?<!\p{L})(protocol(?:ul|ului)?\s+secvențial(?:\s+în\s+trei\s+faze)?|protocol(?:ul|ului)?\s+în\s+trei\s+faze|protocol(?:ul|ului)?\s+de\s+reconstrucție\s+a\s+rezilienței(?:\s+cognitive(?:\s+și\s+instituționale|\s+societale)?)?)(?!\p{L})/iu
  },
  {
    conceptId: 'grup-control-regional',
    regex: /(?<!\p{L})(grup(?:ul|ului)?\s+de\s+control\s+regional)(?!\p{L})/iu
  },
  {
    conceptId: 'spalare-informationala',
    regex: /(?<!\p{L})(Doppelgänger|Matrioșka|rețea(?:ua|lei)\s+Pravda|information\s+laundering|spăl(?:are|area|ării)\s+informațional(?:ă|e)|recicl(?:are|area|ării)\s+(?:și\s+disimul(?:are|area|ării)\s+(?:a\s+)?)?(?:informațional(?:ă|e)|sursei\s+informaționale))(?!\p{L})/iu
  },
  {
    conceptId: 'sistema',
    regex: /(?<!\p{L})(rețea(?:ua|lei)\s+sistema|sistema)(?!\p{L})/iu
  },

  // Stratul B: Neurocognitiv, Cibernetic & Semiotic
  {
    conceptId: 'stratul-b',
    regex: /(?<!\p{L})(Stratul\s+B(?:\s*[:–-]\s*Procesarea\s+neurocognitivă)?|Stratului\s+B)(?!\p{L})/u
  },
  {
    conceptId: 'al-saselea-domeniu',
    regex: /(?<!\p{L})(al\s+șaselea\s+domeniu(?:\s+operațional)?|spați(?:ul|ului)\s+cognitiv)(?!\p{L})/iu
  },
  {
    conceptId: 'uzura-alostatica',
    regex: /(?<!\p{L})((?:uzur|sarcin)(?:ă|ii|a)\s+alostatic(?:ă|e)|alostazi(?:e|a|ei))(?!\p{L})/iu
  },
  {
    conceptId: 'axa-hpa-dlpf',
    regex: /(?<!\p{L})(ax(?:a|ei)\s+(?:hipotalamo-hipofizo-suprarenalian(?:ă|e)|HPA)|rețea(?:ua|lei)\s+de\s+detecție\s+a\s+relevanței|triad(?:a|ei)\s+rețelelor\s+cerebrale|cortex(?:ul|ului)?\s+prefrontal\s+dorsolateral|dlPFC)(?!\p{L})/iu
  },
  {
    conceptId: 'bucla-ooda',
    regex: /(?<!\p{L})(bucl(?:a|ei)\s+(?:decizional(?:ă|e)\s+)?OODA|faz(?:a|ei)\s+de\s+Orientare)(?!\p{L})/iu
  },
  {
    conceptId: 'control-reflexiv-rang-secund',
    regex: /(?<!\p{L})(control(?:ul|ului)?\s+reflexiv(?:\s+de\s+rang\s+secund)?|scurtătur(?:ă|a|i|ii)\s+predictiv(?:ă|e)|principi(?:ul|ului)\s+energiei\s+libere|Rang(?:ul|ului)?\s+2\+\s+de\s+reflexivitate(?:\s+strategică)?)(?!\p{L})/iu
  },
  {
    conceptId: 'inchidere-cognitiva-seizing-freezing',
    regex: /(?<!\p{L})(nevoi(?:a|i)\s+de\s+închidere\s+cognitivă|închider(?:e|ea|ii)\s+cognitiv(?:ă|e)|îngheț(?:are|area|ării)\s+epistemic(?:ă|e)|seizing|freezing)(?!\p{L})/iu
  },
  {
    conceptId: 'capturare-dopaminergica',
    regex: /(?<!\p{L})(captur(?:are|area|ării)\s+(?:adictiv(?:ă|e)\s+a\s+circuitelor\s+)?dopaminergic(?:ă|e)|eroar(?:ea|ii)\s+de\s+predicție\s+a\s+recompensei|desensibiliz(?:are|area|ării)\s+receptorilor\s+(?:dopaminergici\s+(?:postsinaptici\s+)?)?D2)(?!\p{L})/iu
  },
  {
    conceptId: 'sistemele-etice-lefebvre',
    regex: /(?<!\p{L})(prim(?:ul|ului)\s+sistem\s+etic|cel(?:ui)?\s+de-al\s+doilea\s+sistem\s+etic|al\s+doilea\s+sistem\s+etic|sistemel(?:e|or)\s+etice\s+(?:ale\s+lui\s+)?Lefebvre|algebr(?:a|ei)\s+moral(?:ă|e)\s+a\s+lui\s+Lefebvre)(?!\p{L})/iu
  },
  {
    conceptId: 'mediere-ternara-vs-binara',
    regex: /(?<!\p{L})((?:semiotic(?:ă|a|ii)|semioz(?:ă|a|ei)|logic(?:ă|a|ii))\s+binar(?:ă|e)\s+a\s+anihilării|semioz(?:ă|a|ei)\s+ternar(?:ă|e)|medier(?:e|ea|ii)\s+(?:semiotic(?:ă|e)\s+)?ternar(?:ă|e))(?!\p{L})/iu
  },
  {
    conceptId: 'dubla-falsificare-axiologica',
    regex: /(?<!\p{L})(dubl(?:ă|a|ei)\s+falsific(?:are|ări)\s+axiologic(?:ă|e))(?!\p{L})/iu
  },
  {
    conceptId: 'antilumea-epstein',
    regex: /(?<!\p{L})(Russkii\s+Antimir|Antilumi(?:i|e)|Antilumea)(?!\p{L})/u
  },
  {
    conceptId: 'starea-bobok',
    regex: /(?<!\p{L})(stării\s+Bobok|starea\s+Bobok)(?!\p{L})/u
  },
  {
    conceptId: 'russkii-mir-etnofiletism',
    regex: /(?<!\p{L})(Russkii\s+Mir|erezi(?:a|ei)\s+etnofiletist(?:ă|e)|etnofiletism(?:ul|ului)?)(?!\p{L})/iu
  },
  {
    conceptId: 'triada-ilin-gumiliov-dughin',
    regex: /(?<!\p{L})(Ivan\s+Ilin|Lev\s+Gumiliov|Aleksandr\s+Dughin|Ilin,\s+Gumiliov\s+și\s+Dughin)(?!\p{L})/iu
  },
  {
    conceptId: 'cognitia-protectoare-a-identitatii',
    regex: /(?<!\p{L})(cogniți(?:a|ei)\s+protectoar(?:e|ii)\s+a\s+identității|proces(?:are|area|ării)\s+defensiv(?:ă|e)\s+motivat(?:ă|e)\s+de\s+protejarea\s+identității(?:\s+de\s+grup)?|raționaliz(?:are|area|ării)\s+motivat(?:ă|e)(?:\s+a\s+Sistemului\s+2)?|Motivated\s+System\s+2\s+Reasoning|gândir(?:e|ea|ii)\s+activ[–\s-]deschis(?:ă|e)|gândir(?:e|ea|ii)\s+deschis(?:ă|e)\s+activ|actively\s+open[–-]minded\s+thinking|smereni(?:e|a|ei)\s+epistemic(?:ă|e)|disraționalit(?:ate|atea|ății)|dysrationalia|Identity[–-]Protective\s+Cognition)(?!\p{L})/iu
  },
  {
    conceptId: 'bifurcare-track-a-track-b',
    regex: /(?<!\p{L})(Trase(?:ul|ului)\s+reactiv\s+dezadaptativ|Trase(?:ul|ului)\s+deliberativ\s+adaptativ|Trase(?:ul|ului)\s+A\s+reactiv|Trase(?:ul|ului)\s+B\s+deliberativ|Traseul\s+A|Traseul\s+B|Track\s+A|Track\s+B)(?!\p{L})/iu
  },
  {
    conceptId: 'prebunking-inoculare',
    regex: /(?<!\p{L})(prebunking|pregătir(?:ea|e|ii)\s+psihocognitiv(?:ă|e)\s+preventiv(?:ă|e)|teori(?:a|ei)\s+(?:inoculării|rezistenței\s+la\s+persuasiune)|inocular(?:e|ea|ii)\s+psihologic(?:ă|e))(?!\p{L})/iu
  },
  {
    conceptId: 'curba-uitarii-ebbinghaus',
    regex: /(?<!\p{L})(curb(?:a|ei)\s+uitării(?:\s+a\s+lui\s+(?:Hermann\s+)?Ebbinghaus)?|curb(?:a|ei)\s+lui\s+Ebbinghaus|consolidar(?:e|ea|ii)\s+mnezic(?:ă|e)(?:\s+(?:spațiat(?:ă|e)|Ebbinghaus))?)(?!\p{L})/iu
  },
  {
    conceptId: 'contagiune-complexa',
    regex: /(?<!\p{L})(contagiun(?:e|ea|ii)\s+(?:social(?:ă|e)\s+)?complex(?:ă|e))(?!\p{L})/iu
  },
  {
    conceptId: 'model-collapse-mad',
    regex: /(?<!\p{L})(Model\s+Collapse|Model\s+Autophagy\s+Disorder|colaps(?:ul|ului)?\s+modelelor\s+generative|autofagi(?:a|ei)\s+modelelor\s+generative)(?!\p{L})/iu
  },
  {
    conceptId: 'abaissement-du-niveau-mental',
    regex: /(?<!\p{L})(abaissement\s+du\s+niveau\s+mental|scăder(?:e|ea|ii)\s+tensiunii\s+conștiente)(?!\p{L})/iu
  },
  {
    conceptId: 'matricea-cipolla',
    regex: /(?<!\p{L})(matrice(?:a|i)\s+(?:comportamental(?:ă|e)\s+)?(?:a\s+|ale\s+)?lui\s+(?:Carlo\s+M\.\s+)?Cipolla|matricea\s+lui\s+Cipolla|scont(?:are|area|ării)\s+hiperbolic(?:ă|e)(?:\s+a\s+viitorului)?|revanș(?:ă|a|ei)\s+simbolic(?:ă|e)\s+(?:autodistructiv(?:ă|e)|punitiv(?:ă|e))|spiteful\s+punishment)(?!\p{L})/iu
  },

  // Stratul C: Psihodinamic, Arhetipal & Axiologic
  {
    conceptId: 'stratul-c',
    regex: /(?<!\p{L})(Stratul\s+C(?:\s*[:–-]\s*Inconștientul\s+cultural)?|Stratului\s+C)(?!\p{L})/u
  },
  {
    conceptId: 'filtrul-axiologic',
    regex: /(?<!\p{L})(filtr(?:ul|ului)?\s+(?:moral\s+)?(?:creștin[–-]secular|axiologic(?:\s+și\s+normativ)?)|Imago\s+Dei)(?!\p{L})/iu
  },
  {
    conceptId: 'axa-ego-sine',
    regex: /(?<!\p{L})(ax(?:a|ei)\s+Ego[–-]Sine)(?!\p{L})/iu
  },
  {
    conceptId: 'persona-si-umbra',
    regex: /(?<!\p{L})(Person(?:a|ei)\s+instituțional(?:ă|e)(?:\s+mimetic(?:ă|e))?|Person(?:a|ei)\s+mimetic(?:ă|e)|Umbr(?:a|ei)\s+colectiv(?:ă|e))(?!\p{L})/iu
  },
  {
    conceptId: 'arhetipul-trickster',
    regex: /(?<!\p{L})(arhetip(?:ul|ului)?\s+Trickster(?:ului|-ului)?|Trickster(?:ului|-ului)?)(?!\p{L})/iu
  },
  {
    conceptId: 'enantiodromie',
    regex: /(?<!\p{L})(enantiodromi(?:e|a|ei))(?!\p{L})/iu
  },
  {
    conceptId: 'trauma-aleasa',
    regex: /(?<!\p{L})(traum(?:a|ă|e|ei)\s+ale(?:asă|se)|incapacitat(?:ea|ii)\s+de\s+a\s+ține\s+doliu)(?!\p{L})/iu
  },
  {
    conceptId: 'proiectie-paranoida',
    regex: /(?<!\p{L})(proiecți(?:a|e|ei)\s+paranoid(?:ă|e)|țap(?:ul|ului)?\s+ispășitor)(?!\p{L})/iu
  },
  {
    conceptId: 'identificarea-cu-agresorul',
    regex: /(?<!\p{L})(identific(?:are|area|ării)\s+cu\s+agresorul(?:\s+geopolitic)?|angoas(?:ă|a|ei)\s+existențial(?:ă|e)\s+de\s+abandon)(?!\p{L})/iu
  },
  {
    conceptId: 'aparare-maniacala-izolationism',
    regex: /(?<!\p{L})(apăr(?:are|area|ării)\s+maniacal(?:ă|e)|(?:suveranit|neutralit)(?:ate|atea|ății)\s+izolaționist(?:ă|e))(?!\p{L})/iu
  },
  {
    conceptId: 'capacitate-negativa-bion',
    regex: /(?<!\p{L})(capacit(?:ate|atea|ății|ăți)\s+negativ(?:ă|e))(?!\p{L})/iu
  },
  {
    conceptId: 'ipoteze-baza-grup-lucru-bion',
    regex: /(?<!\p{L})(ipotezel(?:e|or)\s+de\s+bază(?:\s+ale\s+lui\s+Bion)?|ipotez(?:a|ei)\s+de\s+bază\s+a\s+(?:dependenței|împerecherii\s+mesianice)|ipotez(?:a|ei)\s+de\s+bază\s+luptă-sau-fugi|grup(?:ul|ului)?\s+de\s+lucru)(?!\p{L})/iu
  },
  {
    conceptId: 'puer-aeternus',
    regex: /(?<!\p{L})(Puer\s+Aeternus|stat(?:ul|ului)?\s+paternalist\s+tutelar)(?!\p{L})/iu
  },
  {
    conceptId: 'functia-transcendenta',
    regex: /(?<!\p{L})(funcți(?:a|ei)\s+transcendent(?:ă|e))(?!\p{L})/iu
  },
  {
    conceptId: 'individuare-colectiva',
    regex: /(?<!\p{L})(individu(?:are|area|ării)\s+colectiv(?:ă|e))(?!\p{L})/iu
  },
  {
    conceptId: 'modernitate-organica',
    regex: /(?<!\p{L})(modernit(?:ate|atea|ății)\s+organic(?:ă|e))(?!\p{L})/iu
  },
  {
    conceptId: 'proairesis',
    regex: /(?<!\p{L})(proairesis|dreapt(?:ă|a)\s+socoteală)(?!\p{L})/iu
  }
];


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
        className={`inline font-serif border-b-2 border-dotted transition-colors cursor-pointer px-0.5 rounded-none ${
          isOpen
            ? 'bg-[#E5B822] text-[#222426] border-[#222426] font-semibold'
            : 'border-[#222426] bg-[#E5B822]/20 text-[#222426] hover:bg-[#E5B822]/40'
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
  {
    conceptId: 'uzura-alostatica',
    regex: /\b(uzur(?:ă|ii|a)\s+alostatic(?:ă|e))\b/i
  },
  {
    conceptId: 'inchidere-operationala',
    regex: /\b(închider(?:e|ea|ii)\s+operațional(?:ă|e))\b/i
  },
  {
    conceptId: 'control-reflexiv-rang-secund',
    regex: /\b(control(?:ul|ului)?\s+reflexiv\s+de\s+rang\s+secund)\b/i
  },
  {
    conceptId: 'enantiodromie',
    regex: /\b(enantiodromi(?:e|a|ei))\b/i
  },
  {
    conceptId: 'contagiune-complexa',
    regex: /\b(contagiun(?:e|ea|ii)\s+(?:social(?:ă|e)\s+)?complex(?:ă|e))\b/i
  },
  {
    conceptId: 'puer-aeternus',
    regex: /\b(Puer\s+Aeternus)\b/
  },
  {
    conceptId: 'filtrul-axiologic',
    regex: /\b(Imago\s+Dei)\b/
  },
  {
    conceptId: 'familism-amoral',
    regex: /\b(familism(?:ul|ului)?\s+amoral)\b/i
  },
  {
    conceptId: 'capacitate-negativa-bion',
    regex: /\b(capacitat(?:e|ea|ății)\s+negativ(?:ă|e))\b/i
  },
  {
    conceptId: 'mediere-ternara-vs-binara',
    regex: /\b(semiotic(?:ă|a|ii)\s+binar(?:ă|e)\s+a\s+anihilării|medier(?:e|ea|ii)\s+(?:semiotic(?:ă|e)\s+)?ternar(?:ă|e))\b/i
  },
  {
    conceptId: 'forme-fara-fond',
    regex: /\b(formelor\s+fără\s+fond|forme\s+fără\s+fond)\b/i
  },
  {
    conceptId: 'antilumea-epstein',
    regex: /\b(Russkii\s+Antimir|Antilumi(?:i|e)|Antilumea)\b/
  },
  {
    conceptId: 'starea-bobok',
    regex: /\b(stării\s+Bobok|starea\s+Bobok)\b/
  },
  {
    conceptId: 'model-collapse-mad',
    regex: /\b(Model\s+Collapse|Model\s+Autophagy\s+Disorder)\b/
  },
  {
    conceptId: 'prebunking-inoculare',
    regex: /\b(prebunking)\b/i
  },
  {
    conceptId: 'guvernanta-policentrica-ostrom',
    regex: /\b(guvernanț(?:ă|a|ei)\s+policentric(?:ă|e))\b/i
  },
  {
    conceptId: 'proairesis',
    regex: /\b(proairesis)\b/i
  }
];

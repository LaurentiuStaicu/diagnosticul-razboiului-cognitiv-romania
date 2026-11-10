import React, { useState } from 'react';
import { Copy, Check, BookOpen } from 'lucide-react';

interface CitationBoxProps {
  className?: string;
}

export const CitationBox: React.FC<CitationBoxProps> = ({ className = '' }) => {
  const [copiedFormat, setCopiedFormat] = useState<'apa' | 'bibtex' | null>(null);

  const apaCitation =
    'Staicu, L. (2026). Diagnosticul războiului cognitiv în România: Arhitectura instituțională, neurocognitivă și culturală a vulnerabilității și rezilienței societale în fața operațiunilor informaționale ruse și a ideologiei putiniste (Versiunea 1.0). Monografie științifică. https://laurentiustaicu.github.io/diagnosticul-razboiului-cognitiv-romania/';

  const bibtexCitation = `@monograph{staicu2026diagnosticul,
  author    = {Staicu, Laurențiu},
  title     = {Diagnosticul războiului cognitiv în România: Arhitectura instituțională, neurocognitivă și culturală a vulnerabilității și rezilienței societale în fața operațiunilor informaționale ruse și a ideologiei putiniste},
  year      = {2026},
  version   = {1.0},
  publisher = {Monografie Științifică Integrată},
  url       = {https://laurentiustaicu.github.io/diagnosticul-razboiului-cognitiv-romania/}
}`;

  const handleCopy = (text: string, format: 'apa' | 'bibtex') => {
    navigator.clipboard.writeText(text);
    setCopiedFormat(format);
    setTimeout(() => setCopiedFormat(null), 2500);
  };

  return (
    <div className={`bg-[#F4F1EA] border border-[#222426] p-4 sm:p-5 space-y-4 ${className}`}>
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#D0D5D9] pb-3">
        <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#222426]">
          <BookOpen className="w-4 h-4 text-[#222426] shrink-0" />
          <span className="uppercase tracking-wider">Cum citezi această lucrare</span>
        </div>
        <div className="flex items-center gap-2 text-xs font-mono">
          <button
            type="button"
            onClick={() => handleCopy(apaCitation, 'apa')}
            className={`px-2.5 py-1 border transition-colors cursor-pointer flex items-center gap-1.5 ${
              copiedFormat === 'apa'
                ? 'bg-[#E5B822] text-[#222426] border-[#222426] font-bold'
                : 'bg-[#F6F5EE] text-[#222426] border-[#8C9BA5] hover:border-[#222426]'
            }`}
          >
            {copiedFormat === 'apa' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copiedFormat === 'apa' ? 'Copiat (APA 7)' : 'Copiază APA 7'}</span>
          </button>

          <button
            type="button"
            onClick={() => handleCopy(bibtexCitation, 'bibtex')}
            className={`px-2.5 py-1 border transition-colors cursor-pointer flex items-center gap-1.5 ${
              copiedFormat === 'bibtex'
                ? 'bg-[#E5B822] text-[#222426] border-[#222426] font-bold'
                : 'bg-[#F6F5EE] text-[#222426] border-[#8C9BA5] hover:border-[#222426]'
            }`}
          >
            {copiedFormat === 'bibtex' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copiedFormat === 'bibtex' ? 'Copiat (BibTeX)' : 'Copiază BibTeX'}</span>
          </button>
        </div>
      </div>

      <div className="space-y-3 text-xs sm:text-sm">
        <div>
          <div className="text-[11px] font-mono text-[#6E7376] uppercase tracking-wider mb-1">
            Format APA 7th Edition:
          </div>
          <p className="font-serif text-[#222426] bg-[#F6F5EE] border border-[#D0D5D9] p-3 leading-relaxed select-all">
            {apaCitation}
          </p>
        </div>

        <div>
          <div className="text-[11px] font-mono text-[#6E7376] uppercase tracking-wider mb-1">
            Format BibTeX:
          </div>
          <pre className="font-mono text-[11px] sm:text-xs text-[#222426] bg-[#F6F5EE] border border-[#D0D5D9] p-3 overflow-x-auto whitespace-pre select-all">
            {bibtexCitation}
          </pre>
        </div>
      </div>
    </div>
  );
};

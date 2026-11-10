import React, { useState } from 'react';
import { ALL_SUBCHAPTER_STEPS, GLOSSARY_CONCEPTS, BIBLIOGRAPHY_DATA } from '../data/tablesAndReference';
import { Search, X, ArrowRight, FileText, ExternalLink } from 'lucide-react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateToStep: (stepNumber: number) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onNavigateToStep
}) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const q = query.toLowerCase().trim();

  const matchingSteps = q
    ? ALL_SUBCHAPTER_STEPS.filter(
        (step) =>
          step.title.toLowerCase().includes(q) ||
          step.summaryThesis.toLowerCase().includes(q) ||
          step.paragraphs.some((p) => p.toLowerCase().includes(q))
      )
    : ALL_SUBCHAPTER_STEPS.slice(0, 5);

  const matchingConcepts = q
    ? GLOSSARY_CONCEPTS.filter(
        (c) =>
          c.term.toLowerCase().includes(q) ||
          c.definition.toLowerCase().includes(q) ||
          c.authors.toLowerCase().includes(q)
      ).slice(0, 6)
    : [];

  const matchingBib = q
    ? BIBLIOGRAPHY_DATA.filter((b) => b.fullCitation.toLowerCase().includes(q)).slice(0, 5)
    : [];

  return (
    <div className="fixed inset-0 z-50 bg-[#222426]/70 flex items-start justify-center p-4 sm:p-8 overflow-y-auto">
      <div className="bg-[#F6F5EE] border-2 border-[#222426] w-full max-w-3xl p-5 sm:p-6 my-8">
        <div className="flex items-center justify-between gap-4 pb-4 border-b border-[#222426]">
          <div>
            <div className="text-xs font-mono text-[#6E7376]">
              Căutare deterministă în textul integral, glosar și bibliografie
            </div>
            <h3 className="font-serif text-lg font-bold text-[#222426]">
              Explorare rapidă în monografie
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 border border-[#222426] bg-[#F4F1EA] hover:bg-[#E5B822]/30 transition-colors cursor-pointer"
            aria-label="Închide căutarea"
          >
            <X className="w-4 h-4 text-[#222426]" />
          </button>
        </div>

        <div className="relative my-4">
          <Search className="w-4 h-4 text-[#6E7376] absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Introduceți un termen, concept sau autor (ex. Luhmann, OODA, alostazie, Bobok, Cipolla, Bion)..."
            className="w-full pl-10 pr-4 py-3 text-sm bg-[#F4F1EA] border-2 border-[#222426] text-[#222426] placeholder:text-[#6E7376] focus:outline-none focus:bg-[#F6F5EE]"
          />
        </div>

        <div className="space-y-5 max-h-[60vh] overflow-y-auto pr-1">
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-[#6E7376] mb-2">
              {q ? `Capitole și subcapitole găsite (${matchingSteps.length})` : 'Pași recomandați pentru parcurgere'}
            </div>
            <div className="space-y-2">
              {matchingSteps.map((step) => (
                <button
                  key={step.id}
                  onClick={() => {
                    onNavigateToStep(step.stepNumber);
                    onClose();
                  }}
                  className="w-full text-left p-3.5 border border-[#222426] bg-[#F4F1EA] hover:bg-[#E5B822]/20 transition-colors flex items-start justify-between gap-3 cursor-pointer"
                >
                  <div>
                    <div className="text-xs font-mono text-[#6E7376]">
                      Pasul {step.stepNumber} din 19 · {step.actTitle}
                    </div>
                    <div className="font-serif text-sm font-bold text-[#222426] mt-0.5">
                      {step.title}
                    </div>
                    <p className="text-xs text-[#6E7376] mt-1 line-clamp-2">
                      {step.summaryThesis}
                    </p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#222426] shrink-0 mt-1" />
                </button>
              ))}
            </div>
          </div>

          {matchingConcepts.length > 0 && (
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-[#6E7376] mb-2">
                Concepte din glosar ({matchingConcepts.length})
              </div>
              <div className="space-y-2">
                {matchingConcepts.map((c) => (
                  <div key={c.id} className="p-3 border border-[#8C9BA5] bg-[#F6F5EE]">
                    <div className="text-xs font-mono text-[#6E7376]">
                      Stratul {c.stratum} · {c.authors}
                    </div>
                    <div className="font-serif text-sm font-bold text-[#222426]">{c.term}</div>
                    <p className="text-xs text-[#222426] mt-1">{c.definition}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {matchingBib.length > 0 && (
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-[#6E7376] mb-2">
                Referințe bibliografice ({matchingBib.length})
              </div>
              <div className="space-y-2">
                {matchingBib.map((b) => (
                  <div key={b.id} className="p-3 border border-[#8C9BA5] bg-[#F6F5EE] text-xs font-serif text-[#222426]">
                    {b.fullCitation}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export const PdfDocumentView: React.FC = () => {
  const pdfPath = `${import.meta.env.BASE_URL}assets/aistudio/Diagnosticul_R_zboiului_Cognitiv__n_Rom_nia_14a52ac0.pdf`;

  return (
    <div className="space-y-5">
      <div className="bg-[#F4F1EA] border border-[#222426] p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="text-xs font-mono text-[#6E7376] mb-1">
            Sursă primară verificată (47 pagini, Versiunea 1.0)
          </div>
          <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#222426]">
            Documentul original în format PDF (Diagnosticul războiului cognitiv în România)
          </h2>
          <p className="text-xs sm:text-sm text-[#6E7376] mt-1">
            Toate textele, diagramele, tabelele și referințele bibliografice din platformă sunt extrase integral din această monografie.
          </p>
        </div>

        <a
          href={pdfPath}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold bg-[#222426] text-[#F6F5EE] border border-[#222426] hover:bg-[#2C3539] transition-colors whitespace-nowrap shrink-0"
        >
          <FileText className="w-4 h-4" />
          <span>Descărcare PDF original</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

      <div className="bg-[#F4F1EA] border-2 border-[#222426] p-2 h-[80vh]">
        <iframe
          src={pdfPath}
          title="Diagnosticul războiului cognitiv în România (PDF)"
          className="w-full h-full border border-[#8C9BA5] bg-[#F6F5EE]"
        />
      </div>
    </div>
  );
};

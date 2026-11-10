import React, { useState } from 'react';
import { ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';

interface VideoSynthesisBoxProps {
  compact?: boolean;
  allowCollapse?: boolean;
}

export const VideoSynthesisBox: React.FC<VideoSynthesisBoxProps> = ({
  compact = false,
  allowCollapse = false
}) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const embedUrl = 'https://www.youtube.com/embed/DgeyWNYP80c?si=e4yihOKlropuTaI8&rel=0';
  const directUrl = 'https://youtu.be/DgeyWNYP80c?si=e4yihOKlropuTaI8';

  return (
    <section className="bg-[#F4F1EA] border-2 border-[#222426] p-4 sm:p-5">
      {/* Header Bar */}
      <div className="flex items-start justify-between gap-3 pb-3 mb-3 border-b border-[#222426]">
        <div>
          <div className="text-[11px] font-mono text-[#6E7376]">
            Sinteză audiovizuală realizată pe baza monografiei (Modul cinematic)
          </div>
          <h3 className="font-serif text-base sm:text-lg font-bold text-[#222426] mt-0.5">
            Prezentare video a diagnosticului războiului cognitiv în România
          </h3>
        </div>

        {allowCollapse && (
          <button
            type="button"
            onClick={() => setIsCollapsed((prev) => !prev)}
            className="px-2.5 py-1 text-xs font-mono border border-[#222426] bg-[#F6F5EE] hover:bg-[#E5B822]/30 transition-colors cursor-pointer flex items-center gap-1 whitespace-nowrap shrink-0"
          >
            <span>{isCollapsed ? 'Afișează video' : 'Restrânge'}</span>
            {isCollapsed ? (
              <ChevronDown className="w-3.5 h-3.5" />
            ) : (
              <ChevronUp className="w-3.5 h-3.5" />
            )}
          </button>
        )}
      </div>

      {!isCollapsed && (
        <div className="space-y-3">
          {/* 16:9 Architectural Frame */}
          <div className="relative w-full aspect-video border-2 border-[#222426] bg-[#222426] overflow-hidden">
            <iframe
              src={embedUrl}
              title="Prezentare video (Diagnosticul războiului cognitiv în România)"
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>

          {/* Editorial Caption & Direct YouTube Link */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-1 text-xs text-[#6E7376]">
            {!compact && (
              <p className="font-serif italic text-[#2C3539] leading-relaxed">
                Expunere sintetică a arhitecturii cauzale pe trei straturi (Stratul A instituțional, Stratul B neurocognitiv și semiotic, Stratul C inconștientul cultural).
              </p>
            )}
            <a
              href={directUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-[#222426] hover:text-[#D9A714] underline underline-offset-4 whitespace-nowrap shrink-0"
            >
              <span>Deschide pe YouTube</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </section>
  );
};

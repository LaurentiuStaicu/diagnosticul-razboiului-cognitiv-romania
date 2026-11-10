import React, { useState } from 'react';
import { Link2, Check } from 'lucide-react';

interface SocialShareButtonsProps {
  url?: string;
  title?: string;
  compact?: boolean;
  label?: string;
}

const CANONICAL_BASE_URL =
  'https://laurentiustaicu.github.io/diagnosticul-razboiului-cognitiv-romania/';

export const SocialShareButtons: React.FC<SocialShareButtonsProps> = ({
  url,
  title = 'Diagnosticul războiului cognitiv în România (Versiunea 1.0, Arhitectura instituțională, neurocognitivă și culturală a vulnerabilității și rezilienței societale)',
  compact = false,
  label = 'Distribuie'
}) => {
  const [copied, setCopied] = useState(false);

  const resolvedUrl =
    url ||
    (typeof window !== 'undefined' && window.location.hostname.includes('github.io')
      ? window.location.href
      : CANONICAL_BASE_URL);

  const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
    resolvedUrl
  )}`;
  const xShareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
    resolvedUrl
  )}&text=${encodeURIComponent(title)}`;
  const whatsappShareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(
    `${title}\n${resolvedUrl}`
  )}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(resolvedUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <div className="flex flex-wrap items-center gap-1.5">
      {label && (
        <span className="text-xs font-mono text-[#6E7376] mr-1 whitespace-nowrap shrink-0">
          {label}
        </span>
      )}

      {/* Facebook Share */}
      <a
        href={facebookShareUrl}
        target="_blank"
        rel="noopener noreferrer"
        title="Distribuie pe Facebook"
        className="px-2.5 py-1 text-xs font-mono border border-[#222426] bg-[#F6F5EE] text-[#222426] hover:bg-[#E5B822] transition-colors inline-flex items-center gap-1.5 whitespace-nowrap shrink-0"
      >
        <svg className="w-3.5 h-3.5 fill-current shrink-0" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
        </svg>
        <span>Facebook</span>
      </a>

      {/* X (Twitter) Share */}
      <a
        href={xShareUrl}
        target="_blank"
        rel="noopener noreferrer"
        title="Distribuie pe X (Twitter)"
        className="px-2.5 py-1 text-xs font-mono border border-[#222426] bg-[#F6F5EE] text-[#222426] hover:bg-[#E5B822] transition-colors inline-flex items-center gap-1.5 whitespace-nowrap shrink-0"
      >
        <svg className="w-3 h-3 fill-current shrink-0" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
        <span>X</span>
      </a>

      {/* WhatsApp Share */}
      <a
        href={whatsappShareUrl}
        target="_blank"
        rel="noopener noreferrer"
        title="Distribuie pe WhatsApp"
        className="px-2.5 py-1 text-xs font-mono border border-[#222426] bg-[#F6F5EE] text-[#222426] hover:bg-[#E5B822] transition-colors inline-flex items-center gap-1.5 whitespace-nowrap shrink-0"
      >
        <svg className="w-3.5 h-3.5 fill-current shrink-0" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12 0 2.625.846 5.059 2.284 7.033l-1.492 5.449 5.601-1.469c1.914 1.262 4.205 1.987 6.607 1.987 6.627 0 12-5.373 12-12s-5.373-12-12-12z" />
        </svg>
        <span>WhatsApp</span>
      </a>

      {/* Copy Link Button */}
      {!compact && (
        <button
          type="button"
          onClick={handleCopy}
          title="Copiază linkul în clipboard"
          className="px-2.5 py-1 text-xs font-mono border border-[#222426] bg-[#F4F1EA] text-[#222426] hover:bg-[#E5B822]/40 transition-colors cursor-pointer inline-flex items-center gap-1.5 whitespace-nowrap shrink-0"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-[#222426]" />
              <span>Link copiat</span>
            </>
          ) : (
            <>
              <Link2 className="w-3.5 h-3.5 text-[#6E7376]" />
              <span>Copiază link</span>
            </>
          )}
        </button>
      )}
    </div>
  );
};

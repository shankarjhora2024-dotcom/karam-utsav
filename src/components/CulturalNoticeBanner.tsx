import React, { useState } from 'react';
import { AlertCircle, ChevronDown, ChevronUp, Info, ShieldAlert, Sparkles, X } from 'lucide-react';

export const CulturalNoticeBanner: React.FC = () => {
  const [dismissed, setDismissed] = useState(false);
  const [expanded, setExpanded] = useState(false);

  if (dismissed) return null;

  return (
    <div className="bg-[#fef9c3] border-b border-[#fde047] text-[#713f12] px-4 py-2.5 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-2 text-xs">
        <div className="flex items-start md:items-center gap-2.5">
          <Info className="w-4 h-4 text-[#b45309] shrink-0 mt-0.5 md:mt-0" />
          <div>
            <span className="font-bold text-[#854d0e] uppercase tracking-wider text-[10px] mr-2 px-1.5 py-0.5 bg-[#fef08a] rounded border border-[#facc15]">
              Cultural Note
            </span>
            <span className="font-medium text-[#713f12]">
              Traditions, songs, rituals, and celebration dates vary among Tea Tribes and Adivasi communities across Assam and eastern India.
            </span>
            {expanded && (
              <p className="mt-1.5 text-[11px] text-[#854d0e] leading-relaxed">
                This educational website aims to foster cross-cultural understanding and preservation. Customs of one community (e.g. Santhal, Munda, Oraon, Kharia, Kurmi) are not universal to all. Readers and researchers are encouraged to consult local village elders (Pahan, Nayke, Manki) and community councils before publishing specific ceremonial guidelines.
              </p>
            )}
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0 self-end md:self-auto">
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-[11px] font-semibold text-[#854d0e] hover:text-[#713f12] underline flex items-center gap-0.5"
          >
            {expanded ? (
              <>
                <span>Less</span>
                <ChevronUp className="w-3.5 h-3.5" />
              </>
            ) : (
              <>
                <span>Learn why</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </>
            )}
          </button>
          <button
            onClick={() => setDismissed(true)}
            className="p-1 text-[#854d0e] hover:text-black rounded hover:bg-[#fef08a]"
            aria-label="Dismiss banner"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};

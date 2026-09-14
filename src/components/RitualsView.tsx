import React, { useState } from 'react';
import {
  AlertTriangle,
  BookOpen,
  Calendar,
  CheckCircle,
  Clock,
  HeartHandshake,
  Info,
  Leaf,
  Music,
  ShieldAlert,
  Sparkles,
  TreeDeciduous,
  Waves,
} from 'lucide-react';
import { RITUAL_STEPS } from '../data/initialData';
import { NavigationTab, RitualStep } from '../types';

interface RitualsViewProps {
  onSelectTab: (tab: NavigationTab) => void;
}

export const RitualsView: React.FC<RitualsViewProps> = ({ onSelectTab }) => {
  const [selectedPhase, setSelectedPhase] = useState<string>('All');
  const [selectedStep, setSelectedStep] = useState<RitualStep | null>(null);

  const phases = ['All', 'Pre-Festival', 'Main Day', 'Night Observance', 'Immersion & Post-Puja'];

  const filteredSteps =
    selectedPhase === 'All'
      ? RITUAL_STEPS
      : RITUAL_STEPS.filter((s) => s.phase === selectedPhase);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Header */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-[#1b4332] text-xs font-semibold">
          <Sparkles className="w-3.5 h-3.5 text-amber-600" />
          <span>Sacred Ceremonial Sequence</span>
        </div>
        <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1b4332]">
          Rituals & Traditions
        </h1>
        <p className="text-stone-600 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
          An organized guide to the ceremonial observances, from pre-festival Jawa seed germination to Akhra worship and
          reverent water immersion.
        </p>
      </div>

      {/* MANDATORY WARNING BOX */}
      <div className="bg-[#fef2f2] border-2 border-rose-300 rounded-2xl p-5 sm:p-6 shadow-sm">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center shrink-0 border border-rose-300">
            <ShieldAlert className="w-6 h-6" />
          </div>
          <div className="space-y-1">
            <h3 className="font-bold text-rose-950 text-sm sm:text-base flex items-center gap-2">
              <span>Cultural Advisory & Verification Notice</span>
            </h3>
            <p className="text-xs sm:text-sm text-rose-900 font-semibold leading-relaxed">
              “Please consult local community elders or recognized cultural sources before publishing specific ritual instructions.”
            </p>
            <p className="text-xs text-rose-800 leading-relaxed pt-1">
              Practices described here represent widely documented traditions across Assam tea gardens, but specific
              chants, offerings, fasting rules, and priestly roles (Pahan, Nayke, Deori) vary between the Santhal,
              Munda, Oraon, Kharia, Ho, and Kurmi communities. They must never be treated as universal dogma.
            </p>
          </div>
        </div>
      </div>

      {/* Phase Filter Tabs */}
      <div className="flex items-center justify-center flex-wrap gap-2 pt-2">
        {phases.map((phase) => (
          <button
            key={phase}
            onClick={() => setSelectedPhase(phase)}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              selectedPhase === phase
                ? 'bg-[#1b4332] text-white shadow-md'
                : 'bg-white border border-stone-200 text-stone-700 hover:bg-stone-50'
            }`}
          >
            {phase}
          </button>
        ))}
      </div>

      {/* Ritual Steps Cards */}
      <div className="space-y-6">
        {filteredSteps.map((step) => (
          <div
            key={step.stepNumber}
            className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-sm hover:border-[#2d6a4f]/50 transition-all space-y-4"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stone-100 pb-3">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-[#2d6a4f] text-white font-bold text-xs flex items-center justify-center shadow-sm">
                  {step.stepNumber}
                </span>
                <div>
                  <h3 className="font-display text-lg sm:text-xl font-bold text-[#1b4332]">
                    {step.title}
                  </h3>
                  {step.assameseTitle && (
                    <span className="text-xs text-amber-800 font-medium font-serif">
                      {step.assameseTitle}
                    </span>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-2 self-start sm:self-auto">
                <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                  {step.phase}
                </span>
              </div>
            </div>

            {/* Summary */}
            <p className="text-xs sm:text-sm font-medium text-stone-800 italic bg-amber-50/50 p-3 rounded-lg border border-amber-200/50">
              {step.summary}
            </p>

            {/* Detailed Description */}
            <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
              {step.description}
            </p>

            {/* Regional Variation & Symbolism Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2 text-xs">
              <div className="bg-[#faf8f5] p-3.5 rounded-xl border border-stone-200">
                <span className="font-bold text-[#b45309] block mb-1">
                  🌿 Practices May Vary in Communities:
                </span>
                <p className="text-stone-600 leading-relaxed">{step.communityVariations}</p>
              </div>

              <div className="bg-emerald-50/50 p-3.5 rounded-xl border border-emerald-200/60">
                <span className="font-bold text-[#2d6a4f] block mb-1">
                  ✨ Sacred Cultural Symbolism:
                </span>
                <p className="text-stone-600 leading-relaxed">{step.symbolism}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Cultural Preservation Box */}
      <div className="bg-[#1b4332] text-white rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
        <div className="space-y-2">
          <h3 className="font-display text-lg font-bold text-[#fdfbf7]">
            Documenting Living Songs & Akhra Chants
          </h3>
          <p className="text-xs text-emerald-200 max-w-xl leading-relaxed">
            Every step of Karam Puja is accompanied by specific melodies sung in Sadri, Kurmali, Mundari, and Kurukh.
            Listen to traditional recordings and explore the rhythms of the Madal drum.
          </p>
        </div>

        <button
          onClick={() => onSelectTab('music')}
          className="whitespace-nowrap px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-[#143225] font-bold text-xs transition-colors flex items-center gap-2"
        >
          <span>Listen to Karam Songs</span>
          <Music className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

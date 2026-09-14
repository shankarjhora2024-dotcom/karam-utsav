import React from 'react';
import {
  BookOpen,
  Calendar,
  CheckCircle2,
  ExternalLink,
  GraduationCap,
  History,
  Layers,
  MapPin,
  ShieldCheck,
  Sparkles,
  TreeDeciduous,
  Users,
} from 'lucide-react';
import { TIMELINE_MILESTONES } from '../data/initialData';
import { NavigationTab } from '../types';

interface HistoryViewProps {
  onSelectTab: (tab: NavigationTab) => void;
}

export const HistoryView: React.FC<HistoryViewProps> = ({ onSelectTab }) => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Header */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-[#1b4332] text-xs font-semibold">
          <History className="w-3.5 h-3.5" />
          <span>Historical Research & Diaspora Studies</span>
        </div>
        <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1b4332]">
          History & Cultural Significance
        </h1>
        <p className="text-stone-600 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
          Tracing ancestral roots from pre-colonial forest civilizations to two centuries of resilience, adaptation, and
          cultural synthesis in the tea estates of Assam.
        </p>
      </div>

      {/* 1. Historical Background & The Assam Diaspora */}
      <section className="bg-white rounded-2xl p-6 sm:p-10 border border-stone-200 shadow-sm space-y-6">
        <span className="text-xs font-bold text-amber-700 uppercase tracking-widest block">
          Historical Context
        </span>
        <h2 className="font-display text-2xl font-bold text-[#1b4332]">
          Karam Puja in Assam: Roots & Resilience
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-stone-700 leading-relaxed">
          <div className="space-y-3">
            <p>
              The history of Karam Puja in Assam is intertwined with the history of the <strong>Tea Tribes and Adivasi
              communities</strong>. Beginning in the mid-19th century (circa 1840s onwards), British colonial tea
              companies recruited hundreds of thousands of indigenous people from the Chota Nagpur plateau, Santhal
              Parganas, and surrounding forest regions (modern Jharkhand, Odisha, West Bengal, and Chhattisgarh) to clear
              dense jungles and cultivate tea plantations across Assam.
            </p>
            <p>
              Subjected to indentured conditions, geographic isolation, and severe plantation discipline, these
              communities held fast to their sacred traditions. Among these, <strong>Karam Puja became an indispensable
              lifeline</strong>—a collective memory of their ancestral homelands, an affirmation of dignity, and an
              annual communion with the spirits of nature.
            </p>
          </div>
          <div className="space-y-3">
            <p>
              Over generations, the sacred Karam branches, previously harvested from central Indian deciduous forests,
              were located in the riverine flora of Upper and Lower Assam. The songs, composed in Sadri, Kurmali,
              Santali, and Mundari, incorporated references to the mighty Brahmaputra, local tea bushes, and the seasonal
              rains of the eastern Himalayas.
            </p>
            <p>
              Today, the festival is celebrated with great pride as an integral component of Assam’s multi-ethnic
              heritage, recognized both at grassroots plantation levels and through institutional state cultural honors.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Karam Puja in Assam vs. Other Regions */}
      <section className="bg-white rounded-2xl p-6 sm:p-10 border border-stone-200 shadow-sm space-y-6">
        <span className="text-xs font-bold text-emerald-800 uppercase tracking-widest block">
          Comparative Perspectives
        </span>
        <h2 className="font-display text-2xl font-bold text-[#1b4332]">
          Karam Across Assam and Other Regions of India
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-5 rounded-xl bg-emerald-50/60 border border-emerald-200/70 space-y-2">
            <div className="flex items-center gap-2 text-[#1b4332] font-bold text-base">
              <MapPin className="w-5 h-5 text-emerald-700" />
              <span>In Assam (Tea Gardens & Villages)</span>
            </div>
            <ul className="text-xs text-stone-700 space-y-2 leading-relaxed">
              <li className="flex items-start gap-1.5">
                <span className="text-emerald-700 font-bold">•</span>
                <span>
                  Celebrations take place in designated <strong>tea garden community Akhras</strong> and district-level
                  grounds organized by youth associations (such as ATTSA) and village councils.
                </span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-emerald-700 font-bold">•</span>
                <span>
                  High emphasis on inter-community <strong>Jhumur dance</strong> competitions, honoring worker solidarity
                  and tea landscape identity.
                </span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-emerald-700 font-bold">•</span>
                <span>
                  Songs are frequently sung in <strong>Sadri</strong> (the widely spoken lingua franca of Assam tea
                  tribes) alongside maternal tribal languages.
                </span>
              </li>
            </ul>
          </div>

          <div className="p-5 rounded-xl bg-amber-50/60 border border-amber-200/70 space-y-2">
            <div className="flex items-center gap-2 text-amber-900 font-bold text-base">
              <TreeDeciduous className="w-5 h-5 text-amber-700" />
              <span>In Jharkhand, Odisha & West Bengal</span>
            </div>
            <ul className="text-xs text-stone-700 space-y-2 leading-relaxed">
              <li className="flex items-start gap-1.5">
                <span className="text-amber-700 font-bold">•</span>
                <span>
                  Deeply tied to the <strong>ancestral Sarna sacred groves</strong> and indigenous village landholding
                  systems (Khuntkatti rights).
                </span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-amber-700 font-bold">•</span>
                <span>
                  Celebrations align strictly with lunar dates (Bhadra Ekadashi) with prominent roles played by hereditary
                  clan priests (Pahan / Kalo / Nayke).
                </span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-amber-700 font-bold">•</span>
                <span>
                  Songs emphasize ancient forest deities, clan totems (Killi), and historical epics of the Chota Nagpur
                  plateau.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 3. Thematic Timeline Component */}
      <section className="bg-white rounded-2xl p-6 sm:p-10 border border-stone-200 shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stone-100 pb-4">
          <div>
            <span className="text-xs font-bold text-[#2d6a4f] uppercase tracking-widest block">
              Historical Milestones
            </span>
            <h2 className="font-display text-2xl font-bold text-[#1b4332]">
              Verified Thematic Timeline
            </h2>
          </div>
          <span className="text-[11px] text-stone-500 bg-stone-100 px-2.5 py-1 rounded-full self-start sm:self-auto">
            Grounded in Oral & Archival Sources
          </span>
        </div>

        <p className="text-xs text-stone-600">
          Rather than relying on speculative or fabricated ancient dates, this timeline outlines verified historical and
          cultural eras documented by cultural researchers and community historians.
        </p>

        <div className="relative border-l-2 border-emerald-600/40 ml-4 sm:ml-6 space-y-8 pt-2">
          {TIMELINE_MILESTONES.map((m, idx) => (
            <div key={idx} className="relative pl-6 sm:pl-8 group">
              {/* Node bullet */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white border-4 border-emerald-600 group-hover:border-amber-500 transition-colors"></div>

              <div className="bg-[#faf8f5] p-5 rounded-xl border border-stone-200 group-hover:border-emerald-300 transition-colors space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wide">
                  {m.era}
                </span>
                <h3 className="font-display text-lg font-bold text-[#1b4332]">
                  {m.title}
                </h3>
                <p className="text-xs text-stone-700 leading-relaxed">{m.description}</p>

                <div className="pt-2 flex flex-wrap items-center gap-3 text-[11px] text-stone-500 border-t border-stone-200/60">
                  <span><strong>Context:</strong> {m.context}</span>
                  <span>•</span>
                  <span className="text-emerald-800 font-medium"><strong>Source:</strong> {m.verifiedSourceType}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Cultural Significance Pillars */}
      <section className="bg-white rounded-2xl p-6 sm:p-10 border border-stone-200 shadow-sm space-y-6">
        <span className="text-xs font-bold text-amber-800 uppercase tracking-widest block">
          Foundational Values
        </span>
        <h2 className="font-display text-2xl font-bold text-[#1b4332]">
          Four Pillars of Cultural Significance
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="p-5 rounded-xl border border-stone-200 bg-[#fdfbf7] space-y-2">
            <h3 className="font-bold text-sm text-[#1b4332] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
              1. Environmental Reverence (Nature Cosmovision)
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Affirms the sanctity of botanical life. Rather than dominating nature, communities worship the tree,
              seeking harmony with seasonal rains, forests, and soil vitality.
            </p>
          </div>

          <div className="p-5 rounded-xl border border-stone-200 bg-[#fdfbf7] space-y-2">
            <h3 className="font-bold text-sm text-[#1b4332] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
              2. Agricultural Viability & Seed Testing
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              The sacred Jawa germination ceremony is an indigenous botanical assay, ensuring the community tests seed
              germination vigor before winter planting.
            </p>
          </div>

          <div className="p-5 rounded-xl border border-stone-200 bg-[#fdfbf7] space-y-2">
            <h3 className="font-bold text-sm text-[#1b4332] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
              3. Egalitarian Community Solidarity
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              The Akhra is fundamentally democratic. All community members—regardless of occupation, age, or status—dance
              and sing as equals with interlocking arms.
            </p>
          </div>

          <div className="p-5 rounded-xl border border-stone-200 bg-[#fdfbf7] space-y-2">
            <h3 className="font-bold text-sm text-[#1b4332] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
              4. Intergenerational Transmission
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              By listening to the Karam Katha from elders and learning complex Madal rhythms, youth inherit ethical codes,
              linguistic knowledge, and cultural pride.
            </p>
          </div>
        </div>
      </section>

      {/* 5. MANDATORY: Sources & Community Knowledge Section */}
      <section className="bg-[#143225] text-white rounded-2xl p-6 sm:p-10 border border-[#2d6a4f] shadow-lg space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#2d6a4f] text-amber-300 flex items-center justify-center shrink-0 border border-amber-400/30">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <h2 className="font-display text-2xl font-bold text-[#fdfbf7]">
              Sources & Community Knowledge Protocol
            </h2>
            <p className="text-xs text-emerald-200">
              Preserving cultural integrity through rigorous, ethical attribution
            </p>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed">
          To maintain cultural respect and prevent distortion, all historical and cultural descriptions documented on this
          platform must be corroborated across verified community touchpoints:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
          <div className="bg-[#1b4332] p-4 rounded-xl border border-[#2d6a4f]/70 space-y-1.5">
            <span className="font-bold text-amber-300 block">1. Community Elders</span>
            <p className="text-emerald-200/80">
              Direct consultation with village Pahans, Naykes, Deoris, and elder singers who hold living oral memories.
            </p>
          </div>

          <div className="bg-[#1b4332] p-4 rounded-xl border border-[#2d6a4f]/70 space-y-1.5">
            <span className="font-bold text-amber-300 block">2. Cultural Researchers</span>
            <p className="text-emerald-200/80">
              Trained ethnographers and community folklorists studying Sadri, Kurukh, Mundari, and Santhali linguistics.
            </p>
          </div>

          <div className="bg-[#1b4332] p-4 rounded-xl border border-[#2d6a4f]/70 space-y-1.5">
            <span className="font-bold text-amber-300 block">3. Published Literature</span>
            <p className="text-emerald-200/80">
              Peer-reviewed works, gazetteers of Assam, and ethnographic records published by recognized university presses.
            </p>
          </div>

          <div className="bg-[#1b4332] p-4 rounded-xl border border-[#2d6a4f]/70 space-y-1.5">
            <span className="font-bold text-amber-300 block">4. Academic Institutions</span>
            <p className="text-emerald-200/80">
              Department of Folklore Studies (Gauhati University, Dibrugarh University, Assam University) research journals.
            </p>
          </div>

          <div className="bg-[#1b4332] p-4 rounded-xl border border-[#2d6a4f]/70 space-y-1.5">
            <span className="font-bold text-amber-300 block">5. Community Organizations</span>
            <p className="text-emerald-200/80">
              Tea Tribes cultural committees, Adivasi Sahitya Sabhas, and regional youth cultural coordination boards.
            </p>
          </div>

          <div className="bg-[#1b4332] p-4 rounded-xl border border-[#2d6a4f]/70 space-y-1.5">
            <span className="font-bold text-amber-300 block">6. Oral Histories with Consent</span>
            <p className="text-emerald-200/80">
              Recorded oral testimonies documented with informed, explicit consent and proper personal attribution.
            </p>
          </div>
        </div>

        <div className="pt-2 flex items-center justify-between flex-wrap gap-4 border-t border-[#24543e]">
          <p className="text-[11px] text-emerald-300">
            Have verified field notes, books, or elder interviews to contribute?
          </p>
          <button
            onClick={() => onSelectTab('contact')}
            className="px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-[#143225] font-bold text-xs transition-colors flex items-center gap-1.5"
          >
            <span>Submit Verification & Research</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </button>
        </div>
      </section>
    </div>
  );
};

import React, { useState } from 'react';
import {
  AlertCircle,
  BookOpen,
  CheckCircle2,
  ChevronRight,
  ExternalLink,
  Filter,
  Info,
  Layers,
  MapPin,
  Search,
  ShieldAlert,
  Sparkles,
  Users,
} from 'lucide-react';
import { CommunityProfile, NavigationTab } from '../types';

interface CultureViewProps {
  communities: CommunityProfile[];
  onSelectTab: (tab: NavigationTab) => void;
  onSelectCommunity: (community: CommunityProfile) => void;
}

export const CultureView: React.FC<CultureViewProps> = ({
  communities,
  onSelectTab,
  onSelectCommunity,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('All');

  // Extract all unique languages
  const allLanguages = [
    'All',
    ...Array.from(new Set(communities.flatMap((c) => c.languages))),
  ].slice(0, 8);

  const filteredCommunities = communities.filter((comm) => {
    const matchesSearch =
      comm.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      comm.culturalTraditions.toLowerCase().includes(searchTerm.toLowerCase()) ||
      comm.regionInAssam.some((r) => r.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesLang =
      selectedLanguage === 'All' || comm.languages.includes(selectedLanguage);

    return matchesSearch && matchesLang;
  });

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Header */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-[#1b4332] text-xs font-semibold">
          <Users className="w-3.5 h-3.5 text-emerald-800" />
          <span>Plurality, Dignity & Cultural Heritage</span>
        </div>
        <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1b4332]">
          Tea Tribes & Adivasi Culture of Assam
        </h1>
        <p className="text-stone-600 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
          Honoring the rich mosaic of distinct ethnic, linguistic, and cultural communities whose labor, resilience, and
          ancestral customs have enriched Assam for over a century and a half.
        </p>
      </div>

      {/* MANDATORY EDUCATIONAL STATEMENT: Discarding Homogeneity */}
      <div className="bg-[#fffbeb] border-2 border-amber-300 rounded-2xl p-6 sm:p-8 shadow-sm space-y-4">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-amber-200 text-amber-900 flex items-center justify-center shrink-0 border border-amber-400">
            <Info className="w-6 h-6" />
          </div>
          <div className="space-y-2">
            <h2 className="font-display text-xl font-bold text-amber-950">
              Understanding Cultural Diversity: Dispelling Homogeneity
            </h2>
            <p className="text-xs sm:text-sm text-amber-900 leading-relaxed">
              While commonly grouped under collective administrative phrases such as <em>“Tea Tribes”</em> or <em>“Tea
              Garden Community,”</em> these terms do not represent a single homogeneous ethnic identity. Instead, they
              encompass dozens of independent indigenous peoples—including the <strong>Santhal, Munda, Oraon, Kharia,
              Ho, Kurmi, Gond, Sawasi, Tanti, Karmakar,</strong> and many others.
            </p>
            <p className="text-xs text-amber-800 leading-relaxed">
              Each community possesses distinct ancestral languages (belonging to Austroasiatic, Dravidian, or Indo-Aryan
              families), unique social structures, traditional attire, clan totems, and customary laws. While Karam Puja
              serves as a harmonious unifying celebration of nature across many groups, individual practices and oral
              traditions are community-specific.
            </p>
          </div>
        </div>
      </div>

      {/* Verification Notice Badge */}
      <div className="bg-[#faf8f5] border border-stone-200 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-stone-600">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
          <span>
            <strong>Content to be Verified:</strong> Community profiles presented here serve as open educational outlines.
            They are continually verified through recognized community elders, linguists, and academic sources.
          </span>
        </div>
        <button
          onClick={() => onSelectTab('contact')}
          className="text-xs font-bold text-[#2d6a4f] hover:underline whitespace-nowrap self-start sm:self-auto"
        >
          Submit Community Corrections →
        </button>
      </div>

      {/* Search & Filter Bar */}
      <div className="bg-white p-4 rounded-2xl border border-stone-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Search */}
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search community name, region..."
            className="w-full pl-9 pr-4 py-2 bg-stone-50 border border-stone-200 rounded-xl text-xs text-stone-800 focus:outline-none focus:border-[#2d6a4f]"
          />
        </div>

        {/* Language Filter */}
        <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto pb-1 md:pb-0">
          <span className="text-xs font-medium text-stone-500 shrink-0 flex items-center gap-1">
            <Filter className="w-3.5 h-3.5" /> Language:
          </span>
          {allLanguages.map((lang) => (
            <button
              key={lang}
              onClick={() => setSelectedLanguage(lang)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                selectedLanguage === lang
                  ? 'bg-[#1b4332] text-white shadow-sm'
                  : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
              }`}
            >
              {lang}
            </button>
          ))}
        </div>
      </div>

      {/* Community Profiles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCommunities.map((comm) => (
          <div
            key={comm.id}
            className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm hover:border-[#2d6a4f] card-hover flex flex-col justify-between"
          >
            <div>
              {/* Profile Card Header */}
              <div className="relative h-36 bg-gradient-to-r from-[#1b4332] to-[#2d6a4f] p-4 flex flex-col justify-between text-white">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold bg-amber-500 text-white px-2 py-0.5 rounded shadow-xs uppercase tracking-wider">
                    Content to be verified
                  </span>
                  {comm.altNames && comm.altNames.length > 0 && (
                    <span className="text-[10px] text-emerald-200 bg-black/30 px-2 py-0.5 rounded">
                      Also: {comm.altNames.join(', ')}
                    </span>
                  )}
                </div>

                <div>
                  <h3 className="font-display text-xl font-bold text-[#fdfbf7]">
                    {comm.name}
                  </h3>
                  <div className="flex items-center gap-1 text-[11px] text-emerald-200">
                    <MapPin className="w-3 h-3 text-amber-300 shrink-0" />
                    <span>Assam: {comm.regionInAssam.slice(0, 3).join(', ')}...</span>
                  </div>
                </div>
              </div>

              {/* Body Fields */}
              <div className="p-5 space-y-3 text-xs">
                <div>
                  <span className="font-bold text-stone-700 block mb-0.5">Languages & Dialects:</span>
                  <div className="flex flex-wrap gap-1">
                    {comm.languages.map((l, idx) => (
                      <span
                        key={idx}
                        className="bg-stone-100 text-stone-700 text-[10px] font-medium px-2 py-0.5 rounded"
                      >
                        {l}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="font-bold text-stone-700 block mb-0.5">Major Festivals:</span>
                  <p className="text-stone-600 line-clamp-1">{comm.festivals.join(', ')}</p>
                </div>

                <div>
                  <span className="font-bold text-stone-700 block mb-0.5">Traditional Attire:</span>
                  <p className="text-stone-600 line-clamp-2">{comm.traditionalDress}</p>
                </div>

                <div>
                  <span className="font-bold text-stone-700 block mb-0.5">Music & Dance Heritage:</span>
                  <p className="text-stone-600 line-clamp-2">{comm.musicAndDance}</p>
                </div>
              </div>
            </div>

            {/* Footer / Detail Action */}
            <div className="p-5 pt-0">
              <button
                onClick={() => onSelectCommunity(comm)}
                className="w-full py-2 px-3 rounded-xl bg-stone-100 hover:bg-[#2d6a4f] hover:text-white text-[#1b4332] font-semibold text-xs transition-colors flex items-center justify-center gap-1.5"
              >
                <span>View Full Ethnography & Sources</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Cultural Preservation Invitation */}
      <div className="bg-[#1b4332] text-white rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
        <div className="space-y-1">
          <h3 className="font-display text-lg font-bold text-[#fdfbf7]">
            Is your community’s heritage underrepresented or need correction?
          </h3>
          <p className="text-xs text-emerald-200 max-w-xl leading-relaxed">
            We are actively expanding this database with certified community coordinators, scholars, and elder bodies.
            Add verified entries through our cultural contribution portal.
          </p>
        </div>

        <button
          onClick={() => onSelectTab('contact')}
          className="whitespace-nowrap px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-[#143225] font-bold text-xs transition-colors"
        >
          Submit Community Details
        </button>
      </div>
    </div>
  );
};

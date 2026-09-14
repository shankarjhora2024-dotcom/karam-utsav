import React, { useState } from 'react';
import {
  ArrowRight,
  Bell,
  BookOpen,
  Calendar,
  CheckCircle2,
  Compass,
  FileText,
  HeartHandshake,
  Image as ImageIcon,
  Music2,
  Sparkles,
  TreeDeciduous,
  Users,
} from 'lucide-react';
import { NavigationTab } from '../types';

interface ComingSoonViewProps {
  tab: NavigationTab;
  onSelectTab: (tab: NavigationTab) => void;
  onPreviewDraft?: () => void;
}

export const ComingSoonView: React.FC<ComingSoonViewProps> = ({
  tab,
  onSelectTab,
  onPreviewDraft,
}) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const tabInfo: Record<
    string,
    { title: string; subtitle: string; icon: React.ReactNode; previewDetails: string }
  > = {
    home: {
      title: 'Heritage Portal & Festival Overview',
      subtitle: 'Official launch of the interactive digital gateway for Assam’s Karam Puja',
      icon: <Compass className="w-8 h-8 text-amber-500" />,
      previewDetails: 'Curating the living festival timeline, community statistics, and cultural calendar.',
    },
    about: {
      title: 'About Karam Puja & Sacred Trees',
      subtitle: 'Philosophical meaning, botanical taxonomy, and sacred tree worship',
      icon: <TreeDeciduous className="w-8 h-8 text-emerald-500" />,
      previewDetails: 'Compiling elder oral accounts and botanical studies on the sacred Nauclea parvifolia.',
    },
    history: {
      title: 'History & Significance of Tea Tribes',
      subtitle: '19th-century migration, ancestral traditions, and modern resilience',
      icon: <BookOpen className="w-8 h-8 text-amber-500" />,
      previewDetails: 'Verifying archival records and historical timelines with university folklorists.',
    },
    rituals: {
      title: 'Sacred Rituals & Step-by-Step Traditions',
      subtitle: 'Jawa germination, branch collection, Akhra installation, and Bisarjan',
      icon: <Sparkles className="w-8 h-8 text-amber-400" />,
      previewDetails: 'Formalizing Free Prior and Informed Consent (FPIC) for ritual documentation.',
    },
    music: {
      title: 'Karam Songs, Madal Rhythms & Dance',
      subtitle: 'Oral song recordings, bilingual Sadri transcriptions, and traditional instruments',
      icon: <Music2 className="w-8 h-8 text-purple-400" />,
      previewDetails: 'Digitizing field audio tapes and multi-angle Jhumur choreography demonstrations.',
    },
    culture: {
      title: 'Tea Tribes & Adivasi Communities of Assam',
      subtitle: 'Celebrating Santhal, Munda, Oraon, Kharia, Kurmi, and Ho heritages',
      icon: <Users className="w-8 h-8 text-emerald-400" />,
      previewDetails: 'Reviewing distinct community profiles alongside respective cultural councils.',
    },
    articles: {
      title: 'Research Articles & Educational Resources',
      subtitle: 'Anthology of academic essays, school primers, and cultural preservation guides',
      icon: <FileText className="w-8 h-8 text-blue-400" />,
      previewDetails: 'Formatting peer-reviewed ethnobotany and folk literature monographs.',
    },
    events: {
      title: 'Statewide Festival Events Calendar',
      subtitle: 'Directory of central Akhra celebrations across Upper and Central Assam',
      icon: <Calendar className="w-8 h-8 text-amber-500" />,
      previewDetails: 'Gathering confirmed 2026 festival dates from district tea estate committees.',
    },
    contact: {
      title: 'Cultural Contribution & Community Liaison',
      subtitle: 'Public contribution portal for oral narratives, songs, and field photographs',
      icon: <HeartHandshake className="w-8 h-8 text-rose-400" />,
      previewDetails: 'Setting up direct digital submission pipelines for community archivists.',
    },
  };

  const defaultInfo = {
    title: 'Cultural Archive Section',
    subtitle: 'Under active curation with community elders',
    icon: <Sparkles className="w-8 h-8 text-amber-400" />,
    previewDetails: 'Finalizing peer-reviewed cultural materials.',
  };

  const currentInfo = (tab && tabInfo[tab]) ? tabInfo[tab] : defaultInfo;

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      setSubscribed(true);
    }
  };

  return (
    <div className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
      {/* Badge */}
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 text-amber-800 border border-amber-500/20 text-xs font-semibold uppercase tracking-wider mb-6">
        <Sparkles className="w-4 h-4 text-amber-600" />
        <span>Under Cultural Curation • Coming Soon</span>
      </div>

      {/* Icon */}
      <div className="w-20 h-20 mx-auto rounded-2xl bg-[#1b4332] text-white flex items-center justify-center shadow-xl border border-amber-400/20 mb-6">
        {currentInfo?.icon || defaultInfo.icon}
      </div>

      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-stone-900 mb-3">
        {currentInfo?.title || defaultInfo.title}
      </h1>
      <p className="text-base sm:text-lg text-stone-600 max-w-2xl mx-auto mb-8 font-serif italic">
        “{currentInfo?.subtitle || defaultInfo.subtitle}”
      </p>

      {/* Explanation Box */}
      <div className="bg-white p-6 sm:p-8 rounded-2xl border border-stone-200 shadow-sm text-left max-w-2xl mx-auto mb-10">
        <h3 className="text-sm font-bold uppercase tracking-wider text-[#2d6a4f] mb-2 flex items-center gap-2">
          <TreeDeciduous className="w-4 h-4" />
          <span>Curatorial Status & Advisory</span>
        </h3>
        <p className="text-stone-700 text-sm leading-relaxed mb-4">
          In strict accordance with Free, Prior, and Informed Consent (FPIC) and ethical tribal preservation standards, our archival team is currently reviewing verified oral recordings, ritual transcripts, and photographs alongside senior Pahans, Naikes, and community folklorists across Assam.
        </p>
        <p className="text-stone-600 text-xs bg-stone-50 p-3 rounded-lg border border-stone-200">
          <strong>Current Phase:</strong> {currentInfo?.previewDetails || defaultInfo.previewDetails}
        </p>
      </div>

      {/* Active Sections Highlight (Gallery & Book) */}
      <div className="bg-gradient-to-br from-[#1b4332] to-[#2d6a4f] text-white p-6 sm:p-8 rounded-2xl shadow-xl max-w-2xl mx-auto mb-10 text-left">
        <span className="text-[11px] font-bold uppercase tracking-widest text-amber-300">
          ✨ Fully Open & Active Now
        </span>
        <h3 className="text-xl sm:text-2xl font-bold font-serif text-amber-50 mt-1 mb-2">
          Explore Our Open Photo Gallery or Download Our Book
        </h3>
        <p className="text-xs sm:text-sm text-[#d8f3dc]/90 mb-6">
          While this section is being prepared, our high-resolution visual gallery is fully accessible, and the comprehensive 312-page cultural monograph is available for direct download.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <button
            onClick={() => onSelectTab('book')}
            className="w-full py-3 px-4 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-sm rounded-xl transition-all shadow-md flex items-center justify-center gap-2 group"
          >
            <BookOpen className="w-4 h-4 text-stone-950" />
            <span>Download Our Book</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>

          <button
            onClick={() => onSelectTab('gallery')}
            className="w-full py-3 px-4 bg-white/15 hover:bg-white/25 text-white font-bold text-sm rounded-xl border border-white/20 transition-all flex items-center justify-center gap-2"
          >
            <ImageIcon className="w-4 h-4 text-amber-300" />
            <span>Explore Photo Gallery (Open)</span>
          </button>
        </div>
      </div>

      {/* Notify Me Form */}
      <div className="max-w-md mx-auto mb-8">
        <h4 className="text-xs font-bold text-stone-700 uppercase tracking-wider mb-2 flex items-center justify-center gap-1.5">
          <Bell className="w-3.5 h-3.5 text-amber-600" />
          <span>Get Notified When This Section Goes Live</span>
        </h4>
        {subscribed ? (
          <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs rounded-xl flex items-center justify-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Thank you! We will notify you upon official publication.</span>
          </div>
        ) : (
          <form onSubmit={handleSubscribe} className="flex gap-2">
            <input
              type="email"
              required
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-2.5 text-xs sm:text-sm bg-white border border-stone-300 rounded-xl outline-none focus:ring-2 focus:ring-[#2d6a4f]"
            />
            <button
              type="submit"
              className="py-2.5 px-4 bg-[#2d6a4f] hover:bg-[#1b4332] text-white text-xs sm:text-sm font-semibold rounded-xl transition-colors whitespace-nowrap"
            >
              Notify Me
            </button>
          </form>
        )}
      </div>

      {/* Optional Preview Draft Toggle */}
      {onPreviewDraft && (
        <div className="pt-2">
          <button
            onClick={onPreviewDraft}
            className="text-xs text-stone-500 hover:text-stone-800 underline transition-colors"
          >
            Preview preliminary draft content for {currentInfo?.title || defaultInfo.title} →
          </button>
        </div>
      )}
    </div>
  );
};

import React, { useState } from 'react';
import {
  AlertTriangle,
  ArrowRight,
  BarChart3,
  BookOpen,
  Calendar,
  CheckCircle2,
  Database,
  Download,
  Eye,
  FileCheck2,
  FileText,
  Image as ImageIcon,
  Key,
  Layers,
  Lock,
  Mail,
  Music2,
  Plus,
  RefreshCw,
  Search,
  Settings,
  ShieldAlert,
  ShieldCheck,
  Trash2,
  Upload,
  UserCheck,
  Users,
  XCircle,
} from 'lucide-react';
import {
  ArticleItem,
  CommunityProfile,
  ContactMessage,
  ContributorSubmission,
  EventItem,
  GalleryItem,
  NavigationTab,
  SongItem,
} from '../types';

interface AdminDashboardProps {
  articles: ArticleItem[];
  events: EventItem[];
  galleryItems: GalleryItem[];
  communities: CommunityProfile[];
  songs: SongItem[];
  contributions: ContributorSubmission[];
  messages: ContactMessage[];
  onSelectTab: (tab: NavigationTab) => void;
  onDeleteEvent: (id: string) => void;
  onDeleteArticle: (id: string) => void;
  onApproveContribution: (id: string) => void;
  onRejectContribution: (id: string) => void;
  onOpenAddEventModal: () => void;
  onOpenAddArticleModal: () => void;
  onOpenAddGalleryModal: () => void;
  onResetData: () => void;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({
  articles,
  events,
  galleryItems,
  communities,
  songs,
  contributions,
  messages,
  onSelectTab,
  onDeleteEvent,
  onDeleteArticle,
  onApproveContribution,
  onRejectContribution,
  onOpenAddEventModal,
  onOpenAddArticleModal,
  onOpenAddGalleryModal,
  onResetData,
}) => {
  const [activeAdminTab, setActiveAdminTab] = useState<
    | 'overview'
    | 'articles'
    | 'events'
    | 'gallery'
    | 'communities'
    | 'songs'
    | 'contributions'
    | 'messages'
    | 'settings'
  >('overview');

  const pendingContributions = contributions.filter(
    (c) => c.status === 'Pending Review'
  );

  const exportDataJson = () => {
    const backup = {
      timestamp: new Date().toISOString(),
      articles,
      events,
      galleryItems,
      communities,
      songs,
      contributions,
    };
    const blob = new Blob([JSON.stringify(backup, null, 2)], {
      type: 'application/json',
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `karam-puja-assam-backup-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* MANDATORY NOTICE: Demo Interface Transparency */}
      <div className="bg-[#fffbeb] border-2 border-amber-400 rounded-2xl p-5 shadow-sm">
        <div className="flex items-start gap-3.5">
          <ShieldAlert className="w-6 h-6 text-amber-700 shrink-0 mt-0.5" />
          <div className="space-y-1 text-xs">
            <div className="flex items-center gap-2">
              <span className="font-bold text-amber-950 text-sm uppercase tracking-wide">
                Demo Administration Environment
              </span>
              <span className="bg-amber-200 text-amber-900 font-mono text-[10px] px-2 py-0.5 rounded font-bold">
                LOCAL MODE / CLIENT STATE
              </span>
            </div>
            <p className="text-amber-900 leading-relaxed">
              <strong>Notice:</strong> This administration dashboard is currently operating in <strong>Client Demo Mode</strong> with interactive state. Data is managed in-browser and changes persist during your current session. Authentication and backend cloud databases (such as Firebase Firestore) can be hooked up by following the setup guide at the bottom of this page.
            </p>
          </div>
        </div>
      </div>

      {/* Admin Header & Stats Ribbon */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-stone-200 pb-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></span>
            <span className="text-xs font-bold text-[#2d6a4f] uppercase tracking-wider">
              Assam Cultural Archive Control
            </span>
          </div>
          <h1 className="font-display text-2xl sm:text-3xl font-bold text-[#1b4332]">
            Heritage Archive Management Console
          </h1>
        </div>

        <div className="flex items-center gap-2 self-start md:self-auto">
          <button
            onClick={exportDataJson}
            className="px-3.5 py-2 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-semibold flex items-center gap-1.5 transition-colors"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Export Archive JSON</span>
          </button>
          <button
            onClick={onResetData}
            className="px-3.5 py-2 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-700 text-xs font-semibold flex items-center gap-1.5 transition-colors border border-rose-200"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Reset Demo Data</span>
          </button>
        </div>
      </div>

      {/* Stats Cards Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        <div
          onClick={() => setActiveAdminTab('articles')}
          className="bg-white p-4 rounded-2xl border border-stone-200 shadow-xs cursor-pointer hover:border-[#2d6a4f] transition-all"
        >
          <span className="text-xs text-stone-500 font-medium block">Total Articles</span>
          <span className="font-display text-2xl font-bold text-[#1b4332]">{articles.length}</span>
          <span className="text-[10px] text-emerald-800 font-semibold block mt-1">Peer reviewed</span>
        </div>

        <div
          onClick={() => setActiveAdminTab('events')}
          className="bg-white p-4 rounded-2xl border border-stone-200 shadow-xs cursor-pointer hover:border-[#2d6a4f] transition-all"
        >
          <span className="text-xs text-stone-500 font-medium block">Total Events</span>
          <span className="font-display text-2xl font-bold text-[#1b4332]">{events.length}</span>
          <span className="text-[10px] text-amber-700 font-semibold block mt-1">Assam tea belts</span>
        </div>

        <div
          onClick={() => setActiveAdminTab('gallery')}
          className="bg-white p-4 rounded-2xl border border-stone-200 shadow-xs cursor-pointer hover:border-[#2d6a4f] transition-all"
        >
          <span className="text-xs text-stone-500 font-medium block">Gallery Images</span>
          <span className="font-display text-2xl font-bold text-[#1b4332]">{galleryItems.length}</span>
          <span className="text-[10px] text-stone-500 font-semibold block mt-1">Attributed photos</span>
        </div>

        <div
          onClick={() => setActiveAdminTab('communities')}
          className="bg-white p-4 rounded-2xl border border-stone-200 shadow-xs cursor-pointer hover:border-[#2d6a4f] transition-all"
        >
          <span className="text-xs text-stone-500 font-medium block">Communities</span>
          <span className="font-display text-2xl font-bold text-[#1b4332]">{communities.length}</span>
          <span className="text-[10px] text-emerald-800 font-semibold block mt-1">Detailed profiles</span>
        </div>

        <div
          onClick={() => setActiveAdminTab('contributions')}
          className="bg-white p-4 rounded-2xl border border-amber-300 shadow-xs cursor-pointer hover:bg-amber-50/50 transition-all"
        >
          <span className="text-xs text-amber-800 font-bold block">Pending Submissions</span>
          <span className="font-display text-2xl font-bold text-amber-600">
            {pendingContributions.length}
          </span>
          <span className="text-[10px] text-amber-700 font-bold block mt-1">Action required</span>
        </div>

        <div
          onClick={() => setActiveAdminTab('messages')}
          className="bg-white p-4 rounded-2xl border border-stone-200 shadow-xs cursor-pointer hover:border-[#2d6a4f] transition-all"
        >
          <span className="text-xs text-stone-500 font-medium block">Contact Inquiries</span>
          <span className="font-display text-2xl font-bold text-[#1b4332]">{messages.length}</span>
          <span className="text-[10px] text-stone-500 font-semibold block mt-1">General mail</span>
        </div>
      </div>

      {/* Admin Sub Navigation Tabs */}
      <div className="flex items-center gap-1.5 overflow-x-auto border-b border-stone-200 pb-2">
        {[
          { id: 'overview', label: 'Dashboard Overview', icon: <BarChart3 className="w-4 h-4" /> },
          { id: 'articles', label: 'Manage Articles', icon: <FileText className="w-4 h-4" /> },
          { id: 'events', label: 'Manage Events', icon: <Calendar className="w-4 h-4" /> },
          { id: 'gallery', label: 'Manage Gallery', icon: <ImageIcon className="w-4 h-4" /> },
          { id: 'communities', label: 'Manage Communities', icon: <Users className="w-4 h-4" /> },
          { id: 'songs', label: 'Manage Songs & Media', icon: <Music2 className="w-4 h-4" /> },
          {
            id: 'contributions',
            label: `Contributions (${pendingContributions.length})`,
            icon: <FileCheck2 className="w-4 h-4" />,
          },
          { id: 'messages', label: `Messages (${messages.length})`, icon: <Mail className="w-4 h-4" /> },
          { id: 'settings', label: 'Website Settings', icon: <Settings className="w-4 h-4" /> },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveAdminTab(tab.id as any)}
            className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap flex items-center gap-1.5 transition-all ${
              activeAdminTab === tab.id
                ? 'bg-[#1b4332] text-white shadow-sm'
                : 'bg-white border border-stone-200 text-stone-700 hover:bg-stone-50'
            }`}
          >
            {tab.icon}
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Module 1: Overview */}
      {activeAdminTab === 'overview' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Pending Contributions Review Panel */}
            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-display font-bold text-base text-[#1b4332]">
                  Pending Cultural Submissions for Review
                </h3>
                <span className="text-xs bg-amber-100 text-amber-800 font-bold px-2 py-0.5 rounded">
                  {pendingContributions.length} Pending
                </span>
              </div>

              {pendingContributions.length === 0 ? (
                <p className="text-xs text-stone-500 py-6 text-center">
                  All elder submissions and community contributions have been reviewed.
                </p>
              ) : (
                <div className="space-y-3">
                  {pendingContributions.slice(0, 3).map((c) => (
                    <div
                      key={c.id}
                      className="p-3.5 bg-stone-50 rounded-xl border border-stone-200 space-y-2 text-xs"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-stone-800">{c.title}</span>
                        <span className="text-[10px] font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                          {c.contributionType}
                        </span>
                      </div>
                      <p className="text-stone-600 line-clamp-2">{c.description}</p>
                      <div className="flex items-center justify-between pt-1 text-[11px] text-stone-500">
                        <span>
                          From: {c.contributorName} ({c.communityOrRegion})
                        </span>
                        <div className="flex gap-2">
                          <button
                            onClick={() => onApproveContribution(c.id)}
                            className="text-emerald-700 hover:text-emerald-900 font-bold flex items-center gap-0.5"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5" /> Approve
                          </button>
                          <button
                            onClick={() => onRejectContribution(c.id)}
                            className="text-rose-600 hover:text-rose-800 font-bold flex items-center gap-0.5"
                          >
                            <XCircle className="w-3.5 h-3.5" /> Reject
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Quick Actions & Recent Content */}
            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm space-y-4">
              <h3 className="font-display font-bold text-base text-[#1b4332]">
                Quick Content Actions
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <button
                  onClick={onOpenAddArticleModal}
                  className="p-3 bg-emerald-50 hover:bg-emerald-100 text-[#1b4332] font-semibold rounded-xl border border-emerald-200 flex items-center gap-2 transition-colors"
                >
                  <Plus className="w-4 h-4" />
                  <span>Publish New Article</span>
                </button>
                <button
                  onClick={onOpenAddEventModal}
                  className="p-3 bg-amber-50 hover:bg-amber-100 text-amber-900 font-semibold rounded-xl border border-amber-200 flex items-center gap-2 transition-colors"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add Festival Event</span>
                </button>
                <button
                  onClick={onOpenAddGalleryModal}
                  className="p-3 bg-stone-50 hover:bg-stone-100 text-stone-800 font-semibold rounded-xl border border-stone-200 flex items-center gap-2 transition-colors"
                >
                  <Plus className="w-4 h-4" />
                  <span>Upload Gallery Photo</span>
                </button>
                <button
                  onClick={() => onSelectTab('contact')}
                  className="p-3 bg-teal-50 hover:bg-teal-100 text-teal-900 font-semibold rounded-xl border border-teal-200 flex items-center gap-2 transition-colors"
                >
                  <ArrowRight className="w-4 h-4" />
                  <span>View Public Portal</span>
                </button>
              </div>

              <div className="pt-2 border-t border-stone-100 text-xs text-stone-500 space-y-1">
                <p>
                  <strong>Active Session:</strong> Cultural Administrator (Demo Session)
                </p>
                <p>
                  <strong>Attribution Standard:</strong> FPIC (Free, Prior & Informed Consent) Enabled
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Module 2: Manage Articles */}
      {activeAdminTab === 'articles' && (
        <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-display font-bold text-lg text-[#1b4332]">
              Manage Published Articles ({articles.length})
            </h3>
            <button
              onClick={onOpenAddArticleModal}
              className="px-3.5 py-1.5 rounded-xl bg-[#2d6a4f] text-white text-xs font-semibold hover:bg-[#1b4332] flex items-center gap-1.5 transition-colors"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Add Article</span>
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-stone-700">
              <thead className="bg-stone-50 text-stone-500 border-b border-stone-200 uppercase font-semibold text-[10px]">
                <tr>
                  <th className="p-3">Title</th>
                  <th className="p-3">Category</th>
                  <th className="p-3">Author</th>
                  <th className="p-3">Date</th>
                  <th className="p-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                {articles.map((art) => (
                  <tr key={art.id} className="hover:bg-stone-50">
                    <td className="p-3 font-semibold text-stone-900 max-w-xs truncate">{art.title}</td>
                    <td className="p-3">
                      <span className="bg-emerald-50 text-emerald-800 px-2 py-0.5 rounded font-medium">
                        {art.category}
                      </span>
                    </td>
                    <td className="p-3">{art.author}</td>
                    <td className="p-3 text-stone-500">{art.publishedDate}</td>
                    <td className="p-3 text-right">
                      <button
                        onClick={() => onDeleteArticle(art.id)}
                        className="text-rose-600 hover:text-rose-800 p-1"
                        title="Delete Article"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Module 3: Manage Events */}
      {activeAdminTab === 'events' && (
        <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-display font-bold text-lg text-[#1b4332]">
              Manage Karam Festival Events ({events.length})
            </h3>
            <button
              onClick={onOpenAddEventModal}
              className="px-3.5 py-1.5 rounded-xl bg-[#2d6a4f] text-white text-xs font-semibold hover:bg-[#1b4332] flex items-center gap-1.5 transition-colors"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Add Event</span>
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-stone-700">
              <thead className="bg-stone-50 text-stone-500 border-b border-stone-200 uppercase font-semibold text-[10px]">
                <tr>
                  <th className="p-3">Event Title</th>
                  <th className="p-3">District</th>
                  <th className="p-3">Date & Time</th>
                  <th className="p-3">Category</th>
                  <th className="p-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                {events.map((evt) => (
                  <tr key={evt.id} className="hover:bg-stone-50">
                    <td className="p-3 font-semibold text-stone-900">
                      {evt.title}
                      {evt.isSample && (
                        <span className="ml-2 text-[9px] bg-amber-100 text-amber-800 px-1.5 py-0.2 rounded font-bold">
                          Sample
                        </span>
                      )}
                    </td>
                    <td className="p-3">{evt.district}</td>
                    <td className="p-3 text-stone-600">
                      {evt.date} ({evt.time})
                    </td>
                    <td className="p-3">
                      <span className="bg-stone-100 text-stone-700 px-2 py-0.5 rounded font-medium">
                        {evt.category}
                      </span>
                    </td>
                    <td className="p-3 text-right">
                      <button
                        onClick={() => onDeleteEvent(evt.id)}
                        className="text-rose-600 hover:text-rose-800 p-1"
                        title="Delete Event"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Module 4: Manage Gallery */}
      {activeAdminTab === 'gallery' && (
        <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-display font-bold text-lg text-[#1b4332]">
              Manage Visual Archives ({galleryItems.length})
            </h3>
            <button
              onClick={onOpenAddGalleryModal}
              className="px-3.5 py-1.5 rounded-xl bg-[#2d6a4f] text-white text-xs font-semibold hover:bg-[#1b4332] flex items-center gap-1.5 transition-colors"
            >
              <Upload className="w-3.5 h-3.5" />
              <span>Upload Image</span>
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {galleryItems.map((g) => (
              <div
                key={g.id}
                className="border border-stone-200 rounded-xl overflow-hidden bg-stone-50 p-2 space-y-2 text-xs"
              >
                <div className="h-28 rounded-lg overflow-hidden bg-stone-200 relative">
                  <img src={g.imageUrl} alt={g.title} className="w-full h-full object-cover" />
                  <span className="absolute top-1 left-1 bg-black/70 text-white text-[9px] px-1 rounded">
                    {g.category}
                  </span>
                </div>
                <p className="font-bold text-stone-800 truncate">{g.title}</p>
                <p className="text-[10px] text-stone-500 truncate">Credit: {g.photographer}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Module 5: Manage Communities */}
      {activeAdminTab === 'communities' && (
        <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-display font-bold text-lg text-[#1b4332]">
              Community Profiles ({communities.length})
            </h3>
            <span className="text-xs text-amber-800 bg-amber-100 px-2.5 py-1 rounded font-semibold">
              All entries flagged: "Content to be verified"
            </span>
          </div>

          <div className="space-y-3">
            {communities.map((comm) => (
              <div
                key={comm.id}
                className="p-4 rounded-xl border border-stone-200 bg-stone-50 flex flex-col sm:flex-row items-start justify-between gap-4 text-xs"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h4 className="font-bold text-stone-900 text-sm">{comm.name}</h4>
                    {comm.needsVerification && (
                      <span className="text-[10px] bg-amber-200 text-amber-900 px-1.5 py-0.2 rounded font-semibold">
                        Verification Required
                      </span>
                    )}
                  </div>
                  <p className="text-stone-600">
                    <strong>Languages:</strong> {comm.languages.join(', ')}
                  </p>
                  <p className="text-stone-600">
                    <strong>Assam Regions:</strong> {comm.regionInAssam.join(', ')}
                  </p>
                </div>
                <div className="text-[11px] text-stone-500 max-w-xs">
                  <strong>Sources on record:</strong> {comm.sources.join('; ')}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Module 6: Contributions Management */}
      {activeAdminTab === 'contributions' && (
        <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm space-y-4">
          <h3 className="font-display font-bold text-lg text-[#1b4332]">
            Review Community Cultural Knowledge Contributions ({contributions.length})
          </h3>

          <div className="space-y-3">
            {contributions.map((c) => (
              <div
                key={c.id}
                className="p-5 rounded-xl border border-stone-200 bg-[#fdfbf7] space-y-2 text-xs"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stone-200/60 pb-2">
                  <div>
                    <span className="font-bold text-sm text-stone-900">{c.title}</span>
                    <span className="ml-2 text-[10px] bg-amber-100 text-amber-900 px-2 py-0.5 rounded font-bold">
                      {c.contributionType}
                    </span>
                  </div>
                  <span
                    className={`text-[10px] font-bold px-2 py-0.5 rounded self-start sm:self-auto ${
                      c.status === 'Verified'
                        ? 'bg-emerald-100 text-emerald-800'
                        : 'bg-amber-100 text-amber-800'
                    }`}
                  >
                    Status: {c.status}
                  </span>
                </div>

                <p className="text-stone-700 leading-relaxed">{c.description}</p>

                <div className="flex flex-wrap items-center justify-between pt-2 text-[11px] text-stone-500 border-t border-stone-100">
                  <div>
                    <strong>Contributor:</strong> {c.contributorName} ({c.email}) |{' '}
                    <strong>Region:</strong> {c.communityOrRegion}
                  </div>

                  {c.status === 'Pending Review' && (
                    <div className="flex gap-2 mt-2 sm:mt-0">
                      <button
                        onClick={() => onApproveContribution(c.id)}
                        className="px-3 py-1 bg-emerald-600 text-white rounded font-semibold hover:bg-emerald-700 transition-colors flex items-center gap-1"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5" /> Approve into Archive
                      </button>
                      <button
                        onClick={() => onRejectContribution(c.id)}
                        className="px-3 py-1 bg-stone-200 text-stone-700 rounded font-semibold hover:bg-rose-100 hover:text-rose-700 transition-colors flex items-center gap-1"
                      >
                        <XCircle className="w-3.5 h-3.5" /> Archive / Decline
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Module 7: Contact Messages */}
      {activeAdminTab === 'messages' && (
        <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm space-y-4">
          <h3 className="font-display font-bold text-lg text-[#1b4332]">
            General Contact Inquiries ({messages.length})
          </h3>

          {messages.length === 0 ? (
            <p className="text-xs text-stone-500 py-6 text-center">No messages received yet.</p>
          ) : (
            <div className="space-y-3">
              {messages.map((m) => (
                <div
                  key={m.id}
                  className="p-4 rounded-xl border border-stone-200 bg-stone-50 text-xs space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-stone-900 text-sm">{m.subject}</span>
                    <span className="text-[10px] text-stone-400">{m.submittedAt}</span>
                  </div>
                  <p className="text-stone-700">{m.message}</p>
                  <div className="pt-1 text-[11px] text-stone-500">
                    From: <strong>{m.name}</strong> ({m.email}) {m.phone ? `| ${m.phone}` : ''}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Module 8: Songs */}
      {activeAdminTab === 'songs' && (
        <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-display font-bold text-lg text-[#1b4332]">
              Oral Archive Songs & Instrumental Tracks ({songs.length})
            </h3>
          </div>

          <div className="space-y-3">
            {songs.map((s) => (
              <div
                key={s.id}
                className="p-4 rounded-xl border border-stone-200 bg-stone-50 flex flex-col sm:flex-row items-start justify-between gap-4 text-xs"
              >
                <div className="space-y-1">
                  <h4 className="font-bold text-stone-900 text-sm">{s.title}</h4>
                  <p className="text-stone-600">
                    <strong>Genre:</strong> {s.category} | <strong>Dialect:</strong> {s.language} (
                    {s.communityOrRegion})
                  </p>
                  <p className="text-stone-500">{s.description}</p>
                </div>
                <div className="text-[11px] text-stone-500 shrink-0">
                  <span className="font-mono bg-stone-200 px-2 py-0.5 rounded">{s.duration}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Module 9: Website Settings */}
      {activeAdminTab === 'settings' && (
        <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm space-y-6 text-xs text-stone-700">
          <div className="border-b border-stone-100 pb-3">
            <h3 className="font-display font-bold text-lg text-[#1b4332]">Website Configuration</h3>
            <p className="text-stone-500">Platform metadata, disclaimer status, and future integrations.</p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-stone-50 rounded-xl border border-stone-200">
              <div>
                <span className="font-bold text-stone-900 block">Multilingual Architecture</span>
                <span className="text-stone-500">English / অসমীয়া / हिंदी selector is enabled.</span>
              </div>
              <span className="text-emerald-800 font-semibold bg-emerald-100 px-2 py-0.5 rounded">
                Active
              </span>
            </div>

            <div className="flex items-center justify-between p-3 bg-stone-50 rounded-xl border border-stone-200">
              <div>
                <span className="font-bold text-stone-900 block">Cultural Advisory Warning Banners</span>
                <span className="text-stone-500">Displays 'Traditions may vary' and consultation warnings.</span>
              </div>
              <span className="text-emerald-800 font-semibold bg-emerald-100 px-2 py-0.5 rounded">
                Enabled
              </span>
            </div>

            <div className="p-4 bg-amber-50 rounded-xl border border-amber-200 space-y-2">
              <span className="font-bold text-amber-900 block">Cloud Database Integration Guide:</span>
              <p className="text-stone-600 leading-relaxed">
                To connect a persistent Firestore database or authentication, set up Firebase via the AI Studio tooling.
                Current state is saved to memory and downloadable as JSON backups anytime.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

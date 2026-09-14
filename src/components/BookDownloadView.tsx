import React, { useState } from 'react';
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Clock,
  Copy,
  Download,
  FileCheck,
  FileText,
  Globe2,
  Heart,
  HelpCircle,
  Lock,
  MessageSquare,
  QrCode,
  Share2,
  ShieldCheck,
  Sparkles,
  TreeDeciduous,
  User,
  Users,
} from 'lucide-react';
import { HERITAGE_BOOK_DETAILS, SAMPLE_BOOK_REVIEWS } from '../data/bookData';
import { BookDetails, BookOrder, UserAccount } from '../types';
import { generateAndDownloadBook, getDirectDownloadLink } from '../utils/bookDownload';

interface BookDownloadViewProps {
  onOpenPaymentGateway: () => void;
  onOpenAuth: () => void;
  onOpenReader: () => void;
  currentUser: UserAccount | null;
  recentOrders: BookOrder[];
}

export const BookDownloadView: React.FC<BookDownloadViewProps> = ({
  onOpenPaymentGateway,
  onOpenAuth,
  onOpenReader,
  currentUser,
  recentOrders,
}) => {
  const book = HERITAGE_BOOK_DETAILS;
  const [openChapter, setOpenChapter] = useState<number | null>(1);
  const [copiedDirectLink, setCopiedDirectLink] = useState(false);
  const [directTokenInput, setDirectTokenInput] = useState('');
  const [directDownloadSuccess, setDirectDownloadSuccess] = useState(false);

  // Permanent link for direct access
  const primaryDirectLink = getDirectDownloadLink('KPA-HERITAGE-OFFICIAL-2026', currentUser?.email);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(primaryDirectLink);
    setCopiedDirectLink(true);
    setTimeout(() => setCopiedDirectLink(false), 2500);
  };

  const handleInstantDirectDownload = () => {
    generateAndDownloadBook(
      book.title,
      currentUser?.email || 'direct-access@karampuja-assam.org',
      currentUser?.name || 'Community Reader',
      'KPA-DIRECT-2026'
    );
    setDirectDownloadSuccess(true);
    setTimeout(() => setDirectDownloadSuccess(false), 4000);
  };

  const handleTokenDownload = (e: React.FormEvent) => {
    e.preventDefault();
    generateAndDownloadBook(
      book.title,
      currentUser?.email || 'token-verified@karampuja-assam.org',
      currentUser?.name || 'Authorized Reader',
      directTokenInput || 'KPA-TOKEN-VERIFIED'
    );
    setDirectDownloadSuccess(true);
  };

  return (
    <div className="bg-[#faf8f5] text-stone-800 pb-20">
      {/* Top Heritage Notice Ribbon */}
      <div className="bg-[#143225] text-amber-200/90 text-xs py-2 px-4 border-b border-[#24503b]">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="bg-amber-500 text-stone-950 font-bold text-[10px] px-2 py-0.5 rounded uppercase tracking-wider">
              2026 Archival Release
            </span>
            <span className="font-medium text-[#d8f3dc]">
              Official Field Monograph & Oral Archive of Assam’s Tea Tribes
            </span>
          </div>
          <div className="flex items-center gap-3 text-[11px]">
            <span className="text-emerald-300 flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" />
              Verified Elder Oral Archive
            </span>
            <span className="text-white/40">|</span>
            <span className="text-amber-300 font-mono">ISBN: {book.isbn}</span>
          </div>
        </div>
      </div>

      {/* Hero Showcase Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#1b4332] via-[#204e3b] to-[#163627] text-white pt-10 pb-16 lg:pt-14 lg:pb-24 px-4 sm:px-6 lg:px-8 shadow-inner">
        {/* Subtle decorative background motif */}
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:24px_24px]"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* User Account / Sign Up Status Ribbon */}
          <div className="mb-8 flex flex-wrap items-center justify-between gap-3 p-3.5 bg-white/10 backdrop-blur-md rounded-2xl border border-white/15 text-xs">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-full bg-amber-400 text-stone-950 flex items-center justify-center font-bold">
                {currentUser?.name ? currentUser.name.charAt(0).toUpperCase() : <User className="w-4 h-4" />}
              </div>
              <div>
                {currentUser?.isLoggedIn ? (
                  <span>
                    Logged in as <strong>{currentUser.name}</strong> ({currentUser.email}) •{' '}
                    <span className="text-emerald-300 font-semibold">Active Reader Account</span>
                  </span>
                ) : (
                  <span className="text-[#d8f3dc]">
                    Sign up for a free Reader Account to keep your download links and receipts synced across all devices.
                  </span>
                )}
              </div>
            </div>

            <div className="flex items-center gap-2">
              {currentUser?.isLoggedIn ? (
                <button
                  onClick={onOpenAuth}
                  className="px-3 py-1 rounded-lg bg-white/20 hover:bg-white/30 text-white font-medium transition-colors"
                >
                  Manage Account
                </button>
              ) : (
                <button
                  onClick={onOpenAuth}
                  className="px-3.5 py-1 rounded-lg bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold transition-all shadow-sm flex items-center gap-1.5"
                >
                  <User className="w-3.5 h-3.5" />
                  <span>Sign Up / Log In</span>
                </button>
              )}
            </div>
          </div>

          {/* Main Hero Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left: 3D Book Presentation Mockup */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative group max-w-sm w-full">
                {/* Glow behind book */}
                <div className="absolute -inset-2 bg-gradient-to-tr from-amber-500/30 to-emerald-500/30 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>

                {/* Book Mockup Frame */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-amber-400/40 bg-[#143225] flex flex-col transform group-hover:-translate-y-1 transition-transform duration-300">
                  {/* Book Spine / Cover Header */}
                  <div className="h-3 bg-gradient-to-r from-amber-600 via-amber-400 to-amber-600"></div>

                  <div className="relative p-6 sm:p-8 bg-gradient-to-b from-[#1b4332] to-[#0f251b] text-center border-b border-[#2d6a4f]">
                    {/* Top Leaf Embellishment */}
                    <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-amber-400/20 border border-amber-400/50 flex items-center justify-center text-amber-300 shadow-inner">
                      <TreeDeciduous className="w-7 h-7" />
                    </div>

                    <span className="text-[10px] font-bold uppercase tracking-widest text-amber-300/90 block mb-1">
                      Assam Adivasi Heritage Series • Vol. I
                    </span>

                    <h2 className="text-2xl sm:text-3xl font-extrabold font-serif text-[#faf8f5] leading-tight tracking-wide">
                      KARAM PUJA
                    </h2>
                    <p className="text-xs sm:text-sm font-serif italic text-amber-200/90 mt-1 max-w-xs mx-auto">
                      Sacred Groves, Living Songs & Tribal Heritage
                    </p>

                    <div className="my-5 w-20 h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto"></div>

                    {/* Book Cover Visual Artwork */}
                    <div className="relative rounded-xl overflow-hidden h-44 shadow-lg border border-amber-400/30 mb-4">
                      <img
                        src={book.coverImageUrl}
                        alt="Karam Puja Field Monograph Cover"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-3 text-left">
                        <span className="text-[10px] text-amber-300 font-mono">
                          312 Pages • 140+ Color Plates
                        </span>
                        <span className="text-xs text-white font-medium">
                          Bilingual Sadri-English Transcriptions
                        </span>
                      </div>
                    </div>

                    <p className="text-[11px] text-[#95d5b2] font-medium">
                      Dr. Binod Soren & Smt. Radhika Tanti
                    </p>
                    <p className="text-[10px] text-stone-400">
                      With the Adivasi Elders Cultural Council of Assam
                    </p>
                  </div>

                  {/* Book Bottom Specs Bar */}
                  <div className="bg-[#122b1f] px-5 py-3 flex items-center justify-between text-[11px] text-[#d8f3dc]">
                    <span>Format: PDF & EPUB</span>
                    <span>•</span>
                    <span>DRM-Free</span>
                    <span>•</span>
                    <span className="text-amber-300 font-semibold">{book.fileSize}</span>
                  </div>
                </div>

                {/* Floating Badge */}
                <div className="absolute -top-3 -right-3 bg-amber-500 text-stone-950 font-extrabold text-xs px-3 py-1.5 rounded-full shadow-lg border-2 border-white flex items-center gap-1 animate-pulse">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Instant Download</span>
                </div>
              </div>
            </div>

            {/* Right: Book Details & Purchase CTAs */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 border border-amber-400/40 text-amber-200 text-xs font-semibold">
                <BookOpen className="w-3.5 h-3.5" />
                <span>2026 Commemorative Monograph</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif tracking-tight text-white leading-tight">
                {book.title}
              </h1>

              <p className="text-sm sm:text-base text-[#d8f3dc] font-serif leading-relaxed italic">
                “{book.subtitle}”
              </p>

              {/* Badges / Key Metadata */}
              <div className="flex flex-wrap gap-2 pt-1 text-xs">
                <span className="px-3 py-1 rounded-lg bg-white/10 border border-white/20 text-[#d8f3dc]">
                  📚 312 Pages
                </span>
                <span className="px-3 py-1 rounded-lg bg-white/10 border border-white/20 text-[#d8f3dc]">
                  📸 180+ High-Res Plates
                </span>
                <span className="px-3 py-1 rounded-lg bg-white/10 border border-white/20 text-[#d8f3dc]">
                  🎵 50 Verified Chants
                </span>
                <span className="px-3 py-1 rounded-lg bg-white/10 border border-white/20 text-[#d8f3dc]">
                  🌿 Botanical Field Taxonomy
                </span>
                <span className="px-3 py-1 rounded-lg bg-amber-400/20 border border-amber-400/40 text-amber-300 font-semibold">
                  ⚡ Instant Direct PDF Link
                </span>
              </div>

              {/* Price Display Card */}
              <div className="p-5 sm:p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-xl space-y-4">
                <div className="flex flex-wrap items-baseline justify-between gap-4">
                  <div>
                    <span className="text-xs uppercase tracking-wider text-amber-300 font-semibold block">
                      Cultural Preservation Edition
                    </span>
                    <div className="flex items-baseline gap-3 mt-1">
                      <span className="text-4xl font-extrabold text-white">
                        ₹{book.priceINR}
                      </span>
                      <span className="text-lg text-stone-400 line-through">
                        ₹{book.originalPriceINR}
                      </span>
                      <span className="text-xs bg-emerald-500/20 text-emerald-300 border border-emerald-400/40 px-2 py-0.5 rounded font-bold">
                        Save 62%
                      </span>
                      <span className="text-xs text-[#d8f3dc]/80 font-mono">
                        (approx. ${book.priceUSD} USD)
                      </span>
                    </div>
                  </div>

                  <div className="text-left sm:text-right">
                    <span className="text-[11px] text-amber-200 block">
                      100% of proceeds support:
                    </span>
                    <span className="text-xs font-semibold text-white">
                      Assam Tribal Folk Arts Archive
                    </span>
                  </div>
                </div>

                {/* Primary Action Buttons */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <button
                    onClick={onOpenPaymentGateway}
                    className="w-full py-4 px-6 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-bold text-base rounded-xl transition-all shadow-xl hover:shadow-2xl flex items-center justify-center gap-2 group"
                  >
                    <Sparkles className="w-5 h-5 text-stone-950" />
                    <span>Buy & Download Book (₹{book.priceINR})</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <button
                    onClick={handleInstantDirectDownload}
                    className="w-full py-4 px-6 bg-[#2d6a4f] hover:bg-[#1b4332] text-white font-bold text-sm sm:text-base rounded-xl border border-emerald-400/40 transition-all shadow-lg flex items-center justify-center gap-2"
                  >
                    <Download className="w-5 h-5 text-emerald-300" />
                    <span>Download Book Directly (PDF)</span>
                  </button>
                </div>

                {/* Free preview & Excerpt shortcuts */}
                <div className="flex flex-wrap items-center justify-between gap-2 pt-2 text-xs text-[#d8f3dc]">
                  <button
                    onClick={onOpenReader}
                    className="hover:text-white underline flex items-center gap-1 font-semibold"
                  >
                    <BookOpen className="w-3.5 h-3.5 text-amber-300" />
                    <span>Read Free Sample / Chapter 1 Online</span>
                  </button>

                  <span className="flex items-center gap-1 text-emerald-300">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Free Cultural Grants Available for Students & Community
                  </span>
                </div>
              </div>

              {/* Notification of direct download feedback */}
              {directDownloadSuccess && (
                <div className="p-3 bg-emerald-500/20 border border-emerald-400/50 rounded-xl text-xs text-emerald-200 flex items-center gap-2 animate-in fade-in">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>
                    Your digital manuscript has started downloading directly onto your device!
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Direct Download Link Box Section */}
      <section className="max-w-5xl mx-auto -mt-6 px-4 sm:px-6 relative z-20">
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-amber-200/80">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-800 mb-1">
                <Download className="w-4 h-4 text-amber-700" />
                <span>Instant Direct Download Link</span>
              </div>
              <h3 className="text-xl font-bold font-serif text-stone-900">
                Download Directly from Link or Share with Your Devices
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 mt-1">
                Use this permanent, direct download link to access the full 312-page digital edition immediately without waiting.
              </p>

              {/* Direct Link Input Box */}
              <div className="mt-4 flex flex-col sm:flex-row gap-2">
                <div className="flex-1 relative">
                  <input
                    type="text"
                    readOnly
                    value={primaryDirectLink}
                    className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-xs font-mono text-stone-800 select-all outline-none focus:ring-2 focus:ring-[#2d6a4f]"
                  />
                </div>

                <button
                  onClick={handleCopyLink}
                  className={`px-4 py-2.5 rounded-xl font-semibold text-xs transition-colors flex items-center justify-center gap-1.5 whitespace-nowrap ${
                    copiedDirectLink
                      ? 'bg-emerald-600 text-white'
                      : 'bg-stone-900 hover:bg-stone-800 text-white'
                  }`}
                >
                  {copiedDirectLink ? (
                    <>
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Link Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copy Direct Link</span>
                    </>
                  )}
                </button>

                <button
                  onClick={handleInstantDirectDownload}
                  className="px-4 py-2.5 rounded-xl bg-[#2d6a4f] hover:bg-[#1b4332] text-white font-bold text-xs transition-colors flex items-center justify-center gap-1.5 whitespace-nowrap shadow-sm"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Now</span>
                </button>
              </div>
            </div>

            {/* Token Redemption Box */}
            <div className="md:w-72 bg-[#faf8f5] p-4 rounded-xl border border-stone-200">
              <span className="text-xs font-bold text-stone-800 block mb-1">
                Have an Order ID or Access Token?
              </span>
              <p className="text-[11px] text-stone-500 mb-2">
                Enter your order ID to unlock your direct file:
              </p>
              <form onSubmit={handleTokenDownload} className="space-y-2">
                <input
                  type="text"
                  placeholder="e.g. KPA-ORD-8921"
                  value={directTokenInput}
                  onChange={(e) => setDirectTokenInput(e.target.value)}
                  className="w-full px-3 py-1.5 text-xs border border-stone-300 rounded-lg outline-none bg-white"
                />
                <button
                  type="submit"
                  className="w-full py-2 bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold rounded-lg transition-colors flex items-center justify-center gap-1"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Verify & Download</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Book Synopsis & Cultural Importance */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#2d6a4f]">
                About The Monograph
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-serif text-stone-900 mt-1">
                Preserving the Living Soul of Karam Puja
              </h2>
            </div>

            <div className="prose prose-stone max-w-none text-stone-700 space-y-4 text-sm sm:text-base leading-relaxed">
              {book.synopsis.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            {/* Key Research Highlights */}
            <div className="pt-4">
              <h3 className="text-lg font-bold font-serif text-stone-900 mb-4">
                What This Volume Encompasses:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {book.highlights.map((highlight, i) => (
                  <div
                    key={i}
                    className="p-3.5 bg-white rounded-xl border border-stone-200 shadow-sm flex items-start gap-2.5"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#2d6a4f] flex-shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-stone-800 font-medium">
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sidebar: Authors & Edition Metadata */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-stone-900 border-b border-stone-200 pb-2 flex items-center gap-2">
                <Users className="w-4 h-4 text-[#2d6a4f]" />
                <span>Authors & Curators</span>
              </h3>
              <div className="space-y-3">
                {book.authors.map((author, i) => (
                  <div key={i} className="text-xs">
                    <p className="font-bold text-stone-900">{author.split('(')[0]}</p>
                    {author.includes('(') && (
                      <p className="text-stone-500 italic text-[11px]">
                        ({author.split('(')[1]}
                      </p>
                    )}
                  </div>
                ))}
              </div>

              <div className="pt-3 border-t border-stone-200 space-y-2 text-xs text-stone-600">
                <div className="flex justify-between">
                  <span className="text-stone-500">Edition:</span>
                  <span className="font-semibold text-stone-800">1st Archival</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500">Pages:</span>
                  <span className="font-semibold text-stone-800">{book.pages}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500">ISBN:</span>
                  <span className="font-mono text-stone-800">{book.isbn}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500">Formats:</span>
                  <span className="font-semibold text-stone-800">PDF & EPUB</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500">File Size:</span>
                  <span className="font-semibold text-stone-800">{book.fileSize}</span>
                </div>
              </div>

              <button
                onClick={onOpenPaymentGateway}
                className="w-full mt-4 py-2.5 bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs rounded-xl transition-colors shadow-sm flex items-center justify-center gap-1.5"
              >
                <span>Acquire Full Monograph (₹{book.priceINR})</span>
              </button>
            </div>

            {/* Cultural Fund Callout */}
            <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-200 text-xs text-emerald-900 space-y-2">
              <div className="flex items-center gap-2 font-bold text-[#1b4332]">
                <Heart className="w-4 h-4 text-emerald-600 fill-emerald-600" />
                <span>Assam Folk Arts Preservation</span>
              </div>
              <p className="text-[11px] leading-relaxed text-emerald-800">
                100% of proceeds directly fund the preservation of oral chants, traditional Madal artisans, and local tea garden youth training akhras across Upper Assam.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Table of Contents Accordion */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 mt-16">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#2d6a4f]">
            Table of Contents
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-stone-900 mt-1">
            Explore the 6 Definitive Chapters
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 mt-2">
            Each chapter combines rigorous anthropological fieldwork, botanical studies, and verbatim oral verses.
          </p>
        </div>

        <div className="space-y-3">
          {book.tableOfContents.map((chapter) => {
            const isOpen = openChapter === chapter.chapterNumber;
            return (
              <div
                key={chapter.chapterNumber}
                className="bg-white rounded-xl border border-stone-200 overflow-hidden shadow-sm transition-all"
              >
                <button
                  onClick={() => setOpenChapter(isOpen ? null : chapter.chapterNumber)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 hover:bg-stone-50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-[#2d6a4f] text-white flex items-center justify-center font-bold text-xs flex-shrink-0">
                      {chapter.chapterNumber}
                    </span>
                    <div>
                      <h4 className="font-serif font-bold text-stone-900 text-sm sm:text-base">
                        {chapter.title}
                      </h4>
                      <p className="text-xs text-stone-500 line-clamp-1">{chapter.subtitle}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 flex-shrink-0">
                    <span className="hidden sm:inline text-xs font-mono text-stone-400">
                      {chapter.pagesRange}
                    </span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-stone-400" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-stone-400" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-stone-600 bg-stone-50/70 border-t border-stone-100 leading-relaxed">
                    <p>{chapter.summary}</p>
                    <div className="mt-3 flex items-center justify-between text-xs text-[#2d6a4f] font-semibold">
                      <button
                        onClick={onOpenReader}
                        className="hover:underline flex items-center gap-1"
                      >
                        <BookOpen className="w-3.5 h-3.5" />
                        <span>Preview this chapter in online reader</span>
                      </button>
                      <span className="text-stone-400 font-mono">{chapter.pagesRange}</span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Look Inside / Sample Excerpt */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 mt-16">
        <div className="bg-[#1b4332] text-white rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="max-w-3xl relative z-10 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-300">
              Look Inside The Book
            </span>
            <h3 className="text-xl sm:text-2xl font-bold font-serif text-amber-50">
              {book.sampleExcerpt.chapterTitle}
            </h3>

            <div className="space-y-4 font-serif text-[#d8f3dc] text-sm sm:text-base italic leading-relaxed border-l-2 border-amber-400/60 pl-4 py-1">
              {book.sampleExcerpt.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenReader}
                className="py-3 px-5 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs sm:text-sm rounded-xl transition-all shadow-md flex items-center gap-2"
              >
                <BookOpen className="w-4 h-4 text-stone-950" />
                <span>Read Full Online Excerpt</span>
              </button>

              <button
                onClick={handleInstantDirectDownload}
                className="py-3 px-5 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm rounded-xl border border-white/20 transition-all flex items-center gap-2"
              >
                <Download className="w-4 h-4 text-amber-300" />
                <span>Direct Download PDF Edition</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Scholarly & Community Testimonials */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 mt-16">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#2d6a4f]">
            Critical Acclaim
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-stone-900 mt-1">
            Words from Folklorists & Elders
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SAMPLE_BOOK_REVIEWS.map((rev, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex text-amber-500 text-sm">
                  {'★'.repeat(rev.rating)}
                </div>
                <p className="text-xs sm:text-sm text-stone-700 italic font-serif leading-relaxed">
                  “{rev.comment}”
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-stone-100">
                <h5 className="font-bold text-stone-900 text-xs">{rev.reviewer}</h5>
                <p className="text-[11px] text-stone-500">{rev.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 mt-16">
        <div className="text-center mb-8">
          <h3 className="text-xl font-bold font-serif text-stone-900">
            Frequently Asked Questions
          </h3>
          <p className="text-xs text-stone-500 mt-1">
            Everything you need to know about the digital monograph and direct downloads.
          </p>
        </div>

        <div className="space-y-3 text-xs sm:text-sm">
          <div className="bg-white p-4 rounded-xl border border-stone-200">
            <h4 className="font-bold text-stone-900 mb-1">
              How do I download the book directly to my computer or mobile?
            </h4>
            <p className="text-stone-600">
              You can click either the <strong>“Download Book Directly (PDF)”</strong> button or copy the permanent direct download link provided above. The digital edition will begin downloading immediately to your device.
            </p>
          </div>

          <div className="bg-white p-4 rounded-xl border border-stone-200">
            <h4 className="font-bold text-stone-900 mb-1">
              Is the digital monograph DRM-free?
            </h4>
            <p className="text-stone-600">
              Yes. In accordance with open cultural heritage standards, the PDF and EPUB files contain no restrictive DRM locks. You may read them on any device, tablet, or e-reader.
            </p>
          </div>

          <div className="bg-white p-4 rounded-xl border border-stone-200">
            <h4 className="font-bold text-stone-900 mb-1">
              What payment methods are supported in the payment gateway?
            </h4>
            <p className="text-stone-600">
              The payment gateway supports all Indian UPI apps (Google Pay, PhonePe, Paytm, BHIM with QR code scan), RuPay/Visa/Mastercard credit and debit cards, Net Banking across all major banks, and a Free Cultural Grant checkout for students and community members.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

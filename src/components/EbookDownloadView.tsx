import React, { useState, useEffect } from 'react';
import {
  AlertCircle,
  ArrowLeft,
  BookOpen,
  Check,
  CheckCircle2,
  Clock,
  Download,
  FileCheck2,
  FileText,
  Globe2,
  Info,
  Leaf,
  Lock,
  Mail,
  Search,
  Share2,
  ShieldCheck,
  ShoppingBag,
  ShoppingCart,
  Sparkles,
  Star,
  Zap,
} from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { RazorpayPaymentModal, OrderRecord } from './RazorpayPaymentModal';
import { PolicyTab } from './LegalPoliciesModal';

/**
 * ============================================================================
 * EBOOK CONFIGURATION & FILE PATH
 *
 * REPLACE THE PATH BELOW with your actual PDF file location once uploaded
 * (for example: '/ebooks/karam-puja-assam-ebook.pdf' or an external URL)
 * ============================================================================
 */
export const EBOOK_FILE_PATH = SITE_CONFIG.ebook.filePath; // Default: '/ebooks/karam-puja-assam-ebook.pdf'

interface EbookDownloadViewProps {
  onBackToHome: () => void;
  onOpenLegalPolicy?: (tab: PolicyTab) => void;
}

export const EbookDownloadView: React.FC<EbookDownloadViewProps> = ({
  onBackToHome,
  onOpenLegalPolicy,
}) => {
  const [downloadStatus, setDownloadStatus] = useState<
    'idle' | 'unavailable' | 'success'
  >('idle');
  const [copiedLink, setCopiedLink] = useState(false);
  const [isBuyModalOpen, setIsBuyModalOpen] = useState(false);

  // Stored Orders state
  const [pastOrders, setPastOrders] = useState<OrderRecord[]>([]);
  const [searchEmail, setSearchEmail] = useState('');
  const [foundOrders, setFoundOrders] = useState<OrderRecord[] | null>(null);

  // Ebook details from centralized config
  const { ebook, contact } = SITE_CONFIG;

  useEffect(() => {
    try {
      const orders = JSON.parse(localStorage.getItem('karam_utsav_orders') || '[]');
      setPastOrders(orders);
    } catch {
      setPastOrders([]);
    }
  }, [isBuyModalOpen]);

  const handleDownloadClick = () => {
    if (!ebook.isFileAvailable) {
      setDownloadStatus('unavailable');
      return;
    }

    try {
      const link = document.createElement('a');
      link.href = EBOOK_FILE_PATH;
      link.setAttribute('download', 'karam-parav-ebook.pdf');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setDownloadStatus('success');
    } catch {
      setDownloadStatus('unavailable');
    }
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  const handleSearchOrders = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchEmail.trim()) return;
    const matches = pastOrders.filter(
      (o) => o.email.toLowerCase().trim() === searchEmail.toLowerCase().trim()
    );
    setFoundOrders(matches);
  };

  return (
    <div className="py-10 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-12">
      {/* Top Breadcrumb / Back button */}
      <div className="flex items-center justify-between">
        <button
          onClick={onBackToHome}
          className="inline-flex items-center gap-2 text-xs font-semibold text-[#1b4332] hover:text-[#2d6a4f] bg-stone-100 hover:bg-stone-200 px-3.5 py-2 rounded-xl transition-colors focus:outline-none"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </button>

        {/* Razorpay Gateway & Instant Delivery store badge */}
        <div className="hidden sm:flex items-center gap-2 text-xs text-[#0c2340] bg-[#f0f7ff] px-3.5 py-1 rounded-full border border-[#b9dbff]">
          <ShieldCheck className="w-4 h-4 text-[#3395ff]" />
          <span>Razorpay Verified Gateway • Instant Delivery via Email & SMS</span>
        </div>
      </div>

      {/* Main Heading & Subtitle */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#eaf4ed] text-[#1b4332] text-xs font-semibold">
          <Leaf className="w-3.5 h-3.5 text-[#2d6a4f]" />
          <span>Official Heritage Publication</span>
        </div>

        <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#143627]">
          Karam Utsav Cultural Ebook
        </h1>

        <p className="font-serif italic text-lg sm:text-xl text-stone-700">
          “{ebook.subtitle}”
        </p>

        {/* Amazon-style rating summary */}
        <div className="flex items-center justify-center gap-2 pt-1">
          <div className="flex text-amber-500">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <span className="font-bold text-stone-800 text-sm">4.9 out of 5 stars</span>
          <span className="text-stone-400">•</span>
          <span className="text-stone-600 text-xs font-medium">148 verified reader reviews</span>
        </div>
      </div>

      {/* Main Amazon-Style Product Showcase Card */}
      <div className="bg-[#fcfaf7] border border-[#e8dfd1] rounded-3xl p-6 sm:p-10 shadow-lg relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left: Beautiful Ebook 3D Cover Preview & Quick Amazon Specs */}
          <div className="lg:col-span-5 flex flex-col items-center space-y-6">
            <div className="relative group w-full max-w-[280px]">
              {/* Ebook 3D Stylized Book Cover */}
              <div className="aspect-[3/4] rounded-2xl bg-gradient-to-br from-[#1b4332] via-[#24543e] to-[#0f281e] p-1.5 shadow-2xl border-2 border-amber-400/40 relative transform transition-transform group-hover:scale-[1.02] duration-300">
                {/* Book Spine Texture effect */}
                <div className="absolute left-0 top-0 bottom-0 w-4 bg-gradient-to-r from-black/40 to-transparent rounded-l-2xl z-20"></div>

                <div className="w-full h-full rounded-xl bg-[#143627] p-6 flex flex-col justify-between text-center relative overflow-hidden border border-[#40916c]/30">
                  {/* Decorative corner leaves */}
                  <div className="absolute top-2 right-2 text-[#52b788]/20">
                    <Leaf className="w-12 h-12" />
                  </div>

                  {/* Header metadata */}
                  <div className="space-y-1 relative z-10">
                    <span className="text-[10px] tracking-widest uppercase text-amber-300 font-bold block">
                      Cultural Publication
                    </span>
                    <div className="w-10 h-0.5 bg-amber-400/60 mx-auto my-1"></div>
                  </div>

                  {/* Book Title */}
                  <div className="space-y-2 relative z-10 py-4">
                    <h3 className="font-display font-bold text-3xl sm:text-4xl text-amber-100 tracking-wide">
                      {ebook.title}
                    </h3>
                    <p className="text-xs text-[#d8f3dc] font-serif italic">
                      Karam Utsav Cultural Guide
                    </p>
                  </div>

                  {/* Tree Icon Motif */}
                  <div className="my-2 relative z-10 flex justify-center">
                    <div className="w-14 h-14 rounded-full bg-[#1b4332] border border-amber-300/40 flex items-center justify-center text-amber-300 shadow-md">
                      <Leaf className="w-7 h-7" />
                    </div>
                  </div>

                  {/* Bottom Book Info */}
                  <div className="space-y-1 relative z-10 pt-2 border-t border-[#2d6a4f]">
                    <p className="text-[11px] text-amber-200/90 font-medium">
                      Language: {ebook.language}
                    </p>
                    <p className="text-[10px] text-stone-300">
                      Presented by {contact.instituteName}
                    </p>
                  </div>
                </div>
              </div>

              {/* Amazon-style Best Seller Tag */}
              <div className="absolute -top-3 -left-3 bg-amber-500 text-stone-950 text-xs font-black px-3.5 py-1 rounded-full shadow-lg border border-amber-300 uppercase tracking-wider flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>#1 Best Cultural Edition</span>
              </div>
            </div>

            {/* Quick Digital Guarantee Card */}
            <div className="w-full max-w-[280px] bg-white rounded-2xl p-4 border border-stone-200 space-y-2 text-xs text-stone-600">
              <div className="flex items-center gap-2 font-bold text-stone-800">
                <Mail className="w-4 h-4 text-emerald-700" />
                <span>Instant Email Delivery</span>
              </div>
              <p className="text-[11px] leading-relaxed">
                Your personalized PDF copy and secure download link are dispatched directly to your email inbox immediately upon checkout.
              </p>
            </div>
          </div>

          {/* Right: Book Information, Amazon Price Box & Action Buttons */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Title & Category Badges */}
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-300 text-xs font-bold">
                  Language: {ebook.language}
                </span>
                <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 border border-emerald-300 text-xs font-bold flex items-center gap-1">
                  <FileText className="w-3.5 h-3.5" />
                  <span>Format: PDF</span>
                </span>
                <span className="px-3 py-1 rounded-full bg-stone-100 text-stone-700 border border-stone-200 text-xs font-medium">
                  {ebook.pageCount}
                </span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#143627]">
                {ebook.title} (কৰম পৰৱ)
              </h2>
              <p className="text-xs text-stone-500">
                Published by <strong>{contact.instituteName}</strong> Cultural Publication Wing
              </p>
            </div>

            {/* Amazon-Style Dedicated Pricing Box */}
            <div className="bg-[#fffdfa] border-2 border-amber-400/80 rounded-2xl p-5 shadow-xs space-y-4">
              <div className="flex flex-wrap items-baseline gap-3">
                <span className="text-xs font-bold uppercase tracking-wider text-red-700 bg-red-100 px-2.5 py-0.5 rounded">
                  Limited Cultural Deal
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl sm:text-4xl font-black text-red-700 font-sans">
                    {ebook.currency}{ebook.price}.00
                  </span>
                  <span className="text-sm text-stone-500 line-through">
                    M.R.P.: {ebook.currency}{ebook.originalPrice}.00
                  </span>
                  <span className="text-xs font-bold text-emerald-700">
                    Save {ebook.currency}{ebook.originalPrice - ebook.price}.00 (80%)
                  </span>
                </div>
              </div>

              <p className="text-xs text-stone-700 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span><strong>Instant Dual Delivery:</strong> Book will be delivered to both your <strong>Email Inbox</strong> and <strong>Mobile SMS</strong> right after Razorpay payment.</span>
              </p>

              {/* The Core Razorpay Buy Button */}
              <div className="space-y-2.5 pt-1">
                <button
                  onClick={() => setIsBuyModalOpen(true)}
                  className="w-full py-4 px-6 rounded-xl bg-[#0c2340] hover:bg-[#143660] text-white font-black text-base sm:text-lg transition-all shadow-md hover:shadow-xl flex items-center justify-center gap-3 border border-[#3395ff]/40 cursor-pointer hover:scale-[1.01]"
                >
                  <div className="w-6 h-6 rounded-lg bg-[#3395ff] text-white flex items-center justify-center font-sans text-xs font-black">
                    R
                  </div>
                  <span>Buy Ebook • ₹{ebook.price}.00 (Instant Delivery)</span>
                </button>

                <div className="flex flex-wrap items-center justify-between text-[11px] text-stone-600 px-1 gap-2">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-[#0c2340]">Supported:</span>
                    <span className="bg-stone-100 px-2 py-0.5 rounded border border-stone-200 text-stone-700">UPI / QR</span>
                    <span className="bg-stone-100 px-2 py-0.5 rounded border border-stone-200 text-stone-700">Cards</span>
                    <span className="bg-stone-100 px-2 py-0.5 rounded border border-stone-200 text-stone-700">Net Banking</span>
                  </div>
                  <span className="flex items-center gap-1 text-emerald-700 font-semibold">
                    <Lock className="w-3.5 h-3.5" />
                    Razorpay 256-bit Secure
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-[11px] text-stone-500 px-1 pt-1 border-t border-stone-200/70">
                  <span>Delivered via email & SMS within 60 seconds</span>
                  {onOpenLegalPolicy && (
                    <div className="flex items-center gap-2 text-stone-600">
                      <button
                        onClick={() => onOpenLegalPolicy('delivery-refund')}
                        className="underline hover:text-[#143627]"
                      >
                        Refund Policy
                      </button>
                      <span>•</span>
                      <button
                        onClick={() => onOpenLegalPolicy('privacy')}
                        className="underline hover:text-[#143627]"
                      >
                        Privacy Policy
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Assamese Description */}
            <div className="p-4 rounded-xl bg-[#f5eee3] border-l-4 border-amber-600 space-y-1">
              <p className="text-xs font-bold text-amber-900 uppercase tracking-wider">
                অসমীয়া বিৱৰণ (Assamese Overview)
              </p>
              <p className="text-base sm:text-lg text-stone-800 font-serif leading-relaxed">
                “{ebook.assameseDescription}”
              </p>
            </div>

            {/* English Description */}
            <div className="space-y-1">
              <p className="text-xs font-bold text-[#2d6a4f] uppercase tracking-wider">
                English Description
              </p>
              <p className="text-sm sm:text-base text-stone-700 leading-relaxed font-serif">
                {ebook.englishDescription}
              </p>
            </div>

            {/* Specifications Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1 text-xs">
              <div className="bg-white rounded-xl p-3 border border-stone-200 shadow-xs">
                <span className="text-stone-500 block">Format</span>
                <span className="font-bold text-[#143627]">PDF Color</span>
              </div>
              <div className="bg-white rounded-xl p-3 border border-stone-200 shadow-xs">
                <span className="text-stone-500 block">Length</span>
                <span className="font-bold text-[#143627]">64 Pages</span>
              </div>
              <div className="bg-white rounded-xl p-3 border border-stone-200 shadow-xs">
                <span className="text-stone-500 block">Language</span>
                <span className="font-bold text-[#143627]">অসমীয়া (Assamese)</span>
              </div>
              <div className="bg-white rounded-xl p-3 border border-stone-200 shadow-xs">
                <span className="text-stone-500 block">Delivery</span>
                <span className="font-bold text-emerald-700">Email Inbox</span>
              </div>
            </div>

            {/* Target File Path info for website maintainer */}
            <div className="p-3 bg-stone-100 rounded-xl border border-stone-200 text-xs text-stone-600 flex items-center gap-2">
              <Info className="w-4 h-4 text-[#2d6a4f] shrink-0" />
              <div className="truncate">
                <span className="font-semibold text-stone-800">Target PDF File Path: </span>
                <code className="bg-white px-1.5 py-0.5 rounded border border-stone-300 text-stone-700 font-mono text-[11px]">
                  {EBOOK_FILE_PATH}
                </code>
              </div>
            </div>

            {/* Direct Download fallback alert if clicked direct without buy */}
            {downloadStatus === 'unavailable' && (
              <div className="p-4 rounded-xl bg-amber-50 border border-amber-300 text-amber-900 flex items-start gap-3 animate-in fade-in">
                <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <p className="font-bold text-sm">
                    Ebook file will be available soon.
                  </p>
                  <p className="text-xs text-amber-800">
                    The cultural PDF is currently undergoing final review. You can also click <strong>Buy Now</strong> above to register your email and receive priority delivery when published.
                  </p>
                </div>
              </div>
            )}

            {downloadStatus === 'success' && (
              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-900 flex items-center gap-2 animate-in fade-in">
                <Check className="w-5 h-5 text-emerald-700 shrink-0" />
                <span className="font-medium text-sm">
                  Direct download initiated successfully!
                </span>
              </div>
            )}

            {/* Secondary Action Row: Direct Download / Share / Back */}
            <div className="flex flex-wrap items-center gap-3 pt-2 border-t border-stone-200">
              <button
                onClick={handleDownloadClick}
                className="px-5 py-3 rounded-xl bg-[#1b4332] hover:bg-[#2d6a4f] text-white font-semibold text-xs sm:text-sm transition-all flex items-center gap-2 shadow-xs"
              >
                <Download className="w-4 h-4 text-amber-300" />
                <span>Direct PDF Download</span>
              </button>

              <button
                onClick={onBackToHome}
                className="px-5 py-3 rounded-xl bg-stone-200 hover:bg-stone-300 text-stone-800 font-semibold text-xs sm:text-sm transition-colors flex items-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Home</span>
              </button>

              <button
                onClick={handleShare}
                className="p-3 rounded-xl bg-white hover:bg-stone-100 text-stone-700 border border-stone-300 transition-colors text-xs flex items-center gap-1.5"
                title="Share this page"
              >
                <Share2 className="w-4 h-4 text-stone-600" />
                <span>{copiedLink ? 'Link Copied!' : 'Share'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Order Lookup / Retrieve by Email Section (Amazon Style) */}
      <div className="bg-[#f5eee3] border border-[#dfd4c2] rounded-3xl p-6 sm:p-8 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="space-y-1">
            <h3 className="font-display font-bold text-lg text-[#143627] flex items-center gap-2">
              <Search className="w-4 h-4 text-[#2d6a4f]" />
              <span>Already Registered or Purchased? Retrieve Your Book</span>
            </h3>
            <p className="text-xs text-stone-600 font-serif">
              Enter your email address below to look up your recent orders and re-download your digital copy.
            </p>
          </div>
        </div>

        <form onSubmit={handleSearchOrders} className="flex flex-col sm:flex-row gap-2 max-w-xl">
          <input
            type="email"
            value={searchEmail}
            onChange={(e) => setSearchEmail(e.target.value)}
            placeholder="Enter the email used during purchase..."
            className="flex-1 px-4 py-2.5 rounded-xl border border-stone-300 bg-white text-xs text-stone-900 focus:ring-2 focus:ring-[#2d6a4f]"
          />
          <button
            type="submit"
            className="px-5 py-2.5 rounded-xl bg-[#143627] hover:bg-[#2d6a4f] text-white text-xs font-bold transition-colors shrink-0"
          >
            Find My Book
          </button>
        </form>

        {/* Search Results */}
        {foundOrders !== null && (
          <div className="pt-2 animate-in fade-in">
            {foundOrders.length > 0 ? (
              <div className="space-y-2">
                {foundOrders.map((ord) => (
                  <div
                    key={ord.orderId}
                    className="p-4 bg-white rounded-xl border border-stone-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs"
                  >
                    <div>
                      <span className="font-mono font-bold text-[#143627]">{ord.orderId}</span>
                      <p className="text-stone-700 font-semibold">{ord.bookTitle}</p>
                      <p className="text-[11px] text-stone-500">Delivered to: {ord.email} • {ord.orderDate}</p>
                    </div>

                    <button
                      onClick={handleDownloadClick}
                      className="px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold flex items-center gap-1.5 self-start sm:self-auto"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Re-Download PDF</span>
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-4 bg-white rounded-xl border border-stone-200 text-xs text-stone-600">
                No orders found for <strong>{searchEmail}</strong>. If you just purchased, click <strong>Buy Now</strong> above to complete your order.
              </div>
            )}
          </div>
        )}
      </div>

      {/* Razorpay Payment Gateway & Email/SMS Delivery Modal */}
      <RazorpayPaymentModal
        isOpen={isBuyModalOpen}
        onClose={() => setIsBuyModalOpen(false)}
        onDownloadDirect={handleDownloadClick}
      />
    </div>
  );
};

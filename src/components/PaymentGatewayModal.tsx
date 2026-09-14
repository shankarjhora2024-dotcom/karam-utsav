import React, { useState } from 'react';
import {
  AlertCircle,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Copy,
  CreditCard,
  Download,
  Gift,
  Landmark,
  Lock,
  QrCode,
  ShieldCheck,
  Smartphone,
  Sparkles,
  X,
} from 'lucide-react';
import { BookDetails, BookOrder, UserAccount } from '../types';
import { HERITAGE_BOOK_DETAILS } from '../data/bookData';
import { generateAndDownloadBook, getDirectDownloadLink } from '../utils/bookDownload';

interface PaymentGatewayModalProps {
  isOpen: boolean;
  onClose: () => void;
  book?: BookDetails;
  currentUser?: UserAccount | null;
  onOrderCompleted?: (order: BookOrder) => void;
  onPaymentSuccess?: (order: BookOrder) => void;
  onOpenReader?: () => void;
}

type PaymentTab = 'upi' | 'card' | 'netbanking' | 'grant';

export const PaymentGatewayModal: React.FC<PaymentGatewayModalProps> = ({
  isOpen,
  onClose,
  book,
  currentUser,
  onOrderCompleted,
  onPaymentSuccess,
  onOpenReader,
}) => {
  const activeBook = book || HERITAGE_BOOK_DETAILS;
  const [selectedMethod, setSelectedMethod] = useState<PaymentTab>('upi');
  const [fullName, setFullName] = useState(currentUser?.name || '');
  const [email, setEmail] = useState(currentUser?.email || '');
  const [phone, setPhone] = useState('');

  // UPI state
  const [upiId, setUpiId] = useState('');

  // Card state
  const [cardNumber, setCardNumber] = useState('4532 •••• •••• 8921');
  const [cardExpiry, setCardExpiry] = useState('11/28');
  const [cardCvv, setCardCvv] = useState('892');
  const [cardHolder, setCardHolder] = useState(currentUser?.name || 'Sankar Tanti');

  // Net banking state
  const [selectedBank, setSelectedBank] = useState('SBI');

  // Grant justification
  const [grantCategory, setGrantCategory] = useState('Student Researcher');

  // Payment Status
  const [isProcessing, setIsProcessing] = useState(false);
  const [completedOrder, setCompletedOrder] = useState<BookOrder | null>(null);
  const [copiedLink, setCopiedLink] = useState(false);

  if (!isOpen) return null;

  const handlePay = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      alert('Please enter a valid email address for delivery.');
      return;
    }

    setIsProcessing(true);

    setTimeout(() => {
      const orderId = `KPA-ORD-${Math.floor(100000 + Math.random() * 900000)}`;
      const txId = `TXN-${Date.now().toString(36).toUpperCase()}-${Math.floor(100 + Math.random() * 899)}`;
      const directUrl = getDirectDownloadLink(orderId, email);

      const newOrder: BookOrder = {
        orderId,
        bookId: activeBook.id,
        bookTitle: activeBook.title,
        amount: selectedMethod === 'grant' ? 0 : activeBook.priceINR,
        currency: 'INR',
        paymentMethod:
          selectedMethod === 'upi'
            ? 'UPI'
            : selectedMethod === 'card'
            ? 'Card'
            : selectedMethod === 'netbanking'
            ? 'NetBanking'
            : 'Grant',
        transactionId: txId,
        date: new Date().toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric',
          year: 'numeric',
        }),
        buyerEmail: email,
        buyerName: fullName || 'Community Reader',
        downloadToken: `TOKEN-${Math.random().toString(36).substring(2, 9).toUpperCase()}`,
        downloadUrl: directUrl,
      };

      setIsProcessing(false);
      setCompletedOrder(newOrder);
      if (onOrderCompleted) onOrderCompleted(newOrder);
      if (onPaymentSuccess) onPaymentSuccess(newOrder);
    }, 1200);
  };

  const handleCopyLink = (url: string) => {
    navigator.clipboard.writeText(url);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  const handleDirectDownload = () => {
    if (completedOrder) {
      generateAndDownloadBook(
        completedOrder.bookTitle,
        completedOrder.buyerEmail,
        completedOrder.buyerName,
        completedOrder.orderId
      );
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl shadow-2xl border border-stone-200 max-w-2xl w-full overflow-hidden flex flex-col max-h-[92vh]">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#143225] via-[#1b4332] to-[#24543d] text-white p-5 sm:p-6 relative flex-shrink-0">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white/80 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-1">
            <Lock className="w-4 h-4 text-emerald-300" />
            <span>Assam Cultural Heritage Payment Gateway</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold font-serif text-amber-50">
            {completedOrder ? 'Payment Successful & Book Ready!' : 'Acquire Official Cultural Monograph'}
          </h2>
          <p className="text-xs text-[#d8f3dc]/80 mt-1 line-clamp-1">
            {activeBook.title} (Digital Archival Edition, 312 Pages)
          </p>
        </div>

        {/* Modal Body */}
        <div className="overflow-y-auto p-5 sm:p-6 flex-1">
          {completedOrder ? (
            /* Success & Direct Download State */
            <div className="space-y-6 animate-in zoom-in-95 duration-200">
              <div className="text-center p-6 bg-emerald-50 rounded-2xl border border-emerald-200">
                <div className="w-16 h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg shadow-emerald-600/30">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold text-emerald-950 font-serif">
                  Thank You for Your Cultural Contribution!
                </h3>
                <p className="text-xs text-emerald-800 mt-1 max-w-md mx-auto">
                  Your payment has been successfully recorded. All funds support the Adivasi Folk Arts Archive in Assam.
                </p>

                <div className="mt-4 inline-flex items-center gap-3 px-3 py-1.5 bg-white rounded-lg border border-emerald-300 text-xs font-mono text-emerald-900 shadow-sm">
                  <span>Order ID: <strong>{completedOrder.orderId}</strong></span>
                  <span>•</span>
                  <span>Txn: <strong>{completedOrder.transactionId}</strong></span>
                </div>
              </div>

              {/* Direct Download Action Card */}
              <div className="bg-[#faf8f5] p-5 rounded-xl border border-amber-200/80 shadow-sm space-y-4">
                <div className="flex items-start gap-3">
                  <div className="p-2.5 bg-amber-600 text-white rounded-xl">
                    <Download className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-900 text-base">
                      Instant Direct Book Download
                    </h4>
                    <p className="text-xs text-stone-600 mt-0.5">
                      Click below to download the complete monograph file directly to your device right now.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  <button
                    onClick={handleDirectDownload}
                    className="w-full py-3 px-4 bg-[#2d6a4f] hover:bg-[#1b4332] text-white font-bold text-sm rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download Book Directly (PDF/Text)</span>
                  </button>

                  <button
                    onClick={() => {
                      onClose();
                      onOpenReader?.();
                    }}
                    className="w-full py-3 px-4 bg-amber-600 hover:bg-amber-700 text-white font-bold text-sm rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
                  >
                    <BookOpen className="w-4 h-4" />
                    <span>Read Now in Digital Reader</span>
                  </button>
                </div>

                {/* Direct Download Link Copy Box */}
                <div className="pt-3 border-t border-stone-200">
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Permanent Direct Download Link:
                  </label>
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      readOnly
                      value={completedOrder.downloadUrl}
                      className="flex-1 px-3 py-2 text-xs font-mono bg-white border border-stone-300 rounded-lg text-stone-700 select-all outline-none"
                    />
                    <button
                      type="button"
                      onClick={() => handleCopyLink(completedOrder.downloadUrl)}
                      className={`px-3 py-2 text-xs font-semibold rounded-lg border transition-colors flex items-center gap-1.5 ${
                        copiedLink
                          ? 'bg-emerald-600 text-white border-emerald-600'
                          : 'bg-white hover:bg-stone-50 text-stone-800 border-stone-300'
                      }`}
                    >
                      {copiedLink ? (
                        <>
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy Link</span>
                        </>
                      )}
                    </button>
                  </div>
                  <p className="text-[11px] text-stone-500 mt-1 flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-amber-600" />
                    A permanent verification link was also sent to{' '}
                    <strong>{completedOrder.buyerEmail}</strong>.
                  </p>
                </div>
              </div>

              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-6 py-2.5 rounded-xl border border-stone-300 text-stone-700 font-semibold text-sm hover:bg-stone-100 transition-colors"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            /* Checkout Form */
            <form onSubmit={handlePay} className="space-y-5">
              {/* Order Summary Strip */}
              <div className="p-4 bg-[#faf8f5] rounded-xl border border-stone-200 flex flex-wrap items-center justify-between gap-3">
                <div>
                  <span className="text-[11px] uppercase font-bold tracking-wider text-amber-800 bg-amber-100 px-2 py-0.5 rounded">
                    Official Release 2026
                  </span>
                  <h4 className="font-bold text-stone-900 text-sm mt-1">
                    {activeBook.title}
                  </h4>
                  <p className="text-xs text-stone-500">
                    Full PDF & EPUB • High Resolution Photographs • Bilingual Sadri Songs
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-xs text-stone-400 line-through mr-1.5">
                    ₹{activeBook.originalPriceINR}
                  </span>
                  <span className="text-2xl font-extrabold text-[#1b4332]">
                    {selectedMethod === 'grant' ? 'FREE' : `₹${activeBook.priceINR}`}
                  </span>
                  <span className="block text-[10px] text-emerald-700 font-medium">
                    {selectedMethod === 'grant' ? 'Cultural Grant Applied' : 'Special 62% Heritage Subsidy'}
                  </span>
                </div>
              </div>

              {/* User Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Full Name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full px-3 py-2 border border-stone-300 rounded-lg text-sm focus:ring-2 focus:ring-[#2d6a4f] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Email for Direct Download Link <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 border border-stone-300 rounded-lg text-sm focus:ring-2 focus:ring-[#2d6a4f] outline-none"
                  />
                </div>
              </div>

              {/* Payment Methods Selection */}
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-2">
                  Select Payment Gateway:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  <button
                    type="button"
                    onClick={() => setSelectedMethod('upi')}
                    className={`p-3 rounded-xl border text-center transition-all flex flex-col items-center gap-1.5 ${
                      selectedMethod === 'upi'
                        ? 'border-amber-600 bg-amber-50 text-amber-950 font-bold shadow-sm ring-1 ring-amber-500'
                        : 'border-stone-200 bg-white text-stone-700 hover:bg-stone-50'
                    }`}
                  >
                    <Smartphone className="w-5 h-5 text-amber-700" />
                    <span className="text-xs">UPI / QR Code</span>
                    <span className="text-[10px] text-stone-500 font-normal">GPay, PhonePe</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSelectedMethod('card')}
                    className={`p-3 rounded-xl border text-center transition-all flex flex-col items-center gap-1.5 ${
                      selectedMethod === 'card'
                        ? 'border-amber-600 bg-amber-50 text-amber-950 font-bold shadow-sm ring-1 ring-amber-500'
                        : 'border-stone-200 bg-white text-stone-700 hover:bg-stone-50'
                    }`}
                  >
                    <CreditCard className="w-5 h-5 text-amber-700" />
                    <span className="text-xs">Cards</span>
                    <span className="text-[10px] text-stone-500 font-normal">RuPay, Visa, MC</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSelectedMethod('netbanking')}
                    className={`p-3 rounded-xl border text-center transition-all flex flex-col items-center gap-1.5 ${
                      selectedMethod === 'netbanking'
                        ? 'border-amber-600 bg-amber-50 text-amber-950 font-bold shadow-sm ring-1 ring-amber-500'
                        : 'border-stone-200 bg-white text-stone-700 hover:bg-stone-50'
                    }`}
                  >
                    <Landmark className="w-5 h-5 text-amber-700" />
                    <span className="text-xs">Net Banking</span>
                    <span className="text-[10px] text-stone-500 font-normal">All Major Banks</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSelectedMethod('grant')}
                    className={`p-3 rounded-xl border text-center transition-all flex flex-col items-center gap-1.5 ${
                      selectedMethod === 'grant'
                        ? 'border-emerald-600 bg-emerald-50 text-emerald-950 font-bold shadow-sm ring-1 ring-emerald-500'
                        : 'border-stone-200 bg-white text-stone-700 hover:bg-stone-50'
                    }`}
                  >
                    <Gift className="w-5 h-5 text-emerald-700" />
                    <span className="text-xs">Student Grant</span>
                    <span className="text-[10px] text-emerald-700 font-medium">Free Access</span>
                  </button>
                </div>
              </div>

              {/* Dynamic Payment Method Panels */}
              <div className="p-4 bg-stone-50 rounded-xl border border-stone-200">
                {selectedMethod === 'upi' && (
                  <div className="space-y-3">
                    <div className="flex flex-col sm:flex-row items-center gap-4 bg-white p-3 rounded-lg border border-stone-200">
                      <div className="w-24 h-24 bg-stone-900 rounded-lg p-1.5 flex items-center justify-center text-white flex-shrink-0 shadow-sm">
                        <QrCode className="w-20 h-20 text-amber-300" />
                      </div>
                      <div className="text-center sm:text-left flex-1">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
                          Scan & Pay with Any UPI App
                        </span>
                        <p className="text-xs text-stone-700 font-medium mt-1">
                          Scan the QR with Google Pay, PhonePe, Paytm, or BHIM.
                        </p>
                        <p className="text-[11px] text-stone-500 font-mono mt-0.5">
                          UPI ID: <strong>karampuja.heritage@oksbi</strong>
                        </p>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-stone-700 mb-1">
                        Or Enter Your VPA / UPI ID:
                      </label>
                      <input
                        type="text"
                        placeholder="yourname@upi"
                        value={upiId}
                        onChange={(e) => setUpiId(e.target.value)}
                        className="w-full px-3 py-2 border border-stone-300 rounded-lg text-sm bg-white outline-none"
                      />
                    </div>
                  </div>
                )}

                {selectedMethod === 'card' && (
                  <div className="space-y-3">
                    <div>
                      <label className="block text-xs font-semibold text-stone-700 mb-1">
                        Card Number
                      </label>
                      <input
                        type="text"
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                        className="w-full px-3 py-2 border border-stone-300 rounded-lg text-sm bg-white font-mono outline-none"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-semibold text-stone-700 mb-1">
                          Valid Thru
                        </label>
                        <input
                          type="text"
                          value={cardExpiry}
                          onChange={(e) => setCardExpiry(e.target.value)}
                          className="w-full px-3 py-2 border border-stone-300 rounded-lg text-sm bg-white font-mono outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-stone-700 mb-1">
                          CVV / CVC
                        </label>
                        <input
                          type="password"
                          maxLength={4}
                          value={cardCvv}
                          onChange={(e) => setCardCvv(e.target.value)}
                          className="w-full px-3 py-2 border border-stone-300 rounded-lg text-sm bg-white font-mono outline-none"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {selectedMethod === 'netbanking' && (
                  <div className="space-y-3">
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Choose Your Bank
                    </label>
                    <select
                      value={selectedBank}
                      onChange={(e) => setSelectedBank(e.target.value)}
                      className="w-full px-3 py-2 border border-stone-300 rounded-lg text-sm bg-white outline-none"
                    >
                      <option value="SBI">State Bank of India (SBI)</option>
                      <option value="AGVB">Assam Gramin Vikash Bank (AGVB)</option>
                      <option value="HDFC">HDFC Bank</option>
                      <option value="ICICI">ICICI Bank</option>
                      <option value="AXIS">Axis Bank</option>
                      <option value="PNB">Punjab National Bank (PNB)</option>
                      <option value="UBI">Union Bank of India</option>
                    </select>
                  </div>
                )}

                {selectedMethod === 'grant' && (
                  <div className="space-y-2">
                    <div className="flex items-start gap-2 text-emerald-800 text-xs">
                      <Sparkles className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <p>
                        Free cultural access is provided to students, scholars, and tea garden community members through the Assam Tribal Heritage Open Access Initiative.
                      </p>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-stone-700 mb-1">
                        Select Purpose:
                      </label>
                      <select
                        value={grantCategory}
                        onChange={(e) => setGrantCategory(e.target.value)}
                        className="w-full px-3 py-2 border border-stone-300 rounded-lg text-sm bg-white outline-none"
                      >
                        <option value="Student Researcher">Student / Researcher (Academic Study)</option>
                        <option value="Tea Community Resident">Tea Tribe / Adivasi Community Member</option>
                        <option value="Folklorist">Folklorist & Cultural Educator</option>
                      </select>
                    </div>
                  </div>
                )}
              </div>

              {/* Security Badges */}
              <div className="flex items-center justify-between text-[11px] text-stone-500 pt-1">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  256-Bit Bank-Grade Encryption
                </span>
                <span className="flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5 text-amber-600" />
                  Instant Direct Download Guaranteed
                </span>
              </div>

              {/* Submit Pay Button */}
              <button
                type="submit"
                disabled={isProcessing}
                className="w-full py-3.5 px-4 bg-[#2d6a4f] hover:bg-[#1b4332] text-white font-bold text-base rounded-xl transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isProcessing ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Authorizing Payment & Generating Monograph...</span>
                  </>
                ) : (
                  <>
                    <span>
                      {selectedMethod === 'grant'
                        ? 'Claim Free Cultural Access & Download'
                        : `Complete Payment (₹${book.priceINR}) & Download`}
                    </span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

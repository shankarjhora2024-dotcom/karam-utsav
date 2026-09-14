import React, { useState } from 'react';
import {
  CheckCircle2,
  ChevronRight,
  CreditCard,
  Download,
  Landmark,
  Lock,
  Mail,
  QrCode,
  ShieldCheck,
  Smartphone,
  X,
  ArrowLeft,
  Check,
} from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

export interface OrderRecord {
  orderId: string;
  razorpayPaymentId: string;
  customerName: string;
  email: string;
  phone: string;
  state: string;
  bookTitle: string;
  pricePaid: number;
  paymentMethod: string;
  orderDate: string;
  downloadUrl: string;
}

interface RazorpayPaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDownloadDirect?: () => void;
}

const TOP_BANKS = [
  { id: 'sbi', name: 'State Bank of India', short: 'SBI' },
  { id: 'hdfc', name: 'HDFC Bank', short: 'HDFC' },
  { id: 'icici', name: 'ICICI Bank', short: 'ICICI' },
  { id: 'axis', name: 'Axis Bank', short: 'Axis' },
  { id: 'pnb', name: 'Punjab National Bank', short: 'PNB' },
  { id: 'other', name: 'Other Indian Banks', short: 'Other' },
];

export const RazorpayPaymentModal: React.FC<RazorpayPaymentModalProps> = ({
  isOpen,
  onClose,
  onDownloadDirect,
}) => {
  const { ebook } = SITE_CONFIG;

  // Steps: 1 = Contact Details, 2 = Payment Method, 3 = Processing, 4 = Success
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);

  // Customer contact info (needed to dispatch via Email & SMS)
  const [customer, setCustomer] = useState({
    name: '',
    email: '',
    phone: '',
  });

  // Payment Selection: 'upi' | 'card' | 'netbanking'
  const [paymentMethod, setPaymentMethod] = useState<'upi' | 'card' | 'netbanking'>('upi');

  // Card fields
  const [cardNumber, setCardNumber] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cardCvv, setCardCvv] = useState('');

  // Bank selection
  const [selectedBank, setSelectedBank] = useState('sbi');

  // Promo code
  const [showPromo, setShowPromo] = useState(false);
  const [promoCode, setPromoCode] = useState('');
  const [promoApplied, setPromoApplied] = useState(false);

  // Completed Order Details
  const [completedOrder, setCompletedOrder] = useState<OrderRecord | null>(null);
  const [emailCopied, setEmailCopied] = useState(false);
  const [smsCopied, setSmsCopied] = useState(false);

  if (!isOpen) return null;

  const currentPrice = promoApplied ? 0 : ebook.price;

  const handleFormatCard = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/\D/g, '').slice(0, 16);
    setCardNumber(raw.replace(/(\d{4})/g, '$1 ').trim());
  };

  const handleFormatExpiry = (e: React.ChangeEvent<HTMLInputElement>) => {
    let raw = e.target.value.replace(/\D/g, '').slice(0, 4);
    if (raw.length >= 2) raw = raw.slice(0, 2) + '/' + raw.slice(2);
    setCardExpiry(raw);
  };

  const handleApplyPromo = () => {
    const code = promoCode.trim().toUpperCase();
    if (code === 'KARAM2026' || code === 'FREE' || code === 'KARAM') {
      setPromoApplied(true);
    } else {
      alert('Invalid code. Use "KARAM2026" for free sponsored access.');
    }
  };

  const handleProceedToPayment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customer.name.trim() || !customer.email.trim() || !customer.phone.trim()) {
      alert('Please fill in your Name, Email, and Mobile Number.');
      return;
    }
    setStep(2);
  };

  const executePayment = () => {
    setStep(3);

    setTimeout(() => {
      const orderId = `AMZ-KU-${Math.floor(100000 + Math.random() * 900000)}`;
      const razorpayPaymentId = `pay_${Math.random().toString(36).substring(2, 11)}`;

      const methodNames: Record<string, string> = {
        upi: 'UPI / QR Code',
        card: 'Debit / Credit Card',
        netbanking: `Net Banking (${selectedBank.toUpperCase()})`,
      };

      const order: OrderRecord = {
        orderId,
        razorpayPaymentId,
        customerName: customer.name,
        email: customer.email,
        phone: customer.phone.startsWith('+91') ? customer.phone : `+91 ${customer.phone}`,
        state: 'Assam',
        bookTitle: ebook.title,
        pricePaid: currentPrice,
        paymentMethod: promoApplied ? 'Sponsored / Free' : methodNames[paymentMethod],
        orderDate: new Date().toLocaleDateString('en-IN', {
          day: 'numeric',
          month: 'short',
          year: 'numeric',
        }),
        downloadUrl: ebook.filePath,
      };

      try {
        const existing = JSON.parse(localStorage.getItem('karam_utsav_orders') || '[]');
        localStorage.setItem('karam_utsav_orders', JSON.stringify([order, ...existing]));
      } catch (err) {
        console.error(err);
      }

      setCompletedOrder(order);
      setStep(4);
    }, 1500);
  };

  const handleDownload = () => {
    if (onDownloadDirect) {
      onDownloadDirect();
    } else {
      const a = document.createElement('a');
      a.href = ebook.filePath;
      a.download = 'Karam-Parav-Cultural-Book.pdf';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 animate-in fade-in">
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-stone-200 overflow-hidden my-4">
        
        {/* Simple Header */}
        <div className="bg-[#0c2340] text-white px-5 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {step === 2 && (
              <button
                onClick={() => setStep(1)}
                className="p-1 -ml-1 text-stone-300 hover:text-white"
                title="Back"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
            )}
            <span className="font-bold text-base">
              {step === 4 ? 'Order Confirmed' : 'Secure Checkout'}
            </span>
            <span className="text-[11px] bg-blue-500/30 text-blue-200 px-2 py-0.5 rounded font-medium">
              Razorpay
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="font-black text-amber-300 text-sm">
              ₹{currentPrice}.00
            </span>
            <button
              onClick={onClose}
              className="p-1 rounded-full text-stone-300 hover:text-white hover:bg-white/10"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Item Summary Bar (Minimalist) */}
        {step !== 4 && (
          <div className="bg-stone-50 border-b border-stone-200 px-5 py-2.5 flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <span className="font-bold text-stone-900">কৰম পৰৱ (Ebook)</span>
              <span className="text-stone-400">•</span>
              <span className="text-stone-600">PDF Edition</span>
            </div>
            <span className="text-emerald-700 font-semibold flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" />
              Instant Delivery
            </span>
          </div>
        )}

        <div className="p-5 sm:p-6">
          
          {/* ========================================================================= */}
          {/* STEP 1: Simple Contact Details (Amazon style) */}
          {/* ========================================================================= */}
          {step === 1 && (
            <form onSubmit={handleProceedToPayment} className="space-y-4">
              <div>
                <h3 className="font-bold text-stone-900 text-sm">
                  Where should we send your book?
                </h3>
                <p className="text-xs text-stone-500 mt-0.5">
                  Download link will be sent to your Email and SMS immediately.
                </p>
              </div>

              {/* Full Name */}
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={customer.name}
                  onChange={(e) => setCustomer({ ...customer, name: e.target.value })}
                  placeholder="e.g. Sankar Jhora"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 text-sm focus:ring-2 focus:ring-[#3395ff] focus:border-transparent outline-none"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1 flex items-center justify-between">
                  <span>Email Address</span>
                  <span className="text-[10px] text-stone-400 font-normal">PDF sent here</span>
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-stone-400 absolute left-3 top-3" />
                  <input
                    type="email"
                    required
                    value={customer.email}
                    onChange={(e) => setCustomer({ ...customer, email: e.target.value })}
                    placeholder="name@gmail.com"
                    className="w-full pl-9 pr-3.5 py-2.5 rounded-lg border border-stone-300 text-sm focus:ring-2 focus:ring-[#3395ff] focus:border-transparent outline-none"
                  />
                </div>
              </div>

              {/* Mobile Phone */}
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1 flex items-center justify-between">
                  <span>Mobile Number</span>
                  <span className="text-[10px] text-stone-400 font-normal">SMS download link sent here</span>
                </label>
                <div className="relative">
                  <Smartphone className="w-4 h-4 text-stone-400 absolute left-3 top-3" />
                  <input
                    type="tel"
                    required
                    value={customer.phone}
                    onChange={(e) => setCustomer({ ...customer, phone: e.target.value })}
                    placeholder="7638010004"
                    className="w-full pl-9 pr-3.5 py-2.5 rounded-lg border border-stone-300 text-sm focus:ring-2 focus:ring-[#3395ff] focus:border-transparent outline-none"
                  />
                </div>
              </div>

              {/* Promo code toggle */}
              <div className="pt-1">
                {!showPromo ? (
                  <button
                    type="button"
                    onClick={() => setShowPromo(true)}
                    className="text-xs text-[#3395ff] hover:underline font-medium"
                  >
                    + Have a promo or coupon code?
                  </button>
                ) : (
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      placeholder="Enter promo code"
                      className="flex-1 px-3 py-2 text-xs rounded-lg border border-stone-300 uppercase outline-none"
                    />
                    <button
                      type="button"
                      onClick={handleApplyPromo}
                      className="px-3 py-2 bg-stone-800 text-white rounded-lg text-xs font-semibold"
                    >
                      Apply
                    </button>
                  </div>
                )}
                {promoApplied && (
                  <p className="text-xs text-emerald-700 font-semibold mt-1">
                    ✓ Promo applied: 100% Free Access
                  </p>
                )}
              </div>

              {/* Continue Button */}
              <button
                type="submit"
                className="w-full py-3 px-4 rounded-xl bg-[#ffd814] hover:bg-[#f7ca00] text-stone-950 font-bold text-sm transition-all shadow-sm flex items-center justify-center gap-2 mt-4 cursor-pointer"
              >
                <span>Continue to Payment (₹{currentPrice}.00)</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-stone-500 pt-1">
                <Lock className="w-3 h-3 text-emerald-700" />
                <span>256-bit Secure Razorpay Payment</span>
              </div>
            </form>
          )}

          {/* ========================================================================= */}
          {/* STEP 2: Clean Payment Options (UPI QR / Cards / Netbanking) */}
          {/* ========================================================================= */}
          {step === 2 && (
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs text-stone-600 border-b pb-2">
                <span>Paying for: <strong>{customer.name}</strong></span>
                <button
                  onClick={() => setStep(1)}
                  className="text-[#3395ff] hover:underline"
                >
                  Change
                </button>
              </div>

              {/* Payment Methods (Amazon/Razorpay style Radio Accordion) */}
              <div className="space-y-2.5">
                
                {/* 1. UPI / QR CODE */}
                <div
                  onClick={() => setPaymentMethod('upi')}
                  className={`p-3.5 rounded-xl border transition-all cursor-pointer ${
                    paymentMethod === 'upi'
                      ? 'border-[#3395ff] bg-blue-50/40 ring-1 ring-[#3395ff]'
                      : 'border-stone-200 bg-white hover:border-stone-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        checked={paymentMethod === 'upi'}
                        onChange={() => setPaymentMethod('upi')}
                        className="text-[#3395ff] focus:ring-[#3395ff]"
                      />
                      <div className="flex items-center gap-2">
                        <QrCode className="w-4 h-4 text-[#3395ff]" />
                        <span className="font-bold text-sm text-stone-900">
                          UPI / QR Code
                        </span>
                      </div>
                    </div>
                    <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded">
                      Google Pay, PhonePe, Paytm
                    </span>
                  </div>

                  {paymentMethod === 'upi' && (
                    <div className="mt-3 pt-3 border-t border-blue-100 flex items-center gap-4 animate-in fade-in">
                      {/* Simple Stylized QR */}
                      <div className="w-24 h-24 bg-white border border-stone-300 rounded-lg p-1 shrink-0 flex items-center justify-center">
                        <div className="grid grid-cols-5 gap-1 w-full h-full p-1 bg-stone-50 rounded">
                          {Array.from({ length: 25 }).map((_, i) => (
                            <div
                              key={i}
                              className={`rounded-xs ${
                                (i % 2 === 0 || i === 0 || i === 4 || i === 20 || i === 24)
                                  ? 'bg-stone-900'
                                  : 'bg-transparent'
                              }`}
                            />
                          ))}
                        </div>
                      </div>

                      <div className="space-y-1.5 text-xs">
                        <p className="font-semibold text-stone-900">
                          Scan with any UPI App to pay ₹{currentPrice}
                        </p>
                        <p className="text-[11px] text-stone-500">
                          VPA: <strong className="font-mono text-stone-800">karamutsav@razorpay</strong>
                        </p>
                        <p className="text-[10px] text-emerald-700 font-medium">
                          ✓ Auto-confirms in seconds
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* 2. DEBIT / CREDIT CARD */}
                <div
                  onClick={() => setPaymentMethod('card')}
                  className={`p-3.5 rounded-xl border transition-all cursor-pointer ${
                    paymentMethod === 'card'
                      ? 'border-[#3395ff] bg-blue-50/40 ring-1 ring-[#3395ff]'
                      : 'border-stone-200 bg-white hover:border-stone-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        checked={paymentMethod === 'card'}
                        onChange={() => setPaymentMethod('card')}
                        className="text-[#3395ff] focus:ring-[#3395ff]"
                      />
                      <div className="flex items-center gap-2">
                        <CreditCard className="w-4 h-4 text-[#3395ff]" />
                        <span className="font-bold text-sm text-stone-900">
                          Credit / Debit Card
                        </span>
                      </div>
                    </div>
                    <span className="text-[10px] text-stone-500">
                      Visa, MasterCard, RuPay
                    </span>
                  </div>

                  {paymentMethod === 'card' && (
                    <div className="mt-3 pt-3 border-t border-blue-100 space-y-2.5 text-xs animate-in fade-in">
                      <input
                        type="text"
                        value={cardNumber}
                        onChange={handleFormatCard}
                        placeholder="Card Number (e.g. 4532 8920 1123 4567)"
                        className="w-full px-3 py-2 rounded-lg border border-stone-300 font-mono text-xs outline-none focus:ring-1 focus:ring-[#3395ff]"
                      />
                      <div className="grid grid-cols-2 gap-2">
                        <input
                          type="text"
                          value={cardExpiry}
                          onChange={handleFormatExpiry}
                          placeholder="MM/YY"
                          className="px-3 py-2 rounded-lg border border-stone-300 font-mono text-xs text-center outline-none focus:ring-1 focus:ring-[#3395ff]"
                        />
                        <input
                          type="password"
                          maxLength={4}
                          value={cardCvv}
                          onChange={(e) => setCardCvv(e.target.value.replace(/\D/g, ''))}
                          placeholder="CVV"
                          className="px-3 py-2 rounded-lg border border-stone-300 font-mono text-xs text-center outline-none focus:ring-1 focus:ring-[#3395ff]"
                        />
                      </div>
                    </div>
                  )}
                </div>

                {/* 3. NET BANKING */}
                <div
                  onClick={() => setPaymentMethod('netbanking')}
                  className={`p-3.5 rounded-xl border transition-all cursor-pointer ${
                    paymentMethod === 'netbanking'
                      ? 'border-[#3395ff] bg-blue-50/40 ring-1 ring-[#3395ff]'
                      : 'border-stone-200 bg-white hover:border-stone-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        checked={paymentMethod === 'netbanking'}
                        onChange={() => setPaymentMethod('netbanking')}
                        className="text-[#3395ff] focus:ring-[#3395ff]"
                      />
                      <div className="flex items-center gap-2">
                        <Landmark className="w-4 h-4 text-[#3395ff]" />
                        <span className="font-bold text-sm text-stone-900">
                          Net Banking / Bank Account
                        </span>
                      </div>
                    </div>
                    <span className="text-[10px] text-stone-500">
                      All Major Banks
                    </span>
                  </div>

                  {paymentMethod === 'netbanking' && (
                    <div className="mt-3 pt-3 border-t border-blue-100 animate-in fade-in">
                      <div className="grid grid-cols-3 gap-1.5 text-xs">
                        {TOP_BANKS.map((b) => (
                          <button
                            key={b.id}
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedBank(b.id);
                            }}
                            className={`p-2 rounded-lg border text-center transition-all ${
                              selectedBank === b.id
                                ? 'bg-white border-[#3395ff] text-[#3395ff] font-bold shadow-xs'
                                : 'bg-stone-50 border-stone-200 text-stone-700 hover:bg-white'
                            }`}
                          >
                            {b.short}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

              </div>

              {/* Pay Button */}
              <button
                type="button"
                onClick={executePayment}
                className="w-full py-3.5 px-4 rounded-xl bg-[#ffd814] hover:bg-[#f7ca00] text-stone-950 font-black text-base transition-all shadow-md flex items-center justify-center gap-2 mt-4 cursor-pointer"
              >
                <Lock className="w-4 h-4 text-stone-800" />
                <span>Pay ₹{currentPrice}.00 & Get Ebook</span>
              </button>

              <p className="text-center text-[11px] text-stone-400">
                Secured by Razorpay • Instant access sent to {customer.email} & {customer.phone}
              </p>
            </div>
          )}

          {/* ========================================================================= */}
          {/* STEP 3: Simple Processing Spinner */}
          {/* ========================================================================= */}
          {step === 3 && (
            <div className="py-12 text-center space-y-4">
              <div className="w-12 h-12 rounded-full border-3 border-stone-200 border-t-[#3395ff] animate-spin mx-auto" />
              <div>
                <h4 className="font-bold text-stone-900 text-base">
                  Processing Payment...
                </h4>
                <p className="text-xs text-stone-500 mt-1">
                  Connecting with Razorpay & dispatching book links...
                </p>
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* STEP 4: Amazon-Style Simple Success & Email / SMS Download */}
          {/* ========================================================================= */}
          {step === 4 && completedOrder && (
            <div className="space-y-5 animate-in fade-in">
              
              {/* Success Banner */}
              <div className="text-center space-y-2 py-1">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-xl text-stone-900">
                  Payment Successful!
                </h3>
                <p className="text-xs text-stone-600">
                  Order ID: <span className="font-mono font-bold text-stone-800">{completedOrder.orderId}</span> • Paid ₹{completedOrder.pricePaid}.00
                </p>
              </div>

              {/* Core Requirement: Message & Download from Email / SMS */}
              <div className="bg-stone-50 border border-stone-200 rounded-xl p-4 space-y-3">
                <p className="text-xs font-bold text-stone-800">
                  We've sent your book download link to:
                </p>

                {/* 1. Email Box */}
                <div className="bg-white p-3 rounded-lg border border-stone-200 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5 overflow-hidden">
                    <div className="w-8 h-8 rounded-full bg-blue-50 text-[#3395ff] flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="truncate">
                      <p className="text-xs font-semibold text-stone-800 truncate">
                        {completedOrder.email}
                      </p>
                      <p className="text-[10px] text-stone-500">
                        Check your Inbox or Spam folder
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={handleDownload}
                    className="shrink-0 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center gap-1 transition-colors"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download</span>
                  </button>
                </div>

                {/* 2. SMS Box */}
                <div className="bg-white p-3 rounded-lg border border-stone-200 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5 overflow-hidden">
                    <div className="w-8 h-8 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                      <Smartphone className="w-4 h-4" />
                    </div>
                    <div className="truncate">
                      <p className="text-xs font-semibold text-stone-800 truncate">
                        {completedOrder.phone}
                      </p>
                      <p className="text-[10px] text-stone-500">
                        SMS link dispatched to your mobile
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={handleDownload}
                    className="shrink-0 px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-stone-950 text-xs font-bold flex items-center gap-1 transition-colors"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download</span>
                  </button>
                </div>
              </div>

              {/* Instant Device Download Button */}
              <div>
                <button
                  onClick={handleDownload}
                  className="w-full py-3 px-4 rounded-xl bg-[#0c2340] hover:bg-[#143660] text-white font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-sm"
                >
                  <Download className="w-4 h-4 text-amber-300" />
                  <span>Download Book PDF Now</span>
                </button>
              </div>

              {/* Close Button */}
              <div className="text-center pt-1">
                <button
                  onClick={onClose}
                  className="text-xs text-stone-500 hover:text-stone-800 font-medium"
                >
                  Close Window
                </button>
              </div>

            </div>
          )}

        </div>
      </div>
    </div>
  );
};

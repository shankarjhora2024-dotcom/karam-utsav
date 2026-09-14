import React, { useState, useEffect } from 'react';
import {
  X,
  ShieldCheck,
  FileText,
  BookOpen,
  Sparkles,
  Mail,
  Phone,
  MapPin,
  CheckCircle2,
  AlertTriangle,
  Download,
  Calendar,
  ExternalLink,
  Printer,
  Scale,
} from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

export type PolicyTab = 'privacy' | 'terms' | 'delivery-refund' | 'heritage-copyright' | 'photography';

interface LegalPoliciesModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: PolicyTab;
}

export const LegalPoliciesModal: React.FC<LegalPoliciesModalProps> = ({
  isOpen,
  onClose,
  initialTab = 'privacy',
}) => {
  const [activeTab, setActiveTab] = useState<PolicyTab>(initialTab);

  useEffect(() => {
    if (isOpen) {
      setActiveTab(initialTab);
      // Lock background scrolling
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, initialTab]);

  if (!isOpen) return null;

  const { contact } = SITE_CONFIG;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-stone-950/80 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200"
    >
      <div
        className="relative w-full max-w-4xl bg-[#fdfbf7] rounded-3xl shadow-2xl border border-stone-300 flex flex-col max-h-[90vh] overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Strip */}
        <div className="bg-[#143627] text-white px-5 sm:px-8 py-5 flex items-center justify-between border-b border-[#2d6a4f] shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#1b4332] text-amber-300 border border-[#2d6a4f] flex items-center justify-center shrink-0">
              <Scale className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] uppercase tracking-wider text-amber-300 font-bold">
                  Official Legal & Compliance
                </span>
                <span className="text-[11px] text-[#95d5b2]">• Updated September 2026</span>
              </div>
              <h2 id="legal-modal-title" className="font-display text-xl sm:text-2xl font-bold text-[#fcfaf7]">
                Karam Utsav Policies & Terms
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              title="Print this policy"
              className="p-2 rounded-xl text-stone-300 hover:text-white hover:bg-[#1b4332] transition-colors hidden sm:flex items-center justify-center"
            >
              <Printer className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-stone-300 hover:text-white hover:bg-[#1b4332] transition-colors focus:outline-none focus:ring-2 focus:ring-amber-400"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab Navigation Navigation Bar */}
        <div className="bg-[#efe9df] border-b border-stone-300 px-4 sm:px-8 flex overflow-x-auto no-scrollbar shrink-0 gap-2 py-2.5">
          <button
            onClick={() => setActiveTab('privacy')}
            className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all flex items-center gap-2 ${
              activeTab === 'privacy'
                ? 'bg-[#1b4332] text-white shadow-sm'
                : 'text-stone-700 hover:bg-stone-200/80 hover:text-stone-900'
            }`}
          >
            <ShieldCheck className="w-4 h-4" />
            <span>Privacy Policy</span>
          </button>

          <button
            onClick={() => setActiveTab('terms')}
            className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all flex items-center gap-2 ${
              activeTab === 'terms'
                ? 'bg-[#1b4332] text-white shadow-sm'
                : 'text-stone-700 hover:bg-stone-200/80 hover:text-stone-900'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>Terms of Service</span>
          </button>

          <button
            onClick={() => setActiveTab('delivery-refund')}
            className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all flex items-center gap-2 ${
              activeTab === 'delivery-refund'
                ? 'bg-[#1b4332] text-white shadow-sm'
                : 'text-stone-700 hover:bg-stone-200/80 hover:text-stone-900'
            }`}
          >
            <Download className="w-4 h-4" />
            <span>Ebook Delivery & Refund</span>
          </button>

          <button
            onClick={() => setActiveTab('heritage-copyright')}
            className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all flex items-center gap-2 ${
              activeTab === 'heritage-copyright'
                ? 'bg-[#1b4332] text-white shadow-sm'
                : 'text-stone-700 hover:bg-stone-200/80 hover:text-stone-900'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>Cultural Heritage & Copyright</span>
          </button>

          <button
            onClick={() => setActiveTab('photography')}
            className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all flex items-center gap-2 ${
              activeTab === 'photography'
                ? 'bg-[#1b4332] text-white shadow-sm'
                : 'text-stone-700 hover:bg-stone-200/80 hover:text-stone-900'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            <span>Media & Community Consent</span>
          </button>
        </div>

        {/* Scrollable Policy Body */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-8 text-stone-800 space-y-6 text-sm leading-relaxed">
          {/* TAB 1: PRIVACY POLICY */}
          {activeTab === 'privacy' && (
            <div className="space-y-6 animate-in fade-in duration-150">
              <div className="border-b border-stone-200 pb-4">
                <h3 className="font-display text-2xl font-bold text-[#143627]">
                  Privacy Policy for Karam Utsav & Digital Ebook Platform
                </h3>
                <p className="text-xs text-stone-500 mt-1">
                  Effective Date: September 2026 • Published by Karam Utsav Committee
                </p>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 text-xs text-amber-950 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-amber-800 shrink-0 mt-0.5" />
                <p>
                  <strong>Summary:</strong> Karam Utsav is dedicated to protecting your privacy. We collect only minimal, necessary details (such as your email and phone number) to deliver purchased cultural ebooks and answer your festival inquiries. We <strong>never sell, lease, or distribute</strong> personal information to third parties.
                </p>
              </div>

              <section className="space-y-2">
                <h4 className="font-bold text-[#143627] text-base">1. Information We Collect</h4>
                <p>We may collect personal details when you interact with our website:</p>
                <ul className="list-disc pl-5 space-y-1.5 text-stone-700">
                  <li>
                    <strong>Ebook Checkout & Delivery:</strong> Full Name, Email Address (required for immediate PDF dispatch), Mobile / WhatsApp Number (for order notifications and support), and State/Region.
                  </li>
                  <li>
                    <strong>Contact & Cultural Inquiries:</strong> Name, Email, Phone, and the message content when using our official contact form.
                  </li>
                  <li>
                    <strong>Technical Usage Data:</strong> Anonymized device metrics, browser type, and operating system used solely to optimize viewing on mobile and desktop devices.
                  </li>
                </ul>
              </section>

              <section className="space-y-2">
                <h4 className="font-bold text-[#143627] text-base">2. Payment & Banking Security</h4>
                <p>
                  All digital book contributions and transactions (₹49) are conducted via secured payment gateway partners supporting UPI (Google Pay, PhonePe, Paytm, BHIM), Net Banking, and Debit/Credit Cards under 256-bit SSL encryption.
                </p>
                <p className="text-xs text-stone-600 bg-stone-100 p-3 rounded-xl border border-stone-200">
                  <strong>Notice:</strong> Karam Utsav does <em>not</em> store, process, or have access to your bank passwords, credit card numbers, CVVs, or UPI PINs. All financial verifications occur directly on your authorized bank's or UPI app's secure infrastructure.
                </p>
              </section>

              <section className="space-y-2">
                <h4 className="font-bold text-[#143627] text-base">3. How We Use Your Data</h4>
                <ul className="list-disc pl-5 space-y-1 text-stone-700">
                  <li>To send the purchased digital ebook “কৰম পৰৱ” PDF directly to your email inbox.</li>
                  <li>To generate tax receipts and order confirmations for book purchases.</li>
                  <li>To respond to your inquiries regarding festival venues, timing, and folkloric research.</li>
                  <li>To enable the self-service “Retrieve Your Book” lookup using your registered email.</li>
                </ul>
              </section>

              <section className="space-y-2">
                <h4 className="font-bold text-[#143627] text-base">4. Cookies & Local Storage</h4>
                <p>
                  Our site uses local browser storage exclusively for user convenience: saving completed order receipts so you can retrieve your book on the same device without re-entering details, and saving audio/language preferences.
                </p>
              </section>

              <section className="space-y-2">
                <h4 className="font-bold text-[#143627] text-base">5. Data Retention & Your Rights</h4>
                <p>
                  You have the right to request access to, correction of, or deletion of your stored customer records at any time. Simply send an email from your registered email address to <a href={`mailto:${contact.email}`} className="text-[#2d6a4f] font-bold underline">{contact.email}</a>.
                </p>
              </section>
            </div>
          )}

          {/* TAB 2: TERMS OF SERVICE */}
          {activeTab === 'terms' && (
            <div className="space-y-6 animate-in fade-in duration-150">
              <div className="border-b border-stone-200 pb-4">
                <h3 className="font-display text-2xl font-bold text-[#143627]">
                  Terms of Service & Festival Participation Guidelines
                </h3>
                <p className="text-xs text-stone-500 mt-1">
                  Applicable to all visitors of Karam Utsav digital platform & festival attendees
                </p>
              </div>

              <section className="space-y-2">
                <h4 className="font-bold text-[#143627] text-base">1. Acceptance of Terms</h4>
                <p>
                  By accessing the Karam Utsav website (karamutsav.org or its official subdomains) or purchasing digital cultural publications, you agree to comply with these terms, community values, and all applicable laws.
                </p>
              </section>

              <section className="space-y-2">
                <h4 className="font-bold text-[#143627] text-base">2. Sacred Festival Decorum & Akhra Guidelines</h4>
                <p>
                  Karam Utsav is a sacred agrarian festival celebrating nature, maternal welfare, brotherhood, and agricultural prosperity. When attending physical celebrations across Assam:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-xs space-y-1">
                    <p className="font-bold text-emerald-900">Sanctity of Karam Branches</p>
                    <p className="text-emerald-800">
                      The Karam tree branches (Karam Raja) brought to the central Akhra are sacred. Visitors must maintain respectful distance and observe customary purity.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-xs space-y-1">
                    <p className="font-bold text-emerald-900">Traditional Dance Decorum</p>
                    <p className="text-emerald-800">
                      Jhumur dance circles performed by maidens (Karamthin) and village artists should be respected without disrupting the sacred formation.
                    </p>
                  </div>
                </div>
              </section>

              <section className="space-y-2">
                <h4 className="font-bold text-[#143627] text-base">3. Regional & Community Diversity</h4>
                <p>
                  Rituals, song verses, and offerings of Karam Utsav may naturally vary across different tea gardens, districts, and indigenous communities (Santhal, Munda, Oraon, Kharia, Kurmi, etc.) across Assam. Our documentation presents standard and representative practices without invalidating regional traditions.
                </p>
              </section>

              <section className="space-y-2">
                <h4 className="font-bold text-[#143627] text-base">4. Acceptable Website Usage</h4>
                <ul className="list-disc pl-5 space-y-1 text-stone-700">
                  <li>You agree not to use the website to distribute defamatory or culturally offensive content.</li>
                  <li>You agree not to scrape, reverse-engineer, or attempt unauthorized access to server files or customer databases.</li>
                  <li>Content, articles, and folklore text may be quoted for academic or educational non-commercial purposes with full citation of “Karam Utsav, Assam”.</li>
                </ul>
              </section>
            </div>
          )}

          {/* TAB 3: EBOOK DELIVERY & REFUND POLICY */}
          {activeTab === 'delivery-refund' && (
            <div className="space-y-6 animate-in fade-in duration-150">
              <div className="border-b border-stone-200 pb-4">
                <h3 className="font-display text-2xl font-bold text-[#143627]">
                  Digital Ebook Delivery, Download & Refund Policy
                </h3>
                <p className="text-xs text-stone-500 mt-1">
                  Specific policy governing digital sales of “কৰম পৰৱ” (Karam Utsav Cultural Guide)
                </p>
              </div>

              {/* Key Features Pill */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-3 bg-white border border-stone-200 rounded-xl shadow-xs text-center space-y-1">
                  <span className="text-xs font-bold text-stone-500 uppercase">Product Format</span>
                  <p className="text-sm font-bold text-[#143627]">Digital PDF (Color)</p>
                  <p className="text-[11px] text-stone-500">64 Pages with illustrations</p>
                </div>

                <div className="p-3 bg-white border border-stone-200 rounded-xl shadow-xs text-center space-y-1">
                  <span className="text-xs font-bold text-stone-500 uppercase">Delivery Speed</span>
                  <p className="text-sm font-bold text-emerald-700">Instant (0–2 Minutes)</p>
                  <p className="text-[11px] text-stone-500">Sent directly to registered email</p>
                </div>

                <div className="p-3 bg-white border border-stone-200 rounded-xl shadow-xs text-center space-y-1">
                  <span className="text-xs font-bold text-stone-500 uppercase">Contribution Price</span>
                  <p className="text-sm font-bold text-amber-700">₹49 (Nominal)</p>
                  <p className="text-[11px] text-stone-500">Cultural archival support</p>
                </div>
              </div>

              <section className="space-y-2">
                <h4 className="font-bold text-[#143627] text-base">1. Instant Digital Delivery</h4>
                <p>
                  Immediately upon successful payment completion on our platform, our automated dispatch engine:
                </p>
                <ol className="list-decimal pl-5 space-y-1.5 text-stone-700">
                  <li>
                    Generates your official purchase invoice and Amazon-style Order ID (e.g. <code>#AMZ-KU-XXXXXX</code>).
                  </li>
                  <li>
                    Dispatches the high-resolution PDF download token to your registered email address with full reading instructions.
                  </li>
                  <li>
                    Displays an instant on-screen <strong>“Download PDF Now”</strong> button so you can start reading immediately on your current phone, tablet, or PC.
                  </li>
                </ol>
              </section>

              <section className="space-y-2">
                <h4 className="font-bold text-[#143627] text-base">2. Order Retrieval Guarantee</h4>
                <p>
                  You do not need to worry if you change devices or accidentally delete the email. You can use our built-in <strong>“Retrieve Your Book by Email”</strong> tool on the Ebook page at any time to re-download your copy for free.
                </p>
              </section>

              <section className="space-y-2">
                <h4 className="font-bold text-[#143627] text-base">3. Non-Delivery Resolution & Support</h4>
                <p>
                  If you do not see the delivery email in your Inbox within 5 minutes:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-stone-700">
                  <li>Check your <em>Spam / Junk</em> or <em>Promotions</em> folder in case your email provider filtered the message.</li>
                  <li>Check whether the email address was entered without any typing mistake.</li>
                  <li>
                    Reach out to our customer support team immediately:
                    <div className="mt-2 p-3 bg-stone-100 rounded-xl border border-stone-200 font-mono text-xs space-y-1 text-stone-900">
                      <p>Email: <strong>{contact.email}</strong></p>
                      <p>Phone / WhatsApp: <strong>+91 {contact.phones[0]}</strong> / <strong>+91 {contact.phones[1]}</strong> / <strong>+91 {contact.phones[2]}</strong></p>
                    </div>
                    Our support team will manually re-dispatch the PDF directly to your email or WhatsApp within minutes.
                  </li>
                </ul>
              </section>

              <section className="space-y-2">
                <h4 className="font-bold text-[#143627] text-base">4. Refund & Cancellation Policy</h4>
                <p>
                  Due to the immediate digital nature of digital PDF downloads, orders where the file has been successfully downloaded are generally non-refundable. However:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-stone-700">
                  <li>
                    <strong>Technical Non-Delivery Guarantee:</strong> If a technical issue prevents you from receiving the digital ebook and our support team is unable to resolve it or provide you with the file within 24 hours of your inquiry, you are entitled to a <strong>100% full refund</strong> of ₹49.
                  </li>
                  <li>
                    <strong>Accidental Duplicate Charges:</strong> If an error caused a double charge for the same email address, the duplicate transaction will be refunded automatically within 3–5 working days.
                  </li>
                </ul>
              </section>
            </div>
          )}

          {/* TAB 4: CULTURAL HERITAGE & COPYRIGHT */}
          {activeTab === 'heritage-copyright' && (
            <div className="space-y-6 animate-in fade-in duration-150">
              <div className="border-b border-stone-200 pb-4">
                <h3 className="font-display text-2xl font-bold text-[#143627]">
                  Cultural Heritage, Folklore & Copyright Policy
                </h3>
                <p className="text-xs text-stone-500 mt-1">
                  Safeguarding the intangible cultural heritage of Tea Tribes & Adivasi communities of Assam
                </p>
              </div>

              <section className="space-y-2">
                <h4 className="font-bold text-[#143627] text-base">1. Community Heritage Acknowledgement</h4>
                <p>
                  The songs, folklore narratives, Jawa germination practices, and Jhumur rhythms documented on this website and in “কৰম পৰৱ” belong fundamentally to the living oral traditions of the Adivasi and Tea Tribe communities of Assam.
                </p>
                <p className="text-stone-700">
                  Karam Utsav acts as a respectful documentation and archival initiative, dedicated to preserving and making this rich cultural heritage accessible to current and future generations.
                </p>
              </section>

              <section className="space-y-2">
                <h4 className="font-bold text-[#143627] text-base">2. Educational & Research Fair Use</h4>
                <p>
                  Educators, scholars, students, and folk researchers are warmly encouraged to utilize the introductory ebook, folk lyrics, and ritual timelines for:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-stone-700">
                  <li>School and college cultural presentations and seminars.</li>
                  <li>Academic dissertations and research on northeastern agrarian rituals.</li>
                  <li>Community cultural workshops and youth cultural camps.</li>
                </ul>
                <p className="text-xs text-stone-500 italic mt-1">
                  Attribution: Please cite as: “Karam Utsav Cultural Archive, Assam (2026)”.
                </p>
              </section>

              <section className="space-y-2">
                <h4 className="font-bold text-[#143627] text-base">3. Commercial Restrictions</h4>
                <p className="text-stone-700">
                  Unauthorized commercial re-publication, reselling, or digital redistribution of the ebook PDF on unauthorized third-party marketplaces or file sharing platforms without written permission from Karam Utsav is prohibited.
                </p>
              </section>
            </div>
          )}

          {/* TAB 5: PHOTOGRAPHY & MEDIA CONSENT */}
          {activeTab === 'photography' && (
            <div className="space-y-6 animate-in fade-in duration-150">
              <div className="border-b border-stone-200 pb-4">
                <h3 className="font-display text-2xl font-bold text-[#143627]">
                  Community Photography, Archival & Media Guidelines
                </h3>
                <p className="text-xs text-stone-500 mt-1">
                  Respectful guidelines for festival photography, drone filming, and media coverage
                </p>
              </div>

              <section className="space-y-2">
                <h4 className="font-bold text-[#143627] text-base">1. Dignity of Ceremonial Rituals</h4>
                <p>
                  Photographers, journalists, and documentary teams attending village Akhras must prioritize religious solemnity:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-stone-700">
                  <li>Do not use intense direct flash into the eyes of priests (Pahan) during sacred incantations.</li>
                  <li>Do not step inside the inner consecrated ring where the Karam branches and Jawa baskets are placed.</li>
                  <li>Seek verbal permission before taking individual portraits of community elders.</li>
                </ul>
              </section>

              <section className="space-y-2">
                <h4 className="font-bold text-[#143627] text-base">2. Community Photo Submissions</h4>
                <p>
                  Community members and photographers who submit photos to our gallery archive retain full copyright of their original images while granting Karam Utsav a non-exclusive license to display them for non-profit cultural documentation. Full photographer credits are prominently displayed on every image.
                </p>
              </section>
            </div>
          )}
        </div>

        {/* Footer Info & Quick Help Contact */}
        <div className="bg-[#f2ece2] border-t border-stone-300 px-5 sm:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-stone-600 shrink-0">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-center sm:text-left">
            <span>
              <strong>Karam Utsav</strong>, {contact.address}
            </span>
            <span className="hidden md:inline">•</span>
            <span>
              Helplines: <a href={`tel:${contact.phones[0]}`} className="font-bold text-[#143627] hover:underline">+91 {contact.phones[0]}</a> / <a href={`tel:${contact.phones[1]}`} className="font-bold text-[#143627] hover:underline">+91 {contact.phones[1]}</a> / <a href={`tel:${contact.phones[2]}`} className="font-bold text-[#143627] hover:underline">+91 {contact.phones[2]}</a>
            </span>
            <span className="hidden md:inline">•</span>
            <span>
              Email: <a href={`mailto:${contact.email}`} className="font-bold text-[#143627] hover:underline">{contact.email}</a>
            </span>
          </div>

          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-[#1b4332] text-white hover:bg-[#2d6a4f] font-bold text-xs transition-colors shrink-0"
          >
            I Understand & Close
          </button>
        </div>
      </div>
    </div>
  );
};

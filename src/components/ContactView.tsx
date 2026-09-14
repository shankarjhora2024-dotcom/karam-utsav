import React, { useState } from 'react';
import {
  ArrowLeft,
  Building2,
  CheckCircle2,
  Clock,
  ExternalLink,
  HelpCircle,
  Mail,
  MapPin,
  MessageSquare,
  Navigation,
  Phone,
  Send,
  Sparkles,
  Train,
  Car,
  Plane,
  User,
  ShieldCheck,
  FileText,
  Download,
  BookOpen,
} from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { SocialMediaBar } from './SocialIcons';
import { PolicyTab } from './LegalPoliciesModal';

interface ContactViewProps {
  onNavigateHome: () => void;
  onNavigateEbook: () => void;
  onOpenLegalPolicy?: (tab: PolicyTab) => void;
}

export const ContactView: React.FC<ContactViewProps> = ({
  onNavigateHome,
  onNavigateEbook,
  onOpenLegalPolicy,
}) => {
  const { contact, social } = SITE_CONFIG;

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    category: 'Cultural & Festival Inquiry',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState('');

  const inquiryCategories = [
    'Cultural & Festival Inquiry',
    'Ebook & Educational Material Request',
    'Community Photo & Field Archive Submission',
    'Academic & Folkloric Research Collaboration',
    'Media, Press & Publication Inquiry',
    'General Feedback & Suggestions',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate clean, professional client-side submission handling
    setTimeout(() => {
      const generatedRef = `KU-${Math.floor(100000 + Math.random() * 900000)}`;
      setReferenceId(generatedRef);
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      category: 'Cultural & Festival Inquiry',
      subject: '',
      message: '',
    });
    setSubmitted(false);
  };

  return (
    <div className="py-10 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12 sm:space-y-16">
      {/* Top Breadcrumb & Header */}
      <div className="space-y-4">
        <button
          onClick={onNavigateHome}
          className="inline-flex items-center gap-2 text-xs font-semibold text-[#1b4332] hover:text-[#2d6a4f] bg-stone-100 hover:bg-stone-200 px-3.5 py-2 rounded-xl transition-colors focus:outline-none"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </button>

        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#eaf4ed] text-[#1b4332] text-xs font-semibold border border-[#c3e2cc]">
            <Sparkles className="w-3.5 h-3.5 text-[#2d6a4f]" />
            <span>Official Cultural Desk & Support</span>
          </div>

          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#143627]">
            Contact Karam Utsav
          </h1>

          <p className="font-serif text-base sm:text-lg text-stone-700 leading-relaxed">
            Connect with the Karam Utsav cultural documentation committee for inquiries, festival information, research collaborations, photographic contributions, and ebook assistance.
          </p>
        </div>
      </div>

      {/* Top Quick Contact Highlights Strip */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Telephone Card */}
        <div className="bg-[#fcfaf7] border border-[#e8dfd1] rounded-2xl p-5 shadow-xs hover:shadow-md transition-shadow flex items-start gap-4">
          <div className="w-11 h-11 rounded-xl bg-[#eaf4ed] text-[#2d6a4f] flex items-center justify-center shrink-0">
            <Phone className="w-5 h-5" />
          </div>
          <div className="space-y-1 min-w-0">
            <h3 className="text-xs font-bold text-stone-500 uppercase tracking-wider">
              Helpline Numbers
            </h3>
            <div className="flex flex-col text-sm font-bold text-[#143627]">
              {contact.phones.map((phone) => (
                <a
                  key={phone}
                  href={`tel:${phone}`}
                  className="hover:text-amber-700 transition-colors"
                >
                  +91 {phone}
                </a>
              ))}
            </div>
            <p className="text-[11px] text-stone-500">Available Mon – Sat</p>
          </div>
        </div>

        {/* WhatsApp Card */}
        <div className="bg-[#fcfaf7] border border-[#e8dfd1] rounded-2xl p-5 shadow-xs hover:shadow-md transition-shadow flex items-start gap-4">
          <div className="w-11 h-11 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
            <MessageSquare className="w-5 h-5" />
          </div>
          <div className="space-y-1 min-w-0">
            <h3 className="text-xs font-bold text-stone-500 uppercase tracking-wider">
              WhatsApp Support
            </h3>
            <p className="text-sm font-bold text-[#143627]">+91 {contact.phones[0]}</p>
            <a
              href={social.whatsappUrl || `https://wa.me/91${contact.phones[0]}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 hover:text-emerald-800 hover:underline"
            >
              <span>Chat on WhatsApp</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Email Card */}
        <div className="bg-[#fcfaf7] border border-[#e8dfd1] rounded-2xl p-5 shadow-xs hover:shadow-md transition-shadow flex items-start gap-4">
          <div className="w-11 h-11 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center shrink-0">
            <Mail className="w-5 h-5" />
          </div>
          <div className="space-y-1 min-w-0">
            <h3 className="text-xs font-bold text-stone-500 uppercase tracking-wider">
              Official Email
            </h3>
            <a
              href={`mailto:${contact.email}`}
              className="block text-xs font-bold text-[#143627] hover:text-amber-700 transition-colors break-all"
            >
              {contact.email}
            </a>
            <p className="text-[11px] text-stone-500">Prompt responses within 24h</p>
          </div>
        </div>

        {/* Hours Card */}
        <div className="bg-[#fcfaf7] border border-[#e8dfd1] rounded-2xl p-5 shadow-xs hover:shadow-md transition-shadow flex items-start gap-4">
          <div className="w-11 h-11 rounded-xl bg-stone-200 text-stone-800 flex items-center justify-center shrink-0">
            <Clock className="w-5 h-5" />
          </div>
          <div className="space-y-1 min-w-0">
            <h3 className="text-xs font-bold text-stone-500 uppercase tracking-wider">
              Office Hours
            </h3>
            <p className="text-sm font-bold text-[#143627]">9:00 AM – 6:00 PM</p>
            <p className="text-[11px] text-stone-500">Mon – Sat (IST)</p>
          </div>
        </div>
      </div>

      {/* Main Two-Column Layout: Contact Form & Institute Details */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left Column: Interactive Contact Form (7 cols) */}
        <div className="lg:col-span-7 bg-[#fcfaf7] border border-[#e8dfd1] rounded-3xl p-6 sm:p-10 shadow-sm">
          <div className="space-y-2 mb-6">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#143627]">
              Send an Inquiry or Message
            </h2>
            <p className="text-sm text-stone-600 font-serif">
              Please fill in your details below and our team will get back to you promptly.
            </p>
          </div>

          {submitted ? (
            <div className="bg-emerald-50 border border-emerald-300 rounded-2xl p-8 text-center space-y-4 animate-in fade-in">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <div className="space-y-1">
                <h3 className="font-display font-bold text-2xl text-emerald-900">
                  Message Sent Successfully
                </h3>
                <p className="text-sm text-emerald-800 font-serif">
                  Thank you for reaching out to the Karam Utsav cultural desk.
                </p>
              </div>

              <div className="bg-white p-4 rounded-xl border border-emerald-200 inline-block text-left text-xs space-y-1">
                <p className="text-stone-500">
                  <strong className="text-stone-800">Reference ID:</strong> {referenceId}
                </p>
                <p className="text-stone-500">
                  <strong className="text-stone-800">Sender:</strong> {formData.name} ({formData.email})
                </p>
                <p className="text-stone-500">
                  <strong className="text-stone-800">Topic:</strong> {formData.category}
                </p>
              </div>

              <div className="pt-2">
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 rounded-xl bg-[#1b4332] text-white hover:bg-[#2d6a4f] text-xs font-semibold transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name & Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider">
                    Your Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Sankar Jhora"
                    className="w-full px-4 py-3 rounded-xl bg-white border border-stone-300 text-stone-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#2d6a4f] focus:border-transparent transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. yourname@gmail.com"
                    className="w-full px-4 py-3 rounded-xl bg-white border border-stone-300 text-stone-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#2d6a4f] focus:border-transparent transition-all"
                  />
                </div>
              </div>

              {/* Phone & Inquiry Category Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider">
                    Phone / WhatsApp Number
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. 7638010004"
                    className="w-full px-4 py-3 rounded-xl bg-white border border-stone-300 text-stone-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#2d6a4f] focus:border-transparent transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider">
                    Inquiry Category <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-stone-300 text-stone-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#2d6a4f] focus:border-transparent transition-all"
                  >
                    {inquiryCategories.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider">
                  Subject <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Brief summary of your inquiry"
                  className="w-full px-4 py-3 rounded-xl bg-white border border-stone-300 text-stone-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#2d6a4f] focus:border-transparent transition-all"
                />
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider">
                  Your Message / Cultural Question <span className="text-red-500">*</span>
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Please write your detailed inquiry or information regarding Karam Utsav here..."
                  className="w-full px-4 py-3 rounded-xl bg-white border border-stone-300 text-stone-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#2d6a4f] focus:border-transparent transition-all resize-y"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 px-6 rounded-xl bg-[#1b4332] hover:bg-[#2d6a4f] text-white font-bold text-sm sm:text-base transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-[#2d6a4f] disabled:opacity-70 cursor-pointer"
              >
                {isSubmitting ? (
                  <span>Sending Message...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4 text-amber-300" />
                    <span>Send Inquiry Message</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>

        {/* Right Column: Institutional & Organizational Details (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          {/* Main Institution Card */}
          <div className="bg-[#143627] text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-[#2d6a4f] space-y-6">
            <div className="space-y-2 border-b border-[#2d6a4f] pb-4">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-300 uppercase tracking-widest">
                <Building2 className="w-4 h-4" />
                <span>Presenting Organization</span>
              </div>
              <h2 className="font-display text-2xl font-bold text-[#fcfaf7]">
                {contact.instituteName}
              </h2>
              <p className="text-xs text-[#d8f3dc]/80 font-serif leading-relaxed">
                Dedicated to the celebration, digital preservation, and cultural documentation of Tea Tribes and Adivasi traditions across Assam.
              </p>
            </div>

            {/* Address Details */}
            <div className="space-y-4 text-sm text-[#d8f3dc]">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-[#1b4332] text-amber-400 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                    Physical Address
                  </h4>
                  <p className="font-medium text-stone-200 mt-0.5">{contact.address}</p>
                  <p className="text-xs text-[#95d5b2] mt-0.5">
                    District: Nagaon, State: Assam, PIN: 782138
                  </p>
                </div>
              </div>

              {/* Contact Lines */}
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-[#1b4332] text-amber-400 shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                    Direct Contact Lines
                  </h4>
                  <div className="flex flex-col gap-0.5 mt-0.5 font-mono text-sm">
                    {contact.phones.map((p) => (
                      <a
                        key={p}
                        href={`tel:${p}`}
                        className="text-stone-200 hover:text-amber-300 transition-colors"
                      >
                        +91 {p}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-[#1b4332] text-amber-400 shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                    Electronic Mail
                  </h4>
                  <a
                    href={`mailto:${contact.email}`}
                    className="text-stone-200 hover:text-amber-300 transition-colors break-all text-xs font-medium block mt-0.5"
                  >
                    {contact.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Action Button to Ebook */}
            <div className="pt-2 border-t border-[#2d6a4f]">
              <button
                onClick={onNavigateEbook}
                className="w-full py-2.5 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 text-xs font-bold transition-all flex items-center justify-center gap-2 shadow-md"
              >
                <span>Read Ebook “কৰম পৰৱ” • ₹49</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Department Contact Desks */}
          <div className="bg-[#fcfaf7] border border-[#e8dfd1] rounded-3xl p-6 shadow-xs space-y-4">
            <h3 className="font-display font-bold text-lg text-[#143627]">
              Key Contact Desks
            </h3>

            <div className="space-y-3 text-xs">
              <div className="p-3 bg-white rounded-xl border border-stone-200 space-y-1">
                <div className="flex items-center gap-1.5 font-bold text-stone-800">
                  <User className="w-3.5 h-3.5 text-[#2d6a4f]" />
                  <span>Karam Utsav Cultural & Archive Committee</span>
                </div>
                <p className="text-stone-600">
                  For formal community partnerships, festival registrations, and academic research.
                </p>
              </div>

              <div className="p-3 bg-white rounded-xl border border-stone-200 space-y-1">
                <div className="flex items-center gap-1.5 font-bold text-stone-800">
                  <Sparkles className="w-3.5 h-3.5 text-[#2d6a4f]" />
                  <span>Ebook Publication & Digital Support</span>
                </div>
                <p className="text-stone-600">
                  For email dispatch inquiries, re-downloads, and educational distribution.
                </p>
              </div>
            </div>

            {/* Legal Policies Quick Box */}
            {onOpenLegalPolicy && (
              <div className="pt-3 border-t border-stone-200">
                <p className="text-[11px] font-bold text-stone-500 uppercase tracking-wider mb-2">
                  Legal & Policies
                </p>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <button
                    onClick={() => onOpenLegalPolicy('privacy')}
                    className="p-2 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-800 flex items-center gap-1.5 text-left font-medium transition-colors"
                  >
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                    <span className="truncate">Privacy Policy</span>
                  </button>
                  <button
                    onClick={() => onOpenLegalPolicy('delivery-refund')}
                    className="p-2 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-800 flex items-center gap-1.5 text-left font-medium transition-colors"
                  >
                    <Download className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                    <span className="truncate">Refund Policy</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Official Social Media Channels Section */}
      <div className="bg-[#fcfaf7] border border-[#e8dfd1] rounded-3xl p-6 sm:p-10 space-y-6 shadow-xs">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2d6a4f] uppercase tracking-widest">
            <Sparkles className="w-4 h-4" />
            <span>Community Channels</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#143627]">
            Official Social Media Channels
          </h2>
          <p className="text-sm text-stone-700 font-serif">
            Follow and connect with Karam Utsav across all digital platforms for live festival alerts, Jhumur videos, folk songs, and book announcements.
          </p>
        </div>

        <SocialMediaBar variant="cards" />
      </div>

      {/* How to Reach / Travel Directions Guide */}
      <div className="bg-[#f5eee3] border border-[#dfd4c2] rounded-3xl p-6 sm:p-10 space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-900 uppercase tracking-widest">
            <Navigation className="w-4 h-4 text-amber-800" />
            <span>Travel & Connectivity</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#143627]">
            How to Reach Missa Town, Nagaon
          </h2>
          <p className="text-sm text-stone-700 font-serif">
            Missa Town is located in the scenic central Assam belt of Nagaon district, easily accessible via road and railway networks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Road */}
          <div className="bg-white rounded-2xl p-5 border border-stone-200/80 shadow-xs space-y-2">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center">
              <Car className="w-5 h-5" />
            </div>
            <h3 className="font-display font-bold text-base text-[#143627]">
              By Road (NH-715)
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed font-serif">
              Connected via National Highway 715 (NH-715) connecting Guwahati, Nagaon, Kaliabor, and Tezpur with frequent ASTC and private bus services.
            </p>
          </div>

          {/* Rail */}
          <div className="bg-white rounded-2xl p-5 border border-stone-200/80 shadow-xs space-y-2">
            <div className="w-10 h-10 rounded-xl bg-[#eaf4ed] text-[#2d6a4f] flex items-center justify-center">
              <Train className="w-5 h-5" />
            </div>
            <h3 className="font-display font-bold text-base text-[#143627]">
              By Railway
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed font-serif">
              Nearest railway stations include Jakhalabandha Station (~20 km), Chaparmukh Junction (~65 km), and Nagaon Railway Station (~35 km).
            </p>
          </div>

          {/* Air */}
          <div className="bg-white rounded-2xl p-5 border border-stone-200/80 shadow-xs space-y-2">
            <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center">
              <Plane className="w-5 h-5" />
            </div>
            <h3 className="font-display font-bold text-base text-[#143627]">
              By Air
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed font-serif">
              Guwahati International Airport (GAU, ~155 km) and Tezpur Airport (~50 km across the Brahmaputra Kaliabhomora bridge).
            </p>
          </div>
        </div>
      </div>

      {/* Frequently Asked Questions (FAQ) Section */}
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2d6a4f] uppercase tracking-widest">
            <HelpCircle className="w-4 h-4" />
            <span>Common Inquiries</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#143627]">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          <div className="bg-[#fcfaf7] border border-[#e8dfd1] rounded-2xl p-5 space-y-2">
            <h3 className="font-display font-bold text-base text-[#143627]">
              1. What is the mission of the Karam Utsav platform?
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 font-serif leading-relaxed">
              Karam Utsav is a cultural heritage initiative dedicated to recording, preserving, and sharing the authentic traditions, songs, dances (such as Jhumur), and rituals of Karam Puja celebrated across the Tea Tribes and Adivasi communities of Assam.
            </p>
          </div>

          <div className="bg-[#fcfaf7] border border-[#e8dfd1] rounded-2xl p-5 space-y-2">
            <h3 className="font-display font-bold text-base text-[#143627]">
              2. How can I receive the cultural ebook “কৰম পৰৱ”?
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 font-serif leading-relaxed">
              The digital PDF version of the introductory cultural guide is available directly on our <button onClick={onNavigateEbook} className="text-[#2d6a4f] font-bold underline">Buy Ebook</button> page with instant delivery to your registered email address. Physical educational copies and community distributions can also be coordinated directly through the Karam Utsav committee.
            </p>
          </div>

          <div className="bg-[#fcfaf7] border border-[#e8dfd1] rounded-2xl p-5 space-y-2">
            <h3 className="font-display font-bold text-base text-[#143627]">
              3. How can community members or researchers contribute photos?
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 font-serif leading-relaxed">
              We warmly welcome authenticated field photographs, folklore recordings, and historical documents. Please select “Community Photo & Field Archive Submission” in the contact form above, or email our archival desk at <a href={`mailto:${contact.email}`} className="text-[#2d6a4f] font-bold underline">{contact.email}</a>.
            </p>
          </div>

          <div className="bg-[#fcfaf7] border border-[#e8dfd1] rounded-2xl p-5 space-y-2">
            <h3 className="font-display font-bold text-base text-[#143627]">
              4. Can cultural troupes, students, or researchers collaborate with Karam Utsav?
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 font-serif leading-relaxed">
              Yes, Karam Utsav in Missa Town coordinates cultural research, youth workshops, Jhumur troupes, and heritage documentation. Please call 7638010004 / 9707848936 / 7086495850 or email karamutsav@gmail.com for partnerships and community coordination.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

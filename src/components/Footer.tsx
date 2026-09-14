import React from 'react';
import {
  Mail,
  MapPin,
  Phone,
  ArrowRight,
  BookOpen,
} from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { KaramUtsavLogo } from './KaramUtsavLogo';
import { ActivePage } from '../App';
import { SocialMediaBar } from './SocialIcons';
import { PolicyTab } from './LegalPoliciesModal';

interface FooterProps {
  onNavigate: (page: ActivePage) => void;
  onOpenComingSoon?: (sectionName: string) => void;
  onOpenLegalPolicy: (tab: PolicyTab) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenLegalPolicy,
}) => {
  const { contact, footer } = SITE_CONFIG;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0b1f16] text-[#fcfaf7] border-t border-[#1f4e38] py-7 sm:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        {/* Main Content Grid: 3 Clean Compact Columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-start">
          {/* Column 1: Brand & One-Row Small Social Icons (5 cols on md/lg) */}
          <div className="md:col-span-4 lg:col-span-4 space-y-3">
            <button
              onClick={() => {
                onNavigate('home');
                scrollToTop();
              }}
              className="text-left group focus:outline-none block"
            >
              <KaramUtsavLogo size="sm" variant="light" showSubtitle={true} />
            </button>

            <p className="font-serif italic text-xs text-amber-200/90 font-medium">
              “{SITE_CONFIG.tagline}”
            </p>

            <p className="text-xs text-[#d8f3dc]/75 leading-relaxed font-serif max-w-sm">
              Dedicated to the preservation, documentation, and living traditions of Karam Utsav across Assam.
            </p>

            {/* All Social Media Icons in Small and in One Single Row */}
            <div className="pt-1 flex items-center gap-2">
              <span className="text-[11px] font-semibold text-amber-300/90 uppercase tracking-wider shrink-0">
                Follow Us:
              </span>
              <div className="overflow-x-auto py-1 scrollbar-none">
                <SocialMediaBar variant="single-row-small" />
              </div>
            </div>
          </div>

          {/* Column 2: Navigation & Legal Policies (4 cols on md/lg) */}
          <div className="md:col-span-4 lg:col-span-4 grid grid-cols-2 gap-4 text-xs">
            {/* Quick Explore Pages */}
            <div className="space-y-2">
              <h4 className="font-display font-bold text-amber-100 uppercase tracking-wider text-[11px] border-b border-[#2d6a4f]/50 pb-1">
                Explore
              </h4>
              <ul className="space-y-1.5 text-stone-300">
                <li>
                  <button
                    onClick={() => {
                      onNavigate('home');
                      scrollToTop();
                    }}
                    className="hover:text-amber-300 transition-colors flex items-center gap-1 text-left"
                  >
                    <ArrowRight className="w-3 h-3 text-[#52b788]" />
                    <span>Home</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      onNavigate('gallery');
                      scrollToTop();
                    }}
                    className="hover:text-amber-300 transition-colors flex items-center gap-1 text-left"
                  >
                    <ArrowRight className="w-3 h-3 text-[#52b788]" />
                    <span>Cultural Gallery</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      onNavigate('ebook');
                      scrollToTop();
                    }}
                    className="hover:text-amber-300 transition-colors flex items-center gap-1 text-left font-medium text-amber-200"
                  >
                    <BookOpen className="w-3 h-3 text-[#ffd814]" />
                    <span>Buy Ebook (₹49)</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      onNavigate('contact');
                      scrollToTop();
                    }}
                    className="hover:text-amber-300 transition-colors flex items-center gap-1 text-left"
                  >
                    <ArrowRight className="w-3 h-3 text-[#52b788]" />
                    <span>Contact</span>
                  </button>
                </li>
              </ul>
            </div>

            {/* Legal Policies */}
            <div className="space-y-2">
              <h4 className="font-display font-bold text-amber-100 uppercase tracking-wider text-[11px] border-b border-[#2d6a4f]/50 pb-1">
                Legal & Policies
              </h4>
              <ul className="space-y-1.5 text-stone-300">
                <li>
                  <button
                    onClick={() => onOpenLegalPolicy('privacy')}
                    className="hover:text-amber-300 transition-colors text-left block"
                  >
                    Privacy Policy
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onOpenLegalPolicy('terms')}
                    className="hover:text-amber-300 transition-colors text-left block"
                  >
                    Terms of Service
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onOpenLegalPolicy('delivery-refund')}
                    className="hover:text-amber-300 transition-colors text-left block"
                  >
                    Delivery & Refund
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onOpenLegalPolicy('heritage-copyright')}
                    className="hover:text-amber-300 transition-colors text-left block"
                  >
                    Cultural Copyright
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 3: Contact & Helplines (4 cols on md/lg) */}
          <div className="md:col-span-4 lg:col-span-4 space-y-2.5 text-xs text-stone-300">
            <h4 className="font-display font-bold text-amber-100 uppercase tracking-wider text-[11px] border-b border-[#2d6a4f]/50 pb-1">
              Contact & Helplines
            </h4>

            {/* Location */}
            <div className="flex items-start gap-2">
              <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
              <span>{contact.address}</span>
            </div>

            {/* Phones */}
            <div className="flex items-start gap-2">
              <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
              <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 font-mono text-[11px]">
                {contact.phones.map((phone, idx) => (
                  <span key={phone} className="inline-flex items-center gap-1">
                    <a
                      href={`tel:${phone}`}
                      className="hover:text-amber-300 transition-colors underline decoration-amber-400/40"
                    >
                      +91 {phone}
                    </a>
                    {idx < contact.phones.length - 1 && (
                      <span className="text-stone-500 font-sans">•</span>
                    )}
                  </span>
                ))}
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <a
                href={`mailto:${contact.email}`}
                className="hover:text-amber-300 transition-colors underline decoration-amber-400/40 font-medium text-stone-200"
              >
                {contact.email}
              </a>
            </div>

            <p className="text-[11px] text-stone-400 pt-0.5">
              Support: Mon – Sat, 9:00 AM – 6:00 PM IST
            </p>
          </div>
        </div>

        {/* Bottom Strip: Simple & Clean Copyright Bar */}
        <div className="pt-4 border-t border-[#1f4e38]/70 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-stone-400">
          <p>
            {footer.copyright} • <span className="text-stone-300">{footer.presentedBy}</span>
          </p>
          <div className="flex items-center gap-3">
            <button
              onClick={() => onOpenLegalPolicy('privacy')}
              className="hover:text-amber-300 transition-colors underline decoration-stone-600"
            >
              Privacy
            </button>
            <span>•</span>
            <button
              onClick={() => onOpenLegalPolicy('terms')}
              className="hover:text-amber-300 transition-colors underline decoration-stone-600"
            >
              Terms
            </button>
            <span>•</span>
            <button
              onClick={() => onOpenLegalPolicy('delivery-refund')}
              className="hover:text-amber-300 transition-colors underline decoration-stone-600"
            >
              Refund Policy
            </button>
            <span>•</span>
            <button
              onClick={() => onOpenLegalPolicy('heritage-copyright')}
              className="hover:text-amber-300 transition-colors underline decoration-stone-600"
            >
              Copyright
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

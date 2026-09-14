import React from 'react';
import {
  ArrowRight,
  BookOpen,
  Image as ImageIcon,
  Leaf,
  PhoneCall,
  TreeDeciduous,
  Info,
} from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { KaramUtsavLogo } from './KaramUtsavLogo';
import { ActivePage } from '../App';
import { SocialMediaBar } from './SocialIcons';
import { PolicyTab } from './LegalPoliciesModal';

interface HomeViewProps {
  onNavigate: (page: ActivePage) => void;
  onOpenComingSoon: (sectionName: string) => void;
  onOpenLegalPolicy?: (tab: PolicyTab) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onNavigate,
  onOpenComingSoon,
  onOpenLegalPolicy,
}) => {
  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#143627] via-[#1b4332] to-[#0f281e] text-white pt-12 sm:pt-20 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 border-b border-[#2d6a4f]/50">
        {/* Subtle leaf ambient background */}
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#52b788_1px,transparent_1px)] [background-size:24px_24px]"></div>

        <div className="relative max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Karam Utsav Logo & Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2d6a4f]/60 border border-[#52b788]/40 text-[#b7e4c7] text-xs font-semibold uppercase tracking-wider">
              <Leaf className="w-3.5 h-3.5 text-[#74c69d]" />
              <span>Cultural Heritage of Assam</span>
            </div>

            {/* Prominent Logo & Title Display */}
            <div className="flex flex-col items-center lg:items-start gap-2">
              <KaramUtsavLogo size="lg" variant="light" showSubtitle={false} />
              <p className="font-serif italic text-xl sm:text-2xl text-amber-200/95 font-medium mt-1">
                {SITE_CONFIG.tagline}
              </p>
            </div>

            <p className="text-base sm:text-lg text-[#d8f3dc]/90 max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Explore the sacred heritage, agricultural rhythms, and cultural vibrancy of Karam Utsav and the communities that keep this living tradition alive across Assam.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2">
              <button
                onClick={() => onNavigate('ebook')}
                className="px-6 py-3.5 rounded-xl bg-[#ffd814] hover:bg-[#f7ca00] text-stone-950 font-black text-sm sm:text-base transition-all shadow-lg hover:shadow-amber-500/30 hover:scale-[1.02] flex items-center gap-2.5 focus:outline-none focus:ring-2 focus:ring-amber-300 border border-[#fcd200]"
              >
                <BookOpen className="w-4 h-4 text-stone-950" />
                <span>Buy Ebook • ₹49 (Email & SMS Delivery)</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigate('gallery')}
                className="px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-[#fdfbf7] border border-white/25 font-semibold text-sm sm:text-base transition-all flex items-center gap-2.5 focus:outline-none focus:ring-2 focus:ring-white/40"
              >
                <ImageIcon className="w-4 h-4 text-[#74c69d]" />
                <span>Explore Gallery</span>
              </button>

              <button
                onClick={() => onNavigate('contact')}
                className="px-5 py-3.5 rounded-xl bg-[#2d6a4f]/70 hover:bg-[#2d6a4f] text-[#fdfbf7] border border-[#52b788]/40 font-semibold text-sm sm:text-base transition-all flex items-center gap-2 focus:outline-none"
              >
                <PhoneCall className="w-4 h-4 text-amber-300" />
                <span>Contact Desk</span>
              </button>
            </div>

            {/* Regional Cultural Advisory Note */}
            <div className="pt-2 flex items-center justify-center lg:justify-start gap-2 text-xs text-[#95d5b2]/90">
              <Info className="w-3.5 h-3.5 shrink-0 text-amber-300" />
              <span>{SITE_CONFIG.culturalNote}</span>
            </div>
          </div>

          {/* Right Column: Cultural Emblem and Photography Visual */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-2 border-[#52b788]/40 relative bg-[#0f281e] group">
                <img
                  src="https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1000&q=80"
                  alt="Sacred Karam tree leaves and celebration of nature"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-90"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e271c] via-transparent to-transparent"></div>

                {/* Badge Overlay */}
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-2xl bg-[#0e271c]/90 backdrop-blur-md border border-[#2d6a4f]/80 text-xs text-[#d8f3dc] flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-[#2d6a4f] text-[#95d5b2]">
                    <TreeDeciduous className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Sacred Karam Tree & Living Groves</p>
                    <p className="text-[11px] text-[#95d5b2]">Reverence for nature, harvest, and community harmony</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Introduction Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#e8f5e9] text-[#1b4332] text-xs font-semibold">
          <Leaf className="w-3.5 h-3.5 text-[#2d6a4f]" />
          <span>Cultural Introduction</span>
        </div>

        <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#143627] tracking-tight">
          Discover the Spirit of Karam Utsav
        </h2>

        <div className="w-16 h-1 bg-[#2d6a4f] mx-auto rounded-full"></div>

        <p className="font-serif text-lg sm:text-xl text-stone-700 leading-relaxed pt-2">
          Karam Utsav (Karam Puja) is a culturally profound festival honoring nature, the sacred Karam tree (Nauclea parvifolia), agricultural fertility, and community unity. Celebrated with deep reverence across the Tea Tribes and Adivasi communities of Assam, it weaves together songs of soil, spirited Jhumur dances, and ancestral lore.
        </p>
      </section>

      {/* 3. Feature Cards Section (All Active & Useful) */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <span className="text-xs uppercase font-bold tracking-wider text-[#2d6a4f]">
            Platform Highlights
          </span>
          <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#143627] mt-1">
            Explore Karam Utsav
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: 🌿 Karam Utsav Heritage */}
          <div className="bg-[#fcfaf7] border border-[#e8dfd1] rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#eaf4ed] text-[#2d6a4f] flex items-center justify-center">
                <TreeDeciduous className="w-6 h-6" />
              </div>
              <h4 className="font-display font-bold text-xl text-[#143627]">
                Karam Utsav
              </h4>
              <p className="text-sm text-stone-600 leading-relaxed">
                Understand the traditions, Karam Kahani lore, and sacred rituals.
              </p>
            </div>
            <button
              onClick={() => onOpenComingSoon('Karam Utsav Folklore & Traditions')}
              className="w-full py-2.5 px-4 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 font-semibold text-xs transition-colors text-center border border-stone-200"
            >
              Learn More
            </button>
          </div>

          {/* Card 2: 📖 Our Ebook (WORKING) */}
          <div className="bg-gradient-to-br from-[#1b4332] to-[#24543e] text-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all flex flex-col justify-between space-y-4 border border-[#40916c]/40 relative overflow-hidden group">
            <div className="space-y-3 relative z-10">
              <div className="w-12 h-12 rounded-xl bg-amber-400 text-stone-950 flex items-center justify-center shadow-md">
                <BookOpen className="w-6 h-6" />
              </div>
              <div className="flex items-center gap-2">
                <h4 className="font-display font-bold text-xl text-white">
                  Our Ebook
                </h4>
                <span className="text-[10px] bg-amber-400/25 text-amber-300 px-2 py-0.5 rounded border border-amber-300/40 font-bold uppercase">
                  Active
                </span>
              </div>
              <p className="text-sm text-[#d8f3dc]/90 leading-relaxed">
                Official cultural guide with instant email delivery to your inbox.
              </p>
            </div>
            <button
              onClick={() => onNavigate('ebook')}
              className="relative z-10 w-full py-2.5 px-4 rounded-xl bg-[#ffd814] hover:bg-[#f7ca00] text-stone-950 font-black text-xs transition-all shadow-md flex items-center justify-center gap-2 border border-[#fcd200]"
            >
              <span>Buy Ebook • ₹49 (Instant Email)</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Card 3: 📸 Cultural Gallery (WORKING) */}
          <div className="bg-[#fcfaf7] border border-[#e8dfd1] rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center">
                <ImageIcon className="w-6 h-6" />
              </div>
              <div className="flex items-center gap-2">
                <h4 className="font-display font-bold text-xl text-[#143627]">
                  Cultural Gallery
                </h4>
                <span className="text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded border border-emerald-300/40 font-bold uppercase">
                  Active
                </span>
              </div>
              <p className="text-sm text-stone-600 leading-relaxed">
                Explore photographs, Jhumur dances, and archival field memories.
              </p>
            </div>
            <button
              onClick={() => onNavigate('gallery')}
              className="w-full py-2.5 px-4 rounded-xl bg-[#1b4332] hover:bg-[#2d6a4f] text-white font-semibold text-xs transition-colors text-center shadow-sm flex items-center justify-center gap-2"
            >
              <span>View Gallery</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Card 4: 📞 Contact & Details (WORKING) */}
          <div className="bg-[#fcfaf7] border border-[#e8dfd1] rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#eaf4ed] text-[#2d6a4f] flex items-center justify-center">
                <PhoneCall className="w-6 h-6" />
              </div>
              <div className="flex items-center gap-2">
                <h4 className="font-display font-bold text-xl text-[#143627]">
                  Contact & Support
                </h4>
                <span className="text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded border border-emerald-300/40 font-bold uppercase">
                  Active
                </span>
              </div>
              <p className="text-sm text-stone-600 leading-relaxed">
                Get full details, helpline numbers, address, and inquiry form.
              </p>
            </div>
            <button
              onClick={() => onNavigate('contact')}
              className="w-full py-2.5 px-4 rounded-xl bg-[#1b4332] hover:bg-[#2d6a4f] text-white font-semibold text-xs transition-colors text-center shadow-sm flex items-center justify-center gap-2"
            >
              <span>Contact Details</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* 4. Cultural Quote Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#f5eee3] border border-[#dfd4c2] rounded-3xl p-8 sm:p-12 text-center shadow-sm relative overflow-hidden">
          <div className="mx-auto mb-4 w-10 h-10 rounded-full bg-[#1b4332] text-amber-300 flex items-center justify-center shadow-sm">
            <Leaf className="w-5 h-5" />
          </div>

          <blockquote className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#143627] leading-snug">
            {SITE_CONFIG.quote.text}
          </blockquote>

          <p className="mt-4 text-xs sm:text-sm font-serif uppercase tracking-widest text-[#78350f]">
            — {SITE_CONFIG.quote.attribution}
          </p>
        </div>
      </section>

      {/* 5. Call-to-Action Section: Explore Our Cultural Ebook */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#143627] via-[#1b4332] to-[#0f281e] text-white rounded-3xl p-8 sm:p-12 shadow-xl border border-[#2d6a4f] flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 text-center md:text-left max-w-xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-semibold">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Heritage Publication</span>
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#fcfaf7]">
              Explore Our Cultural Ebook “কৰম পৰৱ”
            </h3>
            <p className="text-sm sm:text-base text-[#d8f3dc]/90 leading-relaxed font-serif">
              Read our introductory publication on Karam Utsav and discover the folk beliefs, agrarian traditions, and songs that unite our communities.
            </p>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => {
                onNavigate('ebook');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-6 py-3.5 rounded-xl bg-[#ffd814] hover:bg-[#f7ca00] text-stone-950 font-black text-sm sm:text-base transition-all shadow-lg hover:shadow-amber-500/30 flex items-center justify-center gap-2.5 focus:outline-none focus:ring-2 focus:ring-amber-300 border border-[#fcd200]"
            >
              <BookOpen className="w-4 h-4 text-stone-950" />
              <span>Buy Ebook • ₹49 (Email & SMS Delivery)</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => {
                onNavigate('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm sm:text-base transition-all flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-amber-300" />
              <span>Contact Us</span>
            </button>
          </div>
        </div>
      </section>

      {/* 6. Social Media & Community Connect Strip */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#fcfaf7] border border-[#e8dfd1] rounded-3xl p-6 sm:p-8 space-y-4 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h4 className="font-display text-lg font-bold text-[#143627]">
                Connect on Social Media
              </h4>
              <p className="text-xs text-stone-600 font-serif">
                Join our online community for festival updates, photo releases, and cultural videos.
              </p>
            </div>
            <SocialMediaBar variant="compact" />
          </div>
        </div>
      </section>
    </div>
  );
};

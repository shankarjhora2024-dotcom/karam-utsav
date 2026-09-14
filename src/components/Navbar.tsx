import React, { useState } from 'react';
import { BookOpen, Image as ImageIcon, Menu, PhoneCall, ShoppingCart, X, Home } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { KaramUtsavLogo } from './KaramUtsavLogo';
import { ActivePage } from '../App';

interface NavbarProps {
  currentPage: ActivePage;
  onNavigate: (page: ActivePage) => void;
  onOpenComingSoon?: (sectionName: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Clean, focused, uncluttered navigation without promotional clutter or coming-soon items
  const navLinks: { id: ActivePage; label: string; icon: React.ReactNode }[] = [
    { id: 'home', label: 'Home', icon: <Home className="w-4 h-4" /> },
    { id: 'gallery', label: 'Gallery', icon: <ImageIcon className="w-4 h-4" /> },
    { id: 'contact', label: 'Contact', icon: <PhoneCall className="w-4 h-4" /> },
  ];

  const handleLinkClick = (page: ActivePage) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-[#143627] text-[#fcfaf7] border-b border-[#2d6a4f]/60 shadow-md">
      {/* Top Notification / Cultural Heritage Ribbon */}
      <div className="bg-[#0e271c] border-b border-[#1f4e38] text-xs text-[#d8f3dc]/90 py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
            <span className="font-semibold text-[11px] sm:text-xs tracking-wide">
              {SITE_CONFIG.name} — {SITE_CONFIG.tagline}
            </span>
          </div>
          <div className="hidden md:flex items-center gap-4 text-[11px] text-amber-200/90 font-serif">
            <span>Presented by {SITE_CONFIG.contact.instituteName}</span>
            <span className="text-[#52b788]">|</span>
            <a
              href={`tel:${SITE_CONFIG.contact.phones[0]}`}
              className="hover:text-amber-100 transition-colors font-sans font-medium"
            >
              Helpline: +91 {SITE_CONFIG.contact.phones[0]}
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          {/* Logo with Karam Utsav Emblem */}
          <button
            onClick={() => handleLinkClick('home')}
            className="flex items-center text-left group focus:outline-none"
            aria-label="Karam Utsav Home"
          >
            <KaramUtsavLogo size="md" variant="light" showSubtitle={true} />
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-2 lg:space-x-3 text-sm font-medium">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`px-4 py-2 rounded-xl transition-all flex items-center gap-2 min-h-[44px] ${
                    isActive
                      ? 'bg-white/15 text-amber-300 font-bold shadow-xs'
                      : 'text-stone-200 hover:text-white hover:bg-white/10 font-medium'
                  }`}
                >
                  {link.icon}
                  <span>{link.label}</span>
                </button>
              );
            })}

            {/* Prominent Buy Ebook Action Button (Amazon Style) */}
            <button
              onClick={() => handleLinkClick('ebook')}
              className={`ml-2 px-4 py-2.5 rounded-xl text-xs font-black transition-all shadow-md flex items-center gap-2 min-h-[44px] ${
                currentPage === 'ebook'
                  ? 'bg-[#ffd814] text-stone-950 ring-2 ring-amber-300 scale-[1.02]'
                  : 'bg-[#ffd814] hover:bg-[#f7ca00] text-stone-950 hover:shadow-lg border border-[#fcd200]'
              }`}
            >
              <ShoppingCart className="w-4 h-4 text-stone-900" />
              <span>Buy Ebook • ₹49</span>
            </button>
          </nav>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-[#1b4332] text-white hover:bg-[#2d6a4f] border border-[#2d6a4f] focus:outline-none min-h-[44px] min-w-[44px] flex items-center justify-center shadow-xs"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0e271c] border-b border-[#2d6a4f] px-4 pt-3 pb-6 shadow-2xl animate-in slide-in-from-top-2 duration-150">
          <div className="space-y-2">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold text-left transition-colors min-h-[48px] ${
                    isActive
                      ? 'bg-white/20 text-amber-300 border border-amber-300/40'
                      : 'text-stone-200 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  <span className={isActive ? 'text-amber-300' : 'text-[#74c69d]'}>
                    {link.icon}
                  </span>
                  <span>{link.label}</span>
                </button>
              );
            })}

            {/* Mobile Ebook Action Button (Amazon Style) */}
            <div className="pt-2">
              <button
                onClick={() => handleLinkClick('ebook')}
                className="w-full py-3.5 px-4 rounded-xl text-sm font-black flex items-center justify-center gap-2 bg-[#ffd814] hover:bg-[#f7ca00] text-stone-950 shadow-md min-h-[48px] border border-[#fcd200]"
              >
                <ShoppingCart className="w-4 h-4 text-stone-900" />
                <span>Buy Ebook “কৰম পৰৱ” • ₹49 (Email & SMS Delivery)</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

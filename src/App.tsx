import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HomeView } from './components/HomeView';
import { GalleryView } from './components/GalleryView';
import { EbookDownloadView } from './components/EbookDownloadView';
import { ContactView } from './components/ContactView';
import { ComingSoonModal } from './components/ComingSoonModal';
import { LegalPoliciesModal, PolicyTab } from './components/LegalPoliciesModal';
import { Footer } from './components/Footer';

export type ActivePage = 'home' | 'gallery' | 'ebook' | 'contact';

export default function App() {
  // Navigation State: 'home', 'gallery', 'ebook', and 'contact' all open normally
  const [currentPage, setCurrentPage] = useState<ActivePage>('home');

  // Reusable Coming Soon Modal State (for secondary features if needed)
  const [comingSoonSection, setComingSoonSection] = useState<string | null>(null);

  // Legal Policies Modal State (Privacy Policy, Terms, Ebook Delivery & Refund, Cultural Copyright)
  const [legalPolicyTab, setLegalPolicyTab] = useState<PolicyTab | null>(null);

  const handleOpenComingSoon = (sectionName: string) => {
    setComingSoonSection(sectionName);
  };

  const handleCloseComingSoon = () => {
    setComingSoonSection(null);
  };

  const handleOpenLegalPolicy = (tab: PolicyTab) => {
    setLegalPolicyTab(tab);
  };

  const handleCloseLegalPolicy = () => {
    setLegalPolicyTab(null);
  };

  const handleNavigate = (page: ActivePage) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#faf7f2] text-[#19241e] antialiased selection:bg-[#2d6a4f] selection:text-amber-100 font-sans">
      {/* 1. Responsive Clean Navigation Bar */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenComingSoon={handleOpenComingSoon}
      />

      {/* 2. Main Body Content */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomeView
            onNavigate={handleNavigate}
            onOpenComingSoon={handleOpenComingSoon}
            onOpenLegalPolicy={handleOpenLegalPolicy}
          />
        )}

        {currentPage === 'gallery' && (
          <GalleryView onNavigateHome={() => handleNavigate('home')} />
        )}

        {currentPage === 'ebook' && (
          <EbookDownloadView
            onBackToHome={() => handleNavigate('home')}
            onOpenLegalPolicy={handleOpenLegalPolicy}
          />
        )}

        {currentPage === 'contact' && (
          <ContactView
            onNavigateHome={() => handleNavigate('home')}
            onNavigateEbook={() => handleNavigate('ebook')}
            onOpenLegalPolicy={handleOpenLegalPolicy}
          />
        )}
      </main>

      {/* 3. Reusable Coming Soon Modal */}
      <ComingSoonModal
        isOpen={!!comingSoonSection}
        onClose={handleCloseComingSoon}
        sectionName={comingSoonSection || undefined}
      />

      {/* 4. Comprehensive Legal & Policies Modal */}
      <LegalPoliciesModal
        isOpen={!!legalPolicyTab}
        onClose={handleCloseLegalPolicy}
        initialTab={legalPolicyTab || 'privacy'}
      />

      {/* 5. Professional Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenComingSoon={handleOpenComingSoon}
        onOpenLegalPolicy={handleOpenLegalPolicy}
      />
    </div>
  );
}

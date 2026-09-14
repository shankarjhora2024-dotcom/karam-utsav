import React, { useEffect, useRef } from 'react';
import { Leaf, X } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

interface ComingSoonModalProps {
  isOpen: boolean;
  onClose: () => void;
  sectionName?: string;
}

export const ComingSoonModal: React.FC<ComingSoonModalProps> = ({
  isOpen,
  onClose,
  sectionName,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  // Close when pressing Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      // Prevent body scrolling behind modal
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      id="coming-soon-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-sm animate-in fade-in duration-150"
      onClick={(e) => {
        // Close on clicking outside modal card
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="coming-soon-title"
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-md bg-[#fcfaf7] border border-[#e8dfd1] rounded-2xl p-6 sm:p-8 shadow-2xl text-center transform transition-all animate-in zoom-in-95 duration-150"
      >
        {/* Top Close Button (X) */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-stone-400 hover:text-stone-700 hover:bg-stone-100 rounded-full transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Subtle Karam Tree Leaf Icon */}
        <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-[#eaf4ed] border border-[#c3e2cc] flex items-center justify-center text-[#2d6a4f] shadow-inner">
          <Leaf className="w-8 h-8 text-[#2d6a4f]" strokeWidth={2.2} />
        </div>

        {/* Green Heading */}
        <h3
          id="coming-soon-title"
          className="font-display text-2xl font-bold text-[#1b4332] mb-2"
        >
          {SITE_CONFIG.comingSoon.title}
        </h3>

        {/* Optional context tag if a specific section was clicked */}
        {sectionName && (
          <span className="inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full bg-amber-100/80 text-amber-900 border border-amber-300/60 mb-3">
            {sectionName}
          </span>
        )}

        {/* Cultural Informational Message */}
        <p className="text-sm sm:text-base text-stone-600 leading-relaxed mb-6 font-serif">
          {SITE_CONFIG.comingSoon.message}
        </p>

        {/* Action Button: Close */}
        <div className="space-y-3">
          <button
            onClick={onClose}
            className="w-full py-3 px-6 rounded-xl bg-[#1b4332] hover:bg-[#2d6a4f] text-white font-medium text-sm transition-all shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#2d6a4f] focus:ring-offset-2"
          >
            {SITE_CONFIG.comingSoon.buttonText}
          </button>

          {/* Optional Small Text */}
          <p className="text-xs text-stone-500 font-medium">
            {SITE_CONFIG.comingSoon.subText}
          </p>
        </div>
      </div>
    </div>
  );
};

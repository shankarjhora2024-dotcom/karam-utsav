import React, { useState, useEffect } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Filter,
  Image as ImageIcon,
  Info,
  MapPin,
  Maximize2,
  X,
} from 'lucide-react';
import {
  GALLERY_CATEGORIES,
  GalleryCategory,
  GalleryItemConfig,
  INITIAL_GALLERY_ITEMS,
} from '../config/siteConfig';

interface GalleryViewProps {
  onNavigateHome: () => void;
}

export const GalleryView: React.FC<GalleryViewProps> = ({ onNavigateHome }) => {
  const [selectedCategory, setSelectedCategory] = useState<GalleryCategory>('All');
  const [activeItemIndex, setActiveItemIndex] = useState<number | null>(null);

  // Filter items based on category
  const filteredItems = INITIAL_GALLERY_ITEMS.filter((item) => {
    if (selectedCategory === 'All') return true;
    return item.category === selectedCategory;
  });

  const activeItem: GalleryItemConfig | null =
    activeItemIndex !== null ? filteredItems[activeItemIndex] : null;

  // Next & Prev handlers for lightbox
  const handlePrev = () => {
    if (activeItemIndex === null) return;
    setActiveItemIndex((prev) =>
      prev! > 0 ? prev! - 1 : filteredItems.length - 1
    );
  };

  const handleNext = () => {
    if (activeItemIndex === null) return;
    setActiveItemIndex((prev) =>
      prev! < filteredItems.length - 1 ? prev! + 1 : 0
    );
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeItemIndex === null) return;
      if (e.key === 'Escape') {
        setActiveItemIndex(null);
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeItemIndex, filteredItems.length]);

  return (
    <div className="py-10 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10">
      {/* Header Section */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#eaf4ed] text-[#1b4332] text-xs font-semibold">
          <ImageIcon className="w-3.5 h-3.5 text-[#2d6a4f]" />
          <span>Visual Heritage</span>
        </div>

        <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#143627]">
          Cultural Gallery
        </h1>

        <p className="font-serif text-base sm:text-lg text-stone-600">
          Moments, memories, and visual stories of Karam Utsav and cultural heritage in Assam.
        </p>

        {/* Informative Note for Website Admin & Visitors */}
        <div className="inline-flex items-center gap-2 text-xs text-stone-500 bg-stone-100 px-3.5 py-1.5 rounded-full border border-stone-200">
          <Info className="w-3.5 h-3.5 text-amber-700 shrink-0" />
          <span>Sample images displayed below — ready to be replaced with authorized community photographs</span>
        </div>
      </div>

      {/* Category Filter Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
        <span className="hidden sm:flex items-center gap-1 text-xs font-bold text-[#2d6a4f] mr-1 uppercase tracking-wider">
          <Filter className="w-3.5 h-3.5" />
          <span>Category:</span>
        </span>
        {GALLERY_CATEGORIES.map((cat) => {
          const isActive = selectedCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all whitespace-nowrap min-h-[40px] ${
                isActive
                  ? 'bg-[#1b4332] text-white shadow-md ring-2 ring-[#52b788]/50'
                  : 'bg-[#f5eee3] text-stone-700 hover:bg-[#eae0d2] border border-[#dfd4c2]'
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Empty State Message */}
      {filteredItems.length === 0 ? (
        <div className="p-12 text-center bg-[#fcfaf7] border border-[#e8dfd1] rounded-2xl max-w-lg mx-auto space-y-4">
          <div className="w-16 h-16 rounded-full bg-stone-100 text-stone-400 mx-auto flex items-center justify-center">
            <ImageIcon className="w-8 h-8" />
          </div>
          <h3 className="font-display font-bold text-xl text-stone-800">
            Gallery images will be added soon.
          </h3>
          <p className="text-sm text-stone-500 font-serif">
            We are curating permission-cleared field photographs for this category.
          </p>
          <button
            onClick={() => setSelectedCategory('All')}
            className="px-4 py-2 bg-[#1b4332] text-white text-xs font-semibold rounded-lg hover:bg-[#2d6a4f]"
          >
            Show All Categories
          </button>
        </div>
      ) : (
        /* Image Grid */
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setActiveItemIndex(index)}
              className="group bg-[#fcfaf7] rounded-2xl overflow-hidden border border-[#e8dfd1] shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col"
            >
              {/* Image Container with Zoom and Hover Overlay */}
              <div className="relative aspect-[4/3] bg-stone-900 overflow-hidden">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-95 group-hover:opacity-100"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>

                {/* Sample Image Badge */}
                <div className="absolute top-3 left-3 bg-stone-950/80 backdrop-blur-xs text-amber-300 text-[10px] font-semibold px-2.5 py-1 rounded-md border border-amber-400/40">
                  {item.isPlaceholderNote || 'Sample Image — Replace with authorized photograph'}
                </div>

                {/* Category Chip */}
                <div className="absolute top-3 right-3 bg-[#1b4332]/90 backdrop-blur-xs text-white text-[11px] font-medium px-2.5 py-1 rounded-md">
                  {item.category}
                </div>

                {/* Expand Overlay Icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-11 h-11 rounded-full bg-white/90 text-stone-900 flex items-center justify-center shadow-lg">
                    <Maximize2 className="w-5 h-5" />
                  </div>
                </div>
              </div>

              {/* Caption & Meta */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-2">
                <div>
                  <h3 className="font-display font-bold text-lg text-[#143627] group-hover:text-[#2d6a4f] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 font-serif leading-relaxed line-clamp-2 mt-1">
                    {item.caption}
                  </p>
                </div>

                {item.location && (
                  <div className="pt-2 flex items-center justify-between border-t border-stone-200/80 text-[11px] text-stone-500">
                    <span className="flex items-center gap-1 text-stone-600">
                      <MapPin className="w-3.5 h-3.5 text-[#2d6a4f]" />
                      <span>{item.location}</span>
                    </span>
                    <span className="italic text-[10px] text-stone-400">Click to view</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Lightbox Modal */}
      {activeItem && activeItemIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-stone-950/90 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6 text-white animate-in fade-in duration-200"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setActiveItemIndex(null);
            }
          }}
          role="dialog"
          aria-modal="true"
        >
          {/* Top Bar: Title & Close Button */}
          <div className="flex items-center justify-between z-10">
            <div className="flex items-center gap-2">
              <span className="text-xs bg-amber-400 text-stone-950 px-2.5 py-0.5 rounded font-bold uppercase tracking-wider">
                {activeItem.category}
              </span>
              <span className="text-xs text-stone-300">
                {activeItemIndex + 1} of {filteredItems.length}
              </span>
            </div>

            <button
              onClick={() => setActiveItemIndex(null)}
              className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none"
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Center Stage with Prev & Next Buttons */}
          <div className="relative flex-1 flex items-center justify-center my-4 overflow-hidden">
            {/* Prev Button */}
            <button
              onClick={handlePrev}
              className="absolute left-2 sm:left-4 z-10 p-3 rounded-full bg-black/60 hover:bg-black/90 text-white transition-colors focus:outline-none"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Lightbox Image */}
            <div className="max-w-5xl max-h-[72vh] flex items-center justify-center">
              <img
                src={activeItem.imageUrl}
                alt={activeItem.title}
                className="max-w-full max-h-[72vh] object-contain rounded-xl shadow-2xl"
              />
            </div>

            {/* Next Button */}
            <button
              onClick={handleNext}
              className="absolute right-2 sm:right-4 z-10 p-3 rounded-full bg-black/60 hover:bg-black/90 text-white transition-colors focus:outline-none"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Bottom Bar: Captions & Placement Note */}
          <div className="max-w-3xl mx-auto w-full text-center space-y-1 bg-black/50 p-4 rounded-xl backdrop-blur-xs border border-white/10">
            <h3 className="font-display font-bold text-lg sm:text-xl text-amber-100">
              {activeItem.title}
            </h3>
            <p className="text-xs sm:text-sm text-stone-200 font-serif leading-relaxed">
              {activeItem.caption}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 pt-1 text-[11px] text-amber-300/80">
              {activeItem.location && <span>Location: {activeItem.location}</span>}
              <span>•</span>
              <span className="italic">{activeItem.isPlaceholderNote || 'Sample Image — Replace with authorized photograph'}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

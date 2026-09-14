import React, { useState } from 'react';
import {
  BookOpen,
  ChevronLeft,
  ChevronRight,
  Download,
  FileText,
  Maximize2,
  Sparkles,
  TreeDeciduous,
  X,
} from 'lucide-react';
import { BookDetails } from '../types';
import { HERITAGE_BOOK_DETAILS } from '../data/bookData';
import { generateAndDownloadBook } from '../utils/bookDownload';

interface BookReaderModalProps {
  isOpen: boolean;
  onClose: () => void;
  book?: BookDetails;
  onBuyBook?: () => void;
}

export const BookReaderModal: React.FC<BookReaderModalProps> = ({
  isOpen,
  onClose,
  book,
  onBuyBook,
}) => {
  const activeBook = book || HERITAGE_BOOK_DETAILS;
  const [currentChapterIndex, setCurrentChapterIndex] = useState(0);
  const [fontSize, setFontSize] = useState<'normal' | 'large' | 'xlarge'>('normal');

  if (!isOpen) return null;

  const chapters = [
    {
      title: 'Foreword & Dedication',
      content: [
        '“To the resilient ancestors and working communities of Assam’s tea gardens—whose calloused hands planted the camellia bushes and whose voices preserved the sacred rhythm of the Madal under starlit akhra grounds.”',
        'This monograph serves not as a passive observation, but as an active archive of living indigenous heritage. In keeping with Free, Prior, and Informed Consent (FPIC), all oral chants and ritual sequences documented in this volume were reviewed alongside village elders, Pahans, and Naikes across Dibrugarh, Tinsukia, Golaghat, and Sonitpur districts.',
      ],
    },
    {
      title: 'Chapter 1: The Cosmic Karam & Sacred Haldina',
      content: [
        '“In the deep amber glow of the Bhadra evening, long before the first thunder of the Madal echoes across the tea bushes, the sacred Karam tree stands as a sentinel of memory. For the Adivasi people of Assam, the tree is not an abstract deity; it is Karam Raja—a living sovereign of prosperity, fertility, and cosmic balance.”',
        '“When the village youth enter the forest to cut the three auspicious branches, they do so not with the violence of the axe, but with the tenderness of a child approaching an elder. Prayers are whispered into the bark; vermilion and raw milk are offered at the roots. The branch must be received with two outstretched hands before it touches the soil, preserving its sanctity from earth to Akhra.”',
        '“To witness Karam Puja is to understand a philosophy where nature is never separated from humanity. In an era of ecological rupture, the Karam festival is an enduring lesson in planetary humility: we do not command the forest; we dance beneath its canopy as its humble custodians.”',
      ],
    },
    {
      title: 'Chapter 2: The Seven-Day Jawa Germination',
      content: [
        'Seven days prior to Bhadra Shukla Ekadashi, the young women of the village—known as the Karamtolis—initiate the holy Jawa rites. Accompanied by elders, they gather virgin sand from sacred riverbeds, washing it in fresh water until pure golden sediment remains.',
        'In woven bamboo baskets lined with sal leaves, seeds of paddy, barley, gram, and mustard are sown in intricate concentric layers. Each dawn and dusk, the maidens sprinkle turmeric-infused water and sing ceremonial Jawa songs without footwear, invoking vigorous germination as a symbol of community vitality and agricultural fertility.',
      ],
    },
    {
      title: 'Chapter 5: Selected Chants from the Oral Archive',
      content: [
        '[Traditional Sadri Song]:\n“Aanlo re Karam Raja, ban se dhaan ke sang\nAngna sajaye de, jhumur lagaye de\nMadal baje dhin-tang dhin-tang, re Karam Raja!”',
        '[English Archival Translation]:\n“We have welcomed King Karam from the deep woods alongside ripe paddy ears!\nAdorn the courtyard with rice paste patterns, join hands in the circular Jhumur,\nThe earthen Madal drum echoes in the night: dhin-tang dhin-tang, glory to King Karam!”',
      ],
    },
  ];

  const currentChapter = chapters[currentChapterIndex] || chapters[0] || {
    title: 'Archival Introduction',
    content: ['Assam Karam Puja Archival Record.'],
  };

  const fontSizeClass =
    fontSize === 'xlarge'
      ? 'text-lg sm:text-xl leading-relaxed'
      : fontSize === 'large'
      ? 'text-base sm:text-lg leading-relaxed'
      : 'text-sm sm:text-base leading-relaxed';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-[#faf8f5] rounded-2xl shadow-2xl border border-stone-300 max-w-4xl w-full h-[90vh] flex flex-col overflow-hidden text-stone-800">
        {/* Top Controls Bar */}
        <div className="bg-[#1b4332] text-white px-5 py-3.5 flex items-center justify-between border-b border-[#2d6a4f] flex-shrink-0">
          <div className="flex items-center gap-2">
            <TreeDeciduous className="w-5 h-5 text-emerald-300" />
            <div>
              <h3 className="font-serif font-bold text-sm sm:text-base text-amber-100 line-clamp-1">
                {activeBook.title}
              </h3>
              <p className="text-[11px] text-[#d8f3dc]/70">Digital Monograph Reader</p>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            {/* Font Size Adjust */}
            <div className="hidden sm:flex items-center gap-1 bg-[#143225] px-2 py-1 rounded border border-[#2d6a4f] text-xs">
              <span className="text-white/60 mr-1">Font:</span>
              <button
                onClick={() => setFontSize('normal')}
                className={`px-1.5 py-0.5 rounded ${fontSize === 'normal' ? 'bg-amber-500 text-white' : 'text-gray-300'}`}
              >
                A
              </button>
              <button
                onClick={() => setFontSize('large')}
                className={`px-1.5 py-0.5 rounded text-sm ${fontSize === 'large' ? 'bg-amber-500 text-white' : 'text-gray-300'}`}
              >
                A+
              </button>
              <button
                onClick={() => setFontSize('xlarge')}
                className={`px-1.5 py-0.5 rounded text-base ${fontSize === 'xlarge' ? 'bg-amber-500 text-white' : 'text-gray-300'}`}
              >
                A++
              </button>
            </div>

            {/* Direct Download Button */}
            <button
              onClick={() => generateAndDownloadBook(activeBook.title)}
              className="bg-amber-600 hover:bg-amber-500 text-white text-xs font-semibold px-3 py-1.5 rounded-lg flex items-center gap-1.5 shadow-sm transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Direct Download</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white/80 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Reader Content Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-10 max-w-3xl mx-auto w-full">
          {/* Chapter Heading */}
          <div className="mb-8 border-b border-stone-300/80 pb-4">
            <span className="text-xs uppercase font-bold tracking-widest text-[#2d6a4f]">
              Archival Monograph Excerpt
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-stone-900 mt-1">
              {currentChapter?.title || 'Archival Monograph Excerpt'}
            </h2>
          </div>

          {/* Paragraphs */}
          <div className={`space-y-6 font-serif text-stone-800 ${fontSizeClass}`}>
            {currentChapter.content.map((p, i) => (
              <p key={i} className="whitespace-pre-line">
                {p}
              </p>
            ))}
          </div>

          {/* Bottom Callout */}
          <div className="mt-12 p-5 bg-amber-50 rounded-xl border border-amber-200 text-xs text-stone-700 space-y-2">
            <div className="flex items-center gap-2 font-bold text-amber-900">
              <Sparkles className="w-4 h-4 text-amber-600" />
              <span>Continue Reading the Full 312-Page Monograph</span>
            </div>
            <p>
              Download the complete high-resolution digital volume to explore all 6 full chapters, 50 Sadri song transcriptions, and 140+ archival plates.
            </p>
            <button
              onClick={() => generateAndDownloadBook(activeBook.title)}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-800 hover:text-amber-950 underline pt-1"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Full Monograph Direct to Device</span>
            </button>
          </div>
        </div>

        {/* Bottom Chapter Navigation Footer */}
        <div className="bg-stone-200/80 border-t border-stone-300 px-6 py-3 flex items-center justify-between flex-shrink-0">
          <button
            disabled={currentChapterIndex === 0}
            onClick={() => setCurrentChapterIndex(Math.max(0, currentChapterIndex - 1))}
            className="flex items-center gap-1 text-xs font-semibold px-3 py-1.5 rounded-lg bg-white border border-stone-300 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-stone-50"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Previous</span>
          </button>

          <span className="text-xs text-stone-600 font-medium">
            Section {currentChapterIndex + 1} of {chapters.length}
          </span>

          <button
            disabled={currentChapterIndex === chapters.length - 1}
            onClick={() =>
              setCurrentChapterIndex(Math.min(chapters.length - 1, currentChapterIndex + 1))
            }
            className="flex items-center gap-1 text-xs font-semibold px-3 py-1.5 rounded-lg bg-white border border-stone-300 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-stone-50"
          >
            <span>Next</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

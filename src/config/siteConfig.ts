/**
 * Karam Utsav — Centralized Site Configuration
 *
 * This configuration file contains all site settings, contact info,
 * ebook settings, social media links, and gallery data.
 *
 * Update this file to easily customize the entire website without touching component code.
 */

export interface GalleryItemConfig {
  id: string;
  title: string;
  category:
    | 'Karam Puja'
    | 'Traditional Dance'
    | 'Traditional Music'
    | 'Cultural Events'
    | 'Nature & Karam Tree'
    | 'Tea Garden Culture';
  imageUrl: string;
  caption: string;
  location?: string;
  photographer?: string;
  isPlaceholderNote?: string;
}

export const SITE_CONFIG = {
  // 1. Website Branding
  name: 'Karam Utsav',
  tagline: 'Celebrating Nature, Culture & Tradition',
  shortDescription: 'Discover the cultural heritage, traditions, and living spirit of Karam Utsav in Assam.',
  culturalNote: 'Traditions and practices may vary among communities and regions across Assam.',

  // 2. Organization & Contact Details
  contact: {
    instituteName: 'Karam Utsav',
    organizationSubtitle: 'Karam Utsav Cultural & Heritage Documentation Committee',
    address: 'Missa Town, Nagaon, Assam – 782138',
    phones: ['7638010004', '9707848936', '7086495850'],
    primaryPhone: '7638010004',
    email: 'karamutsav@gmail.com',
    hours: 'Mon – Sat: 9:00 AM – 6:00 PM IST',
  },

  // 3. Social Media Links
  social: {
    whatsappUrl: 'https://wa.me/917638010004',
    facebookUrl: 'https://facebook.com/karamutsav',
    instagramUrl: 'https://instagram.com/karamutsav',
    youtubeUrl: 'https://youtube.com/@karamutsav',
    xTwitterUrl: 'https://x.com/karamutsav',
    telegramUrl: 'https://t.me/karamutsav',
    linkedinUrl: 'https://linkedin.com/company/karamutsav',
  },

  // 4. Cultural Ebook Settings & Amazon-Style Online Store
  ebook: {
    title: 'কৰম পৰৱ',
    subtitle: 'Explore Karam Utsav, Its Traditions and Cultural Heritage',
    englishDescription:
      'An introductory cultural ebook exploring Karam Utsav (Karam Puja), its folklore, folk beliefs, agrarian rituals, and collective community participation.',
    assameseDescription:
      'কৰম পৰৱৰ পৰম্পৰা, লোকবিশ্বাস, সাংস্কৃতিক তাৎপৰ্য আৰু সামাজিক অংশগ্ৰহণৰ বিষয়ে এক পৰিচয়মূলক ই-বুক।',
    language: 'Assamese (অসমীয়া)',
    format: 'High-Definition Digital PDF Edition',
    pageCount: '64 Pages with Color Illustrations',
    edition: 'Official Cultural Collector’s Edition 2026',
    publisher: 'Karam Utsav Cultural Publication Wing',
    isbn: 'ISBN 978-93-84021-44-2',
    price: 49, // Special nominal community price
    originalPrice: 249, // Strikethrough M.R.P.
    currency: '₹',
    instantEmailDelivery: true,
    // CHANGE THIS PATH TO YOUR ACTUAL PDF (e.g. '/ebooks/karam-puja-assam-ebook.pdf' or an external URL)
    filePath: '/ebooks/karam-puja-assam-ebook.pdf',
    // Set to true once the actual PDF file exists in public directory or server
    isFileAvailable: false,
  },

  // 5. Coming Soon Modal Content
  comingSoon: {
    title: 'Coming Soon',
    message: 'We are preparing this section with valuable cultural information. Please check back soon.',
    buttonText: 'Close',
    subText: 'Thank you for your interest in Karam Utsav.',
  },

  // 6. Cultural Quote
  quote: {
    text: '“Preserving culture means keeping our roots alive for future generations.”',
    attribution: 'Cultural Heritage of Assam',
  },

  // 7. Footer Information
  footer: {
    copyright: '© 2026 Karam Utsav. All Rights Reserved.',
    presentedBy: 'Presented by Karam Utsav',
  },
};

// Gallery categories required by prompt
export const GALLERY_CATEGORIES = [
  'All',
  'Karam Puja',
  'Traditional Dance',
  'Traditional Music',
  'Cultural Events',
  'Nature & Karam Tree',
  'Tea Garden Culture',
] as const;

export type GalleryCategory = (typeof GALLERY_CATEGORIES)[number];

// Initial gallery items with respectful cultural representations
export const INITIAL_GALLERY_ITEMS: GalleryItemConfig[] = [
  {
    id: 'gal-1',
    title: 'Sacred Karam Tree Branches (Daal Katna)',
    category: 'Nature & Karam Tree',
    imageUrl:
      'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=1200&q=80',
    caption:
      'Ceremonial collection of sacred Karam branches from the forest grove with traditional rites and offerings.',
    location: 'Kaliabor Grove, Nagaon, Assam',
    photographer: 'Cultural Field Archive',
    isPlaceholderNote:
      'Sample image representing the sacred Karam tree ritual and natural forest environment.',
  },
  {
    id: 'gal-2',
    title: 'Jhumur Dance Celebration in Tea Gardens',
    category: 'Traditional Dance',
    imageUrl:
      'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1200&q=80',
    caption:
      'Women performing the traditional rhythmic Jhumur dance interlocking arms around the festival Akhra.',
    location: 'Missa Tea Estate, Nagaon, Assam',
    photographer: 'Community Archive',
    isPlaceholderNote:
      'Sample image portraying communal dance rhythm, shared celebration, and traditional spirit.',
  },
  {
    id: 'gal-3',
    title: 'Mandar and Dhol Rhythm Keepers',
    category: 'Traditional Music',
    imageUrl:
      'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=1200&q=80',
    caption:
      'Folk drummers beating the sacred clay Mandar and metallic Nagara drums that define the tempo of Karam songs.',
    location: 'Upper Assam Heritage Circle',
    photographer: 'Folk Heritage Documentation',
    isPlaceholderNote:
      'Sample image highlighting indigenous instruments and rhythm instruments of the celebration.',
  },
  {
    id: 'gal-4',
    title: 'Jawa Germination & Sprouted Grains Ritual',
    category: 'Karam Puja',
    imageUrl:
      'https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=1200&q=80',
    caption:
      'Maidens (Karamthin) tending the sacred Jawa seedlings (germinated paddy, gram, and barley) symbolizing fertility and agriculture.',
    location: 'Tea Community Village, Nagaon',
    photographer: 'Field Researcher',
    isPlaceholderNote:
      'Sample image illustrating agricultural sprouted grain rituals and harvest symbolism.',
  },
  {
    id: 'gal-5',
    title: 'Evening Community Akhra Gathering',
    category: 'Cultural Events',
    imageUrl:
      'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=1200&q=80',
    caption:
      'Villagers of all generations gathered around the central Akhra ground for nocturnal song recitals and folk story sessions.',
    location: 'Missa Town Cultural Ground, Assam',
    photographer: 'Heritage Volunteer',
    isPlaceholderNote:
      'Sample image depicting festive community congregation and night celebration.',
  },
  {
    id: 'gal-6',
    title: 'Tea Garden Landscape & Living Roots',
    category: 'Tea Garden Culture',
    imageUrl:
      'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1200&q=80',
    caption:
      'Lush green tea estate rows where generations of Tea Tribe families have nurtured vibrant cultural traditions.',
    location: 'Brahmaputra Valley, Assam',
    photographer: 'Assam Landscape Documentation',
    isPlaceholderNote:
      'Sample image celebrating the geographical and communal cradle of the tea garden communities.',
  },
];

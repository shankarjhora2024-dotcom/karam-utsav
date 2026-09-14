export type NavigationTab =
  | 'home'
  | 'about'
  | 'history'
  | 'rituals'
  | 'music'
  | 'culture'
  | 'gallery'
  | 'articles'
  | 'events'
  | 'contact'
  | 'admin'
  | 'book';

export interface UserAccount {
  id: string;
  name: string;
  email: string;
  isLoggedIn: boolean;
  avatarUrl?: string;
  phone?: string;
  affiliation?: string;
  role?: 'Reader' | 'Researcher' | 'Community Member' | 'Student';
  purchasedBooks: string[];
  joinedAt: string;
  purchasedBook?: boolean;
  orderId?: string;
}

export interface BookOrder {
  orderId: string;
  bookId: string;
  bookTitle: string;
  amount: number;
  currency: string;
  paymentMethod: 'UPI' | 'Card' | 'NetBanking' | 'Grant';
  transactionId: string;
  date: string;
  buyerEmail: string;
  buyerName: string;
  downloadToken: string;
  downloadUrl: string;
  customerName?: string;
  email?: string;
  phone?: string;
}

export interface BookDetails {
  id: string;
  title: string;
  subtitle: string;
  authors: string[];
  publicationDate: string;
  edition: string;
  pages: number;
  isbn: string;
  formats: string[];
  fileSize: string;
  languages: string[];
  priceINR: number;
  originalPriceINR: number;
  priceUSD: number;
  coverImageUrl: string;
  synopsis: string[];
  highlights: string[];
  tableOfContents: {
    chapterNumber: number;
    title: string;
    subtitle: string;
    pagesRange: string;
    summary: string;
  }[];
  sampleExcerpt: {
    chapterTitle: string;
    paragraphs: string[];
  };
}

export type LanguageCode = 'en' | 'as' | 'hi';
export type Language = LanguageCode;

export interface EventItem {
  id: string;
  title: string;
  date: string;
  time: string;
  venue: string;
  district: string;
  community: string;
  category: 'Celebration' | 'Youth Program' | 'Cultural Symposium' | 'Workshop' | 'Exhibition';
  organizer: string;
  description: string;
  contactInfo: string;
  isUpcoming: boolean;
  posterUrl: string;
  isSample: boolean;
}

export interface ArticleItem {
  id: string;
  title: string;
  category: 'Cultural Articles' | 'Festival Guides' | 'Community History' | 'Oral History' | 'Research Resources' | 'Educational Materials';
  author: string;
  publishedDate: string;
  readingTime: string;
  excerpt: string;
  content: string[];
  imageUrl: string;
  tags: string[];
  sources: string[];
  isSample: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  caption: string;
  category: 'Karam Puja' | 'Traditional Dance' | 'Traditional Music' | 'Karam Tree' | 'Community Events' | 'Cultural Dress' | 'Tea Garden Culture' | 'Heritage & Nature';
  imageUrl: string;
  photographer: string;
  copyright: string;
  license?: string;
  district?: string;
  isPlaceholder: boolean;
}

export interface CommunityProfile {
  id: string;
  name: string;
  altNames?: string[];
  languages: string[];
  regionInAssam: string[];
  culturalTraditions: string;
  festivals: string[];
  traditionalDress: string;
  musicAndDance: string;
  foodTraditions: string;
  historicalBackground: string;
  sources: string[];
  needsVerification: boolean;
  avatarUrl: string;
}

export interface SongItem {
  id: string;
  title: string;
  category: 'Traditional Songs' | 'Festival Dance' | 'Instrumental Music' | 'Community Performances' | 'Educational Demonstrations';
  communityOrRegion: string;
  language: string;
  performer: string;
  contributor: string;
  description: string;
  culturalMeaning: string;
  duration: string;
  audioUrl?: string;
  videoUrl?: string;
  permissionInfo: string;
}

export interface ContributorSubmission {
  id: string;
  contributorName: string;
  email: string;
  phone?: string;
  contributionType: 'Story / Oral History' | 'Photograph' | 'Song / Audio' | 'Research Paper' | 'Correction';
  communityOrRegion: string;
  title: string;
  description: string;
  permissionGranted: boolean;
  submittedAt: string;
  status: 'Pending Review' | 'Verified' | 'Archived';
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  submittedAt: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface RitualStep {
  stepNumber: number;
  title: string;
  assameseTitle?: string;
  phase: 'Pre-Festival' | 'Main Day' | 'Night Observance' | 'Immersion & Post-Puja';
  summary: string;
  description: string;
  communityVariations: string;
  symbolism: string;
  icon: string;
}

export interface TimelineMilestone {
  era: string;
  title: string;
  description: string;
  context: string;
  verifiedSourceType: string;
}

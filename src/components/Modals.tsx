import React, { useState } from 'react';
import {
  BookOpen,
  Calendar,
  CheckCircle,
  Clock,
  ExternalLink,
  Info,
  MapPin,
  Share2,
  ShieldCheck,
  Tag,
  Ticket,
  User,
  X,
} from 'lucide-react';
import { ArticleItem, CommunityProfile, EventItem, GalleryItem } from '../types';

/* 1. LIGHTBOX MODAL */
interface LightboxModalProps {
  item: GalleryItem | null;
  onClose: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({ item, onClose }) => {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs">
      <div className="relative bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl flex flex-col md:flex-row overflow-hidden border border-stone-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Image */}
        <div className="md:w-3/5 bg-stone-950 flex items-center justify-center p-2 min-h-[300px]">
          <img
            src={item.imageUrl}
            alt={item.title}
            className="max-h-[80vh] w-auto object-contain rounded"
          />
        </div>

        {/* Info */}
        <div className="md:w-2/5 p-6 space-y-4 text-xs flex flex-col justify-between bg-white">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="bg-[#1b4332] text-white text-[10px] font-bold px-2.5 py-0.5 rounded uppercase">
                {item.category}
              </span>
              {item.isPlaceholder && (
                <span className="bg-amber-100 text-amber-800 text-[10px] font-bold px-2 py-0.5 rounded">
                  Reference Image
                </span>
              )}
            </div>

            <h2 className="font-display font-bold text-xl text-[#1b4332]">{item.title}</h2>

            <p className="text-stone-700 leading-relaxed text-xs">{item.caption}</p>

            <div className="space-y-2 pt-3 border-t border-stone-100 text-stone-600">
              {item.district && (
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-emerald-800" />
                  <span>
                    <strong>Location:</strong> {item.district} District, Assam
                  </span>
                </div>
              )}

              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-stone-500" />
                <span>
                  <strong>Photographer / Archive:</strong> {item.photographer}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-amber-600" />
                <span>
                  <strong>Usage Rights:</strong> {item.license}
                </span>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-stone-100 text-[11px] text-stone-500 flex items-center justify-between">
            <span>Archive ID: {item.id}</span>
            <button
              onClick={onClose}
              className="px-4 py-1.5 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-800 font-semibold"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

/* 2. COMMUNITY ETHNOGRAPHY MODAL */
interface CommunityModalProps {
  community: CommunityProfile | null;
  onClose: () => void;
}

export const CommunityModal: React.FC<CommunityModalProps> = ({ community, onClose }) => {
  if (!community) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs">
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl border border-stone-200 p-6 sm:p-8 space-y-6 relative">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-700 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-1">
          <span className="text-[10px] font-bold bg-amber-100 text-amber-900 px-2 py-0.5 rounded uppercase tracking-wider">
            Content to be verified with community elders
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#1b4332]">
            {community.name} Community
          </h2>
          {community.altNames && (
            <p className="text-xs text-stone-500">
              Also known or related as: {community.altNames.join(', ')}
            </p>
          )}
        </div>

        <div className="space-y-4 text-xs text-stone-700 leading-relaxed divide-y divide-stone-100">
          <div className="pt-2">
            <h4 className="font-bold text-[#1b4332] text-sm mb-1">Historical Context</h4>
            <p>{community.historicalBackground}</p>
          </div>

          <div className="pt-3">
            <h4 className="font-bold text-[#1b4332] text-sm mb-1">Languages & Linguistic Heritage</h4>
            <p>{community.languages.join(', ')}</p>
          </div>

          <div className="pt-3">
            <h4 className="font-bold text-[#1b4332] text-sm mb-1">Cultural Traditions & Beliefs</h4>
            <p>{community.culturalTraditions}</p>
          </div>

          <div className="pt-3">
            <h4 className="font-bold text-[#1b4332] text-sm mb-1">Traditional Dress & Attire</h4>
            <p>{community.traditionalDress}</p>
          </div>

          <div className="pt-3">
            <h4 className="font-bold text-[#1b4332] text-sm mb-1">Music, Dance & Instruments</h4>
            <p>{community.musicAndDance}</p>
          </div>

          <div className="pt-3">
            <h4 className="font-bold text-[#1b4332] text-sm mb-1">Culinary Heritage & Sacred Foods</h4>
            <p>{community.foodTraditions}</p>
          </div>

          <div className="pt-3">
            <h4 className="font-bold text-[#1b4332] text-sm mb-1">Documented Sources & Literature</h4>
            <ul className="list-disc pl-4 space-y-1 text-stone-500">
              {community.sources.map((src, i) => (
                <li key={i}>{src}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-2 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-[#1b4332] text-white font-semibold text-xs hover:bg-[#2d6a4f]"
          >
            Done Reading
          </button>
        </div>
      </div>
    </div>
  );
};

/* 3. ARTICLE FULL ESSAY MODAL */
interface ArticleModalProps {
  article: ArticleItem | null;
  onClose: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({ article, onClose }) => {
  if (!article) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs">
      <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-stone-200 overflow-hidden relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 hover:bg-black text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="h-56 w-full bg-stone-100 relative">
          <img
            src={article.imageUrl}
            alt={article.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
          <span className="absolute bottom-4 left-6 bg-[#1b4332] text-white text-[10px] font-bold px-2.5 py-0.5 rounded uppercase">
            {article.category}
          </span>
        </div>

        <div className="p-6 sm:p-8 space-y-6">
          <div className="space-y-2">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#1b4332] leading-tight">
              {article.title}
            </h2>
            <div className="flex items-center gap-3 text-xs text-stone-500">
              <span>
                By <strong>{article.author}</strong>
              </span>
              <span>•</span>
              <span>{article.publishedDate}</span>
              <span>•</span>
              <span>{article.readingTime}</span>
            </div>
          </div>

          <div className="prose prose-stone text-xs sm:text-sm text-stone-700 leading-relaxed space-y-4">
            <p className="font-medium text-stone-900 italic bg-amber-50/50 p-4 rounded-xl border border-amber-200/50">
              {article.excerpt}
            </p>
            <p>{article.content}</p>
            <p>
              In traditional scholarship, festivals like Karam Puja demonstrate the profound symbiosis between humans
              and the natural cosmos. The preservation of these practices ensures that future generations maintain an
              innate ecological conscience grounded in indigenous heritage.
            </p>
          </div>

          <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
            <div className="flex gap-1">
              {article.tags.map((t, idx) => (
                <span
                  key={idx}
                  className="text-[10px] bg-stone-100 text-stone-600 px-2 py-0.5 rounded-full"
                >
                  #{t}
                </span>
              ))}
            </div>
            <button
              onClick={onClose}
              className="px-5 py-2 rounded-xl bg-[#1b4332] text-white font-semibold text-xs hover:bg-[#2d6a4f]"
            >
              Close Essay
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

/* 4. EVENT RSVP / DETAILS MODAL */
interface EventModalProps {
  event: EventItem | null;
  onClose: () => void;
}

export const EventModal: React.FC<EventModalProps> = ({ event, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [rsvpSuccess, setRsvpSuccess] = useState(false);

  if (!event) return null;

  const handleSubmitRsvp = (e: React.FormEvent) => {
    e.preventDefault();
    setRsvpSuccess(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs">
      <div className="bg-white rounded-3xl max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-stone-200 p-6 sm:p-8 space-y-5 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-700 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-1">
          <span className="text-[10px] font-bold bg-[#1b4332] text-white px-2 py-0.5 rounded uppercase">
            {event.category}
          </span>
          <h2 className="font-display text-xl font-bold text-[#1b4332]">{event.title}</h2>
        </div>

        <div className="bg-stone-50 p-4 rounded-xl space-y-2 text-xs text-stone-600 border border-stone-200">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-emerald-800" />
            <span>
              <strong>Date:</strong> {event.date} ({event.time})
            </span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-emerald-800" />
            <span>
              <strong>Venue:</strong> {event.venue}, {event.district} District
            </span>
          </div>
          <div>
            <strong>Organized by:</strong> {event.organizer}
          </div>
          <div>
            <strong>Contact:</strong> {event.contactInfo}
          </div>
        </div>

        <p className="text-xs text-stone-700 leading-relaxed">{event.description}</p>

        {/* Map placeholder */}
        <div className="h-32 bg-stone-200 rounded-xl flex items-center justify-center text-stone-500 text-xs border border-stone-300">
          <span>Interactive Map (Coordinates: {event.district}, Assam)</span>
        </div>

        {rsvpSuccess ? (
          <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200 text-center text-xs space-y-1">
            <p className="font-bold text-emerald-900">Registration Confirmed!</p>
            <p className="text-emerald-700">
              We look forward to welcoming you at the Akhra gathering.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmitRsvp} className="space-y-3 pt-2 text-xs">
            <h4 className="font-bold text-stone-900">Community Registration / RSVP:</h4>
            <div className="grid grid-cols-2 gap-2">
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your Name"
                className="p-2 border border-stone-200 rounded-lg text-xs"
              />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address"
                className="p-2 border border-stone-200 rounded-lg text-xs"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-[#2d6a4f] text-white font-semibold rounded-xl text-xs hover:bg-[#1b4332]"
            >
              Confirm Attendance
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

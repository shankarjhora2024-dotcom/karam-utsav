import React, { useState } from 'react';
import { Plus, Upload, X } from 'lucide-react';
import { ArticleItem, EventItem, GalleryItem, SongItem } from '../types';

interface AddEventModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddEvent: (event: EventItem) => void;
}

export const AddEventModal: React.FC<AddEventModalProps> = ({ isOpen, onClose, onAddEvent }) => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('5:00 PM onwards');
  const [venue, setVenue] = useState('');
  const [district, setDistrict] = useState('Dibrugarh');
  const [organizer, setOrganizer] = useState('');
  const [description, setDescription] = useState('');
  const [contactInfo, setContactInfo] = useState('');
  const [category, setCategory] = useState<'Celebration' | 'Workshop' | 'Cultural Symposium'>(
    'Celebration'
  );

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newEvent: EventItem = {
      id: `evt-${Date.now()}`,
      title,
      date,
      time,
      venue,
      district,
      community: 'All Assam Communities',
      organizer: organizer || 'Community Cultural Committee',
      description,
      contactInfo: contactInfo || 'culturaldesk@karampuja-assam.org',
      isUpcoming: true,
      category,
      isSample: false,
      posterUrl:
        'https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=600&q=80',
    };
    onAddEvent(newEvent);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs">
      <div className="bg-white rounded-2xl max-w-lg w-full p-6 space-y-4 border border-stone-200 relative text-xs">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1 rounded-full bg-stone-100 hover:bg-stone-200"
        >
          <X className="w-4 h-4" />
        </button>

        <h3 className="font-display font-bold text-lg text-[#1b4332]">Add Festival Event</h3>

        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <label className="font-semibold block mb-1">Event Title *</label>
            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. Central Akhra Gathering"
              className="w-full p-2 border rounded-lg"
            />
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="font-semibold block mb-1">Date *</label>
              <input
                type="text"
                required
                value={date}
                onChange={(e) => setDate(e.target.value)}
                placeholder="e.g. September 28, 2025"
                className="w-full p-2 border rounded-lg"
              />
            </div>
            <div>
              <label className="font-semibold block mb-1">District *</label>
              <select
                value={district}
                onChange={(e) => setDistrict(e.target.value)}
                className="w-full p-2 border rounded-lg"
              >
                {['Dibrugarh', 'Golaghat', 'Jorhat', 'Biswanath', 'Tinsukia', 'Sonitpur', 'Sivasagar'].map(
                  (d) => (
                    <option key={d} value={d}>
                      {d}
                    </option>
                  )
                )}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="font-semibold block mb-1">Venue *</label>
              <input
                type="text"
                required
                value={venue}
                onChange={(e) => setVenue(e.target.value)}
                placeholder="Tea Estate Akhra Ground"
                className="w-full p-2 border rounded-lg"
              />
            </div>
            <div>
              <label className="font-semibold block mb-1">Organizer</label>
              <input
                type="text"
                value={organizer}
                onChange={(e) => setOrganizer(e.target.value)}
                placeholder="Organizing Committee"
                className="w-full p-2 border rounded-lg"
              />
            </div>
          </div>

          <div>
            <label className="font-semibold block mb-1">Description *</label>
            <textarea
              rows={2}
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Ceremonies, performers, cultural highlights..."
              className="w-full p-2 border rounded-lg"
            />
          </div>

          <div className="flex justify-end gap-2 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-1.5 rounded-lg border text-stone-600"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-1.5 rounded-lg bg-[#1b4332] text-white font-semibold"
            >
              Save Event
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

interface AddArticleModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddArticle: (art: ArticleItem) => void;
}

export const AddArticleModal: React.FC<AddArticleModalProps> = ({
  isOpen,
  onClose,
  onAddArticle,
}) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState<ArticleItem['category']>('Cultural Articles');
  const [author, setAuthor] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [content, setContent] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newArt: ArticleItem = {
      id: `art-${Date.now()}`,
      title,
      category,
      author: author || 'Contributing Researcher',
      publishedDate: new Date().toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      }),
      readingTime: '5 min read',
      excerpt,
      content: [content],
      imageUrl:
        'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=600&q=80',
      tags: ['KaramPuja', 'AssamHeritage', 'Folklore'],
      sources: ['Assam Cultural Archive Survey'],
      isSample: false,
    };
    onAddArticle(newArt);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs">
      <div className="bg-white rounded-2xl max-w-lg w-full p-6 space-y-4 border border-stone-200 relative text-xs">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1 rounded-full bg-stone-100 hover:bg-stone-200"
        >
          <X className="w-4 h-4" />
        </button>

        <h3 className="font-display font-bold text-lg text-[#1b4332]">Publish Cultural Article</h3>

        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <label className="font-semibold block mb-1">Article Title *</label>
            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. Traditional Botanical Medicines and Sacred Karam Groves"
              className="w-full p-2 border rounded-lg"
            />
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="font-semibold block mb-1">Category *</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value as any)}
                className="w-full p-2 border rounded-lg"
              >
                <option value="Cultural Articles">Cultural Articles</option>
                <option value="Festival Guides">Festival Guides</option>
                <option value="Community History">Community History</option>
                <option value="Educational Materials">Educational Materials</option>
                <option value="Research Resources">Research Resources</option>
              </select>
            </div>

            <div>
              <label className="font-semibold block mb-1">Author Name *</label>
              <input
                type="text"
                required
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                placeholder="Author or Researcher Name"
                className="w-full p-2 border rounded-lg"
              />
            </div>
          </div>

          <div>
            <label className="font-semibold block mb-1">Short Excerpt / Summary *</label>
            <textarea
              rows={2}
              required
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
              placeholder="One to two sentences summarizing the key thesis or cultural topic..."
              className="w-full p-2 border rounded-lg"
            />
          </div>

          <div>
            <label className="font-semibold block mb-1">Full Article Content *</label>
            <textarea
              rows={4}
              required
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Detailed article body paragraphs..."
              className="w-full p-2 border rounded-lg"
            />
          </div>

          <div className="flex justify-end gap-2 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-1.5 rounded-lg border text-stone-600"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-1.5 rounded-lg bg-[#1b4332] text-white font-semibold"
            >
              Publish Article
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

interface AddGalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddGallery: (item: GalleryItem) => void;
}

export const AddGalleryModal: React.FC<AddGalleryModalProps> = ({
  isOpen,
  onClose,
  onAddGallery,
}) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState<GalleryItem['category']>('Karam Puja');
  const [caption, setCaption] = useState('');
  const [photographer, setPhotographer] = useState('');
  const [district, setDistrict] = useState('Dibrugarh');
  const [imageUrl, setImageUrl] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newItem: GalleryItem = {
      id: `img-${Date.now()}`,
      title,
      category,
      caption,
      photographer: photographer || 'Community Contributor',
      copyright: 'Community Contributed / Creative Commons',
      license: 'Educational / Non-Commercial Use',
      district,
      imageUrl:
        imageUrl ||
        'https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=800&q=80',
      isPlaceholder: false,
    };
    onAddGallery(newItem);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs">
      <div className="bg-white rounded-2xl max-w-lg w-full p-6 space-y-4 border border-stone-200 relative text-xs">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1 rounded-full bg-stone-100 hover:bg-stone-200"
        >
          <X className="w-4 h-4" />
        </button>

        <h3 className="font-display font-bold text-lg text-[#1b4332]">
          Upload Cultural Archive Photo
        </h3>

        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <label className="font-semibold block mb-1">Image Title *</label>
            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. Madal Drums Echoing at Dusk"
              className="w-full p-2 border rounded-lg"
            />
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="font-semibold block mb-1">Category *</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value as any)}
                className="w-full p-2 border rounded-lg"
              >
                {[
                  'Karam Puja',
                  'Traditional Dance',
                  'Traditional Music',
                  'Karam Tree',
                  'Community Events',
                  'Cultural Dress',
                  'Tea Garden Culture',
                  'Heritage & Nature',
                ].map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="font-semibold block mb-1">District</label>
              <input
                type="text"
                value={district}
                onChange={(e) => setDistrict(e.target.value)}
                placeholder="e.g. Golaghat, Assam"
                className="w-full p-2 border rounded-lg"
              />
            </div>
          </div>

          <div>
            <label className="font-semibold block mb-1">Photographer / Contributor *</label>
            <input
              type="text"
              required
              value={photographer}
              onChange={(e) => setPhotographer(e.target.value)}
              placeholder="Name of photographer or archive collection"
              className="w-full p-2 border rounded-lg"
            />
          </div>

          <div>
            <label className="font-semibold block mb-1">Image URL (or Unsplash URL) *</label>
            <input
              type="url"
              required
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              placeholder="https://images.unsplash.com/..."
              className="w-full p-2 border rounded-lg"
            />
          </div>

          <div>
            <label className="font-semibold block mb-1">Descriptive Caption *</label>
            <textarea
              rows={2}
              required
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              placeholder="Describe the occasion, ritual moment, or people featured..."
              className="w-full p-2 border rounded-lg"
            />
          </div>

          <div className="flex justify-end gap-2 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-1.5 rounded-lg border text-stone-600"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-1.5 rounded-lg bg-[#1b4332] text-white font-semibold"
            >
              Save to Gallery
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

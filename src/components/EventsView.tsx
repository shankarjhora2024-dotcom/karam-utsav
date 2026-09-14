import React, { useState } from 'react';
import {
  Calendar,
  Clock,
  ExternalLink,
  Filter,
  MapPin,
  Navigation,
  PlusCircle,
  Search,
  Sparkles,
  Ticket,
  UserCheck,
  Users,
} from 'lucide-react';
import { EventItem, NavigationTab } from '../types';

interface EventsViewProps {
  events: EventItem[];
  onSelectTab: (tab: NavigationTab) => void;
  onSelectEvent: (event: EventItem) => void;
  onOpenAddEventModal: () => void;
}

export const EventsView: React.FC<EventsViewProps> = ({
  events,
  onSelectTab,
  onSelectEvent,
  onOpenAddEventModal,
}) => {
  const [timeFilter, setTimeFilter] = useState<'All' | 'Upcoming' | 'Past'>('Upcoming');
  const [selectedDistrict, setSelectedDistrict] = useState<string>('All');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const districts = ['All', 'Dibrugarh', 'Golaghat', 'Jorhat', 'Biswanath', 'Tinsukia', 'Sonitpur'];
  const categories = ['All', 'Celebration', 'Workshop', 'Cultural Symposium'];

  const filteredEvents = events.filter((evt) => {
    const matchesTime =
      timeFilter === 'All'
        ? true
        : timeFilter === 'Upcoming'
        ? evt.isUpcoming
        : !evt.isUpcoming;

    const matchesDistrict =
      selectedDistrict === 'All' || evt.district === selectedDistrict;

    const matchesCategory =
      selectedCategory === 'All' || evt.category === selectedCategory;

    const matchesSearch =
      evt.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      evt.venue.toLowerCase().includes(searchQuery.toLowerCase()) ||
      evt.organizer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      evt.description.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesTime && matchesDistrict && matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-semibold">
            <Calendar className="w-3.5 h-3.5 text-amber-700" />
            <span>Community Gatherings & Akhra Festivals</span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-[#1b4332]">
            Karam Festival Events in Assam
          </h1>
          <p className="text-stone-600 max-w-xl text-xs sm:text-sm">
            Find central Karam Puja gatherings, youth Madal drumming workshops, and cultural symposiums across Assam tea districts.
          </p>
        </div>

        <button
          onClick={onOpenAddEventModal}
          className="whitespace-nowrap px-4 py-2.5 rounded-xl bg-[#2d6a4f] hover:bg-[#1b4332] text-white font-semibold text-xs flex items-center gap-2 transition-colors shadow-sm self-start md:self-auto"
        >
          <PlusCircle className="w-4 h-4" />
          <span>Submit Community Event</span>
        </button>
      </div>

      {/* Filter Toolbar */}
      <div className="bg-white p-4 rounded-2xl border border-stone-200 shadow-sm space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          {/* Time Tabs */}
          <div className="flex items-center gap-1 bg-stone-100 p-1 rounded-xl">
            {(['All', 'Upcoming', 'Past'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setTimeFilter(tab)}
                className={`px-3 py-1 rounded-lg text-xs font-semibold transition-colors ${
                  timeFilter === tab
                    ? 'bg-white text-[#1b4332] shadow-xs'
                    : 'text-stone-600 hover:text-black'
                }`}
              >
                {tab === 'All' ? 'All Events' : tab}
              </button>
            ))}
          </div>

          {/* District Dropdown / Pills */}
          <div className="flex items-center gap-2 overflow-x-auto">
            <span className="text-xs text-stone-500 font-medium">District:</span>
            {districts.map((d) => (
              <button
                key={d}
                onClick={() => setSelectedDistrict(d)}
                className={`px-2.5 py-1 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
                  selectedDistrict === d
                    ? 'bg-[#1b4332] text-white'
                    : 'bg-stone-50 text-stone-700 hover:bg-stone-100 border border-stone-200'
                }`}
              >
                {d}
              </button>
            ))}
          </div>
        </div>

        {/* Search */}
        <div className="relative">
          <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search event title, organizer, venue..."
            className="w-full pl-9 pr-4 py-2 bg-stone-50 border border-stone-200 rounded-xl text-xs text-stone-800 focus:outline-none focus:border-[#2d6a4f]"
          />
        </div>
      </div>

      {/* Events List */}
      <div className="space-y-6">
        {filteredEvents.map((evt) => (
          <div
            key={evt.id}
            className="bg-white rounded-2xl border border-stone-200 p-6 shadow-sm hover:border-[#2d6a4f]/60 transition-all flex flex-col md:flex-row gap-6 items-start justify-between"
          >
            {/* Event Media / Map Thumbnail */}
            <div className="w-full md:w-60 h-44 rounded-xl overflow-hidden bg-stone-100 relative shrink-0">
              <img
                src={evt.posterUrl}
                alt={evt.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-2 left-2 bg-[#1b4332]/90 text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase">
                {evt.category}
              </div>
              {evt.isSample && (
                <div className="absolute top-2 right-2 bg-amber-500 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow">
                  Sample Event
                </div>
              )}
              {/* Map Placeholder Badge */}
              <div className="absolute bottom-2 left-2 right-2 bg-black/70 backdrop-blur-xs text-white text-[10px] px-2 py-1 rounded flex items-center justify-between">
                <span className="flex items-center gap-1 truncate">
                  <Navigation className="w-3 h-3 text-amber-400 shrink-0" />
                  <span className="truncate">{evt.venue}</span>
                </span>
                <span className="text-amber-300 font-mono text-[9px] shrink-0">[Map Preview]</span>
              </div>
            </div>

            {/* Event Info */}
            <div className="flex-1 space-y-3">
              <div className="flex flex-wrap items-center gap-3 text-xs">
                <span className="font-bold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{evt.date}</span>
                </span>
                <span className="text-stone-600 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-stone-400" />
                  <span>{evt.time}</span>
                </span>
                <span className="text-stone-600 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-emerald-800" />
                  <span>{evt.district} District, Assam</span>
                </span>
              </div>

              <h2 className="font-display font-bold text-lg sm:text-xl text-[#1b4332] leading-snug">
                {evt.title}
              </h2>

              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                {evt.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 text-xs text-stone-500 border-t border-stone-100">
                <div>
                  <strong>Organizer:</strong> {evt.organizer}
                </div>
                <div>
                  <strong>Contact:</strong> {evt.contactInfo}
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="w-full md:w-44 flex flex-col gap-2 shrink-0 self-stretch md:self-center justify-center pt-2 md:pt-0 border-t md:border-t-0 border-stone-100">
              <button
                onClick={() => onSelectEvent(evt)}
                className="w-full py-2.5 px-3 rounded-xl bg-[#2d6a4f] hover:bg-[#1b4332] text-white font-semibold text-xs transition-colors flex items-center justify-center gap-1.5 shadow-sm"
              >
                <Ticket className="w-4 h-4" />
                <span>Register / RSVP</span>
              </button>
              <button
                onClick={() => onSelectEvent(evt)}
                className="w-full py-2 px-3 rounded-xl bg-stone-50 hover:bg-stone-100 text-stone-700 font-medium text-xs border border-stone-200 transition-colors"
              >
                View Map & Directions
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredEvents.length === 0 && (
        <div className="text-center py-16 bg-white rounded-2xl border border-stone-200 space-y-2">
          <Calendar className="w-8 h-8 text-stone-400 mx-auto" />
          <p className="font-bold text-stone-700">No events found matching your filter</p>
          <p className="text-xs text-stone-500">Try adjusting your district or search parameters.</p>
        </div>
      )}
    </div>
  );
};

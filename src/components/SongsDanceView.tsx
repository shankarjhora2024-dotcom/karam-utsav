import React, { useState } from 'react';
import {
  FileText,
  Headphones,
  Info,
  Layers,
  Music,
  Pause,
  Play,
  PlusCircle,
  Radio,
  Share2,
  ShieldCheck,
  Sparkles,
  Upload,
  Volume2,
  VolumeX,
} from 'lucide-react';
import { INITIAL_SONGS } from '../data/initialData';
import { NavigationTab, SongItem } from '../types';

interface SongsDanceViewProps {
  onSelectTab: (tab: NavigationTab) => void;
  onOpenContributionModal: () => void;
}

export const SongsDanceView: React.FC<SongsDanceViewProps> = ({
  onSelectTab,
  onOpenContributionModal,
}) => {
  const [songs, setSongs] = useState<SongItem[]>(INITIAL_SONGS);
  const [currentSongIndex, setCurrentSongIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [isMuted, setIsMuted] = useState<boolean>(false);

  const categories = [
    'All',
    'Traditional Songs',
    'Festival Dance',
    'Instrumental Music',
    'Community Performances',
    'Educational Demonstrations',
  ];

  const defaultSong: SongItem = {
    id: 'default-song',
    title: 'Traditional Karam Melody',
    category: 'Traditional Songs',
    duration: '3:45',
    communityOrRegion: 'Tea Tribes of Assam',
    language: 'Sadri',
    performer: 'Community Artists',
    contributor: 'Elder Archives',
    description: 'Archival recording from festival gathering',
    culturalMeaning: 'Celebration of nature and unity',
    permissionInfo: 'Verified Field Recording',
  };

  const currentSong = (songs && songs.length > 0)
    ? (songs[currentSongIndex] || songs[0] || defaultSong)
    : defaultSong;

  const filteredSongs =
    selectedCategory === 'All'
      ? songs
      : songs.filter((s) => s.category === selectedCategory);

  const handlePlayToggle = (idx?: number) => {
    if (idx !== undefined) {
      if (idx === currentSongIndex) {
        setIsPlaying(!isPlaying);
      } else {
        setCurrentSongIndex(idx);
        setIsPlaying(true);
      }
    } else {
      setIsPlaying(!isPlaying);
    }
  };

  const traditionalInstruments = [
    {
      name: 'Madal (Mandar / Dumang)',
      origin: 'Core Indigenous Drum across Adivasi & Tea Tribes',
      desc: 'An earthen or wooden cylindrical two-headed drum tuned with fine iron-paste (Kharan). Its deep bass gives Karam and Jhumur music its unforgettable heartbeat.',
      image: 'https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&w=600&q=80',
    },
    {
      name: 'Dhol & Tamak',
      origin: 'Adivasi Kettle Drums & Rhythm Keepers',
      desc: 'Beaten with wooden sticks to mark tempo shifts and announce the arrival of ceremonial processions approaching the village sacred grove.',
      image: 'https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?auto=format&fit=crop&w=600&q=80',
    },
    {
      name: 'Bansi / Tirio (Bamboo Flute)',
      origin: 'Highland Indigenous Reed Instrument',
      desc: 'Handcrafted seven-holed bamboo flute producing melancholic yet uplifting melodies echoing through tea bushes during twilight hours.',
      image: 'https://images.unsplash.com/photo-1520523839898-507124cd5371?auto=format&fit=crop&w=600&q=80',
    },
    {
      name: 'Jhanjh / Kartal & Ghungroo',
      origin: 'Brass Percussion & Ankle Bells',
      desc: 'Metallic clappers and ankle bells that accentuate the collective syncopated steps of circular Jhumur dance lines.',
      image: 'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=600&q=80',
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Header */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-semibold">
          <Music className="w-3.5 h-3.5 text-amber-700" />
          <span>Acoustic Heritage & Akhra Arts</span>
        </div>
        <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1b4332]">
          Karam Songs, Music & Dance
        </h1>
        <p className="text-stone-600 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
          Preserving the oral songs, polyrhythmic drumbeats of the Madal, and the interlocking circular Jhumur dances of
          Assam’s Tea Tribes and Adivasi communities.
        </p>
      </div>

      {/* Cultural Rights & Copyright Notice */}
      <div className="bg-[#fcfaf7] border border-amber-300/80 rounded-2xl p-4 sm:p-5 flex items-start gap-3.5 text-xs text-amber-950">
        <ShieldCheck className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
        <div className="space-y-1">
          <p className="font-semibold text-amber-900">
            Ethical Archival Policy — Community Ownership of Traditional Cultural Expressions (TCE)
          </p>
          <p className="text-stone-600 leading-relaxed">
            All songs and audio samples cataloged here are collective intangible cultural expressions belonging to the
            respective communities. We do not claim ownership, sell, or commercialize any traditional lyrics. Recordists
            and contributors are properly credited with verified consent.
          </p>
        </div>
      </div>

      {/* Interactive Audio Player Showcase */}
      <div className="bg-gradient-to-br from-[#1b4332] via-[#24543e] to-[#143225] rounded-3xl p-6 sm:p-8 text-white shadow-xl border border-emerald-400/30 space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-emerald-700/50 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-500 text-[#143225] flex items-center justify-center font-bold text-lg shadow-md">
              <Headphones className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[11px] font-semibold text-amber-300 uppercase tracking-wider block">
                Archive Audio Player (Demo Simulation)
              </span>
              <h2 className="font-display text-lg sm:text-xl font-bold text-[#fdfbf7]">
                {currentSong?.title || 'Traditional Karam Melody'}
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenContributionModal}
              className="px-3.5 py-1.5 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-400/40 text-xs font-semibold flex items-center gap-1.5 transition-colors"
            >
              <Upload className="w-3.5 h-3.5" />
              <span>Contribute Song / Audio</span>
            </button>
          </div>
        </div>

        {/* Player Controls & Waveform Simulation */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          {/* Metadata */}
          <div className="md:col-span-5 space-y-2 text-xs">
            <div className="bg-[#143225]/80 p-3 rounded-xl border border-[#2d6a4f]/70 space-y-1">
              <p className="text-emerald-200">
                <strong className="text-amber-300">Region/Dialect:</strong> {currentSong.communityOrRegion} (
                {currentSong.language})
              </p>
              <p className="text-emerald-200">
                <strong className="text-amber-300">Performers:</strong> {currentSong.performer}
              </p>
              <p className="text-emerald-200">
                <strong className="text-amber-300">Contributor:</strong> {currentSong.contributor}
              </p>
            </div>
            <p className="text-[11px] text-emerald-200/70 italic">
              <strong>Permission:</strong> {currentSong.permissionInfo}
            </p>
          </div>

          {/* Controls & Animated Waveform */}
          <div className="md:col-span-7 space-y-4">
            <div className="flex items-center justify-center gap-4">
              <button
                onClick={() =>
                  setCurrentSongIndex(
                    (currentSongIndex - 1 + songs.length) % songs.length
                  )
                }
                className="text-emerald-300 hover:text-white text-xs font-bold px-2 py-1"
                aria-label="Previous track"
              >
                ◀ Prev
              </button>

              <button
                onClick={() => handlePlayToggle()}
                className="w-14 h-14 rounded-full bg-amber-400 hover:bg-amber-300 text-[#143225] flex items-center justify-center shadow-lg transition-transform hover:scale-105"
                aria-label={isPlaying ? 'Pause' : 'Play'}
              >
                {isPlaying ? <Pause className="w-7 h-7" /> : <Play className="w-7 h-7 ml-1" />}
              </button>

              <button
                onClick={() =>
                  setCurrentSongIndex((currentSongIndex + 1) % songs.length)
                }
                className="text-emerald-300 hover:text-white text-xs font-bold px-2 py-1"
                aria-label="Next track"
              >
                Next ▶
              </button>

              <button
                onClick={() => setIsMuted(!isMuted)}
                className="text-emerald-300 hover:text-white p-2 rounded-lg"
                aria-label={isMuted ? 'Unmute' : 'Mute'}
              >
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>
            </div>

            {/* Simulated Animated Audio Waveform */}
            <div className="space-y-1">
              <div className="flex items-center justify-between text-[11px] text-emerald-300/80 font-mono">
                <span>{isPlaying ? '01:14' : '00:00'}</span>
                <span className="text-amber-300 text-[10px] uppercase font-bold tracking-wider">
                  {isPlaying ? '● Playing Soundscape' : 'Paused'}
                </span>
                <span>{currentSong.duration}</span>
              </div>

              <div className="h-10 bg-[#0f241a] rounded-lg p-1.5 flex items-center justify-center gap-1 border border-emerald-900/60 overflow-hidden">
                {[...Array(36)].map((_, i) => {
                  const height = isPlaying
                    ? `${Math.max(15, (Math.sin(i * 0.4) * 0.5 + 0.5) * 90)}%`
                    : '20%';
                  return (
                    <div
                      key={i}
                      style={{ height }}
                      className={`w-1 rounded-full transition-all duration-300 ${
                        isPlaying
                          ? i % 3 === 0
                            ? 'bg-amber-400'
                            : 'bg-emerald-400'
                          : 'bg-emerald-900'
                      }`}
                    ></div>
                  );
                })}
              </div>
            </div>

            {/* Cultural Meaning text */}
            <div className="bg-[#143225] p-3 rounded-xl border border-emerald-700/60 text-xs">
              <span className="text-amber-300 font-semibold block mb-0.5">Cultural Meaning & Philosophy:</span>
              <p className="text-emerald-100/90 leading-relaxed">{currentSong.culturalMeaning}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Tabs & Songs Directory */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="font-display text-2xl font-bold text-[#1b4332]">
              Oral Archive Repertoire
            </h2>
            <p className="text-xs text-stone-600">
              Browse recordings by genre and cultural context.
            </p>
          </div>

          {/* Categories */}
          <div className="flex items-center flex-wrap gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#1b4332] text-white shadow-sm'
                    : 'bg-white border border-stone-200 text-stone-700 hover:bg-stone-50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Songs List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredSongs.map((song, idx) => {
            const isThisPlaying = isPlaying && currentSongIndex === idx;
            return (
              <div
                key={song.id}
                className={`p-5 rounded-2xl border transition-all ${
                  currentSongIndex === idx
                    ? 'bg-emerald-50/70 border-[#2d6a4f] shadow-sm'
                    : 'bg-white border-stone-200 hover:border-stone-300'
                } flex flex-col justify-between space-y-3`}
              >
                <div className="space-y-1.5">
                  <div className="flex items-start justify-between gap-2">
                    <span className="text-[10px] font-bold text-amber-800 uppercase tracking-wider bg-amber-100 px-2 py-0.5 rounded">
                      {song.category}
                    </span>
                    <span className="text-xs text-stone-500 font-mono">{song.duration}</span>
                  </div>

                  <h3 className="font-display font-bold text-base text-[#1b4332]">
                    {song.title}
                  </h3>

                  <p className="text-xs text-stone-600 line-clamp-2">{song.description}</p>
                </div>

                <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-xs">
                  <div className="text-[11px] text-stone-500">
                    <span>{song.communityOrRegion}</span>
                  </div>

                  <button
                    onClick={() => handlePlayToggle(idx)}
                    className="px-3 py-1.5 rounded-lg bg-[#2d6a4f] hover:bg-[#1b4332] text-white font-semibold text-xs flex items-center gap-1.5 transition-colors"
                  >
                    {isThisPlaying ? (
                      <>
                        <Pause className="w-3.5 h-3.5" />
                        <span>Pause</span>
                      </>
                    ) : (
                      <>
                        <Play className="w-3.5 h-3.5" />
                        <span>Play Audio</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Traditional Instruments Showcase */}
      <div className="bg-white rounded-2xl p-6 sm:p-10 border border-stone-200 shadow-sm space-y-6">
        <div className="space-y-1">
          <span className="text-xs font-bold text-amber-700 uppercase tracking-widest block">
            Acoustic Organology
          </span>
          <h2 className="font-display text-2xl font-bold text-[#1b4332]">
            Traditional Musical Instruments of the Akhra
          </h2>
          <p className="text-xs sm:text-sm text-stone-600">
            Handcrafted from terracotta, indigenous woods, cattle leather, and river bamboo, these instruments drive the
            collective energy of Karam celebrations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {traditionalInstruments.map((inst, i) => (
            <div
              key={i}
              className="rounded-xl overflow-hidden border border-stone-200 bg-[#fdfbf7] flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div className="h-40 overflow-hidden bg-stone-100 relative">
                <img
                  src={inst.image}
                  alt={inst.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <span className="absolute bottom-2 left-2 text-white font-bold text-xs">
                  {inst.name}
                </span>
              </div>
              <div className="p-4 space-y-2">
                <span className="text-[10px] font-semibold text-emerald-800 uppercase block">
                  {inst.origin}
                </span>
                <p className="text-xs text-stone-600 leading-relaxed">{inst.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

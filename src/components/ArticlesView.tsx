import React, { useState } from 'react';
import {
  ArrowRight,
  BookOpen,
  Calendar,
  Clock,
  Download,
  FileText,
  Filter,
  GraduationCap,
  Layers,
  Search,
  Tag,
  User,
} from 'lucide-react';
import { ArticleItem, NavigationTab } from '../types';

interface ArticlesViewProps {
  articles: ArticleItem[];
  onSelectTab: (tab: NavigationTab) => void;
  onSelectArticle: (article: ArticleItem) => void;
}

export const ArticlesView: React.FC<ArticlesViewProps> = ({
  articles,
  onSelectTab,
  onSelectArticle,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    'All',
    'Cultural Articles',
    'Festival Guides',
    'Community History',
    'Educational Materials',
    'Research Resources',
  ];

  const filteredArticles = articles.filter((art) => {
    const matchesCat =
      selectedCategory === 'All' || art.category === selectedCategory;
    const matchesSearch =
      art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCat && matchesSearch;
  });

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Header */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-[#1b4332] text-xs font-semibold">
          <BookOpen className="w-3.5 h-3.5 text-emerald-800" />
          <span>Knowledge Repository & Research Essays</span>
        </div>
        <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1b4332]">
          Articles & Educational Resources
        </h1>
        <p className="text-stone-600 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
          In-depth essays, botanical studies, oral histories, and educational guides for students, folklorists, and
          community members.
        </p>
      </div>

      {/* Educational Guide Download Highlight */}
      <div className="bg-[#fdfbf7] border border-amber-200/80 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-emerald-100 text-[#1b4332] flex items-center justify-center shrink-0 border border-emerald-300">
            <GraduationCap className="w-6 h-6" />
          </div>
          <div className="space-y-1">
            <span className="text-[10px] font-bold text-amber-800 uppercase tracking-wider bg-amber-100 px-2 py-0.5 rounded">
              Curriculum & Resource Pack
            </span>
            <h3 className="font-display text-lg font-bold text-[#1b4332]">
              Karam Puja Cultural Educational Primer (PDF Reference)
            </h3>
            <p className="text-xs text-stone-600 max-w-xl leading-relaxed">
              A peer-reviewed classroom and library guide explaining the Jawa ritual, Madal drum construction, and
              indigenous forest ethics for high school and university students.
            </p>
          </div>
        </div>

        <button
          onClick={() => alert('Cultural Primer PDF resource is available in the archive library.')}
          className="whitespace-nowrap px-4 py-2.5 rounded-xl bg-[#1b4332] hover:bg-[#2d6a4f] text-white font-semibold text-xs flex items-center gap-2 transition-colors shadow-sm"
        >
          <Download className="w-4 h-4" />
          <span>Download Resource Guide</span>
        </button>
      </div>

      {/* Filter & Search */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Category Buttons */}
        <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? 'bg-[#1b4332] text-white shadow-sm'
                  : 'bg-white border border-stone-200 text-stone-700 hover:bg-stone-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search articles, authors, tags..."
            className="w-full pl-9 pr-4 py-2 bg-white border border-stone-200 rounded-xl text-xs text-stone-800 focus:outline-none focus:border-[#2d6a4f]"
          />
        </div>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredArticles.map((article) => (
          <div
            key={article.id}
            className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm card-hover flex flex-col justify-between"
          >
            <div>
              {/* Image & Badges */}
              <div className="relative h-48 bg-stone-100 overflow-hidden">
                <img
                  src={article.imageUrl}
                  alt={article.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 bg-[#1b4332]/90 backdrop-blur-xs text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">
                  {article.category}
                </div>
                <div className="absolute bottom-2 right-3 bg-black/60 backdrop-blur-xs text-white text-[11px] font-medium px-2 py-0.5 rounded flex items-center gap-1">
                  <Clock className="w-3 h-3 text-amber-300" />
                  <span>{article.readingTime}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-3">
                <div className="flex items-center gap-3 text-xs text-stone-500">
                  <span className="flex items-center gap-1">
                    <User className="w-3.5 h-3.5 text-emerald-800" />
                    <strong className="text-stone-700">{article.author}</strong>
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-stone-400" />
                    <span>{article.publishedDate}</span>
                  </span>
                </div>

                <h3 className="font-display font-bold text-lg text-[#1b4332] leading-snug hover:text-[#2d6a4f] transition-colors cursor-pointer" onClick={() => onSelectArticle(article)}>
                  {article.title}
                </h3>

                <p className="text-xs text-stone-600 leading-relaxed line-clamp-3">
                  {article.excerpt}
                </p>

                {/* Tags */}
                <div className="pt-2 flex flex-wrap gap-1">
                  {article.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-medium bg-stone-100 text-stone-600 px-2 py-0.5 rounded-full"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Read More Action */}
            <div className="p-6 pt-0">
              <button
                onClick={() => onSelectArticle(article)}
                className="w-full py-2.5 px-4 rounded-xl bg-stone-50 hover:bg-[#2d6a4f] hover:text-white text-[#1b4332] font-semibold text-xs border border-stone-200 transition-all flex items-center justify-center gap-2"
              >
                <span>Read Full Essay</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredArticles.length === 0 && (
        <div className="text-center py-16 bg-white rounded-2xl border border-stone-200 space-y-2">
          <FileText className="w-8 h-8 text-stone-400 mx-auto" />
          <p className="font-bold text-stone-700">No articles matched your criteria</p>
          <p className="text-xs text-stone-500">Try clearing filters or search query.</p>
        </div>
      )}
    </div>
  );
};

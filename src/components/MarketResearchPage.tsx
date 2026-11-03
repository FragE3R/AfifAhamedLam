import React, { useState, useMemo } from 'react';
import { PageView } from '../types';
import { MARKET_RESEARCH_ARTICLES } from '../data/marketResearch';
import { Search, Clock, Calendar, ArrowUpRight, BookOpen, Filter } from 'lucide-react';

interface MarketResearchPageProps {
  onNavigate: (page: PageView, id?: string) => void;
}

export const MarketResearchPage: React.FC<MarketResearchPageProps> = ({ onNavigate }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = useMemo(() => {
    const cats = Array.from(new Set(MARKET_RESEARCH_ARTICLES.map((a) => a.category)));
    return ['All', ...cats];
  }, []);

  const filteredArticles = useMemo(() => {
    return MARKET_RESEARCH_ARTICLES.filter((article) => {
      const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
      const matchesSearch =
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.introduction.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="py-16 sm:py-24 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Intro (Section 9 Requirement) */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-200/80 text-slate-800 text-xs font-semibold uppercase tracking-wider mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Digital Publication</span>
          </div>
          <h1 className="font-editorial text-4xl sm:text-5xl font-bold tracking-tight text-slate-950 mb-4">
            Market Research
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            I research markets, products, consumer demand, competition and advertising landscapes to identify opportunities worth exploring.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="p-4 rounded-lg bg-white border border-slate-200 shadow-2xs mb-10 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-slate-950 text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200/80'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search research topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-900 focus:bg-white text-slate-900"
            />
          </div>
        </div>

        {/* Articles Grid */}
        {filteredArticles.length === 0 ? (
          <div className="p-12 text-center bg-white rounded-lg border border-slate-200 text-slate-500">
            <p className="text-sm">No research articles match your search or filter criteria.</p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="mt-3 text-xs font-semibold text-slate-950 underline"
            >
              Reset filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {filteredArticles.map((article) => (
              <article
                key={article.id}
                className="bg-white rounded-lg border border-slate-200 p-8 flex flex-col justify-between hover:border-slate-400 hover:shadow-xs transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-4">
                    <span className="font-semibold text-slate-800 px-2.5 py-0.5 rounded bg-slate-100 border border-slate-200">
                      {article.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {article.readingTime}
                    </span>
                  </div>

                  <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-slate-950 group-hover:text-slate-700 transition-colors mb-3 leading-snug">
                    {article.title}
                  </h2>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                    {article.excerpt}
                  </p>

                  <div className="p-4 rounded-md bg-slate-50 border border-slate-100 mb-6">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
                      Core Strategic Angle
                    </span>
                    <p className="text-xs text-slate-700 italic">
                      "{article.subtitle}"
                    </p>
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs text-slate-500">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{article.date}</span>
                  </div>

                  <button
                    id={`read-research-btn-${article.id}`}
                    onClick={() => {
                      onNavigate('market-research-detail', article.id);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold bg-slate-950 text-white hover:bg-slate-800 rounded-md transition-colors cursor-pointer"
                  >
                    <span>Read Research</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Editorial publishing notice */}
        <div className="mt-16 p-6 rounded-lg bg-white border border-slate-200 text-xs text-slate-500 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <p>
            <strong className="text-slate-800">Publishing Methodology:</strong> All market research briefs represent objective secondary synthesis, public retail observation, and strategic hypothesis formulation. No confidential proprietary data is disclosed.
          </p>
          <span className="shrink-0 font-medium text-slate-700">Updated Monthly</span>
        </div>
      </div>
    </div>
  );
};

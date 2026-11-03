import React, { useState, useMemo } from 'react';
import { PageView } from '../types';
import { ADS_BREAKDOWN_ARTICLES } from '../data/adsBreakdowns';
import { Search, Clock, Calendar, ArrowUpRight, Sparkles, Filter, Eye, Lightbulb } from 'lucide-react';

interface AdsBreakdownPageProps {
  onNavigate: (page: PageView, id?: string) => void;
}

export const AdsBreakdownPage: React.FC<AdsBreakdownPageProps> = ({ onNavigate }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState<string>('All');

  const industries = useMemo(() => {
    const inds = Array.from(new Set(ADS_BREAKDOWN_ARTICLES.map((a) => a.industry)));
    return ['All', ...inds];
  }, []);

  const filteredArticles = useMemo(() => {
    return ADS_BREAKDOWN_ARTICLES.filter((item) => {
      const matchesIndustry = selectedIndustry === 'All' || item.industry === selectedIndustry;
      const matchesSearch =
        item.brandName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.industry.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesIndustry && matchesSearch;
    });
  }, [searchQuery, selectedIndustry]);

  return (
    <div className="py-16 sm:py-24 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Intro Section (Section 10 Requirement) */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-200/80 text-slate-800 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Campaign Reverse-Engineering</span>
          </div>
          <h1 className="font-editorial text-4xl sm:text-5xl font-bold tracking-tight text-slate-950 mb-4">
            Winning Ads Breakdown
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            I study interesting advertising campaigns to understand the strategy behind the creative, offer, audience and funnel.
          </p>
        </div>

        {/* Filters & Search */}
        <div className="p-4 rounded-lg bg-white border border-slate-200 shadow-2xs mb-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {industries.map((ind) => (
              <button
                key={ind}
                onClick={() => setSelectedIndustry(ind)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                  selectedIndustry === ind
                    ? 'bg-slate-950 text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200/80'
                }`}
              >
                {ind}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search brands, industries..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-900 focus:bg-white text-slate-900"
            />
          </div>
        </div>

        {/* Article Cards Grid */}
        {filteredArticles.length === 0 ? (
          <div className="p-12 text-center bg-white rounded-lg border border-slate-200 text-slate-500">
            <p className="text-sm">No advertising breakdowns match your filters.</p>
            <button
              onClick={() => {
                setSelectedIndustry('All');
                setSearchQuery('');
              }}
              className="mt-3 text-xs font-semibold text-slate-950 underline"
            >
              Reset filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredArticles.map((item) => {
              const mediaMap: Record<string, { src: string; caption: string }> = {
                'ab-1': {
                  src: './images/ag1_habit_ad_1793632479207.jpg',
                  caption: 'AG1 Morning Routine Hook: Habit-Stacking Shaker Demonstration'
                },
                'ab-2': {
                  src: './images/ridge_wallet_ad_1793632478447.jpg',
                  caption: 'The Ridge Visual Agitation: Slim Carry vs Bulky Back-Pocket Brick'
                },
                'ab-3': {
                  src: './images/hexclad_cookware_ad_1793632480720.jpg',
                  caption: 'HexClad Metal Utensil Scratch Demonstration on Sizzling Hybrid Pan'
                },
                'ab-4': {
                  src: './images/duolingo_social_ad_1793632480822.jpg',
                  caption: 'Duolingo Viral Meme Creative: Mascot Doorway Notification Hook'
                }
              };
              const media = mediaMap[item.id];

              return (
                <article
                  key={item.id}
                  className="bg-white rounded-lg border border-slate-200 p-6 sm:p-8 flex flex-col justify-between hover:border-slate-400 hover:shadow-xs transition-all group"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-slate-950 text-sm px-2.5 py-0.5 rounded bg-slate-100 border border-slate-200">
                          {item.brandName}
                        </span>
                        <span className="text-slate-500 text-xs">{item.industry}</span>
                      </div>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {item.readingTime}
                      </span>
                    </div>

                    <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-slate-950 group-hover:text-slate-700 transition-colors mb-3 leading-snug">
                      {item.title}
                    </h2>

                    {/* Related Ad Creative Image */}
                    {media && (
                      <div className="mb-5 rounded-lg overflow-hidden border border-slate-200 bg-slate-900 group-hover:border-slate-300 transition-colors">
                        <img
                          src={media.src}
                          alt={media.caption}
                          className="w-full h-52 object-cover group-hover:scale-[1.02] transition-transform duration-300"
                          referrerPolicy="no-referrer"
                        />
                        <div className="p-2.5 bg-slate-50 border-t border-slate-200">
                          <span className="text-[11px] font-semibold text-slate-800 block truncate">
                            {media.caption}
                          </span>
                        </div>
                      </div>
                    )}

                    <p className="text-slate-600 text-sm leading-relaxed mb-6 font-normal">
                      {item.shortDescription}
                    </p>

                    <div className="p-3.5 rounded-md bg-slate-50 border border-slate-100 mb-6 text-xs text-slate-700 space-y-1">
                      <div className="flex items-center gap-1.5 font-semibold text-slate-900">
                        <Eye className="w-3.5 h-3.5 text-slate-600" />
                        <span>The Hook:</span>
                      </div>
                      <p className="text-slate-600 italic">
                        "{item.theHook.observable}"
                      </p>
                    </div>
                  </div>

                <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-500">{item.date}</span>

                  <button
                    id={`read-breakdown-btn-${item.id}`}
                    onClick={() => {
                      onNavigate('ads-breakdown-detail', item.id);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold bg-slate-950 text-white hover:bg-slate-800 rounded-md transition-colors cursor-pointer"
                  >
                    <span>Read Breakdown</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </article>
            );
          })}
          </div>
        )}

        {/* Credibility disclaimer (Section 10 requirement) */}
        <div className="mt-16 p-6 rounded-lg bg-white border border-slate-200 text-xs text-slate-500 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <p>
            <strong className="text-slate-800">Analytical Distinction:</strong> All breakdowns analyze publicly observable ad creative and landing pages. Visible observations, strategic inferences, and testing hypotheses are strictly demarcated.
          </p>
          <span className="shrink-0 font-medium text-slate-700">Public Ad Library Intelligence</span>
        </div>
      </div>
    </div>
  );
};

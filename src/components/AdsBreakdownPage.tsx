import React, { useState, useMemo } from 'react';
import { PageView } from '../types';
import { ADS_BREAKDOWN_ARTICLES } from '../data/adsBreakdowns';
import { WinningVsLosingBreakdown } from './WinningVsLosingBreakdown';
import { Search, Clock, Calendar, ArrowUpRight, Sparkles, Filter, Eye, Lightbulb, TrendingUp, Layers, BookOpen } from 'lucide-react';

interface AdsBreakdownPageProps {
  onNavigate: (page: PageView, id?: string) => void;
}

export const AdsBreakdownPage: React.FC<AdsBreakdownPageProps> = ({ onNavigate }) => {
  const [activeSection, setActiveSection] = useState<'featured-post' | 'archive'>('featured-post');
  const [selectedTeardownId, setSelectedTeardownId] = useState<string>('ab-8');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState<string>('All');

  const currentTeardown =
    ADS_BREAKDOWN_ARTICLES.find((a) => a.id === selectedTeardownId) ||
    ADS_BREAKDOWN_ARTICLES.find((a) => a.id === 'ab-8') ||
    ADS_BREAKDOWN_ARTICLES[0];

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
    <div className="py-12 sm:py-16 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Intro Section */}
        <div className="max-w-3xl mb-8">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-200/80 text-slate-800 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>Campaign Reverse-Engineering &amp; Creative Audits</span>
          </div>
          <h1 className="font-editorial text-4xl sm:text-5xl font-bold tracking-tight text-slate-950 mb-3">
            Winning Ads Breakdown
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            I study interesting advertising campaigns to understand the strategy behind the creative, offer, audience and funnel.
          </p>
        </div>

        {/* View Switcher: Day Teardowns vs All Archive */}
        <div className="mb-8 p-3 sm:p-4 bg-slate-100/90 rounded-2xl border border-slate-300/80 shadow-xs flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
          {/* Sub-box: Daily Ads Breakdown Series */}
          <div className="p-3 bg-white rounded-xl border border-slate-200/90 shadow-2xs flex flex-col sm:flex-row sm:items-center justify-between gap-3 flex-1">
            <div className="flex items-center gap-2.5">
              <span className="p-2 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-200 shrink-0">
                <TrendingUp className="w-4 h-4" />
              </span>
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 font-bold block">
                  Daily Ads Breakdown Series
                </span>
                <span className="text-xs font-semibold text-slate-900 block truncate max-w-[240px] sm:max-w-none">
                  Day 4: Tumbler Wars (Owala vs Stanley)
                </span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {/* Primary "Read Today's Breakdown" Hero CTA */}
              <button
                onClick={() => {
                  setActiveSection('featured-post');
                  setSelectedTeardownId('ab-8');
                }}
                className={`flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer shadow-xs ${
                  activeSection === 'featured-post' && selectedTeardownId === 'ab-8'
                    ? 'bg-slate-950 text-white ring-2 ring-emerald-500/60'
                    : 'bg-emerald-600 hover:bg-emerald-500 text-white'
                }`}
              >
                <Sparkles className="w-4 h-4 text-emerald-300" />
                <span>Read Today's Breakdown</span>
                <span className="px-1.5 py-0.5 rounded text-[10px] bg-white/20 font-mono text-white uppercase tracking-wider font-semibold">
                  Latest
                </span>
              </button>

              {/* Past Drops Compact Selector */}
              <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg border border-slate-200 text-xs">
                <span className="text-[10px] font-mono text-slate-400 px-1 font-semibold uppercase hidden sm:inline">
                  Past:
                </span>
                <button
                  onClick={() => {
                    setActiveSection('featured-post');
                    setSelectedTeardownId('ab-7');
                  }}
                  title="Day 3: Geyser Wars (Haier vs Walton)"
                  className={`px-2 py-1 rounded text-xs font-semibold transition-all cursor-pointer ${
                    activeSection === 'featured-post' && selectedTeardownId === 'ab-7'
                      ? 'bg-slate-950 text-white shadow-2xs'
                      : 'text-slate-700 hover:text-slate-950 hover:bg-slate-200'
                  }`}
                >
                  Day 3
                </button>
                <button
                  onClick={() => {
                    setActiveSection('featured-post');
                    setSelectedTeardownId('ab-6');
                  }}
                  title="Day 2: BD Winter Hoodie Wars (Fabrilife vs SaRa)"
                  className={`px-2 py-1 rounded text-xs font-semibold transition-all cursor-pointer ${
                    activeSection === 'featured-post' && selectedTeardownId === 'ab-6'
                      ? 'bg-slate-950 text-white shadow-2xs'
                      : 'text-slate-700 hover:text-slate-950 hover:bg-slate-200'
                  }`}
                >
                  Day 2
                </button>
                <button
                  onClick={() => {
                    setActiveSection('featured-post');
                    setSelectedTeardownId('ab-5');
                  }}
                  title="Day 1: The Ridge Wallet vs Bulky"
                  className={`px-2 py-1 rounded text-xs font-semibold transition-all cursor-pointer ${
                    activeSection === 'featured-post' && selectedTeardownId === 'ab-5'
                      ? 'bg-slate-950 text-white shadow-2xs'
                      : 'text-slate-700 hover:text-slate-950 hover:bg-slate-200'
                  }`}
                >
                  Day 1
                </button>
              </div>
            </div>
          </div>

          {/* Archive Toggle Button */}
          <div className="flex items-center gap-2 shrink-0 self-end lg:self-center">
            <button
              onClick={() => setActiveSection('archive')}
              className={`flex items-center gap-2 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer border ${
                activeSection === 'archive'
                  ? 'bg-slate-950 text-white border-slate-950 shadow-xs'
                  : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>All Breakdowns ({ADS_BREAKDOWN_ARTICLES.length})</span>
            </button>
          </div>
        </div>

        {/* View 1: Active Teardown Blog Section */}
        {activeSection === 'featured-post' && (
          <div className="rounded-2xl border border-slate-200/90 shadow-xs overflow-hidden mb-16 bg-white">
            <WinningVsLosingBreakdown
              article={currentTeardown}
              onNavigate={onNavigate}
              isStandalonePage={false}
            />
          </div>
        )}

        {/* View 2: Archive Grid */}
        {activeSection === 'archive' && (
          <div>
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
                  className="mt-3 text-xs font-semibold text-slate-950 underline cursor-pointer"
                >
                  Reset filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredArticles.map((item) => {
                  const mediaMap: Record<string, { src: string; caption: string }> = {
                    'ab-8': {
                      src: './images/owala_spillproof_test.jpg',
                      caption: 'WIN-1 Hook: Spill-Proof Test Zero Leak (Owala vs Stanley)'
                    },
                    'ab-7': {
                      src: './images/haier_geyser_hook.jpg',
                      caption: 'WIN-1 Hook: Cold Bathroom? Haier 100% Shockproof Warmth (Haier vs Walton)'
                    },
                    'ab-6': {
                      src: './images/fabrilife_hook_morning.jpg',
                      caption: 'WIN-1 Hook: Cold mornings? Sorted. (Fabrilife)'
                    },
                    'ab-5': {
                      src: './images/win1_hook_brick_wallet.jpg',
                      caption: 'WIN-1 Hook (0-3s): Stop sitting on this brick'
                    },
                    'ab-1': {
                      src: './images/ag1_habit_ad_1793632479207.jpg',
                      caption: 'AG1 Morning Routine Hook: Habit-Stacking Shaker Demonstration'
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
                            <span className="text-slate-500 text-xs hidden sm:inline">{item.industry}</span>
                          </div>
                          <span className="flex items-center gap-1 font-mono text-[11px]">
                            <Clock className="w-3.5 h-3.5" />
                            {item.readingTime}
                          </span>
                        </div>

                        {item.isWinningVsLosing && (
                          <div className="mb-2 inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 text-[11px] font-mono font-bold uppercase tracking-wide border border-emerald-200">
                            <TrendingUp className="w-3 h-3 text-emerald-600" />
                            <span>Day 1 Teardown • Winning vs Losing</span>
                          </div>
                        )}

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
                          <div className="flex items-center gap-1.5 font-semibold text-slate-950">
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
          </div>
        )}
      </div>
    </div>
  );
};

import React from 'react';
import { PageView } from '../types';
import { MARKET_RESEARCH_ARTICLES } from '../data/marketResearch';
import { ADS_BREAKDOWN_ARTICLES } from '../data/adsBreakdowns';
import { ArrowRight, BookOpen, Sparkles, Clock, Calendar, ArrowUpRight } from 'lucide-react';

interface InsightsSectionProps {
  onNavigate: (page: PageView, id?: string) => void;
}

export const InsightsSection: React.FC<InsightsSectionProps> = ({ onNavigate }) => {
  const latestMarketResearch = MARKET_RESEARCH_ARTICLES.slice(0, 3);
  const latestAdsBreakdown = ADS_BREAKDOWN_ARTICLES.slice(0, 3);

  return (
    <section className="py-20 sm:py-24 bg-[#FAFAFA] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 block mb-2">
            Independent Analysis &amp; Research
          </span>
          <h2 className="font-editorial text-3xl sm:text-5xl font-bold tracking-tight text-slate-950 mb-4">
            Insights
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            I regularly publish research and analytical breakdowns about emerging markets, business opportunities, consumer behavior, advertising trends, winning ads, creative strategy, e-commerce, and marketing strategy.
          </p>
        </div>

        {/* Category 1: Market Research */}
        <div className="mb-20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-6 mb-8 border-b border-slate-200">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-slate-200/70 text-slate-800 text-xs font-semibold uppercase tracking-wider mb-2">
                <BookOpen className="w-3.5 h-3.5" />
                <span>Publication</span>
              </div>
              <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-slate-950">
                Market Research
              </h3>
              <p className="text-sm text-slate-600 mt-1">
                Researching markets, products and business opportunities worth paying attention to.
              </p>
            </div>
            <div className="mt-4 sm:mt-0">
              <button
                id="home-explore-market-research-btn"
                onClick={() => {
                  onNavigate('market-research');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-950 hover:text-slate-600 cursor-pointer"
              >
                <span>Explore Market Research</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {latestMarketResearch.map((item) => (
              <article
                key={item.id}
                className="bg-white rounded-lg border border-slate-200 p-6 flex flex-col justify-between hover:border-slate-400 hover:shadow-xs transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
                    <span className="font-medium px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                      {item.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {item.readingTime}
                    </span>
                  </div>

                  <h4 className="font-editorial text-xl font-bold text-slate-950 group-hover:text-slate-700 transition-colors mb-3 leading-snug">
                    {item.title}
                  </h4>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6 line-clamp-3">
                    {item.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] text-slate-500">{item.date}</span>
                  <button
                    onClick={() => {
                      onNavigate('market-research-detail', item.id);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-slate-950 hover:text-slate-600 cursor-pointer"
                  >
                    <span>Read Research</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-950 transition-colors" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Category 2: Ads Breakdown */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-6 mb-8 border-b border-slate-200">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-slate-200/70 text-slate-800 text-xs font-semibold uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Campaign Deconstruction</span>
              </div>
              <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-slate-950">
                Ads Breakdown
              </h3>
              <p className="text-sm text-slate-600 mt-1">
                Breaking down interesting advertising campaigns to understand why they work.
              </p>
            </div>
            <div className="mt-4 sm:mt-0">
              <button
                id="home-explore-ads-breakdown-btn"
                onClick={() => {
                  onNavigate('ads-breakdown');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-950 hover:text-slate-600 cursor-pointer"
              >
                <span>Explore Ads Breakdowns</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {latestAdsBreakdown.map((item) => {
              const adsMediaMap: Record<string, { src: string; caption: string }> = {
                'ab-1': {
                  src: './images/ag1_habit_ad_1793632479207.jpg',
                  caption: 'AG1 Morning Routine Hook'
                },
                'ab-2': {
                  src: './images/ridge_wallet_ad_1793632478447.jpg',
                  caption: 'Ridge Wallet Visual Agitation'
                },
                'ab-3': {
                  src: './images/hexclad_cookware_ad_1793632480720.jpg',
                  caption: 'HexClad Metal Utensil Demonstration'
                },
                'ab-4': {
                  src: './images/duolingo_social_ad_1793632480822.jpg',
                  caption: 'Duolingo Viral Meme Hook'
                }
              };
              const media = adsMediaMap[item.id];

              return (
                <article
                  key={item.id}
                  className="bg-white rounded-lg border border-slate-200 p-5 sm:p-6 flex flex-col justify-between hover:border-slate-400 hover:shadow-xs transition-all group"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
                      <span className="font-semibold text-slate-900 px-2 py-0.5 rounded bg-slate-100 border border-slate-200/70">
                        {item.brandName}
                      </span>
                      <span className="text-[11px] text-slate-500">{item.industry}</span>
                    </div>

                    {media && (
                      <div className="mb-3.5 rounded-md overflow-hidden border border-slate-200 bg-slate-900 group-hover:border-slate-300 transition-colors">
                        <img
                          src={media.src}
                          alt={media.caption}
                          className="w-full h-36 object-cover group-hover:scale-[1.03] transition-transform duration-300"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    )}

                    <h4 className="font-editorial text-lg sm:text-xl font-bold text-slate-950 group-hover:text-slate-700 transition-colors mb-2 leading-snug">
                      {item.title}
                    </h4>

                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-5 line-clamp-2">
                      {item.shortDescription}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="flex items-center gap-1 text-[11px] text-slate-500">
                      <Clock className="w-3 h-3" />
                      {item.readingTime}
                    </span>
                    <button
                      onClick={() => {
                        onNavigate('ads-breakdown-detail', item.id);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-slate-950 hover:text-slate-600 cursor-pointer"
                    >
                      <span>Read Breakdown</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-950 transition-colors" />
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

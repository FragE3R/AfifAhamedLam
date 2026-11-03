import React from 'react';
import { PageView } from '../types';
import { ArrowUpRight, BarChart3, Search, Megaphone, FileText } from 'lucide-react';

interface WhatIDoGridProps {
  onNavigate: (page: PageView) => void;
}

export const WhatIDoGrid: React.FC<WhatIDoGridProps> = ({ onNavigate }) => {
  const cards = [
    {
      id: 'media-buying',
      icon: Megaphone,
      title: 'Media Buying',
      description: 'Meta Ads, paid advertising, campaign structure, audience testing, creative testing, retargeting and optimization.',
      highlights: ['Meta Ads Manager', 'Cold Prospecting', 'Creative Angle Testing', 'Retargeting Architecture'],
      image: '/src/assets/images/strategist_desk_office_1793631153324.jpg',
      caption: 'Paid Media & Creative Testing Workspace'
    },
    {
      id: 'performance-marketing',
      icon: BarChart3,
      title: 'Performance Marketing',
      description: 'Data-driven campaign decisions using metrics such as CTR, CPC, CPM, CPA and ROAS.',
      highlights: ['Metric Diagnosis', 'Funnel Economics', 'Ad Fatigue Auditing', 'Budget Calibration'],
      image: '/src/assets/images/cnc_laser_steel_1793631154504.jpg',
      caption: 'Attributed Revenue & ROAS Optimization'
    },
    {
      id: 'market-research',
      icon: Search,
      title: 'Market Research',
      description: 'Market opportunities, customer demand, competitors, product categories and advertising landscapes.',
      highlights: ['Competitor Intelligence', 'Audience Hesitation Mapping', 'Pricing Benchmarking', 'Category Analysis'],
      image: '/src/assets/images/amazon_product_research_1793631154918.jpg',
      caption: 'Amazon FBA & Commercial Demand Intelligence'
    },
    {
      id: 'content-copywriting',
      icon: FileText,
      title: 'Content & Copywriting',
      description: 'Marketing copy, advertising copy, social media content, website content and persuasive messaging.',
      highlights: ['Direct-Response Ad Copy', 'High-Retention Hooks', 'Landing Page Flows', 'Objection-Demolishing Copy'],
      image: '/src/assets/images/d2c_apparel_brand_1793631154743.jpg',
      caption: 'Direct-to-Consumer Brand Messaging Studio'
    }
  ];

  return (
    <section className="py-20 sm:py-24 bg-[#FAFAFA] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 block mb-2">
              Capabilities
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl font-bold tracking-tight text-slate-950">
              What I Do
            </h2>
          </div>
          <p className="text-sm text-slate-600 max-w-md mt-3 md:mt-0 leading-relaxed">
            Integrating market intelligence with disciplined media buying and conversion-focused creative strategy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card) => {
            const IconComponent = card.icon;
            return (
              <div
                key={card.id}
                className="bg-white rounded-lg border border-slate-200 p-8 hover:border-slate-400 hover:shadow-xs transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-md bg-slate-100 flex items-center justify-center text-slate-900 mb-6 group-hover:bg-slate-950 group-hover:text-white transition-colors">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  <h3 className="font-editorial text-2xl font-bold text-slate-950 mb-3 tracking-tight">
                    {card.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {card.description}
                  </p>

                  {/* Contextual Visual Preview */}
                  <div className="mb-6 rounded-lg overflow-hidden border border-slate-200 bg-slate-50">
                    <img
                      src={card.image}
                      alt={card.caption}
                      className="w-full h-40 object-cover group-hover:scale-[1.02] transition-transform duration-300"
                      referrerPolicy="no-referrer"
                    />
                    <div className="p-2 bg-slate-50 border-t border-slate-200">
                      <span className="text-[11px] font-semibold text-slate-800 block truncate">
                        {card.caption}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mb-8">
                    {card.highlights.map((h, i) => (
                      <span
                        key={i}
                        className="inline-block text-[11px] font-medium px-2.5 py-1 rounded bg-slate-50 text-slate-700 border border-slate-200/80"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <button
                    onClick={() => {
                      onNavigate('services');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-950 hover:text-slate-700 cursor-pointer transition-colors"
                  >
                    <span>Explore Service Details</span>
                    <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-slate-950 transition-colors" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

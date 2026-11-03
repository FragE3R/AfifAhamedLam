import React from 'react';
import { PageView } from '../types';
import { ArrowRight, ArrowUpRight, Compass, LineChart, Target, Layers, Briefcase, Mail, MapPin } from 'lucide-react';

interface HeroProps {
  onNavigate: (page: PageView) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="relative pt-12 pb-20 sm:pt-16 sm:pb-28 border-b border-slate-200 overflow-hidden bg-white">
      {/* Subtle editorial grid pattern background */}
      <div 
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#0F172A 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center mb-16">
          {/* Left Column: Positioning & CTAs */}
          <div className="lg:col-span-7">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-200 bg-slate-50 text-xs font-semibold text-slate-700 mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Available for Strategy, Media Buying &amp; Market Research</span>
            </div>

            {/* Editorial Headline */}
            <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-950 leading-[1.12] mb-6">
              Media Buyer &amp; Digital Marketing Strategist
            </h1>

            {/* Supporting statement */}
            <p className="text-lg sm:text-xl text-slate-600 font-normal leading-relaxed max-w-2xl mb-8">
              I analyze markets, study winning advertising strategies, and help businesses turn commercial opportunities into measurable, profitable growth.
            </p>

            {/* Key Commercial Metrics Strip */}
            <div className="grid grid-cols-3 gap-3 p-3.5 rounded-lg bg-slate-50 border border-slate-200 mb-8 max-w-xl">
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 block">Reported ROAS</span>
                <span className="font-editorial text-xl font-bold text-slate-950 mt-0.5 block">~500×</span>
                <span className="text-[11px] text-slate-500 block">Rangpur Steel</span>
              </div>
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 block">Amazon Revenue</span>
                <span className="font-editorial text-xl font-bold text-slate-950 mt-0.5 block">$250k–$400k</span>
                <span className="text-[11px] text-slate-500 block">Monthly product run-rate</span>
              </div>
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 block">D2C Exit</span>
                <span className="font-editorial text-xl font-bold text-slate-950 mt-0.5 block">~$3,000</span>
                <span className="text-[11px] text-slate-500 block">Net profit realized</span>
              </div>
            </div>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                id="hero-primary-cta"
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-base font-semibold text-white bg-slate-950 hover:bg-slate-800 rounded-md transition-all shadow-xs cursor-pointer focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2"
              >
                <span>Work With Me</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                id="hero-secondary-cta"
                onClick={() => onNavigate('portfolio')}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-base font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200/80 rounded-md transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-slate-400"
              >
                <span>Explore My Work</span>
                <ArrowUpRight className="w-4 h-4 text-slate-500" />
              </button>
            </div>
          </div>

          {/* Right Column: Single Intro Photo with Name & Basic Info */}
          <div className="lg:col-span-5">
            <div className="rounded-xl border border-slate-300 bg-[#FAFAFA] p-5 shadow-xs">
              {/* Strategist Photo */}
              <div className="relative rounded-lg overflow-hidden border border-slate-200 bg-slate-100 aspect-square mb-5">
                <img
                  src="/public/assets/aistudio/IMG-20250310-WA0036_a86a6720.jpg"
                  alt="Afif Ahamed"
                  className="w-full h-full object-cover object-[50%_28%]"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Name & Basic Info */}
              <div>
                <h2 className="font-editorial text-2xl font-bold text-slate-950 tracking-tight">
                  Afif Ahamed
                </h2>
                <p className="text-sm font-medium text-slate-600 mt-0.5 mb-4">
                  Media Buyer &amp; Digital Marketing Strategist
                </p>

                <div className="space-y-2.5 pt-4 border-t border-slate-200 text-xs text-slate-700">
                  <div className="flex items-center gap-2.5">
                    <Briefcase className="w-4 h-4 text-slate-500 shrink-0" />
                    <span><strong className="text-slate-950 font-semibold">Specialization:</strong> Meta &amp; Google Ads, Strategy, Market Research</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Mail className="w-4 h-4 text-slate-500 shrink-0" />
                    <span>
                      <strong className="text-slate-950 font-semibold">Email:</strong>{' '}
                      <a href="mailto:AhamedAfif87@gmail.com" className="text-slate-950 hover:underline font-medium">
                        AhamedAfif87@gmail.com
                      </a>
                    </span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <MapPin className="w-4 h-4 text-slate-500 shrink-0" />
                    <span><strong className="text-slate-950 font-semibold">Location:</strong> Bangladesh (GMT+6) • Remote worldwide</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0 ml-1 mr-0.5"></span>
                    <span><strong className="text-slate-950 font-semibold">Status:</strong> Open for client projects &amp; consultations</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Intersection Positioning Box */}
        <div className="mt-8 pt-10 border-t border-slate-200/90">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 block mb-2">
                Core Positioning
              </span>
              <h2 className="font-editorial text-2xl font-semibold text-slate-950 tracking-tight">
                Operating at the Intersection of Four Disciplines
              </h2>
            </div>

            <div className="md:col-span-8">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                <div className="p-4 rounded-md border border-slate-200 bg-[#FAFAFA] hover:border-slate-300 transition-colors">
                  <Compass className="w-5 h-5 text-slate-900 mb-2.5" />
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-950 block">
                    Markets
                  </span>
                  <p className="text-xs text-slate-600 mt-1 leading-snug">
                    Audience demand, competitors, category trends &amp; pricing realities.
                  </p>
                </div>

                <div className="p-4 rounded-md border border-slate-200 bg-[#FAFAFA] hover:border-slate-300 transition-colors">
                  <Layers className="w-5 h-5 text-slate-900 mb-2.5" />
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-950 block">
                    Creative
                  </span>
                  <p className="text-xs text-slate-600 mt-1 leading-snug">
                    First 3-second hooks, psychological angles, and clear copy.
                  </p>
                </div>

                <div className="p-4 rounded-md border border-slate-200 bg-[#FAFAFA] hover:border-slate-300 transition-colors">
                  <Target className="w-5 h-5 text-slate-900 mb-2.5" />
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-950 block">
                    Media Buying
                  </span>
                  <p className="text-xs text-slate-600 mt-1 leading-snug">
                    Meta &amp; Google ad structures, audience testing, and retargeting.
                  </p>
                </div>

                <div className="p-4 rounded-md border border-slate-200 bg-[#FAFAFA] hover:border-slate-300 transition-colors">
                  <LineChart className="w-5 h-5 text-slate-900 mb-2.5" />
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-950 block">
                    Data
                  </span>
                  <p className="text-xs text-slate-600 mt-1 leading-snug">
                    CTR, CPC, CPM, CPA &amp; ROAS metrics driving real decisions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Strong Statement Box (Section 5 requirement) */}
        <div className="mt-10 p-6 sm:p-8 rounded-lg bg-slate-900 text-white border border-slate-800 shadow-xs">
          <div className="max-w-4xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-slate-400 block mb-2">
              Strategic Philosophy
            </span>
            <p className="font-editorial text-xl sm:text-2xl md:text-3xl font-medium tracking-tight text-slate-100 leading-snug">
              "I don't look at advertising as just buying traffic. I look at the market, the customer, the offer, the creative, the funnel, and the numbers."
            </p>
            <p className="text-sm text-slate-400 mt-4 leading-relaxed max-w-2xl">
              Campaigns fail when traffic is driven to weak offers or mismatched creative. Sustainable performance marketing requires synchronizing every step from initial market research to checkout.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { PageView } from '../types';
import { ArrowRight, Mail, ArrowUpRight } from 'lucide-react';

interface HomeCtaSectionProps {
  onNavigate: (page: PageView) => void;
}

export const HomeCtaSection: React.FC<HomeCtaSectionProps> = ({ onNavigate }) => {
  return (
    <section className="py-20 sm:py-24 bg-slate-950 text-white relative overflow-hidden">
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#FFFFFF 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-8">
            <span className="text-xs font-semibold uppercase tracking-widest text-slate-400 block mb-3">
              Let's Collaborate
            </span>
            <h2 className="font-editorial text-3xl sm:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
              Ready to Build a Clear, Data-Backed Marketing Strategy?
            </h2>
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed mb-8 max-w-2xl">
              Whether you need structured Meta and Google ad campaigns, a thorough market research brief, or direct-response creative direction, let's discuss your requirements and determine the right scope.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <button
                id="home-cta-work-with-me"
                onClick={() => {
                  onNavigate('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-base font-semibold text-slate-950 bg-white hover:bg-slate-100 rounded-md transition-all shadow-xs cursor-pointer"
              >
                <span>Work With Me</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                id="home-cta-direct-email"
                href="mailto:AhamedAfif87@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-base font-semibold text-white bg-slate-800/80 hover:bg-slate-800 border border-slate-700 rounded-md transition-all"
              >
                <Mail className="w-4 h-4 text-slate-400" />
                <span>AhamedAfif87@gmail.com</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 flex flex-col items-center text-center shadow-lg">
              <div className="w-14 h-14 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-emerald-400 mb-4 shadow-inner">
                <Mail className="w-6 h-6" />
              </div>
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-1">
                Direct Strategist Contact
              </span>
              <h3 className="font-editorial text-xl font-bold text-white mb-1">
                Afif Ahamed
              </h3>
              <p className="text-xs text-slate-400 leading-snug mb-4">
                Full-funnel digital media buying, Amazon marketplace research &amp; conversion copy.
              </p>
              <div className="w-full pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  Replies in &lt; 24h
                </span>
                <span className="text-slate-300 font-medium">Direct Partner</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

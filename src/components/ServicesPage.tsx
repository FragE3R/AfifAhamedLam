import React from 'react';
import { PageView } from '../types';
import { SERVICES_DATA } from '../data/services';
import { CheckCircle2, UserCheck, Sparkles, ArrowRight, MessageSquareQuote } from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (page: PageView) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate }) => {
  return (
    <div className="py-16 sm:py-24 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header (Section 12 Requirement) */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 block mb-2">
            Strategic Engagements
          </span>
          <h1 className="font-editorial text-4xl sm:text-5xl font-bold tracking-tight text-slate-950 mb-4">
            How I Can Help Your Business
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            I work with businesses to align market reality, customer psychology, creative strategy, and paid traffic into an organized growth system.
          </p>
        </div>

        {/* Services List */}
        <div className="space-y-16">
          {SERVICES_DATA.map((service, index) => (
            <div
              key={service.id}
              id={`service-${service.id}`}
              className="p-8 sm:p-12 rounded-lg bg-white border border-slate-200 shadow-2xs transition-all hover:border-slate-300"
            >
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8 pb-8 border-b border-slate-200">
                <div className="max-w-2xl">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      0{index + 1}
                    </span>
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded bg-slate-100 text-slate-800">
                      {service.subtitle}
                    </span>
                  </div>
                  <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-slate-950 mb-3 tracking-tight">
                    {service.title}
                  </h2>
                  <p className="text-base text-slate-600 leading-relaxed font-normal">
                    {service.tagline}
                  </p>
                </div>

                {/* Scope & Pricing Policy Notice (Section 12 Requirement) */}
                <div className="p-5 rounded-md bg-slate-50 border border-slate-200 max-w-sm shrink-0">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1">
                    Engagement Scope
                  </span>
                  <p className="text-xs text-slate-700 leading-relaxed mb-4">
                    Let's discuss your requirements and determine the right scope.
                  </p>
                  <button
                    onClick={() => {
                      onNavigate('contact');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-semibold bg-slate-950 text-white hover:bg-slate-800 rounded-md transition-colors cursor-pointer"
                  >
                    <span>Discuss Your Project</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* 3 Columns: What I Do / Who It's For / What You Can Expect */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
                {/* Column 1: What I Do */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Sparkles className="w-4 h-4 text-slate-900" />
                    <h3 className="font-editorial text-xl font-bold text-slate-950">
                      What I Do
                    </h3>
                  </div>
                  <ul className="space-y-2.5">
                    {service.whatIDo.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-slate-900 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Column 2: Who It's For */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <UserCheck className="w-4 h-4 text-slate-900" />
                    <h3 className="font-editorial text-xl font-bold text-slate-950">
                      Who It's For
                    </h3>
                  </div>
                  <ul className="space-y-2.5">
                    {service.whoItsFor.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0 mt-2"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Column 3: What You Can Expect */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <MessageSquareQuote className="w-4 h-4 text-slate-900" />
                    <h3 className="font-editorial text-xl font-bold text-slate-950">
                      What You Can Expect
                    </h3>
                  </div>
                  <ul className="space-y-2.5">
                    {service.whatYouCanExpect.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 shrink-0 mt-2"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Global Bottom CTA */}
        <div className="mt-20 p-10 rounded-lg bg-slate-950 text-white text-center max-w-3xl mx-auto">
          <h3 className="font-editorial text-3xl font-bold text-white mb-3">
            Ready to audit your marketing strategy?
          </h3>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 max-w-xl mx-auto">
            Let's examine your current ad creative, funnel economics, and competitor landscape to identify immediate growth levers.
          </p>
          <button
            onClick={() => {
              onNavigate('contact');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold bg-white text-slate-950 hover:bg-slate-100 rounded-md transition-all cursor-pointer shadow-xs"
          >
            <span>Start a Conversation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

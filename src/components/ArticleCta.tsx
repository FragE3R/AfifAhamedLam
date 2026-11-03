import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { PageView } from '../types';

interface ArticleCtaProps {
  onNavigate: (page: PageView) => void;
}

export const ArticleCta: React.FC<ArticleCtaProps> = ({ onNavigate }) => {
  return (
    <div className="my-12 p-8 sm:p-10 bg-slate-900 text-white rounded-lg border border-slate-800 shadow-sm relative overflow-hidden">
      <div className="relative z-10 max-w-2xl">
        <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded text-xs font-semibold uppercase tracking-wider bg-slate-800 text-slate-300 mb-4">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>Actionable Strategy</span>
        </div>
        <h3 className="font-editorial text-2xl sm:text-3xl font-semibold tracking-tight text-white mb-3">
          Need help turning insights into action?
        </h3>
        <p className="text-slate-300 text-base leading-relaxed mb-6 font-normal">
          If you're looking for help with paid advertising, marketing strategy, market research or content, let's discuss your project.
        </p>
        <button
          id="article-cta-btn"
          onClick={() => {
            onNavigate('contact');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold bg-white text-slate-950 hover:bg-slate-100 rounded-md transition-all cursor-pointer shadow-xs"
        >
          <span>Work With Me</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

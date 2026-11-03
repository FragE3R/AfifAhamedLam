import React from 'react';
import { PageView } from '../types';
import { MARKET_RESEARCH_ARTICLES } from '../data/marketResearch';
import { ArticleCta } from './ArticleCta';
import { ArrowLeft, Clock, Calendar, Bookmark, Share2, AlertCircle, TrendingUp, ShieldAlert, CheckCircle2 } from 'lucide-react';

interface MarketResearchDetailProps {
  articleId?: string;
  onNavigate: (page: PageView, id?: string) => void;
}

export const MarketResearchDetail: React.FC<MarketResearchDetailProps> = ({
  articleId,
  onNavigate
}) => {
  const article = MARKET_RESEARCH_ARTICLES.find((a) => a.id === articleId) || MARKET_RESEARCH_ARTICLES[0];
  const relatedArticles = MARKET_RESEARCH_ARTICLES.filter((a) => a.id !== article.id).slice(0, 2);

  return (
    <article className="py-16 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation back */}
        <div className="mb-8">
          <button
            onClick={() => {
              onNavigate('market-research');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-slate-950 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Market Research</span>
          </button>
        </div>

        {/* Article Header */}
        <header className="pb-10 border-b border-slate-200 mb-12">
          <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 mb-4">
            <span className="font-semibold text-slate-900 px-3 py-1 rounded bg-slate-100 border border-slate-200">
              {article.category}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {article.date}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {article.readingTime}
            </span>
          </div>

          <h1 className="font-editorial text-3xl sm:text-5xl font-bold tracking-tight text-slate-950 leading-[1.18] mb-6">
            {article.title}
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 font-normal leading-relaxed">
            {article.subtitle}
          </p>

          {/* Author metadata bar */}
          <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-slate-900 text-white font-editorial font-bold flex items-center justify-center text-sm">
                AA
              </div>
              <div>
                <p className="font-semibold text-slate-950">Afif Ahamed</p>
                <p className="text-slate-500">Media Buyer &amp; Digital Marketing Strategist</p>
              </div>
            </div>
            <div className="text-right">
              <span className="px-2.5 py-1 rounded bg-slate-50 border border-slate-200 text-[11px] font-medium text-slate-700">
                Independent Field Analysis
              </span>
            </div>
          </div>
        </header>

        {/* Abstract / Executive Summary Box */}
        <div className="p-6 rounded-lg bg-slate-50 border border-slate-200 mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-900 block mb-2">
            Executive Summary
          </span>
          <p className="text-sm text-slate-700 leading-relaxed font-medium">
            {article.excerpt}
          </p>
        </div>

        {/* Core Article Body Sections */}
        <div className="space-y-12 text-slate-800 text-base leading-relaxed">
          {/* 1. Introduction */}
          <section>
            <h2 className="font-editorial text-2xl font-bold text-slate-950 mb-3 tracking-tight">
              1. Introduction
            </h2>
            <p className="text-slate-700 leading-relaxed">
              {article.introduction}
            </p>
          </section>

          {/* 2. Market Overview */}
          <section>
            <h2 className="font-editorial text-2xl font-bold text-slate-950 mb-3 tracking-tight">
              2. Market Overview
            </h2>
            <p className="text-slate-700 leading-relaxed">
              {article.marketOverview}
            </p>
          </section>

          {/* 3. Customer / Audience Demand */}
          <section>
            <h2 className="font-editorial text-2xl font-bold text-slate-950 mb-3 tracking-tight">
              3. Customer / Audience Demand
            </h2>
            <p className="text-slate-700 leading-relaxed">
              {article.audienceDemand}
            </p>
          </section>

          {/* 4. Competition */}
          <section>
            <h2 className="font-editorial text-2xl font-bold text-slate-950 mb-3 tracking-tight">
              4. Competition
            </h2>
            <p className="text-slate-700 leading-relaxed">
              {article.competition}
            </p>
          </section>

          {/* 5. Products / Services */}
          <section>
            <h2 className="font-editorial text-2xl font-bold text-slate-950 mb-3 tracking-tight">
              5. Products / Services Structure
            </h2>
            <p className="text-slate-700 leading-relaxed">
              {article.productsServices}
            </p>
          </section>

          {/* 6. Pricing Observations */}
          <section>
            <h2 className="font-editorial text-2xl font-bold text-slate-950 mb-3 tracking-tight">
              6. Pricing Observations
            </h2>
            <div className="p-5 rounded-md bg-slate-50 border border-slate-200">
              <p className="text-slate-700 leading-relaxed">
                {article.pricingObservations}
              </p>
            </div>
          </section>

          {/* 7. Advertising Landscape */}
          <section>
            <h2 className="font-editorial text-2xl font-bold text-slate-950 mb-3 tracking-tight">
              7. Advertising Landscape
            </h2>
            <p className="text-slate-700 leading-relaxed">
              {article.advertisingLandscape}
            </p>
          </section>

          {/* 8. Opportunities & Risks Grid */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            {/* Opportunities */}
            <div className="p-6 rounded-lg border border-emerald-200 bg-emerald-50/40">
              <div className="flex items-center gap-2 mb-3">
                <TrendingUp className="w-5 h-5 text-emerald-800" />
                <h3 className="font-editorial text-xl font-bold text-emerald-950">
                  Opportunities
                </h3>
              </div>
              <ul className="space-y-2.5">
                {article.opportunities.map((opp, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-emerald-900 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{opp}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Risks */}
            <div className="p-6 rounded-lg border border-rose-200 bg-rose-50/40">
              <div className="flex items-center gap-2 mb-3">
                <ShieldAlert className="w-5 h-5 text-rose-800" />
                <h3 className="font-editorial text-xl font-bold text-rose-950">
                  Identified Risks
                </h3>
              </div>
              <ul className="space-y-2.5">
                {article.risks.map((risk, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-rose-900 leading-relaxed">
                    <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                    <span>{risk}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* 9. My Analysis (Section 9 Requirement) */}
          <section className="p-8 rounded-lg bg-slate-900 text-white border border-slate-800 shadow-xs">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400 block mb-2">
              Strategist Perspective
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-white mb-4 tracking-tight">
              My Analysis
            </h2>
            <p className="text-slate-200 text-base sm:text-lg leading-relaxed font-normal">
              {article.myAnalysis}
            </p>
          </section>

          {/* 10. Conclusion */}
          <section className="pt-4">
            <h2 className="font-editorial text-2xl font-bold text-slate-950 mb-3 tracking-tight">
              Conclusion
            </h2>
            <p className="text-slate-700 leading-relaxed">
              {article.conclusion}
            </p>
          </section>
        </div>

        {/* Section 15 Requirement: Article Bottom CTA */}
        <ArticleCta onNavigate={onNavigate} />

        {/* Related Research Articles */}
        <div className="pt-12 border-t border-slate-200">
          <h3 className="font-editorial text-xl font-bold text-slate-950 mb-6">
            Related Research Publications
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {relatedArticles.map((rel) => (
              <div
                key={rel.id}
                className="p-6 rounded-lg border border-slate-200 bg-[#FAFAFA] hover:border-slate-400 transition-colors flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-medium text-slate-500 mb-2 block">
                    {rel.category} • {rel.readingTime}
                  </span>
                  <h4 className="font-editorial text-lg font-bold text-slate-950 mb-2 leading-snug">
                    {rel.title}
                  </h4>
                  <p className="text-xs text-slate-600 line-clamp-2">
                    {rel.excerpt}
                  </p>
                </div>
                <button
                  onClick={() => {
                    onNavigate('market-research-detail', rel.id);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="mt-4 text-xs font-semibold text-slate-950 hover:underline text-left cursor-pointer"
                >
                  Read Research →
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
};

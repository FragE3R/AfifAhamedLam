import React from 'react';
import { PageView } from '../types';
import { ADS_BREAKDOWN_ARTICLES } from '../data/adsBreakdowns';
import { ArticleCta } from './ArticleCta';
import { ArrowLeft, Clock, Calendar, Eye, Lightbulb, HelpCircle, CheckCircle2, Award, Zap, Layers } from 'lucide-react';

interface AdsBreakdownDetailProps {
  articleId?: string;
  onNavigate: (page: PageView, id?: string) => void;
}

export const AdsBreakdownDetail: React.FC<AdsBreakdownDetailProps> = ({
  articleId,
  onNavigate
}) => {
  const item = ADS_BREAKDOWN_ARTICLES.find((a) => a.id === articleId) || ADS_BREAKDOWN_ARTICLES[0];
  const related = ADS_BREAKDOWN_ARTICLES.filter((a) => a.id !== item.id).slice(0, 2);

  return (
    <article className="py-16 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Back */}
        <div className="mb-8">
          <button
            onClick={() => {
              onNavigate('ads-breakdown');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-slate-950 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Ads Breakdown</span>
          </button>
        </div>

        {/* Header */}
        <header className="pb-10 border-b border-slate-200 mb-12">
          <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 mb-4">
            <span className="font-bold text-slate-950 px-3 py-1 rounded bg-slate-100 border border-slate-200 text-sm">
              {item.brandName}
            </span>
            <span className="font-medium text-slate-700 px-2.5 py-1 rounded bg-slate-50 border border-slate-200">
              {item.industry}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {item.date}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {item.readingTime}
            </span>
          </div>

          <h1 className="font-editorial text-3xl sm:text-5xl font-bold tracking-tight text-slate-950 leading-[1.18] mb-6">
            {item.title}
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 font-normal leading-relaxed">
            {item.shortDescription}
          </p>

          {/* Analytical Legend Bar (Section 10 Requirement) */}
          <div className="mt-8 p-4 rounded-md bg-slate-50 border border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs">
            <span className="font-semibold text-slate-900">Framework Legend:</span>
            <div className="flex flex-wrap items-center gap-4">
              <span className="inline-flex items-center gap-1 text-slate-700 font-medium">
                <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                Visibly Observable
              </span>
              <span className="inline-flex items-center gap-1 text-slate-700 font-medium">
                <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                Strategic Analysis
              </span>
              <span className="inline-flex items-center gap-1 text-slate-700 font-medium">
                <span className="w-2 h-2 rounded-full bg-purple-600"></span>
                Tested Hypothesis
              </span>
            </div>
          </div>

          {/* Ad Creative Topic Banner */}
          {(() => {
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
            if (!media) return null;
            return (
              <div className="mt-8 rounded-xl overflow-hidden border border-slate-200 bg-white shadow-xs">
                <img
                  src={media.src}
                  alt={media.caption}
                  className="w-full h-64 sm:h-80 md:h-96 object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="p-3.5 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-800">{media.caption}</span>
                  <span className="text-[11px] text-slate-500 hidden sm:inline">Campaign Creative Breakdown</span>
                </div>
              </div>
            );
          })()}
        </header>

        {/* Breakdown Body */}
        <div className="space-y-12 text-slate-800 text-base leading-relaxed">
          {/* Target Audience */}
          <section className="p-6 rounded-lg bg-[#FAFAFA] border border-slate-200">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
              Target Audience
            </span>
            <p className="text-sm sm:text-base text-slate-800 font-medium leading-relaxed">
              {item.targetAudience}
            </p>
          </section>

          {/* The Hook: Observable vs Analysis vs Hypothesis */}
          <section className="border-t border-slate-200 pt-8">
            <h2 className="font-editorial text-2xl font-bold text-slate-950 mb-6 tracking-tight">
              The Hook (First 1–3 Seconds)
            </h2>

            <div className="space-y-4">
              <div className="p-5 rounded-md border-l-4 border-l-blue-600 bg-blue-50/40 border border-slate-200">
                <div className="flex items-center gap-2 mb-1 text-blue-950 font-semibold text-xs uppercase tracking-wider">
                  <Eye className="w-3.5 h-3.5 text-blue-600" />
                  <span>Visibly Observable (The Hook Footage)</span>
                </div>
                <p className="text-sm text-slate-800 leading-relaxed">
                  {item.theHook.observable}
                </p>
              </div>

              <div className="p-5 rounded-md border-l-4 border-l-amber-500 bg-amber-50/40 border border-slate-200">
                <div className="flex items-center gap-2 mb-1 text-amber-950 font-semibold text-xs uppercase tracking-wider">
                  <Lightbulb className="w-3.5 h-3.5 text-amber-600" />
                  <span>Strategic Analysis (Why It Stops The Thumb)</span>
                </div>
                <p className="text-sm text-slate-800 leading-relaxed">
                  {item.theHook.analysis}
                </p>
              </div>

              <div className="p-5 rounded-md border-l-4 border-l-purple-600 bg-purple-50/40 border border-slate-200">
                <div className="flex items-center gap-2 mb-1 text-purple-950 font-semibold text-xs uppercase tracking-wider">
                  <HelpCircle className="w-3.5 h-3.5 text-purple-600" />
                  <span>Working Hypothesis (Media Buyer’s Take)</span>
                </div>
                <p className="text-sm text-slate-800 leading-relaxed">
                  {item.theHook.hypothesis}
                </p>
              </div>
            </div>
          </section>

          {/* The Creative */}
          <section className="border-t border-slate-200 pt-8">
            <h2 className="font-editorial text-2xl font-bold text-slate-950 mb-4 tracking-tight">
              The Creative &amp; Visual Style
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div className="p-4 rounded-md bg-slate-50 border border-slate-200">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1">
                  Format
                </span>
                <p className="text-xs sm:text-sm text-slate-900 font-medium">
                  {item.theCreative.format}
                </p>
              </div>
              <div className="p-4 rounded-md bg-slate-50 border border-slate-200">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1">
                  Visual Aesthetic
                </span>
                <p className="text-xs sm:text-sm text-slate-900 font-medium">
                  {item.theCreative.visualStyle}
                </p>
              </div>
            </div>
            <p className="text-sm text-slate-700 leading-relaxed">
              {item.theCreative.breakdown}
            </p>
          </section>

          {/* The Offer & The CTA */}
          <section className="border-t border-slate-200 pt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-lg bg-[#FAFAFA] border border-slate-200">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
                The Offer Architecture
              </span>
              <p className="text-sm text-slate-800 leading-relaxed font-medium">
                {item.theOffer}
              </p>
            </div>

            <div className="p-6 rounded-lg bg-[#FAFAFA] border border-slate-200">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
                The Call to Action (CTA)
              </span>
              <p className="text-base text-slate-950 font-bold leading-relaxed mb-2">
                {item.theCta}
              </p>
              <span className="text-xs text-slate-500">
                Aligned directly with low-commitment entry rather than aggressive hard-selling.
              </span>
            </div>
          </section>

          {/* The Copy */}
          <section className="border-t border-slate-200 pt-8">
            <h2 className="font-editorial text-2xl font-bold text-slate-950 mb-4 tracking-tight">
              The Ad Copy &amp; Messaging
            </h2>
            <div className="p-6 rounded-lg bg-slate-50 border border-slate-200 mb-4">
              <div className="mb-3">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
                  Headline Copy
                </span>
                <p className="text-base font-bold text-slate-950">
                  "{item.theCopy.headline}"
                </p>
              </div>
              <div className="mb-4">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
                  Primary Text / Body
                </span>
                <p className="text-sm text-slate-700 italic">
                  "{item.theCopy.body}"
                </p>
              </div>
              <div className="pt-3 border-t border-slate-200">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-600 block mb-1">
                  Copy Analysis
                </span>
                <p className="text-xs text-slate-700 leading-relaxed">
                  {item.theCopy.breakdown}
                </p>
              </div>
            </div>
          </section>

          {/* The Psychology & Funnel */}
          <section className="border-t border-slate-200 pt-8">
            <h2 className="font-editorial text-2xl font-bold text-slate-950 mb-4 tracking-tight">
              Customer Psychology &amp; Funnel Mechanics
            </h2>

            <div className="mb-6">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-700 mb-3">
                Psychological Triggers In Play
              </h3>
              <ul className="space-y-2">
                {item.thePsychology.map((trig, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-slate-900 shrink-0 mt-0.5" />
                    <span>{trig}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-5 rounded-lg bg-slate-50 border border-slate-200">
              <div className="flex items-center gap-2 mb-2 text-slate-900 font-semibold text-xs uppercase tracking-wider">
                <Layers className="w-4 h-4 text-slate-700" />
                <span>Observed Full Funnel Sequence</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-mono">
                {item.theFunnel}
              </p>
            </div>
          </section>

          {/* Why I Think It Works */}
          <section className="border-t border-slate-200 pt-8">
            <h2 className="font-editorial text-2xl font-bold text-slate-950 mb-3 tracking-tight">
              Why I Think It Works
            </h2>
            <p className="text-slate-700 leading-relaxed text-base sm:text-lg">
              {item.whyIThinkItWorks}
            </p>
          </section>

          {/* What Growing Businesses Can Learn */}
          <section className="p-8 rounded-lg bg-[#FAFAFA] border border-slate-200">
            <div className="flex items-center gap-2 mb-4">
              <Zap className="w-5 h-5 text-amber-600" />
              <h2 className="font-editorial text-2xl font-bold text-slate-950 tracking-tight">
                What Growing Businesses Can Learn
              </h2>
            </div>
            <ul className="space-y-3">
              {item.whatGrowingBusinessesCanLearn.map((lesson, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-slate-800 font-medium">
                  <span className="w-5 h-5 rounded-full bg-slate-900 text-white text-xs flex items-center justify-center shrink-0 mt-0.5 font-sans">
                    {idx + 1}
                  </span>
                  <span>{lesson}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* My Verdict */}
          <section className="p-8 rounded-lg bg-slate-900 text-white border border-slate-800">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400 block mb-2">
              Strategic Summary
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-white mb-3 tracking-tight">
              My Verdict
            </h2>
            <p className="text-slate-200 text-base sm:text-lg leading-relaxed font-normal">
              {item.myVerdict}
            </p>
          </section>
        </div>

        {/* Section 15 Requirement: Article Bottom CTA */}
        <ArticleCta onNavigate={onNavigate} />

        {/* Related Breakdowns */}
        <div className="pt-12 border-t border-slate-200">
          <h3 className="font-editorial text-xl font-bold text-slate-950 mb-6">
            Other Public Ad Breakdowns
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {related.map((rel) => (
              <div
                key={rel.id}
                className="p-6 rounded-lg border border-slate-200 bg-[#FAFAFA] hover:border-slate-400 transition-colors flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-bold text-slate-950 mb-1 block">
                    {rel.brandName} • <span className="text-slate-500 font-normal">{rel.industry}</span>
                  </span>
                  <h4 className="font-editorial text-lg font-bold text-slate-950 mb-2 leading-snug">
                    {rel.title}
                  </h4>
                  <p className="text-xs text-slate-600 line-clamp-2">
                    {rel.shortDescription}
                  </p>
                </div>
                <button
                  onClick={() => {
                    onNavigate('ads-breakdown-detail', rel.id);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="mt-4 text-xs font-semibold text-slate-950 hover:underline text-left cursor-pointer"
                >
                  Read Breakdown →
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
};

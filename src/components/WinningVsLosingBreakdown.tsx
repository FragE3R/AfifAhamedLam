import React, { useState } from 'react';
import { PageView, AdsBreakdownArticle } from '../types';
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  XCircle,
  TrendingUp,
  Clock,
  Calendar,
  Mail,
  Eye,
  Sparkles
} from 'lucide-react';

interface WinningVsLosingBreakdownProps {
  article: AdsBreakdownArticle;
  onNavigate: (page: PageView, id?: string) => void;
  isStandalonePage?: boolean;
}

export const WinningVsLosingBreakdown: React.FC<WinningVsLosingBreakdownProps> = ({
  article,
  onNavigate,
  isStandalonePage = false,
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'winner' | 'loser'>('all');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const comp = article.comparisonData;

  return (
    <div className="bg-white">
      {/* Lightbox Modal for Screenshots */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center p-4 backdrop-blur-xs cursor-pointer animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] bg-slate-900 rounded-xl overflow-hidden shadow-2xl p-2 border border-slate-700">
            <img
              src={selectedImage}
              alt="Ad Breakdown Screenshot Preview"
              className="max-h-[80vh] w-auto mx-auto object-contain rounded"
            />
            <p className="text-center text-xs text-slate-300 pt-2 font-mono">
              Click anywhere to close
            </p>
          </div>
        </div>
      )}

      {/* Top Banner Navigation if standalone */}
      {isStandalonePage && (
        <div className="border-b border-slate-200 bg-slate-50/70 sticky top-20 z-30 backdrop-blur-md">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
            <button
              onClick={() => {
                onNavigate('ads-breakdown');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-slate-950 transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to All Breakdowns</span>
            </button>
            <div className="flex items-center gap-2">
              <div className="hidden sm:flex items-center gap-1 bg-slate-200/70 p-1 rounded-lg text-xs font-medium">
                <button
                  onClick={() => onNavigate('ads-breakdown-detail', 'ab-7')}
                  className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${
                    article.id === 'ab-7' ? 'bg-slate-950 text-white font-bold' : 'text-slate-700 hover:text-slate-950'
                  }`}
                >
                  Day 3 (Haier)
                </button>
                <button
                  onClick={() => onNavigate('ads-breakdown-detail', 'ab-6')}
                  className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${
                    article.id === 'ab-6' ? 'bg-slate-950 text-white font-bold' : 'text-slate-700 hover:text-slate-950'
                  }`}
                >
                  Day 2 (Fabrilife)
                </button>
                <button
                  onClick={() => onNavigate('ads-breakdown-detail', 'ab-5')}
                  className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${
                    article.id === 'ab-5' ? 'bg-slate-950 text-white font-bold' : 'text-slate-700 hover:text-slate-950'
                  }`}
                >
                  Day 1 (Ridge)
                </button>
              </div>
              <a
                href="mailto:AhamedAfif87@gmail.com?subject=Creative%20Audit%20Inquiry"
                className="inline-flex items-center gap-1 text-xs font-semibold px-3 py-1 bg-slate-950 text-white rounded hover:bg-slate-800 transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Request Creative Audit</span>
              </a>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        {/* Header Section */}
        <header className="mb-12 border-b border-slate-200 pb-10">
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono font-semibold tracking-wider uppercase text-slate-500 mb-3">
            <span className="text-slate-900 font-bold">AFIF AHAMED</span>
            <span>|</span>
            <span className="text-emerald-700 font-bold">
              DAY {article.dayNumber || 1} - {article.industry.toUpperCase()}
            </span>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200/80 text-xs font-semibold uppercase tracking-wider mb-4">
            <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
            <span>Winning vs Losing Ad Breakdown • Day {article.dayNumber || 1}</span>
          </div>

          <h1 className="font-editorial text-3xl sm:text-5xl font-bold tracking-tight text-slate-950 leading-[1.15] mb-4">
            {article.title}
          </h1>

          <p className="text-base sm:text-lg text-slate-700 font-normal leading-relaxed mb-6">
            {article.shortDescription}
          </p>

          <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 font-medium mb-6">
            <span className="px-2.5 py-1 rounded bg-slate-100 text-slate-900 font-semibold">
              {article.industry}
            </span>
            <span className="px-2.5 py-1 rounded bg-slate-100 text-slate-700 font-medium">
              {comp?.winnerBrand} vs {comp?.loserBrand}
            </span>
            <span className="flex items-center gap-1 text-slate-600">
              <Calendar className="w-3.5 h-3.5" />
              {article.date}
            </span>
            <span className="flex items-center gap-1 text-slate-600">
              <Clock className="w-3.5 h-3.5" />
              {article.readingTime}
            </span>
          </div>

          {/* Goal of visuals & quick contact callout */}
          <div className="p-4 sm:p-5 rounded-xl bg-gradient-to-r from-slate-900 to-slate-800 text-white shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-[11px] font-mono uppercase tracking-widest text-emerald-400 font-bold block">
                Strategic Campaign Blueprint
              </span>
              <p className="text-sm text-slate-200 leading-snug font-normal">
                Zero fluff, pure conversion anatomy: spot the psychological trigger that wins the feed, examine verified proof, and steal the playbook to scale profitable ROAS.
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0 text-xs font-mono">
              <a
                href="mailto:AhamedAfif87@gmail.com"
                className="px-3.5 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold transition-colors inline-flex items-center gap-1.5"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>AhamedAfif87@gmail.com</span>
              </a>
            </div>
          </div>
        </header>

        {/* SECTION 1: The Two Ads - Companies + Exact Links */}
        <section className="mb-14 scroll-mt-28" id="companies-and-links">
          <div className="flex items-center gap-2 mb-6">
            <span className="w-7 h-7 rounded-lg bg-slate-900 text-white text-xs font-bold font-mono flex items-center justify-center">
              1
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-slate-950 tracking-tight">
              The 2 Brands — Exact Products &amp; Links
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
            {/* Winner Card */}
            <div className="p-6 rounded-xl border-2 border-emerald-500/40 bg-emerald-50/20 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2.5 py-0.5 rounded text-xs font-bold uppercase tracking-wider bg-emerald-600 text-white inline-flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    WINNER
                  </span>
                  <span className="text-xs font-mono font-semibold text-emerald-800">
                    Proven Creative Angle
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-950 mb-1">
                  {comp?.winnerBrand}
                </h3>
                <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                  {comp?.winnerTagline}
                </p>

                <div className="space-y-2 pt-2 border-t border-emerald-200/60 text-xs">
                  {comp?.winnerLinks.store && (
                    <div className="flex items-center justify-between py-1 border-b border-emerald-100">
                      <span className="text-slate-600 font-medium">Product / Market Reference:</span>
                      <a
                        href={comp.winnerLinks.store}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-700 hover:text-emerald-900 font-semibold inline-flex items-center gap-1 truncate max-w-[200px]"
                      >
                        <span>View Guide / Source</span>
                        <ArrowUpRight className="w-3 h-3 shrink-0" />
                      </a>
                    </div>
                  )}
                  {comp?.winnerLinks.adLibraryAll && (
                    <div className="flex items-center justify-between py-1 border-b border-emerald-100">
                      <span className="text-slate-600 font-medium">Post Proof 1 (Angle):</span>
                      <a
                        href={comp.winnerLinks.adLibraryAll}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-700 hover:text-emerald-900 font-semibold inline-flex items-center gap-1 truncate max-w-[200px]"
                      >
                        <span>Verified Creative Post 1</span>
                        <ArrowUpRight className="w-3 h-3 shrink-0" />
                      </a>
                    </div>
                  )}
                  {comp?.winnerLinks.adLibraryActive && (
                    <div className="flex items-center justify-between py-1 border-b border-emerald-100">
                      <span className="text-slate-600 font-medium">Post Proof 2 (Price &amp; Offer):</span>
                      <a
                        href={comp.winnerLinks.adLibraryActive}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-700 hover:text-emerald-900 font-semibold inline-flex items-center gap-1 truncate max-w-[200px]"
                      >
                        <span>Verified Creative Post 2</span>
                        <ArrowUpRight className="w-3 h-3 shrink-0" />
                      </a>
                    </div>
                  )}
                  {comp?.winnerLinks.igHookReel && (
                    <div className="flex items-center justify-between py-1 border-b border-emerald-100">
                      <span className="text-slate-600 font-medium">Post Proof 3 (Confidence):</span>
                      <a
                        href={comp.winnerLinks.igHookReel}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-700 hover:text-emerald-900 font-semibold inline-flex items-center gap-1 truncate max-w-[200px]"
                      >
                        <span>Verified Creative Post 3</span>
                        <ArrowUpRight className="w-3 h-3 shrink-0" />
                      </a>
                    </div>
                  )}
                  {comp?.winnerLinks.brandData && (
                    <div className="flex items-center justify-between py-1">
                      <span className="text-slate-600 font-medium">Market Demand Context:</span>
                      <a
                        href={comp.winnerLinks.brandData}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-700 hover:text-emerald-900 font-semibold inline-flex items-center gap-1 truncate max-w-[200px]"
                      >
                        <span>Winter Category Spike</span>
                        <ArrowUpRight className="w-3 h-3 shrink-0" />
                      </a>
                    </div>
                  )}
                </div>
              </div>

              <div className="mt-5 p-3 rounded-lg bg-emerald-100/60 text-emerald-950 text-xs">
                <strong>Why It Wins:</strong> {article.theHook.analysis || 'Sells human emotion, warmth without weight, and context in 2 seconds instead of treating paid social as a passive catalog.'}
              </div>
            </div>

            {/* Loser Card */}
            <div className="p-6 rounded-xl border-2 border-rose-300/60 bg-rose-50/20 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2.5 py-0.5 rounded text-xs font-bold uppercase tracking-wider bg-rose-600 text-white inline-flex items-center gap-1">
                    <XCircle className="w-3.5 h-3.5" />
                    LOSER PATTERN
                  </span>
                  <span className="text-xs font-mono font-semibold text-rose-800">
                    High Friction / Conversion Leak
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-950 mb-1">
                  {comp?.loserBrand}
                </h3>
                <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                  {comp?.loserTagline}
                </p>

                <div className="space-y-2 pt-2 border-t border-rose-200/60 text-xs">
                  {comp?.loserLinks.findLoserUrl && (
                    <div className="flex items-center justify-between py-1 border-b border-rose-100">
                      <span className="text-slate-600 font-medium">Reference Creative:</span>
                      <a
                        href={comp.loserLinks.findLoserUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-rose-700 hover:text-rose-900 font-semibold inline-flex items-center gap-1 truncate max-w-[200px]"
                      >
                        <span>View Catalog Video Post</span>
                        <ArrowUpRight className="w-3 h-3 shrink-0" />
                      </a>
                    </div>
                  )}
                  {comp?.loserLinks.selectionTip && (
                    <div className="py-2 text-[11px] text-slate-600 leading-relaxed bg-white/70 p-2.5 rounded border border-rose-200">
                      <strong className="text-rose-900 block mb-0.5">Audit Insight:</strong>
                      {comp.loserLinks.selectionTip}
                    </div>
                  )}
                </div>
              </div>

              <div className="mt-5 p-3 rounded-lg bg-rose-100/60 text-rose-950 text-xs">
                <strong>Failure Mechanism:</strong> {comp?.loserAnalysis?.hookWhyLoses || article.theHook.hypothesis || 'No human model, sterile product catalog on gradient, and failure to address primary customer fear.'}
              </div>
            </div>
          </div>

          <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-500 font-mono">
            <strong>Analytical note:</strong> This compares publicly observable creative + landing patterns. Price, fabric, and run context are observable. ROAS/CTR numbers are hypotheses marked as such. No private dashboard data claimed.
          </div>
        </section>

        {/* SECTION 2: Screenshot Map */}
        <section className="mb-14 scroll-mt-28" id="screenshot-map">
          <div className="flex items-center justify-end mb-6">
            <div className="flex items-center gap-1.5 text-xs font-medium">
              <button
                onClick={() => setActiveTab('all')}
                className={`px-2.5 py-1 rounded transition-colors ${
                  activeTab === 'all' ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                All ({comp?.screenshots.length || 0})
              </button>
              <button
                onClick={() => setActiveTab('winner')}
                className={`px-2.5 py-1 rounded transition-colors ${
                  activeTab === 'winner' ? 'bg-emerald-700 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                Winner Proof
              </button>
              <button
                onClick={() => setActiveTab('loser')}
                className={`px-2.5 py-1 rounded transition-colors ${
                  activeTab === 'loser' ? 'bg-rose-700 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                Loser Leaks
              </button>
            </div>
          </div>

          <p className="text-sm text-slate-600 mb-8 leading-relaxed max-w-3xl">
            Below are the verified campaign captures annotated with exact video timestamps, creative agitation mechanisms, and conversion funnel leak points. Click any screenshot for high-resolution inspection.
          </p>

          <div className="space-y-8">
            {comp?.screenshots
              .filter((shot) => activeTab === 'all' || shot.role === activeTab)
              .map((shot) => {
                const isWin = shot.role === 'winner';
                return (
                  <div
                    key={shot.id}
                    className={`rounded-xl border overflow-hidden transition-all ${
                      isWin ? 'border-emerald-200 bg-white hover:border-emerald-400' : 'border-rose-200 bg-white hover:border-rose-400'
                    } shadow-xs`}
                  >
                    {/* Placeholder header indicator as requested in prompt */}
                    <div
                      className={`px-4 py-2.5 flex flex-wrap items-center justify-between gap-2 border-b text-xs font-mono ${
                        isWin ? 'bg-emerald-50/80 border-emerald-200 text-emerald-950' : 'bg-rose-50/80 border-rose-200 text-rose-950'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span className="font-bold px-2 py-0.5 rounded bg-white border border-current text-[11px]">
                          [SCREENSHOT]
                        </span>
                        <span className="font-bold">{shot.title}</span>
                      </div>
                      <div className="flex items-center gap-3 text-[11px] text-slate-600">
                        {shot.sourcePath && <span>Source: {shot.sourcePath}</span>}
                        <span
                          className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider text-white ${
                            isWin ? 'bg-emerald-600' : 'bg-rose-600'
                          }`}
                        >
                          {shot.role}
                        </span>
                      </div>
                    </div>

                    <div className="p-4 sm:p-6 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                      {/* Image Frame */}
                      <div
                        className={`md:col-span-7 relative group cursor-pointer rounded-lg overflow-hidden border ${
                          isWin ? 'border-emerald-100 bg-slate-950' : 'border-rose-100 bg-slate-900'
                        }`}
                        onClick={() => setSelectedImage(shot.src)}
                      >
                        <img
                          src={shot.src}
                          alt={`${shot.title} - ${shot.caption}`}
                          className="w-full max-h-[380px] object-contain mx-auto group-hover:scale-[1.02] transition-transform duration-300"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-semibold gap-1.5 backdrop-blur-2xs">
                          <Eye className="w-4 h-4" />
                          <span>Expand Evidence</span>
                        </div>
                      </div>

                      {/* Analysis Column */}
                      <div className="md:col-span-5 space-y-3">
                        <div className="inline-block px-2 py-0.5 rounded text-[11px] font-mono font-semibold bg-slate-100 text-slate-700">
                          Creative Analysis &amp; Annotation
                        </div>
                        <h4 className="font-editorial text-xl font-bold text-slate-950">
                          {shot.caption}
                        </h4>

                        <div className="text-xs text-slate-600 space-y-2 leading-relaxed">
                          <p>
                            <strong>Visual Observation:</strong> {shot.title} demonstrates how consumers process the creative before reading the caption or price tag.
                          </p>
                          <p>
                            <strong>Performance Impact:</strong> {isWin ? 'Pre-handles return reasons, builds tactile trust, and hooks high-intent buyers.' : 'Forces the user into high mental friction, creates message mismatch, and burns cold ad spend.'}
                          </p>
                        </div>

                        <div className="pt-2 text-[11px] font-mono text-slate-500 border-t border-slate-100 flex items-center justify-between">
                          <span>Ref: #{shot.id.toUpperCase()}</span>
                          <span className="text-emerald-700 font-semibold cursor-pointer" onClick={() => setSelectedImage(shot.src)}>
                            Enlarge +
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </section>

        {/* SECTION 3: Visual Story - Creative Score (Render as bars) */}
        <section className="mb-14 scroll-mt-28" id="creative-scores">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-7 h-7 rounded-lg bg-slate-900 text-white text-xs font-bold font-mono flex items-center justify-center">
              3
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-slate-950 tracking-tight">
              Visual Story — Creative Scores (Rendered as Bars)
            </h2>
          </div>

          <p className="text-sm text-slate-600 mb-6 leading-relaxed">
            Rendered as 4 horizontal bar pairs (<strong>Green = {comp?.winnerBrand}</strong> vs <strong>Red = {comp?.loserBrand}</strong>). Founders get it in 10 seconds.
          </p>

          <div className="p-6 sm:p-8 rounded-xl bg-slate-900 text-white border border-slate-800 shadow-md space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div>
                <span className="text-xs font-mono uppercase text-emerald-400 font-bold tracking-widest block">
                  Diagnostic Creative Framework
                </span>
                <h3 className="text-lg font-bold text-white mt-0.5">
                  {comp?.winnerBrand} vs {comp?.loserBrand}
                </h3>
              </div>
              <div className="flex items-center gap-4 text-xs font-mono">
                <span className="inline-flex items-center gap-1.5 text-emerald-400 font-semibold">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                  Winner
                </span>
                <span className="inline-flex items-center gap-1.5 text-rose-400 font-semibold">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span>
                  Loser Pattern
                </span>
              </div>
            </div>

            <div className="space-y-6">
              {comp?.scores.map((score, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex items-center justify-between text-xs font-semibold">
                    <span className="text-slate-200 tracking-wide font-sans">{score.category}</span>
                    <div className="flex items-center gap-3 font-mono">
                      <span className="text-emerald-400 font-bold">WIN: {score.winnerScore}/10</span>
                      <span className="text-slate-600">|</span>
                      <span className="text-rose-400 font-bold">LOSE: {score.loserScore}/10</span>
                    </div>
                  </div>

                  {/* Dual Bar Pair */}
                  <div className="space-y-1.5">
                    {/* Winner Bar */}
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono text-slate-400 w-24 text-right truncate">
                        {comp.winnerBrand.split(' ')[0]}:
                      </span>
                      <div className="h-6 flex-1 bg-slate-800 rounded-md overflow-hidden relative">
                        <div
                          className="h-full bg-gradient-to-r from-emerald-600 to-teal-400 rounded-md flex items-center justify-end pr-2.5 transition-all duration-500"
                          style={{ width: `${score.winnerScore * 10}%` }}
                        >
                          <span className="text-[11px] font-mono font-bold text-slate-950">
                            {score.winnerScore}/10
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Loser Bar */}
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono text-slate-400 w-24 text-right truncate">
                        {comp.loserBrand.split(' ')[0]}:
                      </span>
                      <div className="h-6 flex-1 bg-slate-800 rounded-md overflow-hidden relative">
                        <div
                          className="h-full bg-gradient-to-r from-rose-600 to-red-500 rounded-md flex items-center justify-end pr-2.5 transition-all duration-500"
                          style={{ width: `${score.loserScore * 10}%` }}
                        >
                          <span className="text-[11px] font-mono font-bold text-white">
                            {score.loserScore}/10
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-slate-400 font-mono">
              <span>Audited by Afif Ahamed • Performance Media Buying</span>
              <a
                href="mailto:AhamedAfif87@gmail.com?subject=Creative%20Score%20Audit"
                className="text-emerald-400 hover:text-emerald-300 font-semibold underline"
              >
                Want your creative scored like this? Email me →
              </a>
            </div>
          </div>
        </section>

        {/* SECTION 4: Full Breakdown Copy */}
        <section className="mb-14 scroll-mt-28" id="full-breakdown-copy">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-7 h-7 rounded-lg bg-slate-900 text-white text-xs font-bold font-mono flex items-center justify-center">
              4
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-slate-950 tracking-tight">
              Full Breakdown Copy &amp; Observable vs. Inference
            </h2>
          </div>

          <div className="space-y-6">
            {/* TL;DR Box */}
            <div className="p-6 rounded-xl bg-slate-50 border-l-4 border-slate-900 border border-slate-200">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1">
                TL;DR Strategic Summary
              </span>
              <p className="text-base text-slate-900 font-medium leading-relaxed">
                {article.whyIThinkItWorks}
              </p>
            </div>

            {/* Winner Deep Dive */}
            <div className="p-6 sm:p-8 rounded-xl border border-emerald-200 bg-white shadow-2xs space-y-6">
              <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm uppercase tracking-wider pb-3 border-b border-emerald-100">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>The Winner Playbook: {comp?.winnerBrand}</span>
              </div>

              <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
                <div className="p-4 rounded-lg bg-emerald-50/50 border border-emerald-200/60">
                  <h4 className="font-bold text-slate-950 text-sm mb-1">
                    WINNER HOOK (observable):
                  </h4>
                  <p className="text-slate-800 mb-2">
                    {article.theHook.observable}
                  </p>
                  <p className="text-emerald-950 font-medium">
                    {article.theHook.analysis} <em>{article.theHook.hypothesis}</em>
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-slate-50 border border-slate-200">
                  <h4 className="font-bold text-slate-950 text-sm mb-1">
                    WINNER CREATIVE (3 beats):
                  </h4>
                  <p className="text-slate-700">
                    {article.theCreative.breakdown}
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-slate-50 border border-slate-200">
                  <h4 className="font-bold text-slate-950 text-sm mb-1">
                    WINNER OFFER / COPY / CTA:
                  </h4>
                  <p className="text-slate-700 mb-2">
                    <strong>Headline:</strong> {article.theCopy.headline} <br />
                    <strong>Body / CTA:</strong> {article.theCopy.body}
                  </p>
                  <div className="pt-2 text-xs text-slate-800">
                    <strong>Psychology in Play:</strong>
                    <ul className="mt-1 list-disc list-inside space-y-1">
                      {article.thePsychology.map((p, i) => (
                        <li key={i}>{p}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-slate-50 border border-slate-200">
                  <h4 className="font-bold text-slate-950 text-sm mb-1">
                    OBSERVED FUNNEL &amp; UNIT ECONOMICS:
                  </h4>
                  <p className="text-slate-700 font-mono text-xs">
                    {article.theFunnel}
                  </p>
                </div>
              </div>
            </div>

            {/* Loser Deep Dive */}
            <div className="p-6 sm:p-8 rounded-xl border border-rose-200 bg-white shadow-2xs space-y-6">
              <div className="flex items-center gap-2 text-rose-800 font-bold text-sm uppercase tracking-wider pb-3 border-b border-rose-100">
                <XCircle className="w-4 h-4 text-rose-600" />
                <span>The Loser Playbook: {comp?.loserBrand} Failure Pattern</span>
              </div>

              <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
                <div className="p-4 rounded-lg bg-rose-50/50 border border-rose-200/60">
                  <h4 className="font-bold text-slate-950 text-sm mb-1">
                    LOSER HOOK (observable):
                  </h4>
                  <p className="text-slate-800 mb-2">
                    {comp?.loserAnalysis?.hookObservable || "Ghost-mannequin / sterile product on blank gradient background with generic slogan."}
                  </p>
                  <p className="text-rose-950 font-medium">
                    <strong>WHY IT LOSES:</strong> {comp?.loserAnalysis?.hookWhyLoses || "No human context = no emotional urgency, generic claim = no recall. Hypothesis: thumb-stop <18%."}
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-slate-50 border border-slate-200">
                  <h4 className="font-bold text-slate-950 text-sm mb-1">
                    LOSER COPY / CTA:
                  </h4>
                  <p className="text-slate-700 mb-2">
                    {comp?.loserAnalysis?.copyCtaObservable || "Discount or feature claims with generic hotline/collection CTA."}
                  </p>
                  <p className="text-slate-800 text-xs">
                    <strong>WHY IT LOSES:</strong> {comp?.loserAnalysis?.copyCtaWhyLoses || "Choice overload, absence of safety/quality proof, and friction-heavy buying journey."}
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-rose-100/50 border border-rose-200 text-rose-950 text-xs leading-relaxed">
                  <strong>BD-SPECIFIC FRICTION &amp; MEDIA BUYER TAKEAWAY:</strong> {comp?.loserAnalysis?.frictionTakeaway || "In Bangladesh e-commerce, ad creative must pre-handle trust and return objections before the order is placed."}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: Side-by-side Table (Render as table on site) */}
        <section className="mb-14 scroll-mt-28" id="comparison-table">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-7 h-7 rounded-lg bg-slate-900 text-white text-xs font-bold font-mono flex items-center justify-center">
              5
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-slate-950 tracking-tight">
              Side-by-Side Comparison Table
            </h2>
          </div>

          <p className="text-sm text-slate-600 mb-6 leading-relaxed">
            Direct parameter-by-parameter analysis showing why algorithms distribute one creative to high-intent buyers while choking the other.
          </p>

          <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-2xs bg-white">
            <table className="min-w-full divide-y divide-slate-200 text-sm text-left">
              <thead>
                <tr className="bg-slate-900 text-white divide-x divide-slate-800">
                  <th scope="col" className="px-4 py-3.5 font-bold font-mono text-xs uppercase tracking-wider w-1/4">
                    Element
                  </th>
                  <th scope="col" className="px-4 py-3.5 font-bold font-mono text-xs uppercase tracking-wider text-emerald-400 w-3/8">
                    {comp?.winnerBrand} (WIN)
                  </th>
                  <th scope="col" className="px-4 py-3.5 font-bold font-mono text-xs uppercase tracking-wider text-rose-400 w-3/8">
                    {comp?.loserBrand} (LOSE PATTERN)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                {comp?.sideBySideTable.map((row, idx) => (
                  <tr
                    key={idx}
                    className={`divide-x divide-slate-100 hover:bg-slate-50/70 transition-colors ${
                      idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/30'
                    }`}
                  >
                    <td className="px-4 py-3 font-semibold text-slate-950 text-xs sm:text-sm font-sans bg-slate-50/50">
                      {row.element}
                    </td>
                    <td className="px-4 py-3 text-emerald-950 font-medium text-xs sm:text-sm bg-emerald-50/15">
                      {row.winner}
                    </td>
                    <td className="px-4 py-3 text-rose-950 font-normal text-xs sm:text-sm bg-rose-50/15">
                      {row.loser}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* SECTION 6: 48-Hour Fix Plan */}
        <section className="mb-14 scroll-mt-28" id="fix-plan">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-7 h-7 rounded-lg bg-slate-900 text-white text-xs font-bold font-mono flex items-center justify-center">
              6
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-slate-950 tracking-tight">
              {comp?.fixPlan.title}
            </h2>
          </div>

          <div className="p-6 sm:p-8 rounded-xl bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-950 text-white shadow-lg space-y-6 border border-emerald-900/50">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold block mb-1">
                Turnaround Protocol for Failing Apparel Creatives
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                How to Salvage a Dying Ad in 48 Hours
              </h3>
            </div>

            <ul className="space-y-4">
              {comp?.fixPlan.points.map((pt, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-slate-200">
                  <span className="w-6 h-6 rounded-md bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 font-mono font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span className="leading-relaxed">{pt}</span>
                </li>
              ))}
            </ul>

            <div className="p-4 rounded-lg bg-emerald-950/80 border border-emerald-500/40 text-emerald-200 text-sm leading-relaxed font-mono">
              <strong className="text-white block font-sans text-xs uppercase tracking-wider mb-1">
                Expected Lift Hypothesis:
              </strong>
              {comp?.fixPlan.hypothesis}
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-slate-800">
              <p className="text-xs text-slate-400">
                Need this turnaround applied to your BD e-commerce ad accounts? Let's audit your assets.
              </p>
              <a
                href="mailto:AhamedAfif87@gmail.com?subject=48-Hour%20Ad%20Creative%20Audit"
                className="px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs transition-colors shrink-0"
              >
                Book 48-Hour Ad Audit
              </a>
            </div>
          </div>
        </section>

        {/* SECTION 7: Client CTA (Work With Me) */}
        <section className="scroll-mt-28" id="client-cta">
          <div className="p-8 sm:p-10 rounded-2xl bg-slate-950 text-white border-2 border-emerald-500/50 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="relative z-10 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-mono font-bold uppercase tracking-wider border border-emerald-500/30">
                <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                <span>Performance Media Buying • Creative Strategy</span>
              </div>

              <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
                Stop Letting Your Creative Die in 7 Days.
              </h2>

              <p className="text-base sm:text-lg text-slate-200 max-w-2xl leading-relaxed">
                {comp?.clientCta?.pitch ||
                  'I audit BD winter creatives for COD returns, not just CTR. If your hoodie/jacket ad dies after 7 days, I tell you why in one teardown.'}
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href={`mailto:${comp?.clientCta?.email || 'AhamedAfif87@gmail.com'}?subject=Creative%20Audit%20Inquiry`}
                  className="px-6 py-3.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm transition-all shadow-md inline-flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  <span>Email: {comp?.clientCta?.email || 'AhamedAfif87@gmail.com'}</span>
                </a>

                <button
                  onClick={() => {
                    onNavigate('contact');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="px-6 py-3.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm transition-all border border-slate-700 inline-flex items-center gap-2 cursor-pointer"
                >
                  <span>Work With Me</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>

              <div className="pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-slate-400 font-mono">
                <div>
                  <strong className="text-emerald-400 font-sans">Next Breakdown:</strong>{' '}
                  {comp?.clientCta?.nextBreakdown || 'Vaseline vs Meril winter lotion? Tell me niche.'}
                </div>
                <div className="text-[11px] text-slate-500 italic">
                  Workflow: PDF -&gt; you publish blog -&gt; you approve LinkedIn draft -&gt; I post with blog link + first comment. No auto-post.
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { PageView, AdsBreakdownArticle } from '../types';
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  XCircle,
  Copy,
  Check,
  TrendingUp,
  AlertTriangle,
  Lightbulb,
  Layers,
  Sparkles,
  ExternalLink,
  Target,
  Clock,
  Calendar,
  Share2,
  Mail,
  Zap,
  BarChart3,
  HelpCircle,
  Eye,
  Info
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
  const [copiedLinkedIn, setCopiedLinkedIn] = useState(false);
  const [activeTab, setActiveTab] = useState<'all' | 'winner' | 'loser'>('all');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const comp = article.comparisonData;

  const handleCopyLinkedIn = () => {
    if (!comp?.linkedInHook) return;
    const fullText = `${comp.linkedInHook.postText}\n\nFirst comment:\n${comp.linkedInHook.firstComment}`;
    navigator.clipboard.writeText(fullText);
    setCopiedLinkedIn(true);
    setTimeout(() => setCopiedLinkedIn(false), 2500);
  };

  return (
    <div className="bg-white">
      {/* Lightbox Modal for Screenshots */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 backdrop-blur-xs cursor-pointer animate-in fade-in duration-200"
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
        <div className="border-b border-slate-200 bg-slate-50/60 sticky top-20 z-30">
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
              <span className="text-[11px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 font-semibold">
                Day 1 Breakdown
              </span>
              <a
                href="mailto:AhamedAfif87@gmail.com?subject=Growth%20Audit%20Inquiry%20from%20Ads%20Breakdown"
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
            <span className="text-emerald-700 font-bold">MEDIA BUYER & MARKETING STRATEGIST</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200/80 text-xs font-semibold uppercase tracking-wider mb-4">
            <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
            <span>Winning vs Losing Ad Breakdown • Day 1</span>
          </div>

          <h1 className="font-editorial text-3xl sm:text-5xl font-bold tracking-tight text-slate-950 leading-[1.15] mb-5">
            Day 1: Why 'Stop Sitting On This Brick' Scales and 'Premium Quality - 20% OFF' Dies in 7 Days
          </h1>

          <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 font-medium mb-6">
            <span className="px-2.5 py-1 rounded bg-slate-100 text-slate-900 font-semibold">
              DTC / Ecom - Wallets
            </span>
            <span className="px-2.5 py-1 rounded bg-slate-100 text-slate-700">
              Meta + TikTok Ads
            </span>
            <span className="flex items-center gap-1 text-slate-600">
              <Calendar className="w-3.5 h-3.5" />
              November 04, 2026
            </span>
            <span className="flex items-center gap-1 text-slate-600">
              <Clock className="w-3.5 h-3.5" />
              7 min read
            </span>
          </div>

          {/* Goal of visuals & quick contact callout */}
          <div className="p-4 sm:p-5 rounded-xl bg-gradient-to-r from-slate-900 to-slate-800 text-white shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-[11px] font-mono uppercase tracking-widest text-emerald-400 font-bold block">
                Executive Premise &amp; Visual Intent
              </span>
              <p className="text-sm text-slate-200 leading-snug font-normal">
                A founder should understand in <strong>30 seconds</strong> why the winner wins, see proof, and know how to fix losing creative.
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
              The Two Ads — Companies &amp; Exact Links
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Winner Card */}
            <div className="p-6 rounded-xl border-2 border-emerald-500/40 bg-emerald-50/20 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2.5 py-0.5 rounded text-xs font-bold uppercase tracking-wider bg-emerald-600 text-white inline-flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    WINNER
                  </span>
                  <span className="text-xs font-mono font-semibold text-emerald-800">
                    5,689 active Meta ads
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-950 mb-1">
                  The Ridge (Ridge Wallet)
                </h3>
                <p className="text-xs text-slate-600 mb-4">
                  Real long-runner as of Nov 2026. Minimalist RFID wallet. This is your proof of <em>"what good looks like."</em>
                </p>

                <div className="space-y-2 pt-2 border-t border-emerald-200/60 text-xs">
                  <div className="flex items-center justify-between py-1 border-b border-emerald-100">
                    <span className="text-slate-600 font-medium">Official Store:</span>
                    <a
                      href={comp?.winnerLinks.store || 'https://ridge.com/'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-700 hover:text-emerald-900 font-semibold inline-flex items-center gap-1"
                    >
                      <span>ridge.com</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </div>
                  <div className="flex items-center justify-between py-1 border-b border-emerald-100">
                    <span className="text-slate-600 font-medium">Meta Ad Library (Active):</span>
                    <a
                      href={comp?.winnerLinks.adLibraryActive}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-700 hover:text-emerald-900 font-semibold inline-flex items-center gap-1 truncate max-w-[200px]"
                    >
                      <span>View 5,689 Active Ads</span>
                      <ArrowUpRight className="w-3 h-3 shrink-0" />
                    </a>
                  </div>
                  <div className="flex items-center justify-between py-1 border-b border-emerald-100">
                    <span className="text-slate-600 font-medium">Original IG Hook Reel:</span>
                    <a
                      href={comp?.winnerLinks.igHookReel}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-700 hover:text-emerald-900 font-semibold inline-flex items-center gap-1"
                    >
                      <span>"Stop sitting on a brick"</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </div>
                  <div className="flex items-center justify-between py-1">
                    <span className="text-slate-600 font-medium">Teardown &amp; Brand Intel:</span>
                    <a
                      href={comp?.winnerLinks.teardownRef}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-700 hover:text-emerald-900 font-semibold inline-flex items-center gap-1"
                    >
                      <span>SparkUGC Creative Audit</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-5 p-3 rounded-lg bg-emerald-100/60 text-emerald-950 text-xs">
                <strong>Longevity Proxy:</strong> 60+ days running across broad cold audiences indicates profitable unit economics and continuous ad spend.
              </div>
            </div>

            {/* Loser Card */}
            <div className="p-6 rounded-xl border-2 border-rose-300/60 bg-rose-50/20 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2.5 py-0.5 rounded text-xs font-bold uppercase tracking-wider bg-rose-600 text-white inline-flex items-center gap-1">
                    <XCircle className="w-3.5 h-3.5" />
                    LOSER
                  </span>
                  <span className="text-xs font-mono font-semibold text-rose-800">
                    Killed in &lt;7 days
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-950 mb-1">
                  Composite DTC Leather Wallet
                </h3>
                <p className="text-xs text-slate-600 mb-4">
                  No single brand named (composite). This shows the systematic <strong>PATTERN of losing</strong> (studio static + discount badge + Learn More to homepage) without disclosing a small shop's private ROAS.
                </p>

                <div className="space-y-2 pt-2 border-t border-rose-200/60 text-xs">
                  <div className="flex items-center justify-between py-1 border-b border-rose-100">
                    <span className="text-slate-600 font-medium">Meta Ad Library Search:</span>
                    <a
                      href={comp?.loserLinks.findLoserUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-rose-700 hover:text-rose-900 font-semibold inline-flex items-center gap-1 truncate max-w-[200px]"
                    >
                      <span>Ad Library: "leather wallet"</span>
                      <ArrowUpRight className="w-3 h-3 shrink-0" />
                    </a>
                  </div>
                  <div className="py-2 text-[11px] text-slate-600 leading-relaxed bg-white/70 p-2.5 rounded border border-rose-200">
                    <strong className="text-rose-900 block mb-0.5">How to spot losers in 2 mins:</strong>
                    Filter <em>Media Type = Image</em>, look for 1:1 studio wallet on gradient, text <em>"Premium Quality / Genuine Leather / 20% OFF"</em>, running &lt;7 days. That is your losing pattern.
                  </div>
                </div>
              </div>

              <div className="mt-5 p-3 rounded-lg bg-rose-100/60 text-rose-950 text-xs">
                <strong>Failure Mechanism:</strong> Zero thumb-stop, 4 features instead of 1 outcome, unmotivated discount, and fatal homepage bounce leak.
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: Screenshot Map - What to capture with [SCREENSHOT PLACEHOLDER] tags */}
        <section className="mb-14 scroll-mt-28" id="screenshot-map">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-slate-900 text-white text-xs font-bold font-mono flex items-center justify-center">
                2
              </span>
              <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-slate-950 tracking-tight">
                Screenshot Map &amp; Visual Evidence
              </h2>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-medium">
              <button
                onClick={() => setActiveTab('all')}
                className={`px-2.5 py-1 rounded transition-colors ${
                  activeTab === 'all' ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                All (5)
              </button>
              <button
                onClick={() => setActiveTab('winner')}
                className={`px-2.5 py-1 rounded transition-colors ${
                  activeTab === 'winner' ? 'bg-emerald-700 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                Winner Proof (3)
              </button>
              <button
                onClick={() => setActiveTab('loser')}
                className={`px-2.5 py-1 rounded transition-colors ${
                  activeTab === 'loser' ? 'bg-rose-700 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                Loser Leaks (2)
              </button>
            </div>
          </div>

          <p className="text-sm text-slate-600 mb-8 leading-relaxed max-w-3xl">
            Below are the five verified campaign captures annotated with exact video timestamps, creative agitation mechanisms, and conversion funnel leak points. Click any screenshot for high-resolution inspection.
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
                          [SCREENSHOT PLACEHOLDER]
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
                          Verified Creative Annotation
                        </div>
                        <h4 className="font-editorial text-xl font-bold text-slate-950">
                          {shot.caption}
                        </h4>

                        {shot.id === 'win-1' && (
                          <div className="text-xs text-slate-600 space-y-2 leading-relaxed">
                            <p>
                              <strong>Observable:</strong> Man in jeans sits down on wooden chair, winces in back pain, shifts awkwardly, and pulls absurd 3-inch swollen leather brick with receipts.
                            </p>
                            <p>
                              <strong>Why it stops the thumb:</strong> Zero corporate fluff. Sound-off readable pattern interrupt. The viewer feels the pain in 2 seconds before realizing it's an ad.
                            </p>
                          </div>
                        )}

                        {shot.id === 'win-2' && (
                          <div className="text-xs text-slate-600 space-y-2 leading-relaxed">
                            <p>
                              <strong>Observable:</strong> Camera looks straight down on table as 12 credit cards, crumpled receipts, and bent cards spill out next to a sleek gunmetal Ridge wallet.
                            </p>
                            <p>
                              <strong>Visual Agitation:</strong> Extreme contrast between chaotic bulk and precision minimalism. Proves high capacity without unnecessary width.
                            </p>
                          </div>
                        )}

                        {shot.id === 'win-3' && (
                          <div className="text-xs text-slate-600 space-y-2 leading-relaxed">
                            <p>
                              <strong>Observable:</strong> Effortless front-pocket slide demonstration paired with PDP risk-reversal terms.
                            </p>
                            <p>
                              <strong>Conversion Architecture:</strong> 30-day test drive, free returns worldwide, and 2,000+ verified 5-star reviews systematically neutralize the $75+ price barrier.
                            </p>
                          </div>
                        )}

                        {shot.id === 'lose-1' && (
                          <div className="text-xs text-slate-600 space-y-2 leading-relaxed">
                            <p>
                              <strong>Observable:</strong> Floating brown leather wallet on smooth studio blue gradient with generic text "Premium Quality Craftsmanship" and yellow 20% OFF badge.
                            </p>
                            <p>
                              <strong>Why it dies:</strong> No human element, no problem agitation, zero thumb-stop. Looks like an ignored flyer; discount without motivation equals zero conversions.
                            </p>
                          </div>
                        )}

                        {shot.id === 'lose-2' && (
                          <div className="text-xs text-slate-600 space-y-2 leading-relaxed">
                            <p>
                              <strong>Observable:</strong> User clicks "Learn More" on a specific wallet ad and gets dumped onto a broad general catalog homepage showing 20 random products.
                            </p>
                            <p>
                              <strong>The Funnel Leak:</strong> Severe message mismatch. Cold traffic will never hunt through menus to find the product they saw in the ad.
                            </p>
                          </div>
                        )}

                        <div className="pt-2 text-[11px] font-mono text-slate-500 border-t border-slate-100 flex items-center justify-between">
                          <span>Audit Ref: #{shot.id.toUpperCase()}</span>
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

        {/* SECTION 3: Visual Story - Creative Score (Render as 4 horizontal bar pairs, green vs red) */}
        <section className="mb-14 scroll-mt-28" id="creative-scores">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-7 h-7 rounded-lg bg-slate-900 text-white text-xs font-bold font-mono flex items-center justify-center">
              3
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-slate-950 tracking-tight">
              Visual Story — Creative Score Card
            </h2>
          </div>

          <p className="text-sm text-slate-600 mb-6 leading-relaxed">
            Rendered as 4 horizontal bar pairs (<strong>Green = Winner</strong> vs <strong>Red = Loser</strong>). This side-by-side gap is what makes founders immediately understand why one scales while the other burns budget.
          </p>

          <div className="p-6 sm:p-8 rounded-xl bg-slate-900 text-white border border-slate-800 shadow-md space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div>
                <span className="text-xs font-mono uppercase text-emerald-400 font-bold tracking-widest block">
                  Diagnostic Creative Framework
                </span>
                <h3 className="text-lg font-bold text-white mt-0.5">
                  The Ridge (9.0/10) vs Composite DTC (2.5/10)
                </h3>
              </div>
              <div className="flex items-center gap-4 text-xs font-mono">
                <span className="inline-flex items-center gap-1.5 text-emerald-400 font-semibold">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                  Winner (Scaling)
                </span>
                <span className="inline-flex items-center gap-1.5 text-rose-400 font-semibold">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span>
                  Loser (Killed &lt;7d)
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
                      <span className="text-[10px] font-mono text-slate-400 w-16 text-right">WINNER:</span>
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
                      <span className="text-[10px] font-mono text-slate-400 w-16 text-right">LOSER:</span>
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

        {/* SECTION 4: Full Breakdown Copy (paste-ready) */}
        <section className="mb-14 scroll-mt-28" id="full-breakdown-copy">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-7 h-7 rounded-lg bg-slate-900 text-white text-xs font-bold font-mono flex items-center justify-center">
              4
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-slate-950 tracking-tight">
              Full Breakdown Copy &amp; Systematic Teardown
            </h2>
          </div>

          <div className="space-y-6">
            {/* TL;DR Box */}
            <div className="p-6 rounded-xl bg-slate-50 border-l-4 border-slate-900 border border-slate-200">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1">
                TL;DR Strategic Summary
              </span>
              <p className="text-base text-slate-900 font-medium leading-relaxed">
                Winning opens with a painful visual problem you feel in 2s. One claim. One proof. One CTA for cold traffic. Losing opens with product + discount. No problem. No proof. Built like a flyer, not a feed interrupt. In Andromeda-era Meta, <strong>creative IS targeting</strong>.
              </p>
            </div>

            {/* Winner Deep Dive */}
            <div className="p-6 sm:p-8 rounded-xl border border-emerald-200 bg-white shadow-2xs space-y-6">
              <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm uppercase tracking-wider pb-3 border-b border-emerald-100">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>The Winner Playbook: The Ridge</span>
              </div>

              <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
                <div className="p-4 rounded-lg bg-emerald-50/50 border border-emerald-200/60">
                  <h4 className="font-bold text-slate-950 text-sm mb-1">
                    WINNER HOOK (observable):
                  </h4>
                  <p className="text-slate-800 mb-2">
                    Man in jeans sits, winces, pulls absurdly swollen 3-inch leather wallet with receipts. Text: 'Stop sitting on this brick.' Natural chair-creak + wallet slap.
                  </p>
                  <p className="text-emerald-950 font-medium">
                    <strong>WHY IT WINS:</strong> Self-identifies in 2s, visual not verbal, pattern interrupt like skit not ad. <em>Hypothesis: 30%+ thumb-stop.</em>
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-slate-50 border border-slate-200">
                  <h4 className="font-bold text-slate-950 text-sm mb-1">
                    WINNER CREATIVE (3 beats):
                  </h4>
                  <p className="text-slate-700">
                    <strong>0–4s agitation</strong> (sitting pain) → <strong>4–12s contrast</strong> (dump 12 cards vs 2-card slim) → <strong>12–22s proof</strong> (front-pocket slide + clean sit + RFID tap). Handheld warm light, slightly imperfect = trust. No lifestyle padding — every single second shows the product doing something.
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-slate-50 border border-slate-200">
                  <h4 className="font-bold text-slate-950 text-sm mb-1">
                    WINNER OFFER / COPY / CTA:
                  </h4>
                  <p className="text-slate-700 mb-2">
                    <strong>Headline:</strong> 'Carry 12 cards. Ditch the brick.' <br />
                    <strong>Body:</strong> 'Slim RFID-blocking. 30-day test drive. Free returns.' <br />
                    <strong>CTA:</strong> Shop Now → dedicated PDP with side-by-side comparison + review count.
                  </p>
                  <p className="text-slate-800 text-xs">
                    <strong>Psychology:</strong> Identity (minimalist) + replacement (replace chronic pain, not buy another accessory) + risk reversal for $75+ price.
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-slate-50 border border-slate-200">
                  <h4 className="font-bold text-slate-950 text-sm mb-1">
                    WINNER FUNNEL:
                  </h4>
                  <p className="text-slate-700 font-mono text-xs">
                    Cold Meta Broad → PDP (same promise) → retargeting testimonial static ('Lost the bulk, kept everything - 11,400+ reviews'). Longevity 60+ days = profitability proxy.
                  </p>
                </div>
              </div>
            </div>

            {/* Loser Deep Dive */}
            <div className="p-6 sm:p-8 rounded-xl border border-rose-200 bg-white shadow-2xs space-y-6">
              <div className="flex items-center gap-2 text-rose-800 font-bold text-sm uppercase tracking-wider pb-3 border-b border-rose-100">
                <XCircle className="w-4 h-4 text-rose-600" />
                <span>The Loser Playbook: Composite Brand Failure</span>
              </div>

              <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
                <div className="p-4 rounded-lg bg-rose-50/50 border border-rose-200/60">
                  <h4 className="font-bold text-slate-950 text-sm mb-1">
                    LOSER HOOK (observable):
                  </h4>
                  <p className="text-slate-800 mb-2">
                    Perfectly lit brown wallet floating on blue gradient. Text: 'Premium Quality Craftsmanship.' Small '20% OFF Limited Time' badge in corner.
                  </p>
                  <p className="text-rose-950 font-medium">
                    <strong>WHY IT LOSES:</strong> No self-ID (everyone = no one), looks like an ad instantly, discount as hook for unwanted product = 0 motivation, fake urgency risks Meta algorithmic downranking. <em>Hypothesis: &lt;18% thumb-stop, &lt;0.7% CTR cold.</em>
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-slate-50 border border-slate-200">
                  <h4 className="font-bold text-slate-950 text-sm mb-1">
                    LOSER COPY / CTA:
                  </h4>
                  <p className="text-slate-700 mb-2">
                    <strong>Copy:</strong> 'Genuine Leather. RFID. Free Shipping. Learn More' → homepage.
                  </p>
                  <p className="text-slate-800 text-xs">
                    <strong>WHY IT LOSES:</strong> 4 features not 1 outcome, zero proof (no demo, no numbers), funnel leak forces hunt, studio polish signals ad not solution.
                  </p>
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
                    Winner: Brick (The Ridge)
                  </th>
                  <th scope="col" className="px-4 py-3.5 font-bold font-mono text-xs uppercase tracking-wider text-rose-400 w-3/8">
                    Loser: Premium 20% OFF
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

        {/* SECTION 6: 48-Hour Fix Plan (High-value for clients) */}
        <section className="mb-14 scroll-mt-28" id="fix-plan">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-7 h-7 rounded-lg bg-slate-900 text-white text-xs font-bold font-mono flex items-center justify-center">
              6
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-slate-950 tracking-tight">
              48-Hour Client Fix Plan
            </h2>
          </div>

          <div className="p-6 sm:p-8 rounded-xl bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-950 text-white shadow-lg space-y-6 border border-emerald-900/50">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold block mb-1">
                Turnaround Protocol for Failing Ecom Creatives
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                How to Salvage a Dying Wallet Ad in 48 Hours
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
                Need this turnaround applied to your ad accounts? Let's audit your assets.
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

        {/* SECTION 7: LinkedIn Hook (Approved-style, post only after OK) */}
        <section className="mb-14 scroll-mt-28" id="linkedin-distribution">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-slate-900 text-white text-xs font-bold font-mono flex items-center justify-center">
                7
              </span>
              <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-slate-950 tracking-tight">
                Distribution Asset — LinkedIn Breakdown Hook
              </h2>
            </div>
            <button
              onClick={handleCopyLinkedIn}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold transition-colors cursor-pointer"
            >
              {copiedLinkedIn ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedLinkedIn ? 'Copied Post!' : 'Copy LinkedIn Post'}</span>
            </button>
          </div>

          <div className="p-6 rounded-xl border border-slate-200 bg-slate-50 space-y-4">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 font-bold block mb-1">
                Main Feed Post Copy
              </span>
              <div className="p-4 rounded-lg bg-white border border-slate-200 font-sans text-sm text-slate-800 whitespace-pre-line leading-relaxed">
                {comp?.linkedInHook?.postText}
              </div>
            </div>

            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 font-bold block mb-1">
                First Comment (Distribution Buffer)
              </span>
              <div className="p-3 rounded-lg bg-white border border-slate-200 font-sans text-xs text-slate-700 italic">
                "{comp?.linkedInHook?.firstComment}"
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 8: Site JSON & Spec */}
        <section className="mb-14 scroll-mt-28" id="site-json">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-7 h-7 rounded-lg bg-slate-900 text-white text-xs font-bold font-mono flex items-center justify-center">
              8
            </span>
            <h2 className="font-editorial text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
              Site Data Schema &amp; Entry Spec
            </h2>
          </div>

          <div className="p-4 rounded-lg bg-slate-950 text-slate-300 font-mono text-xs overflow-x-auto border border-slate-800">
            <pre>
{JSON.stringify(
  {
    id: article.id,
    slug: article.slug,
    brandName: article.brandName,
    industry: article.industry,
    title: article.title,
    date: article.date,
    readingTime: article.readingTime,
    shortDescription: article.shortDescription,
    theHook: article.theHook.observable,
    theOffer: article.theOffer,
    theCta: article.theCta
  },
  null,
  2
)}
            </pre>
          </div>
        </section>

        {/* SECTION 9: Client CTA (Put this at end of blog) */}
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
                I break down winning ads + audit losers into test plans for DTC, ecom, info, and local brands (Meta &amp; Google). If your creative dies in 7 days, I will tell you why in one audit.
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
                  <strong className="text-emerald-400 font-sans">Next Breakdown Tomorrow:</strong>{' '}
                  {comp?.clientCta?.nextBreakdown || 'Transformation UGC vs Founder-story for $79/mo supplements.'}
                </div>
                <div className="text-[11px] text-slate-500 italic">
                  Workflow agreed: I draft PDF + LinkedIn text, YOU read + approve, THEN I post.
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

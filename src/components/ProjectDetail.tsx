import React from 'react';
import { PageView } from '../types';
import { PORTFOLIO_PROJECTS } from '../data/portfolio';
import { ArticleCta } from './ArticleCta';
import { ArrowLeft, CheckCircle2, ShieldCheck, Target, ArrowRight } from 'lucide-react';

interface ProjectDetailProps {
  projectId?: string;
  onNavigate: (page: PageView, id?: string) => void;
}

export const ProjectDetail: React.FC<ProjectDetailProps> = ({ projectId, onNavigate }) => {
  const project = PORTFOLIO_PROJECTS.find((p) => p.id === projectId) || PORTFOLIO_PROJECTS[0];
  const nextProjects = PORTFOLIO_PROJECTS.filter((p) => p.id !== project.id).slice(0, 2);

  return (
    <article className="py-16 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Back */}
        <div className="mb-8">
          <button
            onClick={() => {
              onNavigate('portfolio');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-slate-950 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Portfolio</span>
          </button>
        </div>

        {/* Header */}
        <header className="pb-10 border-b border-slate-200 mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 block mb-2">
            {project.category}
          </span>
          {project.company && (
            <div className="text-sm font-semibold text-slate-900 mb-2">
              <span>{project.company}</span>
              {project.role && <span className="text-slate-500 font-normal"> — {project.role}</span>}
            </div>
          )}
          <h1 className="font-editorial text-3xl sm:text-5xl font-bold tracking-tight text-slate-950 leading-[1.18] mb-6">
            {project.title}
          </h1>
          <p className="text-lg text-slate-600 font-normal leading-relaxed mb-8">
            {project.shortDescription}
          </p>

          <div className="flex flex-wrap gap-2 mb-8">
            {project.skillsInvolved.map((skill, idx) => (
              <span
                key={idx}
                className="text-xs font-medium px-3 py-1 rounded bg-slate-100 text-slate-800 border border-slate-200"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Contextual Case Study Topic Banner */}
          {(() => {
            const projectMediaMap: Record<string, { src: string; caption: string }> = {
              'proj-rangpur-steel': {
                src: '/src/assets/images/cnc_laser_steel_1793631154504.jpg',
                caption: 'CNC Laser-Cutting & Industrial Powder-Coating Metal Manufacturing at Rangpur Steel'
              },
              'proj-2': {
                src: '/src/assets/images/strategist_desk_office_1793631153324.jpg',
                caption: 'Performance Ads Testing & Creative Retention Workspace'
              },
              'proj-3': {
                src: '/src/assets/images/amazon_product_research_1793631154918.jpg',
                caption: 'Full-Funnel Acquisition Architecture & Amazon FBA Market Intelligence'
              },
              'proj-4': {
                src: '/src/assets/images/d2c_apparel_brand_1793631154743.jpg',
                caption: 'Direct-Response Copy & D2C Apparel Brand Merchandising Studio'
              }
            };
            const media = projectMediaMap[project.id];
            if (!media) return null;
            return (
              <div className="rounded-xl overflow-hidden border border-slate-200 bg-white shadow-xs">
                <img
                  src={media.src}
                  alt={media.caption}
                  className="w-full h-64 sm:h-80 md:h-96 object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="p-3.5 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-800">{media.caption}</span>
                  <span className="text-[11px] text-slate-500 hidden sm:inline">Commercial Operations &amp; Strategy</span>
                </div>
              </div>
            );
          })()}
        </header>

        {/* Optional Verified Metrics Strip */}
        {project.keyMetrics && project.keyMetrics.length > 0 && (
          <div className="mb-12 p-6 rounded-lg bg-[#FAFAFA] border border-slate-200">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-3">
              Key Quantitative Performance Highlights
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {project.keyMetrics.map((metric, mIdx) => (
                <div key={mIdx} className="p-3 bg-white rounded border border-slate-200">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 block mb-1">
                    {metric.label}
                  </span>
                  <span className="font-editorial text-xl font-bold text-slate-950 block">
                    {metric.value}
                  </span>
                  {metric.detail && (
                    <span className="text-[11px] text-slate-500 block mt-0.5">
                      {metric.detail}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Reusable Case Study Layout (Section 7 Requirement) */}
        <div className="space-y-12 text-slate-800 text-base leading-relaxed">
          {/* 1. Problem */}
          <section className="p-6 rounded-lg bg-[#FAFAFA] border border-slate-200">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
              1. The Problem
            </span>
            <h2 className="font-editorial text-2xl font-bold text-slate-950 mb-3 tracking-tight">
              Challenge &amp; Context
            </h2>
            <p className="text-slate-700 leading-relaxed">
              {project.problem}
            </p>
          </section>

          {/* 2. Research */}
          <section className="border-t border-slate-200 pt-8">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
              2. Field Research
            </span>
            <h2 className="font-editorial text-2xl font-bold text-slate-950 mb-3 tracking-tight">
              Audience &amp; Market Discovery
            </h2>
            <p className="text-slate-700 leading-relaxed">
              {project.research}
            </p>
          </section>

          {/* 3. Strategy */}
          <section className="border-t border-slate-200 pt-8">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
              3. Strategic Architecture
            </span>
            <h2 className="font-editorial text-2xl font-bold text-slate-950 mb-3 tracking-tight">
              Hypothesis &amp; Planning
            </h2>
            <p className="text-slate-700 leading-relaxed">
              {project.strategy}
            </p>
          </section>

          {/* 4. Execution */}
          <section className="border-t border-slate-200 pt-8">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
              4. Execution
            </span>
            <h2 className="font-editorial text-2xl font-bold text-slate-950 mb-3 tracking-tight">
              Implementation &amp; Assets
            </h2>
            <p className="text-slate-700 leading-relaxed">
              {project.execution}
            </p>
          </section>

          {/* 5. Analysis */}
          <section className="border-t border-slate-200 pt-8">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
              5. Performance Analysis
            </span>
            <h2 className="font-editorial text-2xl font-bold text-slate-950 mb-3 tracking-tight">
              Observations &amp; Data Review
            </h2>
            <p className="text-slate-700 leading-relaxed">
              {project.analysis}
            </p>
          </section>

          {/* 6. Result (Qualitative Description) */}
          <section className="p-8 rounded-lg bg-emerald-50/60 border border-emerald-200">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 block mb-2">
              6. Qualitative Result
            </span>
            <h2 className="font-editorial text-2xl font-bold text-emerald-950 mb-3 tracking-tight">
              Outcome &amp; Business Impact
            </h2>
            <p className="text-emerald-950 text-base sm:text-lg leading-relaxed font-medium">
              {project.result}
            </p>
          </section>

          {/* 7. Key Learning */}
          <section className="p-8 rounded-lg bg-slate-900 text-white border border-slate-800">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400 block mb-2">
              7. Strategic Takeaway
            </span>
            <h2 className="font-editorial text-2xl font-bold text-white mb-3 tracking-tight">
              Key Learning
            </h2>
            <p className="text-slate-200 text-base sm:text-lg leading-relaxed font-normal">
              {project.keyLearning}
            </p>
          </section>
        </div>

        {/* Bottom CTA */}
        <ArticleCta onNavigate={onNavigate} />

        {/* Other Projects */}
        <div className="pt-12 border-t border-slate-200">
          <h3 className="font-editorial text-xl font-bold text-slate-950 mb-6">
            Other Portfolio Projects
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {nextProjects.map((p) => (
              <div
                key={p.id}
                className="p-6 rounded-lg border border-slate-200 bg-[#FAFAFA] hover:border-slate-400 transition-colors flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-semibold text-slate-500 mb-1 block">
                    {p.category}
                  </span>
                  <h4 className="font-editorial text-lg font-bold text-slate-950 mb-2 leading-snug">
                    {p.title}
                  </h4>
                  <p className="text-xs text-slate-600 line-clamp-2">
                    {p.shortDescription}
                  </p>
                </div>
                <button
                  onClick={() => {
                    onNavigate('project-detail', p.id);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="mt-4 text-xs font-semibold text-slate-950 hover:underline text-left cursor-pointer"
                >
                  View Case Study →
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
};

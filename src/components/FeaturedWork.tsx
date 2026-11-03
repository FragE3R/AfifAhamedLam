import React, { useState } from 'react';
import { PageView, PortfolioProject } from '../types';
import { PORTFOLIO_PROJECTS } from '../data/portfolio';
import { ArrowRight, ChevronDown, ChevronUp, Layers, CheckCircle2 } from 'lucide-react';

interface FeaturedWorkProps {
  onNavigate: (page: PageView, id?: string) => void;
}

export const FeaturedWork: React.FC<FeaturedWorkProps> = ({ onNavigate }) => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="py-20 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 block mb-2">
              Case Studies &amp; Projects
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl font-bold tracking-tight text-slate-950">
              Featured Work
            </h2>
          </div>
          <div className="mt-3 md:mt-0">
            <button
              onClick={() => {
                onNavigate('portfolio');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-900 hover:text-slate-600 cursor-pointer"
            >
              <span>View Full Portfolio</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="space-y-6">
          {PORTFOLIO_PROJECTS.slice(0, 3).map((project) => {
            const isExpanded = expandedId === project.id;
            const projectMediaMap: Record<string, { src: string; caption: string }> = {
              'proj-rangpur-steel': {
                src: '/src/assets/images/cnc_laser_steel_1793631154504.jpg',
                caption: 'CNC Laser-Cut & Powder-Coated Metal Manufacturing'
              },
              'proj-2': {
                src: '/src/assets/images/strategist_desk_office_1793631153324.jpg',
                caption: 'Performance Ads Testing & Creative Retention Desk'
              },
              'proj-3': {
                src: '/src/assets/images/amazon_product_research_1793631154918.jpg',
                caption: 'Full-Funnel Acquisition & Amazon Market Intelligence'
              }
            };
            const media = projectMediaMap[project.id];

            return (
              <div
                key={project.id}
                className="rounded-lg border border-slate-200 bg-[#FAFAFA] p-6 sm:p-8 hover:border-slate-300 transition-all"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  <div className="lg:col-span-8">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-semibold uppercase tracking-wider text-slate-700">
                        {project.category}
                      </span>
                      {project.company && (
                        <>
                          <span className="text-slate-300">•</span>
                          <span className="text-xs font-medium text-slate-600">{project.company}</span>
                        </>
                      )}
                    </div>

                    <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-slate-950 tracking-tight mb-3">
                      {project.title}
                    </h3>

                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-5">
                      {project.shortDescription}
                    </p>

                    <div className="flex flex-wrap items-center gap-1.5 mb-6">
                      {project.skillsInvolved.map((skill, index) => (
                        <span
                          key={index}
                          className="text-xs px-2.5 py-1 rounded bg-white text-slate-700 border border-slate-200"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap items-center gap-3">
                      <button
                        onClick={() => {
                          onNavigate('project-detail', project.id);
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold bg-slate-950 text-white hover:bg-slate-800 rounded-md transition-colors cursor-pointer"
                      >
                        <span>View Full Case Study</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>

                      <button
                        id={`toggle-case-study-${project.id}`}
                        onClick={() => toggleExpand(project.id)}
                        className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold bg-white border border-slate-300 hover:border-slate-400 text-slate-900 rounded-md transition-colors cursor-pointer"
                      >
                        <span>{isExpanded ? 'Collapse Summary' : 'Quick Breakdown'}</span>
                        {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                  </div>

                  {/* Visual Topic Thumbnail */}
                  {media && (
                    <div className="lg:col-span-4">
                      <div className="rounded-lg overflow-hidden border border-slate-200 bg-white shadow-xs">
                        <img
                          src={media.src}
                          alt={media.caption}
                          className="w-full h-44 object-cover"
                          referrerPolicy="no-referrer"
                        />
                        <div className="p-2.5 bg-slate-50 border-t border-slate-200">
                          <span className="text-[11px] font-semibold text-slate-800 block truncate">
                            {media.caption}
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Inline Reusable Case Study Breakdown */}
                {isExpanded && (
                  <div className="mt-8 pt-8 border-t border-slate-200/90 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in duration-200">
                    <div className="p-4 rounded bg-white border border-slate-200">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
                        1. Problem
                      </span>
                      <p className="text-xs text-slate-700 leading-relaxed">
                        {project.problem}
                      </p>
                    </div>

                    <div className="p-4 rounded bg-white border border-slate-200">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
                        2. Research
                      </span>
                      <p className="text-xs text-slate-700 leading-relaxed">
                        {project.research}
                      </p>
                    </div>

                    <div className="p-4 rounded bg-white border border-slate-200">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
                        3. Strategy
                      </span>
                      <p className="text-xs text-slate-700 leading-relaxed">
                        {project.strategy}
                      </p>
                    </div>

                    <div className="p-4 rounded bg-white border border-slate-200">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
                        4. Execution
                      </span>
                      <p className="text-xs text-slate-700 leading-relaxed">
                        {project.execution}
                      </p>
                    </div>

                    <div className="p-4 rounded bg-white border border-slate-200">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
                        5. Analysis
                      </span>
                      <p className="text-xs text-slate-700 leading-relaxed">
                        {project.analysis}
                      </p>
                    </div>

                    <div className="p-4 rounded bg-white border border-slate-200">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-900 block mb-1">
                        6. Result &amp; Key Learning
                      </span>
                      <p className="text-xs text-slate-700 leading-relaxed mb-2 font-medium">
                        {project.result}
                      </p>
                      <div className="text-[11px] text-slate-600 bg-slate-50 p-2 rounded border border-slate-200/80">
                        <span className="font-semibold text-slate-900">Takeaway:</span> {project.keyLearning}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

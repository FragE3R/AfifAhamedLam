import React from 'react';
import { Target, BarChart2, Search, Edit3, Briefcase, GraduationCap, Languages } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const skillCategories = [
    {
      title: 'Media Buying & Paid Advertising',
      icon: Target,
      skills: [
        'Media Buying',
        'Meta Ads',
        'Google Ads',
        'Paid Advertising',
        'Campaign Strategy',
        'Campaign Optimization',
        'Audience Testing',
        'Creative Testing',
        'Retargeting Architecture'
      ]
    },
    {
      title: 'Performance & Analytics',
      icon: BarChart2,
      skills: [
        'Performance Marketing',
        'CTR Analysis',
        'CPC Analysis',
        'CPM Analysis',
        'CPA Analysis',
        'ROAS Analysis',
        'Advertising Analysis',
        'Spreadsheets'
      ]
    },
    {
      title: 'Market & Audience Research',
      icon: Search,
      skills: [
        'Market Research',
        'Audience Research',
        'Competitor Research',
        'Product Category Analysis',
        'Pricing Observations',
        'E-commerce Strategy'
      ]
    },
    {
      title: 'Content & Copywriting',
      icon: Edit3,
      skills: [
        'Marketing Copywriting',
        'Direct-Response Ad Copy',
        'Content Writing',
        'Social Media Content',
        'Persuasive Messaging',
        'Canva',
        'Photo Editing'
      ]
    },
    {
      title: 'Operations & Business Execution',
      icon: Briefcase,
      skills: [
        'Offline Shop Operations',
        'Customer Handling',
        'Customer Communication',
        'Customer Service',
        'Problem Solving',
        'Teamwork'
      ]
    }
  ];

  return (
    <section className="py-20 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 block mb-2">
            Competencies &amp; Toolkit
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl font-bold tracking-tight text-slate-950 mb-3">
            Core Skills &amp; Capabilities
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Practical skills developed through hands-on campaign testing, retail customer interactions, and systematic advertising analysis.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {skillCategories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-lg border border-slate-200 bg-[#FAFAFA] hover:border-slate-300 transition-colors"
              >
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="p-2 rounded bg-white border border-slate-200 text-slate-900">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="font-editorial text-lg font-bold text-slate-950">
                    {cat.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {cat.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-xs font-medium px-2.5 py-1 rounded bg-white text-slate-800 border border-slate-200/90 shadow-2xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Education & Languages Quick Bar */}
        <div className="p-6 rounded-lg bg-slate-50 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="flex items-start sm:items-center gap-3">
            <div className="p-2 rounded bg-white border border-slate-200 text-slate-800 shrink-0">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 block">
                Education
              </span>
              <p className="text-sm font-semibold text-slate-900">
                Higher Secondary Certificate (HSC) — Completed 2025
              </p>
            </div>
          </div>

          <div className="h-px sm:h-8 sm:w-px bg-slate-200"></div>

          <div className="flex items-start sm:items-center gap-3">
            <div className="p-2 rounded bg-white border border-slate-200 text-slate-800 shrink-0">
              <Languages className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 block">
                Working Languages
              </span>
              <p className="text-sm font-semibold text-slate-900">
                English (Fluent) &amp; Bangla (Native)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { ResearchGraphData } from '../types';
import { BarChart3, TrendingUp, AlertTriangle, ArrowDownRight, Layers, CheckCircle2, Info } from 'lucide-react';

interface ResearchDataGraphProps {
  graphData: ResearchGraphData;
}

export const ResearchDataGraph: React.FC<ResearchDataGraphProps> = ({ graphData }) => {
  const [activeTab, setActiveTab] = useState<'visual' | 'breakdown'>('visual');

  return (
    <div className="my-10 rounded-xl border border-slate-200 bg-white shadow-xs overflow-hidden">
      {/* Chart Header */}
      <div className="p-6 sm:p-7 border-b border-slate-200 bg-[#FAFAFA]">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-200/80 text-slate-800 text-[11px] font-semibold uppercase tracking-wider mb-2">
              <BarChart3 className="w-3.5 h-3.5" />
              <span>Quantitative Field Model &amp; Graph</span>
            </div>
            <h3 className="font-editorial text-2xl font-bold text-slate-950 tracking-tight">
              {graphData.chartTitle}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              {graphData.chartSubtitle}
            </p>
          </div>

          {/* View Mode Tabs */}
          <div className="inline-flex p-1 bg-slate-200/60 rounded-lg self-start sm:self-auto shrink-0">
            <button
              type="button"
              onClick={() => setActiveTab('visual')}
              className={`px-3 py-1 text-xs font-semibold rounded-md transition-colors ${
                activeTab === 'visual'
                  ? 'bg-white text-slate-950 shadow-2xs'
                  : 'text-slate-600 hover:text-slate-950'
              }`}
            >
              Visual Graph
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('breakdown')}
              className={`px-3 py-1 text-xs font-semibold rounded-md transition-colors ${
                activeTab === 'breakdown'
                  ? 'bg-white text-slate-950 shadow-2xs'
                  : 'text-slate-600 hover:text-slate-950'
              }`}
            >
              Data Table
            </button>
          </div>
        </div>

        {/* Executive Metric Callout */}
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 p-4 rounded-lg bg-white border border-slate-200">
          <div className="sm:col-span-4 border-b sm:border-b-0 sm:border-r border-slate-100 pb-3 sm:pb-0 sm:pr-4">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 block">
              {graphData.metricHighlight.label}
            </span>
            <span className="font-editorial text-2xl font-bold text-slate-950 mt-0.5 block">
              {graphData.metricHighlight.value}
            </span>
          </div>
          <div className="sm:col-span-8 flex items-center">
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              <strong className="text-slate-900 font-semibold">Key Finding: </strong>
              {graphData.metricHighlight.subtext}
            </p>
          </div>
        </div>
      </div>

      {/* Main Chart Body */}
      <div className="p-6 sm:p-8">
        {activeTab === 'visual' ? (
          <div>
            {/* Visual Graph View */}
            <div className="space-y-6">
              {graphData.dataPoints.map((point, index) => {
                const percentage = point.percentage || 70;
                const isNegative = typeof point.value === 'string' && point.value.startsWith('-');

                return (
                  <div key={index} className="space-y-2">
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 text-xs">
                      <span className="font-semibold text-slate-900 text-sm">
                        {point.label}
                      </span>
                      <div className="flex items-center gap-2">
                        <span className={`font-mono font-bold text-sm ${isNegative ? 'text-rose-600' : 'text-slate-950'}`}>
                          {point.value}
                        </span>
                        {point.secondaryValue && (
                          <span className="text-slate-500 font-normal">
                            ({point.secondaryValue})
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Progress / Magnitude Bar */}
                    <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden p-0.5 border border-slate-200">
                      <div
                        className={`h-full rounded-full transition-all duration-500 ${
                          isNegative
                            ? 'bg-rose-500'
                            : index === 0
                            ? 'bg-slate-900'
                            : index === 1
                            ? 'bg-slate-700'
                            : index === 2
                            ? 'bg-slate-600'
                            : 'bg-emerald-600'
                        }`}
                        style={{ width: `${Math.max(percentage, 8)}%` }}
                      />
                    </div>

                    {/* Benchmark & Tactical Note */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-[11px] text-slate-500 pt-0.5">
                      {point.benchmark && (
                        <span className="font-medium text-slate-700">
                          Benchmark: <span className="text-slate-900">{point.benchmark}</span>
                        </span>
                      )}
                      {point.note && (
                        <span className="italic text-slate-500">
                          {point.note}
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          /* Tabular Data View */
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50 text-slate-700 font-semibold">
                  <th className="py-3 px-3">Variable / Stage</th>
                  <th className="py-3 px-3">Primary Metric</th>
                  <th className="py-3 px-3">Context / Details</th>
                  <th className="py-3 px-3">Strategic Benchmark</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {graphData.dataPoints.map((point, index) => (
                  <tr key={index} className="hover:bg-slate-50/70 transition-colors">
                    <td className="py-3 px-3 font-semibold text-slate-900">
                      {point.label}
                    </td>
                    <td className="py-3 px-3 font-mono font-bold text-slate-950">
                      {point.value}
                    </td>
                    <td className="py-3 px-3 text-slate-600">
                      {point.secondaryValue || '—'}
                    </td>
                    <td className="py-3 px-3 text-slate-600">
                      {point.benchmark || point.note || '—'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Takeaway Box */}
        <div className="mt-8 p-4 rounded-lg bg-slate-50 border border-slate-200 flex items-start gap-3">
          <Info className="w-4 h-4 text-slate-700 shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            <span className="font-bold text-slate-950 block mb-0.5">Media Buyer&apos;s Takeaway:</span>
            {graphData.takeaway}
          </div>
        </div>
      </div>
    </div>
  );
};

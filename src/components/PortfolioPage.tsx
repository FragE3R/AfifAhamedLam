import React from 'react';
import { PageView } from '../types';
import { PORTFOLIO_PROJECTS } from '../data/portfolio';
import { ArrowRight, CheckCircle2, GraduationCap, Languages, Store, Target, Users, BarChart3, Building2, ShoppingBag, Hotel, Share2, Search, ExternalLink, TrendingUp } from 'lucide-react';

interface PortfolioPageProps {
  onNavigate: (page: PageView, id?: string) => void;
}

export const PortfolioPage: React.FC<PortfolioPageProps> = ({ onNavigate }) => {
  const professionalFocusAreas = [
    {
      title: 'Media Buying',
      desc: 'Campaign structure, audience testing, creative testing, retargeting architecture, and budget pacing across Meta and Google Ads.'
    },
    {
      title: 'Performance Marketing',
      desc: 'Data-driven decision making centered around CTR, CPC, CPM, CPA, and ROAS to optimize customer acquisition economics.'
    },
    {
      title: 'Digital Marketing Strategy',
      desc: 'Holistic funnel design connecting cold discovery, objection-handling copy, offer architecture, and post-click conversion.'
    },
    {
      title: 'Market Research',
      desc: 'Qualitative customer listening, competitor advertising audits, category dynamics, and pricing elasticity observations.'
    },
    {
      title: 'Content & Copywriting',
      desc: 'Direct-response ad copy, high-retention video hooks, landing page hierarchy, and clear social media messaging.'
    }
  ];

  const allSkills = [
    'Media Buying',
    'Meta Ads',
    'Google Ads',
    'Performance Marketing',
    'Campaign Strategy',
    'Campaign Optimization',
    'Audience Research',
    'Retargeting',
    'CTR Analysis',
    'CPC Analysis',
    'CPM Analysis',
    'CPA Analysis',
    'ROAS Analysis',
    'Market Research',
    'Competitor Research',
    'Advertising Analysis',
    'Content Writing',
    'Marketing Copywriting',
    'Social Media Content',
    'E-commerce',
    'Customer Service',
    'Customer Communication',
    'Problem Solving',
    'Teamwork',
    'Spreadsheets',
    'Canva',
    'Photo Editing'
  ];

  return (
    <div className="py-16 sm:py-24 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 block mb-2">
            Background &amp; Track Record
          </span>
          <h1 className="font-editorial text-4xl sm:text-5xl font-bold tracking-tight text-slate-950 mb-4">
            Portfolio &amp; Professional Profile
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            A comprehensive overview of my professional focus, practical business experience, technical competencies, and qualitative case studies.
          </p>
        </div>

        {/* Section 1: About Me (Section 11 Requirement) */}
        <div className="p-8 sm:p-10 rounded-lg bg-white border border-slate-200 shadow-2xs mb-16">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
              Professional Introduction
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-slate-950 mb-4 tracking-tight">
              About Me
            </h2>
            <div className="space-y-4 text-slate-700 text-base leading-relaxed">
              <p>
                I am a Media Buyer and Digital Marketing Strategist based in Dhaka, Bangladesh. Rather than treating advertising as a simple exercise in buying impressions, I approach marketing from first principles: studying market demand, understanding customer psychology, crafting persuasive direct-response creative, and diagnosing campaign performance through clear metrics.
              </p>
              <p>
                My background is grounded in real-world retail and commerce operations. Handling physical storefronts and communicating face-to-face with everyday shoppers gave me an intuitive understanding of why people buy, what causes hesitation, and how clear communication resolves objections. I apply these firsthand insights directly to digital media buying, creative angle testing, and funnel architecture.
              </p>
            </div>
          </div>
        </div>

        {/* Section 2: Professional Focus */}
        <div className="mb-16">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1">
              Core Pillars
            </span>
            <h2 className="font-editorial text-3xl font-bold text-slate-950 tracking-tight">
              Professional Focus
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {professionalFocusAreas.map((area, idx) => (
              <div
                key={idx}
                className="p-6 rounded-lg bg-white border border-slate-200 hover:border-slate-300 transition-colors"
              >
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
                  0{idx + 1}
                </span>
                <h3 className="font-editorial text-xl font-bold text-slate-950 mb-2">
                  {area.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {area.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 3: Real Experience (Section 11 Requirement - strictly no invented employers) */}
        <div className="p-8 sm:p-10 rounded-lg bg-white border border-slate-200 mb-16">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1">
              Verified Commercial Record
            </span>
            <h2 className="font-editorial text-3xl font-bold text-slate-950 tracking-tight">
              Experience
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Demonstrated track record spanning full-funnel digital marketing strategy, paid media execution, creative testing, and commercial manufacturing operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Rangpur Steel — Digital Marketing Strategist (Featured Experience) */}
            <div className="md:col-span-2 p-6 sm:p-8 rounded-lg bg-[#FAFAFA] border border-slate-300">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-slate-200 mb-6">
                <div>
                  <div className="flex items-center gap-2.5 mb-1.5 text-slate-900">
                    <Building2 className="w-5 h-5 text-slate-900 shrink-0" />
                    <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-slate-950">
                      Rangpur Steel
                    </h3>
                  </div>
                  <p className="text-sm sm:text-base font-semibold text-slate-800">
                    Digital Marketing Strategist <span className="text-slate-400 mx-2 font-normal hidden sm:inline">|</span> <span className="block sm:inline font-normal text-slate-600 text-xs sm:text-sm">Metal Products, CNC Laser-Cut &amp; Powder-Coated Manufacturing</span>
                  </p>
                </div>
                <div className="flex items-center gap-2.5 self-start sm:self-auto">
                  <span className="text-xs font-semibold px-3 py-1 rounded bg-slate-900 text-white whitespace-nowrap">
                    Commercial Role
                  </span>
                  <button
                    onClick={() => {
                      onNavigate('project-detail', 'proj-rangpur-steel');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-slate-900 hover:text-slate-600 underline underline-offset-4 cursor-pointer whitespace-nowrap"
                  >
                    <span>Read Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Performance Metrics Strip */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 p-4 rounded-md bg-white border border-slate-200 mb-6">
                <div className="p-2">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 block">Total Spend</span>
                  <span className="text-base sm:text-lg font-bold text-slate-950 font-editorial block mt-0.5">~$16</span>
                  <span className="text-[11px] text-slate-500 block">Across 4 campaigns</span>
                </div>
                <div className="p-2">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 block">Total Views</span>
                  <span className="text-base sm:text-lg font-bold text-slate-950 font-editorial block mt-0.5">86,000+</span>
                  <span className="text-[11px] text-slate-500 block">Avg CPM ~$0.19</span>
                </div>
                <div className="p-2">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 block">Engagements</span>
                  <span className="text-base sm:text-lg font-bold text-slate-950 font-editorial block mt-0.5">15,000+</span>
                  <span className="text-[11px] text-slate-500 block">17.44% Eng. rate</span>
                </div>
                <div className="p-2">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 block">Reported Sales</span>
                  <span className="text-base sm:text-lg font-bold text-slate-950 font-editorial block mt-0.5">20 Orders</span>
                  <span className="text-[11px] text-slate-500 block">$0.80 Cost / sale</span>
                </div>
                <div className="p-2">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 block">Attributed Rev.</span>
                  <span className="text-base sm:text-lg font-bold text-slate-950 font-editorial block mt-0.5">~$8,000</span>
                  <span className="text-[11px] text-slate-500 block">~$400 Avg order val</span>
                </div>
                <div className="p-2">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 block">Reported ROAS</span>
                  <span className="text-base sm:text-lg font-bold text-slate-950 font-editorial block mt-0.5">~500×</span>
                  <span className="text-[11px] text-slate-500 block">~$1k–$2k Est. profit</span>
                </div>
              </div>

              {/* Responsibilities & Achievements with CNC Manufacturing Image */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                <div className="lg:col-span-8">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-800 block mb-3">
                    Scope of Work &amp; Strategic Execution
                  </span>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                    <li className="flex items-start gap-2.5">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-slate-900 mt-2 shrink-0" />
                      <span>Developed and executed digital marketing strategies for a metal-products business, combining <strong className="font-semibold text-slate-950">market research, product positioning, creative strategy, content, and paid advertising</strong>.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-slate-900 mt-2 shrink-0" />
                      <span>Planned and ran multiple paid advertising campaigns, including <strong className="font-semibold text-slate-950">festival-focused campaigns</strong>, testing different creative concepts and promotional angles to drive awareness, engagement, and sales.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-slate-900 mt-2 shrink-0" />
                      <span>Across four campaigns, managed a total ad spend of approximately <strong className="font-semibold text-slate-950">$16</strong>, generating <strong className="font-semibold text-slate-950">86,000+ views, 15,000+ engagements, and 20 sales</strong>.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-slate-900 mt-2 shrink-0" />
                      <span>The campaigns achieved an average <strong className="font-semibold text-slate-950">CPM of approximately $0.19</strong>, <strong className="font-semibold text-slate-950">$0.80 cost per sale</strong>, and a <strong className="font-semibold text-slate-950">17.44% engagement rate</strong>.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-slate-900 mt-2 shrink-0" />
                      <span>Based on an average order value of approximately <strong className="font-semibold text-slate-950">$400</strong>, the campaigns generated an estimated <strong className="font-semibold text-slate-950">$8,000 in attributed sales revenue</strong>, representing approximately <strong className="font-semibold text-slate-950">500× ROAS</strong> on the reported ad spend.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-slate-900 mt-2 shrink-0" />
                      <span>With estimated profit of approximately <strong className="font-semibold text-slate-950">$50–$100 per order</strong>, the 20 reported sales represented roughly <strong className="font-semibold text-slate-950">$1,000–$2,000 in profit</strong> before considering other business costs.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-slate-900 mt-2 shrink-0" />
                      <span>Developed festival advertising concepts, product creatives, reels, promotional messaging, and campaign ideas designed to connect product value with customer demand.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-slate-900 mt-2 shrink-0" />
                      <span>Conducted product and market research to identify opportunities and improve positioning for CNC laser-cut and powder-coated metal products.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-slate-900 mt-2 shrink-0" />
                      <span>Worked closely with the manufacturing side of the business, developing practical knowledge of <strong className="font-semibold text-slate-950">CNC laser cutting, powder coating, product design, pricing, positioning, and marketability</strong>.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-slate-900 mt-2 shrink-0" />
                      <span>Used performance metrics such as <strong className="font-semibold text-slate-950">CPM, engagement rate, CPA, ROAS, CTR, CPC, and conversion performance</strong> to evaluate campaigns and make optimization decisions.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-slate-900 mt-2 shrink-0" />
                      <span>Worked across the full marketing process—from <strong className="font-semibold text-slate-950">research and product positioning to creative development, paid media, performance analysis, and sales generation</strong>—rather than simply managing social media.</span>
                    </li>
                  </ul>
                </div>

                <div className="lg:col-span-4 mt-4 lg:mt-0">
                  <div className="rounded-lg overflow-hidden border border-slate-200 bg-white shadow-xs">
                    <img
                      src="./images/cnc_laser_steel_1793631154504.jpg"
                      alt="CNC laser cutting precision steel manufacturing at Rangpur Steel"
                      className="w-full h-52 sm:h-64 object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="p-3.5 bg-slate-50 border-t border-slate-200">
                      <span className="text-xs font-semibold text-slate-900 block">Manufacturing &amp; Metal Fabrication</span>
                      <span className="text-[11px] text-slate-600 block mt-0.5 leading-snug">
                        Laser cutting, powder-coating finishes &amp; custom architectural steel fabrication.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Label Leverage — Product Researcher */}
            <div className="md:col-span-2 p-6 sm:p-8 rounded-lg bg-[#FAFAFA] border border-slate-300">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-slate-200 mb-6">
                <div>
                  <div className="flex items-center gap-2.5 mb-1.5 text-slate-900">
                    <Search className="w-5 h-5 text-slate-900 shrink-0" />
                    <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-slate-950">
                      Label Leverage
                    </h3>
                  </div>
                  <p className="text-sm sm:text-base font-semibold text-slate-800">
                    Product Researcher <span className="text-slate-400 mx-2 font-normal hidden sm:inline">|</span> <span className="block sm:inline font-normal text-slate-600 text-xs sm:text-sm">E-Commerce Product Research &amp; Amazon Marketplace Strategy</span>
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-2.5 self-start sm:self-auto">
                  <span className="text-xs font-semibold px-3 py-1 rounded bg-slate-900 text-white whitespace-nowrap">
                    Commercial Impact
                  </span>
                  <a
                    href="https://www.amazon.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-white border border-slate-300 text-slate-900 text-xs font-semibold hover:bg-slate-50 transition-colors whitespace-nowrap"
                  >
                    <span>Selected Amazon Product</span>
                    <ExternalLink className="w-3 h-3 text-slate-600" />
                  </a>
                </div>
              </div>

              {/* Quantitative Amazon Revenue Highlight Strip */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-md bg-white border border-slate-200 mb-6">
                <div className="p-2">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 block">Monthly Amazon Revenue</span>
                  <span className="text-base sm:text-lg font-bold text-slate-950 font-editorial block mt-0.5">~$250,000–$400,000</span>
                  <span className="text-[11px] text-slate-500 block">From selected products</span>
                </div>
                <div className="p-2">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 block">Research Discipline</span>
                  <span className="text-base sm:text-lg font-bold text-slate-950 font-editorial block mt-0.5">Commercial Feasibility</span>
                  <span className="text-[11px] text-slate-500 block">Demand, pricing &amp; competition</span>
                </div>
                <div className="p-2">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 block">Marketplace Focus</span>
                  <span className="text-base sm:text-lg font-bold text-slate-950 font-editorial block mt-0.5">Amazon US &amp; Global</span>
                  <span className="text-[11px] text-slate-500 block">High-velocity product categories</span>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                <div className="lg:col-span-7">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-800 block mb-3">
                    Scope of Research &amp; Commercial Impact
                  </span>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                    <li className="flex items-start gap-2.5">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-slate-900 mt-2 shrink-0" />
                      <span>Conducted product and market research to identify commercially viable opportunities across competitive e-commerce markets.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-slate-900 mt-2 shrink-0" />
                      <span>Analyzed product potential, customer demand, competition, market positioning, and commercial viability to support product-selection decisions.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-slate-900 mt-2 shrink-0" />
                      <span>Contributed to the identification and selection of products that went on to achieve significant sales performance on Amazon.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-slate-900 mt-2 shrink-0" />
                      <span>Products selected through this research are currently generating approximately <strong className="font-semibold text-slate-950">$250,000–$400,000 in monthly Amazon revenue</strong>, demonstrating the commercial impact of effective product research and selection.</span>
                    </li>
                  </ul>
                </div>

                <div className="lg:col-span-5 mt-4 lg:mt-0">
                  <div className="rounded-lg overflow-hidden border border-slate-200 bg-white shadow-xs">
                    <img
                      src="./images/amazon_product_research_1793631154918.jpg"
                      alt="Amazon FBA product research and market intelligence dashboard"
                      className="w-full h-52 sm:h-56 object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="p-3.5 bg-slate-50 border-t border-slate-200">
                      <span className="text-xs font-semibold text-slate-900 block">Amazon FBA Market Intelligence</span>
                      <span className="text-[11px] text-slate-600 block mt-0.5 leading-snug">
                        BSR ranking trends, keyword volume, competitor gap analysis &amp; margin modeling.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Rangpur T Shirt Zone — Founder & Owner */}
            <div className="p-6 sm:p-7 rounded-lg bg-[#FAFAFA] border border-slate-300 flex flex-col justify-between">
              <div>
                <div className="flex items-start justify-between gap-2 pb-4 border-b border-slate-200 mb-5">
                  <div>
                    <div className="flex items-center gap-2 mb-1 text-slate-900">
                      <ShoppingBag className="w-4 h-4 text-slate-900 shrink-0" />
                      <h3 className="font-editorial text-xl sm:text-2xl font-bold text-slate-950">
                        Rangpur T Shirt Zone
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm font-semibold text-slate-800">
                      Founder &amp; Owner <span className="text-slate-400 mx-1.5 font-normal">|</span> <span className="font-normal text-slate-600 text-xs">Direct-to-Consumer Clothing Brand</span>
                    </p>
                  </div>
                  <span className="text-[11px] font-semibold px-2.5 py-1 rounded bg-slate-200 text-slate-800 whitespace-nowrap">
                    ~$3k Profit Exit
                  </span>
                </div>

                {/* Topic Image */}
                <div className="mb-4 rounded-lg overflow-hidden border border-slate-200 bg-white">
                  <img
                    src="./images/d2c_apparel_brand_1793631154743.jpg"
                    alt="Rangpur T Shirt Zone streetwear apparel studio and e-commerce operation"
                    className="w-full h-44 object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="p-2.5 bg-slate-50 border-t border-slate-200">
                    <span className="text-[11px] font-semibold text-slate-800 block">D2C Brand Operations</span>
                    <span className="text-[10px] text-slate-500 block">Product selection, garment production &amp; online sales</span>
                  </div>
                </div>

                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-start gap-2.5">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-slate-900 mt-2 shrink-0" />
                    <span>Founded and operated an independent clothing brand, managing product selection, customers, sales, marketing, and day-to-day business operations.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-slate-900 mt-2 shrink-0" />
                    <span>Managed customer communication and e-commerce activities while developing practical experience in product positioning and direct-to-consumer sales.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-slate-900 mt-2 shrink-0" />
                    <span>Successfully grew the business to profitability and ultimately exited the operation with approximately <strong className="font-semibold text-slate-950">$3,000 in profit</strong>.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-slate-900 mt-2 shrink-0" />
                    <span>Gained firsthand experience across the complete business cycle—from product selection and marketing to sales, customer management, and profitability.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Father's Hotel Business — Business & Operations */}
            <div className="p-6 sm:p-7 rounded-lg bg-[#FAFAFA] border border-slate-300 flex flex-col justify-between">
              <div>
                <div className="flex items-start justify-between gap-2 pb-4 border-b border-slate-200 mb-5">
                  <div>
                    <div className="flex items-center gap-2 mb-1 text-slate-900">
                      <Hotel className="w-4 h-4 text-slate-900 shrink-0" />
                      <h3 className="font-editorial text-xl sm:text-2xl font-bold text-slate-950">
                        Father&apos;s Hotel Business
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm font-semibold text-slate-800">
                      Business &amp; Operations <span className="text-slate-400 mx-1.5 font-normal">|</span> <span className="font-normal text-slate-600 text-xs">Hospitality &amp; Real-World Operations</span>
                    </p>
                  </div>
                  <span className="text-[11px] font-semibold px-2.5 py-1 rounded bg-slate-200 text-slate-800 whitespace-nowrap">
                    Family Enterprise
                  </span>
                </div>

                {/* Topic Image */}
                <div className="mb-4 rounded-lg overflow-hidden border border-slate-200 bg-white">
                  <img
                    src="./images/fathers_hotel_hospitality_1793702727644.jpg"
                    alt="Boutique hotel reception, guest dining lounge and hospitality operations"
                    className="w-full h-48 object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="p-2.5 bg-slate-50 border-t border-slate-200">
                    <span className="text-[11px] font-semibold text-slate-800 block">Hospitality Operations</span>
                    <span className="text-[10px] text-slate-500 block">In-person guest service, digital reservations &amp; facility management</span>
                  </div>
                </div>

                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-start gap-2.5">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-slate-900 mt-2 shrink-0" />
                    <span>Supported the day-to-day operations of the family hotel business, gaining hands-on experience in customer service and business management.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-slate-900 mt-2 shrink-0" />
                    <span>Managed online bookings and the hotel&apos;s social media presence, helping maintain its digital presence and customer communication.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-slate-900 mt-2 shrink-0" />
                    <span>Handled customer inquiries and interactions while developing a practical understanding of customer needs and service expectations.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-slate-900 mt-2 shrink-0" />
                    <span>Built firsthand experience connecting online customer acquisition and communication with real-world business operations.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* My Cats Are Adorable — Social Media Manager */}
            <div className="md:col-span-2 p-6 sm:p-7 rounded-lg bg-[#FAFAFA] border border-slate-300">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-200 mb-5">
                <div>
                  <div className="flex items-center gap-2 mb-1 text-slate-900">
                    <Share2 className="w-4 h-4 text-slate-900 shrink-0" />
                    <h3 className="font-editorial text-xl sm:text-2xl font-bold text-slate-950">
                      My Cats Are Adorable
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm font-semibold text-slate-800">
                    Social Media Manager <span className="text-slate-400 mx-1.5 font-normal">|</span> <span className="font-normal text-slate-600 text-xs sm:text-sm">Organic Audience Engagement &amp; Content Strategy</span>
                  </p>
                </div>
                <span className="text-xs font-semibold px-3 py-1 rounded bg-slate-900 text-white self-start sm:self-auto whitespace-nowrap">
                  Organic Growth
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                <div className="md:col-span-8">
                  <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                    <li className="flex items-start gap-2.5">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-slate-900 mt-2 shrink-0" />
                      <span>Managed the brand&apos;s social media presence, including content planning, publishing, audience engagement, and day-to-day platform management.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-slate-900 mt-2 shrink-0" />
                      <span>Created and managed social content designed to build audience interest and encourage ongoing engagement.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-slate-900 mt-2 shrink-0" />
                      <span>Developed practical experience in social media strategy, content creation, audience behavior, and organic growth.</span>
                    </li>
                  </ul>
                </div>

                <div className="md:col-span-4">
                  <div className="rounded-lg overflow-hidden border border-slate-200 bg-white">
                    <img
                      src="./images/adorable_cats_community_1793702730400.jpg"
                      alt="Adorable domestic cats in natural warm sunlight for pet community social media"
                      className="w-full h-44 object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="p-2.5 bg-slate-50 border-t border-slate-200">
                      <span className="text-[11px] font-semibold text-slate-800 block">Pet Community Engagement</span>
                      <span className="text-[10px] text-slate-500 block">Audience conversation, viral storytelling &amp; content curation</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 4: Skills Grid */}
        <div className="mb-16">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1">
              Verified Capabilities
            </span>
            <h2 className="font-editorial text-3xl font-bold text-slate-950 tracking-tight">
              Skills &amp; Methodologies
            </h2>
          </div>

          <div className="p-8 rounded-lg bg-white border border-slate-200">
            <div className="flex flex-wrap gap-2 sm:gap-2.5">
              {allSkills.map((skill, index) => (
                <span
                  key={index}
                  className="text-xs sm:text-sm font-medium px-3.5 py-1.5 rounded-md bg-slate-50 text-slate-900 border border-slate-200 hover:border-slate-400 hover:bg-white transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Section 5: Education & Languages */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          <div className="p-6 sm:p-8 rounded-lg bg-white border border-slate-200 flex items-start gap-4">
            <div className="p-3 rounded-md bg-slate-100 text-slate-900 shrink-0">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1">
                Education
              </span>
              <h3 className="font-editorial text-xl font-bold text-slate-950">
                Higher Secondary Certificate (HSC)
              </h3>
              <p className="text-sm text-slate-600 mt-1">
                Completed 2025 • Disciplined academic foundation with practical focus on business, economics, and communication.
              </p>
            </div>
          </div>

          <div className="p-6 sm:p-8 rounded-lg bg-white border border-slate-200 flex items-start gap-4">
            <div className="p-3 rounded-md bg-slate-100 text-slate-900 shrink-0">
              <Languages className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1">
                Languages
              </span>
              <h3 className="font-editorial text-xl font-bold text-slate-950">
                English &amp; Bangla
              </h3>
              <p className="text-sm text-slate-600 mt-1">
                Fluent professional English for global marketing research and copy; native Bangla for domestic market consumer communication.
              </p>
            </div>
          </div>
        </div>

        {/* Section 6: Case Studies Grid */}
        <div className="pt-8 border-t border-slate-200">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1">
              Case Study Catalog
            </span>
            <h2 className="font-editorial text-3xl font-bold text-slate-950 tracking-tight">
              Selected Projects
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              Qualitative walkthroughs detailing problem identification, research methodology, strategy, execution, analysis, and key takeaways.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PORTFOLIO_PROJECTS.map((proj) => (
              <div
                key={proj.id}
                className="p-8 rounded-lg bg-white border border-slate-200 hover:border-slate-400 hover:shadow-xs transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-semibold text-slate-500 mb-2 block uppercase tracking-wider">
                    {proj.category}
                  </span>
                  <h3 className="font-editorial text-2xl font-bold text-slate-950 mb-3 leading-snug">
                    {proj.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                    {proj.shortDescription}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {proj.skillsInvolved.map((s, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] px-2.5 py-0.5 rounded bg-slate-100 text-slate-700 font-medium"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-500">Case Study</span>
                  <button
                    onClick={() => {
                      onNavigate('project-detail', proj.id);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-slate-950 hover:underline cursor-pointer"
                  >
                    <span>Read Full Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

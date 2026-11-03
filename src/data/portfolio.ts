import { PortfolioProject } from '../types';

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 'proj-rangpur-steel',
    slug: 'rangpur-steel-digital-marketing-paid-ads-strategy',
    title: 'Rangpur Steel: Full-Funnel Digital Marketing Strategy, Festival Campaigns & Paid Media Performance',
    category: 'Media Buying & Performance Marketing',
    shortDescription: 'Developing and executing end-to-end digital marketing strategies for a metal-products business, combining market research, product positioning, creative strategy, and festival advertising.',
    company: 'Rangpur Steel',
    role: 'Digital Marketing Strategist',
    keyMetrics: [
      { label: 'Total Spend', value: '~$16', detail: 'Across 4 campaigns' },
      { label: 'Total Views', value: '86,000+', detail: 'Avg CPM ~$0.19' },
      { label: 'Engagements', value: '15,000+', detail: '17.44% Eng. rate' },
      { label: 'Attributed Sales', value: '20 Orders', detail: '$0.80 Cost / sale' },
      { label: 'Estimated Rev.', value: '~$8,000', detail: '~$400 Average order' },
      { label: 'Reported ROAS', value: '~500×', detail: '~$1k–$2k Est. profit' }
    ],
    skillsInvolved: [
      'Digital Marketing Strategy',
      'Meta Ads & Media Buying',
      'Market & Product Research',
      'Creative Strategy & Reels',
      'CPM, CPA & ROAS Optimization',
      'Product Positioning & Pricing',
      'CNC Laser & Metal Manufacturing'
    ],
    problem:
      'A commercial metal-products business specializing in CNC laser-cut and powder-coated items needed to expand reach beyond local referrals, establish structured digital product positioning, and capture seasonal and festival demand without committing large, unverified advertising budgets.',
    research:
      'Conducted extensive product and market research to identify high-potential commercial and residential demand for CNC laser-cut and powder-coated metal products. Worked closely with the manufacturing side of the business, developing practical firsthand knowledge of CNC laser cutting, powder coating finishes, product design durability, pricing margins, and customer marketability. Evaluated audience demographics, seasonal buying habits, and competitors in the architectural and decorative metal segment.',
    strategy:
      'Designed a holistic marketing process combining market research, product positioning, creative strategy, content, and paid advertising—rather than treating marketing as superficial social media management. Formulated festival-focused advertising concepts, product reels, and persuasive promotional messaging engineered to directly connect physical product craftsmanship with customer purchase intent. Established clear economic targets: average order value of ~$400, expected gross profit of ~$50–$100 per unit, and disciplined CPA thresholds.',
    execution:
      'Produced engaging festival advertising concepts, product creatives, high-retention video reels, and promotional copy. Planned and deployed four distinct paid advertising campaigns testing different creative angles, visual formats, and promotional hooks across Meta Ads Manager, managing a total combined ad spend of approximately $16 under controlled budget pacing.',
    analysis:
      'Rigorously evaluated campaign health using full diagnostic metrics: CPM, engagement rate, CPA, ROAS, CTR, CPC, and conversion performance. Observed an exceptional audience response to festival-aligned creative angles, yielding an average CPM of approximately $0.19 and an outstanding engagement rate of 17.44%, while keeping customer acquisition cost at approximately $0.80 per sale.',
    result:
      'Across four campaigns with ~$16 in total ad spend, generated 86,000+ views, 15,000+ engagements, and 20 reported sales. Based on the ~$400 average order value, the campaigns generated an estimated $8,000 in attributed sales revenue (representing approximately 500× ROAS on the reported ad spend) and an estimated $1,000–$2,000 in gross profit before other business costs.',
    keyLearning:
      'Working across the complete marketing continuum—from manufacturing processes, product design, and unit economics to creative messaging and paid media data analysis—delivers exponential returns compared to treating advertising as isolated platform management.'
  },
  {
    id: 'proj-1',
    slug: 'retail-shop-to-ecommerce-inventory-validation',
    title: 'Retail Storefront to Digital Catalog: Customer Feedback Integration & Merchandising Strategy',
    category: 'E-commerce & Business Operations',
    shortDescription: 'Translating face-to-face retail customer inquiries, stock turnover patterns, and objection handling into an organized digital catalog and initial campaign setup.',
    skillsInvolved: [
      'Customer Communication',
      'Inventory Analysis',
      'E-commerce Strategy',
      'Market Research',
      'Product Photography & Editing',
      'Spreadsheets'
    ],
    problem:
      'A physical retail store faced foot-traffic lulls during mid-week off-peak hours and lacked any digital reservation or ordering system. Out-of-neighborhood customers who previously visited had no structured way to view available inventory or inquire about recurring restocking schedules.',
    research:
      'Conducted informal qualitative question tracking at the front sales counter over a two-week period. Documented the top 15 most frequent sizing, color, durability, and pricing questions asked by walk-in buyers. Cross-referenced these inquiries against physical stock movement sheets to isolate hero items with steady demand from slow-moving dead inventory.',
    strategy:
      'Prioritized a curated catalog of high-demand items rather than attempting to digitize hundreds of low-margin SKUs at once. Structured the digital product listings to answer the exact counter objections documented during the in-person research phase, emphasizing clear sizing references and direct customer support communication.',
    execution:
      'Created standardized photo assets using basic studio lighting and Canva post-processing. Drafted product descriptions addressing material feel and care requirements. Built a clean spreadsheet-backed inventory tracker and connected customer messaging channels to handle inquiries with rapid response protocols.',
    analysis:
      'Tracked inquiry-to-order progression, catalog engagement, and common recurring points of confusion in customer messages. Noticed that clear upfront measurements and fabric weight specifications significantly reduced back-and-forth chat friction prior to order confirmation.',
    result:
      'Successfully established a structured digital inquiry workflow that extended the physical store’s reach beyond walk-in foot traffic, turning local customer interest into repeat orders and demonstrating how physical retail observations provide direct competitive advantages in digital channels.',
    keyLearning:
      'The best source of digital copy and merchandising insight is listening to people who have already pulled out their wallets in real life. If customers consistently ask the same question in person, that detail is non-negotiable on your digital listing.'
  },
  {
    id: 'proj-2',
    slug: 'meta-ads-creative-testing-framework',
    title: 'Meta Ads Creative Testing Architecture: Systematic Hook & Angle Experimentation Framework',
    category: 'Media Buying & Performance Marketing',
    shortDescription: 'Designing a structured testing methodology to evaluate visual hooks, headline angles, and call-to-action variants before allocating scaling budgets.',
    skillsInvolved: [
      'Media Buying',
      'Meta Ads',
      'Campaign Strategy',
      'CTR & CPC Analysis',
      'Audience Research',
      'Copywriting',
      'Canva'
    ],
    problem:
      'Many campaigns suffer from creative fatigue and erratic performance because budgets are launched into broad ad sets with unorganized creative variants, making it impossible to diagnose whether an underperforming ad failed due to its hook, its offer, or its target audience.',
    research:
      'Audited public competitor ad libraries to catalog common visual formats, recurring first-three-second video hooks, and dominant value propositions across the category. Grouped findings into three distinct customer motivation angles: problem agitation, lifestyle convenience, and price/value reassurance.',
    strategy:
      'Built a modular creative matrix isolating one variable at a time: keeping the core offer and landing destination identical while systematically varying the opening 3-second hook (visual vs. text-led vs. question-led) across controlled budget allocations.',
    execution:
      'Produced creative assets with distinct visual hooks using clean typography and photo editing tools. Configured Meta Ads campaign structures with separate testing and consolidation stages, standardizing naming conventions, tracking UTM tags, and logging daily diagnostic metrics into analysis spreadsheets.',
    analysis:
      'Monitored outbound click-through rates (CTR), link CPCs, thumb-stop rates (3-second video views / impressions), and landing page drop-off. Separated statistical anomalies from genuine creative resonance to identify winning angles worth sustaining.',
    result:
      'Developed a repeatable, disciplined testing protocol that replaces subjective creative guesswork with structured behavioral data, preventing wasted ad spend on unvalidated concepts and providing clear guidelines for ongoing creative production.',
    keyLearning:
      'Creative strategy is the single most powerful targeting lever on modern ad platforms. If your opening hook fails to command attention in the first two seconds, audience targeting and bidding adjustments cannot save the campaign.'
  },
  {
    id: 'proj-3',
    slug: 'customer-objection-retargeting-funnel',
    title: 'Full-Funnel Advertising Architecture: Cold Prospecting to Dynamic Retargeting Design',
    category: 'Advertising Strategy & Funnels',
    shortDescription: 'Structuring an end-to-end advertising funnel that guides unfamiliar prospects from initial problem awareness through social proof and objection-clearing retargeting.',
    skillsInvolved: [
      'Campaign Strategy',
      'Retargeting',
      'Funnels & CRO',
      'Copywriting',
      'CPM & CPA Analysis',
      'Customer Psychology'
    ],
    problem:
      'Relying solely on single-touch cold advertising leads to low conversion rates because first-time visitors rarely purchase on their very first site visit. Without a structured retargeting and objection-handling follow-up, paid traffic acquisition becomes unnecessarily costly.',
    research:
      'Studied the complete user journey from initial ad impression to checkout drop-off. Mapped out the psychological states of visitors: Top-of-Funnel (unaware/problem-aware), Middle-of-Funnel (evaluating options/comparing), and Bottom-of-Funnel (cart abandoners with specific last-minute hesitations).',
    strategy:
      'Designed a three-tier campaign architecture: 1) Broad cold prospecting focusing on pattern interruption and problem clarity, 2) Middle-of-funnel retargeting showcasing product details, real unboxings, and brand mission, and 3) Bottom-of-funnel retargeting tackling specific purchase hesitations such as return policies, delivery reliability, and customer service availability.',
    execution:
      'Drafted targeted copy variants matching each funnel stage. Structured ad sets with appropriate exclusion windows (excluding recent purchasers to prevent ad fatigue and wasted impressions). Configured clear call-to-actions tailored to user intent at each milestone.',
    analysis:
      'Evaluated cost-per-thousand impressions (CPM), frequency caps to prevent burnout, and click-to-cart conversion rates across each audience segment. Identified how rapidly retargeting frequency reached diminishing returns and calibrated budget distribution accordingly.',
    result:
      'Established a coherent full-funnel blueprint that maximizes value from every acquired visit, ensuring advertising capital actively supports each phase of customer decision-making rather than treating every impression as an isolated cold transaction.',
    keyLearning:
      'Retargeting is not just about showing the same ad to people repeatedly until they get annoyed; it is about delivering the specific reassurance they need at the exact moment they paused their decision.'
  },
  {
    id: 'proj-4',
    slug: 'content-and-copy-audit-for-direct-response',
    title: 'Direct-Response Copywriting & Content Audit: Clarifying Value Propositions and Eliminating Fluff',
    category: 'Content & Copywriting',
    shortDescription: 'Rewriting promotional copy and social media assets to replace corporate jargon with sharp, benefit-driven messaging and clear calls to action.',
    skillsInvolved: [
      'Copywriting',
      'Content Writing',
      'Social Media Content',
      'Consumer Research',
      'Persuasive Messaging',
      'Brand Tone'
    ],
    problem:
      'Marketing materials frequently rely on vague superlatives ("best quality", "revolutionary solutions") that communicate nothing specific to prospective buyers, leading to passive disinterest and poor response rates.',
    research:
      'Reviewed customer reviews, comments, and competitor messaging across comparable consumer categories. Extracted actual customer vocabulary—noticing how real buyers describe their frustration with slow shipping, complicated setups, or poor durability.',
    strategy:
      'Rebuilt the messaging hierarchy around concrete, verifiable benefits. Applied direct-response principles: one primary goal per piece of content, strong editorial headlines, specific visual proof, and clear next steps.',
    execution:
      'Authored modular copy packages comprising hook variations, body paragraphs answering immediate objections, bulleted benefit summaries, and active button text. Formatted content for social media carousels, static ads, and promotional emails.',
    analysis:
      'Compared reader engagement, clarity of response, and question frequency when using concise, specific language versus abstract branding statements. Confirmed that copy referencing tangible everyday situations generated noticeably clearer feedback.',
    result:
      'Created a comprehensive brand copy guide and direct-response content library that transforms passive product descriptions into active, persuasive communications grounded in customer reality.',
    keyLearning:
      'Clear beats clever every single time. When you write directly to a customer’s tangible everyday reality in plain, confident language, your marketing immediately stands out from the noise.'
  }
];

import { MarketResearchArticle } from '../types';

export const MARKET_RESEARCH_ARTICLES: MarketResearchArticle[] = [
  {
    id: 'mr-1',
    slug: 'fragrance-market-d2c-saturation-acquisition',
    title: 'The Direct-to-Consumer Fragrance Market: Premiumization, Sample Funnels & Acquisition Realities',
    subtitle: 'An analysis of consumer intent, discovery-kit mechanics, and media buying challenges in a scent-blind digital ecosystem.',
    date: 'February 18, 2026',
    category: 'E-commerce & Consumer Goods',
    readingTime: '7 min read',
    excerpt: 'How perfume and scent brands solve the sensory gap online by engineering discovery sets, high-margin refills, and educational video hooks.',
    imageUrl: './images/fragrance_d2c_market_1793702733032.jpg',
    imageCaption: 'Luxury minimalist D2C sample discovery kit (5×5ml vials) and 50ml Eau de Parfum formulation showcase.',
    graphData: {
      chartTitle: 'Discovery Kit Funnel vs. Direct Full-Bottle Acquisition Economics',
      chartSubtitle: 'Unit economic breakdown comparing cold-traffic conversion pathways across a 60-day customer lifecycle',
      type: 'funnel',
      metricHighlight: {
        label: '60-Day Blended ROAS',
        value: '3.8× vs. 1.2×',
        subtext: 'Discovery voucher funnel yields 216% higher net profitability per acquired customer'
      },
      dataPoints: [
        {
          label: 'Stage 1: Cold Ad Acquisition',
          value: '$30 Discovery AOV',
          secondaryValue: 'CPA: $28.00 (Self-Liquidating)',
          percentage: 100,
          benchmark: 'Full-bottle cold CPA: $84.00 (Loss-making)',
          note: 'Low friction entry removes scent-blind hesitation on Meta & TikTok feeds.'
        },
        {
          label: 'Stage 2: In-Home Sensory Trial',
          value: '88% Unboxing Rate',
          secondaryValue: '7–14 Day Wear Experience',
          percentage: 88,
          benchmark: 'Direct return rate: <2%',
          note: 'Customer trials 5 curated olfactive profiles in physical everyday environments.'
        },
        {
          label: 'Stage 3: 100% Voucher Redemption',
          value: '42% Conversion Rate',
          secondaryValue: 'Redeems $30 toward full $125 bottle',
          percentage: 42,
          benchmark: 'Standard email conversion: 8%',
          note: 'Time-sensitive 30-day redemption window triggered via automated Klaviyo/SMS loops.'
        },
        {
          label: 'Stage 4: 60-Day Net Realized LTV',
          value: '$145 Cumulative LTV',
          secondaryValue: 'Blended ROAS: 3.8×',
          percentage: 76,
          benchmark: 'Net Margin: +$62/customer',
          note: 'High repeat refill rates and complementary home diffuser cross-sells.'
        }
      ],
      takeaway: 'In sensory-blind e-commerce categories, media buyers must optimize for frontend customer qualification rather than single-transaction margin. A break-even discovery kit funnels qualified consumers into high-margin full-bottle replenishment.'
    },
    introduction:
      'Selling perfume online violates the primary sensory prerequisite of the product category: the buyer cannot smell the formulation through a smartphone screen. Despite this foundational limitation, the global fragrance sector has seen substantial expansion across direct-to-consumer and omnichannel retail. This research evaluates how modern brands bridge the sensory disconnect using structured discovery funnels, narrative-driven creative strategy, and tailored retention economics.',
    marketOverview:
      'The fragrance category is shifting from legacy designer licensing models toward artisanal, functional, and niche olfactive identities. Consumers increasingly treat scent as an emotional wardrobe rather than a signature lifetime staple. Growth is especially pronounced among demographic segments seeking clean ingredients, transparent formulation stories, and genderless profiles.',
    audienceDemand:
      'Modern buyers are motivated by identity reinforcement, mood elevation, and niche status. Search demand trends indicate high volume for notes-based exploration (e.g., vanilla amber, sandalwood, fresh citrus) alongside functional claims (e.g., focus, relaxation, longevity). Customer hesitation centers primarily on blind-buy regret and high upfront price barriers.',
    competition:
      'The competitive landscape consists of three distinct tiers: heritage luxury houses dominating department stores and airport duty-free; venture-backed direct-to-consumer challenger brands using rapid digital testing; and indie perfume houses leveraging community word-of-mouth. Challenger brands primarily win on narrative specificity and accessible entry pricing.',
    productsServices:
      'The hero product category is the Eau de Parfum (50ml to 100ml bottles), complemented by discovery sample sets (2ml to 5ml vials in bundles of 5–8 scents), solid balms, and home fragrance diffusers designed to lift average basket size.',
    pricingObservations:
      'Full-size bottles typically range between $85 and $165. To lower entry hesitation, successful operators price introductory discovery kits between $25 and $40, frequently bundling a 100% redemption voucher toward any future full-bottle order within 30 days.',
    advertisingLandscape:
      'Because physical scent cannot be transmitted digitally, top-performing paid social creatives rely heavily on synesthetic metaphors: evocative visual textures, ambient soundscapes, emotional narrative storytelling, and relatable comparison hooks (e.g., "if this perfume were a rainy afternoon in a library"). Video views and consideration campaigns feed warm audiences into sampler offer retargeting.',
    opportunities: [
      'Discovery-set voucher funnels that self-liquidate cold ad spend while seeding prospective lifetime buyers.',
      'Educational UGC demonstrating scent layering, wear-time longevity tests, and crowd reaction experiments.',
      'Seasonal gifting bundles with low post-purchase friction and high average order value (AOV).'
    ],
    risks: [
      'Elevated sample fulfillment shipping costs relative to low initial transaction values.',
      'Sub-par voucher redemption rates if automated email follow-up sequence is delayed or unpersuasive.',
      'High return and complaint friction when scent expectations clash with reality without clear return policies.'
    ],
    myAnalysis:
      'From a media buying and performance marketing perspective, treating a $120+ fragrance bottle as a direct cold-traffic purchase is generally cost-prohibitive unless brand equity is already massive. The most capital-efficient strategy is engineering the unit economics around a $30 discovery box with free shipping. The paid media objective is not immediate full-bottle margin; it is acquiring a verified, qualified customer into an intensive email and SMS onboarding loop where full-bottle conversion takes place over the subsequent 21 days.',
    conclusion:
      'Brands that view advertising as mere traffic arbitrage struggle in sensory-heavy categories. Those that systematically align the customer discovery journey, sample pricing, and narrative creative frameworks unlock sustainable customer acquisition.'
  },
  {
    id: 'mr-2',
    slug: 'retail-to-digital-omnichannel-insights',
    title: 'Offline Retail Dynamics Applied to Digital Marketing: What In-Store Customer Behavior Teaches Media Buyers',
    subtitle: 'Examining foot traffic friction, physical product handling, and direct verbal objections to engineer higher-converting digital funnels.',
    date: 'January 24, 2026',
    category: 'Market Strategy & Retail',
    readingTime: '6 min read',
    excerpt: 'Firsthand observations of walk-in store visitors reveal why digital ad creatives often miss the real customer objections that drive buying decisions.',
    imageUrl: './images/retail_storefront_dynamics_1793702728377.jpg',
    imageCaption: 'Modern apparel boutique sales floor showing curated display tables and authentic customer touchpoints.',
    graphData: {
      chartTitle: 'In-Store Physical Objection Distribution vs. Digital Page Bounce Rate Impact',
      chartSubtitle: 'Field data tracking 180+ in-person customer hesitations and their direct digital bounce correlation',
      type: 'comparison',
      metricHighlight: {
        label: 'Top Objection Vector',
        value: '38% Material Hand-Feel',
        subtext: 'Causes 34% of silent landing page bounces when macro fabric video proof is absent'
      },
      dataPoints: [
        {
          label: 'Material Hand-Feel & Fabric Weight',
          value: '38% of In-Store Questions',
          secondaryValue: '34% Digital Bounce Impact',
          percentage: 38,
          benchmark: 'Fix: Unedited 4K macro weave video clips',
          note: 'Shoppers rub fabric between thumb and forefinger before checking price tag.'
        },
        {
          label: 'Fit Proportions & Real-World Sizing',
          value: '29% of In-Store Questions',
          secondaryValue: '28% Digital Bounce Impact',
          percentage: 29,
          benchmark: 'Fix: Multi-body size video references',
          note: 'Questions regarding chest tightness and hem length dictate dressing room drop-off.'
        },
        {
          label: 'Care Instructions & Wash Durability',
          value: '18% of In-Store Questions',
          secondaryValue: '19% Digital Cart Drop-off',
          percentage: 18,
          benchmark: 'Fix: Machine-wash guarantee badge',
          note: 'Buyers frequently check internal care labels for dry-clean requirements.'
        },
        {
          label: 'Return / Exchange Reassurance',
          value: '15% of In-Store Questions',
          secondaryValue: '24% Checkout Abandonment',
          percentage: 15,
          benchmark: 'Fix: Prepaid return label promise above fold',
          note: 'Immediate verbal reassurance from store associates converts hesitant shoppers on the spot.'
        }
      ],
      takeaway: 'Digital landing pages suffer silent bounces because visitors cannot ask questions aloud. By injecting verbatim physical counter objections directly into ad headlines and hero copy, conversion rates increase substantially.'
    },
    introduction:
      'Digital marketers often operate exclusively behind analytical dashboards, spreadsheet formulas, and Ads Manager tables. Yet, the foundational mechanics of customer psychology remain identical whether someone walks across a store threshold or taps through a smartphone feed. This research examines insights gathered from physical retail operations and explains how face-to-face buyer friction directly translates into higher-converting creative strategy and landing page structure.',
    marketOverview:
      'While global commerce continues its digital migration, physical retail remains an essential baseline of customer discovery and trust. Brands that integrate retail realities into their online messaging outperform purely theoretical digital campaigns because their copy addresses tangible customer hesitation.',
    audienceDemand:
      'In a physical store, customers interact with inventory directly: feeling fabric weights, checking seam durability, asking about care instructions, comparing color variations in natural lighting, and inquiring about exchange ease. Online, customers have the exact same hesitations, but when unaddressed, they simply bounce silently instead of speaking to a salesperson.',
    competition:
      'Pure-play digital competitors frequently rely on generic aesthetic imagery and bulleted specifications. Competitors who incorporate real-world customer objection handling into their creative and copy establish greater immediate credibility.',
    productsServices:
      'Everyday consumer products, lifestyle apparel, accessories, personal tech, and household goods where tactile reassurance dictates purchasing confidence.',
    pricingObservations:
      'Physical shoppers often evaluate value relative to immediate tangible utility. In digital environments, price resistance spikes when hidden shipping fees, complex checkout steps, or unclear return terms are introduced late in the flow.',
    advertisingLandscape:
      'The paid advertising landscape is saturated with polished studio renders that fail to answer practical customer questions. High-performing ads increasingly mimic the informative clarity of an experienced store associate addressing a buyer on the sales floor.',
    opportunities: [
      'Drafting ad copy directly from recurring questions heard on the retail shop floor.',
      'Utilizing unedited macro-detail video shots showing zippers, stitching, textures, and real-world scale.',
      'Structuring landing page FAQs around actual deal-breaking customer objections rather than filler text.'
    ],
    risks: [
      'Assuming online consumer patience matches the patience of a physical shopper who has already traveled to a venue.',
      'Neglecting mobile load speed and visual legibility on smaller handheld devices.'
    ],
    myAnalysis:
      'When working on retail-facing business operations and customer communication, the quickest revelation is that visitors rarely leave because of minor visual aesthetics—they leave because an essential doubt was left unanswered. Translating this into performance marketing means auditing ad creative not just for CTR or vanity engagement, but for clarity of offer and friction reduction. If five customers in a shop ask whether a bag fits a 15-inch laptop, that exact question belongs in your ad headline and your primary landing page fold.',
    conclusion:
      'Media buyers who spend time observing actual customer interactions make better marketing decisions. Bridging the gap between real-world buyer friction and digital campaign architecture is a decisive competitive advantage.'
  },
  {
    id: 'mr-3',
    slug: 'functional-beverage-category-advertising-landscape',
    title: 'The Functional Beverage Landscape: Regulatory Constraints, Ingredient Claims & Performance Ad Hooks',
    subtitle: 'A strategic deconstruction of nootropic, hydration, and botanical drinks navigating compliance while maintaining high CTRs.',
    date: 'December 12, 2025',
    category: 'Consumer Goods & Media Strategy',
    readingTime: '8 min read',
    excerpt: 'Analyzing how functional drink brands maintain compliance with advertising platform policies while communicating tangible everyday benefits.',
    imageUrl: './images/functional_beverage_market_1793702731901.jpg',
    imageCaption: 'Studio product photography of matte functional botanical sparkling water cans with zero sugar.',
    graphData: {
      chartTitle: 'Creative Hook Strategy: Platform Policy Compliance vs. CTR & Blended CAC',
      chartSubtitle: 'Benchmarking 4 creative angles across Meta ad review algorithms and user acquisition efficiency',
      type: 'matrix',
      metricHighlight: {
        label: 'Optimal Sweet Spot',
        value: '4.12% CTR / $18.40 CAC',
        subtext: 'Lifestyle state hooks ("2 PM desk slump") deliver top acquisition without compliance risk'
      },
      dataPoints: [
        {
          label: 'Angle A: Explicit Medical / "Cure" Claims',
          value: '0.85% Realized CTR',
          secondaryValue: 'Policy Risk: 95% (Account Strike)',
          percentage: 15,
          benchmark: 'Banned: "Cures fatigue & chronic brain fog"',
          note: 'Guaranteed ad rejection and penalty on Meta/Google ad accounts.'
        },
        {
          label: 'Angle B: Contextual Lifestyle State Hook',
          value: '4.12% Outbound CTR',
          secondaryValue: 'Policy Risk: 5% (Fully Compliant)',
          percentage: 88,
          benchmark: 'Blended CAC: $18.40 | $44 Variety Pack AOV',
          note: 'Hooks: "The 2 PM coffee crash alternative" or "Afternoon focus without the jitters".'
        },
        {
          label: 'Angle C: Transparent Ingredient & Ratio Science',
          value: '3.55% Outbound CTR',
          secondaryValue: 'Policy Risk: 12% (Safe Structure)',
          percentage: 74,
          benchmark: 'Blended CAC: $22.10 | High subscription rate',
          note: 'Clear macro shots of adaptogen dosages (e.g. 200mg L-Theanine + Magnesium).'
        },
        {
          label: 'Angle D: Sensory Cold-Can Crack & Taste Reaction',
          value: '2.85% Outbound CTR',
          secondaryValue: 'Policy Risk: 2% (Fully Compliant)',
          percentage: 60,
          benchmark: 'Blended CAC: $26.80 | High brand awareness',
          note: 'ASMR ice pour and refreshing beverage flavor demonstration.'
        }
      ],
      takeaway: 'Top performance media buyers never fight ad review policies with borderline health claims. Transforming medical claims into relatable everyday lifestyle states unlocks the highest outbound CTR while keeping ad accounts in pristine standing.'
    },
    introduction:
      'The consumer packaged goods (CPG) beverage sector has shifted dramatically from empty-calorie sodas toward functional beverages offering cognitive clarity, sustained hydration, sleep enhancement, and gut health. However, advertising these formulations across Meta and Google requires navigating strict policy guardrails regarding health and medical claims. This research examines how category leaders navigate policy restrictions while driving robust customer acquisition.',
    marketOverview:
      'The global functional drinks space continues to expand across modern grocery chains and e-commerce subscription platforms. The market is populated by alternatives to coffee, afternoon energy crashes, and alcoholic evening unwinders.',
    audienceDemand:
      'Demand is driven by active professionals, students, and wellness-conscious demographics seeking reliable daily energy without nervous jitters or sugar crashes. Secondary drivers include clean label ingredients, low calorie counts, and convenient packaging.',
    competition:
      'Legacy energy drink conglomerates battle nimble, aesthetic direct-to-consumer brands that leverage creator partnerships, subscription models, and hyper-targeted paid social advertising.',
    productsServices:
      'Ready-to-drink canned beverages in 12-packs and 24-packs, alongside soluble powder stick-packs offering lower shipping costs and flexible trial pricing.',
    pricingObservations:
      'Single cans retail between $3.00 and $4.50 in physical retail. Digital starter bundles typically range between $35 and $55 for a 12-can variety pack, with 15% to 20% discounts incentivizing recurring monthly subscriptions.',
    advertisingLandscape:
      'Ad policies strictly prohibit claims of curing, treating, or diagnosing conditions (e.g., "cures anxiety" or "ends fatigue"). Winning campaigns pivot their creative angle to experiential lifestyle states: "the 2 PM desk slump", "weekend focus without the crash", or visual comparisons showing clean ingredient labels alongside traditional sugar-heavy cans.',
    opportunities: [
      'Powdered format testing to reduce shipping weight and optimize cost-per-acquisition (CPA) on cold traffic.',
      'Subscription trial offers designed around a 14-day daily routine test.',
      'Targeting contextual dayparting (morning vs. afternoon slumps) on paid social channels.'
    ],
    risks: [
      'Ad account penalties or creative rejections caused by aggressive or unapproved health benefit wording.',
      'High churn rates after initial discounted subscription boxes if product taste fails customer expectations.'
    ],
    myAnalysis:
      'Success in this category hinges on the alignment between offer structure and shipping economics. Liquids are heavy and expensive to deliver on a single-pack order. Therefore, performance marketers must design creative and bundle architectures that drive multi-pack variety boxes or push powdered stick-packs on cold traffic, saving heavy ready-to-drink cans for retargeting and loyal replenishment loops.',
    conclusion:
      'Mastering category-specific constraints is what separates strategic media buyers from basic campaign executors. When platform policies limit overt claims, creative storytelling and customer empathy become the real performance levers.'
  },
  {
    id: 'mr-4',
    slug: 'emerging-market-ecommerce-cash-on-delivery-funnels',
    title: 'E-commerce in Developing Markets: Cash-on-Delivery Realities, Confirmation Funnels & ROAS Hygiene',
    subtitle: 'How delivery return rates, phone verification calls, and audience distrust reshape performance marketing metrics.',
    date: 'November 05, 2025',
    category: 'E-commerce & Regional Strategy',
    readingTime: '6 min read',
    excerpt: 'In markets dominated by cash-on-delivery (COD), front-end Ads Manager ROAS is a misleading metric without measuring fulfillment confirmation and return-to-origin rates.',
    imageUrl: './images/ecommerce_cod_logistics_1793702731937.jpg',
    imageCaption: 'E-commerce packaging fulfillment line with digital doorstep delivery verification terminal.',
    graphData: {
      chartTitle: 'Front-End Meta ROAS vs. True Net Delivered Cash Waterfall',
      chartSubtitle: 'Financial attrition model tracking $10,000 in gross Ads Manager recorded orders through physical courier delivery',
      type: 'waterfall',
      metricHighlight: {
        label: 'Net Delivered ROAS',
        value: '2.49× True vs 4.60× Dashboard',
        subtext: '46% of front-end recorded revenue is lost to cancellation, doorstep refusal, and courier fees'
      },
      dataPoints: [
        {
          label: '1. Gross Ads Manager Recorded Revenue',
          value: '$10,000 Gross (4.60× ROAS)',
          secondaryValue: 'Spend: $2,174 | 333 Initial Orders',
          percentage: 100,
          benchmark: 'Dashboard metric seen by standard buyers',
          note: 'Based on standard checkout pixel firing upon online order placement.'
        },
        {
          label: '2. Phone / WhatsApp Confirmation Drop',
          value: '-$1,800 (-18% Orders)',
          secondaryValue: 'Fake numbers, buyer remorse, duplicates',
          percentage: 82,
          benchmark: 'Confirmed: 273 orders ($8,200 dispatch)',
          note: 'Manual or automated phone verification filters out invalid customer intent.'
        },
        {
          label: '3. Doorstep Refusal & Return-to-Origin (RTO)',
          value: '-$2,296 (-28% Transit Refusal)',
          secondaryValue: 'Customer absent, rider delay, impulse regret',
          percentage: 59,
          benchmark: 'Successfully Delivered: 196 orders ($5,904)',
          note: 'Courier attempts 2–3 delivery visits before sending package back to warehouse.'
        },
        {
          label: '4. Return Freight Penalty & Handling Fee',
          value: '-$480 Courier Fees',
          secondaryValue: '77 returned parcels @ ~$6.23 round-trip freight',
          percentage: 54,
          benchmark: 'Net Cash Collected: $5,424',
          note: 'Logistics partners charge merchant both forward and reverse shipping costs.'
        },
        {
          label: '5. True Net Delivered Realization',
          value: '$5,424 Net Realized (2.49× ROAS)',
          secondaryValue: 'Gross Profit before COGS: +$3,250',
          percentage: 54,
          benchmark: 'Actual merchant bank deposit',
          note: 'The only reliable metric for media buying scale in cash-on-delivery economies.'
        }
      ],
      takeaway: 'In developing e-commerce ecosystems, evaluating campaigns on Ads Manager purchase ROAS leads to inventory exhaustion and insolvency. Media buying must be tethered directly to courier delivery completion reconciliation.'
    },
    introduction:
      'In emerging digital markets—particularly throughout South Asia, Southeast Asia, and parts of the Middle East—cash-on-delivery (COD) accounts for the overwhelming majority of online consumer orders. This structural payment environment fundamentally alters performance marketing. Campaigns cannot simply optimize for standard checkout events on Meta or TikTok; they must account for order verification, rider delivery success, and return-to-origin (RTO) attrition.',
    marketOverview:
      'Mobile internet penetration has brought millions of new consumers online. However, payment gateway friction and low credit card penetration mean customers expect to inspect physical goods before parting with cash. Consequently, gross orders placed on a website do not equal realized revenue.',
    audienceDemand:
      'Consumers demand physical reassurance, swift local delivery timelines, visible customer support phone numbers, and simple return options. Trust is fragile, and skepticism toward online storefronts remains prevalent.',
    competition:
      'Local sellers compete aggressively on price and visual presentation. Those who invest in prompt phone verification, clear order updates via SMS/WhatsApp, and accurate product imagery significantly reduce order cancellation rates.',
    productsServices:
      'Fast-moving consumer apparel, everyday kitchen gadgets, mobile accessories, and localized beauty solutions with wide general appeal.',
    pricingObservations:
      'Typical sweet-spot price points sit between 1,200 and 3,500 local currency units (approx. $10 to $30 USD). Orders above this threshold experience steeper COD refusal rates upon doorstep arrival.',
    advertisingLandscape:
      'Paid advertising relies heavily on local language creatives (e.g., Bangla or regional dialects), video demonstrations showing the real product in hand, and prominent callouts confirming "Cash on Delivery Available" and "Check Before Payment".',
    opportunities: [
      'Automated or semi-automated WhatsApp order confirmation bots immediately following online checkout.',
      'Creative hooks featuring real packaging unboxings to prove stock availability and authentic quality.',
      'Geographic exclusions of postal zones with historically documented high delivery failure rates.'
    ],
    risks: [
      'Misleading Meta ROAS metrics: an ad displaying 5x ROAS in Ads Manager can translate to net financial losses if 35% of shipments return undelivered.',
      'Inventory tie-up during lengthy courier transit and return cycles.'
    ],
    myAnalysis:
      'In COD-heavy environments, media buying cannot be isolated from operational logistics. A media buyer who evaluates only cost-per-click (CPC) or cost-per-order on the dashboard will burn capital. The true north-star metric is Net Delivered ROAS. Media buyers must integrate weekly courier reconciliation spreadsheets with their campaign testing sheets, killing ad sets that generate low-quality impulsive orders that fail doorstep handover.',
    conclusion:
      'Performance marketing is only as strong as the physical fulfillment loop behind it. Understanding regional payment infrastructure and consumer friction turns local market challenges into profitable competitive moats.'
  }
];

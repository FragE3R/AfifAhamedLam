import { AdsBreakdownArticle } from '../types';

export const ADS_BREAKDOWN_ARTICLES: AdsBreakdownArticle[] = [
  {
    id: 'ab-7',
    slug: 'nov-week1-geyser-haier-vs-walton-2026',
    brandName: 'Haier vs Walton',
    industry: 'Home Appliance BD',
    title: 'Geyser Wars: Why Haier Shockproof Beats Walton Catalog in Nov Week 1',
    shortDescription: 'Same 30L electric geyser. Same cold morning. One sells safety, one sells steel. Shockproof Tigris vs Instant Warmth catalog. Nov 7, 2026 - BD 11.11 Week 1 Special.',
    date: 'November 07, 2026',
    readingTime: '7 min read',
    targetAudience: 'BD founders, e-commerce managers, appliance marketers, and media buyers scaling high-ticket home appliances during Daraz 11.11 and winter cold snaps in Dhaka, Chittagong, and northern Bangladesh.',
    isWinningVsLosing: true,
    dayNumber: 3,
    theHook: {
      observable: "Cold bathroom tile + shivering hand -> instant steam. Text 'Winter brings chill. Haier brings warmth. 100% Shockproof.'",
      analysis: 'WHY IT WINS: Names 6am pain Dhaka/Rangpur winter, shows safety first (electric + water = death fear in BD households), premium look justifies 11k.',
      hypothesis: 'Hypothesis: 32%+ thumb-stop (vs <18% for Walton white unit render on gradient).'
    },
    theCreative: {
      format: 'Winning: 3-beat emotional problem-solution video & proof carousel. Loser: 3D studio catalog render + automated factory assembly tour.',
      visualStyle: 'Steaming bathroom shower, cold shivering hands, water splash hitting shockproof enclosure with 0.00V leakage sensor, cozy family morning.',
      breakdown: "WINNER CREATIVE: 3 beats - 1) chill (cold blue), 2) shock test (splash + badge), 3) family (mother + kid warm). Capacity + price overlay. Inference: kills 'current-e shock lagbe?' objection that blocks 11k COD/EMI in BD."
    },
    theOffer: '30L 11,520 -10%, online exclusive, call hotline 09666-88-00-99 + haier.com/bd/water-heaters vs 14% OFF selected plaza',
    theCopy: {
      headline: 'Winter brings chill. Haier brings warmth. 100% Shockproof. vs Warm up instantly / Turn Cold Mornings into Warm Comfort',
      body: '30L 11,520 taka -10%, online exclusive, call 09666-88-00-99 + haier.com/bd/water-heaters. vs 30/40/50L choice without guide, 16267 + buy online, porcelain tank + durability.',
      breakdown: "WINNER: 30L 11,520 -10%, online exclusive, call + haier.com/bd/water-heaters. Psychology: safety + warranty + hotline = risk reversal for high-ticket home appliance. Funnel: Meta -> PDP with specs + EMI + installer booking. LOSER: 30/40/50L choice without guide (which for family of 4?), 16267 + buy online, porcelain tank + durability. WHY IT LOSES: choice overload, no safety demo, factory tour irrelevant to cold fear. Trust from Made in BD wasted without human proof."
    },
    theCta: 'Shop Now -> PDP + free installer slot vs Call 16267 -> generic hotline',
    thePsychology: [
      'Safety before savings: In electric geysers, fear of electrocution ("current-e shock lagbe?") is 10x stronger than discount or wattage specs.',
      '6:00 AM cold bathroom context: Evoking the physical shock of freezing water on cold tiles triggers immediate purchase urgency.',
      'Decision simplification: Promoting one hero capacity (30L for 11,520 BDT) beats overwhelming buyers with 30L/40L/50L options without sizing advice.',
      'Assurance of professional setup: High-ticket home appliances in BD require installation certainty; offering a booked technician removes the hassle barrier.'
    ],
    theFunnel: 'Meta/TikTok -> Dedicated 30L PDP with live shock-test video, EMI calculator, and certified technician installation slot booking. Loser: Meta static -> generic catalog / plaza finder with no direct checkout.',
    whyIThinkItWorks:
      'TL;DR: Same 30L hot water. Haier sells safe 6am shower for mother + baby. Walton sells steel tank. In BD week 1, fear > features.',
    whatGrowingBusinessesCanLearn: [
      'Kill the primary objection first: In categories with perceived danger (appliances, baby care, skincare), lead with safety certifications and live stress tests.',
      'Replace factory tours with human benefit: Automated assembly lines prove manufacturing scale to engineers, but cold morning steam proves value to mothers.',
      'Bundle high-ticket friction away: For products above 10,000 BDT in BD, combine price discount with free installation and verified hotline support.',
      'Tie into seasonal momentum: Week 1 of Daraz 11.11 paired with northern cold snaps creates peak buying intent—deliver before peak winter hits.'
    ],
    myVerdict:
      'Haier wins because they understand that an electric water heater is an anxiety purchase in Bangladesh. By proving 100% Shockproof safety in the first 3 seconds, they convert high-ticket shoppers while competitors are still showcasing sheet metal welding.',
    comparisonData: {
      winnerBrand: 'Haier Bangladesh',
      winnerTagline: 'Tigris Shockproof / Zenglow 30L Electric (11,520 taka -10%). Angle: "Winter brings chill. Haier brings warmth. 100% Shockproof."',
      loserBrand: 'Walton',
      loserTagline: 'Geyser 30L/40L/50L Crystal/Smart (call 16267). Angle: "Warm up instantly / Turn Cold Mornings into Warm Comfort."',
      winnerLinks: {
        store: 'https://haier.com/bd/water-heaters',
        adLibraryAll: 'https://www.facebook.com/HaierBangladesh/posts/1617667590388754/',
        adLibraryActive: 'https://www.facebook.com/HaierBangladesh/posts/1615570897265090/',
        igHookReel: 'https://www.facebook.com/HaierBangladesh/posts/1614449754043871/',
        teardownRef: 'https://www.facebook.com/HaierBangladesh/posts/1614073090748204/',
        brandData: 'https://bangladeshpost.net/posts/what-s-changed-in-bangladeshis-shopping-carts-a-view-from-daraz-11-11-175249'
      },
      loserLinks: {
        findLoserUrl: 'https://www.facebook.com/Waltonbd/posts/880502317863918/',
        selectionTip: 'Strong local trust and massive plaza network across Bangladesh, but digital creative relies on sterile product renders and factory b-roll without human safety reassurance.'
      },
      screenshots: [
        {
          id: 'win-1',
          title: 'WIN-1 Hook',
          role: 'winner',
          caption: 'Problem + promise in 2s.',
          src: './images/haier_geyser_hook.jpg',
          aspectRatio: '9:16',
          sourcePath: 'Haier post 1617667590388754'
        },
        {
          id: 'win-2',
          title: 'WIN-2 Safety proof',
          role: 'winner',
          caption: 'Fear killed: shockproof.',
          src: './images/haier_shockproof_proof.jpg',
          aspectRatio: '9:16',
          sourcePath: 'Haier Tigris 1615570897265090'
        },
        {
          id: 'win-3',
          title: 'WIN-3 Offer',
          role: 'winner',
          caption: 'One size, one price, one call.',
          src: './images/haier_geyser_offer.jpg',
          aspectRatio: '9:16',
          sourcePath: 'Haier Zenglow 1614449754043871'
        },
        {
          id: 'lose-1',
          title: 'LOSE-1 Catalog',
          role: 'loser',
          caption: 'No human, no morning.',
          src: './images/walton_geyser_catalog.jpg',
          aspectRatio: '9:16',
          sourcePath: 'Walton 880502317863918'
        },
        {
          id: 'lose-2',
          title: 'LOSE-2 Feature list',
          role: 'loser',
          caption: 'Specs without feeling.',
          src: './images/walton_specs_icons.jpg',
          aspectRatio: '9:16',
          sourcePath: 'Walton 832443146003169'
        },
        {
          id: 'lose-3',
          title: 'LOSE-3 Factory',
          role: 'loser',
          caption: 'Factory does not warm my 6am shower.',
          src: './images/walton_factory_assembly.jpg',
          aspectRatio: '9:16',
          sourcePath: 'Walton 871960465384770'
        }
      ],
      scores: [
        { category: 'Hook (first 3s)', winnerScore: 9, loserScore: 3 },
        { category: 'Safety proof', winnerScore: 9, loserScore: 4 },
        { category: 'Offer clarity', winnerScore: 8, loserScore: 5 },
        { category: 'CTA + Trust', winnerScore: 9, loserScore: 4 }
      ],
      sideBySideTable: [
        { element: 'First 3s', winner: 'Cold + steam + shockproof', loser: 'Render + instantly' },
        { element: 'Trigger', winner: '6am shower fear', loser: 'Warm comfort slogan' },
        { element: 'Claims', winner: '1: safe warmth', loser: '3: quick + reliable + durable' },
        { element: 'Proof', winner: 'Splash + badge + family', loser: 'Icons, no demo' },
        { element: 'Specificity', winner: '30L 11,520 -10%, Tigris', loser: '30/40/50L, no guide' },
        { element: 'Offer', winner: 'Online exclusive + hotline', loser: '14% selected plaza' },
        { element: 'CTA', winner: 'Shop -> PDP + installer', loser: 'Call 16267 -> generic' },
        { element: 'Fear', winner: 'Shock + bill addressed', loser: 'Shock ignored' },
        { element: 'Lifespan', winner: 'Iterated series launch', loser: 'One-off catalog' }
      ],
      fixPlan: {
        title: '48h fix for Walton - keep product, change creative',
        points: [
          'Keep same 30L. Reshoot 15s phone: 6am, father turns on, kid touches water safely, meter shows bill. First text: "Gosol-e shock lagbe na?"',
          'Kill factory. Show 1 proof: pour bucket on live unit + shockproof meter zero. 6s demo beats 6 icons.',
          'Swap copy: "30L - 4 jon family, 20 min garam, shockproof + auto-off. 16267 + free install Dhaka." + size guide image (2 jon=30L, 5 jon=50L).',
          'Add trust: "Walton plaza-e giye dekhe nin + 5yr warranty card photo" + real installer uncle face. Local edge = service, use it.',
          'Test 3 hooks: (a) Sokal 6tay thanda pani? (b) Geyser-e current? Proof dekho (c) 11.11-te install free. Winner tells fear language.'
        ],
        hypothesis: 'same budget, safety demo + size guide lifts CTR 0.7% -> 1.5% + installer bookings + fewer returns.'
      },
      loserAnalysis: {
        hookObservable: "White unit render + 'Warm up instantly' on gradient background.",
        hookWhyLoses: "WHY IT LOSES: No morning context, no human element, looks like generic catalog. Hypothesis thumb-stop <18%. 'Instant' is vague (how many mins? how high the electric bill?).",
        copyCtaObservable: "30/40/50L choice without guide, 16267 hotline + buy online, porcelain tank + durability icons.",
        copyCtaWhyLoses: "WHY IT LOSES: Choice overload (which for family of 4?), no live safety demo, factory tour irrelevant to cold shower fear. Trust from 'Made in BD' wasted without human proof.",
        frictionTakeaway: "BD WEEK 1 ANGLE: 11.11 + first cold snap = urgency is real. Winner ties to 11.11 delivery before deep winter + installer slot. Loser says 14% OFF selected plaza (conditional, low trust)."
      },
      linkedInHook: {
        postText: 'Nov week 1 bestseller is not hoodie. Its geyser. Same 30L, 2 ads. Haier sells safe 6am shower (shockproof + 11,520 BDT). Walton sells steel (instant + catalog). I broke flaws + pros + 48h fix + screenshot map in blog: [PASTE YOUR NEW ab-7 LINK AFTER YOU PUBLISH]. Day 3 daily Winning vs Losing. Follow for BD DTC. #Bangladesh #11sale #DTC #MetaAds #MediaBuying #Walton #Haier',
        firstComment: 'Full blog here: [YOUR ab-7 LINK] - table + fix. BD founders: what stops geyser COD - shock fear or bill?'
      },
      clientCta: {
        pitch: 'I audit BD 11.11 creatives for installer bookings + COD returns, not just CTR. If geyser ad dies in 7 days, I tell why in one teardown.',
        email: 'AhamedAfif87@gmail.com',
        contactUrl: 'https://frage3r.github.io/AfifAhamedLam/#contact',
        nextBreakdown: 'Nivea vs Vaseline lotion? Tell niche.'
      }
    }
  },
  {
    id: 'ab-6',
    slug: 'bd-winter-hoodie-fabrilife-vs-sara-2026',
    brandName: 'Fabrilife vs SaRa Lifestyle',
    industry: 'Winter Fashion / Ecom BD',
    title: 'Hoodie Wars: Why Fabrilife 1850 BDT Story Beats SaRa 850 BDT Catalog in November',
    shortDescription: 'Same product. Same November feed. One wins 11.11 cold traffic, one burns it. Mens Premium Hoodie 1850 BDT vs Winter Hoodie Jacket 850 BDT.',
    date: 'November 05, 2026',
    readingTime: '7 min read',
    targetAudience: 'Dhaka and Bangladesh urban youth, university students, bike commuters, and corporate office wearers facing cold November mornings and 11.11 winter drops.',
    isWinningVsLosing: true,
    dayNumber: 2,
    theHook: {
      observable: "Lifestyle photo/video, real person wearing Winterbound/Polarize outdoors, Bangla-English hook 'Winter mornings and long evenings'.",
      analysis: 'WHY IT WINS: self-identifies Dhaka commuter/student in 2s, shows fit on body (solves size fear), premium cotton texture visible, native to feed not catalog.',
      hypothesis: 'Hypothesis: 30%+ thumb-stop (vs <18% for ghost-mannequin catalog static).'
    },
    theCreative: {
      format: 'Winning: Native outdoor lifestyle video & real-person carousel. Loser: Studio flat catalog on white.',
      visualStyle: 'Dhaka foggy dawn street & rooftop context, cold breath, warm natural lighting, honest texture close-ups.',
      breakdown: 'WINNER CREATIVE: 3 beats - 1) context (foggy street), 2) fabric (stretch + inside fleece), 3) fit (front + back + hood up). No studio gradient. Caption lists fabric, GSM, unisex, office time 10AM-8PM. Inference: reduces "kapor patla hobe?" objection that kills BD COD.'
    },
    theOffer: '1850 BDT COD+exchange vs 850 BDT vague urgency',
    theCopy: {
      headline: 'Designed for cold mornings and long evenings, warmth without weight. vs Stay warm stay fashionable / Perfect blend of comfort and coolness',
      body: '1850 BDT single (1590 older), clear CTA Order via inbox/website + COD + exchange. vs 850 BDT incl VAT, synthetic fabric, Nearly sold out Grab yours now! + Shop Now -> collection page.',
      breakdown: 'WINNER: 1850 BDT single (1590 older), clear CTA Order via inbox/website + COD + exchange. Psychology: replacement (one good hoodie for whole season), social proof via comments ("offer price?"), risk reversal via exchange. Funnel: Meta/TikTok -> single PDP with size chart -> bKash/COD -> WhatsApp confirm. Hypothesis: higher AOV but lower return: Net Delivered ROAS wins. LOSER: 850 BDT incl VAT, synthetic fabric, "Nearly sold out Grab yours now!" + Shop Now -> collection page. WHY IT LOSES: cheap price signals thin fabric in BD winter (trust drop), fake scarcity with no count, synthetic hides breathability fear, collection page forces hunt. COD order -> high return when real feel != photo.'
    },
    theCta: 'Inbox/Order -> single PDP vs Shop Now -> collection',
    thePsychology: [
      'Replacement psychology: One premium hoodie that lasts the whole season instead of buying 2 cheap throwaways.',
      'Pre-handling BD COD fear: Clear size charts and exchange policies eliminate the fear of wrong sizing on delivery.',
      'Texture as proof: Showing thick brushed fleece directly neutralizes the "kapor patla hobe?" (will fabric be thin?) hesitation.',
      'Contextual self-identification: 7:00 AM bike commute and university campus setting makes the product feel immediately necessary.'
    ],
    theFunnel: 'Meta/TikTok -> single PDP with size chart -> bKash/COD -> WhatsApp confirm. Loser: Shop Now -> 20-item collection with no direct product match.',
    whyIThinkItWorks:
      'TL;DR: Same hoodie need, different job. Fabrilife sells a November morning (cold air, bike ride, varsity). SaRa sells a product code. In BD COD + size-exchange fear, story + proof beats catalog + discount.',
    whatGrowingBusinessesCanLearn: [
      'Sell the morning context, not just fabric specifications: A cold bike ride in fog triggers an immediate lifestyle reaction.',
      'Show the inside fleece: In Bangladesh winter apparel, proving fabric thickness visually prevents delivery rejection.',
      'Pre-handle return reasons: Provide clear size charts, chest/length measurements, and 7-day exchange guarantees.',
      'Eliminate collection page leaks: When advertising a specific winter hoodie, land traffic on that exact item, never a 20-product category page.'
    ],
    myVerdict:
      'In Bangladesh e-commerce, the real battle is not cheap clicks — it is Net Delivered ROAS after COD returns. Fabrilife wins because their creative pre-handles fabric doubt, fit anxiety, and payment trust before the order is placed.',
    comparisonData: {
      winnerBrand: 'Fabrilife',
      winnerTagline: 'Mens Premium Hoodie - Winterbound / Polarize (1850 BDT single, unisex, cotton). Angle: "Designed for cold mornings and long evenings, warmth without weight."',
      loserBrand: 'SaRa Lifestyle Ltd',
      loserTagline: 'Winter Hoodie Jacket (850 BDT incl VAT, synthetic fabric). Angle: "Perfect blend of comfort and coolness / Stay warm stay fashionable."',
      winnerLinks: {
        store: 'https://deshiz.com/winter-clothes-online-bangladesh/',
        adLibraryAll: 'https://www.facebook.com/fabrilife/posts/1168713178682335/',
        adLibraryActive: 'https://www.facebook.com/fabrilife/posts/1162539662633020/',
        igHookReel: 'https://www.facebook.com/fabrilife/posts/1154418276778492/',
        teardownRef: 'https://www.facebook.com/fabrilife/photos/684642340422757/',
        brandData: 'https://www.daraz.com.bd/tag/winter-collection-2026-for-men/'
      },
      loserLinks: {
        findLoserUrl: 'https://www.facebook.com/saralifestyle.bd/videos/winter-2526-is-here/3340360019448684/',
        selectionTip: 'Strong offline retail distribution, but paid social creative relies on static ghost-mannequin catalog shots with zero thumb-stop.'
      },
      screenshots: [
        {
          id: 'win-1',
          title: 'WIN-1 Hook',
          role: 'winner',
          caption: 'Human + context in 2s.',
          src: './images/fabrilife_hook_morning.jpg',
          aspectRatio: '9:16',
          sourcePath: 'facebook.com/fabrilife/posts/1168713178682335/'
        },
        {
          id: 'win-2',
          title: 'WIN-2 Fabric proof',
          role: 'winner',
          caption: "Warmth without weight - show don't tell.",
          src: './images/fabrilife_fabric_proof.jpg',
          aspectRatio: '16:9',
          sourcePath: 'Same post carousel slide 2-3'
        },
        {
          id: 'win-3',
          title: 'WIN-3 Offer clarity',
          role: 'winner',
          caption: 'One price, one action.',
          src: './images/fabrilife_offer_clarity.jpg',
          aspectRatio: '16:9',
          sourcePath: 'Fabrilife PDP / inbox flow'
        },
        {
          id: 'lose-1',
          title: 'LOSE-1 Flat catalog',
          role: 'loser',
          caption: 'No human, no hook.',
          src: './images/sara_flat_catalog.jpg',
          aspectRatio: '1:1',
          sourcePath: 'facebook.com/saralifestyle.bd/photos/789001626592548/'
        },
        {
          id: 'lose-2',
          title: 'LOSE-2 Urgency without proof',
          role: 'loser',
          caption: 'Urgency with no reason.',
          src: './images/sara_urgency_noprf.jpg',
          aspectRatio: '1:1',
          sourcePath: 'Same + post 768392368653474'
        },
        {
          id: 'lose-3',
          title: 'LOSE-3 Funnel',
          role: 'loser',
          caption: 'Message mismatch.',
          src: './images/sara_funnel_leak.jpg',
          aspectRatio: '16:9',
          sourcePath: 'saralifestyle.com.bd collection'
        }
      ],
      scores: [
        { category: 'Hook (first 3s)', winnerScore: 9, loserScore: 3 },
        { category: 'Proof / Demo', winnerScore: 8, loserScore: 2 },
        { category: 'Offer clarity + COD', winnerScore: 8, loserScore: 4 },
        { category: 'CTA + Landing match', winnerScore: 9, loserScore: 3 }
      ],
      sideBySideTable: [
        { element: 'Element', winner: 'Fabrilife (WIN)', loser: 'SaRa (LOSE PATTERN)' },
        { element: 'First 3s', winner: 'Human + foggy morning + hoodie on', loser: 'Manequin on white + slogan' },
        { element: 'Trigger', winner: 'Cold morning sorted', loser: 'Stay fashionable' },
        { element: 'Claims', winner: '1: warmth without weight', loser: '3: comfort+coolness+fashion' },
        { element: 'Proof', winner: 'Stretch + fleece + fit on body', loser: 'None, catalog only' },
        { element: 'Specificity', winner: '1850 BDT, cotton, GSM, unisex', loser: '850 BDT, synthetic, no GSM' },
        { element: 'Offer', winner: 'COD + 7-day exchange + clear price', loser: '850 cheap + vague urgency' },
        { element: 'CTA/Landing', winner: 'Order -> single PDP size chart', loser: 'Shop Now -> 20-item collection' },
        { element: 'Returns', winner: 'Pre-handled (fabric+fit+exchange)', loser: 'Surprise (thin/synthetic fear)' },
        { element: 'Lifespan', winner: 'Iterated winners Polarize/Winterbound', loser: 'One-off catalog, low saves' }
      ],
      fixPlan: {
        title: '48-hour fix for SaRa (loser) - keep product, change creative',
        points: [
          'Keep same 850 BDT jacket. Reshoot 15s iPhone: boy wears it on bike at 7am + hood up + zip close-up. First text: "Sokal 7tay bike-e thanda lage?"',
          'Kill catalog. Show 1 proof: inside fleece rub + wind test (candle/hair dryer). 6s demo beats 6 features.',
          'Swap copy: Headline "850 TK Winter Hoodie - Fleece Inside" Body "Size M-XXL, COD, check-before-pay, exchange if size wrong." CTA Inbox with size chart image.',
          'Add trust: overlay "1200+ sold" if true OR "Sara outlet-e giye dekhe nin" + outlet list + real try-on video. Offline trust is SaRa edge - use it.',
          'Test 3 hooks same body: (a) 850 TK-te hoodie? Fabric dekho (b) Bike riders: kan thanda? Hood test (c) 11.11: 1 hoodie full winter. Winner reveals language for scaling.'
        ],
        hypothesis: 'same budget, human + proof + COD clarity cuts return rate (key BD metric) and lifts CTR 0.7% -> 1.5% in 2 weeks.'
      },
      loserAnalysis: {
        hookObservable: "Ghost-mannequin hoodie on white, headline 'Stay warm stay fashionable' / 'Perfect blend of comfort and coolness'.",
        hookWhyLoses: "No human = no size cue, generic adjective = no memory, looks like Daraz listing. Hypothesis: thumb-stop <18%.",
        copyCtaObservable: "850 BDT incl VAT, synthetic fabric, 'Nearly sold out Grab yours now!' + Shop Now → collection page.",
        copyCtaWhyLoses: "Cheap price signals thin fabric in BD winter (trust drop), fake scarcity with no count, synthetic hides breathability fear, collection page forces hunt. COD order → high return when real feel != photo.",
        frictionTakeaway: "COD + check-before-payment + size exchange. Winner shows size chart + exchange window + real body. Loser hides it. In BD, creative must pre-handle return reasons, not just click."
      },
      linkedInHook: {
        postText: 'BD winter is here. Same hoodie, 2 ads. One will own 11.11, one will pay COD returns. I broke down Fabrilife (1850 BDT) vs SaRa (850 BDT). Winner sells a 7am bike ride, not a jacket. Loser sells a catalog code. Full flaws + pros + 48h fix + screenshot map in blog (LINK AFTER YOU PUBLISH). Day 2 of daily Winning vs Losing. Follow for BD DTC breakdowns. #Bangladesh #DTC #MetaAds #MediaBuying #EcommerceBD #WinterCollection',
        firstComment: 'Full blog here: [YOUR NEW BLOG LINK ab-6] - includes table + fix plan. Which hook would you test first for BD COD?'
      },
      clientCta: {
        pitch: 'I audit BD winter creatives for COD returns, not just CTR. If your hoodie/jacket ad dies after 7 days, I tell you why in one teardown.',
        email: 'AhamedAfif87@gmail.com',
        contactUrl: 'https://frage3r.github.io/AfifAhamedLam/#contact',
        nextBreakdown: 'Vaseline vs Meril winter lotion? Tell me niche.'
      }
    }
  },
  {
    id: 'ab-5',
    slug: 'winning-vs-losing-wallet-brick-vs-premium-2026',
    brandName: 'Everyday Carry Wallets (Winning vs Losing)',
    industry: 'Everyday Carry (EDC) / Accessories',
    title: 'Stop Sitting On This Brick vs Premium Quality 20% OFF',
    shortDescription: 'Winning problem-aware hook video vs polished static - full comparison + 48-hour fix',
    date: 'November 04, 2026',
    readingTime: '7 min read',
    targetAudience: 'Men and everyday carry shoppers carrying thick bi-fold wallets stuffed with cards and receipts, scrolling Meta/TikTok feeds.',
    isWinningVsLosing: true,
    dayNumber: 1,
    theHook: {
      observable: "Man in jeans sits, winces, pulls absurdly swollen 3-inch leather wallet with receipts. Text: 'Stop sitting on this brick.' Natural chair-creak + wallet slap.",
      analysis: 'WHY IT WINS: self-identifies in 2s, visual not verbal, pattern interrupt like skit not ad.',
      hypothesis: 'Hypothesis: 30%+ thumb-stop (vs <18% for static loser).'
    },
    theCreative: {
      format: 'Winning: Native 9:16 vertical problem-agitation video. Loser: 1:1 studio static on gradient.',
      visualStyle: 'Handheld warm light, slightly imperfect = trust. No lifestyle padding - every second shows product doing something.',
      breakdown: 'WINNER CREATIVE (3 beats): 0-4s agitation (sitting pain), 4-12s contrast (dump 12 cards vs 2-card slim), 12-22s proof (front-pocket slide + clean sit + RFID tap). Handheld warm light, slightly imperfect = trust. No lifestyle padding - every second shows product doing something.'
    },
    theOffer: '30-day test + free returns vs 20% off',
    theCopy: {
      headline: 'Carry 12 cards. Ditch the brick. vs Premium Quality Craftsmanship',
      body: 'Slim RFID-blocking. 30-day test drive. Free returns. vs Genuine Leather. RFID. Free Shipping.',
      breakdown: 'Headline "Carry 12 cards. Ditch the brick." Body "Slim RFID-blocking. 30-day test drive. Free returns." CTA Shop Now -> dedicated PDP with comparison + review count. Psychology: identity (minimalist), replacement (replace pain not buy wallet), risk reversal for $75+ price. LOSER COPY/CTA: "Genuine Leather. RFID. Free Shipping. Learn More" -> homepage. WHY IT LOSES: 4 features not 1 outcome, zero proof (no demo, no numbers), funnel leak forces hunt, studio polish signals ad not solution.'
    },
    theCta: 'Shop Now -> PDP vs Learn More -> homepage',
    thePsychology: [
      'Identity framing: Minimalist carry vs hoarding clutter.',
      'Replacement psychology: Replace everyday back-pocket pain rather than buying another generic accessory.',
      'Risk reversal: 30-day test drive + free returns removes price hesitation for a $75+ wallet.',
      'Proof over polish: A live dump and physical pocket slide beats dry adjectives.'
    ],
    theFunnel: 'Cold Meta Broad -> PDP (same promise) -> retargeting testimonial static ("Lost the bulk, kept everything - 11,400+ reviews"). Longevity 60+ days = profitability proxy.',
    whyIThinkItWorks:
      'TL;DR: Winning opens with painful visual problem you feel in 2s. One claim. One proof. One CTA for cold traffic. Losing opens with product + discount. No problem. No proof. Built like a flyer, not a feed interrupt. In Andromeda-era Meta, creative IS targeting.',
    whatGrowingBusinessesCanLearn: [
      'Re-cut the first 3 seconds: Pull the physical problem into the frame immediately. An iPhone top-down or back-pocket pull slaps attention into place.',
      'Kill feature overload: Focus on 1 tangible proof (e.g., RFID tap or front-pocket slide) rather than listing 4 bullet points.',
      'Replace discount hooks with risk reversal: A 30-day test drive beats 20% off an unvalidated product.',
      'Never dump cold traffic onto a generic homepage: Match ad promise directly with a focused PDP with comparison and social proof.'
    ],
    myVerdict:
      'In Andromeda-era paid social, creative is the targeting mechanism. The winning ad scales because it forces self-identification in under two seconds through visceral agitation, backs it with a single undeniable demonstration, and drives to a congruent landing page. The losing static fails because it behaves like an offline brochure.',
    comparisonData: {
      winnerBrand: 'The Ridge (Ridge Wallet)',
      winnerTagline: 'Real long-runner, 5,689 active Meta ads as of Nov 2026. Minimalist RFID wallet. This is your proof of what good looks like.',
      loserBrand: 'Composite DTC Brand',
      loserTagline: 'Pattern of losing: studio static + discount + Learn More -> homepage. Killed in <7 days.',
      winnerLinks: {
        store: 'https://ridge.com/',
        adLibraryAll: 'https://www.facebook.com/ads/library/?active_status=all&ad_type=all&country=US&is_targeted_country=false&media_type=all&search_type=page&view_all_page_id=176366735873065',
        adLibraryActive: 'https://www.facebook.com/ads/library/?active_status=active&ad_type=all&country=ALL&is_targeted_country=false&media_type=all&search_type=page&view_all_page_id=176366735873065',
        igHookReel: 'https://www.instagram.com/reel/DfHhaOJjQAp/',
        teardownRef: 'https://www.sparkugc.com/resources/ridge-wallet-ads-creative-teardown',
        brandData: 'https://adlibrary.com/brands/ridge'
      },
      loserLinks: {
        findLoserUrl: 'https://www.facebook.com/ads/library/?active_status=active&ad_type=all&country=US&q=leather%20wallet',
        selectionTip: 'Filter Media Type = Image, look for 1:1 studio wallet on gradient, text "Premium Quality / Genuine Leather / 20% OFF", running <7 days. That is your losing screenshot.'
      },
      screenshots: [
        {
          id: 'win-1',
          title: 'WIN-1 Hook (0-3s)',
          role: 'winner',
          caption: 'Hook you feel in 2s - no sound needed.',
          src: './images/win1_hook_brick_wallet.jpg',
          aspectRatio: '9:16',
          sourcePath: 'Ad Library > Ridge > Video > longest-running > 0:01'
        },
        {
          id: 'win-2',
          title: 'WIN-2 Contrast (4-12s)',
          role: 'winner',
          caption: 'Visual agitation: brick vs slim.',
          src: './images/win2_contrast_dump.jpg',
          aspectRatio: '16:9',
          sourcePath: 'Same video at 0:07'
        },
        {
          id: 'win-3',
          title: 'WIN-3 Proof + Offer (12-22s)',
          role: 'winner',
          caption: 'One proof + risk reversal.',
          src: './images/win3_proof_offer.jpg',
          aspectRatio: '16:9',
          sourcePath: 'ridge.com PDP'
        },
        {
          id: 'lose-1',
          title: 'LOSE-1 Hook fail',
          role: 'loser',
          caption: 'No problem, no thumb-stop.',
          src: './images/lose1_studio_static.jpg',
          aspectRatio: '1:1',
          sourcePath: "Ad Library search 'leather wallet' > Image > <7 days"
        },
        {
          id: 'lose-2',
          title: 'LOSE-2 Funnel leak',
          role: 'loser',
          caption: 'Message mismatch kills conversion.',
          src: './images/lose2_funnel_leak.jpg',
          aspectRatio: '16:9',
          sourcePath: 'Loser landing homepage (not PDP)'
        }
      ],
      scores: [
        { category: 'Hook (first 3s)', winnerScore: 9, loserScore: 3 },
        { category: 'Proof / Demo', winnerScore: 9, loserScore: 2 },
        { category: 'Offer + Risk reversal', winnerScore: 8, loserScore: 3 },
        { category: 'CTA + Landing match', winnerScore: 9, loserScore: 2 }
      ],
      sideBySideTable: [
        { element: 'Element', winner: 'Winner: Brick', loser: 'Loser: Premium 20% OFF' },
        { element: 'First 3s', winner: 'Pain + visual agitation', loser: 'Product + discount' },
        { element: 'Trigger', winner: 'Wince + brick + bold text, sound-off readable', loser: 'Floating product on gradient' },
        { element: 'Claims', winner: '1: slim carry, no bulk', loser: '4: leather + RFID + shipping + premium' },
        { element: 'Proof', winner: 'Live dump + pocket slide + sit test', loser: 'None' },
        { element: 'Specificity', winner: '3-inch brick, 12 cards -> 2-card slim', loser: 'Premium, Quality' },
        { element: 'Offer', winner: '30-day test + free returns', loser: '20% off, no risk reversal' },
        { element: 'CTA/Landing', winner: 'Shop Now -> matching PDP', loser: 'Learn More -> homepage' },
        { element: 'Algorithm', winner: 'Strong watch + comments, finds audience', loser: 'Quick scroll, finds wrong people' },
        { element: 'Lifespan', winner: '60+ day runner', loser: 'Killed <7 days' }
      ],
      fixPlan: {
        title: '48-hour fix plan (high-value for clients)',
        points: [
          'Keep wallet. Re-cut first 3s: iPhone top-down, pull brick from back pocket, slap table. Text: "Still sitting on this?"',
          'Kill 3 features. Keep 1 proof: only RFID tap OR front-pocket slide. One 6s demo.',
          'Swap copy: Headline "Ditch the back-pocket brick." Body "Holds 8 cards. Fits front pocket. 30-day test." CTA Shop Now -> PDP.',
          'Add specificity: overlay "2,347 reviews" or "12,000+ pockets fixed" - numbers beat adjectives.',
          'Test 3 hooks same body: (a) Stop sitting on this brick (b) POV: wallet thicker than phone (c) Back pain? Check back pocket. Winner reveals audience language.'
        ],
        hypothesis: 'same product + budget, hook + proof + match lifts CTR 0.7% -> 1.4-1.8% cold, CPA -30-40% in 2 weeks.'
      },
      linkedInHook: {
        postText: 'Same wallet. Same feed. One scales, one dies in 7 days. I broke down 2 DTC wallet ads: WINNER "Stop sitting on this brick" - hook in 2s you FEEL, 1 claim, live demo, 30-day risk reversal. LOSER "Premium Quality - 20% OFF" - studio gradient, 4 features, no proof. Full side-by-side + 48h fix in blog: https://frage3r.github.io/AfifAhamedLam/#ads-breakdown Day 1 of daily Winning vs Losing. #DTC #MetaAds #MediaBuying #Ecommerce',
        firstComment: 'Full breakdown for founders: comparison table + test plan in blog above. Tomorrow: supplement UGC vs founder story.'
      },
      clientCta: {
        pitch: 'I break down winning ads + audit losers into test plans for DTC, ecom, info and local brands (Meta & Google). If your creative dies in 7 days, I will tell you why in one audit.',
        email: 'AhamedAfif87@gmail.com',
        contactUrl: 'https://frage3r.github.io/AfifAhamedLam/#contact',
        nextBreakdown: 'Transformation UGC vs Founder-story for $79/mo supplements.'
      }
    }
  },
  {
    id: 'ab-1',
    slug: 'athletic-greens-ag1-habit-stacking-meta-ad',
    brandName: 'Athletic Greens (AG1)',
    industry: 'Health & Dietary Supplements',
    title: 'Deconstructing AG1’s Morning Habit Hook: How Identity Framing Neutralizes a High $79/Month Price Barrier',
    shortDescription: 'A systematic breakdown of public Meta video ad creatives combining morning routine habit-stacking, spoon-stir ASMR, and simplified micro-nutrition framing.',
    date: 'February 10, 2026',
    readingTime: '6 min read',
    targetAudience: 'Health-conscious professionals, runners, parents, and remote workers aged 25–48 seeking a single, effortless daily health routine without managing multiple pill bottles.',
    theHook: {
      observable: 'The video begins within the first 1.5 seconds with a crisp kitchen counter sequence: green powder being scooped, dropped into ice water, and vigorously shaken in a clear branded bottle with clean natural kitchen sound (ASMR). Onscreen text reads: "The 30-second morning habit I actually stick to."',
      analysis: 'The hook does not lead with vitamins, minerals, or scientific jargon. It addresses the emotional friction of daily consistency ("actually stick to") and pairs it with satisfying sensory audio that immediately arrests the scrolling thumb.',
      hypothesis: 'By focusing on routine friction rather than ingredient specifications, AG1 captures broad top-of-funnel audiences who have previously failed to maintain elaborate supplement regimens.'
    },
    theCreative: {
      format: 'Vertical UGC / founder-style 9:16 video ad optimized for Meta Reels & Instagram Feed.',
      visualStyle: 'Warm morning light, clean modern countertop, minimal post-production edits, authentic handheld camera movement.',
      breakdown: 'The creative sequences three distinct emotional beats: 1) Sensory morning routine initiation (0–4s), 2) Contrast against a countertop cluttered with 7 plastic vitamin bottles (4–12s), and 3) The single green shaker replacement backed by calm personal reflection (12–25s).'
    },
    theOffer: 'Free 1-year supply of Vitamin D3+K2 drops plus 5 free travel packs included with initial monthly subscription order.',
    theCopy: {
      headline: 'One daily scoop. 75 vitamins, minerals, and whole-food sourced ingredients.',
      body: 'No complex routines. No handfuls of pills every morning. Just one scoop of AG1 mixed with cold water to support gut health, energy, and daily immunity.',
      breakdown: 'The copy utilizes replacement psychology. Instead of asking the prospect to invent a new ritual or incur an additional expense, it positions the product as an intelligent consolidation of existing health expenditures.'
    },
    theCta: '"Get Your Offer" / "Claim Free Travel Packs"',
    thePsychology: [
      'Identity confirmation: Appeals to the self-perception of being a proactive, high-functioning individual.',
      'Replacement mental accounting: Frames a high subscription cost ($79/mo) as less than a single daily coffee shop purchase.',
      'Sensory satisfaction: High-fidelity audio and vibrant green mixture reinforce tactile perceptions of freshness and efficacy.'
    ],
    theFunnel: 'Cold Meta Ads -> Dedicated advertorial landing page focusing on routine simplification -> Interactive subscription checkout with high-perceived-value gift with purchase (GWP) -> Automated email welcome series containing habit tracking calendars.',
    whyIThinkItWorks:
      'Most supplement brands market features: ingredient dosages, chemical bio-availability, and laboratory purity certifications. AG1 shifts the entire value proposition to habit compliance and emotional ease. Consumers don’t want to be biochemists; they want to feel responsible before 9:00 AM.',
    whatGrowingBusinessesCanLearn: [
      'Highlight what your product replaces rather than just what it contains.',
      'Use native sensory sound design (ASMR, packaging clicks, unboxing audio) to win the initial 2-second attention battle.',
      'Structure high-friction price offers with high-utility, low-marginal-cost bonus items (such as travel pouches or starter bottles).'
    ],
    myVerdict:
      'An exceptional benchmark in high-ticket consumable advertising. Demonstrates that customer empathy and cognitive framing outperform dry technical data sheets in paid social feeds.'
  },
  {
    id: 'ab-3',
    slug: 'hexclad-celebrity-validation-hybrid-pan-breakdown',
    brandName: 'HexClad Cookware',
    industry: 'Kitchenware & Premium Home Goods',
    title: 'The Metal Utensil Scratch Test: How HexClad Uses Aggressive Visual Proof to Sell $150+ Frying Pans',
    shortDescription: 'Deconstructing the high-contrast creative demonstration that systematically destroys consumer skepticism about non-stick durability.',
    date: 'December 04, 2025',
    readingTime: '6 min read',
    targetAudience: 'Home cooks, food enthusiasts, and couples aged 26–55 tired of delicate Teflon coatings peeling and flaking after 12 months of use.',
    theHook: {
      observable: 'A chef aggressively scrapes a metal cooking fork and steel whisk back and forth across the cooking surface of a sizzling HexClad pan, with screeching metal audio. Text overlay: "Non-stick pans you can actually use metal on."',
      analysis: 'Every cook has been told never to touch a non-stick pan with metal utensils. Deliberately violating this universal culinary rule within two seconds creates an irresistible visual shock that commands attention.',
      hypothesis: 'By leading with the exact behavior consumers are conditioned to avoid, HexClad creates a powerful pattern interruption that forces viewers to pause and watch.'
    },
    theCreative: {
      format: '4:5 and 9:16 high-definition culinary video with close-up macro cooking shots.',
      visualStyle: 'Sizzling butter, caramelizing steaks, high-contrast black hexagonal laser-etched pattern, and energetic kitchen environment.',
      breakdown: 'Hook with the metal fork scratch test (0–3s), followed by a delicate egg slide test without sticking (3–8s), quick cut to Gordon Ramsay endorsement quote (8–14s), and finishing with dishwasher cleaning demonstration (14–22s).'
    },
    theOffer: 'Seasonal cookware sets with complimentary lid bundles and free shipping, supported by 0% interest monthly financing options.',
    theCopy: {
      headline: 'The hybrid cookware revolution. Cast iron performance with non-stick ease.',
      body: 'Tri-ply stainless steel for searing heat. Hexagonal non-stick peaks for effortless release. Metal utensil safe, oven safe up to 500°F, and dishwasher friendly.',
      breakdown: 'Positions the product in a category of one ("hybrid cookware"), simultaneously overcoming the fragility of standard non-stick and the heavy maintenance of traditional cast iron.'
    },
    theCta: '"Shop Cookware Sets" / "Explore Hybrid Technology"',
    thePsychology: [
      'Extremes combination: Offers the dream benefit of two opposing worlds (high-heat stainless sear + non-stick slide).',
      'Demonstrative proof: Showing is infinitely more persuasive than telling when resolving durability claims.',
      'Authority association: Selective high-status chef endorsements provide institutional validation.'
    ],
    theFunnel: 'Top-of-funnel Meta video ads -> Interactive recipe and technology breakdown page -> Multi-piece set selector with financing options -> Retargeting ads featuring customer reviews and warranty specifics.',
    whyIThinkItWorks:
      'The creative attacks the primary reason non-stick owners don’t want to spend $150+ on a frying pan: the fear that it will scratch and become useless in a year. Once that single doubt is visually obliterated, price resistance collapses.',
    whatGrowingBusinessesCanLearn: [
      'Find the single greatest point of customer skepticism and construct your creative hook around proving it wrong in 3 seconds.',
      'Combine authoritative credibility with raw, undeniable video demonstrations.',
      'Frame your product as an intelligent synthesis of two classic trade-offs.'
    ],
    myVerdict:
      'A premier demonstration of proof-first advertising. HexClad proves that visual evidence dissolves price objections faster than any clever copy slogan.'
  },
  {
    id: 'ab-4',
    slug: 'duolingo-unhinged-organic-to-paid-social-creative',
    brandName: 'Duolingo',
    industry: 'EdTech & Consumer Mobile Apps',
    title: 'Guilt-Free Humiliation & Meme Mastery: Why Duolingo’s Self-Deprecating Ad Formats Drive Low-Cost App Installs',
    shortDescription: 'How the green owl mascot turns passive notification annoyance into self-aware, shareable performance advertising.',
    date: 'October 28, 2025',
    readingTime: '5 min read',
    targetAudience: 'Language learners, college students, travelers, and casual mobile gamers aged 16–38 who have previously downloaded the app but abandoned their daily streak.',
    theHook: {
      observable: 'A human in a massive oversized neon green owl suit staring menacingly into the camera while standing in front of someone’s bedroom doorway at night. Text overlay: "Your Spanish lesson isn’t going to do itself."',
      analysis: 'Leans completely into the cultural meme of Duolingo’s persistent push notifications. Instead of defending their notifications, they amplify the joke to absurdist proportions.',
      hypothesis: 'Self-aware humor lowers consumer ad-defense shields, making users perceive the ad as entertainment rather than a commercial pitch.'
    },
    theCreative: {
      format: 'Lo-fi, handheld 9:16 vertical TikTok/Reels native format.',
      visualStyle: 'Grainy smartphone camera, trending sound bites, rapid jump cuts, no corporate polish.',
      breakdown: 'A 10-second micro-comedy sketch where the mascot creates playful chaos, ending with a 2-second static app badge prompting an immediate store jump.'
    },
    theOffer: 'Free download with 14-day Super Duolingo trial access upon completing the introductory 5-minute placement test.',
    theCopy: {
      headline: 'Take 3 minutes today. Keep Duo happy.',
      body: 'Learn Spanish, French, Japanese, or 35+ other languages. Bite-sized lessons that fit into your day. Download free.',
      breakdown: 'Ultra-low commitment framing ("take 3 minutes today"). Emphasizes accessibility rather than the monumental task of language mastery.'
    },
    theCta: '"Install Now" / "Keep Your Streak Alive"',
    thePsychology: [
      'In-group meme culture: Viewers feel like participants in an ongoing cultural joke rather than targets of an ad budget.',
      'Micro-friction framing: Reframes the overwhelming ambition of learning a new language into a 3-minute casual micro-habit.',
      'Pattern disruption: Looks completely organic in social feeds, preventing early ad-skipping behaviors.'
    ],
    theFunnel: 'Social platform feed ad -> Direct deep-link into Apple App Store / Google Play -> Immediate 3-question gamified onboarding -> Micro-streak reward unlocked within 90 seconds.',
    whyIThinkItWorks:
      'By replacing sterile corporate benefit lists with native internet subculture, Duolingo drastically lowers CPMs through massive organic sharing and engagement signals inside the advertising algorithm.',
    whatGrowingBusinessesCanLearn: [
      'If your audience has a recurring complaint or meme about your brand, embrace it instead of hiding from it.',
      'Produce creative that blends indistinguishably into the platform’s native culture.',
      'Keep initial conversion barriers as low as possible (e.g., 3 minutes of play vs. full course commitment).'
    ],
    myVerdict:
      'A brilliant case study in cultural resonance. Proves that brand personality and self-awareness can drive scalable, low-CAC acquisition in hyper-competitive mobile app markets.'
  }
];

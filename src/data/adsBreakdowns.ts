import { AdsBreakdownArticle } from '../types';

export const ADS_BREAKDOWN_ARTICLES: AdsBreakdownArticle[] = [
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

export type PageView =
  | 'home'
  | 'portfolio'
  | 'market-research'
  | 'ads-breakdown'
  | 'services'
  | 'contact'
  | 'market-research-detail'
  | 'ads-breakdown-detail'
  | 'project-detail';

export interface ResearchGraphData {
  chartTitle: string;
  chartSubtitle: string;
  type: 'funnel' | 'comparison' | 'matrix' | 'waterfall';
  metricHighlight: {
    label: string;
    value: string;
    subtext: string;
  };
  dataPoints: Array<{
    label: string;
    value: number | string;
    secondaryValue?: string;
    percentage?: number;
    benchmark?: string;
    color?: string;
    note?: string;
  }>;
  takeaway: string;
}

export interface MarketResearchArticle {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  date: string;
  category: string;
  readingTime: string;
  excerpt: string;
  imageUrl?: string;
  imageCaption?: string;
  graphData?: ResearchGraphData;
  introduction: string;
  marketOverview: string;
  audienceDemand: string;
  competition: string;
  productsServices: string;
  pricingObservations: string;
  advertisingLandscape: string;
  opportunities: string[];
  risks: string[];
  myAnalysis: string;
  conclusion: string;
}

export interface AdsBreakdownArticle {
  id: string;
  slug: string;
  brandName: string;
  industry: string;
  title: string;
  shortDescription: string;
  date: string;
  readingTime: string;
  targetAudience: string;
  theHook: {
    observable: string;
    analysis: string;
    hypothesis: string;
  };
  theCreative: {
    format: string;
    visualStyle: string;
    breakdown: string;
  };
  theOffer: string;
  theCopy: {
    headline: string;
    body: string;
    breakdown: string;
  };
  theCta: string;
  thePsychology: string[];
  theFunnel: string;
  whyIThinkItWorks: string;
  whatGrowingBusinessesCanLearn: string[];
  myVerdict: string;
  isWinningVsLosing?: boolean;
  dayNumber?: number;
  comparisonData?: {
    winnerBrand: string;
    winnerTagline: string;
    loserBrand: string;
    loserTagline: string;
    winnerLinks: {
      store?: string;
      adLibraryAll?: string;
      adLibraryActive?: string;
      igHookReel?: string;
      teardownRef?: string;
      brandData?: string;
    };
    loserLinks: {
      findLoserUrl?: string;
      selectionTip?: string;
    };
    screenshots: Array<{
      id: string;
      title: string;
      role: 'winner' | 'loser';
      caption: string;
      src: string;
      aspectRatio?: '9:16' | '16:9' | '1:1';
      sourcePath?: string;
    }>;
    scores: Array<{
      category: string;
      winnerScore: number;
      loserScore: number;
    }>;
    sideBySideTable: Array<{
      element: string;
      winner: string;
      loser: string;
    }>;
    fixPlan: {
      title: string;
      points: string[];
      hypothesis: string;
    };
    loserAnalysis?: {
      hookObservable: string;
      hookWhyLoses: string;
      copyCtaObservable: string;
      copyCtaWhyLoses: string;
      frictionTakeaway: string;
    };
    linkedInHook?: {
      postText: string;
      firstComment: string;
    };
    clientCta?: {
      pitch: string;
      email: string;
      contactUrl: string;
      nextBreakdown: string;
    };
  };
}

export interface PortfolioProject {
  id: string;
  slug: string;
  title: string;
  category: string;
  shortDescription: string;
  company?: string;
  role?: string;
  keyMetrics?: { label: string; value: string; detail?: string }[];
  skillsInvolved: string[];
  problem: string;
  research: string;
  strategy: string;
  execution: string;
  analysis: string;
  result: string;
  keyLearning: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  tagline: string;
  whatIDo: string[];
  whoItsFor: string[];
  whatYouCanExpect: string[];
}

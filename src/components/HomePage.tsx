import React from 'react';
import { PageView } from '../types';
import { Hero } from './Hero';
import { WhatIDoGrid } from './WhatIDoGrid';
import { FeaturedWork } from './FeaturedWork';
import { InsightsSection } from './InsightsSection';
import { SkillsSection } from './SkillsSection';
import { HomeCtaSection } from './HomeCtaSection';

interface HomePageProps {
  onNavigate: (page: PageView, id?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <main id="main-content">
      {/* 2. Hero & 3. Short Positioning Statement */}
      <Hero onNavigate={onNavigate} />

      {/* 4. What I Do (Media Buying, Performance Marketing, Market Research, Content & Copywriting) */}
      <WhatIDoGrid onNavigate={onNavigate} />

      {/* 5. Featured Work (Case studies following Problem -> Result -> Key Learning) */}
      <FeaturedWork onNavigate={onNavigate} />

      {/* 6. Market Research & 7. Ads Breakdown (Insights Section with latest 3 from each) */}
      <InsightsSection onNavigate={onNavigate} />

      {/* 8. Skills / Capabilities */}
      <SkillsSection />

      {/* 9. Work With Me CTA */}
      <HomeCtaSection onNavigate={onNavigate} />
    </main>
  );
};

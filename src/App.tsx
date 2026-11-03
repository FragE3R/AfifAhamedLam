import React, { useState, useEffect } from 'react';
import { PageView } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './components/HomePage';
import { PortfolioPage } from './components/PortfolioPage';
import { MarketResearchPage } from './components/MarketResearchPage';
import { MarketResearchDetail } from './components/MarketResearchDetail';
import { AdsBreakdownPage } from './components/AdsBreakdownPage';
import { AdsBreakdownDetail } from './components/AdsBreakdownDetail';
import { ServicesPage } from './components/ServicesPage';
import { ContactPage } from './components/ContactPage';
import { ProjectDetail } from './components/ProjectDetail';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageView>('home');
  const [activeId, setActiveId] = useState<string | undefined>(undefined);

  // Hash-based client routing for static GitHub Pages compatibility
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace(/^#/, '');

      if (!hash || hash === '/' || hash === 'home') {
        setCurrentPage('home');
        setActiveId(undefined);
      } else if (hash === 'portfolio') {
        setCurrentPage('portfolio');
        setActiveId(undefined);
      } else if (hash === 'market-research') {
        setCurrentPage('market-research');
        setActiveId(undefined);
      } else if (hash === 'ads-breakdown') {
        setCurrentPage('ads-breakdown');
        setActiveId(undefined);
      } else if (hash === 'services') {
        setCurrentPage('services');
        setActiveId(undefined);
      } else if (hash === 'contact') {
        setCurrentPage('contact');
        setActiveId(undefined);
      } else if (hash.startsWith('research/')) {
        const id = hash.replace('research/', '');
        setCurrentPage('market-research-detail');
        setActiveId(id);
      } else if (hash.startsWith('breakdown/')) {
        const id = hash.replace('breakdown/', '');
        setCurrentPage('ads-breakdown-detail');
        setActiveId(id);
      } else if (hash.startsWith('project/')) {
        const id = hash.replace('project/', '');
        setCurrentPage('project-detail');
        setActiveId(id);
      }
    };

    // Initial load check
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page: PageView, id?: string) => {
    setCurrentPage(page);
    setActiveId(id);

    // Update URL hash for bookmarking and GitHub Pages static routing
    let newHash = '';
    if (page === 'home') newHash = '#home';
    else if (page === 'portfolio') newHash = '#portfolio';
    else if (page === 'market-research') newHash = '#market-research';
    else if (page === 'ads-breakdown') newHash = '#ads-breakdown';
    else if (page === 'services') newHash = '#services';
    else if (page === 'contact') newHash = '#contact';
    else if (page === 'market-research-detail' && id) newHash = `#research/${id}`;
    else if (page === 'ads-breakdown-detail' && id) newHash = `#breakdown/${id}`;
    else if (page === 'project-detail' && id) newHash = `#project/${id}`;

    if (newHash && window.location.hash !== newHash) {
      window.history.pushState(null, '', newHash);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFA] text-slate-900 font-sans selection:bg-slate-900 selection:text-white">
      {/* Universal Navigation */}
      <Navbar currentPage={currentPage} onNavigate={navigateTo} />

      {/* Dynamic View Controller */}
      <div className="grow">
        {currentPage === 'home' && <HomePage onNavigate={navigateTo} />}
        {currentPage === 'portfolio' && <PortfolioPage onNavigate={navigateTo} />}
        {currentPage === 'market-research' && <MarketResearchPage onNavigate={navigateTo} />}
        {currentPage === 'market-research-detail' && (
          <MarketResearchDetail articleId={activeId} onNavigate={navigateTo} />
        )}
        {currentPage === 'ads-breakdown' && <AdsBreakdownPage onNavigate={navigateTo} />}
        {currentPage === 'ads-breakdown-detail' && (
          <AdsBreakdownDetail articleId={activeId} onNavigate={navigateTo} />
        )}
        {currentPage === 'services' && <ServicesPage onNavigate={navigateTo} />}
        {currentPage === 'contact' && <ContactPage />}
        {currentPage === 'project-detail' && (
          <ProjectDetail projectId={activeId} onNavigate={navigateTo} />
        )}
      </div>

      {/* Universal Footer */}
      <Footer onNavigate={navigateTo} />
    </div>
  );
}

import React, { useState } from 'react';
import { PageView } from '../types';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  currentPage: PageView;
  onNavigate: (page: PageView, id?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { label: string; page: PageView }[] = [
    { label: 'Home', page: 'home' },
    { label: 'Portfolio', page: 'portfolio' },
    { label: 'Market Research', page: 'market-research' },
    { label: 'Ads Breakdown', page: 'ads-breakdown' },
    { label: 'Services', page: 'services' },
    { label: 'Contact', page: 'contact' },
  ];

  const handleNavClick = (page: PageView) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isCurrentActive = (itemPage: PageView) => {
    if (currentPage === itemPage) return true;
    if (currentPage === 'market-research-detail' && itemPage === 'market-research') return true;
    if (currentPage === 'ads-breakdown-detail' && itemPage === 'ads-breakdown') return true;
    if (currentPage === 'project-detail' && itemPage === 'portfolio') return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-50 bg-[#FAFAFA]/90 backdrop-blur-md border-b border-slate-200/80 transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand / Logo */}
          <button
            id="nav-logo-btn"
            onClick={() => handleNavClick('home')}
            className="text-left group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 rounded-sm"
          >
            <div className="flex flex-col">
              <span className="font-editorial text-2xl font-bold tracking-tight text-slate-950 group-hover:text-slate-700 transition-colors">
                Afif Ahamed
              </span>
              <span className="text-[11px] font-medium tracking-wider uppercase text-slate-500">
                Media Buyer & Marketing Strategist
              </span>
            </div>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2" aria-label="Main Navigation">
            {navItems.map((item) => {
              const active = isCurrentActive(item.page);
              return (
                <button
                  key={item.page}
                  id={`nav-link-${item.page}`}
                  onClick={() => handleNavClick(item.page)}
                  className={`px-3.5 py-2 text-sm font-medium rounded-md transition-colors cursor-pointer ${
                    active
                      ? 'text-slate-950 font-semibold bg-slate-100/80'
                      : 'text-slate-600 hover:text-slate-950 hover:bg-slate-100/50'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-3">
            <button
              id="nav-cta-work-with-me"
              onClick={() => handleNavClick('contact')}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-md transition-all shadow-xs cursor-pointer focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2"
            >
              <span>Work With Me</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              id="nav-mobile-toggle-btn"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-md text-slate-700 hover:text-slate-950 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-900 cursor-pointer"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-[#FAFAFA] px-4 pt-3 pb-6 space-y-2 animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-1">
            {navItems.map((item) => {
              const active = isCurrentActive(item.page);
              return (
                <button
                  key={item.page}
                  id={`mobile-nav-${item.page}`}
                  onClick={() => handleNavClick(item.page)}
                  className={`flex items-center justify-between w-full px-3.5 py-2.5 text-base font-medium rounded-md text-left transition-colors cursor-pointer ${
                    active
                      ? 'bg-slate-900 text-white font-semibold'
                      : 'text-slate-700 hover:bg-slate-100 hover:text-slate-950'
                  }`}
                >
                  <span>{item.label}</span>
                  {active && <span className="w-1.5 h-1.5 rounded-full bg-white"></span>}
                </button>
              );
            })}
          </nav>
          <div className="pt-3 border-t border-slate-200">
            <button
              id="mobile-nav-cta-work-with-me"
              onClick={() => handleNavClick('contact')}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-md transition-colors cursor-pointer"
            >
              <span>Work With Me</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

import React from 'react';
import { PageView } from '../types';
import { ArrowUpRight, Mail, Linkedin, Facebook, Instagram } from 'lucide-react';
import { Logo } from './Logo';

interface FooterProps {
  onNavigate: (page: PageView, id?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (page: PageView) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200 bg-white text-slate-700 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-slate-200">
          {/* Col 1 & 2: Name & Positioning */}
          <div className="lg:col-span-2 space-y-4">
            <button
              onClick={() => handleNav('home')}
              className="text-left group cursor-pointer focus:outline-none"
              aria-label="Afif Ahamed - Home"
            >
              <Logo size="lg" />
            </button>
            <p className="text-sm text-slate-600 leading-relaxed max-w-md">
              I analyze markets, study winning advertising strategies, and help businesses turn opportunities into measurable growth. My work sits at the intersection of markets, creative, media buying, and data.
            </p>
            <div className="pt-2 flex items-center space-x-3 text-slate-600">
              <a
                id="footer-social-email"
                href="mailto:AhamedAfif87@gmail.com"
                className="p-2 rounded-md border border-slate-200 hover:text-slate-950 hover:border-slate-400 hover:bg-slate-50 transition-colors"
                title="Email Afif Ahamed"
                aria-label="Send email to AhamedAfif87@gmail.com"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                id="footer-social-linkedin"
                href="https://linkedin.com/in/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md border border-slate-200 hover:text-slate-950 hover:border-slate-400 hover:bg-slate-50 transition-colors"
                title="LinkedIn Profile Placeholder"
                aria-label="LinkedIn profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                id="footer-social-facebook"
                href="https://facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md border border-slate-200 hover:text-slate-950 hover:border-slate-400 hover:bg-slate-50 transition-colors"
                title="Facebook Profile Placeholder"
                aria-label="Facebook profile"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                id="footer-social-instagram"
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md border border-slate-200 hover:text-slate-950 hover:border-slate-400 hover:bg-slate-50 transition-colors"
                title="Instagram Profile Placeholder"
                aria-label="Instagram profile"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 3: Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-900">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => handleNav('home')}
                  className="hover:text-slate-950 transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('portfolio')}
                  className="hover:text-slate-950 transition-colors cursor-pointer"
                >
                  Portfolio & Case Studies
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('market-research')}
                  className="hover:text-slate-950 transition-colors cursor-pointer"
                >
                  Market Research
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('ads-breakdown')}
                  className="hover:text-slate-950 transition-colors cursor-pointer"
                >
                  Ads Breakdown
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-slate-950 transition-colors cursor-pointer"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('contact')}
                  className="hover:text-slate-950 transition-colors cursor-pointer"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Services */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-900">
              Capabilities
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-slate-950 transition-colors cursor-pointer"
                >
                  Media Buying (Meta & Google)
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-slate-950 transition-colors cursor-pointer"
                >
                  Performance Marketing
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-slate-950 transition-colors cursor-pointer"
                >
                  Marketing Strategy & Funnels
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-slate-950 transition-colors cursor-pointer"
                >
                  Market & Competitor Research
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-slate-950 transition-colors cursor-pointer"
                >
                  Content & Copywriting
                </button>
              </li>
            </ul>
          </div>

          {/* Col 5: Direct Contact */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-900">
              Inquiries
            </h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              Available for performance marketing strategy, media buying audits, and research projects.
            </p>
            <div className="pt-1">
              <a
                id="footer-email-link"
                href="mailto:AhamedAfif87@gmail.com"
                className="inline-flex items-center gap-1 text-sm font-semibold text-slate-950 hover:underline"
              >
                <span>AhamedAfif87@gmail.com</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
            <div className="pt-1">
              <span className="inline-block text-xs px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200/80 font-medium">
                Open to Client Inquiries
              </span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© 2026 Afif Ahamed. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <span>Static &amp; GitHub Pages Ready</span>
            <span>English / Bangla</span>
            <span>Dhaka, Bangladesh</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

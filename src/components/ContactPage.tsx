import React, { useState } from 'react';
import { Mail, ArrowRight, Copy, Check, Linkedin, Facebook, Instagram, MessageSquare, Clock, Globe } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    serviceNeeded: 'Media Buying (Meta / Google Ads)',
    projectDescription: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const directEmail = 'AhamedAfif87@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(directEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    // Prepare mailto link for static deployment without requiring a backend
    const subject = encodeURIComponent(`Project Inquiry: ${formData.serviceNeeded} - ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Business / Company: ${formData.company}\n` +
      `Service Needed: ${formData.serviceNeeded}\n\n` +
      `Project Description:\n${formData.projectDescription}`
    );

    window.location.href = `mailto:${directEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="py-16 sm:py-24 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header (Section 13 Requirement) */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 block mb-2">
            Inquiries &amp; Collaborations
          </span>
          <h1 className="font-editorial text-4xl sm:text-5xl font-bold tracking-tight text-slate-950 mb-4">
            Let's Work Together
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Have a business, campaign, product or marketing challenge you'd like to discuss? Tell me what you're working on.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Form Column */}
          <div className="lg:col-span-7 bg-white rounded-lg border border-slate-200 p-8 sm:p-10 shadow-2xs">
            {submitted ? (
              <div className="py-8 text-center animate-in fade-in duration-300">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="w-6 h-6" />
                </div>
                <h3 className="font-editorial text-2xl font-bold text-slate-950 mb-2">
                  Message Prepared
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed max-w-md mx-auto mb-6">
                  Your mail client has been opened with your inquiry details addressed to <strong className="text-slate-900">{directEmail}</strong>. If your mail client did not launch automatically, you can send an email directly using the button below.
                </p>
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold bg-slate-950 text-white rounded-md hover:bg-slate-800 transition-colors cursor-pointer"
                >
                  {copiedEmail ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  <span>{copiedEmail ? 'Email Copied!' : 'Copy Direct Email Address'}</span>
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Your Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. David Miller"
                    className="w-full px-4 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-900 focus:bg-white text-slate-900"
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Your Email <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="you@company.com"
                    className="w-full px-4 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-900 focus:bg-white text-slate-900"
                  />
                </div>

                <div>
                  <label htmlFor="contact-company" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Business / Company <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="contact-company"
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="e.g. Apex Apparel or Independent Brand"
                    className="w-full px-4 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-900 focus:bg-white text-slate-900"
                  />
                </div>

                <div>
                  <label htmlFor="contact-service" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Service Needed <span className="text-rose-500">*</span>
                  </label>
                  <select
                    id="contact-service"
                    value={formData.serviceNeeded}
                    onChange={(e) => setFormData({ ...formData, serviceNeeded: e.target.value })}
                    className="w-full px-4 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-900 focus:bg-white text-slate-900 cursor-pointer"
                  >
                    <option value="Media Buying (Meta / Google Ads)">Media Buying (Meta / Google Ads)</option>
                    <option value="Performance Marketing &amp; Metrics Audit">Performance Marketing &amp; Metrics Audit</option>
                    <option value="Marketing Strategy &amp; Funnel Design">Marketing Strategy &amp; Funnel Design</option>
                    <option value="Market Research &amp; Competitor Intelligence">Market Research &amp; Competitor Intelligence</option>
                    <option value="Content &amp; Direct-Response Copywriting">Content &amp; Direct-Response Copywriting</option>
                    <option value="Multiple Areas / Custom Consultation">Multiple Areas / Custom Consultation</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="contact-desc" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Project Description <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    id="contact-desc"
                    required
                    rows={5}
                    value={formData.projectDescription}
                    onChange={(e) => setFormData({ ...formData, projectDescription: e.target.value })}
                    placeholder="Describe your current product, target audience, ad challenges, and what you are looking to achieve..."
                    className="w-full px-4 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-900 focus:bg-white text-slate-900"
                  />
                </div>

                <div className="pt-2">
                  <button
                    id="submit-contact-form"
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-slate-950 hover:bg-slate-800 rounded-md transition-all cursor-pointer shadow-xs"
                  >
                    <span>Start a Conversation</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <p className="text-[11px] text-slate-500 mt-2 text-center">
                    Direct communication • No automated marketing spam • Replies within 24–48 hours
                  </p>
                </div>
              </form>
            )}
          </div>

          {/* Right Info Column */}
          <div className="lg:col-span-5 space-y-6">
            {/* Strategist Profile Card */}
            <div className="p-6 rounded-lg bg-white border border-slate-200 flex items-center gap-4 shadow-2xs">
              <img
                src="./assets/aistudio/IMG-20250310-WA0036_a86a6720.jpg"
                alt="Afif Ahamed"
                className="w-20 h-20 rounded-full object-cover object-[50%_25%] border-2 border-slate-100 shadow-xs shrink-0"
                referrerPolicy="no-referrer"
              />
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
                  Media Buyer &amp; Strategist
                </span>
                <h3 className="font-editorial text-xl font-bold text-slate-950">
                  Afif Ahamed
                </h3>
                <p className="text-xs text-slate-600 mt-1 leading-snug">
                  Direct client collaboration • Available for contract strategy, paid media management &amp; market research.
                </p>
              </div>
            </div>

            {/* Direct Email Card */}
            <div className="p-8 rounded-lg bg-white border border-slate-200">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
                Direct Communication
              </span>
              <h3 className="font-editorial text-2xl font-bold text-slate-950 mb-3">
                Send an Email
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                You can write to me directly with your requirements, campaign background, or market research inquiry.
              </p>

              <div className="p-3.5 rounded-md bg-slate-50 border border-slate-200 flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-semibold text-slate-900 truncate">
                  {directEmail}
                </span>
                <button
                  id="copy-direct-email-btn"
                  onClick={handleCopyEmail}
                  className="p-1.5 rounded hover:bg-slate-200 text-slate-700 transition-colors cursor-pointer shrink-0"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              <a
                id="mailto-direct-btn"
                href={`mailto:${directEmail}`}
                className="inline-flex items-center gap-2 text-xs font-semibold text-slate-950 hover:underline"
              >
                <span>Open in Email App</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Social & Professional Profile Placeholders (Section 13 Requirement) */}
            <div className="p-8 rounded-lg bg-white border border-slate-200">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
                Profiles &amp; Networks
              </span>
              <h3 className="font-editorial text-xl font-bold text-slate-950 mb-3">
                Connect Online
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Official profile placeholders configured for simple update with your personal URLs:
              </p>

              <div className="space-y-2.5">
                <a
                  id="contact-social-linkedin"
                  href="https://linkedin.com/in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-md border border-slate-200 hover:border-slate-400 hover:bg-slate-50 transition-colors text-xs font-medium text-slate-800"
                >
                  <span className="flex items-center gap-2">
                    <Linkedin className="w-4 h-4 text-slate-700" />
                    LinkedIn (Professional Network)
                  </span>
                  <span className="text-slate-400 text-[11px]">Connect →</span>
                </a>

                <a
                  id="contact-social-facebook"
                  href="https://facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-md border border-slate-200 hover:border-slate-400 hover:bg-slate-50 transition-colors text-xs font-medium text-slate-800"
                >
                  <span className="flex items-center gap-2">
                    <Facebook className="w-4 h-4 text-slate-700" />
                    Facebook (Creator / Page)
                  </span>
                  <span className="text-slate-400 text-[11px]">Follow →</span>
                </a>

                <a
                  id="contact-social-instagram"
                  href="https://instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-md border border-slate-200 hover:border-slate-400 hover:bg-slate-50 transition-colors text-xs font-medium text-slate-800"
                >
                  <span className="flex items-center gap-2">
                    <Instagram className="w-4 h-4 text-slate-700" />
                    Instagram (Visual Insights)
                  </span>
                  <span className="text-slate-400 text-[11px]">Follow →</span>
                </a>
              </div>
            </div>

            {/* Response Time & Location */}
            <div className="p-6 rounded-lg bg-slate-50 border border-slate-200 space-y-3 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-slate-500 shrink-0" />
                <span>Typical response window: <strong>Within 24 business hours</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-slate-500 shrink-0" />
                <span>Location: <strong>Dhaka, Bangladesh (GMT+6)</strong> • Working globally</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

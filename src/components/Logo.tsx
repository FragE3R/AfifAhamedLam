import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
  className?: string;
  theme?: 'dark' | 'light' | 'auto';
}

export const Logo: React.FC<LogoProps> = ({
  size = 'md',
  showSubtitle = true,
  className = '',
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8 rounded-lg',
    md: 'w-10 h-10 rounded-xl',
    lg: 'w-12 h-12 rounded-2xl',
  };

  const titleClasses = {
    sm: 'text-lg leading-tight',
    md: 'text-xl leading-tight',
    lg: 'text-2xl leading-tight',
  };

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Brand Icon Badge */}
      <div className="relative group/logo flex-shrink-0">
        <div className="absolute -inset-0.5 bg-gradient-to-tr from-emerald-500 via-teal-400 to-cyan-500 rounded-xl blur-xs opacity-40 group-hover/logo:opacity-80 transition duration-300"></div>
        <div
          className={`relative overflow-hidden bg-slate-950 border border-slate-800/80 shadow-md transition-transform duration-300 group-hover/logo:scale-[1.03] ${sizeClasses[size]} flex items-center justify-center`}
        >
          <img
            src="./images/media_buyer_logo.jpg"
            alt="Afif Ahamed - Media Buyer Logo"
            className="w-full h-full object-cover object-center"
            loading="eager"
            onError={(e) => {
              // Fallback to stylized SVG in case path needs relative ./ or /
              const target = e.currentTarget;
              if (!target.src.includes('media_buyer_logo_1793703454352.jpg')) {
                target.src = './src/assets/images/media_buyer_logo_1793703454352.jpg';
              }
            }}
          />
        </div>
      </div>

      {/* Brand Wordmark */}
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5">
          <span
            className={`font-editorial font-bold tracking-tight text-slate-950 ${titleClasses[size]} group-hover:text-emerald-950 transition-colors`}
          >
            Afif Ahamed
          </span>
          <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[9px] font-mono font-semibold tracking-wide bg-emerald-50 text-emerald-700 border border-emerald-200/60 uppercase">
            Ads
          </span>
        </div>
        {showSubtitle && (
          <span className="text-[10px] sm:text-[11px] font-medium tracking-wider uppercase text-slate-500">
            Media Buyer & Marketing Strategist
          </span>
        )}
      </div>
    </div>
  );
};

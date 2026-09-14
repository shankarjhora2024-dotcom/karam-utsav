import React from 'react';

interface KaramUtsavLogoProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'light' | 'dark' | 'full';
  showSubtitle?: boolean;
}

export const KaramUtsavLogo: React.FC<KaramUtsavLogoProps> = ({
  size = 'md',
  variant = 'light',
  showSubtitle = true,
}) => {
  const isLg = size === 'lg';
  const isSm = size === 'sm';

  const iconSize = isLg ? 'w-14 h-14' : isSm ? 'w-9 h-9' : 'w-11 h-11';
  const titleSize = isLg
    ? 'text-2xl sm:text-3xl'
    : isSm
    ? 'text-base sm:text-lg'
    : 'text-lg sm:text-xl';
  const subtitleSize = isLg ? 'text-xs' : 'text-[11px]';

  return (
    <div className="flex items-center gap-3 select-none">
      {/* Emblem SVG: Harmonious Sacred Karam Leaf + Radiant Festive Sun & Tribal Rhythms */}
      <div
        className={`${iconSize} rounded-2xl bg-gradient-to-br from-[#1b4332] via-[#24543e] to-[#0f281e] border border-[#52b788]/50 p-1.5 shadow-md flex items-center justify-center shrink-0 relative overflow-hidden group-hover:border-amber-400/80 transition-colors`}
      >
        <svg
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Radiant Sun/Harvest Halo */}
          <circle
            cx="24"
            cy="24"
            r="20"
            stroke="#fbbf24"
            strokeWidth="1.5"
            strokeDasharray="3 3"
            strokeOpacity="0.6"
          />

          {/* Golden Cultural Arch / Aura */}
          <path
            d="M10 24C10 16.268 16.268 10 24 10C31.732 10 38 16.268 38 24"
            stroke="#f59e0b"
            strokeWidth="1.75"
            strokeLinecap="round"
          />

          {/* Sacred Central Karam Leaf (Nauclea Parvifolia) */}
          <path
            d="M24 7C24 7 14 17 14 26C14 31.523 18.477 36 24 36C29.523 36 34 31.523 34 26C34 17 24 7 24 7Z"
            fill="url(#karamLeafGradient)"
            stroke="#b7e4c7"
            strokeWidth="1.2"
          />

          {/* Leaf Central Vein (Spine) */}
          <path
            d="M24 10V36M24 36V42"
            stroke="#fef08a"
            strokeWidth="1.75"
            strokeLinecap="round"
          />

          {/* Leaf Side Veins */}
          <path
            d="M24 17L18 21M24 23L17 27M24 29L19 32M24 17L30 21M24 23L31 27M24 29L29 32"
            stroke="#d8f3dc"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeOpacity="0.85"
          />

          {/* Tribal Madal Drum Rhythm Motif Accent at Base */}
          <ellipse
            cx="24"
            cy="39"
            rx="5.5"
            ry="2"
            fill="#d97706"
            stroke="#fef08a"
            strokeWidth="1"
          />

          {/* Gradients */}
          <defs>
            <linearGradient
              id="karamLeafGradient"
              x1="24"
              y1="7"
              x2="24"
              y2="36"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#40916c" />
              <stop offset="0.55" stopColor="#2d6a4f" />
              <stop offset="1" stopColor="#1b4332" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Brand Name & Subtitle */}
      <div className="flex flex-col text-left">
        <div className="flex items-center gap-1.5">
          <span
            className={`font-display font-bold tracking-tight leading-none ${titleSize} ${
              variant === 'dark'
                ? 'text-[#143627]'
                : 'text-[#fdfbf7] group-hover:text-amber-200 transition-colors'
            }`}
          >
            Karam Utsav
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0 inline-block"></span>
        </div>

        {showSubtitle && (
          <span
            className={`font-medium tracking-normal mt-0.5 leading-tight ${subtitleSize} ${
              variant === 'dark' ? 'text-[#2d6a4f]' : 'text-[#95d5b2]'
            }`}
          >
            Assam Cultural Heritage
          </span>
        )}
      </div>
    </div>
  );
};

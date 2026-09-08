import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'dark' | 'light';
  showSubtext?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = 'h-10',
  variant = 'dark',
  showSubtext = true,
}) => {
  const isLight = variant === 'light';
  const navyColor = isLight ? '#FFFFFF' : '#082B4C';
  const orangeColor = '#F47721';
  const subtextColor = isLight ? '#94A3B8' : '#68727D';

  return (
    <div className={`flex items-center gap-3.5 select-none ${className}`}>
      {/* Precision Vector Monogram 'K' with Excavator Boom & Bucket */}
      <svg
        viewBox="0 0 160 160"
        className="h-10 w-10 sm:h-11 sm:w-11 shrink-0 overflow-visible"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Left vertical navy stem */}
        <rect x="20" y="24" width="22" height="112" rx="2" fill={navyColor} />

        {/* Top diagonal boom arm (Navy) */}
        <path
          d="M48 92L96 32H118L68 94L48 92Z"
          fill={navyColor}
        />

        {/* Hydraulic boom extension & stick */}
        <path
          d="M102 32L124 64L114 70L96 36L102 32Z"
          fill={navyColor}
        />

        {/* Stylized Excavator Bucket (Orange #F47721) */}
        <path
          d="M118 62C124 64 133 73 133 82C133 91 125 96 112 96C103 96 102 88 108 79L120 62H118Z"
          fill={orangeColor}
        />
        {/* Bucket teeth accent */}
        <path
          d="M112 96L108 102M118 96L116 102M124 95L123 101"
          stroke={orangeColor}
          strokeWidth="2.5"
          strokeLinecap="round"
        />

        {/* Lower diagonal inner chevron (Orange #F47721) */}
        <path
          d="M50 78L90 126H114L70 78H50Z"
          fill={orangeColor}
        />

        {/* Lower outer navy chevron */}
        <path
          d="M68 110L88 136H114L90 106L68 110Z"
          fill={navyColor}
        />
      </svg>

      {/* Brand Typography */}
      <div className="flex flex-col justify-center leading-tight">
        <div className="flex items-baseline gap-1.5">
          <span
            className="font-extrabold tracking-tight text-[17px] sm:text-[19px] uppercase"
            style={{ color: navyColor, fontFamily: 'var(--font-sans)' }}
          >
            KAMLA INFRA
          </span>
          <span
            className="font-extrabold tracking-tight text-[17px] sm:text-[19px] uppercase"
            style={{ color: navyColor, fontFamily: 'var(--font-sans)' }}
          >
            GHANA LTD.
          </span>
        </div>
        {showSubtext && (
          <div
            className="text-[10px] sm:text-[11px] font-bold tracking-[0.2em] uppercase mt-0.5"
            style={{ color: subtextColor }}
          >
            SALES • RENTAL • SPARES
          </div>
        )}
      </div>
    </div>
  );
};

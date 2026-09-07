import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'full' | 'icon-only' | 'stacked' | 'white';
  showTagline?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  variant = 'full',
  showTagline = true,
}) => {
  const isWhite = variant === 'white';
  const navyColor = isWhite ? '#FFFFFF' : '#18181B';
  const orangeColor = '#E85D04';
  const slateColor = isWhite ? '#CBD5E1' : '#475569';

  // Crisp Vector Monogram matching the exact Kamla Infra excavator-K geometry
  const IconMark = () => (
    <svg
      viewBox="0 0 160 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      {/* Left Vertical Bar (Navy) */}
      <rect x="18" y="32" width="22" height="96" rx="2" fill={navyColor} />
      
      {/* Lower Diagonal Leg of K (Navy) */}
      <path
        d="M52 74L108 128H82L40 86V74H52Z"
        fill={navyColor}
      />

      {/* Inner Orange Chevron / K Accent */}
      <path
        d="M40 82L80 40H98L48 90H40V82Z"
        fill={orangeColor}
      />
      <rect x="40" y="32" width="20" height="96" rx="1" fill={orangeColor} />

      {/* Excavator Boom Arm (Navy) extending diagonally up from K center */}
      <path
        d="M46 88L96 14H116L66 88H46Z"
        fill={navyColor}
      />
      {/* Excavator Dipper / Arm articulation going down */}
      <path
        d="M106 14L136 68L124 74L98 22L106 14Z"
        fill={navyColor}
      />

      {/* Hydraulic Cylinder Accents */}
      <rect
        x="68"
        y="42"
        width="24"
        height="5"
        transform="rotate(-52 68 42)"
        fill="#94A3B8"
        opacity="0.8"
      />

      {/* Excavator Bucket (Orange) */}
      <path
        d="M130 64L144 80C146 86 142 96 132 98L112 98C108 98 104 94 104 90L108 82C110 80 114 80 116 82L124 88L134 86L126 72L130 64Z"
        fill={orangeColor}
      />
      {/* Bucket Teeth details */}
      <polygon points="106,94 102,100 108,100" fill={orangeColor} />
      <polygon points="114,94 111,100 117,100" fill={orangeColor} />
      <polygon points="122,94 119,100 125,100" fill={orangeColor} />
    </svg>
  );

  if (variant === 'icon-only') {
    return (
      <div className={`relative inline-flex items-center justify-center ${className}`}>
        <div className="w-10 h-10">
          <IconMark />
        </div>
      </div>
    );
  }

  if (variant === 'stacked') {
    return (
      <div className={`flex flex-col items-center text-center ${className}`}>
        <div className="w-14 h-14 mb-2">
          <IconMark />
        </div>
        <div className="flex flex-col">
          <span
            className="text-lg font-black tracking-tight leading-none"
            style={{ color: navyColor, fontFamily: 'Cabinet Grotesk, Plus Jakarta Sans, sans-serif' }}
          >
            KAMLA INFRA
          </span>
          <span
            className="text-sm font-bold tracking-wider leading-tight"
            style={{ color: navyColor }}
          >
            GHANA LTD.
          </span>
          {showTagline && (
            <span
              className="text-[10px] font-semibold tracking-widest mt-1 uppercase"
              style={{ color: slateColor }}
            >
              SALES <span style={{ color: orangeColor }}>•</span> RENTAL <span style={{ color: orangeColor }}>•</span> SPARES
            </span>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      <div className="w-11 h-11 shrink-0">
        <IconMark />
      </div>
      <div className="flex flex-col justify-center">
        <div className="flex flex-col">
          <span
            className="text-base font-extrabold tracking-tight leading-none"
            style={{ color: navyColor, fontFamily: 'Cabinet Grotesk, Plus Jakarta Sans, sans-serif' }}
          >
            KAMLA INFRA
          </span>
          <span
            className="text-xs font-bold tracking-wider leading-tight"
            style={{ color: navyColor }}
          >
            GHANA LTD.
          </span>
        </div>
        {showTagline && (
          <span
            className="text-[9px] font-semibold tracking-widest uppercase mt-0.5"
            style={{ color: slateColor }}
          >
            SALES <span style={{ color: orangeColor }}>•</span> RENTAL <span style={{ color: orangeColor }}>•</span> SPARES
          </span>
        )}
      </div>
    </div>
  );
};

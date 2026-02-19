interface DVSLogoProps {
  size?: number;
  showSubtitle?: boolean;
  className?: string;
}

export function DVSLogo({ size = 1, showSubtitle = false, className }: DVSLogoProps) {
  const fg = "#0a0a0a";
  const height = showSubtitle ? 134 : 82;

  return (
    <svg
      width={180 * size}
      height={height * size}
      viewBox={`0 0 180 ${height}`}
      className={className}
    >
      <defs>
        <linearGradient id="dvs-mono-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2563EB" />
          <stop offset="100%" stopColor="#60A5FA" />
        </linearGradient>
      </defs>
      {/* D */}
      <text
        x="22"
        y="66"
        fontFamily="'SF Pro Display', 'Helvetica Neue', system-ui, sans-serif"
        fontSize="68"
        fontWeight="800"
        fill={fg}
        opacity="0.9"
        textAnchor="middle"
      >
        D
      </text>
      {/* V - centered */}
      <text
        x="90"
        y="66"
        fontFamily="'SF Pro Display', 'Helvetica Neue', system-ui, sans-serif"
        fontSize="68"
        fontWeight="800"
        fill="url(#dvs-mono-grad)"
        textAnchor="middle"
      >
        V
      </text>
      {/* S */}
      <text
        x="158"
        y="66"
        fontFamily="'SF Pro Display', 'Helvetica Neue', system-ui, sans-serif"
        fontSize="68"
        fontWeight="800"
        fill={fg}
        opacity="0.9"
        textAnchor="middle"
      >
        S
      </text>
      {/* Underline */}
      <rect x="4" y="76" width="172" height="2.5" rx="1.25" fill="url(#dvs-mono-grad)" opacity="0.7" />
      {/* Subtitle */}
      {showSubtitle && (
        <>
          <text
            x="90"
            y="100"
            textAnchor="middle"
            fontFamily="'SF Pro Display', 'Helvetica Neue', system-ui, sans-serif"
            fontSize="10"
            fontWeight="500"
            letterSpacing="6"
            fill="#9CA3AF"
          >
            DIGITAL VAULT
          </text>
          <text
            x="90"
            y="116"
            textAnchor="middle"
            fontFamily="'SF Pro Display', 'Helvetica Neue', system-ui, sans-serif"
            fontSize="10"
            fontWeight="500"
            letterSpacing="6"
            fill="#9CA3AF"
          >
            SOLUTIONS
          </text>
        </>
      )}
    </svg>
  );
}

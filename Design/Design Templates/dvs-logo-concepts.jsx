import { useState } from "react";

const logos = [
  {
    id: "wordmark",
    label: "Minimal Wordmark",
    desc: "Clean typography-driven mark. The 'vault' concept is embedded in the letterforms — the V creates an angular, secure shape. Works great as a header logo or favicon.",
  },
  {
    id: "icon-text",
    label: "Icon + Text Lockup",
    desc: "A vault/shield icon paired with the company name. The icon works standalone as an app icon or favicon, and the full lockup works for headers and print.",
  },
  {
    id: "monogram",
    label: "DVS Monogram",
    desc: "The three letters interlocked into a single geometric mark. Compact, memorable, works at any size. Strong for social avatars, watermarks, and merch.",
  },
  {
    id: "abstract",
    label: "Abstract Tech Symbol",
    desc: "A circuit/node pattern forming a vault shape — represents AI systems and data pipelines. Paired with clean type. Works well for a tech-forward brand.",
  },
];

// --- LOGO 1: Minimal Wordmark ---
function WordmarkLogo({ size = 1, dark = false }) {
  const s = size;
  const fg = dark ? "#E8ECF1" : "#0D1117";
  const accent = "#3B82F6";
  return (
    <svg width={320 * s} height={80 * s} viewBox="0 0 320 80">
      {/* DIGITAL */}
      <text
        x="0"
        y="34"
        fontFamily="'SF Pro Display', 'Helvetica Neue', system-ui, sans-serif"
        fontSize="14"
        fontWeight="500"
        letterSpacing="6"
        fill={dark ? "#6B7280" : "#9CA3AF"}
      >
        DIGITAL
      </text>
      {/* VAULT */}
      <text
        x="0"
        y="68"
        fontFamily="'SF Pro Display', 'Helvetica Neue', system-ui, sans-serif"
        fontSize="42"
        fontWeight="700"
        letterSpacing="2"
        fill={fg}
      >
        V
      </text>
      <text
        x="30"
        y="68"
        fontFamily="'SF Pro Display', 'Helvetica Neue', system-ui, sans-serif"
        fontSize="42"
        fontWeight="700"
        letterSpacing="2"
        fill={fg}
      >
        AULT
      </text>
      {/* Accent line under V */}
      <rect x="0" y="72" width="28" height="3" rx="1.5" fill={accent} />
      {/* SOLUTIONS */}
      <text
        x="148"
        y="68"
        fontFamily="'SF Pro Display', 'Helvetica Neue', system-ui, sans-serif"
        fontSize="42"
        fontWeight="300"
        letterSpacing="1"
        fill={dark ? "#6B7280" : "#6B7280"}
      >
        SOL
      </text>
      <text
        x="232"
        y="68"
        fontFamily="'SF Pro Display', 'Helvetica Neue', system-ui, sans-serif"
        fontSize="42"
        fontWeight="300"
        letterSpacing="1"
        fill={dark ? "#6B7280" : "#6B7280"}
      >
        .
      </text>
    </svg>
  );
}

// --- LOGO 2: Icon + Text ---
function IconTextLogo({ size = 1, dark = false }) {
  const fg = dark ? "#E8ECF1" : "#0D1117";
  const accent = "#3B82F6";
  const accent2 = "#60A5FA";
  return (
    <svg width={360 * size} height={72 * size} viewBox="0 0 360 72">
      {/* Vault/Shield Icon */}
      <g transform="translate(4, 4)">
        {/* Outer shield */}
        <path
          d="M32 0 L58 12 L58 38 Q58 56 32 64 Q6 56 6 38 L6 12 Z"
          fill="none"
          stroke={accent}
          strokeWidth="2.5"
        />
        {/* Inner keyhole / data node */}
        <circle cx="32" cy="26" r="8" fill={accent} opacity="0.9" />
        <rect x="29.5" y="32" width="5" height="14" rx="2.5" fill={accent} opacity="0.9" />
        {/* Corner nodes */}
        <circle cx="14" cy="16" r="2" fill={accent2} opacity="0.6" />
        <circle cx="50" cy="16" r="2" fill={accent2} opacity="0.6" />
        <circle cx="14" cy="44" r="2" fill={accent2} opacity="0.6" />
        <circle cx="50" cy="44" r="2" fill={accent2} opacity="0.6" />
        {/* Connecting lines */}
        <line x1="16" y1="16" x2="24" y2="24" stroke={accent2} strokeWidth="1" opacity="0.3" />
        <line x1="48" y1="16" x2="40" y2="24" stroke={accent2} strokeWidth="1" opacity="0.3" />
        <line x1="16" y1="44" x2="28" y2="40" stroke={accent2} strokeWidth="1" opacity="0.3" />
        <line x1="48" y1="44" x2="36" y2="40" stroke={accent2} strokeWidth="1" opacity="0.3" />
      </g>
      {/* Text */}
      <text
        x="80"
        y="32"
        fontFamily="'SF Pro Display', 'Helvetica Neue', system-ui, sans-serif"
        fontSize="13"
        fontWeight="500"
        letterSpacing="5"
        fill={dark ? "#6B7280" : "#9CA3AF"}
      >
        DIGITAL
      </text>
      <text
        x="80"
        y="58"
        fontFamily="'SF Pro Display', 'Helvetica Neue', system-ui, sans-serif"
        fontSize="28"
        fontWeight="700"
        letterSpacing="3"
        fill={fg}
      >
        VAULT SOLUTIONS
      </text>
    </svg>
  );
}

// --- LOGO 3: DVS Monogram ---
function MonogramLogo({ size = 1, dark = false }) {
  const accent = "#3B82F6";
  const fg = dark ? "#E8ECF1" : "#0D1117";
  return (
    <svg width={200 * size} height={134 * size} viewBox="0 0 200 134">
      <defs>
        <linearGradient id="monoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2563EB" />
          <stop offset="100%" stopColor="#60A5FA" />
        </linearGradient>
      </defs>
      {/* D */}
      <text
        x="14"
        y="72"
        fontFamily="'SF Pro Display', 'Helvetica Neue', system-ui, sans-serif"
        fontSize="72"
        fontWeight="800"
        fill={fg}
        opacity="0.9"
      >
        D
      </text>
      {/* V - centered with more space */}
      <text
        x="68"
        y="72"
        fontFamily="'SF Pro Display', 'Helvetica Neue', system-ui, sans-serif"
        fontSize="72"
        fontWeight="800"
        fill="url(#monoGrad)"
      >
        V
      </text>
      {/* S */}
      <text
        x="124"
        y="72"
        fontFamily="'SF Pro Display', 'Helvetica Neue', system-ui, sans-serif"
        fontSize="72"
        fontWeight="800"
        fill={fg}
        opacity="0.9"
      >
        S
      </text>
      {/* Underline */}
      <rect x="14" y="82" width="160" height="2.5" rx="1.25" fill="url(#monoGrad)" opacity="0.7" />
      {/* Subtitle line 1 */}
      <text
        x="100"
        y="104"
        textAnchor="middle"
        fontFamily="'SF Pro Display', 'Helvetica Neue', system-ui, sans-serif"
        fontSize="10"
        fontWeight="500"
        letterSpacing="6"
        fill={dark ? "#6B7280" : "#9CA3AF"}
      >
        DIGITAL VAULT
      </text>
      {/* Subtitle line 2 */}
      <text
        x="100"
        y="120"
        textAnchor="middle"
        fontFamily="'SF Pro Display', 'Helvetica Neue', system-ui, sans-serif"
        fontSize="10"
        fontWeight="500"
        letterSpacing="6"
        fill={dark ? "#6B7280" : "#9CA3AF"}
      >
        SOLUTIONS
      </text>
    </svg>
  );
}

// --- LOGO 4: Abstract Symbol ---
function AbstractLogo({ size = 1, dark = false }) {
  const fg = dark ? "#E8ECF1" : "#0D1117";
  const accent = "#3B82F6";
  return (
    <svg width={340 * size} height={80 * size} viewBox="0 0 340 80">
      <defs>
        <linearGradient id="absGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1D4ED8" />
          <stop offset="50%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#93C5FD" />
        </linearGradient>
      </defs>
      {/* Circuit vault symbol */}
      <g transform="translate(8, 8)">
        {/* Hexagonal vault shape made of connected nodes */}
        {/* Top */}
        <circle cx="32" cy="4" r="3.5" fill="url(#absGrad)" />
        {/* Top-right */}
        <circle cx="56" cy="18" r="3.5" fill="url(#absGrad)" />
        {/* Bottom-right */}
        <circle cx="56" cy="46" r="3.5" fill="url(#absGrad)" />
        {/* Bottom */}
        <circle cx="32" cy="60" r="3.5" fill="url(#absGrad)" />
        {/* Bottom-left */}
        <circle cx="8" cy="46" r="3.5" fill="url(#absGrad)" />
        {/* Top-left */}
        <circle cx="8" cy="18" r="3.5" fill="url(#absGrad)" />
        {/* Center node - larger */}
        <circle cx="32" cy="32" r="6" fill="url(#absGrad)" />
        <circle cx="32" cy="32" r="3" fill={dark ? "#0D1117" : "#FFFFFF"} />

        {/* Connecting lines */}
        <line x1="32" y1="7.5" x2="53" y2="18" stroke={accent} strokeWidth="1.5" opacity="0.5" />
        <line x1="56" y1="21.5" x2="56" y2="42.5" stroke={accent} strokeWidth="1.5" opacity="0.5" />
        <line x1="53" y1="46" x2="32" y2="56.5" stroke={accent} strokeWidth="1.5" opacity="0.5" />
        <line x1="29" y1="56.5" x2="8" y2="49.5" stroke={accent} strokeWidth="1.5" opacity="0.5" />
        <line x1="8" y1="42.5" x2="8" y2="21.5" stroke={accent} strokeWidth="1.5" opacity="0.5" />
        <line x1="11" y1="18" x2="32" y2="7.5" stroke={accent} strokeWidth="1.5" opacity="0.5" />

        {/* Radial lines to center */}
        <line x1="32" y1="10" x2="32" y2="26" stroke={accent} strokeWidth="1" opacity="0.3" />
        <line x1="52" y1="20" x2="37" y2="28" stroke={accent} strokeWidth="1" opacity="0.3" />
        <line x1="52" y1="44" x2="37" y2="36" stroke={accent} strokeWidth="1" opacity="0.3" />
        <line x1="32" y1="54" x2="32" y2="38" stroke={accent} strokeWidth="1" opacity="0.3" />
        <line x1="12" y1="44" x2="27" y2="36" stroke={accent} strokeWidth="1" opacity="0.3" />
        <line x1="12" y1="20" x2="27" y2="28" stroke={accent} strokeWidth="1" opacity="0.3" />
      </g>
      {/* Text */}
      <text
        x="84"
        y="30"
        fontFamily="'SF Pro Display', 'Helvetica Neue', system-ui, sans-serif"
        fontSize="12"
        fontWeight="500"
        letterSpacing="5"
        fill={dark ? "#6B7280" : "#9CA3AF"}
      >
        DIGITAL
      </text>
      <text
        x="84"
        y="56"
        fontFamily="'SF Pro Display', 'Helvetica Neue', system-ui, sans-serif"
        fontSize="28"
        fontWeight="700"
        letterSpacing="2"
        fill={fg}
      >
        VAULT
      </text>
      <text
        x="198"
        y="56"
        fontFamily="'SF Pro Display', 'Helvetica Neue', system-ui, sans-serif"
        fontSize="28"
        fontWeight="300"
        letterSpacing="2"
        fill={dark ? "#6B7280" : "#6B7280"}
      >
        SOLUTIONS
      </text>
    </svg>
  );
}

export default function LogoShowcase() {
  const [darkMode, setDarkMode] = useState(true);
  const [selected, setSelected] = useState(null);

  const bg = darkMode ? "#0D1117" : "#FFFFFF";
  const cardBg = darkMode ? "#161B22" : "#F6F8FA";
  const cardBorder = darkMode ? "#30363D" : "#E1E4E8";
  const textPrimary = darkMode ? "#E6EDF3" : "#1F2328";
  const textSecondary = darkMode ? "#8B949E" : "#656D76";
  const accent = "#3B82F6";

  const logoComponents = {
    wordmark: WordmarkLogo,
    "icon-text": IconTextLogo,
    monogram: MonogramLogo,
    abstract: AbstractLogo,
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: bg,
        padding: "48px 24px",
        fontFamily: "'SF Pro Display', 'Helvetica Neue', system-ui, sans-serif",
        transition: "background 0.3s ease",
      }}
    >
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 48,
          }}
        >
          <div>
            <h1
              style={{
                fontSize: 28,
                fontWeight: 700,
                color: textPrimary,
                margin: 0,
                letterSpacing: "-0.5px",
              }}
            >
              DVS Logo Concepts
            </h1>
            <p style={{ fontSize: 14, color: textSecondary, margin: "8px 0 0" }}>
              Four directions — technical precision meets premium refinement
            </p>
          </div>
          <button
            onClick={() => setDarkMode(!darkMode)}
            style={{
              background: darkMode ? "#21262D" : "#F0F0F0",
              border: `1px solid ${cardBorder}`,
              borderRadius: 8,
              padding: "8px 16px",
              color: textSecondary,
              cursor: "pointer",
              fontSize: 13,
              fontWeight: 500,
            }}
          >
            {darkMode ? "☀ Light" : "● Dark"}
          </button>
        </div>

        {/* Logo Cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          {logos.map((logo, i) => {
            const LogoComp = logoComponents[logo.id];
            const isSelected = selected === logo.id;
            return (
              <div
                key={logo.id}
                onClick={() => setSelected(isSelected ? null : logo.id)}
                style={{
                  background: cardBg,
                  border: `1.5px solid ${isSelected ? accent : cardBorder}`,
                  borderRadius: 16,
                  padding: 32,
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  boxShadow: isSelected
                    ? `0 0 0 3px ${accent}22`
                    : "none",
                }}
              >
                {/* Label */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: 24,
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <span
                      style={{
                        fontSize: 11,
                        fontWeight: 600,
                        color: accent,
                        letterSpacing: 2,
                        textTransform: "uppercase",
                      }}
                    >
                      Concept {i + 1}
                    </span>
                    <span
                      style={{
                        fontSize: 15,
                        fontWeight: 600,
                        color: textPrimary,
                      }}
                    >
                      {logo.label}
                    </span>
                  </div>
                  {isSelected && (
                    <span
                      style={{
                        fontSize: 11,
                        fontWeight: 600,
                        color: accent,
                        background: `${accent}15`,
                        padding: "4px 10px",
                        borderRadius: 6,
                      }}
                    >
                      SELECTED
                    </span>
                  )}
                </div>

                {/* Logo Display */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "40px 24px",
                    background: darkMode ? "#0D1117" : "#FFFFFF",
                    borderRadius: 12,
                    border: `1px solid ${darkMode ? "#21262D" : "#E8EAED"}`,
                    marginBottom: 16,
                  }}
                >
                  <LogoComp size={1} dark={darkMode} />
                </div>

                {/* Description */}
                <p
                  style={{
                    fontSize: 13,
                    color: textSecondary,
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  {logo.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Footer note */}
        <p
          style={{
            fontSize: 12,
            color: textSecondary,
            textAlign: "center",
            marginTop: 40,
            opacity: 0.7,
          }}
        >
          Click any concept to select it. Toggle dark/light to see how each performs on both backgrounds.
        </p>
      </div>
    </div>
  );
}

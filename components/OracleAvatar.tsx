"use client";

interface OracleAvatarProps {
  size?: "sm" | "md" | "lg";
  animated?: boolean;
}

const sizes = {
  sm: "w-20 h-20",
  md: "w-40 h-40",
  lg: "w-64 h-64",
};

export default function OracleAvatar({
  size = "md",
  animated = true,
}: OracleAvatarProps) {
  return (
    <div className={`relative ${sizes[size]} ${animated ? "animate-float" : ""}`}>
      {/* Outer glow ring */}
      <div className="absolute inset-0 rounded-full bg-crimson/5 blur-2xl animate-pulse-slow" />

      {/* SVG Oracle Character — Enma Ai inspired */}
      <svg
        viewBox="0 0 200 240"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-[0_0_20px_rgba(139,0,0,0.5)]"
      >
        <defs>
          {/* Hair gradient */}
          <linearGradient id="hairGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1a0a0a" />
            <stop offset="100%" stopColor="#0d0000" />
          </linearGradient>
          {/* Skin gradient */}
          <linearGradient id="skinGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#f5e6e0" />
            <stop offset="100%" stopColor="#e8d0c8" />
          </linearGradient>
          {/* Kimono gradient */}
          <linearGradient id="kimonoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1a0000" />
            <stop offset="50%" stopColor="#2d0000" />
            <stop offset="100%" stopColor="#0d0000" />
          </linearGradient>
          {/* Eye glow */}
          <radialGradient id="eyeGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#cc0000" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#660000" stopOpacity="0.4" />
          </radialGradient>
          {/* Red accent gradient */}
          <linearGradient id="redAccent" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8b0000" stopOpacity="0" />
            <stop offset="50%" stopColor="#cc0000" />
            <stop offset="100%" stopColor="#8b0000" stopOpacity="0" />
          </linearGradient>
          {/* Glow filter */}
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="softGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Background aura */}
        <ellipse cx="100" cy="200" rx="70" ry="20" fill="rgba(139,0,0,0.08)" />
        <ellipse cx="100" cy="120" rx="80" ry="100" fill="rgba(139,0,0,0.03)" />

        {/* === KIMONO / BODY === */}
        {/* Main body/kimono */}
        <path
          d="M55 160 Q50 200 45 240 L155 240 Q150 200 145 160 Q130 180 100 182 Q70 180 55 160Z"
          fill="url(#kimonoGrad)"
        />
        {/* Kimono collar — white */}
        <path
          d="M85 158 Q100 170 115 158 L118 165 Q100 178 82 165Z"
          fill="#f5e6e0"
          opacity="0.9"
        />
        {/* Red obi sash line */}
        <rect x="60" y="185" width="80" height="3" fill="url(#redAccent)" rx="1.5" />
        {/* Kimono fold lines */}
        <path d="M100 182 Q90 200 85 240" stroke="#8b0000" strokeWidth="0.5" fill="none" opacity="0.4" />
        <path d="M100 182 Q110 200 115 240" stroke="#8b0000" strokeWidth="0.5" fill="none" opacity="0.4" />

        {/* === NECK === */}
        <rect x="91" y="140" width="18" height="22" rx="4" fill="url(#skinGrad)" />

        {/* === HEAD === */}
        <ellipse cx="100" cy="115" rx="38" ry="42" fill="url(#skinGrad)" />

        {/* === HAIR — long flowing === */}
        {/* Back hair */}
        <path
          d="M62 95 Q40 140 42 240 L58 240 Q55 160 68 120Z"
          fill="url(#hairGrad)"
        />
        <path
          d="M138 95 Q160 140 158 240 L142 240 Q145 160 132 120Z"
          fill="url(#hairGrad)"
        />
        {/* Top of head / fringe */}
        <ellipse cx="100" cy="90" rx="40" ry="20" fill="url(#hairGrad)" />
        {/* Bangs */}
        <path
          d="M62 90 Q65 115 70 125 Q68 110 72 100 Q78 112 80 120 Q82 105 85 100 Q88 115 90 122 Q92 108 95 102"
          fill="url(#hairGrad)"
        />
        <path
          d="M138 90 Q135 115 130 125 Q132 110 128 100 Q122 112 120 120 Q118 105 115 100 Q112 115 110 122 Q108 108 105 102"
          fill="url(#hairGrad)"
        />
        {/* Side hair strands */}
        <path
          d="M63 110 Q50 135 52 165 Q58 150 65 140Z"
          fill="url(#hairGrad)"
          opacity="0.9"
        />
        <path
          d="M137 110 Q150 135 148 165 Q142 150 135 140Z"
          fill="url(#hairGrad)"
          opacity="0.9"
        />

        {/* === FACE === */}
        {/* Eyebrows — thin, sharp */}
        <path d="M78 103 Q85 100 92 102" stroke="#2a0000" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M108 102 Q115 100 122 103" stroke="#2a0000" strokeWidth="1.5" fill="none" strokeLinecap="round" />

        {/* Eyes */}
        {/* Left eye */}
        <ellipse cx="85" cy="113" rx="9" ry="7" fill="#0d0000" />
        <ellipse cx="85" cy="113" rx="7" ry="5.5" fill="url(#eyeGlow)" filter="url(#glow)" />
        <ellipse cx="85" cy="113" rx="4" ry="3.5" fill="#cc0000" />
        <ellipse cx="85" cy="113" rx="2" ry="2" fill="#1a0000" />
        {/* Eye highlight */}
        <ellipse cx="82" cy="111" rx="1.5" ry="1" fill="rgba(255,220,220,0.6)" />

        {/* Right eye */}
        <ellipse cx="115" cy="113" rx="9" ry="7" fill="#0d0000" />
        <ellipse cx="115" cy="113" rx="7" ry="5.5" fill="url(#eyeGlow)" filter="url(#glow)" />
        <ellipse cx="115" cy="113" rx="4" ry="3.5" fill="#cc0000" />
        <ellipse cx="115" cy="113" rx="2" ry="2" fill="#1a0000" />
        <ellipse cx="112" cy="111" rx="1.5" ry="1" fill="rgba(255,220,220,0.6)" />

        {/* Lower lashes */}
        <path d="M78 117 Q80 119 82 118" stroke="#2a0000" strokeWidth="0.8" fill="none" />
        <path d="M108 117 Q110 119 112 118" stroke="#2a0000" strokeWidth="0.8" fill="none" />

        {/* Nose */}
        <path d="M98 125 Q100 127 102 125" stroke="#c8a898" strokeWidth="0.8" fill="none" opacity="0.5" />

        {/* Lips — thin, closed, slightly downturned */}
        <path d="M93 133 Q100 136 107 133" stroke="#8b3030" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M95 133 Q100 131 105 133" stroke="#6b2020" strokeWidth="0.8" fill="none" />

        {/* === ORNAMENT — red spider lily in hair === */}
        <g transform="translate(125, 92)" filter="url(#softGlow)">
          {/* Petals */}
          {[0, 60, 120, 180, 240, 300].map((angle, i) => (
            <path
              key={i}
              d={`M0,0 Q${3 * Math.cos(((angle + 30) * Math.PI) / 180)},${3 * Math.sin(((angle + 30) * Math.PI) / 180)} ${10 * Math.cos((angle * Math.PI) / 180)},${10 * Math.sin((angle * Math.PI) / 180)}`}
              stroke="#cc0000"
              strokeWidth="1.5"
              fill="none"
              opacity="0.9"
            />
          ))}
          <circle cx="0" cy="0" r="2" fill="#8b0000" />
        </g>

        {/* Floating wisps */}
        <circle cx="40" cy="80" r="2" fill="rgba(139,0,0,0.4)" filter="url(#softGlow)" />
        <circle cx="165" cy="100" r="1.5" fill="rgba(139,0,0,0.3)" filter="url(#softGlow)" />
        <circle cx="35" cy="150" r="1" fill="rgba(123,143,196,0.4)" filter="url(#softGlow)" />

        {/* Bottom mist */}
        <ellipse cx="100" cy="238" rx="65" ry="6" fill="rgba(7,5,15,0.8)" />
      </svg>

      {/* Candle flicker glow at base */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-8 bg-crimson/10 blur-xl rounded-full animate-candle" />
    </div>
  );
}

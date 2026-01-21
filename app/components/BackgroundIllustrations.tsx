'use client';

export default function BackgroundIllustrations() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-[1]" style={{ opacity: 0.12 }}>
      {/* Distant Hills Silhouette - Top Left */}
      <svg className="absolute top-0 left-0 w-96 h-80" viewBox="0 0 400 320">
        {/* Distant hills layer */}
        <path
          d="M0 280 Q100 200 200 220 Q300 240 400 200 L400 320 L0 320 Z"
          fill="#8b9a7a"
          opacity="0.5"
        />
        <path
          d="M0 300 Q120 240 240 260 Q350 280 400 240 L400 320 L0 320 Z"
          fill="#5a8a7a"
          opacity="0.4"
        />
        {/* Mountain silhouette */}
        <path
          d="M50 320 L80 180 Q100 160 120 180 Q140 200 160 170 L180 220 L200 200 L220 240 L250 190 L270 210 L290 180 L320 200 L350 160 L380 200 L380 320 Z"
          fill="#3d5a4f"
          opacity="0.35"
        />
        {/* Soft mist overlay */}
        <path
          d="M0 250 Q200 200 400 220 L400 280 Q200 260 0 300 Z"
          fill="#faf8f5"
          opacity="0.25"
        />
      </svg>

      {/* Distant Castle/Tower Silhouette - Top Right */}
      <svg className="absolute top-0 right-0 w-72 h-96" viewBox="0 0 300 400">
        {/* Tower base */}
        <rect x="120" y="180" width="24" height="120" fill="#3d5a4f" opacity="0.4" rx="2" />
        {/* Tower top with battlements */}
        <rect x="115" y="160" width="34" height="20" fill="#3d5a4f" opacity="0.4" />
        <rect x="118" y="160" width="8" height="8" fill="#faf8f5" opacity="0.15" />
        <rect x="144" y="160" width="8" height="8" fill="#faf8f5" opacity="0.15" />
        {/* Smaller tower */}
        <rect x="100" y="200" width="18" height="80" fill="#5a8a7a" opacity="0.35" />
        <rect x="145" y="220" width="18" height="60" fill="#5a8a7a" opacity="0.35" />
        {/* Distant hills behind */}
        <path
          d="M0 300 Q150 260 300 280 L300 400 L0 400 Z"
          fill="#8b9a7a"
          opacity="0.25"
        />
        {/* Atmospheric mist */}
        <path
          d="M0 280 Q150 240 300 260 L300 320 Q150 300 0 340 Z"
          fill="#faf8f5"
          opacity="0.3"
        />
      </svg>

      {/* Valley and Cliffs - Bottom Left */}
      <svg className="absolute bottom-0 left-0 w-80 h-72" viewBox="0 0 320 300">
        {/* Cliff faces */}
        <path
          d="M0 300 L40 180 Q60 160 80 180 Q100 200 120 150 Q140 100 160 140 Q180 180 200 120 Q220 80 240 100 L260 140 L280 100 L320 150 L320 300 Z"
          fill="#4a5d6b"
          opacity="0.35"
        />
        {/* Valley floor */}
        <path
          d="M0 300 Q160 280 320 300 L320 320 L0 320 Z"
          fill="#8b9a7a"
          opacity="0.25"
        />
        {/* Distant trees/shrubs */}
        <path
          d="M60 250 Q65 240 60 235 Q65 230 60 225 Q65 220 60 250"
          fill="none"
          stroke="#5a8a7a"
          strokeWidth="1.5"
          opacity="0.35"
          strokeLinecap="round"
        />
        <path
          d="M120 270 Q125 260 120 255 Q125 250 120 245 Q125 240 120 270"
          fill="none"
          stroke="#5a8a7a"
          strokeWidth="1.5"
          opacity="0.35"
          strokeLinecap="round"
        />
      </svg>

      {/* Distant Landscape - Bottom Right */}
      <svg className="absolute bottom-0 right-0 w-96 h-64" viewBox="0 0 400 260">
        {/* Rolling hills */}
        <path
          d="M0 260 L50 200 Q100 180 150 190 Q200 200 250 170 Q300 140 350 160 Q380 170 400 150 L400 260 Z"
          fill="#8b9a7a"
          opacity="0.35"
        />
        <path
          d="M0 260 L80 220 Q160 200 240 210 Q320 220 400 200 L400 260 Z"
          fill="#5a8a7a"
          opacity="0.25"
        />
        {/* Small tower in distance */}
        <path
          d="M280 200 L290 140 L295 135 L300 140 L310 200 Z"
          fill="#3d5a4f"
          opacity="0.3"
        />
        <rect x="292" y="135" width="6" height="8" fill="#3d5a4f" opacity="0.25" />
      </svg>

      {/* Subtle Side Elements - Left Edge */}
      <svg className="absolute top-[30%] left-0 w-32 h-96" viewBox="0 0 130 400">
        {/* Distant hill silhouette */}
        <path
          d="M0 400 L20 350 Q40 330 60 340 Q80 350 100 320 Q110 310 120 320 L130 340 L130 400 Z"
          fill="#8b9a7a"
          opacity="0.25"
        />
        {/* Partial tree silhouette */}
        <path
          d="M40 360 Q38 320 40 300 Q42 280 40 300 Q38 320 40 360"
          fill="none"
          stroke="#5a8a7a"
          strokeWidth="1.2"
          opacity="0.2"
          strokeLinecap="round"
        />
        <path d="M40 360 L40 400" stroke="#5a8a7a" strokeWidth="1" opacity="0.2" />
      </svg>

      {/* Subtle Side Elements - Right Edge */}
      <svg className="absolute top-[25%] right-0 w-40 h-80" viewBox="0 0 160 320">
        {/* Faded hill contour */}
        <path
          d="M160 320 L140 280 Q120 260 100 270 Q80 280 60 250 Q50 240 40 250 L0 280 L0 320 Z"
          fill="#8b9a7a"
          opacity="0.2"
        />
        {/* Distant tower tip */}
        <path
          d="M100 200 L110 160 L115 155 L120 160 L130 200 Z"
          fill="#3d5a4f"
          opacity="0.15"
        />
      </svg>

      {/* Atmospheric Watercolor Wash Overlay */}
      <div 
        className="absolute inset-0" 
        style={{
          background: `
            radial-gradient(circle at 15% 20%, rgba(90, 138, 122, 0.02) 0%, transparent 40%),
            radial-gradient(circle at 85% 15%, rgba(61, 90, 79, 0.015) 0%, transparent 35%),
            radial-gradient(circle at 20% 85%, rgba(139, 154, 122, 0.02) 0%, transparent 45%),
            radial-gradient(circle at 80% 90%, rgba(74, 93, 107, 0.015) 0%, transparent 40%)
          `
        }} 
      />

      {/* Paper Grain Texture - Very Subtle */}
      <div 
        className="absolute inset-0" 
        style={{
          backgroundImage: `
            repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(61, 90, 79, 0.008) 3px, rgba(61, 90, 79, 0.008) 6px),
            repeating-linear-gradient(90deg, transparent, transparent 3px, rgba(61, 90, 79, 0.008) 3px, rgba(61, 90, 79, 0.008) 6px)
          `,
          backgroundSize: '24px 24px'
        }} 
      />
    </div>
  );
}

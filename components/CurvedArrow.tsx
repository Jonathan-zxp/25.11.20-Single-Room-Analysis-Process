
import React from 'react';

interface ArrowProps {
  className?: string;
}

export const ArrowRight: React.FC<{ className?: string; color?: string }> = ({ className, color = "#64748b" }) => {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

export const TripleMergeArrow: React.FC<ArrowProps> = ({ className }) => {
  // Matching the user groups
  const cDementia = "#6366f1"; // Indigo-500
  const cFall = "#f97316";     // Orange-500
  const cSensory = "#10b981";  // Emerald-500
  const cMerge = "#64748b";    // Slate-500 (Neutral)

  // Coordinates
  const startX = 0;
  const endX = 95;
  const startYTop = 40;
  const startYMid = 150;
  const startYBot = 260;
  const endY = 150;

  // Control points for smoother Bezier curves
  const cp1X = 50; // Control point x-coordinate (midway)

  return (
    <svg className={className} viewBox="0 0 100 300" fill="none" preserveAspectRatio="none">
      {/* Top Path (Dementia - Blue) */}
      <path 
        d={`M${startX} ${startYTop} C ${cp1X} ${startYTop}, ${cp1X} ${endY}, ${endX} ${endY}`}
        stroke={cDementia} 
        strokeWidth="1.5" 
        fill="none" 
        strokeLinecap="round"
      />
      
      {/* Middle Path (Fall Risk - Orange) */}
      <path 
        d={`M${startX} ${startYMid} L ${endX} ${endY}`}
        stroke={cFall} 
        strokeWidth="1.5" 
        fill="none" 
        strokeLinecap="round"
      />

      {/* Bottom Path (Sensory - Green) */}
      <path 
        d={`M${startX} ${startYBot} C ${cp1X} ${startYBot}, ${cp1X} ${endY}, ${endX} ${endY}`}
        stroke={cSensory} 
        strokeWidth="1.5" 
        fill="none" 
        strokeLinecap="round"
      />

      {/* Arrowhead at Convergence Point */}
      <path 
        d={`M${endX} ${endY} L ${endX - 6} ${endY - 4} L ${endX - 6} ${endY + 4} Z`} 
        fill={cMerge} 
        stroke={cMerge} 
        strokeWidth="1"
        transform={`translate(2, 0)`} // Slight adjustment to connect perfectly
      />
    </svg>
  );
};

export const SingleToMultiArrow: React.FC<ArrowProps> = ({ className }) => {
   const arrowColor = "#64748b"; // Slate-500

   return (
    <svg className={className} viewBox="0 0 100 24" fill="none" preserveAspectRatio="none">
      {/* Simple thin straight line */}
      <path 
        d="M0 12 L 95 12" 
        stroke={arrowColor} 
        strokeWidth="1.5" 
        strokeLinecap="round" 
      />
      
      {/* Standard Arrowhead */}
      <path 
        d="M92 12 L 86 9 L 86 15 Z" 
        fill={arrowColor} 
        stroke={arrowColor}
        strokeWidth="1" 
        strokeLinejoin="round"
        transform="translate(3, 0)"
      />
    </svg>
   )
}

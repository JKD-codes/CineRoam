import React from 'react';

// Exact Official Meta WhatsApp Vector Icon (Sharp & Authentic)
export function WhatsAppIcon({ size = 20, className = "" }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 32 32" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <circle cx="16" cy="16" r="16" fill="#25D366"/>
      <path 
        d="M23.1 8.87C21.2 6.96 18.7 5.9 16.03 5.9C10.5 5.9 6.01 10.39 6.01 15.92C6.01 17.69 6.47 19.41 7.35 20.93L6 26L11.23 24.63C12.7 25.43 14.34 25.86 16.02 25.86H16.03C21.55 25.86 26.04 21.37 26.05 15.84C26.05 13.17 25 10.67 23.1 8.87ZM16.03 24.16H16.02C14.53 24.16 13.07 23.76 11.79 23L11.49 22.82L8.38 23.64L9.21 20.61L9.01 20.29C8.18 18.97 7.74 17.47 7.74 15.92C7.74 11.35 11.46 7.63 16.04 7.63C18.25 7.63 20.33 8.49 21.9 10.06C23.47 11.63 24.33 13.71 24.33 15.92C24.32 20.49 20.6 24.16 16.03 24.16ZM20.59 18.36C20.34 18.23 19.11 17.63 18.88 17.55C18.65 17.46 18.49 17.42 18.32 17.67C18.15 17.92 17.67 18.48 17.53 18.65C17.38 18.82 17.24 18.84 16.99 18.71C16.74 18.59 15.93 18.32 14.97 17.47C14.22 16.8 13.72 15.98 13.57 15.73C13.42 15.48 13.55 15.35 13.68 15.22C13.79 15.11 13.93 14.93 14.05 14.78C14.17 14.63 14.22 14.53 14.3 14.36C14.38 14.19 14.34 14.04 14.28 13.92C14.22 13.8 13.72 12.57 13.51 12.06C13.31 11.57 13.1 11.63 12.95 11.63C12.8 11.62 12.63 11.62 12.46 11.62C12.29 11.62 12.02 11.69 11.79 11.94C11.56 12.19 10.91 12.8 10.91 14.04C10.91 15.28 11.81 16.48 11.93 16.65C12.05 16.82 13.7 19.36 16.21 20.45C16.81 20.71 17.27 20.86 17.64 20.98C18.24 21.17 18.79 21.14 19.22 21.08C19.7 21.01 20.7 20.48 20.91 19.89C21.12 19.3 21.12 18.79 21.06 18.69C20.99 18.58 20.84 18.49 20.59 18.36Z" 
        fill="white"
      />
    </svg>
  );
}

// Exact Official Instagram Vector Icon
export function InstagramIcon({ size = 18, className = "" }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  );
}

// Bespoke Culinary / Gourmet Food Icon (Cloche + Savory Culinary Styling)
export function FoodIcon({ size = 22, className = "" }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="1.8" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M3 17h18" />
      <path d="M18 17a6 6 0 0 0-12 0" />
      <path d="M12 8a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
      <path d="M8 4c0 1.5.5 2 1.5 2.5" />
      <path d="M16 4c0 1.5-.5 2-1.5 2.5" />
      <path d="M5 20h14" />
    </svg>
  );
}

// Bespoke Social Media Reels Icon (9:16 Vertical Storyboard + Play Action)
export function ReelVideoIcon({ size = 22, className = "" }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="1.8" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <rect x="5" y="2" width="14" height="20" rx="3" />
      <polygon points="10 8 16 12 10 16 10 8" fill="currentColor" stroke="none" />
      <line x1="9" y1="19" x2="15" y2="19" strokeWidth="2" />
    </svg>
  );
}

// Bespoke Product & Skincare Icon (Luxury Cosmetic Bottle / Dropper)
export function ProductCosmeticIcon({ size = 22, className = "" }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="1.8" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M10 2h4" />
      <path d="M12 2v4" />
      <path d="M7 8h10a2 2 0 0 1 2 2v9a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3v-9a2 2 0 0 1 2-2z" />
      <line x1="9" y1="13" x2="15" y2="13" />
      <line x1="9" y1="16" x2="13" y2="16" />
    </svg>
  );
}

// Bespoke Fashion / High-Speed Athletic Aperture Shutter Icon
export function FashionShutterIcon({ size = 22, className = "" }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="1.8" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="14.31" y1="8" x2="20.05" y2="17.94" />
      <line x1="9.69" y1="8" x2="21.17" y2="8" />
      <line x1="7.38" y1="12" x2="13.12" y2="2.06" />
      <line x1="9.69" y1="16" x2="3.95" y2="6.06" />
      <line x1="14.31" y1="16" x2="2.83" y2="16" />
      <line x1="16.62" y1="12" x2="10.88" y2="21.94" />
    </svg>
  );
}

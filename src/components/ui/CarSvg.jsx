import React from 'react';

export default function CarSvg({ className = "" }) {
  return (
    <svg 
      className={className}
      viewBox="0 0 64 32" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinejoin="round" 
      aria-hidden="true"
    >
      <path d="M4 22v-5l6-1 7-8h22l9 8 8 1v5z" />
      <circle cx="17" cy="23" r="4" fill="var(--ph)" />
      <circle cx="48" cy="23" r="4" fill="var(--ph)" />
    </svg>
  );
}

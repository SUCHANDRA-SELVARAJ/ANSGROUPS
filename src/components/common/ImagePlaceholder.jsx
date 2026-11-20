import React from 'react';
import { Image as ImageIcon } from 'lucide-react';

/**
 * ImagePlaceholder Component
 * 
 * Used for gallery items and service showcases before real photography is uploaded.
 * To replace with real images later:
 * Pass `src="/images/your-photo.jpg"` or update `imagePath` in `src/config/businessInfo.js`.
 */
export default function ImagePlaceholder({ 
  title = "Business Showcase", 
  category = "Corporate", 
  aspectRatio = "16/10",
  src = null,
  alt = "",
  className = ""
}) {
  if (src) {
    return (
      <div 
        className={`gallery-img-container ${className}`}
        style={{ aspectRatio }}
      >
        <img 
          src={src} 
          alt={alt || title} 
          style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
          loading="lazy"
        />
      </div>
    );
  }

  return (
    <div 
      className={`placeholder-box ${className}`}
      style={{ aspectRatio }}
      role="img"
      aria-label={`${title} image placeholder`}
    >
      <div className="placeholder-icon">
        <ImageIcon size={22} />
      </div>
      <div className="placeholder-label">{title}</div>
      <div className="placeholder-sublabel">ANS GROUPS &bull; {category}</div>
    </div>
  );
}

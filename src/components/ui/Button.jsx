import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Standardized Button supporting:
 * - Internal routing (`to="/..."`)
 * - External link (`href="https://..."` or `tel:...`)
 * - Button click (`onClick={...}`)
 */
export default function Button({
  children,
  to,
  href,
  variant = 'primary', // 'primary', 'secondary', 'call', 'whatsapp'
  size = 'md',        // 'sm', 'md', 'lg'
  className = '',
  target,
  rel,
  type = 'button',
  disabled = false,
  onClick,
  ...props
}) {
  const baseClasses = `btn btn-${variant} ${size !== 'md' ? `btn-${size}` : ''} ${className}`;

  if (to) {
    return (
      <Link to={to} className={baseClasses} onClick={onClick} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a 
        href={href} 
        className={baseClasses} 
        target={target || (href.startsWith('http') ? '_blank' : undefined)}
        rel={rel || (href.startsWith('http') ? 'noopener noreferrer' : undefined)}
        onClick={onClick}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button 
      type={type} 
      className={baseClasses} 
      disabled={disabled} 
      onClick={onClick} 
      {...props}
    >
      {children}
    </button>
  );
}

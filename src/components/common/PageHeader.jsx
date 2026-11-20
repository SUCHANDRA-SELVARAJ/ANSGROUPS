import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export default function PageHeader({ title, subtitle, breadcrumbCurrent }) {
  return (
    <div className="page-header-banner">
      <div className="container">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <ChevronRight size={14} />
          <span className="breadcrumb-curr">{breadcrumbCurrent || title}</span>
        </nav>
        <h1 style={{ fontSize: 'clamp(2.1rem, 4.5vw, 3.25rem)', marginBottom: '0.75rem' }}>{title}</h1>
        {subtitle && (
          <p style={{ maxWidth: '680px', fontSize: '1.1rem', color: 'var(--text-muted)' }}>
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Info } from 'lucide-react';
import Modal from './Modal';
import Button from './Button';

export default function ServiceCard({ service }) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div className="card">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
          <span className="section-tag" style={{ margin: 0, fontSize: '0.7rem' }}>
            {service.category}
          </span>
          <button 
            type="button"
            onClick={() => setModalOpen(true)}
            style={{ color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.8rem' }}
            title="View full specifications"
          >
            <Info size={16} />
            <span>Details</span>
          </button>
        </div>

        <h3 className="card-title" style={{ fontSize: '1.2rem', marginBottom: '0.65rem' }}>
          {service.title}
        </h3>

        <p className="card-text" style={{ marginBottom: '1.25rem', flexGrow: 1 }}>
          {service.subtitle}
        </p>

        <ul style={{ listStyle: 'none', marginBottom: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {service.features.slice(0, 2).map((feat, idx) => (
            <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--text-muted)' }}>
              <CheckCircle2 size={15} color="var(--accent-gold)" style={{ flexShrink: 0, marginTop: '2px' }} />
              <span>{feat}</span>
            </li>
          ))}
        </ul>

        <div style={{ display: 'flex', gap: '0.75rem', marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid var(--border-subtle)' }}>
          <button 
            type="button" 
            className="btn btn-secondary btn-sm"
            onClick={() => setModalOpen(true)}
            style={{ flex: 1 }}
          >
            View Scope
          </button>
          <Link 
            to={`/enquiry?service=${encodeURIComponent(service.title)}`} 
            className="btn btn-primary btn-sm"
            style={{ flex: 1 }}
          >
            <span>Enquire</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>

      {/* Detail Modal */}
      <Modal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)}
        title={service.title}
      >
        <div>
          <span className="section-tag" style={{ marginBottom: '0.85rem' }}>
            {service.category}
          </span>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-primary)', marginBottom: '1.25rem', lineHeight: '1.6' }}>
            {service.overview}
          </p>

          <h4 style={{ fontSize: '1rem', marginBottom: '0.75rem', color: 'var(--accent-gold)' }}>
            Key Capabilities & Features:
          </h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem', marginBottom: '1.5rem' }}>
            {service.features.map((item, idx) => (
              <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', fontSize: '0.925rem', color: 'var(--text-secondary)' }}>
                <CheckCircle2 size={16} color="var(--accent-gold)" style={{ flexShrink: 0, marginTop: '3px' }} />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div style={{ background: 'var(--bg-surface)', padding: '1rem', borderRadius: 'var(--radius-sm)', marginBottom: '1.5rem', border: '1px solid var(--border-subtle)' }}>
            <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--text-muted)', letterSpacing: '0.05em', marginBottom: '0.25rem' }}>
              Service Deliverables & SLA
            </div>
            <p style={{ fontSize: '0.875rem', margin: 0, color: 'var(--text-secondary)' }}>
              {service.deliverables}
            </p>
          </div>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
            <Button variant="secondary" onClick={() => setModalOpen(false)}>
              Close
            </Button>
            <Button 
              to={`/enquiry?service=${encodeURIComponent(service.title)}`} 
              variant="primary"
              onClick={() => setModalOpen(false)}
            >
              Enquire For This Division
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
}

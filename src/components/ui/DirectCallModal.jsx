import React, { useEffect } from 'react';
import { X, Phone, MessageCircle } from 'lucide-react';
import { BUSINESS_CONFIG } from '../../config/businessInfo';

export default function DirectCallModal({ isOpen, onClose }) {
  const { contacts } = BUSINESS_CONFIG;

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="modal-overlay" 
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
    >
      <div className="modal-dialog" style={{ maxWidth: '440px' }}>
        <button className="modal-close-btn" type="button" onClick={onClose} aria-label="Close dialog">
          <X size={18} />
        </button>

        <span className="section-badge" style={{ marginBottom: '10px' }}>
          Official Hotlines
        </span>
        <h3 style={{ fontSize: '1.4rem', marginBottom: '8px' }}>Direct Booking Assistance</h3>
        <p style={{ fontSize: '0.9rem', marginBottom: '20px' }}>
          Connect with our fleet coordinators for instant vehicle reservation.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <a 
            href={contacts.primary.tel}
            className="btn btn-secondary btn-full"
            style={{ justifyContent: 'space-between', padding: '14px 18px', background: 'var(--bg-surface)' }}
          >
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--text-dim)' }}>Primary Desk</div>
              <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#fff' }}>{contacts.primary.formatted}</div>
            </div>
            <Phone size={18} color="#22c55e" />
          </a>

          <a 
            href={contacts.secondary.tel}
            className="btn btn-secondary btn-full"
            style={{ justifyContent: 'space-between', padding: '14px 18px', background: 'var(--bg-surface)' }}
          >
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--text-dim)' }}>Secondary Desk</div>
              <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#fff' }}>{contacts.secondary.formatted}</div>
            </div>
            <Phone size={18} color="#22c55e" />
          </a>

          <a 
            href={BUSINESS_CONFIG.getWhatsAppLink()} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-whatsapp btn-full"
            style={{ marginTop: '8px' }}
          >
            <MessageCircle size={18} />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}

import React, { useEffect } from 'react';
import { X, Phone, MessageCircle } from 'lucide-react';
import { BUSINESS_CONFIG } from '../../config/businessInfo';

export default function ContactModal({ isOpen, onClose }) {
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
      className="ov"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
    >
      <div className="sheet" style={{ maxWidth: '420px' }}>
        <button 
          className="x" 
          type="button" 
          onClick={onClose}
          aria-label="Close contact dialog"
        >
          <X size={18} />
        </button>

        <h2 style={{ marginBottom: '6px' }}>Contact Us</h2>
        <p style={{ color: 'var(--mut)', marginBottom: '18px' }}>
          Call Us And We Will Help You Pick The Right Car.
        </p>

        <div style={{ display: 'grid', gap: '10px' }}>
          <a className="btn call-btn" href={contacts.primary.tel}>
            <span className="call-info">
              <i>Call:</i>
              <b>{contacts.primary.formatted}</b>
            </span>
            <Phone size={18} color="#22c55e" />
          </a>

          <a className="btn call-btn" href={contacts.secondary.tel}>
            <span className="call-info">
              <i>Call:</i>
              <b>{contacts.secondary.formatted}</b>
            </span>
            <Phone size={18} color="#22c55e" />
          </a>

          <a 
            className="btn wa full" 
            href={BUSINESS_CONFIG.getWhatsAppLink()} 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ marginTop: '6px' }}
          >
            <MessageCircle size={18} />
            <span>Chat On WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import { MessageCircle } from 'lucide-react';
import { BUSINESS_CONFIG } from '../../config/businessInfo';

export default function FloatingContact() {
  return (
    <aside 
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        zIndex: 99
      }}
      aria-label="Instant WhatsApp Assistance"
    >
      <a 
        href={BUSINESS_CONFIG.getWhatsAppLink()} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="btn wa"
        style={{
          borderRadius: '99px',
          padding: '10px 18px',
          boxShadow: '0 8px 24px rgba(0, 0, 0, 0.6)'
        }}
        aria-label="WhatsApp quick connect"
      >
        <MessageCircle size={18} />
        <span style={{ fontSize: '13.5px' }}>WhatsApp</span>
      </a>
    </aside>
  );
}

import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Phone, MessageCircle } from 'lucide-react';
import { BUSINESS_CONFIG } from '../../config/businessInfo';
import ContactModal from '../ui/ContactModal';

export default function MobileActionBar() {
  const [contactOpen, setContactOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';
  const { contacts } = BUSINESS_CONFIG;

  // Keep Home page clean and uncluttered for single-screen hero experience
  if (isHome) return null;

  return (
    <>
      <div className="mobile-action-bar" aria-label="Quick Contact Actions">
        <button 
          type="button" 
          className="mobile-action-btn call"
          onClick={() => setContactOpen(true)}
          aria-label="Call ANS GROUPS"
        >
          <Phone size={17} />
          <span>Call Us</span>
        </button>

        <a 
          href={BUSINESS_CONFIG.getWhatsAppLink()} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="mobile-action-btn wa"
          aria-label="WhatsApp ANS GROUPS"
        >
          <MessageCircle size={18} />
          <span>WhatsApp</span>
        </a>
      </div>

      <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />
    </>
  );
}

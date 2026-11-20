import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Phone, MessageCircle, Menu, X, Car } from 'lucide-react';
import { BUSINESS_CONFIG } from '../../config/businessInfo';
import ContactModal from '../ui/ContactModal';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const { contacts } = BUSINESS_CONFIG;

  const closeDrawer = () => setMobileOpen(false);

  return (
    <>
      <header className="nav-bar">
        <div className="nav-inner">
          {/* Brand Logo */}
          <Link to="/" className="nav-brand" onClick={closeDrawer}>
            <div className="nav-brand-badge">
              <img src="/images/logo.png" alt="ANS GROUP CAR RENTAL PVT LMTD" className="nav-brand-img" />
            </div>
            <span className="nav-brand-text">
              <span className="nav-brand-full">ANS GROUP CAR RENTAL PVT LMTD</span>
              <span className="nav-brand-short">ANS GROUPS</span>
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <nav aria-label="Main Navigation">
            <ul className="nav-links">
              <li>
                <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''} end>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/fleet" className={({ isActive }) => isActive ? 'active' : ''}>
                  Our Fleet
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink to="/services" className={({ isActive }) => isActive ? 'active' : ''}>
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink to="/enquiry" className={({ isActive }) => isActive ? 'active' : ''}>
                  Book a Car
                </NavLink>
              </li>
            </ul>
          </nav>

          {/* Actions */}
          <div className="nav-btns">
            <button 
              type="button" 
              className="btn ghost sm nav-desktop"
              onClick={() => setContactOpen(true)}
            >
              <Phone size={13} />
              <span>Call Now</span>
            </button>

            <a 
              href={BUSINESS_CONFIG.getWhatsAppLink()} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn wa sm"
            >
              <MessageCircle size={14} />
              <span>WhatsApp</span>
            </a>

            <button 
              type="button" 
              className="nav-mobile-toggle" 
              onClick={() => setMobileOpen(true)}
              aria-label="Toggle navigation"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="mobile-drawer" role="dialog" aria-modal="true">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Link to="/" className="nav-brand" onClick={closeDrawer}>
              <div className="nav-brand-badge">
                <img src="/images/logo.png" alt="ANS GROUP CAR RENTAL PVT LMTD" className="nav-brand-img" />
              </div>
              <span className="nav-brand-text">ANS GROUPS</span>
            </Link>
            <button 
              type="button" 
              className="x" 
              onClick={closeDrawer} 
              aria-label="Close navigation"
              style={{ margin: 0 }}
            >
              <X size={18} />
            </button>
          </div>

          <ul className="mobile-drawer-links">
            <li>
              <NavLink to="/" onClick={closeDrawer} end>Home</NavLink>
            </li>
            <li>
              <NavLink to="/fleet" onClick={closeDrawer}>Our Fleet</NavLink>
            </li>
            <li>
              <NavLink to="/about" onClick={closeDrawer}>About Us</NavLink>
            </li>
            <li>
              <NavLink to="/services" onClick={closeDrawer}>Services</NavLink>
            </li>
            <li>
              <NavLink to="/contact" onClick={closeDrawer}>Contact</NavLink>
            </li>
            <li>
              <NavLink to="/enquiry" onClick={closeDrawer}>Book a Car</NavLink>
            </li>
          </ul>

          <div style={{ marginTop: 'auto', display: 'grid', gap: '10px' }}>
            <a className="btn call" href={contacts.primary.tel}>
              <span className="tx">
                <i>Call:</i>
                <b>{contacts.primary.formatted}</b>
              </span>
            </a>
            <a className="btn call" href={contacts.secondary.tel}>
              <span className="tx">
                <i>Call:</i>
                <b>{contacts.secondary.formatted}</b>
              </span>
            </a>
          </div>
        </div>
      )}

      {/* Contact Modal */}
      <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />
    </>
  );
}

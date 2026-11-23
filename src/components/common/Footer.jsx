import React from 'react';
import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';
import { BUSINESS_CONFIG } from '../../config/businessInfo';

export default function Footer() {
  const { contacts, rentalRules } = BUSINESS_CONFIG;

  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div className="site-footer-top">
          <Link to="/" className="nav-brand">
            <div className="nav-brand-badge">
              <img src="./images/logo.png" alt="ANS GROUP CAR RENTAL PVT LMTD" className="nav-brand-img" />
            </div>
            <span className="nav-brand-text">ANS GROUP CAR RENTAL PVT LMTD</span>
          </Link>



          <div className="site-footer-phones">
            <a href={contacts.primary.tel}>
              <Phone size={13} color="#22c55e" />
              <span>{contacts.primary.formatted}</span>
            </a>
            <a href={contacts.secondary.tel}>
              <Phone size={13} color="#22c55e" />
              <span>{contacts.secondary.formatted}</span>
            </a>
          </div>
        </div>

        <div className="site-footer-bottom">
          <div>
            &copy; {new Date().getFullYear()} ANS GROUP CAR RENTAL PVT LMTD. All rights reserved.
          </div>
          <div>
            {rentalRules.minBooking} &bull; {rentalRules.documents} &bull; 200 km/day included
          </div>
        </div>
      </div>
    </footer>
  );
}

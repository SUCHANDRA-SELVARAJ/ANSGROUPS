import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Key, Clock, FileCheck, ArrowRight } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/businessInfo';
import SeoMeta from '../components/common/SeoMeta';
import ContactModal from '../components/ui/ContactModal';

export default function About() {
  const { contacts, rentalRules } = BUSINESS_CONFIG;
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <>
      <SeoMeta 
        title="About Us"
        description="Learn about ANS GROUPS Car Rental. Committed to well-maintained self-drive cars, transparent daily rates, and 24/7 customer service."
      />

      <main className="page">
        <h2>About ANS GROUP CAR RENTAL PVT LMTD</h2>
        <p>
          At ANS GROUP CAR RENTAL PVT LMTD, we simplify the car rental experience. Whether you need a fuel-efficient hatchback for city meetings, a comfortable sedan for highway cruising, or an expansive 7-seater SUV for family travel, our fleet is meticulously prepped and ready for the road.
        </p>

        {/* Core Pillars */}
        <div className="grid" style={{ marginTop: '24px' }}>
          <div className="card" style={{ padding: '24px' }}>
            <Key size={26} color="#ffffff" style={{ marginBottom: '14px' }} />
            <h3 style={{ fontSize: '22px', marginBottom: '8px' }}>Self-Drive Freedom</h3>
            <p style={{ color: 'var(--mut)', fontSize: '14px', margin: 0 }}>
              Enjoy complete privacy and flexibility on personal road trips, weekend getaways, or corporate commitments.
            </p>
          </div>

          <div className="card" style={{ padding: '24px' }}>
            <ShieldCheck size={26} color="#ffffff" style={{ marginBottom: '14px' }} />
            <h3 style={{ fontSize: '22px', marginBottom: '8px' }}>Valid Papers & Insured</h3>
            <p style={{ color: 'var(--mut)', fontSize: '14px', margin: 0 }}>
              Every vehicle includes valid registration, full commercial insurance, and routine mechanical safety audits.
            </p>
          </div>

          <div className="card" style={{ padding: '24px' }}>
            <FileCheck size={26} color="#ffffff" style={{ marginBottom: '14px' }} />
            <h3 style={{ fontSize: '22px', marginBottom: '8px' }}>Zero Hidden Surcharges</h3>
            <p style={{ color: 'var(--mut)', fontSize: '14px', margin: 0 }}>
              Transparent daily rates with 200 km/day included. Clear per-km pricing for any extra distance traveled.
            </p>
          </div>
        </div>

        {/* Rental Rules & Policy Box */}
        <div 
          className="card" 
          style={{ 
            marginTop: '28px', 
            padding: '26px 22px',
            background: 'linear-gradient(180deg, #131c31, #0c1220)',
            borderColor: 'rgba(96, 165, 250, 0.28)'
          }}
        >
          <h3 style={{ fontSize: '24px', marginBottom: '12px' }}>Rental Policy & Requirements</h3>
          <div style={{ display: 'grid', gap: '14px', marginTop: '16px' }}>
            <div style={{ borderLeft: '3px solid #60a5fa', paddingLeft: '14px' }}>
              <b style={{ display: 'block', fontSize: '15px' }}>Compulsory Verification Documents</b>
              <span style={{ color: 'var(--mut)', fontSize: '14px' }}>{rentalRules.documents}</span>
            </div>
            <div style={{ borderLeft: '3px solid #60a5fa', paddingLeft: '14px' }}>
              <b style={{ display: 'block', fontSize: '15px' }}>Minimum Rental Period</b>
              <span style={{ color: 'var(--mut)', fontSize: '14px' }}>{rentalRules.minBooking}</span>
            </div>
            <div style={{ borderLeft: '3px solid #60a5fa', paddingLeft: '14px' }}>
              <b style={{ display: 'block', fontSize: '15px' }}>Distance Allowance & Fuel</b>
              <span style={{ color: 'var(--mut)', fontSize: '14px' }}>{rentalRules.kmLimit}. {rentalRules.fuelPolicy}.</span>
            </div>
          </div>
        </div>

        {/* Direct Booking Call Actions */}
        <div style={{ maxWidth: '440px', margin: '30px auto 0', display: 'grid', gap: '10px' }}>
          <a className="btn call" href={contacts.primary.tel}>
            <span className="tx">
              <i>Call Reservation Desk:</i>
              <b>{contacts.primary.formatted}</b>
            </span>
          </a>
          <a className="btn call" href={contacts.secondary.tel}>
            <span className="tx">
              <i>Alternative Booking Line:</i>
              <b>{contacts.secondary.formatted}</b>
            </span>
          </a>
          <Link to="/fleet" className="btn full" style={{ marginTop: '10px' }}>
            Explore Our Fleet And Prices
          </Link>
        </div>

        {/* Footnote */}
        <div className="foot">
          ANS GROUP CAR RENTAL PVT LMTD &bull; Self-Drive Car Rental
        </div>
      </main>

      <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />
    </>
  );
}

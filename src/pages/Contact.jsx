import React, { useState } from 'react';
import { MessageCircle, Phone, Clock, Key, ShieldCheck, MapPin } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/businessInfo';
import SeoMeta from '../components/common/SeoMeta';

export default function Contact() {
  const { contacts, location, rentalRules } = BUSINESS_CONFIG;

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!name.trim()) {
      setError('Enter Your Name.');
      return;
    }
    const clean = phone.replace(/\D/g, '');
    if (!clean || clean.length < 10) {
      setError('Enter A Valid 10-Digit Mobile Number.');
      return;
    }

    const text = `Hello ANS GROUP CAR RENTAL PVT LMTD, I would like to inquire about car rental.\n\n` +
      `Name: ${name}\n` +
      `Phone: ${phone}\n` +
      `Details: ${message || 'General Car Rental Inquiry'}`;

    const url = `https://wa.me/91${contacts.primary.raw}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <>
      <SeoMeta 
        title="Contact Us"
        description="Contact ANS GROUP CAR RENTAL PVT LMTD directly at 81110 15298 or 99440 52203. Direct WhatsApp booking assistance."
      />

      <main className="page">
        <h2>Contact Us</h2>
        <p>
          Connect directly with our fleet coordinators to confirm car availability or request custom rental duration.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', marginTop: '24px' }}>
          {/* Direct Phone Numbers Card */}
          <div className="card" style={{ padding: '24px' }}>
            <h3 style={{ fontSize: '24px', marginBottom: '8px' }}>Call Us Directly</h3>
            <p style={{ color: 'var(--mut)', fontSize: '14px', marginBottom: '20px' }}>
              Speak with our team directly for instant booking and fleet availability.
            </p>

            <div style={{ display: 'grid', gap: '10px' }}>
              <a className="btn call" href={contacts.primary.tel}>
                <span className="tx">
                  <i>Primary Hotline:</i>
                  <b>{contacts.primary.formatted}</b>
                </span>
              </a>

              <a className="btn call" href={contacts.secondary.tel}>
                <span className="tx">
                  <i>Secondary Line:</i>
                  <b>{contacts.secondary.formatted}</b>
                </span>
              </a>

              <a 
                className="btn wa full" 
                href={BUSINESS_CONFIG.getWhatsAppLink()} 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ marginTop: '8px' }}
              >
                <MessageCircle size={18} />
                <span>Chat On WhatsApp</span>
              </a>
            </div>

            <div style={{ borderTop: '1px solid var(--bd)', marginTop: '22px', paddingTop: '16px', fontSize: '13px', color: 'var(--mut)', display: 'grid', gap: '8px' }}>
              <div>{rentalRules.minBooking}</div>
              <div>{rentalRules.documents}</div>
              <div style={{ fontStyle: 'italic' }}>Location: {location.address}</div>
            </div>
          </div>

          {/* Inquiry Form */}
          <div className="card" style={{ padding: '24px' }}>
            <h3 style={{ fontSize: '24px', marginBottom: '8px' }}>Send An Inquiry</h3>
            <p style={{ color: 'var(--mut)', fontSize: '14px', marginBottom: '16px' }}>
              Submit your request and we will connect with you immediately via WhatsApp.
            </p>

            <form onSubmit={handleSendMessage}>
              <label htmlFor="cName">Your Name</label>
              <input 
                id="cName"
                type="text" 
                placeholder="Enter Your Name"
                value={name}
                onChange={(e) => { setName(e.target.value); setError(''); }}
                autoComplete="name"
              />

              <label htmlFor="cPhone">Mobile Number</label>
              <input 
                id="cPhone"
                type="tel" 
                placeholder="10-Digit Mobile Number"
                value={phone}
                onChange={(e) => { setPhone(e.target.value); setError(''); }}
              />

              <label htmlFor="cMsg">Car or Travel Details</label>
              <input 
                id="cMsg"
                type="text" 
                placeholder="e.g. Fortuner / 2 days / Outstation"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />

              {error && <div className="err">{error}</div>}

              <button type="submit" className="btn wa full" style={{ marginTop: '18px' }}>
                <MessageCircle size={18} />
                <span>Send On WhatsApp</span>
              </button>
            </form>
          </div>
        </div>

        {/* Footnote */}
        <div className="foot">
          {rentalRules.minBooking} {rentalRules.documents}
        </div>
      </main>
    </>
  );
}

import React, { useState, useEffect } from 'react';
import { X, Phone, MessageCircle, ArrowRight } from 'lucide-react';
import { BUSINESS_CONFIG } from '../../config/businessInfo';
import { formatINR, calculateRentalDays, getTodayDateString } from '../../utils/helpers';

export default function BookingModal({ isOpen, onClose, initialCar = null, cars = [] }) {
  const { contacts } = BUSINESS_CONFIG;

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [selectedCarIndex, setSelectedCarIndex] = useState(0);
  const [fromDate, setFromDate] = useState(getTodayDateString());
  const [toDate, setToDate] = useState(getTodayDateString());
  const [error, setError] = useState('');

  useEffect(() => {
    if (initialCar && cars.length > 0) {
      const idx = cars.findIndex(c => c.name === initialCar.name);
      if (idx !== -1) setSelectedCarIndex(idx);
    }
  }, [initialCar, cars]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setError('');
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const currentCar = cars[selectedCarIndex] || cars[0];
  const days = calculateRentalDays(fromDate, toDate);
  const totalRent = days * (currentCar?.rent || 0);

  const handleSendBooking = (e) => {
    e.preventDefault();
    if (!name.trim()) {
      setError('Please enter your full name.');
      return;
    }
    const cleanPhone = phone.replace(/\D/g, '');
    if (!cleanPhone || cleanPhone.length < 10) {
      setError('Please provide a valid 10-digit mobile number.');
      return;
    }
    if (!email.trim() || !email.includes('@')) {
      setError('Please provide a valid email address.');
      return;
    }
    if (!fromDate || !toDate || days <= 0) {
      setError('Return date must be on or after pickup date.');
      return;
    }

    const msg = `*ANS GROUPS - Car Availability Request*\n\n` +
      `*Name:* ${name}\n` +
      `*Phone:* ${phone}\n` +
      `*Email:* ${email}\n` +
      `*Car:* ${currentCar.name}\n` +
      `*Dates:* ${fromDate} to ${toDate} (${days} Day${days > 1 ? 's' : ''})\n` +
      `*Estimated Rent:* ${formatINR(totalRent)}\n\n` +
      `*I confirm I have valid Indian Driving Licence & Aadhaar Card.*`;

    const url = `https://wa.me/91${contacts.primary.raw}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div 
      className="modal-overlay" 
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
    >
      <div className="modal-dialog">
        <button className="modal-close-btn" type="button" onClick={onClose} aria-label="Close dialog">
          <X size={18} />
        </button>

        <span className="section-badge" style={{ marginBottom: '10px' }}>
          Fast Reservation
        </span>
        <h3 style={{ fontSize: '1.5rem', marginBottom: '4px' }}>Check Car Availability</h3>
        <p style={{ fontSize: '0.88rem', marginBottom: '18px' }}>
          Select your dates for instant estimated rent calculation.
        </p>

        <form onSubmit={handleSendBooking}>
          <div className="form-group">
            <label className="form-label" htmlFor="bName">Your Full Name</label>
            <input 
              id="bName"
              type="text" 
              className="form-control" 
              placeholder="Full name as on Driving Licence" 
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="bPhone">Mobile Number</label>
            <input 
              id="bPhone"
              type="tel" 
              className="form-control" 
              placeholder="10-digit mobile number" 
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="bEmail">Email ID</label>
            <input 
              id="bEmail"
              type="email" 
              className="form-control" 
              placeholder="name@gmail.com" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="bCar">Select Vehicle</label>
            <select 
              id="bCar"
              className="form-control"
              value={selectedCarIndex}
              onChange={(e) => setSelectedCarIndex(Number(e.target.value))}
            >
              {cars.map((c, i) => (
                <option key={c.id || i} value={i}>
                  {c.name} &mdash; {formatINR(c.rent)}/day ({c.categories?.[0]})
                </option>
              ))}
            </select>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            <div className="form-group">
              <label className="form-label" htmlFor="bFrom">Pickup Date</label>
              <input 
                id="bFrom"
                type="date" 
                className="form-control"
                value={fromDate}
                min={getTodayDateString()}
                onChange={(e) => {
                  const val = e.target.value;
                  setFromDate(val);
                  if (toDate < val) setToDate(val);
                }}
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="bTo">Return Date</label>
              <input 
                id="bTo"
                type="date" 
                className="form-control"
                value={toDate}
                min={fromDate || getTodayDateString()}
                onChange={(e) => setToDate(e.target.value)}
              />
            </div>
          </div>

          {/* Real-time Calculation Summary */}
          <div 
            style={{
              background: 'var(--bg-surface)',
              padding: '12px 16px',
              borderRadius: 'var(--radius-sm)',
              border: '1px solid var(--accent-gold-border)',
              margin: '14px 0 16px 0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            <div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>Estimated Rent ({days} day{days > 1 ? 's' : ''})</div>
              <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--accent-gold)' }}>
                {days > 0 ? formatINR(totalRent) : '₹ 0'}
              </div>
            </div>
            <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', textAlign: 'right' }}>
              Includes {days * 200} km
            </div>
          </div>

          {error && (
            <div style={{ color: '#ef4444', fontSize: '0.82rem', marginBottom: '12px' }}>
              {error}
            </div>
          )}

          <button type="submit" className="btn btn-whatsapp btn-full" style={{ padding: '12px' }}>
            <MessageCircle size={18} />
            <span>Send Details on WhatsApp</span>
          </button>

          <div style={{ marginTop: '16px', textAlign: 'center', borderTop: '1px solid var(--border-subtle)', paddingTop: '14px', fontSize: '0.82rem', color: 'var(--text-dim)' }}>
            Prefer to call? Connect directly: <br />
            <a href={contacts.primary.tel} style={{ color: '#fff', fontWeight: 600, marginRight: '10px' }}>
              {contacts.primary.formatted}
            </a>
            <a href={contacts.secondary.tel} style={{ color: '#fff', fontWeight: 600 }}>
              {contacts.secondary.formatted}
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

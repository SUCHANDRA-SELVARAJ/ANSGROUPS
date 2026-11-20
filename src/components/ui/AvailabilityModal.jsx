import React, { useState, useEffect } from 'react';
import { X, Phone } from 'lucide-react';
import { BUSINESS_CONFIG } from '../../config/businessInfo';
import { formatINR, calculateRentalDays, getTodayDateString } from '../../utils/helpers';

export default function AvailabilityModal({ 
  isOpen, 
  onClose, 
  initialCar = null, 
  cars = [] 
}) {
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

  const handleSendOnWhatsApp = () => {
    if (!name.trim()) {
      setError('Please Enter Your Name.');
      return;
    }
    const cleanPhone = phone.replace(/\D/g, '');
    if (!cleanPhone || cleanPhone.length < 10) {
      setError('Please Enter A Valid 10-Digit Mobile Number.');
      return;
    }
    if (!email.trim() || !email.includes('@')) {
      setError('Please Enter A Valid Email Address.');
      return;
    }
    if (!fromDate || !toDate) {
      setError('Select Both Dates.');
      return;
    }
    if (days <= 0) {
      setError('To Date Must Be On Or After From Date.');
      return;
    }

    const msg = `Hello ANS GROUPS, I want to check car availability.\n\n` +
      `Name: ${name.trim()}\n` +
      `Mobile: ${phone.trim()}\n` +
      `Email: ${email.trim()}\n` +
      `Car: ${currentCar.name}\n` +
      `From: ${fromDate}\n` +
      `To: ${toDate}\n` +
      `Days: ${days}\n` +
      `Estimated rent: ${formatINR(totalRent)}`;

    const url = `https://wa.me/91${contacts.primary.raw}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div 
      className="ov"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
    >
      <div className="sheet">
        <button 
          className="x" 
          type="button" 
          onClick={onClose}
          aria-label="Close availability sheet"
        >
          <X size={18} />
        </button>

        <h2>Check Availability</h2>

        <label htmlFor="nm">Your Name</label>
        <input 
          id="nm" 
          type="text" 
          placeholder="Full Name" 
          value={name}
          onChange={(e) => setName(e.target.value)}
          autoComplete="name"
        />

        <div className="two stack-on-mobile" style={{ marginTop: '4px' }}>
          <div>
            <label htmlFor="m-phone">Mobile Number</label>
            <input 
              id="m-phone" 
              type="tel" 
              placeholder="10-digit number" 
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              autoComplete="tel"
            />
          </div>
          <div>
            <label htmlFor="m-email">Email ID</label>
            <input 
              id="m-email" 
              type="email" 
              placeholder="name@gmail.com" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
            />
          </div>
        </div>

        <label htmlFor="car">Car</label>
        <select 
          id="car" 
          value={selectedCarIndex}
          onChange={(e) => setSelectedCarIndex(Number(e.target.value))}
        >
          {cars.map((c, i) => (
            <option key={c.id || i} value={i}>
              {c.name} ({formatINR(c.rent)}/day)
            </option>
          ))}
        </select>

        <div className="two" style={{ marginTop: '4px' }}>
          <div>
            <label htmlFor="d1">From Date</label>
            <input 
              id="d1" 
              type="date" 
              value={fromDate}
              min={getTodayDateString()}
              onChange={(e) => {
                const val = e.target.value;
                setFromDate(val);
                if (toDate < val) setToDate(val);
              }}
            />
          </div>
          <div>
            <label htmlFor="d2">To Date</label>
            <input 
              id="d2" 
              type="date" 
              value={toDate}
              min={fromDate || getTodayDateString()}
              onChange={(e) => setToDate(e.target.value)}
            />
          </div>
        </div>

        <p className="sum">
          {days > 0 && currentCar ? (
            `${days} day(s) × ${formatINR(currentCar.rent)} = ${formatINR(totalRent)}`
          ) : ""}
        </p>

        <p className="err" role="alert">{error}</p>

        <button 
          className="btn wa full" 
          type="button" 
          onClick={handleSendOnWhatsApp}
        >
          Send Details On WhatsApp
        </button>

        <div className="call-divider">
          Prefer To Talk? Call Us Directly.
          <div className="two">
            <a className="btn ghost sm" href={contacts.primary.tel}>
              Call {contacts.primary.formatted}
            </a>
            <a className="btn ghost sm" href={contacts.secondary.tel}>
              Call {contacts.secondary.formatted}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

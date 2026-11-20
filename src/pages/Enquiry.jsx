import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/businessInfo';
import { formatINR, calculateRentalDays, getTodayDateString } from '../utils/helpers';
import SeoMeta from '../components/common/SeoMeta';

export default function Enquiry() {
  const [searchParams] = useSearchParams();
  const carQuery = searchParams.get('car') || '';

  const { cars, contacts, rentalRules } = BUSINESS_CONFIG;

  const [name, setName] = useState('');
  const [selectedCarIndex, setSelectedCarIndex] = useState(0);
  const [fromDate, setFromDate] = useState(getTodayDateString());
  const [toDate, setToDate] = useState(getTodayDateString());
  const [error, setError] = useState('');

  useEffect(() => {
    if (carQuery && cars.length > 0) {
      const idx = cars.findIndex(c => c.name.toLowerCase().includes(carQuery.toLowerCase()));
      if (idx !== -1) setSelectedCarIndex(idx);
    }
  }, [carQuery, cars]);

  const currentCar = cars[selectedCarIndex] || cars[0];
  const days = calculateRentalDays(fromDate, toDate);
  const totalRent = days * (currentCar?.rent || 0);

  const handleSendOnWhatsApp = (e) => {
    e.preventDefault();
    if (!name.trim()) {
      setError('Enter Your Name.');
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

    const msg = `Hello ANS GROUP CAR RENTAL PVT LMTD, I want to check car availability.\n\n` +
      `Name: ${name}\n` +
      `Car: ${currentCar.name}\n` +
      `From: ${fromDate}\n` +
      `To: ${toDate}\n` +
      `Days: ${days}\n` +
      `Estimated rent: ${formatINR(totalRent)} (fuel not included)`;

    const url = `https://wa.me/91${contacts.primary.raw}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
  };

  return (
    <>
      <SeoMeta 
        title="Check Availability & Estimate Rent"
        description="Calculate estimated rental rent and check car availability with ANS GROUPS. Fast WhatsApp booking confirmation."
      />

      <main className="page">
        <h2>Book a Car</h2>
        <p>
          Check car availability and estimate your rental cost instantly. Every rate includes 200 km/day.
        </p>

        <div 
          className="card" 
          style={{ 
            maxWidth: '480px', 
            margin: '20px auto 0', 
            padding: '24px 20px',
            background: 'var(--card)'
          }}
        >
          <form onSubmit={handleSendOnWhatsApp}>
            <label htmlFor="eqName">Your Name</label>
            <input 
              id="eqName"
              type="text" 
              placeholder="Enter Your Name"
              value={name}
              onChange={(e) => { setName(e.target.value); setError(''); }}
              autoComplete="name"
            />

            <label htmlFor="eqCar">Select Car</label>
            <select 
              id="eqCar"
              value={selectedCarIndex}
              onChange={(e) => setSelectedCarIndex(Number(e.target.value))}
            >
              {cars.map((c, i) => (
                <option key={c.id || i} value={i}>
                  {c.name} — {formatINR(c.rent)}/day
                </option>
              ))}
            </select>

            <div className="two" style={{ marginTop: '4px' }}>
              <div>
                <label htmlFor="eqFrom">From Date</label>
                <input 
                  id="eqFrom"
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
                <label htmlFor="eqTo">To Date</label>
                <input 
                  id="eqTo"
                  type="date" 
                  value={toDate}
                  min={fromDate || getTodayDateString()}
                  onChange={(e) => setToDate(e.target.value)}
                />
              </div>
            </div>

            <div className="sum">
              {days > 0 ? (
                <>
                  {days} Day{days > 1 ? 's' : ''} × {formatINR(currentCar.rent)} = {formatINR(totalRent)}
                  <span style={{ display: 'block', fontSize: '13px', color: 'var(--mut)', fontWeight: 'normal', marginTop: '2px' }}>
                    ({days * 200} km included, fuel not included)
                  </span>
                </>
              ) : (
                'Select valid travel dates'
              )}
            </div>

            {error && <div className="err">{error}</div>}

            <button type="submit" className="btn full" style={{ marginTop: '16px' }}>
              Check Availability
            </button>
          </form>

          {/* Quick Call Divider */}
          <div className="call-divider">
            <span style={{ fontSize: '13px' }}>Or Call Us Directly</span>
            <div className="two" style={{ marginTop: '10px' }}>
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
        </div>

        {/* Footnote */}
        <div className="foot">
          {rentalRules.minBooking} {rentalRules.documents}
        </div>
      </main>
    </>
  );
}

import React, { useEffect } from 'react';
import { X, Check, ArrowRight, MessageCircle } from 'lucide-react';
import CarSvg from './CarSvg';
import { formatINR, buildWhatsAppUrl } from '../../utils/helpers';
import { BUSINESS_CONFIG } from '../../config/businessInfo';

export default function VehicleModal({ car, isOpen, onClose, onBookNow }) {
  const { contacts, rentalRules } = BUSINESS_CONFIG;

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

  if (!isOpen || !car) return null;

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
          {car.categories?.[0] || 'Rental Vehicle'}
        </span>
        <h3 style={{ fontSize: '1.6rem', marginBottom: '4px' }}>{car.name}</h3>
        <p style={{ fontSize: '0.88rem', marginBottom: '18px' }}>
          {car.seats} &bull; {car.transmission} &bull; {car.fuel}
        </p>

        {/* Media */}
        <div 
          style={{
            width: '100%',
            height: '160px',
            background: 'linear-gradient(180deg, #182236 0%, #0d1424 100%)',
            borderRadius: 'var(--radius-md)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '18px',
            border: '1px solid var(--border-subtle)'
          }}
        >
          {car.image ? (
            <img src={car.image} alt={car.name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
          ) : (
            <CarSvg style={{ width: '55%', color: 'var(--text-dim)' }} />
          )}
        </div>

        {/* Specs Table */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '12px',
            background: 'var(--bg-surface)',
            padding: '16px',
            borderRadius: 'var(--radius-md)',
            marginBottom: '20px',
            border: '1px solid var(--border-subtle)'
          }}
        >
          <div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase' }}>Daily Rate</div>
            <div style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--accent-gold)' }}>{formatINR(car.rent)}</div>
          </div>
          <div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase' }}>Distance Allowance</div>
            <div style={{ fontSize: '1rem', fontWeight: 700, color: '#fff' }}>200 km / Day</div>
          </div>
          <div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase' }}>Extra Distance</div>
            <div style={{ fontSize: '0.95rem', fontWeight: 600 }}>₹{car.extraKm} / km</div>
          </div>
          <div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase' }}>Fuel Terms</div>
            <div style={{ fontSize: '0.95rem', fontWeight: 600 }}>Not Included (Return same)</div>
          </div>
        </div>

        {/* Requirements */}
        <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '22px', lineHeight: '1.5' }}>
          &bull; <strong>Minimum Booking:</strong> 24 Hours <br />
          &bull; <strong>Documents:</strong> Valid Indian Driving Licence & Aadhaar Card mandatory
        </div>

        {/* Actions */}
        <div style={{ display: 'flex', gap: '10px' }}>
          <button 
            type="button" 
            className="btn btn-secondary" 
            style={{ flex: 1 }}
            onClick={onClose}
          >
            Close
          </button>
          <button 
            type="button" 
            className="btn btn-primary" 
            style={{ flex: 1.5 }}
            onClick={() => {
              onClose();
              onBookNow(car);
            }}
          >
            <span>Check Availability</span>
            <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}

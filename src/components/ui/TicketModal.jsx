import React, { useEffect } from 'react';
import { X, Car as CarIcon } from 'lucide-react';
import CarSvg from './CarSvg';
import { formatINR } from '../../utils/helpers';

export default function TicketModal({ car, isOpen, onClose, onCheckAvailability }) {
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
      className="ov" 
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
    >
      <div className="sheet tk">
        <button 
          className="x" 
          type="button" 
          onClick={onClose} 
          aria-label="Close car details"
        >
          <X size={18} />
        </button>

        <div className="tw">
          <div className="ticket">
            {/* Top Section */}
            <div className="t-main">
              <div className="t-content">
                <div className="t-img">
                  {car.image ? (
                    <img 
                      src={car.image} 
                      alt={car.name} 
                      style={{ width: '100%', height: '100%', objectFit: 'contain' }} 
                    />
                  ) : (
                    <CarSvg style={{ width: '50%', color: 'var(--mut)' }} />
                  )}
                </div>

                <div className="t-head">
                  <span className="t-brand">
                    <span style={{ background: '#ffffff', padding: '2px 6px', borderRadius: '5px', display: 'inline-flex', alignItems: 'center' }}>
                      <img src="/images/logo.png" alt="ANS GROUP" style={{ height: '14px', width: 'auto' }} />
                    </span>
                    ANS GROUP
                  </span>
                  <span className="t-type">{car.categories?.[0] || "Self Drive"}</span>
                </div>

                <div className="t-title">{car.name}</div>

                <div className="t-details">
                  <div className="t-item">
                    <span className="t-lab">Kilometre Limit</span>
                    <span className="t-val">200km/Day</span>
                  </div>
                  <div className="t-item">
                    <span className="t-lab">Extra Kilometres</span>
                    <span className="t-val">₹{car.extraKm}/km</span>
                  </div>
                  {car.extraHour && (
                    <div className="t-item">
                      <span className="t-lab">Extra Hours</span>
                      <span className="t-val">₹{car.extraHour}/hr</span>
                    </div>
                  )}
                  {car.fuel && (
                    <div className="t-item">
                      <span className="t-lab">Fuel Type</span>
                      <span className="t-val">{car.fuel}</span>
                    </div>
                  )}
                  <div className="t-item">
                    <span className="t-lab">Fuel</span>
                    <span className="t-val">Not Included</span>
                  </div>
                  <div className="t-item wide">
                    <span className="t-lab">Speed Limit</span>
                    <span className="t-val">City 60 km/h, Highway 90 km/h</span>
                  </div>
                </div>
              </div>

              {/* Perforation Line */}
              <div className="t-perf"></div>
            </div>

            {/* Bottom Stub */}
            <div className="t-stub">
              <div>
                <div className="t-lab">Rent Per Day</div>
                <div className="t-rent">{formatINR(car.rent)}</div>
              </div>

              <button 
                className="btn full" 
                type="button" 
                onClick={() => {
                  onClose();
                  onCheckAvailability(car);
                }}
              >
                Check Availability
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

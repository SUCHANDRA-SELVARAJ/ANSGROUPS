import React from 'react';
import { Users, Gauge, Fuel, MessageCircle, ArrowRight } from 'lucide-react';
import CarSvg from './CarSvg';
import { formatINR, buildWhatsAppUrl } from '../../utils/helpers';
import { BUSINESS_CONFIG } from '../../config/businessInfo';

export default function VehicleCard({ car, onOpenSpecs, onQuickBook }) {
  const { contacts } = BUSINESS_CONFIG;

  const whatsappText = `Hello ANS GROUPS, I would like to check availability for ${car.name} (${formatINR(car.rent)}/day).`;

  return (
    <div className="vehicle-card">
      {/* Media / Silhouette */}
      <div className="vehicle-media">
        {car.image ? (
          <img 
            src={car.image} 
            alt={car.name} 
            style={{ width: '100%', height: '100%', objectFit: 'contain' }} 
          />
        ) : (
          <CarSvg style={{ width: '55%', color: 'var(--text-dim)' }} />
        )}
        <span className="vehicle-badge-pill">
          {car.categories?.[0] || 'Car Rental'}
        </span>
      </div>

      {/* Body */}
      <div className="vehicle-body">
        <h3 className="vehicle-title">{car.name}</h3>

        {/* Spec row */}
        <div className="vehicle-spec-row">
          <div className="vehicle-spec-tag">
            <Users size={14} color="var(--accent-gold)" />
            <span>{car.seats}</span>
          </div>
          <div className="vehicle-spec-tag">
            <Gauge size={14} color="var(--accent-gold)" />
            <span>{car.transmission}</span>
          </div>
          <div className="vehicle-spec-tag">
            <Fuel size={14} color="var(--accent-gold)" />
            <span>{car.fuel}</span>
          </div>
        </div>

        {/* Footer */}
        <div className="vehicle-footer">
          <div>
            <div className="vehicle-price">
              {formatINR(car.rent)} <span>/ Day</span>
            </div>
            <div style={{ fontSize: '0.72rem', color: 'var(--text-dim)' }}>
              200 km/day included
            </div>
          </div>

          <div style={{ display: 'flex', gap: '8px' }}>
            <button 
              type="button"
              className="btn btn-secondary btn-sm"
              onClick={() => onOpenSpecs(car)}
            >
              Specs
            </button>
            <button 
              type="button" 
              className="btn btn-primary btn-sm"
              onClick={() => onQuickBook(car)}
            >
              <span>Book</span>
              <ArrowRight size={13} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

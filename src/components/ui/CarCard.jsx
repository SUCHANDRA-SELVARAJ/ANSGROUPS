import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Users, Fuel, Gauge, ArrowRight, MessageCircle, Check, Info } from 'lucide-react';
import { formatINR, buildWhatsAppUrl } from '../../utils/helpers';
import ImagePlaceholder from '../common/ImagePlaceholder';
import Modal from './Modal';
import Button from './Button';

export default function CarCard({ car }) {
  const [modalOpen, setModalOpen] = useState(false);

  const getWhatsAppBookingText = () => {
    return `Hello ANS GROUPS, I would like to check availability for ${car.name}.\n` +
      `Category: ${car.category} (${car.seats})\n` +
      `Rate: ${formatINR(car.rentPerDay)}/day\n` +
      `KM Limit: ${car.kmLimit}`;
  };

  return (
    <>
      <div className="card" style={{ padding: '0', overflow: 'hidden' }}>
        {/* Car Image Placeholder Container */}
        <div style={{ position: 'relative' }}>
          <ImagePlaceholder 
            title={car.name}
            category={car.category}
            src={car.imagePath}
            aspectRatio="16/10"
          />
          <div style={{ position: 'absolute', top: '12px', left: '12px', display: 'flex', gap: '0.5rem' }}>
            <span className="section-tag" style={{ margin: 0, padding: '0.25rem 0.65rem', fontSize: '0.7rem', background: 'rgba(10, 14, 22, 0.85)', backdropFilter: 'blur(4px)' }}>
              {car.category}
            </span>
            {car.popular && (
              <span className="section-tag" style={{ margin: 0, padding: '0.25rem 0.65rem', fontSize: '0.7rem', background: 'rgba(34, 197, 94, 0.2)', borderColor: 'rgba(34, 197, 94, 0.4)', color: '#22c55e' }}>
                Popular
              </span>
            )}
          </div>
        </div>

        {/* Car Details Body */}
        <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, margin: 0 }}>
              {car.name}
            </h3>
          </div>

          <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1rem', minHeight: '2.4em', lineHeight: '1.4' }}>
            {car.description}
          </p>

          {/* Quick Specs Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.5rem', background: 'var(--bg-surface)', padding: '0.65rem', borderRadius: 'var(--radius-sm)', marginBottom: '1.25rem', border: '1px solid var(--border-subtle)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
              <Users size={14} color="var(--accent-gold)" />
              <span>{car.seats}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
              <Gauge size={14} color="var(--accent-gold)" />
              <span>{car.transmission}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
              <Fuel size={14} color="var(--accent-gold)" />
              <span>{car.fuel}</span>
            </div>
          </div>

          {/* Pricing & CTA */}
          <div style={{ marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Rent Per Day</div>
              <div style={{ fontSize: '1.35rem', fontWeight: 800, fontFamily: 'var(--font-heading)', color: 'var(--accent-gold)' }}>
                {formatINR(car.rentPerDay)}
              </div>
            </div>

            <div style={{ display: 'flex', gap: '0.45rem' }}>
              <a 
                href={buildWhatsAppUrl("8111015298", getWhatsAppBookingText())} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-whatsapp btn-sm"
                title="Book on WhatsApp"
                style={{ padding: '0.5rem 0.75rem' }}
              >
                <MessageCircle size={15} />
              </a>

              <Link 
                to={`/enquiry?car=${encodeURIComponent(car.name)}`}
                className="btn btn-primary btn-sm"
                style={{ padding: '0.5rem 0.85rem' }}
              >
                <span>Book</span>
                <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for viewing car specs */}
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} title={`${car.name} - Rental Details`}>
        <div>
          <ImagePlaceholder 
            title={car.name}
            category={car.category}
            src={car.imagePath}
            aspectRatio="16/10"
            style={{ borderRadius: 'var(--radius-sm)', marginBottom: '1.25rem' }}
          />
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Daily Rental Rate</div>
              <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--accent-gold)' }}>{formatINR(car.rentPerDay)} <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>/ 24 Hours</span></div>
            </div>
            <span className="section-tag" style={{ margin: 0 }}>{car.category}</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '1.25rem', background: 'var(--bg-surface)', padding: '1rem', borderRadius: 'var(--radius-sm)' }}>
            <div><span style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>Included Kilometers:</span> <br /><strong>{car.kmLimit}</strong></div>
            <div><span style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>Extra Km Charge:</span> <br /><strong>{formatINR(car.extraKmRate)} / km</strong></div>
            <div><span style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>Fuel:</span> <br /><strong>Not Included (Return same level)</strong></div>
            <div><span style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>Min Booking:</span> <br /><strong>24 Hours</strong></div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem' }}>
            <Button variant="secondary" onClick={() => setModalOpen(false)}>Close</Button>
            <Button 
              to={`/enquiry?car=${encodeURIComponent(car.name)}`} 
              variant="primary" 
              onClick={() => setModalOpen(false)}
            >
              Book This Car
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
}

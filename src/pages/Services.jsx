import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/businessInfo';
import SeoMeta from '../components/common/SeoMeta';

export default function Services() {
  const { services, contacts } = BUSINESS_CONFIG;

  return (
    <>
      <SeoMeta 
        title="Our Car Rental Services"
        description="ANS GROUPS car hire services: self-drive cars, family 7-seaters, executive luxury rentals, and outstation holiday road trips."
      />

      <main className="page">
        <h2>Our Services</h2>
        <p>
          Whether you need an everyday city runabout, a comfortable highway cruiser, or a premium SUV, ANS GROUP CAR RENTAL PVT LMTD offers dependable rental vehicles tailored to your schedule.
        </p>

        {/* Services Grid */}
        <div className="grid" style={{ marginTop: '24px' }}>
          {services.map((s) => (
            <div key={s.id} className="card" style={{ padding: '24px', display: 'flex', flexDirection: 'column' }}>
              <span 
                style={{
                  alignSelf: 'flex-start',
                  fontSize: '11px',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  padding: '4px 10px',
                  borderRadius: '99px',
                  background: 'rgba(255, 255, 255, 0.08)',
                  color: '#e5e5e8',
                  marginBottom: '16px'
                }}
              >
                {s.tag}
              </span>
              <h3 style={{ fontSize: '24px', marginBottom: '8px' }}>{s.title}</h3>
              <p style={{ color: 'var(--mut)', fontSize: '14px', margin: '0 0 20px', flexGrow: 1 }}>
                {s.desc}
              </p>

              <div style={{ display: 'grid', gap: '8px' }}>
                <Link to="/fleet" className="btn sm">
                  View Vehicles
                </Link>
                <a 
                  href={BUSINESS_CONFIG.getWhatsAppLink(`Hello ANS GROUPS, I would like to inquire about ${s.title}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn wa sm"
                >
                  <MessageCircle size={14} />
                  <span>Inquire on WhatsApp</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <div style={{ maxWidth: '440px', margin: '34px auto 0', textAlign: 'center' }}>
          <Link to="/fleet" className="btn full">
            Explore Our Fleet And Prices
          </Link>
        </div>

        {/* Footnote */}
        <div className="foot">
          Minimum booking 24 hours &bull; Aadhaar and Driving Licence are compulsory
        </div>
      </main>
    </>
  );
}

import React, { useState, useMemo } from 'react';
import { Search, Filter } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/businessInfo';
import CarSvg from '../components/ui/CarSvg';
import TicketModal from '../components/ui/TicketModal';
import AvailabilityModal from '../components/ui/AvailabilityModal';
import ContactModal from '../components/ui/ContactModal';
import SeoMeta from '../components/common/SeoMeta';
import { formatINR } from '../utils/helpers';

export default function Gallery() {
  const { cars, categories, rentalRules } = BUSINESS_CONFIG;

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showFilters, setShowFilters] = useState(true);

  const [activeTicketCar, setActiveTicketCar] = useState(null);
  const [activeBookingCar, setActiveBookingCar] = useState(null);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);

  const filteredCars = useMemo(() => {
    return cars.filter((c) => {
      const matchesSearch = c.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || (c.categories && c.categories.includes(selectedCategory));
      return matchesSearch && matchesCategory;
    });
  }, [cars, searchQuery, selectedCategory]);

  return (
    <>
      <SeoMeta 
        title="Our Fleet & Rates"
        description="Browse all self-drive rental cars by ANS GROUPS. Every rate is listed upfront per day with 200 km included."
      />

      <main className="page">
        <h2>Our Fleet</h2>
        <p>
          From premium 4x4 SUVs and 7-seaters to automatic crossovers and everyday hatchbacks, every car is well-maintained and comes with valid commercial papers.
        </p>

        {/* Search Bar */}
        <div className="sbw">
          <div className="sb">
            <div className="sb-in">
              <Search className="si" size={20} />
              <input 
                type="search" 
                placeholder="Search by car name..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoComplete="off"
                aria-label="Search cars"
              />
              <button 
                type="button" 
                className={`fb ${showFilters ? 'on' : ''}`}
                onClick={() => setShowFilters(!showFilters)}
                title="Toggle filter chips"
                aria-label="Toggle filter chips"
              >
                <Filter size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Filter Chips */}
        {showFilters && (
          <div className="chips">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`chip ${selectedCategory === cat ? 'on' : ''}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat === 'All' ? 'All Cars' : cat}
              </button>
            ))}
          </div>
        )}

        {/* Cars Grid */}
        <div className="grid">
          {filteredCars.map((car) => (
            <div 
              key={car.id} 
              className="card"
              onClick={() => setActiveTicketCar(car)}
              tabIndex={0}
              role="button"
              aria-label={`${car.name} details`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setActiveTicketCar(car);
                }
              }}
            >
              <div className="ph">
                {car.image ? (
                  <img src={car.image} alt={car.name} loading="lazy" />
                ) : (
                  <CarSvg />
                )}
              </div>
              <div className="bar">
                <div style={{ textAlign: 'left', minWidth: 0 }}>
                  <b style={{ display: 'block', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                    {car.name}
                  </b>
                  <span style={{ 
                    display: 'block', 
                    fontSize: '14px', 
                    color: '#d4d4d8', 
                    marginTop: '2px',
                    fontFamily: '"Barlow Condensed", sans-serif',
                    fontStyle: 'italic',
                    fontWeight: 700
                  }}>
                    {formatINR(car.rent)} <span style={{ fontStyle: 'normal', fontSize: '11px', color: 'var(--mut)', fontWeight: 500 }}>/day</span>
                  </span>
                </div>
                <span className="btn">See Details</span>
              </div>
            </div>
          ))}
        </div>

        {filteredCars.length === 0 && (
          <div style={{ textAlign: 'center', padding: '40px 10px', color: 'var(--mut)' }}>
            No cars found matching "{searchQuery}".
          </div>
        )}

        {/* CTA Buttons */}
        <div className="two cta">
          <button 
            className="btn ghost" 
            type="button" 
            onClick={() => setContactModalOpen(true)}
          >
            Contact Us
          </button>
          <a 
            className="btn wa" 
            href={BUSINESS_CONFIG.getWhatsAppLink()} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Chat On WhatsApp
          </a>
        </div>

        {/* Compulsory Notice */}
        <div className="foot">
          {rentalRules.minBooking} {rentalRules.documents}
        </div>
      </main>

      {/* Ticket Modal */}
      <TicketModal 
        car={activeTicketCar}
        isOpen={!!activeTicketCar}
        onClose={() => setActiveTicketCar(null)}
        onCheckAvailability={(car) => {
          setActiveBookingCar(car);
          setBookingModalOpen(true);
        }}
      />

      {/* Availability Modal */}
      <AvailabilityModal 
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        initialCar={activeBookingCar}
        cars={cars}
      />

      {/* Contact Modal */}
      <ContactModal 
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />
    </>
  );
}

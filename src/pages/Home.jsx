import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BUSINESS_CONFIG } from '../config/businessInfo';
import SeoMeta from '../components/common/SeoMeta';

export default function Home() {
  const navigate = useNavigate();
  const { fullName, shortDescription } = BUSINESS_CONFIG;

  return (
    <>
      <SeoMeta 
        title="Self Drive Car Rental. Premium Cars, Best Rates"
        description="ANS GROUPS - Self Drive Car Rental. Every rate is listed upfront per day with 200 km included. Call 81110 15298 or 99440 52203."
      />

      <main className="hero">
        <div className="hc">
          <div className="hero-logo-box" aria-label="ANS GROUP CAR RENTAL PVT LMTD Logo">
            <img src="./images/logo.png" alt="ANS GROUP CAR RENTAL PVT LMTD" className="hero-logo-img" />
          </div>

          <h1>{fullName}</h1>
          <div className="lane" aria-hidden="true"></div>

          <p>{shortDescription}</p>

          <button 
            className="btn" 
            type="button" 
            onClick={() => navigate('/fleet')}
          >
            Explore Our Fleet And Prices
          </button>
        </div>

        {/* Stage Graphic - Seamless Stealth Audi RS6 Showcase */}
        <div className="stage">
          <picture className="stage-picture">
            <source media="(max-width: 640px)" srcSet="./images/hero-audi-mobile.png" />
            <img 
              src="./images/hero-audi.png" 
              alt="Audi RS6" 
            />
          </picture>
        </div>
      </main>
    </>
  );
}

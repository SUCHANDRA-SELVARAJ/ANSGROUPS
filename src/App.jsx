import React from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import ScrollToTop from './components/ui/ScrollToTop';
import MobileActionBar from './components/common/MobileActionBar';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Enquiry from './pages/Enquiry';

function NotFound() {
  return (
    <div style={{ padding: '80px 20px', textAlign: 'center', minHeight: '60vh' }}>
      <h1 style={{ fontSize: '48px', marginBottom: '12px' }}>Page Not Found</h1>
      <p style={{ maxWidth: '480px', margin: '0 auto 24px auto', color: 'var(--mut)' }}>
        The page you are looking for does not exist.
      </p>
      <Link to="/" className="btn">
        Return to Home
      </Link>
    </div>
  );
}

function MainLayout() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className={`site-wrapper ${isHome ? 'site-wrapper-home' : ''}`}>
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fleet" element={<Gallery />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/enquiry" element={<Enquiry />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      {!isHome && <Footer />}
      <MobileActionBar />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <MainLayout />
    </Router>
  );
}

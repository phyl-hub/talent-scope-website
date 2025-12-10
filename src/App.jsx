import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/sections/Navbar';
import Hero from './components/sections/Hero';
import Comparison from './components/sections/Comparison';
import HowItWorks from './components/sections/HowItWorks';
import Pricing from './components/sections/Pricing';
import FAQ from './components/sections/FAQ';
import Footer from './components/sections/Footer';
import Schedule from './components/sections/Schedule';
import SEO from './components/SEO';
import ROICalculator from './components/sections/ROICalculator'; // New Import
import StickyCTA from './components/ui/StickyCTA'; // New Import

// Imports for new pages
import PrivacyPolicy from './components/sections/Privacy'; 
import Terms from './components/sections/Terms'; 

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      <Routes>
        <Route path="/" element={
          <>
            <SEO
              path="/"
              title="Talent Scope | #1 Solar Setter & Closer Staffing Bench"
              description="Get 3-10 AI-vetted Setters weekly. Access exclusive Closer drops. Pre-vetted D2D solar sales talent with Zoom recordings. Flat $1k/mo with $0 placement fees."
              keywords="solar appointment setters, hire solar setters, remote solar sales reps, D2D solar sales, virtual solar sales team, solar setter recruitment, solar sales staffing, AI-vetted solar talent, solar telesales, solar dealer staffing, solar sales hiring, solar closer, high ticket sales, commission only solar reps"
              type="website"
              jsonLd={{
                '@context': 'https://schema.org',
                '@type': 'Product',
                name: 'Talent Scope Solar Sales Staffing Service',
                description:
                  'Weekly delivery of AI-vetted solar appointment setters and high-ticket closers for solar dealers. Watch Zoom call recordings, review AI scorecards, and hire unlimited remote solar sales talent for a flat $1,000/month with zero placement fees. Setters drop weekly, Closers drop rare.',
                brand: {
                  '@type': 'Brand',
                  name: 'Talent Scope',
                },
                category: 'Solar Sales Staffing & Recruitment',
                keywords: 'solar appointment setters, remote solar sales, D2D solar veterans, solar telesales, virtual solar sales team',
                offers: {
                  '@type': 'Offer',
                  price: '1000',
                  priceCurrency: 'USD',
                  priceSpecification: {
                    '@type': 'UnitPriceSpecification',
                    price: '1000',
                    priceCurrency: 'USD',
                    billingDuration: 'P1M',
                  },
                  availability: 'https://schema.org/InStock',
                  url: 'https://talent-scope.io/',
                },
                areaServed: {
                  '@type': 'Country',
                  name: 'United States',
                },
                audience: {
                  '@type': 'Audience',
                  audienceType: 'Solar dealers, solar sales organizations, virtual sales floors hiring remote solar appointment setters and D2D sales representatives',
                },
                aggregateRating: {
                  '@type': 'AggregateRating',
                  ratingValue: '9.7',
                  bestRating: '10',
                  ratingCount: '47',
                },
              }}
            />
            <Navbar />
            <main>
              <Hero />
              <Comparison />
              <HowItWorks />
              <ROICalculator />
              <Pricing />
              <FAQ />
            </main>
            <Footer />
            <StickyCTA />
          </>
        } />

        <Route path="/privacy" element={<PrivacyPolicy />} />
        
        {/* 2. ADD THIS ROUTE */}
        <Route path="/terms" element={<Terms />} />

        <Route
          path="/schedule"
          element={
            <>
              <SEO
                path="/schedule"
                title="Book a Demo | See AI-Vetted Solar Appointment Setters | Talent Scope"
                description="Schedule a 15-minute demo to see pre-vetted solar appointment setters with Zoom recordings. Learn how our weekly solar setter bench helps solar dealers scale remote sales teams."
                keywords="book solar setter demo, solar sales staffing demo, hire solar appointment setters, remote solar sales demo, AI-vetted solar talent"
              />
              <Navbar />
              <main>
                <Schedule />
              </main>
              <Footer />
            </>
          }
        />
        
      </Routes>
    </div>
  );
}

export default App;
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
              title="Talent Scope | Pre-Vetted Solar Setters & Closers Delivered Weekly"
              description="Your setter quit. Leads are burning. Get 3-10 pre-vetted solar appointment setters every Monday. Watch their Loom auditions. Hire same-week. $1K/mo flat. $0 placement fees."
              keywords="solar appointment setter, hire solar setters, remote solar sales rep, solar closer, D2D solar sales, virtual sales floor, solar dealer staffing, solar recruiter alternative, commission solar reps, solar sales talent, appointment setter solar"
              type="website"
              jsonLd={{
                '@context': 'https://schema.org',
                '@type': 'Product',
                name: 'Talent Scope Solar Sales Staffing',
                description:
                  'Weekly delivery of pre-vetted solar appointment setters and closers. Watch 90-sec Loom auditions, check the 5-Point Scorecard, hire same-week. $1,000/mo flat with zero placement fees. Setters drop weekly. Closers drop rare.',
                brand: {
                  '@type': 'Brand',
                  name: 'Talent Scope',
                },
                category: 'Solar Sales Staffing',
                keywords: 'solar appointment setter, hire solar reps, remote solar sales, D2D solar, solar closer, virtual sales floor',
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
                  audienceType: 'Solar dealers, virtual sales floors, solar companies hiring remote setters and closers',
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
                title="See This Week's Bench | Pre-Vetted Solar Setters | Talent Scope"
                description="15 minutes. Watch real Loom auditions from pre-vetted solar setters. See the 5-Point Scorecard. Know if they can sell before you waste an interview."
                keywords="solar setter demo, hire solar appointment setters, solar sales staffing, pre-vetted solar reps, remote solar sales, solar closer"
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
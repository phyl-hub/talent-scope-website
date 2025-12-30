import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/sections/Navbar';
import Hero from './components/sections/Hero';
import Comparison from './components/sections/Comparison';
import HowItWorks from './components/sections/HowItWorks';
import Credibility from './components/sections/Credibility';
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
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-emerald-500/20 selection:text-emerald-300">
      <Routes>
        <Route path="/" element={
          <>
            <SEO
              path="/"
              title="Remote MCA Outbound Talent | Outbound Funding Specialists | From $1,000/mo | ISO Bench"
              description="Replace $5K-$20K placement fees with fixed-cost MCA talent logistics. Remote-ready Outbound Funding Specialists. Weekly drops. Sustained dial capacity. Zero placement fees."
              keywords="remote MCA recruiting, virtual MCA sales floor, pre-vetted remote MCA talent, commission-only ISO reps, remote MCA appointment setters, outbound funding specialists, virtual high-volume dialers, dial-pressure resilience, outbound continuity"
              type="website"
              jsonLd={{
                '@context': 'https://schema.org',
                '@type': 'Product',
                name: 'ISO Bench: Remote MCA Talent Logistics Utility',
                description:
                  'Replace $5K-$20K placement fees with fixed-cost MCA talent logistics. Remote-ready Outbound Funding Specialists. 90-120 second video auditions verify dial-pressure resilience. Unlimited hires. Zero placement fees.',
                brand: {
                  '@type': 'Brand',
                  name: 'ISO Bench',
                },
                category: 'Fixed-Cost MCA Recruiting Services',
                keywords: 'remote MCA recruiting, virtual MCA sales floor, outbound funding specialists, dial-pressure resilience, outbound continuity',
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
                  url: 'https://isobench.com/',
                  seller: {
                    '@type': 'Organization',
                    name: 'Talent Scope Group LLC',
                    url: 'https://isobench.com/',
                  },
                },
                areaServed: {
                  '@type': 'Country',
                  name: 'United States',
                },
                audience: {
                  '@type': 'Audience',
                  audienceType: 'MCA companies hiring remote outbound funding specialists',
                },
              }}
            />
            <Navbar />
            <main>
              <Hero />
              <Comparison />
              <HowItWorks />
              <Credibility />
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
                title="See This Week's Remote MCA Bench | Outbound Funding Specialists | ISO Bench"
                description="15 minutes. Watch video auditions from Remote-Ready Outbound Funding Specialists. Verify dial-pressure resilience and objection handling before you interview. Draft the best. Dominate tomorrow."
                keywords="MCA outbound demo, MCA setter demo, MCA sales bench, vetted MCA talent, MCA recruiting, merchant cash advance staffing, outbound funding specialist"
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
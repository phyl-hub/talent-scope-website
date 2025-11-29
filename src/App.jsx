import React from 'react';
import Navbar from './components/sections/Navbar';
import Hero from './components/sections/Hero';
import Comparison from './components/sections/Comparison';
import HowItWorks from './components/sections/HowItWorks';
import Pricing from './components/sections/Pricing';
import Footer from './components/sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-blue-950/20 to-slate-950 text-white font-sans selection:bg-blue-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Comparison />
        <HowItWorks />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}

export default App;
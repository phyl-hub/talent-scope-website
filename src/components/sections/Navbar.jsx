import React from 'react';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold shadow-blue-600/20 shadow-lg">T</div>
          <span className="text-xl font-bold tracking-tight text-slate-900">Talent Scope</span>
        </div>
        
        {/* Links */}
        <div className="hidden md:flex gap-8 text-sm font-semibold text-slate-500">
          <a href="#how" className="hover:text-blue-600 transition">How it Works</a>
          <a href="#demo" className="hover:text-blue-600 transition">The Menu</a>
          <a href="#pricing" className="hover:text-blue-600 transition">Pricing</a>
        </div>

        {/* CTA */}
        <button className="bg-slate-900 hover:bg-slate-800 text-white px-5 py-2.5 rounded-full font-semibold transition shadow-lg shadow-slate-900/10 text-sm hover:-translate-y-0.5">
          Hire a Top 1% SDR
        </button>
      </div>
    </nav>
  );
}
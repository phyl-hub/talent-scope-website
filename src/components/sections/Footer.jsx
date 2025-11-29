import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-12 mt-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          
          {/* Column 1: Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold shadow-sm">
                T
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900">
                Talent Scope
              </span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
              Verified candidates. Flat fees. <br />
              Built for SaaS Founders.
            </p>
          </div>

          {/* Column 2: Product */}
          <div>
            <p className="text-sm font-bold text-slate-900 mb-4 uppercase tracking-wider">Product</p>
            <ul className="space-y-3 text-sm text-slate-500">
              <li><a href="#how" className="hover:text-blue-600 transition duration-200">How It Works</a></li>
              <li><a href="#demo" className="hover:text-blue-600 transition duration-200">The Menu</a></li>
              <li><a href="#pricing" className="hover:text-blue-600 transition duration-200">Pricing</a></li>
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div>
            <p className="text-sm font-bold text-slate-900 mb-4 uppercase tracking-wider">Legal</p>
            <ul className="space-y-3 text-sm text-slate-500">
              <li><a href="#" className="hover:text-blue-600 transition duration-200">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-600 transition duration-200">Terms of Service</a></li>
              <li><a href="#" className="hover:text-blue-600 transition duration-200">Contact Support</a></li>
            </ul>
          </div>

          {/* Column 4: Social */}
          <div>
            <p className="text-sm font-bold text-slate-900 mb-4 uppercase tracking-wider">Connect</p>
            <ul className="space-y-3 text-sm text-slate-500">
              <li><a href="#" className="hover:text-blue-600 transition duration-200">Twitter</a></li>
              <li><a href="#" className="hover:text-blue-600 transition duration-200">LinkedIn</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm">&copy; 2025 Talent Scope Group LLC. All rights reserved.</p>
          <p className="text-slate-400 text-sm font-medium">An SDR hiring manager in a box.</p>
        </div>
      </div>
    </footer>
  );
}
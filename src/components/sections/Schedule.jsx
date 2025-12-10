import React, { useEffect } from 'react';
import { Calendar, Zap, CheckCircle } from 'lucide-react';

export default function Schedule() {
  useEffect(() => {
    // Load GHL booking widget script
    const script = document.createElement('script');
    script.src = 'https://link.msgsndr.com/js/form_embed.js';
    script.type = 'text/javascript';
    document.body.appendChild(script);
  }, []);

  return (
    <section className="min-h-screen bg-white">
      {/* Header - Full Width */}
      <div className="bg-gradient-to-r from-amber-50 to-orange-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-black text-slate-900 mb-6">
            See Setters & Closers — Book FREE Demo
          </h1>
          <p className="text-2xl text-slate-600 mb-4">
            Watch real <strong>Setter & Closer Zoom recordings</strong>. 100% free. In 15 minutes.
          </p>
          <p className="text-lg text-slate-500 max-w-2xl">
            We'll show you exactly how your private bench works. Fresh <strong>D2D vets & new talent</strong>. AI-vetted Zoom calls. The 5-Point Scorecard. Everything ready to hire.
          </p>
        </div>
      </div>

      {/* Benefits Section - Full Width */}
      <div className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex gap-4">
              <Calendar className="w-8 h-8 text-amber-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-slate-900 mb-2">15 Minutes</h3>
                <p className="text-slate-600">Quick walkthrough of actual Setters & Closers ready to hire this week</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Zap className="w-8 h-8 text-amber-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-slate-900 mb-2">Watch Zoom Recordings</h3>
                <p className="text-slate-600">See actual recordings. Real energy. Real rebuttal handling. AI-vetted.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <CheckCircle className="w-8 h-8 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-slate-900 mb-2">No Pitch</h3>
                <p className="text-slate-600">We show. You decide. That's it.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* GHL Booking Widget - Full Width */}
      <div className="bg-gradient-to-b from-slate-50 to-white py-16">
        <div className="w-full px-6">
          <div className="max-w-6xl mx-auto">
            <iframe 
              src="https://api.leadconnectorhq.com/widget/booking/rI9xeSjenMoAmFFBcYNa" 
              style={{
                width: '100%',
                border: 'none',
                overflow: 'hidden',
                minHeight: '700px',
                borderRadius: '24px'
              }}
              scrolling="no" 
              id="rI9xeSjenMoAmFFBcYNa_1765211754343"
              title="See Your Bench"
            />
          </div>
        </div>
      </div>

      {/* Fallback CTA */}
      <div className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-slate-600 mb-4">
            Can't find a time that works? Email <a href="mailto:hello@talent-scope.io" className="text-blue-600 hover:underline font-bold">hello@talent-scope.io</a>
          </p>
        </div>
      </div>
    </section>
  );
}
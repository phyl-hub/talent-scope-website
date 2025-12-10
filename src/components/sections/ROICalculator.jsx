import React, { useState } from 'react';
import { DollarSign, TrendingUp, AlertCircle } from 'lucide-react';

export default function ROICalculator() {
  const [dealValue, setDealValue] = useState(7000); // Avg solar deal
  const [leadsPerMonth, setLeadsPerMonth] = useState(50);
  const [closeRate, setCloseRate] = useState(20); // 20% close rate on sits
  const [showResult, setShowResult] = useState(false);

  // Simple math: Leads * (CloseRate/100) * DealValue
  // But for a setter, it's Leads -> Sits -> Closes.
  // Let's simplify: "Lost Revenue from Empty Seat"
  // An empty seat means leads aren't being called.
  // 50 leads * 10% conversion to sit * 20% close rate * $7k = Revenue
  
  const calculateLoss = () => {
    // Assumptions:
    // Contact Rate: 30%
    // Set Rate (from contact): 25%
    // Sit Rate: 70%
    // Close Rate: User Input (default 20%)
    
    // Let's just use a simpler model for the user:
    // "How many installs is this empty seat costing you?"
    // Leads * Conversion % = Installs
    
    const installs = Math.round(leadsPerMonth * (closeRate / 100));
    const revenue = installs * dealValue;
    return { installs, revenue };
  };

  const { installs, revenue } = calculateLoss();

  return (
    <section className="py-20 bg-slate-900 text-white overflow-hidden relative">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-10 right-10 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-amber-400 font-bold uppercase tracking-wider text-sm mb-3">
            <AlertCircle size={16} />
            Solar Sales Staffing ROI Calculator
          </div>
          <h2 className="text-3xl md:text-5xl font-black mb-4">
            Calculate Your Cost of <span className="text-red-500">NOT Hiring Solar Appointment Setters</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Every day without a solar setter, leads go cold. Calculate your monthly revenue loss from empty solar sales positions vs. flat-fee solar recruitment.
          </p>
        </div>

        <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            {/* Inputs */}
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-slate-300 mb-2">
                  Avg. Commission / Deal Value ($)
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                  <input 
                    type="number" 
                    value={dealValue}
                    onChange={(e) => setDealValue(Number(e.target.value))}
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl py-3 pl-10 pr-4 text-white font-bold focus:ring-2 focus:ring-amber-500 focus:outline-none transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-300 mb-2">
                  Leads Provided Per Month
                </label>
                <input 
                  type="range" 
                  min="10" 
                  max="200" 
                  value={leadsPerMonth}
                  onChange={(e) => setLeadsPerMonth(Number(e.target.value))}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-amber-500"
                />
                <div className="text-right text-amber-400 font-bold mt-1">{leadsPerMonth} Leads</div>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-300 mb-2">
                  Expected Close Rate (%)
                </label>
                <input 
                  type="range" 
                  min="1" 
                  max="50" 
                  value={closeRate}
                  onChange={(e) => setCloseRate(Number(e.target.value))}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-green-500"
                />
                <div className="text-right text-green-400 font-bold mt-1">{closeRate}% Closing</div>
              </div>
            </div>

            {/* Results */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700 text-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-amber-500/5 group-hover:bg-amber-500/10 transition duration-500"></div>
              
              <p className="text-slate-400 font-medium mb-2 relative z-10">Monthly Revenue Opportunity</p>
              <div className="text-5xl md:text-6xl font-black text-white mb-2 tracking-tight relative z-10">
                ${revenue.toLocaleString()}
              </div>
              <p className="text-sm text-slate-500 mb-8 relative z-10">
                Potential from {installs} installs / mo
              </p>

              <div className="space-y-3 relative z-10">
                <div className="flex justify-between text-sm border-b border-slate-700 pb-2">
                  <span className="text-slate-400">Talent Scope Cost</span>
                  <span className="text-green-400 font-bold">-$1,000</span>
                </div>
                <div className="flex justify-between text-lg font-bold">
                  <span className="text-white">Net Profit</span>
                  <span className="text-amber-400">+${(revenue - 1000).toLocaleString()}</span>
                </div>
              </div>

              <div className="mt-8 relative z-10">
                <a href="/schedule" className="inline-flex items-center justify-center gap-2 w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 rounded-xl transition shadow-lg shadow-amber-500/20">
                  Stop Losing Money <TrendingUp size={18} />
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { CheckCircle } from 'lucide-react';

export default function Comparison() {
  // Define Brand Colors (Tailwind classes for deep navy/blue)
  const talentScopeBackground = 'bg-slate-900'; // Dark background for contrast
  const talentScopeTextColor = 'text-white';
  const agencyBackground = 'bg-white';
  const agencyTextColor = 'text-slate-900';
  const agencyBorder = 'border-red-400';

  return (
    <section className="w-full max-w-5xl mx-auto py-12 px-4" id="comparison">
      <h2 className="text-4xl md:text-5xl font-black text-center mb-16 text-slate-900">
        The Real Cost of Recruiting
      </h2>

      <div className="grid gap-8 md:grid-cols-2">
        {/* Traditional Agency (Cost/Risk - Light Theme) */}
        <div className={`border-2 ${agencyBorder} rounded-2xl p-8 ${agencyBackground} shadow-lg`}>
          <div className="text-red-600 font-semibold text-xl mb-6 border-b pb-4 border-red-100">
            Traditional Agency
          </div>
          <div className="space-y-6">
            <div>
              <p className="text-sm text-gray-500 uppercase tracking-wider">Placement Fee</p>
              <p className="text-4xl font-black text-red-600">$15k - $25k</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 uppercase tracking-wider">Time to Candidate</p>
              <p className={`text-3xl font-bold ${agencyTextColor}`}>4-8 Weeks</p>
              <p className="text-sm text-gray-400 mt-1">Lost revenue during slow hiring</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 uppercase tracking-wider">Vetting & Screening</p>
              <p className={`text-lg font-medium ${agencyTextColor}`}>Zero screening. **You read resumes.**</p>
            </div>
          </div>
        </div>

        {/* Talent Scope (Utility/Value - Dark Theme, matching Pricing Card) */}
        <div className={`border-2 border-blue-600 rounded-2xl p-8 ${talentScopeBackground} shadow-xl`}>
          <div className="text-blue-400 font-semibold text-xl mb-6 border-b pb-4 border-blue-700">
            Talent Scope (Utility Model)
          </div>
          <div className="space-y-6">
            <div>
              <p className="text-sm text-blue-300 uppercase tracking-wider">Cost (Flat Monthly Fee)</p>
              <p className="text-4xl font-black text-white">$1,000</p>
              <p className="text-sm text-blue-400 mt-1">**$0 placement fees**</p>
            </div>
            <div>
              <p className="text-sm text-blue-300 uppercase tracking-wider">Time to Candidate</p>
              <p className="text-3xl font-bold text-white">Weekly</p>
              <p className="text-sm text-blue-400 mt-1">Pipeline delivered every Monday</p>
            </div>
            <div>
              <p className="text-sm text-blue-300 uppercase tracking-wider">Vetting & Screening</p>
              <p className="text-lg font-medium text-white">**100% pre-screened**</p>
              <p className="text-sm text-blue-400 mt-1">Video + AI scorecards</p>
            </div>
            
            {/* Operational Flexibility - White text, Green Checkmarks */}
            <div className="mt-8 border-t pt-6 border-blue-700 space-y-3">
              <ComparisonItem label="No placement fees. Your hire, your saving." isDark={true} />
              <ComparisonItem label="Pause or cancel anytime. Stop paying when filled." isDark={true} />
              <ComparisonItem label="You control the pipeline; we deliver the talent." isDark={true} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Updated ComparisonItem to support dark background
function ComparisonItem({ label, isDark = false }) {
  const textColor = isDark ? 'text-gray-300' : 'text-gray-700';
  
  return (
    <p className={`flex items-start gap-2 text-base ${textColor}`}>
      <CheckCircle size={18} className="text-green-500 flex-shrink-0 mt-0.5" />
      <span>{label}</span>
    </p>
  );
}
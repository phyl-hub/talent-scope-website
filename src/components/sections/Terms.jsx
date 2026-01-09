import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import SEO from '../SEO';

export default function Terms() {
  return (
    <div className="min-h-screen bg-slate-950 font-sans text-slate-100">
      <SEO
        path="/terms"
        title="ISO Bench Terms of Service | Outbound Bench Subscription"
        description="Review the Terms of Service for ISO Bench's video-vetted Outbound Bench subscription. Includes weekly inventory drops, stacking limits, data handling, and liability."
      />
      <Navbar />

      <main className="max-w-4xl mx-auto px-6 py-20">
        
        {/* Header */}
        <div className="mb-10 border-b border-slate-800 pb-8">
          <h1 className="text-4xl font-bold tracking-tight text-slate-100 mb-4">
            Terms of Service
          </h1>
          <p className="text-lg text-slate-300">
            Please read these terms carefully. They define the boundaries of our "Utility" hiring model.
          </p>
          <div className="mt-4 text-sm text-slate-500 font-medium uppercase tracking-wider">
            Effective Date: January 8, 2026
          </div>
        </div>

        {/* Content */}
        <div className="space-y-12 text-slate-300 leading-relaxed">

          {/* Subscription Summary (Quick View) */}
          <section className="bg-slate-900/40 border border-emerald-500/20 rounded-xl p-6">
            <h2 className="text-sm font-bold uppercase tracking-wider text-emerald-300 mb-3">Subscription Summary</h2>
            <ul className="grid md:grid-cols-2 gap-3 text-sm text-slate-200">
              <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-emerald-400"></span> Weekly Inventory Drops (Mon @ 9 AM EST — Enterprise Scale / 2 PM EST — Growth Core)</li>
              <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-emerald-400"></span> Bench Access via Stacking (20 stacks — Growth Core / 50 stacks — Enterprise Scale)</li>
              <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-emerald-400"></span> Month-to-month billing</li>
              <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-emerald-400"></span> Cancel anytime</li>
              <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-emerald-400"></span> No Success Fees / No Placement Fees</li>
              <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-emerald-400"></span> No Placement Protection or performance guarantees</li>
              <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-emerald-400"></span> Pipeline access only; you hire directly</li>
            </ul>
          </section>
          
          {/* 1. Service Scope */}
          <section>
            <h2 className="text-xl font-bold text-slate-100 mb-4">1. Scope of Service</h2>
            <p className="mb-4">
              ISO Bench is a brand name operated by Talent Scope Group LLC ("ISO Bench," "we," "us," "our"). We are your <strong>Fixed-Cost Talent Supply Partner</strong>—a subscription-based logistics utility for outbound hiring. We deliver <strong>Weekly Inventory Drops</strong> featuring video-vetted <strong>Outbound Funding Specialists</strong> (MCA-focused and adjacent short-cycle industries), including their video auditions ("The Tape") and any optional resume or LinkedIn profile provided by the candidate.
            </p>
            <div className="bg-slate-900/50 border-l-4 border-emerald-400 p-4 text-slate-200 text-sm">
              <strong>Important Distinction:</strong> We are not a recruitment agency, headhunting firm, or employment representative. We do not represent candidates, negotiate salaries, manage employment offers, or guarantee individual hire longevity. We provide fixed-cost talent supply; final compliance, background checks, and licensing confirmation are the client's responsibility.
            </div>
          </section>

          {/* Definitions */}
          <section>
            <h2 className="text-xl font-bold text-slate-100 mb-4">2. Definitions</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Drop:</strong> The scheduled release of new candidate inventory into the ISO Bench portal for a given plan.</li>
              <li><strong>The Tape:</strong> A candidate’s short video audition made available in the portal.</li>
              <li><strong>Stack / Stacking:</strong> The action of claiming a candidate into your company’s bench in the portal. Stacking is required to unlock Candidate Data (as defined below).</li>
              <li><strong>Candidate Data:</strong> Contact and profile details unlocked after stacking (which may include name, email, phone, any optional resume or LinkedIn profile provided by the candidate, and other candidate-provided preference fields such as location/time zone, remote/hybrid/in-office preference, relocation willingness, and compensation/engagement preferences).</li>
              <li><strong>Elite:</strong> A label used in the portal for candidates with <strong>Score ≥ 8.5</strong> under ISO Bench’s internal scoring. Elite access is <strong>Enterprise Scale only</strong> and is not available on Growth Core.</li>
              <li><strong>Rule of 5:</strong> A candidate may be stacked by up to five (5) distinct client companies; once the limit is reached the candidate may be removed from new stacking availability.</li>
            </ul>
          </section>

          {/* Subscription & Payments */}
          <section>
            <h2 className="text-xl font-bold text-slate-100 mb-4">3. Subscription & Fees</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Flat Fee:</strong> Access to the logistics utility starts at <strong>$1,000 USD per month</strong> (Growth Core) or <strong>$1,800 USD per month</strong> (Enterprise Scale).</li>
              <li><strong>No Success Fees:</strong> We do not charge placement fees, commissions, or percentages of candidate salaries.</li>
              <li><strong>Billing Cycle:</strong> Subscriptions are billed monthly in advance.</li>
              <li><strong>Cancellation:</strong> You may cancel your subscription at any time via your account portal or by emailing billing@isobench.com. Access continues until the end of the current billing period.</li>
              <li><strong>Weekly Inventory Drops:</strong> New candidates are released weekly (typically Monday @ 9 AM EST for Enterprise Scale; 2 PM EST for Growth Core). Inventory size and composition may vary.</li>
              <li><strong>Stacking Capacity:</strong> Growth Core includes up to <strong>20</strong> stacks; Enterprise Scale includes up to <strong>50</strong> stacks.</li>
              <li><strong>Elite Access:</strong> Elite candidates (Score <strong>≥ 8.5</strong>) are visible/unlockable on <strong>Enterprise Scale only</strong> and are not available on Growth Core.</li>
              <li><strong>Month-to-month:</strong> Cancel anytime. No long-term contracts.</li>
              <li><strong>No Placement Protection:</strong> We do not offer replacement guarantees or performance guarantees; the subscription provides pipeline access only.</li>
            </ul>
          </section>

          {/* Client Responsibilities */}
          <section>
            <h2 className="text-xl font-bold text-slate-100 mb-4">4. Your Responsibilities (The "No Headhunting" Clause)</h2>
            <p className="mb-4">
              By using our service, you acknowledge that you are the sole employer of any candidate you hire. You are responsible for:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Conducting final interviews and reference checks.</li>
              <li>Negotiating offers and employment contracts.</li>
              <li>Complying with all local labor laws and payroll requirements.</li>
              <li>Determining worker classification and pay structure (e.g., W-2 vs 1099 contractor, commission-only vs base/commission) and ensuring compliance with all applicable employment, tax, and wage-and-hour laws.</li>
            </ul>
            <p className="mt-4 text-sm text-slate-400">
              Candidate preference fields (including 1099/commission preferences) are candidate-provided signals used for matching and scoring. They are not legal advice and do not determine worker classification.
            </p>
            <p className="mt-4 text-sm text-slate-400">
              ISO Bench is not liable for any employment disputes, performance issues, or "ghosting" by candidates.
            </p>
          </section>

          {/* Stacking Rules */}
          <section>
            <h2 className="text-xl font-bold text-slate-100 mb-4">5. Stacking Rules & Availability</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Unlocking Contact:</strong> Candidate Data is revealed only after you stack a candidate.</li>
              <li><strong>Stack Duration:</strong> Stacked candidates may remain on your bench for up to <strong>30 days</strong> (subject to candidate availability and platform rules).</li>
              <li><strong>Irreversibility:</strong> Stacking decisions may be treated as final for the duration of the stack window and may not be reversible.</li>
              <li><strong>Rule of 5:</strong> A candidate may be stacked by up to five (5) client companies; once reached, the candidate may be removed from new stacking availability.</li>
              <li><strong>No Inventory Guarantees:</strong> We do not guarantee any minimum number of candidates per drop or any hiring outcomes.</li>
            </ul>
          </section>

          {/* Data Usage & Privacy */}
          <section>
            <h2 className="text-xl font-bold text-slate-100 mb-4">6. Candidate Data & Confidentiality</h2>
            <p className="mb-4">
              We grant you a limited, non-transferable license to view candidate profiles (including The Tape and any Candidate Data unlocked via stacking) for the sole purpose of internal hiring.
            </p>
            <p className="mb-4 text-rose-300 font-medium">
              Strictly Prohibited:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Reselling candidate data to third parties or other agencies.</li>
              <li>Publicly posting candidate video pitches (e.g., on YouTube or LinkedIn) without their express written consent.</li>
              <li>Scraping, exporting, indexing, or bulk-copying any candidate information, including Candidate Data and scoring.</li>
              <li>Sharing login credentials to the ISO Bench platform.</li>
            </ul>
            <p className="mt-4">
              Violation of this policy will result in immediate termination of your subscription without refund and potential legal action.
            </p>
          </section>

          {/* Limitation of Liability */}
          <section>
            <h2 className="text-xl font-bold text-slate-100 mb-4">7. Disclaimer & Limitation of Liability</h2>
            <p>
              The service is provided on an "AS IS" basis. We screen candidates for energy and pitch quality, but we do not guarantee that any specific candidate will accept your offer or meet your specific performance quotas. In no event shall Talent Scope Group LLC be liable for any indirect, incidental, or consequential damages arising from your hiring decisions.
            </p>
          </section>

          {/* 6. Contact */}
          <section className="border-t border-slate-800 pt-8 mt-8">
            <h2 className="text-xl font-bold text-slate-100 mb-4">Contact Information</h2>
            <p>
              Talent Scope Group LLC (d/b/a ISO Bench)<br />
              1309 Coffeen Avenue STE 1200<br />
              Sheridan, Wyoming 82801<br />
              <a href="mailto:legal@isobench.com" className="text-emerald-300 hover:underline">legal@isobench.com</a>
            </p>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
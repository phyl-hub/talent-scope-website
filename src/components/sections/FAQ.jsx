import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
const faqs = [
  {
    id: 'faq-agency-difference',
    question: "What exactly is a 'Talent Logistics' platform?",
    answer: (
      <>
        <p className="mb-3">Traditional recruiting is a <strong>search</strong>. ISO Bench is a <strong>supply chain</strong>.</p>
        <p className="mb-3">Instead of paying <strong>$5K–$20K</strong> every time you hire (variable cost that spikes your <strong>CAC</strong>), you pay a <strong>fixed monthly subscription</strong> for continuous access to video-vetted outbound talent.</p>
        <p>We treat sales talent as <strong>inventory</strong>—ready to be drafted the moment a seat opens on your floor.</p>
      </>
    )
  },
  {
    id: 'faq-subscription',
    question: "What does the subscription deliver?",
    answer: (
      <>
        <p className="mb-4">A fixed-cost subscription that gives you continuous access to weekly inventory drops and a private bench you build via stacking.</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Weekly Drops:</strong> Fresh candidates released each week (typically Monday @ <strong>2 PM EST</strong> for Growth Core and Monday @ <strong>9 AM EST</strong> for Enterprise Scale).</li>
          <li><strong>Stacking Capacity:</strong> Growth Core can stack up to <strong>20</strong> candidates; Enterprise Scale can stack up to <strong>50</strong> candidates.</li>
          <li><strong>The Tape:</strong> Mandatory <strong>90–120s</strong> video auditions ("The Tape Don't Lie") assessed against our Core 5 scorecard.</li>
          <li><strong>Unlimited Hires:</strong> Hire as many reps as you want with <strong>$0 placement fees</strong>.</li>
          <li><strong>Billing:</strong> Month-to-month. Cancel anytime.</li>
        </ul>
      </>
    )
  },
  {
    id: 'faq-drop',
    question: "What is 'The Drop' and when does it happen?",
    answer: (
      <>
        <p className="mb-3"><strong>The Drop</strong> is our weekly release of fresh, video-vetted candidates into the ISO Bench portal.</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Enterprise Scale:</strong> Monday @ <strong>9:00 AM EST</strong> (priority access)</li>
          <li><strong>Growth Core:</strong> Monday @ <strong>2:00 PM EST</strong></li>
        </ul>
        <p className="mt-3">Enterprise Scale also includes access to <strong>Elite</strong> candidates (Score <strong>≥ 8.5</strong>), which are not available on Growth Core.</p>
      </>
    )
  },
  {
    id: 'faq-stacking',
    question: "How does 'Stacking' work? What does it unlock?",
    answer: (
      <>
        <p className="mb-3"><strong>Stacking</strong> is how you claim a candidate into your bench. When you click “Stack to My Bench,” the candidate moves into your private portal and their contact details are revealed.</p>
        <p className="mb-3"><strong>What it unlocks:</strong> Email/phone plus any optional supplemental info the candidate provided (resume and/or LinkedIn profile).</p>
        <p className="mb-3"><strong>Plan limits:</strong> Growth Core can have up to <strong>20</strong> active stacks; Enterprise Scale can have up to <strong>50</strong> active stacks.</p>
        <p>Stacking is the operational insurance: when turnover hits, you draft a replacement fast—no new recruiter fee cycle, no downtime.</p>
      </>
    )
  },
  {
    id: 'faq-unstack',
    question: "Can I unstack a candidate if they aren't a fit?",
    answer: (
      <>
        <p className="mb-3">No. To prevent data scraping and protect the integrity of the marketplace, stacks are treated as <strong>locked for up to 30 days</strong>.</p>
        <p>The absence of optional supplemental info (resume/LinkedIn) does not entitle a client to unstack—choose your drafts based on <strong>The Tape</strong>.</p>
      </>
    )
  },
  {
    id: 'faq-rule-of-5',
    question: "What is the 'Rule of 5'?",
    answer: (
      <>
        <p className="mb-3">To protect candidates from being overwhelmed and to keep a premium experience for clients, each candidate can be stacked by a maximum of <strong>5</strong> companies.</p>
        <p>Once the 5th company stacks a candidate, they may be removed from new stacking availability in the marketplace.</p>
      </>
    )
  },
  {
    id: 'faq-vetting-standard',
    question: "What is 'The Tape'? (The 'Tape Don't Lie' promise)",
    answer: (
      <>
        <p className="mb-3">Resumes don’t predict phone performance in high-velocity MCA outbound. <strong>The Tape</strong> does.</p>
        <p className="mb-3">Every candidate records a <strong>90–120s</strong> video audition and is scored on our <strong>5-Point Scorecard</strong>:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Revenue Resilience</strong> (30%) — Objection handling and pipeline protection under rejection pressure.</li>
          <li><strong>Communication Fluency & Pacing</strong> (20%) — Clear, authoritative communication on outbound calls.</li>
          <li><strong>Executive Presence & Authority</strong> (20%) — Must project confidence and control conversations.</li>
          <li><strong>Incentive Alignment</strong> (20%) — Intrinsic motivation in variable-pay, high-velocity outbound environments.</li>
          <li><strong>Operational Readiness</strong> (10%) — Immediate technical proficiency; zero ramp-up. Remote-ready.</li>
        </ul>
        <p className="mt-3">We prioritize <strong>thick-skinned</strong> candidates over those with finance degrees. We can teach MCA in 20 minutes—we can't teach grit.</p>
      </>
    )
  },
  {
    id: 'faq-resume-linkedin',
    question: "Do I get a resume or LinkedIn profile?",
    answer: (
      <>
        <p className="mb-3"><strong>The Tape</strong> is the primary signal we optimize for because it shows live phone presence under pressure.</p>
        <p>Most candidates also provide an optional resume and/or LinkedIn profile. If provided, they appear in your portal <strong>as soon as you stack</strong> the candidate.</p>
      </>
    )
  },
  {
    id: 'faq-placement-fees',
    question: "Are there any placement fees?",
    answer: (
      <>
        <p className="mb-3">None. Hire one rep or build a full floor—your cost remains a <strong>flat monthly subscription</strong>.</p>
        <p>We exist to keep your talent cost <strong>fixed</strong> and your <strong>CAC predictable</strong>, even through turnover.</p>
      </>
    )
  },
  {
    id: 'faq-us-based',
    question: "Are these candidates remote-ready? Are they US-based?",
    answer: (
      <>
        <p className="mb-3">Yes—remote-first. Every candidate is vetted for <strong>Remote Readiness</strong>: a quiet workspace, reliable high-speed internet, and the discipline to operate inside a CRM workflow.</p>
        <p>We source global talent with near-native English who work <strong>US hours</strong>. Some candidates are US-based, others are international—what matters is dial performance and operational reliability.</p>
      </>
    )
  },
  {
    id: 'faq-candidate-location-preferences',
    question: "Do you provide where candidates live and whether they prefer remote / hybrid / office (or relocation)?",
    answer: (
      <>
        <p className="mb-3">Yes. Candidate profiles include practical operating details like <strong>location/time zone</strong>, stated <strong>work-style preference</strong> (remote / hybrid / in-office), and whether they are <strong>willing to relocate</strong> (if applicable).</p>
        <p>That said, ISO Bench is built <strong>remote-first</strong>. Our vetting and the core economics of the model are designed around remote outbound operators who can perform from anywhere on US hours.</p>
      </>
    )
  },
  {
    id: 'faq-1099-commission',
    question: "Do you favor candidates who want to work 1099 (contractor) and commission-only?",
    answer: (
      <>
        <p className="mb-3">Yes. In this industry, incentive alignment matters. We tend to favor candidates who explicitly prefer <strong>1099 contractor</strong> arrangements and <strong>commission-only</strong> compensation because it matches the realities of high-velocity outbound.</p>
        <p>If a candidate selects different preferences (W2, base-heavy, etc.), they can still appear in the portal—but it may <strong>reduce their score</strong> because it signals lower incentive alignment for commission-first outbound environments.</p>
      </>
    )
  },
  {
    id: 'faq-deploy-speed',
    question: "How fast can I deploy a rep?",
    answer: (
      <>
        <p className="mb-3"><strong>Fast.</strong> Once you stack a candidate, contact details are unlocked and you can move directly to interview and onboarding.</p>
        <p>The industry churns too fast to wait for the "perfect" resume. <strong>Hire for energy and grit, then point them at the dialer.</strong></p>
      </>
    )
  },
  {
    id: 'faq-performance-guarantee',
    question: "Do you guarantee a hire's performance or cover them if they quit?",
    answer: (
      <>
        <p className="mb-3">We guarantee the <strong>pipeline</strong>, not individual performance. You control hiring, coaching, and management.</p>
        <p>If a rep quits, the point of the bench is you can <strong>draft the next</strong>—without starting a new recruiter fee cycle.</p>
      </>
    )
  },
  {
    id: 'faq-compliance',
    question: "Who handles background checks and final employment compliance?",
    answer: (
      <>
        <p className="mb-3">ISO Bench is your <strong>Fixed-Cost MCA Talent Logistics Utility</strong>, focused on delivering Remote-Ready Outbound Funding Specialists.</p>
        <p><strong>Final compliance</strong> remains the client's responsibility: background checks, required disclosures, and employment verification.</p>
      </>
    )
  },
  {
    id: 'faq-industries',
    question: "What industry do you serve?",
    answer: (
      <p>We specialize exclusively in <strong>Merchant Cash Advance (MCA)</strong>. High-turnover, high-velocity virtual sales floors that need Outbound Funding Specialists with sustained dial capacity and real-time objection handling skills.</p>
    )
  },
  {
    id: 'faq-industry-match',
    question: "Do candidates need MCA experience?",
    answer: (
      <>
        <p className="mb-3"><strong>Not necessarily.</strong> Outbound Funding Specialists can ramp into your box quickly. What you can’t teach is dial-pressure resilience and objection handling under rejection.</p>
        <p>We source commission-hungry outbound specialists from adjacent short-cycle industries (Debt Settlement, Solar, Insurance) who thrive under pressure.</p>
      </>
    )
  }
];

function FAQItem({ id, question, answer, isOpen, onClick }) {
  return (
    <div id={id} className="border-b border-slate-800 last:border-b-0">
      <button
        onClick={onClick}
        className="w-full py-5 flex justify-between items-start text-left gap-4 hover:bg-slate-900/50 transition-colors duration-200 px-2 -mx-2 rounded-lg"
      >
        <span className="text-lg font-semibold text-slate-100 pr-4">{question}</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-1" />
        ) : (
          <ChevronDown className="w-5 h-5 text-slate-500 flex-shrink-0 mt-1" />
        )}
      </button>
      {isOpen && (
        <div className="pb-6 px-2 -mx-2">
          <div className="text-slate-300 leading-relaxed">{answer}</div>
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(() => {
    if (typeof window === 'undefined') return 0;
    const hash = window.location.hash?.replace('#', '');
    if (!hash) return 0;
    const idx = faqs.findIndex((f) => f.id === hash);
    return idx >= 0 ? idx : 0;
  });

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="py-16 bg-slate-950">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-emerald-300 font-bold text-sm uppercase tracking-wider mb-3">
            FAQ
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-slate-100 mb-5">
            Questions Before You Subscribe
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            No fluff. Just answers.
          </p>
        </div>

        {/* FAQ List */}
        <div className="bg-slate-900/40 rounded-2xl p-6 md:p-8 border border-slate-800">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              id={faq.id}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => handleClick(index)}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-slate-400 mb-4">Still have questions?</p>
          <a
            href="mailto:sales@isobench.com"
            className="text-emerald-300 font-semibold hover:text-emerald-200 transition-colors duration-200"
          >
            sales@isobench.com →
          </a>
        </div>
      </div>
    </section>
  );
}

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "Do you provide Closers or just Setters?",
    answer: "Both. Our weekly drops are anchored by high-volume Appointment Setters to keep your calendars full. However, we frequently drop verified High-Ticket Closers onto the bench. At $1,000/mo, hiring just *one* Closer covers your subscription for the entire year. Setters are plentiful. Closers are first-come, first-served."
  },
  {
    question: "How does Talent Scope help solar dealers hire remote solar appointment setters?",
    answer: "We eliminate the hiring bottleneck that costs you installs. Every Monday at 9:00 AM EST, we deliver 3–10 AI-vetted solar appointment setters and closers to your private bench. Each candidate includes Zoom recordings of their screening responses and performance metrics across our 5-Point Solar Scorecard. You review their work, contact them directly via email or LinkedIn, and extend offers—typically within 48 hours. With solar leads costing $50+ per contact, empty seats translate directly to revenue loss. Our subscription model ensures you maintain a continuous pipeline of vetted remote solar sales talent—from proven D2D veterans to high-potential new candidates—with zero recruiter fees, zero placement costs, and unlimited hiring capacity. Your $1,000/mo investment replaces the traditional $5k-$20k per-hire recruiter model."
  },
  {
    question: "How fast can I hire solar setters from my bench?",
    answer: "Instantly. Once the bench drops, you have full visibility. Each profile includes the setter's direct email and preferred contact details (LinkedIn). You control the entire scheduling and hiring process, allowing most dealers to extend offers within 48 hours of the Monday drop."
  },
  {
    question: "Is the bench only available on Mondays?",
    answer: "No. Your dedicated Notion link provides 24/7 access to your full candidate bench. The list of candidates simply refreshes every Monday at 9:00 AM EST with new profiles. You can view, contact, and hire from your existing bench 365 days a year."
  },
  {
    question: "Do you guarantee the rep's long-term performance or attendance?",
    answer: "No. We verify the quality of our vetting process—that they passed the 5-Point Scorecard and the Zoom recording is accurate. We are a supply chain for talent. Your organization's training, leadership, and commission structure determine the rep's long-term output and attendance. If a rep proves to be a poor fit, you simply grab a replacement from the fresh bench next Monday. No hassle, no liability."
  },
  {
    question: "Do reps expect a base salary?",
    answer: "We filter exclusively for high-ticket, commission-hungry mindsets. These candidates want uncapped earning potential ($5k-$10k/mo). The reps you see are willing to bet on themselves, and the final offer structure is up to your organization."
  },
  {
    question: "What happens if a Closer quits?",
    answer: "You go back to the bench. Unlike recruiters who charge you another $10k fee, we just let you grab the next available talent next Monday. $0 risk. That's why we're a subscription—since we charge no placement fees, your bench is immediately stocked with replacements every week. No paperwork. No delays."
  },
  {
    question: "Are all your reps US-based and authorized to work?",
    answer: "We source talent with verified Native/Near-Native English fluency and US time zone alignment. Every candidate presented is legally authorized to work in the United States without employer sponsorship. Our priority is skill and legal compliance, regardless of geography."
  },
  {
    question: "What's included in the 5-Point Solar Scorecard?",
    answer: "Every candidate submits a Zoom recording answering our screening questions. Our AI grades them on: English Clarity, Income Ambition, Tech Check (headset/internet), Tonal Authority, and Rebuttal Instinct (objection handling). You see the AI-generated scores and watch their recordings before you hire."
  },
  {
    question: "Do you work with install companies or just dealers?",
    answer: "We staff any organization focused on residential solar sales volume. Whether you run a high-churn Virtual Sales Floor (Dealer) or need predictable talent for your In-House Install Teams, our process remains the same: Vetting for pure closing potential."
  },
  {
    question: "Can I see the bench before I subscribe?",
    answer: "Absolutely. Book a 15-minute bench walkthrough and we'll show you real Zoom recordings, AI-generated scorecards, and how the bench works. 100% free. No commitment. No pitch. Just proof."
  },
  {
    question: "What's the difference between Dealer Core and Virtual Floor Scale?",
    answer: "Dealer Core ($1,000/mo) gives you 3-5 pre-vetted Setters weekly plus access to Closer drops—perfect for smaller teams. Virtual Floor Scale ($1,800/mo) delivers 6-10 reps weekly with priority access to Closer drops—built for organizations scaling fast."
  }
];

function FAQItem({ question, answer, isOpen, onClick }) {
  return (
    <div className="border-b border-slate-200 last:border-b-0">
      <button
        onClick={onClick}
        className="w-full py-6 flex justify-between items-start text-left gap-4 hover:bg-slate-50 transition-colors duration-200 px-2 -mx-2 rounded-lg"
      >
        <span className="text-lg font-semibold text-slate-900 pr-4">{question}</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-amber-600 flex-shrink-0 mt-1" />
        ) : (
          <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0 mt-1" />
        )}
      </button>
      {isOpen && (
        <div className="pb-6 px-2 -mx-2">
          <p className="text-slate-600 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-amber-600 font-bold text-sm uppercase tracking-wider mb-4">
            Solar Sales Hiring FAQ
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
            Common Questions About Hiring Solar Appointment Setters
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Everything solar dealers ask before hiring remote solar sales talent from our bench.
          </p>
        </div>

        {/* FAQ List */}
        <div className="bg-slate-50 rounded-2xl p-8 md:p-12">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => handleClick(index)}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-slate-500 mb-4">Still have questions?</p>
          <a
            href="mailto:sales@talent-scope.io"
            className="text-amber-600 font-semibold hover:text-amber-700 transition-colors duration-200"
          >
            Email us at sales@talent-scope.io →
          </a>
        </div>
      </div>
    </section>
  );
}

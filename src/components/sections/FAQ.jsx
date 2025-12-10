import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "What is 'Stacking'?",
    answer: "It's your talent bank account. Every Monday, we drop new reps into your portal. If you don't hire them, they stay there. Week after week, your bench grows. You could have 50+ vetted reps ready to go. When someone quits, you don't panic. You just pick the next one off the stack."
  },
  {
    question: "Why 'The Tape Don't Lie'?",
    answer: "Resumes don't tell the whole story. Interviews can be rehearsed. The tape is real. We make every rep record a 90-120 second pitch. You hear their voice, their energy, their objection handling. You know if they're a fit in 10 seconds. No guessing."
  },
  {
    question: "What about turnover?",
    answer: "Turnover happens. It's a challenge for growth. But with Talent Scope, it doesn't kill your month. Instead of paying another high fee and waiting weeks, you just open your portal and draft the next rep. We don't stop turnover. We make you resilient to it."
  },
  {
    question: "How fast can I hire?",
    answer: "Immediately. You see a rep you like? Message them. Hire them. Onboard them. We don't get in the way. No middleman. No waiting."
  },
  {
    question: "Is this a recruiter?",
    answer: "No. Traditional recruiting is often slow and costly. We are a logistics company for talent. We supply the talent. You drive the revenue. Flat monthly fee. Unlimited hires."
  },
  {
    question: "Do you guarantee performance?",
    answer: "We guarantee the pipeline. Performance varies. If a rep doesn't work out, you don't fight for a refund. You just grab the next one from the bench instantly. No new fees. No downtime. That is your insurance policy."
  },
  {
    question: "Are they US-based?",
    answer: "We source global talent with near-native English. They work US hours. They understand US culture. They offer competitive rates and high dedication."
  },
  {
    question: "What if I don't hire anyone this week?",
    answer: "They stack. Your bench just got deeper. Next week, you get more. Build your talent reserve."
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
            FAQ
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
            Questions Before You Subscribe
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            No fluff. Just answers.
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
            sales@talent-scope.io →
          </a>
        </div>
      </div>
    </section>
  );
}

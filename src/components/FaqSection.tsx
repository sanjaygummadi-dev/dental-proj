import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { GENERAL_FAQS } from '../data/mockData';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 lg:py-24 bg-warm-white border-t border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <span className="inline-block px-3.5 py-1 rounded-full bg-mint-subtle text-muted-teal text-xs font-semibold uppercase tracking-wider">
            Patient Support
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-dark">
            Frequently Asked Questions
          </h2>
          <p className="text-base text-navy-muted">
            Have questions about your first visit or booking flow? We have answers.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-4">
          {GENERAL_FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-sm transition-all"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-semibold text-navy-dark text-base sm:text-lg hover:text-muted-teal transition-colors focus:outline-none focus:bg-slate-50"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle size={20} className="text-muted-teal shrink-0" />
                    <span>{faq.question}</span>
                  </span>
                  <ChevronDown
                    size={20}
                    className={`text-slate-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-muted-teal' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-navy-slate text-sm sm:text-base leading-relaxed border-t border-slate-100 pt-4 animate-fade-in">
                    <p className="pl-8 text-navy-muted">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

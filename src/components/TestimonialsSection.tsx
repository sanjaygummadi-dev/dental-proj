import React from 'react';
import { Star, Quote, CheckCircle } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/mockData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="inline-block px-3.5 py-1 rounded-full bg-mint-subtle text-muted-teal text-xs font-semibold uppercase tracking-wider">
            Patient Stories
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-dark">
            What Our Patients Say About Their Care
          </h2>
          <p className="text-base sm:text-lg text-navy-muted leading-relaxed">
            Real experiences from families and professionals who trust SmileCare Dental for comfortable, personalized care.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((t) => (
            <div
              key={t.id}
              className="p-8 rounded-3xl bg-warm-white border border-slate-200/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between relative"
            >
              <Quote className="absolute top-6 right-6 text-slate-200" size={32} />

              <div className="space-y-4 relative z-10">
                {/* Rating stars */}
                <div className="flex text-amber-400 gap-1">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>

                <p className="text-sm text-navy-slate leading-relaxed italic">
                  "{t.comment}"
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-200/60 flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-navy-dark text-base">
                    {t.patientName}
                  </h3>
                  <p className="text-xs text-navy-muted">
                    {t.location}
                  </p>
                </div>

                <div className="text-right">
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-teal-700 bg-teal-50 px-2.5 py-1 rounded-full">
                    <CheckCircle size={12} />
                    {t.treatment}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

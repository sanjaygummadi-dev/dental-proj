import React from 'react';
import { CalendarCheck, Stethoscope, FileText, Smile } from 'lucide-react';
import { PATIENT_JOURNEY_STEPS } from '../data/mockData';

interface PatientJourneyProps {
  onOpenBooking: () => void;
}

export const PatientJourney: React.FC<PatientJourneyProps> = ({ onOpenBooking }) => {
  const iconMap: Record<string, React.ReactNode> = {
    CalendarCheck: <CalendarCheck size={28} className="text-muted-teal" />,
    Stethoscope: <Stethoscope size={28} className="text-muted-teal" />,
    FileText: <FileText size={28} className="text-muted-teal" />,
    Smile: <Smile size={28} className="text-muted-teal" />
  };

  return (
    <section id="journey" className="py-16 lg:py-24 bg-gradient-to-b from-warm-white via-soft-blue/30 to-warm-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="inline-block px-3.5 py-1 rounded-full bg-mint-subtle text-muted-teal text-xs font-semibold uppercase tracking-wider">
            Patient Experience
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-dark">
            Your Seamless 4-Step Care Journey
          </h2>
          <p className="text-base sm:text-lg text-navy-muted leading-relaxed">
            We’ve structured every step of your dental visit to be calm, transparent, and completely pain-free.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-teal-200 via-teal-400 to-teal-200 -translate-y-12 -z-0" />

          {PATIENT_JOURNEY_STEPS.map((step) => (
            <div
              key={step.step}
              className="relative z-10 bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {/* Step Badge & Icon */}
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-mint-subtle group-hover:bg-muted-teal group-hover:text-white transition-colors flex items-center justify-center shadow-inner">
                    {iconMap[step.iconName]}
                  </div>

                  <span className="text-4xl font-extrabold text-slate-200 group-hover:text-teal-200 transition-colors">
                    0{step.step}
                  </span>
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-semibold text-muted-teal uppercase tracking-wider">
                    {step.subtitle}
                  </span>
                  <h3 className="text-xl font-bold text-navy-dark">
                    {step.title}
                  </h3>
                  <p className="text-sm text-navy-muted leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>

              {step.step === 1 && (
                <div className="pt-4 mt-4 border-t border-slate-100">
                  <button
                    onClick={onOpenBooking}
                    className="w-full py-2 rounded-xl bg-mint-subtle hover:bg-muted-teal hover:text-white text-muted-teal text-xs font-semibold transition-colors"
                  >
                    Start Step 1 Now
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

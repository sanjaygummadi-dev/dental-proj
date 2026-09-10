import React from 'react';
import { Scan, Laptop, Zap, ShieldAlert, Check } from 'lucide-react';
import { TECH_EQUIPMENT_DATA } from '../data/mockData';

export const TechnologySection: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    Scan: <Scan size={26} className="text-muted-teal" />,
    Laptop: <Laptop size={26} className="text-muted-teal" />,
    Zap: <Zap size={26} className="text-muted-teal" />,
    ShieldAlert: <ShieldAlert size={26} className="text-muted-teal" />
  };

  return (
    <section id="technology" className="py-16 lg:py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="inline-block px-3.5 py-1 rounded-full bg-mint-subtle text-muted-teal text-xs font-semibold uppercase tracking-wider">
            Modern Dental Technology
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-dark">
            Advanced Clinical Equipment & Hygiene Standards
          </h2>
          <p className="text-base sm:text-lg text-navy-muted leading-relaxed">
            We invest in gentle, low-impact diagnostic scanning and hospital-grade sterilization to make your dental care faster, safer, and more accurate.
          </p>
        </div>

        {/* Equipment Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TECH_EQUIPMENT_DATA.map((tech) => (
            <div
              key={tech.id}
              className="p-8 rounded-3xl bg-warm-white border border-slate-200/80 shadow-sm hover:shadow-md transition-all space-y-4"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-mint-subtle flex items-center justify-center shrink-0">
                  {iconMap[tech.iconName]}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-navy-dark">
                    {tech.title}
                  </h3>
                  <span className="text-xs font-medium text-muted-teal">
                    SmileCare Clinical Standard
                  </span>
                </div>
              </div>

              <p className="text-sm text-navy-slate leading-relaxed">
                {tech.description}
              </p>

              <div className="pt-3 border-t border-slate-200/60 flex items-start gap-2.5 text-xs sm:text-sm text-navy-muted">
                <div className="p-1 rounded-full bg-emerald-100 text-emerald-700 shrink-0 mt-0.5">
                  <Check size={12} />
                </div>
                <div>
                  <span className="font-semibold text-navy-dark">Patient Advantage: </span>
                  {tech.patientBenefit}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer Note */}
        <div className="mt-12 text-center text-xs text-navy-muted max-w-2xl mx-auto">
          Note: Diagnostic imagery and dental equipment choices are tailored to individual clinical requirements. We do not make unsupported medical guarantees.
        </div>

      </div>
    </section>
  );
};

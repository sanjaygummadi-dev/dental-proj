import React from 'react';
import { Award, Users, Cpu, HeartHandshake } from 'lucide-react';
import { TRUST_STATS } from '../data/mockData';

export const TrustSection: React.FC = () => {
  const icons = [Award, Users, Cpu, HeartHandshake];

  return (
    <section className="py-12 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {TRUST_STATS.map((stat, idx) => {
            const IconComponent = icons[idx % icons.length];
            return (
              <div
                key={stat.label}
                className="p-6 rounded-2xl bg-warm-white hover:bg-soft-blue/40 border border-slate-100 transition-all duration-300 group text-center sm:text-left flex flex-col sm:flex-row items-center sm:items-start gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-mint-subtle text-muted-teal flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <IconComponent size={24} />
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-navy-dark tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-sm font-semibold text-navy-slate mt-0.5">
                    {stat.label}
                  </div>
                  <div className="text-xs text-navy-muted mt-1 leading-snug">
                    {stat.subtext}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

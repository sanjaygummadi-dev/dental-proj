import React from 'react';
import {
  ShieldCheck,
  Sparkles,
  Smile,
  Sun,
  Layers,
  HeartHandshake,
  Activity,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import { SERVICES_DATA } from '../data/mockData';
import type { ServiceCategory } from '../types';

interface ServicesSectionProps {
  onSelectService: (service: ServiceCategory) => void;
  onBookService: (serviceId: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectService,
  onBookService
}) => {
  const iconMap: Record<string, React.ReactNode> = {
    ShieldCheck: <ShieldCheck size={24} className="text-muted-teal" />,
    Sparkles: <Sparkles size={24} className="text-muted-teal" />,
    Smile: <Smile size={24} className="text-muted-teal" />,
    Sun: <Sun size={24} className="text-muted-teal" />,
    Layers: <Layers size={24} className="text-muted-teal" />,
    HeartHandshake: <HeartHandshake size={24} className="text-muted-teal" />,
    Activity: <Activity size={24} className="text-muted-teal" />,
    CheckCircle2: <CheckCircle2 size={24} className="text-muted-teal" />
  };

  return (
    <section id="services" className="py-16 lg:py-24 bg-warm-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12 lg:mb-16">
          <span className="inline-block px-3.5 py-1 rounded-full bg-mint-subtle text-muted-teal text-xs font-semibold uppercase tracking-wider">
            Clinical Services
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-dark">
            Comprehensive Dental Services Designed Around You.
          </h2>
          <p className="text-base sm:text-lg text-navy-muted leading-relaxed">
            From gentle preventative care to advanced cosmetic and restorative procedures, we deliver personalized dental solutions under one roof.
          </p>
        </div>

        {/* Services Grid (8 Categories) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {/* Icon Container */}
                <div className="w-12 h-12 rounded-2xl bg-mint-subtle group-hover:bg-muted-teal text-muted-teal group-hover:text-white flex items-center justify-center transition-colors">
                  {iconMap[service.iconName] || <Smile size={24} />}
                </div>

                <h3 className="text-xl font-bold text-navy-dark group-hover:text-muted-teal transition-colors">
                  {service.title}
                </h3>

                <p className="text-sm text-navy-muted leading-relaxed line-clamp-3">
                  {service.shortDescription}
                </p>
              </div>

              {/* Action Link */}
              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => onSelectService(service)}
                  className="inline-flex items-center gap-1 text-sm font-semibold text-muted-teal hover:text-muted-teal-hover transition-colors"
                >
                  <span>Learn details</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => onBookService(service.id)}
                  className="text-xs px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-teal-50 text-slate-700 hover:text-teal-700 font-medium transition-colors"
                >
                  Book
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

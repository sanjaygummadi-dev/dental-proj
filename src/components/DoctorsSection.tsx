import React from 'react';
import { Award, Calendar, Info } from 'lucide-react';
import { DOCTORS_DATA } from '../data/mockData';
import type { Doctor } from '../types';

interface DoctorsSectionProps {
  onSelectDoctor: (doctor: Doctor) => void;
  onBookWithDoctor: (doctorName: string) => void;
}

export const DoctorsSection: React.FC<DoctorsSectionProps> = ({
  onSelectDoctor,
  onBookWithDoctor
}) => {
  return (
    <section id="doctors" className="py-16 lg:py-24 bg-warm-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-mint-subtle text-muted-teal text-xs font-semibold uppercase tracking-wider">
            <Award size={14} />
            <span>Dental Specialists</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-dark">
            Meet Our Senior Dental Team
          </h2>
          <p className="text-base sm:text-lg text-navy-muted leading-relaxed">
            Experienced, gentle specialists dedicated to comfortable patient care and evidence-based clinical practices in Hyderabad.
          </p>
        </div>

        {/* Doctors Grid (3 Doctors) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {DOCTORS_DATA.map((doctor) => (
            <div
              key={doctor.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Image Banner */}
                <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-navy-dark/80 backdrop-blur-md text-white text-[10px] font-semibold">
                    {doctor.experienceYears}+ Yrs Exp
                  </div>
                  
                  {/* Fictional Demo Tag */}
                  <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-sm text-navy-dark text-[10px] font-bold shadow border border-slate-100 flex items-center gap-1">
                    <Info size={12} className="text-teal-600" />
                    <span>Demo Profile</span>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-navy-dark group-hover:text-muted-teal transition-colors">
                      {doctor.name}
                    </h3>
                    <p className="text-xs font-semibold text-muted-teal mt-0.5">
                      {doctor.qualification}
                    </p>
                    <p className="text-xs font-medium text-navy-muted mt-1">
                      {doctor.specialization}
                    </p>
                  </div>

                  <p className="text-sm text-navy-slate leading-relaxed line-clamp-3">
                    {doctor.bio}
                  </p>

                  {/* Areas of Expertise Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {doctor.areasOfExpertise.slice(0, 3).map((area, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-lg bg-slate-100 text-navy-slate text-[11px] font-medium"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Actions Footer */}
              <div className="p-6 pt-0 space-y-2">
                <button
                  onClick={() => onSelectDoctor(doctor)}
                  className="w-full py-2.5 rounded-xl bg-warm-white hover:bg-slate-100 text-navy-slate hover:text-navy-dark text-xs font-semibold transition-colors border border-slate-200"
                >
                  View Full Profile & Credentials
                </button>

                <button
                  onClick={() => onBookWithDoctor(doctor.name)}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-xl bg-muted-teal hover:bg-muted-teal-hover text-white text-xs font-medium transition-colors shadow-sm"
                >
                  <Calendar size={14} />
                  <span>Book Consultation</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

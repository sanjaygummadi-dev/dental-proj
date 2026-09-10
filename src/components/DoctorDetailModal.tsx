import React from 'react';
import { X, Award, Calendar, CheckCircle2, ShieldCheck } from 'lucide-react';
import type { Doctor } from '../types';

interface DoctorDetailModalProps {
  doctor: Doctor | null;
  onClose: () => void;
  onBookWithDoctor: (doctorName: string) => void;
}

export const DoctorDetailModal: React.FC<DoctorDetailModalProps> = ({
  doctor,
  onClose,
  onBookWithDoctor
}) => {
  if (!doctor) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-dark/60 backdrop-blur-sm animate-fade-in">
      <div
        className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col border border-slate-100"
        role="dialog"
        aria-modal="true"
        aria-labelledby="doctor-modal-title"
      >
        {/* Header */}
        <div className="p-6 bg-gradient-to-r from-soft-blue to-warm-white border-b border-slate-200/80 flex items-start justify-between">
          <div className="flex items-center gap-4">
            <img
              src={doctor.image}
              alt={doctor.name}
              className="w-16 h-16 rounded-2xl object-cover border-2 border-white shadow-md"
            />
            <div>
              <div className="inline-block px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 text-[10px] font-bold uppercase tracking-wider mb-1">
                Demo Profile
              </div>
              <h2 id="doctor-modal-title" className="text-xl sm:text-2xl font-bold text-navy-dark">
                {doctor.name}
              </h2>
              <p className="text-xs sm:text-sm font-semibold text-muted-teal">
                {doctor.qualification}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-navy-dark hover:bg-white transition-colors"
            aria-label="Close modal"
          >
            <X size={22} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6 text-navy-slate text-sm leading-relaxed">
          {/* Specialization & Experience */}
          <div className="flex flex-wrap gap-4 p-4 rounded-2xl bg-warm-white border border-slate-100">
            <div className="flex items-center gap-2">
              <Award size={18} className="text-muted-teal" />
              <div>
                <p className="text-[11px] text-navy-muted">Specialization</p>
                <p className="font-semibold text-navy-dark">{doctor.specialization}</p>
              </div>
            </div>

            <div className="border-r border-slate-200" />

            <div className="flex items-center gap-2">
              <ShieldCheck size={18} className="text-muted-teal" />
              <div>
                <p className="text-[11px] text-navy-muted">Clinical Experience</p>
                <p className="font-semibold text-navy-dark">{doctor.experienceYears}+ Years Active Practice</p>
              </div>
            </div>
          </div>

          {/* Biography */}
          <div className="space-y-2">
            <h3 className="font-bold text-navy-dark text-base">Doctor Biography</h3>
            <p className="text-navy-muted leading-relaxed">{doctor.bio}</p>
          </div>

          {/* Areas of Expertise */}
          <div className="space-y-3">
            <h3 className="font-bold text-navy-dark text-base">Areas of Clinical Expertise</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {doctor.areasOfExpertise.map((area, idx) => (
                <div key={idx} className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                  <CheckCircle2 size={16} className="text-teal-600 shrink-0" />
                  <span className="font-medium text-navy-dark text-xs sm:text-sm">{area}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Fictional credentials tag */}
          <div className="text-[11px] text-slate-400 pt-2 border-t border-slate-100">
            Registration: {doctor.registrationNumber}
          </div>
        </div>

        {/* Action */}
        <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 text-navy-muted hover:text-navy-dark text-sm font-medium"
          >
            Close
          </button>

          <button
            onClick={() => {
              onClose();
              onBookWithDoctor(doctor.name);
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-muted-teal hover:bg-muted-teal-hover text-white text-sm font-medium shadow transition-colors"
          >
            <Calendar size={16} />
            <span>Book Consultation with {doctor.name.split(' ')[1]}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

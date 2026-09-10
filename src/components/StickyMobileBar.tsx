import React from 'react';
import { Phone, MessageCircle, Calendar } from 'lucide-react';
import { CLINIC_INFO } from '../data/mockData';

interface StickyMobileBarProps {
  onOpenBooking: () => void;
}

export const StickyMobileBar: React.FC<StickyMobileBarProps> = ({ onOpenBooking }) => {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200/80 px-3 py-2.5 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
      <div className="max-w-md mx-auto grid grid-cols-3 gap-2">
        <a
          href={`tel:${CLINIC_INFO.phone.replace(/\s+/g, '')}`}
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded-xl bg-slate-100 text-navy-dark hover:bg-slate-200 text-xs font-medium transition-colors"
          aria-label="Call Clinic"
        >
          <Phone size={16} className="text-navy-slate mb-0.5" />
          <span>Call</span>
        </a>

        <a
          href={`https://wa.me/${CLINIC_INFO.whatsapp.replace(/[^0-9]/g, '')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded-xl bg-emerald-50 text-emerald-800 hover:bg-emerald-100 text-xs font-medium transition-colors border border-emerald-200/50"
          aria-label="WhatsApp Inquiry"
        >
          <MessageCircle size={16} className="text-emerald-600 mb-0.5" />
          <span>WhatsApp</span>
        </a>

        <button
          onClick={onOpenBooking}
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded-xl bg-muted-teal text-white hover:bg-muted-teal-hover text-xs font-medium transition-colors shadow-sm"
          aria-label="Book Appointment"
        >
          <Calendar size={16} className="mb-0.5" />
          <span>Book</span>
        </button>
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { Sparkles, Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { CLINIC_INFO } from '../data/mockData';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenBooking }) => {
  const [legalModalContent, setLegalModalContent] = useState<'privacy' | 'terms' | null>(null);

  return (
    <>
      <footer className="bg-navy-dark text-white pt-16 pb-24 lg:pb-16 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
            
            {/* Col 1: Brand Info */}
            <div className="lg:col-span-4 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-muted-teal text-white flex items-center justify-center">
                  <Sparkles size={20} />
                </div>
                <div>
                  <span className="block font-bold text-lg leading-tight tracking-tight text-white">
                    SMILECARE
                  </span>
                  <span className="block text-[10px] font-medium text-teal-400 tracking-widest uppercase">
                    DENTAL CLINIC
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {CLINIC_INFO.tagline} {CLINIC_INFO.positioning}
              </p>

              <div className="pt-2 flex items-center gap-3 text-xs text-slate-300">
                <a
                  href={`https://wa.me/${CLINIC_INFO.whatsapp.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-800 hover:bg-teal-900 text-teal-300 transition-colors border border-slate-700"
                  aria-label="WhatsApp"
                >
                  <MessageCircle size={16} />
                </a>
                <a
                  href={`tel:${CLINIC_INFO.phone.replace(/\s+/g, '')}`}
                  className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors border border-slate-700"
                  aria-label="Phone Call"
                >
                  <Phone size={16} />
                </a>
                <a
                  href={`mailto:${CLINIC_INFO.email}`}
                  className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors border border-slate-700"
                  aria-label="Email Us"
                >
                  <Mail size={16} />
                </a>
              </div>
            </div>

            {/* Col 2: Services Links */}
            <div className="lg:col-span-3 space-y-3">
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
                Services
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                <li>
                  <button onClick={() => onNavigate('services')} className="hover:text-teal-300 transition-colors">
                    General Dentistry & Cleanings
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('services')} className="hover:text-teal-300 transition-colors">
                    Dental Implants & Restorations
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('services')} className="hover:text-teal-300 transition-colors">
                    Cosmetic Dentistry & Veneers
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('services')} className="hover:text-teal-300 transition-colors">
                    Orthodontics & Clear Aligners
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('services')} className="hover:text-teal-300 transition-colors">
                    Pediatric Dental Care
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('services')} className="hover:text-teal-300 transition-colors">
                    Painless Root Canal Therapy
                  </button>
                </li>
              </ul>
            </div>

            {/* Col 3: Navigation & Clinic */}
            <div className="lg:col-span-2 space-y-3">
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
                Quick Links
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                <li>
                  <button onClick={() => onNavigate('home')} className="hover:text-teal-300 transition-colors">
                    Home
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('doctors')} className="hover:text-teal-300 transition-colors">
                    Our Dentists
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('technology')} className="hover:text-teal-300 transition-colors">
                    Technology & Safety
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('journey')} className="hover:text-teal-300 transition-colors">
                    Patient Journey
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('faq')} className="hover:text-teal-300 transition-colors">
                    FAQ
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('contact')} className="hover:text-teal-300 transition-colors">
                    Contact Us
                  </button>
                </li>
              </ul>
            </div>

            {/* Col 4: Location & Hours */}
            <div className="lg:col-span-3 space-y-3">
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
                Clinic Location
              </h3>
              <div className="space-y-2 text-xs text-slate-300">
                <p className="flex items-start gap-2">
                  <MapPin size={16} className="text-teal-400 shrink-0 mt-0.5" />
                  <span>{CLINIC_INFO.address}</span>
                </p>
                <p className="pt-2 text-slate-400">
                  {CLINIC_INFO.hours.weekdays}
                </p>
                <p className="text-slate-400">
                  {CLINIC_INFO.hours.sunday}
                </p>
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenBooking}
                  className="w-full py-2.5 rounded-xl bg-teal-700 hover:bg-teal-600 text-white text-xs font-semibold transition-colors"
                >
                  Book an Appointment
                </button>
              </div>
            </div>

          </div>

          {/* Bottom Legal Bar */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
            <p>© {new Date().getFullYear()} SmileCare Dental Clinic. All Rights Reserved.</p>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setLegalModalContent('privacy')}
                className="hover:text-slate-200 transition-colors"
              >
                Privacy Policy
              </button>
              <span className="text-slate-700">•</span>
              <button
                onClick={() => setLegalModalContent('terms')}
                className="hover:text-slate-200 transition-colors"
              >
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Accessible Privacy / Terms Dialog Modal */}
      {legalModalContent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-dark/70 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-3xl p-6 max-w-lg w-full text-navy-dark space-y-4 border border-slate-200 shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="font-bold text-lg">
                {legalModalContent === 'privacy' ? 'Privacy Policy' : 'Terms of Service'}
              </h3>
              <button
                onClick={() => setLegalModalContent(null)}
                className="p-1 rounded-lg text-slate-400 hover:text-navy-dark"
              >
                ×
              </button>
            </div>
            <div className="text-xs text-navy-slate space-y-3 leading-relaxed max-h-60 overflow-y-auto pr-2">
              {legalModalContent === 'privacy' ? (
                <>
                  <p>SmileCare Dental respects patient privacy and handles all personal information in accordance with medical ethics and Indian data protection standards.</p>
                  <p>Contact information collected during online booking is strictly used to schedule and confirm your clinical appointment. We do not sell or share patient data with third parties.</p>
                </>
              ) : (
                <>
                  <p>Information on this website is for educational and appointment scheduling purposes only and does not constitute formal medical diagnosis.</p>
                  <p>Final treatment recommendations are provided by qualified dental surgeons following in-person examination.</p>
                </>
              )}
            </div>
            <div className="pt-2 text-right">
              <button
                onClick={() => setLegalModalContent(null)}
                className="px-4 py-2 rounded-xl bg-navy-dark text-white text-xs font-semibold"
              >
                Close Notice
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

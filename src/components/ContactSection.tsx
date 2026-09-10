import React from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle, Calendar, ExternalLink, Navigation } from 'lucide-react';
import { CLINIC_INFO } from '../data/mockData';

interface ContactSectionProps {
  onOpenBooking: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="contact" className="py-16 lg:py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="inline-block px-3.5 py-1 rounded-full bg-mint-subtle text-muted-teal text-xs font-semibold uppercase tracking-wider">
            Visit SmileCare Dental
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-dark">
            Convenient Location & Easy Reach
          </h2>
          <p className="text-base sm:text-lg text-navy-muted leading-relaxed">
            Located in Jubilee Hills, Hyderabad. We offer reserved parking, accessible entrance, and prompt assistance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Address & Hours Card */}
            <div className="p-6 rounded-3xl bg-warm-white border border-slate-200/80 shadow-sm space-y-6">
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-mint-subtle text-muted-teal flex items-center justify-center shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-navy-dark text-base">Clinic Address</h3>
                  <p className="text-sm text-navy-muted mt-1 leading-relaxed">
                    {CLINIC_INFO.address}
                  </p>
                </div>
              </div>

              <div className="border-t border-slate-200/60 pt-4 flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-mint-subtle text-muted-teal flex items-center justify-center shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-navy-dark text-base">Opening Hours</h3>
                  <p className="text-xs sm:text-sm text-navy-muted mt-1 font-medium">
                    {CLINIC_INFO.hours.weekdays}
                  </p>
                  <p className="text-xs sm:text-sm text-navy-muted">
                    {CLINIC_INFO.hours.sunday}
                  </p>
                </div>
              </div>

              <div className="border-t border-slate-200/60 pt-4 flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-mint-subtle text-muted-teal flex items-center justify-center shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-navy-dark text-base">Phone & Emergency</h3>
                  <p className="text-sm font-semibold text-navy-dark mt-1">
                    {CLINIC_INFO.phone}
                  </p>
                  <p className="text-xs text-navy-muted">
                    {CLINIC_INFO.hours.emergency}
                  </p>
                </div>
              </div>

              <div className="border-t border-slate-200/60 pt-4 flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-mint-subtle text-muted-teal flex items-center justify-center shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-navy-dark text-base">Email Inquiries</h3>
                  <p className="text-sm text-navy-slate mt-1 font-medium">
                    {CLINIC_INFO.email}
                  </p>
                </div>
              </div>

            </div>

            {/* Quick Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href={`https://wa.me/${CLINIC_INFO.whatsapp.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 p-3.5 rounded-2xl bg-emerald-50 text-emerald-800 hover:bg-emerald-100 font-semibold text-sm transition-colors border border-emerald-200/60 shadow-sm"
              >
                <MessageCircle size={18} className="text-emerald-600" />
                <span>WhatsApp Inquiry</span>
              </a>

              <button
                onClick={onOpenBooking}
                className="flex items-center justify-center gap-2 p-3.5 rounded-2xl bg-muted-teal text-white hover:bg-muted-teal-hover font-semibold text-sm transition-colors shadow-sm"
              >
                <Calendar size={18} />
                <span>Book Appointment</span>
              </button>
            </div>

          </div>

          {/* Right Column: Simulated Interactive Map */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl overflow-hidden border border-slate-200/80 shadow-md bg-slate-100 h-[480px] flex flex-col justify-between p-6 group">
              
              {/* Map Canvas Background (Simulated high-end vector map layout) */}
              <div className="absolute inset-0 bg-[#e5e9ec] flex items-center justify-center opacity-90 pointer-events-none">
                <div className="w-full h-full relative overflow-hidden">
                  {/* Grid lines */}
                  <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] opacity-40" />
                  {/* Road graphics simulation */}
                  <div className="absolute top-1/2 left-0 right-0 h-12 bg-slate-300/60 -rotate-6 transform translate-y-4" />
                  <div className="absolute top-0 bottom-0 left-1/3 w-16 bg-slate-300/50 rotate-12" />
                </div>
              </div>

              {/* Top map controls header */}
              <div className="relative z-10 flex items-center justify-between bg-white/90 backdrop-blur-md p-3 rounded-2xl border border-white/60 shadow-sm">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-teal-600 text-white flex items-center justify-center">
                    <Navigation size={16} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-navy-dark">SmileCare Dental Jubilee Hills</p>
                    <p className="text-[10px] text-slate-500">Road No. 36 • Metro Pillar 1650</p>
                  </div>
                </div>

                <a
                  href={`https://maps.google.com/?q=${CLINIC_INFO.mapCoordinates.lat},${CLINIC_INFO.mapCoordinates.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-navy-dark text-xs font-semibold inline-flex items-center gap-1 transition-colors"
                >
                  <span>Open Maps</span>
                  <ExternalLink size={12} />
                </a>
              </div>

              {/* Center Location Pin */}
              <div className="relative z-10 mx-auto text-center my-auto flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-muted-teal text-white flex items-center justify-center shadow-xl ring-8 ring-teal-500/20 animate-bounce">
                  <MapPin size={30} />
                </div>
                <div className="mt-3 px-4 py-2 rounded-2xl bg-navy-dark text-white text-xs font-semibold shadow-lg border border-slate-700">
                  SmileCare Dental Clinic • Jubilee Hills
                </div>
              </div>

              {/* Bottom Quick Directions Footer */}
              <div className="relative z-10 bg-white/90 backdrop-blur-md p-4 rounded-2xl border border-white/60 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-navy-slate">
                <span>📍 Nearby Landmarks: Near Jubilee Hills Checkpost Metro Station</span>
                <span className="font-semibold text-teal-700 bg-teal-50 px-2.5 py-1 rounded-lg">
                  Free Valet Parking Available
                </span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

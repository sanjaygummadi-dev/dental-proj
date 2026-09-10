import React from 'react';
import { Calendar, ChevronRight, ShieldCheck, Star, Award, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onExploreServices }) => {
  return (
    <section id="home" className="relative pt-8 pb-16 lg:pt-14 lg:pb-24 overflow-hidden bg-gradient-to-b from-warm-white via-soft-blue-light/50 to-warm-white">
      {/* Decorative ambient subtle mint glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-mint-subtle/50 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Top pill badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-mint-subtle border border-teal-200/60 text-muted-teal text-xs font-semibold uppercase tracking-wider">
              <ShieldCheck size={14} className="text-muted-teal" />
              <span>Patient-First Dental Care in Jubilee Hills</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-navy-dark leading-[1.15]">
              Confident Smiles Start With <span className="text-muted-teal underline decoration-teal-300/60 underline-offset-4">Better Care.</span>
            </h1>

            {/* Supporting Text */}
            <p className="text-lg sm:text-xl text-navy-muted max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Personalized dental care for healthier smiles, delivered with modern technology and a patient-first approach.
            </p>

            {/* Feature Bullets */}
            <div className="pt-2 pb-2 flex flex-wrap justify-center lg:justify-start gap-y-2.5 gap-x-6 text-sm text-navy-slate font-medium">
              <span className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-teal-600" />
                No-Wait Digital Booking
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-teal-600" />
                Pain-Free Techniques
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-teal-600" />
                15+ Years Experience
              </span>
            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-muted-teal hover:bg-muted-teal-hover text-white font-medium text-base shadow-md shadow-teal-900/10 hover:shadow-lg hover:-translate-y-0.5 transition-all"
              >
                <Calendar size={18} />
                <span>Book an Appointment</span>
              </button>

              <button
                onClick={onExploreServices}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-navy-dark border border-slate-200 text-base font-medium transition-all hover:border-slate-300"
              >
                <span>Explore Services</span>
                <ChevronRight size={18} className="text-slate-400" />
              </button>
            </div>

            {/* Quick Rating Proof */}
            <div className="pt-4 flex items-center justify-center lg:justify-start gap-3 text-xs text-navy-muted">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={15} fill="currentColor" />
                ))}
              </div>
              <span className="font-medium text-navy-slate">4.9 / 5 Rating</span>
              <span className="text-slate-300">•</span>
              <span>Based on 800+ Patient Reviews in Hyderabad</span>
            </div>

          </div>

          {/* Right Column: Imagery & Visual Highlights */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Clinic Photography Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 aspect-[4/3] lg:aspect-[1/1] group">
                <img
                  src={`${import.meta.env.BASE_URL}images/hero_clinic.jpg`}
                  alt="SmileCare Dental Clinic Interior & Treatment Care"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />

                {/* Subtle Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/40 via-transparent to-transparent pointer-events-none" />

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-2xl glass-panel border border-white/40 shadow-lg flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-teal-500/20 text-teal-700 flex items-center justify-center">
                      <Award size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-navy-dark">Modern Care Suite</p>
                      <p className="text-[11px] text-slate-600">State-of-the-Art Facility • Jubilee Hills</p>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-semibold">
                    Sterile Standard
                  </span>
                </div>
              </div>

              {/* Floating Badge top-right */}
              <div className="hidden sm:flex absolute -top-4 -right-4 p-3 rounded-2xl bg-white shadow-xl border border-slate-100 items-center gap-3 animate-float">
                <div className="w-10 h-10 rounded-xl bg-mint-subtle text-muted-teal flex items-center justify-center font-bold text-lg">
                  15+
                </div>
                <div>
                  <p className="text-xs font-bold text-navy-dark">Years Excellence</p>
                  <p className="text-[11px] text-slate-500">Trusted Dentistry</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

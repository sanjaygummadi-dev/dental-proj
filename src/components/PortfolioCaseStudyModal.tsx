import React, { useState } from 'react';
import { X, Layers, Layout, Smartphone, CheckCircle, Code, ShieldCheck, Sparkles, ArrowRight } from 'lucide-react';

interface PortfolioCaseStudyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PortfolioCaseStudyModal: React.FC<PortfolioCaseStudyModalProps> = ({
  isOpen,
  onClose
}) => {
  const [activeTab, setActiveTab] = useState<'strategy' | 'ia' | 'flow' | 'tech'>('strategy');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-dark/70 backdrop-blur-md animate-fade-in">
      <div
        className="bg-white w-full max-w-4xl rounded-3xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col border border-slate-100"
        role="dialog"
        aria-modal="true"
        aria-labelledby="case-study-modal-title"
      >
        {/* Header */}
        <div className="p-6 bg-gradient-to-r from-navy-dark to-slate-900 text-white flex items-start justify-between">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 text-xs font-semibold uppercase tracking-wider">
              <Sparkles size={13} />
              <span>UX & Engineering Case Study</span>
            </div>
            <h2 id="case-study-modal-title" className="text-2xl font-bold text-white">
              SmileCare Dental — Digital Product Architecture
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              Transforming patient anxiety into trust and driving appointment conversions.
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X size={22} />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-slate-200 bg-slate-50 px-6 gap-2 overflow-x-auto text-sm font-medium">
          {[
            { id: 'strategy', label: 'Problem & UX Strategy', icon: Layout },
            { id: 'ia', label: 'Information Architecture', icon: Layers },
            { id: 'flow', label: 'Appointment Conversion Flow', icon: Smartphone },
            { id: 'tech', label: 'Frontend Stack & Performance', icon: Code },
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`py-3 px-4 border-b-2 transition-colors flex items-center gap-2 whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'border-muted-teal text-muted-teal font-semibold bg-white'
                    : 'border-transparent text-navy-muted hover:text-navy-dark'
                }`}
              >
                <Icon size={16} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Body Content */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6 text-navy-slate text-sm sm:text-base leading-relaxed">
          
          {activeTab === 'strategy' && (
            <div className="space-y-6 animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-5 rounded-2xl bg-red-50/50 border border-red-100 space-y-2">
                  <h3 className="font-bold text-red-900 text-lg">The Problem</h3>
                  <p className="text-xs sm:text-sm text-red-950/80 leading-relaxed">
                    Patients seeking dental care often experience anxiety, clinical confusion regarding service options, and friction when trying to schedule appointments online. Generic corporate sites overload users with medical jargon.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-emerald-50/50 border border-emerald-100 space-y-2">
                  <h3 className="font-bold text-emerald-900 text-lg">The UX Solution</h3>
                  <p className="text-xs sm:text-sm text-emerald-950/80 leading-relaxed">
                    A calm, reassuring digital experience with warm natural photography, progressive service detail discovery, explicit transparent consultation flows, and multi-channel appointment CTAs (Web, Phone, WhatsApp).
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-bold text-navy-dark text-base">Key Brand Positioning Principles</h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-4 rounded-xl bg-warm-white border border-slate-200">
                    <h5 className="font-semibold text-navy-dark text-sm mb-1">Visual Restraint</h5>
                    <p className="text-xs text-navy-muted">Warm white backgrounds, muted teal accents, avoiding cold hospital-blue overload.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-warm-white border border-slate-200">
                    <h5 className="font-semibold text-navy-dark text-sm mb-1">Doctor Trust</h5>
                    <p className="text-xs text-navy-muted">Transparent credentials, experience tags, and approachable specialist profiles.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-warm-white border border-slate-200">
                    <h5 className="font-semibold text-navy-dark text-sm mb-1">Empathetic Tone</h5>
                    <p className="text-xs text-navy-muted">Clear clinical explanations without making unsupported medical guarantees.</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'ia' && (
            <div className="space-y-6 animate-fade-in">
              <h3 className="font-bold text-navy-dark text-lg">Information Architecture & Navigation Flow</h3>
              <p className="text-xs sm:text-sm text-navy-muted">
                Structured to guide users smoothly from initial hero value proposition to doctor credentials and appointment booking.
              </p>

              <div className="p-6 rounded-2xl bg-warm-white border border-slate-200 space-y-4">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-semibold text-navy-dark">
                  <div className="p-3 rounded-xl bg-white border border-slate-300 w-full text-center shadow-sm">1. Hero & Trust Proof</div>
                  <ArrowRight size={18} className="text-muted-teal shrink-0 rotate-90 sm:rotate-0" />
                  <div className="p-3 rounded-xl bg-white border border-slate-300 w-full text-center shadow-sm">2. 8 Service Categories</div>
                  <ArrowRight size={18} className="text-muted-teal shrink-0 rotate-90 sm:rotate-0" />
                  <div className="p-3 rounded-xl bg-white border border-slate-300 w-full text-center shadow-sm">3. 4-Step Patient Journey</div>
                  <ArrowRight size={18} className="text-muted-teal shrink-0 rotate-90 sm:rotate-0" />
                  <div className="p-3 rounded-xl bg-muted-teal text-white w-full text-center shadow-sm">4. Appointment Booking</div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <h4 className="font-semibold text-navy-dark text-sm">Primary Navigation Goal</h4>
                  <p className="text-xs text-navy-muted">Generate qualified appointment requests with flexible preferred dates and time slots.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <h4 className="font-semibold text-navy-dark text-sm">Secondary Navigation Goal</h4>
                  <p className="text-xs text-navy-muted">Enable one-tap phone calls, instant WhatsApp chats, and Google Maps location discovery.</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'flow' && (
            <div className="space-y-6 animate-fade-in">
              <h3 className="font-bold text-navy-dark text-lg">Optimized Conversion Mechanics</h3>

              <div className="space-y-3">
                <div className="flex items-start gap-3 p-4 rounded-2xl bg-warm-white border border-slate-200">
                  <CheckCircle size={20} className="text-muted-teal shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-navy-dark text-sm">Sticky Mobile Action Bar</h4>
                    <p className="text-xs text-navy-muted mt-0.5">Fixed bottom bar on mobile viewports providing instant Call, WhatsApp, and Booking triggers without obstructing content.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-2xl bg-warm-white border border-slate-200">
                  <CheckCircle size={20} className="text-muted-teal shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-navy-dark text-sm">Pre-filled Service Context</h4>
                    <p className="text-xs text-navy-muted mt-0.5">Clicking "Book" from any service detail modal automatically pre-selects that specific service in the booking form.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-2xl bg-warm-white border border-slate-200">
                  <CheckCircle size={20} className="text-muted-teal shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-navy-dark text-sm">Honest Feedback States</h4>
                    <p className="text-xs text-navy-muted mt-0.5">Validates form fields gracefully and explicitly informs patients that front-desk contact will finalize the time slot.</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'tech' && (
            <div className="space-y-6 animate-fade-in">
              <h3 className="font-bold text-navy-dark text-lg">Engineering Stack & Accessibility Standards</h3>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="font-bold text-navy-dark text-base">React 19</div>
                  <div className="text-[11px] text-navy-muted">UI Library</div>
                </div>
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="font-bold text-navy-dark text-base">TypeScript</div>
                  <div className="text-[11px] text-navy-muted">Type Safety</div>
                </div>
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="font-bold text-navy-dark text-base">Tailwind CSS</div>
                  <div className="text-[11px] text-navy-muted">Utility Styling</div>
                </div>
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="font-bold text-navy-dark text-base">Vite</div>
                  <div className="text-[11px] text-navy-muted">Fast Build Tool</div>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-warm-white border border-slate-200 space-y-2">
                <div className="flex items-center gap-2 font-bold text-navy-dark text-sm">
                  <ShieldCheck size={18} className="text-teal-600" />
                  <span>Healthcare Accessibility Compliance</span>
                </div>
                <ul className="text-xs text-navy-muted space-y-1.5 list-disc pl-5">
                  <li>WCAG AA contrast ratios with dark navy typography (`#121C2B`) on warm white background (`#FAF9F6`).</li>
                  <li>Distinct focus-visible rings (`2px #2B7A78`) for all buttons and inputs.</li>
                  <li>Semantic HTML5 elements with aria-expanded and aria-modal modal dialog support.</li>
                </ul>
              </div>
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
          <span className="text-xs text-slate-500">SmileCare Dental • Portfolio Project Showcase</span>
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl bg-navy-dark hover:bg-slate-800 text-white text-sm font-medium transition-colors"
          >
            Close Case Study
          </button>
        </div>

      </div>
    </div>
  );
};

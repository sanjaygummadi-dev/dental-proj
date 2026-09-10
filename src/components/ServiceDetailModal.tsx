import React, { useState } from 'react';
import { X, Calendar, CheckCircle, HelpCircle, ArrowRight, Shield } from 'lucide-react';
import type { ServiceCategory } from '../types';

interface ServiceDetailModalProps {
  service: ServiceCategory | null;
  onClose: () => void;
  onBookService: (serviceId: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onBookService
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'benefits' | 'process' | 'faqs'>('overview');

  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-dark/60 backdrop-blur-sm animate-fade-in">
      <div
        className="bg-white w-full max-w-3xl rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col border border-slate-100"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Header */}
        <div className="p-6 bg-gradient-to-r from-soft-blue to-warm-white border-b border-slate-200/80 flex items-start justify-between">
          <div className="space-y-1">
            <span className="inline-block px-2.5 py-0.5 rounded-full bg-mint-subtle text-muted-teal text-xs font-semibold uppercase tracking-wider">
              {service.category} Clinical Service
            </span>
            <h2 id="modal-title" className="text-2xl font-bold text-navy-dark">
              {service.title}
            </h2>
            <p className="text-sm text-navy-muted">
              SmileCare Dental • Hyderabad, Telangana
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-navy-dark hover:bg-white transition-colors"
            aria-label="Close modal"
          >
            <X size={22} />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b border-slate-200 bg-slate-50 px-6 gap-2 overflow-x-auto text-sm font-medium">
          {[
            { id: 'overview', label: 'Overview' },
            { id: 'benefits', label: 'Key Benefits' },
            { id: 'process', label: 'Treatment Process' },
            { id: 'faqs', label: 'Service FAQs' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`py-3 px-4 border-b-2 transition-colors whitespace-nowrap ${
                activeTab === tab.id
                  ? 'border-muted-teal text-muted-teal font-semibold bg-white'
                  : 'border-transparent text-navy-muted hover:text-navy-dark'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-navy-slate text-sm sm:text-base leading-relaxed">
          {activeTab === 'overview' && (
            <div className="space-y-6 animate-fade-in">
              <div>
                <h3 className="text-lg font-semibold text-navy-dark mb-2">Clinical Overview</h3>
                <p className="text-navy-muted">{service.overview}</p>
              </div>

              <div className="p-4 rounded-2xl bg-warm-white border border-slate-200/80 space-y-2">
                <div className="flex items-center gap-2 text-muted-teal font-semibold text-sm">
                  <Shield size={18} />
                  <span>Expected Consultation Flow</span>
                </div>
                <p className="text-xs sm:text-sm text-navy-slate leading-relaxed">
                  {service.consultationFlow}
                </p>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-navy-dark mb-3">Highlights</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {service.benefits.map((b, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-navy-slate">
                      <CheckCircle size={16} className="text-teal-600 shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'benefits' && (
            <div className="space-y-4 animate-fade-in">
              <h3 className="text-lg font-semibold text-navy-dark">Patient Benefits & Comfort</h3>
              <ul className="space-y-3">
                {service.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-warm-white border border-slate-100">
                    <CheckCircle size={18} className="text-muted-teal shrink-0 mt-0.5" />
                    <span className="text-navy-slate font-medium text-sm">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {activeTab === 'process' && (
            <div className="space-y-6 animate-fade-in">
              <h3 className="text-lg font-semibold text-navy-dark">Step-by-Step Treatment Procedure</h3>
              <div className="space-y-4">
                {service.processSteps.map((step) => (
                  <div key={step.stepNumber} className="flex items-start gap-4 p-4 rounded-2xl bg-warm-white border border-slate-100">
                    <div className="w-8 h-8 rounded-full bg-muted-teal text-white flex items-center justify-center font-bold text-sm shrink-0">
                      {step.stepNumber}
                    </div>
                    <div>
                      <h4 className="font-semibold text-navy-dark text-sm sm:text-base">{step.title}</h4>
                      <p className="text-xs sm:text-sm text-navy-muted mt-1">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'faqs' && (
            <div className="space-y-4 animate-fade-in">
              <h3 className="text-lg font-semibold text-navy-dark">Frequently Asked Questions</h3>
              <div className="space-y-3">
                {service.faqs.map((faq, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-warm-white border border-slate-100 space-y-1">
                    <div className="flex items-center gap-2 text-navy-dark font-medium text-sm sm:text-base">
                      <HelpCircle size={16} className="text-muted-teal shrink-0" />
                      <span>{faq.question}</span>
                    </div>
                    <p className="text-xs sm:text-sm text-navy-muted pl-6">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Clinical Disclaimer Notice */}
          <div className="pt-2 text-[11px] text-slate-500 italic bg-slate-50 p-3 rounded-xl border border-slate-200">
            * SmileCare Dental ensures evidence-based clinical practices. Final treatment suitability is determined after personal diagnosis during your clinical consultation.
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-navy-muted hover:text-navy-dark text-sm font-medium"
          >
            Close
          </button>

          <button
            onClick={() => {
              onClose();
              onBookService(service.id);
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-muted-teal hover:bg-muted-teal-hover text-white text-sm font-medium shadow transition-colors"
          >
            <Calendar size={16} />
            <span>Book Appointment for {service.title}</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, User, Phone, Mail, FileText, CheckCircle2, AlertCircle, Info } from 'lucide-react';
import { SERVICES_DATA, DOCTORS_DATA } from '../data/mockData';
import type { AppointmentFormData } from '../types';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialServiceId?: string;
  initialDoctorName?: string;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  initialServiceId = '',
  initialDoctorName = ''
}) => {
  const [formData, setFormData] = useState<AppointmentFormData>({
    fullName: '',
    phone: '',
    email: '',
    preferredDate: '',
    preferredTime: '10:00 AM',
    serviceId: initialServiceId || SERVICES_DATA[0].id,
    patientType: 'new',
    message: ''
  });

  const [selectedDoctor, setSelectedDoctor] = useState<string>(initialDoctorName);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (initialServiceId) {
      setFormData((prev) => ({ ...prev, serviceId: initialServiceId }));
    }
    if (initialDoctorName) {
      setSelectedDoctor(initialDoctorName);
    }
  }, [initialServiceId, initialDoctorName]);

  if (!isOpen) return null;

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[0-9+\s-]{8,15}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.preferredDate) {
      newErrors.preferredDate = 'Please select a preferred date';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate standard frontend processing delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 800);
  };

  const handleReset = () => {
    setIsSuccess(false);
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      preferredDate: '',
      preferredTime: '10:00 AM',
      serviceId: SERVICES_DATA[0].id,
      patientType: 'new',
      message: ''
    });
    setErrors({});
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-dark/60 backdrop-blur-sm animate-fade-in">
      <div
        className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col border border-slate-100"
        role="dialog"
        aria-modal="true"
        aria-labelledby="booking-modal-title"
      >
        {/* Header */}
        <div className="p-6 bg-gradient-to-r from-soft-blue to-warm-white border-b border-slate-200/80 flex items-start justify-between">
          <div>
            <span className="inline-block px-2.5 py-0.5 rounded-full bg-mint-subtle text-muted-teal text-xs font-semibold uppercase tracking-wider mb-1">
              SmileCare Dental • Hyderabad
            </span>
            <h2 id="booking-modal-title" className="text-2xl font-bold text-navy-dark">
              Request an Appointment
            </h2>
            <p className="text-xs sm:text-sm text-navy-muted">
              Select your preferred time and our front desk will contact you to confirm availability.
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

        {/* Content */}
        <div className="p-6 overflow-y-auto flex-1">
          {isSuccess ? (
            <div className="text-center py-8 space-y-6 animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 size={36} />
              </div>

              <div className="space-y-2 max-w-md mx-auto">
                <h3 className="text-2xl font-bold text-navy-dark">
                  Appointment Request Received!
                </h3>
                <p className="text-sm text-navy-muted leading-relaxed">
                  Thank you, <span className="font-semibold text-navy-dark">{formData.fullName}</span>. We have logged your request for <span className="font-semibold text-navy-dark">{formData.preferredDate}</span> at <span className="font-semibold text-navy-dark">{formData.preferredTime}</span>.
                </p>
              </div>

              {/* Explicit requirement notice */}
              <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200/80 text-left text-xs text-amber-900 space-y-1.5 max-w-md mx-auto">
                <div className="flex items-center gap-1.5 font-bold text-amber-950">
                  <Info size={16} />
                  <span>Important Note (Demo Request State):</span>
                </div>
                <p>
                  This is a demonstration booking interface. Your request has been queued in front-end state. Our clinic front desk will reach out via Phone/WhatsApp to finalize exact scheduling before official confirmation.
                </p>
              </div>

              <div className="pt-4 flex justify-center">
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 rounded-xl bg-muted-teal text-white text-sm font-medium hover:bg-muted-teal-hover transition-colors"
                >
                  Done & Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Patient Type selection */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-navy-muted mb-2">
                  Patient Status
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, patientType: 'new' })}
                    className={`py-2.5 px-4 rounded-xl text-xs sm:text-sm font-medium border transition-colors ${
                      formData.patientType === 'new'
                        ? 'bg-mint-subtle text-muted-teal border-muted-teal font-semibold'
                        : 'bg-warm-white text-navy-slate border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    I am a New Patient
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, patientType: 'existing' })}
                    className={`py-2.5 px-4 rounded-xl text-xs sm:text-sm font-medium border transition-colors ${
                      formData.patientType === 'existing'
                        ? 'bg-mint-subtle text-muted-teal border-muted-teal font-semibold'
                        : 'bg-warm-white text-navy-slate border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    Existing SmileCare Patient
                  </button>
                </div>
              </div>

              {/* Full Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="fullName" className="block text-xs font-semibold text-navy-dark mb-1">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      id="fullName"
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Ramesh Kumar"
                      className={`w-full pl-10 pr-3 py-2.5 rounded-xl border text-sm text-navy-dark placeholder:text-slate-400 focus:bg-white ${
                        errors.fullName ? 'border-red-500 bg-red-50/20' : 'border-slate-200 bg-warm-white'
                      }`}
                    />
                  </div>
                  {errors.fullName && (
                    <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                      <AlertCircle size={12} /> {errors.fullName}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-xs font-semibold text-navy-dark mb-1">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className={`w-full pl-10 pr-3 py-2.5 rounded-xl border text-sm text-navy-dark placeholder:text-slate-400 focus:bg-white ${
                        errors.phone ? 'border-red-500 bg-red-50/20' : 'border-slate-200 bg-warm-white'
                      }`}
                    />
                  </div>
                  {errors.phone && (
                    <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                      <AlertCircle size={12} /> {errors.phone}
                    </p>
                  )}
                </div>
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-xs font-semibold text-navy-dark mb-1">
                  Email Address (Optional)
                </label>
                <div className="relative">
                  <Mail size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="ramesh@example.com"
                    className={`w-full pl-10 pr-3 py-2.5 rounded-xl border text-sm text-navy-dark placeholder:text-slate-400 focus:bg-white ${
                      errors.email ? 'border-red-500 bg-red-50/20' : 'border-slate-200 bg-warm-white'
                    }`}
                  />
                </div>
                {errors.email && (
                  <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                    <AlertCircle size={12} /> {errors.email}
                  </p>
                )}
              </div>

              {/* Service Selection */}
              <div>
                <label htmlFor="serviceId" className="block text-xs font-semibold text-navy-dark mb-1">
                  Select Clinical Service
                </label>
                <select
                  id="serviceId"
                  value={formData.serviceId}
                  onChange={(e) => setFormData({ ...formData, serviceId: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-xl border border-slate-200 bg-warm-white text-sm text-navy-dark focus:bg-white"
                >
                  {SERVICES_DATA.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.title}
                    </option>
                  ))}
                </select>
              </div>

              {/* Preferred Doctor selection if any */}
              <div>
                <label htmlFor="doctorSelect" className="block text-xs font-semibold text-navy-dark mb-1">
                  Preferred Specialist (Optional)
                </label>
                <select
                  id="doctorSelect"
                  value={selectedDoctor}
                  onChange={(e) => setSelectedDoctor(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl border border-slate-200 bg-warm-white text-sm text-navy-dark focus:bg-white"
                >
                  <option value="">Any Available Specialist</option>
                  {DOCTORS_DATA.map((doc) => (
                    <option key={doc.id} value={doc.name}>
                      {doc.name} — {doc.specialization}
                    </option>
                  ))}
                </select>
              </div>

              {/* Preferred Date & Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="preferredDate" className="block text-xs font-semibold text-navy-dark mb-1">
                    Preferred Date *
                  </label>
                  <div className="relative">
                    <Calendar size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      id="preferredDate"
                      type="date"
                      min={new Date().toISOString().split('T')[0]}
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className={`w-full pl-10 pr-3 py-2.5 rounded-xl border text-sm text-navy-dark focus:bg-white ${
                        errors.preferredDate ? 'border-red-500 bg-red-50/20' : 'border-slate-200 bg-warm-white'
                      }`}
                    />
                  </div>
                  {errors.preferredDate && (
                    <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                      <AlertCircle size={12} /> {errors.preferredDate}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="preferredTime" className="block text-xs font-semibold text-navy-dark mb-1">
                    Preferred Slot
                  </label>
                  <div className="relative">
                    <Clock size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    <select
                      id="preferredTime"
                      value={formData.preferredTime}
                      onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                      className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-slate-200 bg-warm-white text-sm text-navy-dark focus:bg-white"
                    >
                      <option value="09:30 AM">Morning: 09:30 AM</option>
                      <option value="11:30 AM">Morning: 11:30 AM</option>
                      <option value="02:30 PM">Afternoon: 02:30 PM</option>
                      <option value="04:30 PM">Evening: 04:30 PM</option>
                      <option value="06:30 PM">Evening: 06:30 PM</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Message / Symptoms */}
              <div>
                <label htmlFor="message" className="block text-xs font-semibold text-navy-dark mb-1">
                  Message or Specific Concerns (Optional)
                </label>
                <div className="relative">
                  <FileText size={18} className="absolute left-3 top-3 text-slate-400" />
                  <textarea
                    id="message"
                    rows={2}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe any symptoms, questions, or dental history..."
                    className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-slate-200 bg-warm-white text-sm text-navy-dark focus:bg-white"
                  />
                </div>
              </div>

              {/* Form Submission Buttons */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-5 py-2.5 rounded-xl text-navy-muted hover:text-navy-dark text-sm font-medium"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl bg-muted-teal hover:bg-muted-teal-hover text-white text-sm font-medium shadow-md transition-all active:scale-[0.98] disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Processing Request...</span>
                  ) : (
                    <>
                      <Calendar size={18} />
                      <span>Submit Appointment Request</span>
                    </>
                  )}
                </button>
              </div>

            </form>
          )}
        </div>
      </div>
    </div>
  );
};

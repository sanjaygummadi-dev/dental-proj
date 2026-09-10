export interface ServiceCategory {
  id: string;
  title: string;
  iconName: string;
  shortDescription: string;
  overview: string;
  benefits: string[];
  processSteps: { stepNumber: number; title: string; description: string }[];
  consultationFlow: string;
  faqs: { question: string; answer: string }[];
  category: 'preventive' | 'cosmetic' | 'restorative' | 'specialized';
}

export interface Doctor {
  id: string;
  name: string;
  qualification: string;
  specialization: string;
  experienceYears: number;
  bio: string;
  areasOfExpertise: string[];
  image: string;
  registrationNumber: string;
}

export interface Testimonial {
  id: string;
  patientName: string;
  location: string;
  treatment: string;
  comment: string;
  rating: number;
}

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export interface TechEquipment {
  id: string;
  title: string;
  iconName: string;
  description: string;
  patientBenefit: string;
}

export interface AppointmentFormData {
  fullName: string;
  phone: string;
  email: string;
  preferredDate: string;
  preferredTime: string;
  serviceId: string;
  patientType: 'new' | 'existing';
  message: string;
}

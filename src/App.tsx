import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustSection } from './components/TrustSection';
import { ServicesSection } from './components/ServicesSection';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { PatientJourney } from './components/PatientJourney';
import { TechnologySection } from './components/TechnologySection';
import { DoctorsSection } from './components/DoctorsSection';
import { DoctorDetailModal } from './components/DoctorDetailModal';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { AppointmentModal } from './components/AppointmentModal';
import { StickyMobileBar } from './components/StickyMobileBar';
import { PortfolioCaseStudyModal } from './components/PortfolioCaseStudyModal';
import { Footer } from './components/Footer';

import type { ServiceCategory, Doctor } from './types';

export function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedService, setSelectedService] = useState<ServiceCategory | null>(null);
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingServiceId, setBookingServiceId] = useState<string>('');
  const [bookingDoctorName, setBookingDoctorName] = useState<string>('');
  const [isCaseStudyOpen, setIsCaseStudyOpen] = useState(false);

  // Active section tracking via IntersectionObserver
  useEffect(() => {
    const sectionIds = ['home', 'services', 'doctors', 'journey', 'technology', 'faq', 'contact'];
    
    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, {
      root: null,
      rootMargin: '-30% 0px -50% 0px',
      threshold: 0
    });

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleOpenBooking = (serviceId?: string, doctorName?: string) => {
    setBookingServiceId(serviceId || '');
    setBookingDoctorName(doctorName || '');
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-warm-white text-navy-dark flex flex-col font-sans selection:bg-teal-100 selection:text-teal-900">
      
      {/* Navigation Bar */}
      <Navbar
        onOpenBooking={() => handleOpenBooking()}
        onOpenCaseStudy={() => setIsCaseStudyOpen(true)}
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />

      {/* Main Page Sections — Ordered to match Navbar sequence strictly */}
      <main className="flex-grow">
        
        {/* 1. Home Section */}
        <div id="home">
          <Hero
            onOpenBooking={() => handleOpenBooking()}
            onExploreServices={() => handleNavigate('services')}
          />
          <TrustSection />
        </div>

        {/* 2. Services Section */}
        <div id="services">
          <ServicesSection
            onSelectService={(service) => setSelectedService(service)}
            onBookService={(serviceId) => handleOpenBooking(serviceId)}
          />
        </div>

        {/* 3. Doctors Section */}
        <div id="doctors">
          <DoctorsSection
            onSelectDoctor={(doctor) => setSelectedDoctor(doctor)}
            onBookWithDoctor={(docName) => handleOpenBooking(undefined, docName)}
          />
        </div>

        {/* 4. Patient Journey Section */}
        <div id="journey">
          <PatientJourney
            onOpenBooking={() => handleOpenBooking()}
          />
        </div>

        {/* 5. Technology Section */}
        <div id="technology">
          <TechnologySection />
        </div>

        {/* Testimonials Section */}
        <TestimonialsSection />

        {/* 6. FAQ Section */}
        <div id="faq">
          <FaqSection />
        </div>

        {/* 7. Contact Section */}
        <div id="contact">
          <ContactSection
            onOpenBooking={() => handleOpenBooking()}
          />
        </div>

      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Sticky Mobile Action Bar */}
      <StickyMobileBar
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Service Detail Modal */}
      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onBookService={(serviceId) => handleOpenBooking(serviceId)}
      />

      {/* Doctor Detail Modal */}
      <DoctorDetailModal
        doctor={selectedDoctor}
        onClose={() => setSelectedDoctor(null)}
        onBookWithDoctor={(docName) => handleOpenBooking(undefined, docName)}
      />

      {/* Polished Booking Modal */}
      <AppointmentModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialServiceId={bookingServiceId}
        initialDoctorName={bookingDoctorName}
      />

      {/* Portfolio UX Case Study Drawer */}
      <PortfolioCaseStudyModal
        isOpen={isCaseStudyOpen}
        onClose={() => setIsCaseStudyOpen(false)}
      />

    </div>
  );
}

export default App;

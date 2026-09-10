import React, { useState, useEffect } from 'react';
import { Phone, Calendar, MessageCircle, Menu, X, Sparkles, Code2, MapPin } from 'lucide-react';
import { CLINIC_INFO } from '../data/mockData';

interface NavbarProps {
  onOpenBooking: (serviceId?: string) => void;
  onOpenCaseStudy: () => void;
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenBooking,
  onOpenCaseStudy,
  activeSection,
  onNavigate
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'doctors', label: 'Our Dentists' },
    { id: 'journey', label: 'Patient Journey' },
    { id: 'technology', label: 'Technology & Safety' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Contact Us' },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top Banner - Hygiene & Location quick alert */}
      <div className="bg-navy-dark text-white text-xs py-2 px-4 border-b border-navy-slate/40">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 text-center sm:text-left">
          <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-start">
            <span className="flex items-center gap-1.5 text-slate-300">
              <MapPin size={13} className="text-teal-400" />
              <span>Jubilee Hills, Hyderabad, Telangana</span>
            </span>
            <span className="hidden md:inline text-slate-600">|</span>
            <span className="hidden md:inline text-slate-300">
              Mon-Sat: 9:00 AM – 8:00 PM
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenCaseStudy}
              className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-teal-900/60 text-teal-200 hover:bg-teal-800 text-[11px] font-medium transition-colors border border-teal-700/50"
            >
              <Code2 size={12} />
              <span>Portfolio Case Study</span>
            </button>
            <a
              href={`tel:${CLINIC_INFO.phone.replace(/\s+/g, '')}`}
              className="hidden lg:flex items-center gap-1 text-slate-300 hover:text-white font-medium transition-colors"
            >
              <Phone size={12} className="text-teal-400" />
              <span>{CLINIC_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'glass-nav shadow-sm py-3 border-b border-border-subtle'
            : 'bg-warm-white py-4 border-b border-slate-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleLinkClick('home')}
            className="flex items-center gap-3 text-left group focus:outline-none"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-muted-teal to-teal-700 text-white flex items-center justify-center shadow-md shadow-teal-900/10 group-hover:scale-105 transition-transform">
              <Sparkles size={20} className="text-mint-subtle" />
            </div>
            <div>
              <span className="block font-bold text-lg leading-tight tracking-tight text-navy-dark">
                SMILECARE
              </span>
              <span className="block text-[11px] font-medium text-muted-teal tracking-widest uppercase">
                DENTAL CLINIC
              </span>
            </div>
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? 'text-muted-teal bg-mint-subtle/80 font-semibold'
                      : 'text-navy-slate hover:text-muted-teal hover:bg-slate-100/70'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Desktop Right Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`https://wa.me/${CLINIC_INFO.whatsapp.replace(/[^0-9]/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl text-slate-700 hover:text-teal-700 hover:bg-teal-50 transition-colors"
              title="Chat on WhatsApp"
              aria-label="WhatsApp Inquiry"
            >
              <MessageCircle size={19} />
            </a>
            
            <button
              onClick={() => onOpenBooking()}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-muted-teal hover:bg-muted-teal-hover text-white text-sm font-medium shadow-sm hover:shadow transition-all active:scale-[0.98]"
            >
              <Calendar size={16} />
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => onOpenBooking()}
              className="px-3 py-1.5 rounded-lg bg-muted-teal text-white text-xs font-medium"
            >
              Book
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-navy-dark hover:bg-slate-100 transition-colors"
              aria-label={isMobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-2 animate-fade-in shadow-xl">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                  activeSection === link.id
                    ? 'bg-mint-subtle text-muted-teal font-semibold'
                    : 'text-navy-slate hover:bg-slate-50'
                }`}
              >
                {link.label}
              </button>
            ))}

            <div className="pt-4 border-t border-slate-100 space-y-3">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenCaseStudy();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-100 text-slate-800 text-sm font-medium"
              >
                <Code2 size={16} />
                <span>View Portfolio Case Study</span>
              </button>

              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-muted-teal text-white text-sm font-medium shadow"
              >
                <Calendar size={18} />
                <span>Book an Appointment</span>
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

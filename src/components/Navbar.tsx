import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Phone, Mail, MapPin, Clock, Menu, X, ChevronRight } from 'lucide-react';

interface NavbarProps {
  onOpenQuoteModal: (service?: string) => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuoteModal, activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [ghanaTime, setGhanaTime] = useState('');

  // Update live Ghana Time (GMT / UTC+0)
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Africa/Accra',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      };
      setGhanaTime(new Intl.DateTimeFormat('en-GB', options).format(now));
    };
    updateTime();
    const interval = setInterval(updateTime, 30000);
    return () => clearInterval(interval);
  }, []);

  // Handle scroll shadow and compact style
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Fleet', href: '#fleet' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top Utility Bar */}
      <div className="bg-[#07253D] text-slate-300 text-xs py-2 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-2">
          {/* Left: Location & Time */}
          <div className="flex items-center gap-5 text-slate-300 font-medium">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#E85D04]" />
              <span>Tema Heavy Industrial Area, Greater Accra, Ghana</span>
            </div>
            <div className="hidden sm:flex items-center gap-1.5 border-l border-slate-700 pl-4">
              <Clock className="w-3.5 h-3.5 text-[#E85D04]" />
              <span>Accra: <strong className="text-white">{ghanaTime || 'GMT'}</strong> (Mon - Sat: 7:30 AM - 6:00 PM)</span>
            </div>
          </div>

          {/* Right: Direct Desk & WhatsApp */}
          <div className="flex items-center gap-4">
            <a
              href="tel:+233302984500"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#E85D04]" />
              <span>+233 (0) 30 298 4500</span>
            </a>
            <a
              href="mailto:quotes@kamlainfra.com"
              className="hidden lg:flex items-center gap-1.5 hover:text-white transition-colors border-l border-slate-700 pl-4"
            >
              <Mail className="w-3.5 h-3.5 text-[#E85D04]" />
              <span>quotes@kamlainfra.com</span>
            </a>
            <a
              href="https://wa.me/233244567890?text=Hello%20Kamla%20Infra%20Ghana,%20I%20would%20like%20to%20inquire%20about%20excavator%20availability."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-[#E85D04] hover:bg-[#ff6d00] text-white px-2.5 py-0.5 rounded text-[11px] font-semibold transition-colors"
            >
              <span>WhatsApp Sales</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200 py-3'
            : 'bg-white border-b border-slate-100 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#home" className="focus:outline-none focus:ring-2 focus:ring-[#0B3B60] rounded-lg">
            <Logo variant="full" />
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 text-sm font-semibold transition-colors rounded-md ${
                    isActive
                      ? 'text-[#0B3B60] bg-slate-100'
                      : 'text-slate-700 hover:text-[#0B3B60] hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => onOpenQuoteModal('rental')}
              className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#0B3B60] border border-[#0B3B60] hover:bg-[#0B3B60]/5 rounded-lg transition-all"
            >
              Fleet Availability
            </button>
            <button
              onClick={() => onOpenQuoteModal('sales')}
              className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-white bg-[#0B3B60] hover:bg-[#07253D] shadow-sm hover:shadow rounded-lg transition-all flex items-center gap-1.5"
            >
              <span>Request Quote</span>
              <ChevronRight className="w-3.5 h-3.5 text-[#E85D04]" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => onOpenQuoteModal('sales')}
              className="px-3 py-1.5 text-xs font-bold text-white bg-[#E85D04] rounded-md sm:hidden"
            >
              Get Quote
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
              className="p-2 text-slate-700 hover:text-[#0B3B60] hover:bg-slate-100 rounded-md focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-2 animate-in fade-in slide-in-from-top-4 duration-200">
            <div className="grid grid-cols-1 gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2.5 text-base font-semibold text-slate-800 hover:bg-slate-100 hover:text-[#0B3B60] rounded-md transition-colors flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </a>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-200 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuoteModal('sales');
                }}
                className="w-full py-3 text-center text-sm font-bold text-white bg-[#0B3B60] rounded-lg shadow"
              >
                Request Official Equipment Quote
              </button>
              <a
                href="https://wa.me/233244567890?text=Hello%20Kamla%20Infra,%20I%20am%20looking%20for%20excavators%20in%20Ghana."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 text-center text-sm font-bold text-slate-800 bg-[#E85D04]/10 text-[#E85D04] rounded-lg border border-[#E85D04]/30"
              >
                Chat on WhatsApp (+233 24 456 7890)
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

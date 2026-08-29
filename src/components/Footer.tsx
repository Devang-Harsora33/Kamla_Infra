import React from 'react';
import { Logo } from './Logo';
import { Phone, Mail, MapPin, ArrowUp, ShieldCheck, ArrowRight } from 'lucide-react';

interface FooterProps {
  onOpenQuoteModal: (service?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenQuoteModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#07253D] text-slate-300 border-t border-slate-800">
      {/* Top CTA Banner in Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-b border-slate-800">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-xs font-bold text-[#E85D04] uppercase tracking-wider block">
              Ghana Heavy Machinery Solutions
            </span>
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white">
              Ready to Equip Your Construction or Mining Project?
            </h3>
            <p className="text-sm text-slate-400">
              Immediate dispatch available from our central Tema yard.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => onOpenQuoteModal('sales')}
              className="px-6 py-3 bg-[#E85D04] hover:bg-[#ff6d00] text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-colors shadow-md whitespace-nowrap"
            >
              Request Fleet Quote
            </button>
            <a
              href="https://wa.me/233244567890"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 bg-white/10 hover:bg-white/20 text-white text-xs font-bold uppercase tracking-wider rounded-lg border border-white/20 transition-colors whitespace-nowrap"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-4 space-y-4">
            <Logo variant="white" showTagline={true} />
            <p className="text-xs text-slate-400 leading-relaxed pt-2">
              Kamla Infra Ghana Ltd. is a premier heavy machinery provider based in Ghana. We specialize in earthmoving equipment, dedicated to equipping local infrastructure, mining, and construction projects with reliable, high-performance excavators.
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-400 pt-2">
              <ShieldCheck className="w-4 h-4 text-[#E85D04]" />
              <span>Certified Heavy Machinery Dealer in Ghana</span>
            </div>
          </div>

          {/* Col 2: Services */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Our Services
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Excavator Sales & CIF Delivery
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Machinery Trading & Upgrades
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Equipment Rental (Wet & Dry Leases)
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  OEM Hydraulic Spares & Filters
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  24/7 Mobile Field Maintenance
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Quick Navigation */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#home" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#fleet" className="hover:text-white transition-colors">
                  Equipment Fleet
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Ghana Contact Office */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Ghana Headquarters
            </h4>
            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#E85D04] shrink-0 mt-0.5" />
                <span>Plot 14, Tema Heavy Industrial Area, Greater Accra, Ghana</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#E85D04] shrink-0" />
                <span>+233 (0) 30 298 4500 / +233 (0) 24 456 7890</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#E85D04] shrink-0" />
                <span>quotes@kamlainfra.com</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Legal Bar */}
      <div className="border-t border-slate-800/80 bg-[#051c2f] py-6 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            © {new Date().getFullYear()} Kamla Infra Ghana Ltd. All rights reserved. Powering Progress in Ghana.
          </div>
          <div className="flex items-center gap-4">
            <span>Registered in the Republic of Ghana</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

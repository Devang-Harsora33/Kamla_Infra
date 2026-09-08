import React from 'react';
import { PageId } from '../types';
import { Logo } from './Logo';
import { ArrowRight, MapPin, Phone, Mail, Clock, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenQuote: (service?: 'rental' | 'sales' | 'spares') => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenQuote }) => {
  const handleNav = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#061E35] text-slate-300 border-t border-[#082B4C] relative overflow-hidden">
      {/* Top subtle highlight line */}
      <div className="h-1 bg-gradient-to-r from-[#082B4C] via-[#F47721] to-[#082B4C]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-slate-800/80">
          {/* Col 1 & 2: Brand Info */}
          <div className="lg:col-span-2 space-y-5">
            <Logo variant="light" />
            
            <p className="text-slate-400 text-[14px] leading-relaxed max-w-sm">
              Heavy Equipment Solutions for Construction, Mining & Infrastructure across Ghana. Providing high-availability machinery, flexible rental options, and genuine spare parts.
            </p>

            <div className="pt-2 flex flex-col gap-2.5 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#F47721] shrink-0 mt-0.5" />
                <span>Heavy Industrial Area, Spintex Road / Tema Corridor, Greater Accra, Ghana</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#F47721] shrink-0" />
                <span>+233 (0) 50 123 4567 / +233 (0) 24 987 6543</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#F47721] shrink-0" />
                <span>sales@kamlainfra.com • support@kamlainfra.com</span>
              </div>
            </div>

            <div className="flex items-center gap-2 pt-1">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#082B4C] text-[11px] text-slate-200 border border-slate-700/60 font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-[#F47721]" />
                Registered in Republic of Ghana
              </span>
            </div>
          </div>

          {/* Col 3: Navigation */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-4 border-l-2 border-[#F47721] pl-2">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { id: 'home' as PageId, label: 'Home' },
                { id: 'equipment' as PageId, label: 'Equipment Catalogue' },
                { id: 'rental' as PageId, label: 'Rental Solutions' },
                { id: 'sales-spares' as PageId, label: 'Sales & Spares' },
                { id: 'about-contact' as PageId, label: 'About / Contact' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleNav(link.id)}
                    className="text-slate-400 hover:text-white hover:translate-x-1 transition-all flex items-center gap-1.5 text-left cursor-pointer"
                  >
                    <span>{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Services */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-4 border-l-2 border-[#F47721] pl-2">
              Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => handleNav('sales-spares')}
                  className="text-slate-400 hover:text-white transition-colors text-left"
                >
                  Equipment Sales
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('rental')}
                  className="text-slate-400 hover:text-white transition-colors text-left"
                >
                  Equipment Rental
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('sales-spares')}
                  className="text-slate-400 hover:text-white transition-colors text-left"
                >
                  Spare Parts Support
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('equipment')}
                  className="text-slate-400 hover:text-white transition-colors text-left"
                >
                  Fleet Maintenance
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('rental')}
                  className="text-slate-400 hover:text-white transition-colors text-left"
                >
                  On-Site Operator Support
                </button>
              </li>
            </ul>
          </div>

          {/* Col 5: Direct Quote Callout */}
          <div className="bg-[#082B4C]/70 p-5 rounded-xl border border-slate-700/60 flex flex-col justify-between">
            <div>
              <span className="text-[11px] font-bold tracking-wider text-[#F47721] uppercase block mb-1">
                Direct Commercial Desk
              </span>
              <h5 className="text-white font-bold text-[15px] leading-snug">
                Need Machinery on Your Site?
              </h5>
              <p className="text-slate-400 text-xs mt-2 leading-relaxed">
                Connect with our commercial team in Accra for fast mobilization and equipment dispatch.
              </p>
            </div>

            <div className="pt-5">
              <button
                onClick={() => onOpenQuote()}
                className="w-full bg-[#F47721] hover:bg-[#D96213] text-white py-2.5 px-4 rounded-lg text-xs font-bold tracking-wide transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Get a Quote</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 Kamla Infra Ghana Ltd. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <span>Ghana Heavy Equipment Standards</span>
            <span className="text-slate-700">•</span>
            <span>Accra • Takoradi • Kumasi</span>
            <span className="text-slate-700">•</span>
            <span className="text-slate-400 font-medium">Powering Infrastructure Across Ghana</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

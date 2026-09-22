import React, { useState } from 'react';
import { PageId } from '../types';
import { Logo } from './Logo';
import { Search, Menu, X, PhoneCall, ChevronRight } from 'lucide-react';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenQuote: (preSelectedModel?: string, defaultService?: 'rental' | 'sales' | 'spares') => void;
  onOpenSearch: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenQuote,
  onOpenSearch,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'equipment', label: 'Equipment' },
    { id: 'rental', label: 'Rental' },
    { id: 'sales-spares', label: 'Sales & Spares' },
    { id: 'about-contact', label: 'About / Contact' },
  ];

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top Industrial Strip */}
      <div className="bg-[#061E35] text-slate-300 text-xs py-1.5 px-4 sm:px-8 border-b border-[#082B4C] hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-slate-300 font-medium">
              <span className="inline-block w-2 h-2 rounded-full bg-[#F47721] animate-pulse"></span>
              Heavy Machinery Fleet Ready for Deployment Across Ghana
            </span>
            <span className="text-slate-500">|</span>
            <span className="text-slate-400">Accra • Takoradi • Kumasi • Tarkwa</span>
          </div>

          <div className="flex items-center gap-4 text-slate-300">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
              <span>Built for a Stronger Ghana</span>
              {/* Ghana Flag mini badge */}
              <span className="inline-flex items-center overflow-hidden rounded-[2px] border border-white/20 w-4 h-2.5">
                <span className="w-1/3 h-full bg-[#CE1126]"></span>
                <span className="w-1/3 h-full bg-[#FCD116] flex items-center justify-center text-[5px] text-black">★</span>
                <span className="w-1/3 h-full bg-[#006B3F]"></span>
              </span>
            </span>
            <span className="text-slate-600">|</span>
            <a
              href="tel:+233552538551"
              className="flex items-center gap-1.5 font-semibold text-white hover:text-[#F47721] transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#F47721]" />
              <span>+233 55 253 8551</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header className="sticky top-0 z-40 bg-white border-b border-slate-200/80 shadow-xs h-[74px] sm:h-[80px] flex items-center transition-all">
        <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center text-left focus:outline-hidden group cursor-pointer"
            aria-label="Kamla Infra Ghana Home"
          >
            <Logo variant="dark" />
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3.5 py-2 text-[14px] font-semibold tracking-tight transition-all rounded-md relative cursor-pointer ${
                    isActive
                      ? 'text-[#F47721] font-bold'
                      : 'text-[#102A43] hover:text-[#082B4C] hover:bg-slate-100/60'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3.5 right-3.5 h-[2.5px] bg-[#F47721] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Search Trigger */}
            <button
              onClick={onOpenSearch}
              className="p-2.5 text-slate-600 hover:text-[#082B4C] hover:bg-slate-100 rounded-lg transition-colors cursor-pointer border border-transparent hover:border-slate-200"
              title="Search equipment catalog"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Primary Orange CTA: "Get a Quote" */}
            <button
              onClick={() => onOpenQuote()}
              className="bg-[#F47721] hover:bg-[#D96213] text-white px-5 py-2.5 rounded-lg text-sm font-bold tracking-wide transition-all shadow-xs hover:shadow-md flex items-center gap-2 cursor-pointer active:scale-[0.98]"
            >
              <span>Get a Quote</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Actions & Hamburger */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenSearch}
              className="p-2 text-slate-700 hover:text-[#082B4C] rounded-lg"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>

            <button
              onClick={() => onOpenQuote()}
              className="bg-[#F47721] text-white px-3 py-1.5 text-xs font-bold rounded-md flex items-center gap-1 sm:hidden"
            >
              Quote
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#082B4C] hover:bg-slate-100 rounded-lg focus:outline-hidden cursor-pointer"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[74px] sm:top-[80px] bottom-0 z-50 bg-black/50 backdrop-blur-xs flex justify-end">
          <div className="w-full max-w-sm bg-white h-full shadow-2xl flex flex-col justify-between border-l border-slate-200 p-6 animate-in slide-in-from-right duration-200">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Navigation Menu</span>
                <span className="text-xs font-semibold text-[#F47721] flex items-center gap-1">
                  Ghana Fleet
                </span>
              </div>

              <div className="space-y-1.5">
                {navItems.map((item) => {
                  const isActive = currentPage === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleNavClick(item.id)}
                      className={`w-full text-left px-4 py-3 rounded-lg text-[15px] font-semibold flex items-center justify-between transition-colors ${
                        isActive
                          ? 'bg-[#082B4C] text-white'
                          : 'text-[#102A43] hover:bg-slate-100'
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronRight className={`w-4 h-4 ${isActive ? 'text-[#F47721]' : 'text-slate-400'}`} />
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="space-y-3 pt-6 border-t border-slate-100">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuote();
                }}
                className="w-full bg-[#F47721] hover:bg-[#D96213] text-white py-3 rounded-lg font-bold text-center flex items-center justify-center gap-2 shadow-sm"
              >
                <span>Request a Quote / Rental</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              <div className="text-xs text-slate-500 space-y-1 text-center pt-2">
                <p className="font-semibold text-slate-700">Kamla Infra Ghana Ltd.</p>
                <p>Heavy Equipment Sales • Rental • Spares</p>
                <p className="text-slate-400">Accra, Ghana • +233 55 253 8551</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

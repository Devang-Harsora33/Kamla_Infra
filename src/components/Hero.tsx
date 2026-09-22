import React, { useState } from 'react';
import { Shield, Wrench, CheckCircle2, ArrowRight, PhoneCall, Zap } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  onOpenQuoteModal: (service?: string, model?: string) => void;
  onNavigateToFleet: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuoteModal, onNavigateToFleet }) => {
  const [quickTab, setQuickTab] = useState<'sales' | 'rental' | 'trading'>('sales');

  return (
    <section id="home" className="relative bg-[#09090B] text-white overflow-hidden">
      {/* Background Graphic & Subtle Architectural Grid */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#09090B] via-[#18181B] to-[#081F33] opacity-95" />
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(#E85D04 1px, transparent 1px), radial-gradient(#FFFFFF 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
          backgroundPosition: '0 0, 20px 20px',
        }}
      />

      {/* Subtle Construction Machine Overlay Graphic */}
      <div className="absolute right-0 bottom-0 top-0 w-1/2 opacity-15 pointer-events-none hidden lg:block overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=1200&q=80"
          alt="Heavy Excavator at work"
          className="w-full h-full object-cover object-center mix-blend-luminosity filter contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#09090B]/60 to-[#09090B]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-36">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 z-10"
          >
            {/* Super Header Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-bold text-zinc-300 uppercase tracking-wider">Ghana's Heavy Machinery Partner</span>
            </div>

            {/* Main Title */}
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-6 tracking-tight drop-shadow-md">
              Powering Infrastructure with <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E85D04] to-[#FFA500]">Elite Machinery</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-zinc-400 mb-8 max-w-2xl font-medium leading-relaxed">
              New & Certified Pre-Owned Excavators. Direct OEM Spares. Industrial Contracting Solutions structured for the African continent.
            </p>

            {/* Primary Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenQuoteModal('sales')}
                className="px-6 py-3.5 rounded-lg bg-[#E85D04] hover:bg-[#ff6d00] text-white font-bold text-sm tracking-wide transition-all shadow-lg hover:shadow-orange-500/25 flex items-center gap-2 group"
              >
                <span>Request Equipment Quote</span>
                <ArrowRight className="w-4 h-4 group-hover:tranzinc-x-1 transition-transform" />
              </button>

              <button
                onClick={onNavigateToFleet}
                className="px-6 py-3.5 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-sm tracking-wide transition-all backdrop-blur-sm flex items-center gap-2"
              >
                <span>Explore Fleet (20T - 50T)</span>
              </button>
            </div>

            {/* Trust Points */}
            <div className="pt-6 border-t border-zinc-700/80 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-zinc-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#E85D04] shrink-0" />
                <span>Tema Yard Inventory</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#E85D04] shrink-0" />
                <span>Wet & Dry Rental Terms</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#E85D04] shrink-0" />
                <span>24/7 Field Tech Support</span>
              </div>
            </div>
          </motion.div>

          {/* Right Interactive Commercial Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="lg:col-span-5"
          >
            <div className="bg-white text-zinc-900 rounded-2xl p-6 sm:p-7 shadow-2xl border border-zinc-200/80">
              {/* Card Header */}
              <div className="flex items-center justify-between border-b border-zinc-100 pb-4 mb-5">
                <div>
                  <h3 className="font-heading text-lg font-bold text-[#18181B]">
                    Instant Machinery Inquiry
                  </h3>
                  <p className="text-xs text-zinc-500">Select your project requirement in Ghana</p>
                </div>
                <div className="bg-emerald-50 text-emerald-700 text-[11px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1 border border-emerald-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                  <span>14 Units In Stock</span>
                </div>
              </div>

              {/* Service Tab Switcher */}
              <div className="grid grid-cols-3 gap-1 bg-zinc-100 p-1 rounded-lg mb-5 text-xs font-bold">
                <button
                  type="button"
                  onClick={() => setQuickTab('sales')}
                  className={`py-2 rounded-md transition-all ${
                    quickTab === 'sales'
                      ? 'bg-white text-[#18181B] shadow-sm'
                      : 'text-zinc-600 hover:text-zinc-900'
                  }`}
                >
                  Buy Machine
                </button>
                <button
                  type="button"
                  onClick={() => setQuickTab('rental')}
                  className={`py-2 rounded-md transition-all ${
                    quickTab === 'rental'
                      ? 'bg-white text-[#18181B] shadow-sm'
                      : 'text-zinc-600 hover:text-zinc-900'
                  }`}
                >
                  Rent Fleet
                </button>
                <button
                  type="button"
                  onClick={() => setQuickTab('trading')}
                  className={`py-2 rounded-md transition-all ${
                    quickTab === 'trading'
                      ? 'bg-white text-[#18181B] shadow-sm'
                      : 'text-zinc-600 hover:text-zinc-900'
                  }`}
                >
                  Trade-In
                </button>
              </div>

              {/* Tab Specific Content */}
              {quickTab === 'sales' && (
                <div className="space-y-3.5">
                  <div className="p-3 rounded-lg bg-zinc-50 border border-zinc-200/60 text-xs space-y-1">
                    <div className="flex items-center justify-between text-zinc-800 font-semibold">
                      <span>Excavator Inventory:</span>
                      <span className="text-[#18181B]">20T, 30T, 50T Available</span>
                    </div>
                    <p className="text-zinc-500 text-[11px]">
                      Fully pre-inspected units at Tema Heavy Industrial Yard with customs clearance & duty paid.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="p-2.5 rounded bg-zinc-50 border border-zinc-200">
                      <span className="text-[10px] text-zinc-400 block uppercase">Brands</span>
                      <span className="font-bold text-zinc-800">SANY, CAT, Komatsu</span>
                    </div>
                    <div className="p-2.5 rounded bg-zinc-50 border border-zinc-200">
                      <span className="text-[10px] text-zinc-400 block uppercase">Delivery</span>
                      <span className="font-bold text-zinc-800">Nationwide Ghana</span>
                    </div>
                  </div>
                  <button
                    onClick={() => onOpenQuoteModal('sales')}
                    className="w-full py-3 bg-[#18181B] hover:bg-[#09090B] text-white font-bold text-xs rounded-lg transition-colors flex items-center justify-center gap-2 shadow-sm"
                  >
                    <span>Request Sales Catalog & Pricing</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}

              {quickTab === 'rental' && (
                <div className="space-y-3.5">
                  <div className="p-3 rounded-lg bg-orange-50/70 border border-orange-200 text-xs space-y-1">
                    <div className="flex items-center justify-between text-orange-950 font-semibold">
                      <span>Flexible Rental Plans:</span>
                      <span className="text-[#E85D04]">Short & Long Term</span>
                    </div>
                    <p className="text-orange-800/80 text-[11px]">
                      Access top-tier earthmovers with certified operators and included scheduled on-site maintenance.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="p-2.5 rounded bg-zinc-50 border border-zinc-200">
                      <span className="text-[10px] text-zinc-400 block uppercase">Mobilization</span>
                      <span className="font-bold text-zinc-800">24-48 Hours</span>
                    </div>
                    <div className="p-2.5 rounded bg-zinc-50 border border-zinc-200">
                      <span className="text-[10px] text-zinc-400 block uppercase">Support</span>
                      <span className="font-bold text-zinc-800">24/7 Mobile Tech</span>
                    </div>
                  </div>
                  <button
                    onClick={() => onOpenQuoteModal('rental')}
                    className="w-full py-3 bg-[#E85D04] hover:bg-[#ff6d00] text-white font-bold text-xs rounded-lg transition-colors flex items-center justify-center gap-2 shadow-sm"
                  >
                    <span>Check Rental Rates & Book</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}

              {quickTab === 'trading' && (
                <div className="space-y-3.5">
                  <div className="p-3 rounded-lg bg-zinc-50 border border-zinc-200/60 text-xs space-y-1">
                    <div className="flex items-center justify-between text-zinc-800 font-semibold">
                      <span>Machinery Trade-In:</span>
                      <span className="text-[#18181B]">Fair Market Value</span>
                    </div>
                    <p className="text-zinc-500 text-[11px]">
                      Exchange your older equipment for modern, fuel-efficient excavators with seamless valuation.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="p-2.5 rounded bg-zinc-50 border border-zinc-200">
                      <span className="text-[10px] text-zinc-400 block uppercase">Appraisal</span>
                      <span className="font-bold text-zinc-800">Free On-Site Inspection</span>
                    </div>
                    <div className="p-2.5 rounded bg-zinc-50 border border-zinc-200">
                      <span className="text-[10px] text-zinc-400 block uppercase">Upgrade Path</span>
                      <span className="font-bold text-zinc-800">Tier-3 & Mining Specs</span>
                    </div>
                  </div>
                  <button
                    onClick={() => onOpenQuoteModal('trading')}
                    className="w-full py-3 bg-[#18181B] hover:bg-[#09090B] text-white font-bold text-xs rounded-lg transition-colors flex items-center justify-center gap-2 shadow-sm"
                  >
                    <span>Request Trade-In Valuation</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}

              {/* Direct Call Footer */}
              <div className="mt-4 pt-3 border-t border-zinc-100 flex items-center justify-between text-xs text-zinc-500">
                <span className="flex items-center gap-1 text-[11px]">
                  <Zap className="w-3.5 h-3.5 text-[#E85D04]" /> Urgent Project Needs?
                </span>
                <a
                  href="tel:+233552538551"
                  className="text-[#18181B] hover:text-[#E85D04] font-bold flex items-center gap-1 transition-colors"
                >
                  <PhoneCall className="w-3 h-3 text-[#E85D04]" />
                  <span>Call +233 55 253 8551</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

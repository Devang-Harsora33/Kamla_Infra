import React from 'react';
import { COMPANY_STATS } from '../data/equipmentData';
import { ShieldCheck, HardHat, Compass, Truck, Award, Activity } from 'lucide-react';
import { motion } from 'motion/react';

interface AboutSectionProps {
  onOpenQuoteModal: (service?: string) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenQuoteModal }) => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white border-b border-zinc-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-zinc-100 text-[#18181B] text-xs font-bold uppercase tracking-wider mb-3">
            <HardHat className="w-3.5 h-3.5 text-[#E85D04]" />
            <span>About Kamla Infra Ghana Ltd.</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-[#18181B] tracking-tight leading-tight">
            Equipping Ghana's Builders, Miners, & Engineers.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-600 leading-relaxed font-normal">
            Kamla Infra Ghana Ltd. is a premier heavy machinery provider based in Ghana. We specialize in earthmoving equipment, dedicated to equipping local infrastructure, mining, and construction projects with reliable, high-performance excavators.
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-14">
          {/* Left Visual Architecture */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-zinc-200 aspect-[4/3] bg-zinc-900">
              <img
                src="https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=1200&q=80"
                alt="Kamla Infra Heavy Machinery Operations"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#09090B]/90 via-[#09090B]/30 to-transparent" />
              
              {/* Highlight Card Over Image */}
              <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-white/95 backdrop-blur-md border border-white/40 shadow-lg flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-bold text-[#E85D04] uppercase tracking-wider block">Central Dispatch Base</span>
                  <strong className="text-xs sm:text-sm font-bold text-[#18181B]">Tema Heavy Industrial Area, Ghana</strong>
                </div>
                <div className="h-8 w-8 rounded-lg bg-[#18181B] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  GH
                </div>
              </div>
            </div>
          </div>

          {/* Right Operational Pillars */}
          <div className="lg:col-span-7 space-y-4">
            {/* 3 Core Capability Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
              <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200">
                <div className="w-8 h-8 rounded-lg bg-[#18181B] text-white flex items-center justify-center mb-2.5">
                  <ShieldCheck className="w-4 h-4 text-[#E85D04]" />
                </div>
                <h4 className="font-bold text-zinc-900 text-xs mb-1">Pre-Inspected</h4>
                <p className="text-[11px] text-zinc-500 leading-snug">
                  80-point hydraulic, engine & track certification before site handover.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200">
                <div className="w-8 h-8 rounded-lg bg-[#18181B] text-white flex items-center justify-center mb-2.5">
                  <Activity className="w-4 h-4 text-[#E85D04]" />
                </div>
                <h4 className="font-bold text-zinc-900 text-xs mb-1">Rapid Mobilization</h4>
                <p className="text-[11px] text-zinc-500 leading-snug">
                  24-48h machine dispatch across Greater Accra, Western & Ashanti.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200">
                <div className="w-8 h-8 rounded-lg bg-[#18181B] text-white flex items-center justify-center mb-2.5">
                  <HardHat className="w-4 h-4 text-[#E85D04]" />
                </div>
                <h4 className="font-bold text-zinc-900 text-xs mb-1">Field Support</h4>
                <p className="text-[11px] text-zinc-500 leading-snug">
                  Mobile diagnostic engineers & genuine OEM hydraulic spares on-site.
                </p>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-3">
              <button
                onClick={() => onOpenQuoteModal('sales')}
                className="px-5 py-2.5 rounded-lg bg-[#18181B] hover:bg-[#09090B] text-white font-bold text-xs uppercase tracking-wider transition-colors inline-flex items-center gap-2 shadow-sm"
              >
                <span>Request Fleet Consultation</span>
              </button>
            </div>
          </div>
        </div>

        {/* Company Key Numbers / Metric Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-10 border-t border-zinc-200">
          {COMPANY_STATS.map((stat, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl bg-zinc-50 border border-zinc-200/80 text-left transition-all hover:bg-white hover:shadow-md"
            >
              <div className="text-3xl sm:text-4xl font-extrabold text-[#18181B] font-heading tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-bold text-zinc-900 mt-1">
                {stat.label}
              </div>
              <p className="text-[11px] text-zinc-500 mt-1 leading-normal">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

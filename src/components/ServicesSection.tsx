import React, { useState } from 'react';
import { Truck, RefreshCw, Clock, Wrench, CheckCircle, ArrowRight, Shield, Layers } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ServicesSectionProps {
  onOpenQuoteModal: (service: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenQuoteModal }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'sales' | 'trading' | 'rental' | 'spares'>('all');

  const services = [
    {
      id: 'sales',
      title: 'Excavator Sales',
      tagline: '20T, 30T, and 50T mining class excavators',
      description: 'Robust inventory of certified excavators ready for immediate dispatch at our Tema yard with duty-paid clearance.',
      icon: Truck,
      color: '#18181B',
      badge: 'Brand New & Certified Pre-Owned',
      features: [
        'Tema Yard inventory with complete customs clearance',
        'Tropical cooling & dual heavy filtration systems',
        'Structured corporate purchase & fleet terms',
      ],
      ctaText: 'Inquire for Purchase',
    },
    {
      id: 'trading',
      title: 'Machinery Trading',
      tagline: 'Direct trade-in & fleet valuation in Ghana',
      description: 'Exchange your older machinery for high-efficiency, lower-emission Tier-3 excavators with transparent market appraisal.',
      icon: RefreshCw,
      color: '#E85D04',
      badge: 'Fair Market Valuation',
      features: [
        'Free on-site inspection anywhere in Ghana',
        'Direct credit applied to new equipment acquisition',
        'Hassle-free title and ownership transfer',
      ],
      ctaText: 'Request Trade-In Value',
    },
    {
      id: 'rental',
      title: 'Equipment Rental',
      tagline: 'Wet & Dry short or long-term lease',
      description: 'Deploy top-tier earthmovers to your job site with optional certified operators and scheduled routine maintenance included.',
      icon: Clock,
      color: '#18181B',
      badge: 'Wet & Dry Leases',
      features: [
        'Fast 24-48h mobilization to mining and civil sites',
        'Experienced Ghanaian certified operators available',
        'Guaranteed replacement unit SLA for zero downtime',
      ],
      ctaText: 'Book Rental Unit',
    },
    {
      id: 'spares',
      title: 'OEM Spares & Support',
      tagline: 'Hydraulic components & 24/7 field engineers',
      description: 'Central parts depot in Tema stocked with genuine filters, hydraulic assemblies, and mobile diagnostics trucks.',
      icon: Wrench,
      color: '#09090B',
      badge: '24/7 Field Tech',
      features: [
        'Extensive Tema stock of filters, hoses & teeth',
        'Mobile repair units stationed near mining corridors',
        'Hydraulic cylinder and pump condition monitoring',
      ],
      ctaText: 'Inquire for Spares & Service',
    },
  ];

  const filteredServices = activeTab === 'all'
    ? services
    : services.filter((s) => s.id === activeTab);

  return (
    <section id="services" className="py-20 lg:py-28 bg-zinc-50 border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6"
        >
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-zinc-200 text-[#18181B] text-xs font-bold uppercase tracking-wider mb-3">
              <Layers className="w-3.5 h-3.5 text-[#E85D04]" />
              <span>Comprehensive Machinery Solutions</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-[#18181B] tracking-tight">
              Our Services
            </h2>
            <p className="mt-3 text-base text-zinc-600">
              End-to-end heavy equipment capabilities structured to keep your projects on schedule and within budget.
            </p>
          </div>

          {/* Tab Filter */}
          <div className="flex flex-wrap gap-1.5 p-1 bg-white border border-zinc-200 rounded-lg shadow-sm">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3.5 py-1.5 text-xs font-bold rounded-md transition-colors ${
                activeTab === 'all'
                  ? 'bg-[#18181B] text-white'
                  : 'text-zinc-600 hover:text-zinc-900'
              }`}
            >
              All Services
            </button>
            <button
              onClick={() => setActiveTab('sales')}
              className={`px-3.5 py-1.5 text-xs font-bold rounded-md transition-colors ${
                activeTab === 'sales'
                  ? 'bg-[#18181B] text-white'
                  : 'text-zinc-600 hover:text-zinc-900'
              }`}
            >
              Sales
            </button>
            <button
              onClick={() => setActiveTab('rental')}
              className={`px-3.5 py-1.5 text-xs font-bold rounded-md transition-colors ${
                activeTab === 'rental'
                  ? 'bg-[#18181B] text-white'
                  : 'text-zinc-600 hover:text-zinc-900'
              }`}
            >
              Rental
            </button>
            <button
              onClick={() => setActiveTab('trading')}
              className={`px-3.5 py-1.5 text-xs font-bold rounded-md transition-colors ${
                activeTab === 'trading'
                  ? 'bg-[#18181B] text-white'
                  : 'text-zinc-600 hover:text-zinc-900'
              }`}
            >
              Trading
            </button>
            <button
              onClick={() => setActiveTab('spares')}
              className={`px-3.5 py-1.5 text-xs font-bold rounded-md transition-colors ${
                activeTab === 'spares'
                  ? 'bg-[#18181B] text-white'
                  : 'text-zinc-600 hover:text-zinc-900'
              }`}
            >
              Spares
            </button>
          </div>
        </motion.div>

        {/* Services Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
          {filteredServices.map((service, index) => {
            const IconComponent = service.icon;
            const isOrangeAccent = service.id === 'trading' || service.id === 'rental';

            return (
              <motion.div
                layout
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                key={service.id}
                className="bg-white rounded-2xl p-7 sm:p-8 border border-zinc-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Card Top */}
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center text-white ${
                        isOrangeAccent ? 'bg-[#E85D04]' : 'bg-[#18181B]'
                      }`}
                    >
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-zinc-100 text-zinc-700 border border-zinc-200">
                      {service.badge}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="font-heading text-2xl font-bold text-zinc-900 mb-1 group-hover:text-[#18181B] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#E85D04] uppercase tracking-wider mb-4">
                    {service.tagline}
                  </p>

                  {/* Body Text */}
                  <p className="text-zinc-600 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-2.5 pt-4 border-t border-zinc-100 mb-6">
                    {service.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs text-zinc-700">
                        <CheckCircle className="w-4 h-4 text-[#E85D04] shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA Action */}
                <button
                  onClick={() => onOpenQuoteModal(service.id)}
                  className={`w-full py-3 px-4 rounded-lg font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                    isOrangeAccent
                      ? 'bg-zinc-900 hover:bg-[#18181B] text-white'
                      : 'bg-[#18181B] hover:bg-[#09090B] text-white'
                  }`}
                >
                  <span>{service.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                </motion.div>
              );
            })}
            </AnimatePresence>
          </motion.div>

          {/* Bottom Banner for Custom Inquiries */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mt-12 p-6 sm:p-8 rounded-2xl bg-[#09090B] text-white flex flex-col md:flex-row items-center justify-between gap-6"
          >
          <div className="space-y-1 text-center md:text-left">
            <h4 className="font-heading text-lg sm:text-xl font-bold text-white">
              Need a Custom Multi-Machine Package in Ghana?
            </h4>
            <p className="text-xs sm:text-sm text-zinc-300">
              We structure custom lease-to-own agreements and fleet management packages for major civil and mining contracts.
            </p>
          </div>
          <button
            onClick={() => onOpenQuoteModal('sales')}
            className="px-6 py-3 rounded-lg bg-[#E85D04] hover:bg-[#ff6d00] text-white font-bold text-xs uppercase tracking-wider whitespace-nowrap transition-colors shadow"
          >
            Speak with Equipment Director
          </button>
        </motion.div>

      </div>
    </section>
  );
};

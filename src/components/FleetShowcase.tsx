import React, { useState } from 'react';
import { EQUIPMENT_INVENTORY } from '../data/equipmentData';
import { EquipmentCategory, EquipmentItem } from '../types';
import { Gauge, Weight, Ruler, Fuel, ShieldCheck, ChevronRight, X, FileText, Check, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface FleetShowcaseProps {
  onOpenQuoteModal: (service?: string, model?: string) => void;
}

export const FleetShowcase: React.FC<FleetShowcaseProps> = ({ onOpenQuoteModal }) => {
  const [selectedCategory, setSelectedCategory] = useState<EquipmentCategory>('all');
  const [activeModalItem, setActiveModalItem] = useState<EquipmentItem | null>(null);

  const categories: { id: EquipmentCategory; label: string }[] = [
    { id: 'all', label: 'All Equipment' },
    { id: 'excavator', label: 'Excavators' },
    { id: 'wheel-loader', label: 'Wheel Loaders' },
    { id: 'mining', label: 'Heavy Mining' },
    { id: 'ev-equipment', label: 'Electric Vehicles' },
    { id: 'long-reach', label: 'Long Reach' },
  ];

  const filteredItems = selectedCategory === 'all'
    ? EQUIPMENT_INVENTORY
    : EQUIPMENT_INVENTORY.filter((item) => item.category === selectedCategory);

  return (
    <section id="fleet" className="py-20 lg:py-28 bg-white border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-zinc-100 text-[#18181B] text-xs font-bold uppercase tracking-wider mb-3">
              <span>Machinery Inventory</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-[#18181B] tracking-tight transition-all duration-300">
              {selectedCategory === 'all' && 'Featured Machinery Fleet'}
              {selectedCategory === 'excavator' && 'Featured Excavator Fleet'}
              {selectedCategory === 'wheel-loader' && 'Featured Wheel Loaders'}
              {selectedCategory === 'mining' && 'Heavy Mining Equipment'}
              {selectedCategory === 'ev-equipment' && 'Electric Equipment Fleet'}
              {selectedCategory === 'long-reach' && 'Long Reach Excavators'}
            </h2>
            <p className="mt-2 text-base text-zinc-600">
              Ready for inspection and immediate mobilization at our Tema logistics yard and partner depots.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-2 text-xs font-bold rounded-lg transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-[#18181B] text-white shadow-sm'
                    : 'bg-zinc-100 text-zinc-700 hover:bg-zinc-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Equipment Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                transition={{ duration: 0.3 }}
                key={item.id}
                className="bg-white rounded-2xl border border-zinc-200 overflow-hidden shadow-sm hover:shadow-lg transition-all flex flex-col justify-between group"
              >
                <div>
                {/* Image & Badges */}
                <div className="relative aspect-[16/10] bg-zinc-900 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-black/20" />
                  
                  {/* Brand Pill */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-[#09090B]/90 backdrop-blur-md text-white text-[11px] font-bold border border-white/20">
                    {item.brand}
                  </div>

                  {/* Availability Badge */}
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-emerald-500 text-white text-[10px] font-bold shadow flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                    <span>{item.availability}</span>
                  </div>

                  {/* Category overlay */}
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="text-[11px] font-semibold text-[#FFA500] uppercase tracking-wider block">
                      {item.categoryLabel}
                    </span>
                    <h3 className="font-heading text-lg font-bold text-white leading-tight drop-shadow">
                      {item.name}
                    </h3>
                  </div>
                </div>

                {/* Key Specs Bar */}
                <div className="p-5 border-b border-zinc-100 bg-white grid grid-cols-2 gap-y-4 gap-x-4 text-xs">
                  <div className="flex flex-col border-l-2 border-[#FFA500] pl-2">
                    <span className="text-[10px] text-zinc-400 uppercase font-bold tracking-wider">Weight</span>
                    <strong className="text-zinc-900 font-black text-sm">{item.operatingWeight}</strong>
                  </div>
                  <div className="flex flex-col border-l-2 border-[#FFA500] pl-2">
                    <span className="text-[10px] text-zinc-400 uppercase font-bold tracking-wider">
                      {item.type === 'Wheel Loader' ? 'Payload' : 'Max Dig'}
                    </span>
                    <strong className="text-zinc-900 font-black text-sm truncate">
                      {item.type === 'Wheel Loader' ? item.payload : item.maxDiggingDepth}
                    </strong>
                  </div>
                  <div className="flex flex-col border-l-2 border-[#FFA500] pl-2">
                    <span className="text-[10px] text-zinc-400 uppercase font-bold tracking-wider">Engine Power</span>
                    <strong className="text-zinc-900 font-black text-sm">{item.enginePower}</strong>
                  </div>
                  <div className="flex flex-col border-l-2 border-[#FFA500] pl-2">
                    <span className="text-[10px] text-zinc-400 uppercase font-bold tracking-wider">Bucket</span>
                    <strong className="text-zinc-900 font-black text-sm">{item.bucketCapacity}</strong>
                  </div>
                </div>

                {/* Description and Key bullet */}
                <div className="p-5 space-y-4 bg-zinc-50/50 flex-grow">
                  <p className="text-xs text-zinc-600 leading-relaxed line-clamp-2">
                    {item.description}
                  </p>

                  <div className="flex items-center justify-between text-xs pt-2 border-t border-zinc-200">
                    <span className="text-zinc-500 font-semibold uppercase text-[10px] tracking-wider">Status</span>
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="font-bold text-[#18181B]">{item.availability}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-5 pt-0 grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setActiveModalItem(item)}
                  className="py-2.5 px-3 rounded-lg border border-zinc-300 hover:border-[#18181B] text-zinc-700 hover:text-[#18181B] text-xs font-bold transition-colors flex items-center justify-center gap-1"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Spec Sheet</span>
                </button>
                <button
                  type="button"
                  onClick={() => onOpenQuoteModal('sales', item.name)}
                  className="py-2.5 px-3 rounded-lg bg-[#18181B] hover:bg-[#E85D04] text-white text-xs font-bold transition-colors flex items-center justify-center gap-1 shadow-sm"
                >
                  <span>Inquire Now</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
          </AnimatePresence>
        </motion.div>

        {/* Modal for Detailed Technical Spec Sheet */}
        {activeModalItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/70 backdrop-blur-sm animate-in fade-in duration-150">
            <div
              className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-zinc-200"
              role="dialog"
              aria-modal="true"
            >
              {/* Modal Header */}
              <div className="sticky top-0 bg-white px-6 py-4 border-b border-zinc-200 flex items-center justify-between z-10">
                <div>
                  <span className="text-[11px] font-bold text-[#E85D04] uppercase tracking-wider block">
                    Technical Specifications
                  </span>
                  <h3 className="font-heading text-xl font-extrabold text-[#18181B]">
                    {activeModalItem.name}
                  </h3>
                </div>
                <button
                  onClick={() => setActiveModalItem(null)}
                  className="p-2 text-zinc-400 hover:text-zinc-700 rounded-lg hover:bg-zinc-100"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 space-y-6 text-zinc-800">
                {/* Visual Banner */}
                <div className="relative h-48 rounded-xl overflow-hidden bg-zinc-900">
                  <img
                    src={activeModalItem.image}
                    alt={activeModalItem.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-4 text-white">
                    <span className="text-xs font-semibold text-emerald-400">
                      Status: {activeModalItem.availability}
                    </span>
                    <p className="text-sm font-bold text-zinc-200">
                      Location: Tema Logistics Yard, Ghana
                    </p>
                  </div>
                </div>

                {/* Narrative Description */}
                <div>
                  <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-1">
                    Machine Overview
                  </h4>
                  <p className="text-sm text-zinc-700 leading-relaxed">
                    {activeModalItem.description}
                  </p>
                </div>

                {/* Key Technical Matrix */}
                <div>
                  <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-3">
                    Engineering Parameters
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
                    <div className="p-3 rounded-lg bg-zinc-50 border border-zinc-200">
                      <span className="text-zinc-400 block text-[10px] uppercase font-semibold">Engine Model</span>
                      <strong className="text-zinc-900 font-bold">{activeModalItem.specs.engineModel}</strong>
                    </div>
                    <div className="p-3 rounded-lg bg-zinc-50 border border-zinc-200">
                      <span className="text-zinc-400 block text-[10px] uppercase font-semibold">Operating Weight</span>
                      <strong className="text-zinc-900 font-bold">{activeModalItem.operatingWeight}</strong>
                    </div>
                    <div className="p-3 rounded-lg bg-zinc-50 border border-zinc-200">
                      <span className="text-zinc-400 block text-[10px] uppercase font-semibold">Engine Power</span>
                      <strong className="text-zinc-900 font-bold">{activeModalItem.enginePower}</strong>
                    </div>
                    <div className="p-3 rounded-lg bg-zinc-50 border border-zinc-200">
                      <span className="text-zinc-400 block text-[10px] uppercase font-semibold">Bucket Capacity</span>
                      <strong className="text-zinc-900 font-bold">{activeModalItem.bucketCapacity}</strong>
                    </div>
                    {activeModalItem.type === 'Excavator' && (
                      <div className="p-3 rounded-lg bg-zinc-50 border border-zinc-200">
                        <span className="text-zinc-400 block text-[10px] uppercase font-semibold">Max Digging Depth</span>
                        <strong className="text-zinc-900 font-bold">{activeModalItem.maxDiggingDepth}</strong>
                      </div>
                    )}
                    {activeModalItem.type === 'Wheel Loader' && (
                      <div className="p-3 rounded-lg bg-zinc-50 border border-zinc-200">
                        <span className="text-zinc-400 block text-[10px] uppercase font-semibold">Payload</span>
                        <strong className="text-zinc-900 font-bold">{activeModalItem.payload}</strong>
                      </div>
                    )}
                    {activeModalItem.specs.hydraulicFlow && (
                      <div className="p-3 rounded-lg bg-zinc-50 border border-zinc-200">
                        <span className="text-zinc-400 block text-[10px] uppercase font-semibold">Hydraulic Flow</span>
                        <strong className="text-zinc-900 font-bold">{activeModalItem.specs.hydraulicFlow}</strong>
                      </div>
                    )}
                    {activeModalItem.specs.fuelTankCapacity && (
                      <div className="p-3 rounded-lg bg-zinc-50 border border-zinc-200">
                        <span className="text-zinc-400 block text-[10px] uppercase font-semibold">Fuel Tank</span>
                        <strong className="text-zinc-900 font-bold">{activeModalItem.specs.fuelTankCapacity}</strong>
                      </div>
                    )}
                    {activeModalItem.specs.trackShoeWidth && (
                      <div className="p-3 rounded-lg bg-zinc-50 border border-zinc-200">
                        <span className="text-zinc-400 block text-[10px] uppercase font-semibold">Track Shoe Width</span>
                        <strong className="text-zinc-900 font-bold">{activeModalItem.specs.trackShoeWidth}</strong>
                      </div>
                    )}
                    {activeModalItem.type === 'Excavator' && (
                      <div className="p-3 rounded-lg bg-zinc-50 border border-zinc-200">
                        <span className="text-zinc-400 block text-[10px] uppercase font-semibold">Boom / Arm Setup</span>
                        <strong className="text-zinc-900 font-bold">{activeModalItem.specs.boomLength || 'Standard Reach'}</strong>
                      </div>
                    )}
                    {activeModalItem.type === 'Wheel Loader' && activeModalItem.specs.dumpClearance && (
                      <div className="p-3 rounded-lg bg-zinc-50 border border-zinc-200">
                        <span className="text-zinc-400 block text-[10px] uppercase font-semibold">Dump Clearance</span>
                        <strong className="text-zinc-900 font-bold">{activeModalItem.specs.dumpClearance}</strong>
                      </div>
                    )}
                  </div>
                </div>

                {/* Highlight Features */}
                <div>
                  <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">
                    Key Features & Advantages
                  </h4>
                  <div className="space-y-2">
                    {activeModalItem.highlightFeatures.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-zinc-700">
                        <Check className="w-4 h-4 text-[#E85D04] shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Suitable Applications */}
                <div>
                  <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">
                    Recommended Site Applications in Ghana
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeModalItem.suitableFor.map((app, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-zinc-100 text-zinc-700 rounded-full text-xs font-medium border border-zinc-200"
                      >
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal Footer Actions */}
              <div className="p-6 bg-zinc-50 border-t border-zinc-200 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="text-xs text-zinc-500">
                  <span>Duty-paid inspection available at Tema Heavy Yard</span>
                </div>
                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={() => setActiveModalItem(null)}
                    className="px-4 py-2.5 rounded-lg border border-zinc-300 text-zinc-700 text-xs font-bold hover:bg-zinc-100 w-1/2 sm:w-auto"
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      const modelName = activeModalItem.name;
                      setActiveModalItem(null);
                      onOpenQuoteModal('sales', modelName);
                    }}
                    className="px-5 py-2.5 rounded-lg bg-[#18181B] hover:bg-[#E85D04] text-white text-xs font-bold transition-colors w-1/2 sm:w-auto shadow-sm"
                  >
                    Request Official Quote
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

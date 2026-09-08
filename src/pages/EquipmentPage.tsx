import React, { useState, useMemo } from 'react';
import { PageId, EquipmentModel, EquipmentCategory } from '../types';
import { EQUIPMENT_DATA } from '../data/equipmentData';
import {
  Search,
  Filter,
  ArrowRight,
  Weight,
  Wrench,
  Gauge,
  PhoneCall,
  CheckCircle,
  HelpCircle,
} from 'lucide-react';

interface EquipmentPageProps {
  onNavigate: (page: PageId) => void;
  onOpenQuote: (modelName?: string, defaultService?: 'rental' | 'sales' | 'spares') => void;
  onSelectEquipment: (equipment: EquipmentModel) => void;
}

export const EquipmentPage: React.FC<EquipmentPageProps> = ({
  onNavigate,
  onOpenQuote,
  onSelectEquipment,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | EquipmentCategory>('all');
  const [selectedManufacturer, setSelectedManufacturer] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Extract unique manufacturers
  const manufacturers = useMemo(() => {
    const set = new Set(EQUIPMENT_DATA.map((m) => m.manufacturer));
    return ['all', ...Array.from(set)];
  }, []);

  // Filtered equipment list
  const filteredList = useMemo(() => {
    return EQUIPMENT_DATA.filter((item) => {
      if (selectedCategory !== 'all' && item.category !== selectedCategory) {
        return false;
      }
      if (selectedManufacturer !== 'all' && item.manufacturer !== selectedManufacturer) {
        return false;
      }
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        return (
          item.model.toLowerCase().includes(q) ||
          item.manufacturer.toLowerCase().includes(q) ||
          item.applications.toLowerCase().includes(q) ||
          item.operatingWeight.toLowerCase().includes(q)
        );
      }
      return true;
    });
  }, [selectedCategory, selectedManufacturer, searchQuery]);

  return (
    <div className="w-full bg-[#F4F6F8] min-h-screen pb-20">
      {/* ----------------- PAGE HEADER ----------------- */}
      <section className="bg-[#082B4C] text-white py-14 sm:py-16 border-b border-slate-800 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#F47721]">
              Commercial Machinery Fleet
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight uppercase leading-tight">
              HEAVY EQUIPMENT <br />
              <span className="text-[#F47721]">FOR SERIOUS PROJECTS.</span>
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Explore our range of excavators, wheel loaders and cranes available for sale and rental. Fully certified, supported by genuine spare parts and rapid dispatch across Ghana.
            </p>
          </div>
        </div>
      </section>

      {/* ----------------- FILTER & TABS BAR ----------------- */}
      <section className="sticky top-[74px] sm:top-[80px] z-30 bg-white border-b border-slate-200 shadow-xs py-3.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            {/* Category Tabs: ALL, EXCAVATORS, WHEEL LOADERS, CRANES */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 lg:pb-0 scrollbar-none">
              {[
                { id: 'all', label: 'ALL EQUIPMENT' },
                { id: 'excavator', label: 'EXCAVATORS' },
                { id: 'wheel-loader', label: 'WHEEL LOADERS' },
                { id: 'crane', label: 'CRANES' },
              ].map((tab) => {
                const isActive = selectedCategory === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setSelectedCategory(tab.id as 'all' | EquipmentCategory)}
                    className={`px-4 py-2 text-xs font-bold tracking-wider uppercase rounded-md whitespace-nowrap transition-all cursor-pointer ${
                      isActive
                        ? 'bg-[#082B4C] text-white shadow-xs'
                        : 'text-slate-600 hover:text-[#082B4C] hover:bg-slate-100'
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>

            {/* Manufacturer & Search Filters */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="relative">
                <select
                  value={selectedManufacturer}
                  onChange={(e) => setSelectedManufacturer(e.target.value)}
                  className="text-xs font-bold text-slate-700 bg-slate-50 border border-slate-300 rounded-md px-3 py-2 pr-8 focus:outline-hidden focus:border-[#082B4C]"
                >
                  <option value="all">All Manufacturers</option>
                  {manufacturers
                    .filter((m) => m !== 'all')
                    .map((m) => (
                      <option key={m} value={m}>
                        {m}
                      </option>
                    ))}
                </select>
              </div>

              <div className="relative flex-1 sm:w-64">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                <input
                  type="text"
                  placeholder="Search model or spec..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full text-xs bg-slate-50 border border-slate-300 rounded-md pl-9 pr-3 py-2 focus:outline-hidden focus:border-[#082B4C]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------- CATALOGUE GRID ----------------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="flex items-center justify-between mb-6">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
            Showing <span className="text-[#082B4C] font-bold">{filteredList.length}</span> models available for Sales &amp; Rental in Ghana
          </p>

          <div className="text-xs text-slate-400 hidden sm:block">
            Authentic OEM Specifications Visible
          </div>
        </div>

        {filteredList.length === 0 ? (
          <div className="bg-white rounded-xl border border-slate-200 p-12 text-center space-y-3">
            <HelpCircle className="w-10 h-10 text-slate-400 mx-auto" />
            <h3 className="text-base font-bold text-slate-800">No matching equipment found</h3>
            <p className="text-xs text-slate-500 max-w-sm mx-auto">
              We can source any specialized heavy machinery model upon request through our Ghana and international dealer channels.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSelectedManufacturer('all');
                setSearchQuery('');
              }}
              className="bg-[#082B4C] text-white px-4 py-2 rounded-lg text-xs font-bold mt-2"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredList.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs hover:border-[#082B4C]/40 transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Machinery Image */}
                  <div className="relative h-56 bg-slate-100 overflow-hidden">
                    <img
                      src={item.image}
                      alt={`${item.manufacturer} ${item.model}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3 left-3 bg-[#082B4C] text-white text-[10px] font-bold px-2.5 py-1 rounded shadow-xs uppercase tracking-wider">
                      {item.categoryName}
                    </div>

                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-xs text-[#082B4C] text-[10px] font-bold px-2.5 py-1 rounded shadow-xs">
                      {item.operatingWeight}
                    </div>
                  </div>

                  {/* Machinery Specs Info */}
                  <div className="p-5 space-y-3">
                    <div>
                      <span className="text-xs font-semibold text-[#F47721] uppercase tracking-wider block">
                        {item.manufacturer}
                      </span>
                      <h3 className="text-xl font-black text-[#102A43] tracking-tight">
                        {item.model}
                      </h3>
                    </div>

                    {/* Spec Grid */}
                    <div className="grid grid-cols-2 gap-2 text-xs py-2 border-y border-slate-100">
                      <div>
                        <span className="text-slate-400 block text-[10px] font-bold uppercase">Capacity / Payload</span>
                        <span className="font-bold text-slate-800">
                          {item.payloadCapacity || item.bucketCapacity || 'Standard'}
                        </span>
                      </div>
                      <div>
                        <span className="text-slate-400 block text-[10px] font-bold uppercase">Engine Power</span>
                        <span className="font-bold text-slate-800">
                          {item.enginePower || 'Industrial Turbo'}
                        </span>
                      </div>
                    </div>

                    {/* Undercarriage/Type */}
                    <div className="text-xs">
                      <span className="text-slate-400 block text-[10px] font-bold uppercase">Undercarriage / Build</span>
                      <span className="font-semibold text-slate-700">
                        {item.undercarriageOrType}
                      </span>
                    </div>

                    {/* Primary Application */}
                    <div className="text-xs">
                      <span className="text-slate-400 block text-[10px] font-bold uppercase">Primary Applications</span>
                      <p className="text-slate-600 line-clamp-2 mt-0.5">
                        {item.applications}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bottom Card Actions */}
                <div className="p-5 pt-0 space-y-2">
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => onSelectEquipment(item)}
                      className="border border-slate-300 hover:border-[#082B4C] text-slate-800 py-2.5 rounded-lg text-xs font-bold text-center transition-colors cursor-pointer"
                    >
                      View Specs
                    </button>
                    <button
                      onClick={() => onOpenQuote(`${item.manufacturer} ${item.model}`, 'rental')}
                      className="bg-[#F47721] hover:bg-[#D96213] text-white py-2.5 rounded-lg text-xs font-bold text-center transition-colors cursor-pointer shadow-xs"
                    >
                      Enquire Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ----------------- BOTTOM CTA: CAN'T FIND THE RIGHT MACHINE? ----------------- */}
        <div className="mt-16 bg-[#082B4C] rounded-2xl p-8 sm:p-10 text-white shadow-xl relative overflow-hidden">
          <div className="relative z-10 max-w-2xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#F47721]">
              CUSTOM FLEET SOURCING
            </span>
            <h3 className="text-2xl sm:text-3xl font-black tracking-tight uppercase">
              CAN&apos;T FIND THE RIGHT MACHINE?
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Tell us what your project requires and our team can help you identify the right equipment. On request any heavy excavator, wheel loader, or crane models can be supplied.
            </p>
            <div className="pt-3">
              <button
                onClick={() => onNavigate('about-contact')}
                className="bg-[#F47721] hover:bg-[#D96213] text-white px-6 py-3 rounded-lg text-sm font-bold tracking-wide transition-all shadow-md inline-flex items-center gap-2 cursor-pointer"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Talk to Our Team</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

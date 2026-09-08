import React, { useState } from 'react';
import { PageId, EquipmentModel } from '../types';
import { EQUIPMENT_DATA } from '../data/equipmentData';
import {
  Wrench,
  ShieldCheck,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
  Package,
  Cpu,
  Layers,
  PhoneCall,
  Send,
} from 'lucide-react';

interface SalesSparesPageProps {
  onNavigate: (page: PageId) => void;
  onOpenQuote: (modelName?: string, defaultService?: 'rental' | 'sales' | 'spares') => void;
  onSelectEquipment: (equipment: EquipmentModel) => void;
}

export const SalesSparesPage: React.FC<SalesSparesPageProps> = ({
  onNavigate,
  onOpenQuote,
  onSelectEquipment,
}) => {
  // Select notable equipment models for sale
  const salesMachinery = EQUIPMENT_DATA.slice(0, 6);

  // Quick Spares Form state
  const [partName, setPartName] = useState('');
  const [machineModel, setMachineModel] = useState('');
  const [contactName, setContactName] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [sparesSubmitted, setSparesSubmitted] = useState(false);

  const handleSparesSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSparesSubmitted(true);
  };

  return (
    <div className="w-full bg-[#F4F6F8]">
      {/* ----------------- PAGE HEADER ----------------- */}
      <section className="bg-[#082B4C] text-white py-14 sm:py-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#F47721]">
              Capital Equipment &amp; Genuine Parts
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight uppercase leading-tight">
              SALES &amp; GENUINE SPARES
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Acquire proven heavy equipment with official warranties, backed by a comprehensive stock of OEM spare parts and technical field service throughout Ghana.
            </p>
          </div>
        </div>
      </section>

      {/* ----------------- SECTION 1: HEAVY EQUIPMENT FOR SALE ----------------- */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#F47721] block mb-1">
                EQUIPMENT ACQUISITION
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#102A43] tracking-tight uppercase">
                HEAVY EQUIPMENT FOR SALE
              </h2>
              <p className="text-sm text-slate-600 max-w-2xl mt-1">
                Find dependable equipment for demanding construction, mining and infrastructure operations. Available with OEM warranties and financing assistance.
              </p>
            </div>

            <button
              onClick={() => onOpenQuote(undefined, 'sales')}
              className="bg-[#082B4C] hover:bg-[#061E35] text-white px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wide transition-colors flex items-center gap-2 cursor-pointer self-start md:self-auto shrink-0"
            >
              <span>Enquire About Equipment</span>
              <ArrowRight className="w-4 h-4 text-[#F47721]" />
            </button>
          </div>

          {/* Machinery Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {salesMachinery.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs hover:border-[#082B4C]/40 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-52 bg-slate-100 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.model}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3 left-3 bg-[#082B4C] text-white text-[10px] font-bold px-2.5 py-0.5 rounded shadow-xs uppercase tracking-wider">
                      {item.categoryName}
                    </div>
                    <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-xs text-[#102A43] text-[11px] font-bold px-2.5 py-1 rounded shadow-xs">
                      Brand New / Certified
                    </div>
                  </div>

                  <div className="p-5 space-y-2.5">
                    <div className="text-xs font-bold text-[#F47721] uppercase">
                      {item.manufacturer}
                    </div>
                    <h3 className="text-lg font-black text-[#102A43]">
                      {item.model}
                    </h3>

                    <div className="grid grid-cols-2 gap-2 text-xs py-2 border-y border-slate-100">
                      <div>
                        <span className="text-slate-400 block text-[10px] uppercase font-bold">Weight Class</span>
                        <span className="font-bold text-slate-800">{item.operatingWeight}</span>
                      </div>
                      <div>
                        <span className="text-slate-400 block text-[10px] uppercase font-bold">Power</span>
                        <span className="font-bold text-slate-800">{item.enginePower || 'Industrial Spec'}</span>
                      </div>
                    </div>

                    <p className="text-xs text-slate-600 line-clamp-2">
                      {item.applications}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0 grid grid-cols-2 gap-2">
                  <button
                    onClick={() => onSelectEquipment(item)}
                    className="border border-slate-300 hover:border-[#082B4C] text-slate-700 py-2 rounded-lg text-xs font-bold text-center transition-colors"
                  >
                    View Specs
                  </button>
                  <button
                    onClick={() => onOpenQuote(`${item.manufacturer} ${item.model}`, 'sales')}
                    className="bg-[#F47721] hover:bg-[#D96213] text-white py-2 rounded-lg text-xs font-bold text-center transition-colors shadow-xs"
                  >
                    Purchase Enquiry
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <button
              onClick={() => onNavigate('equipment')}
              className="inline-flex items-center gap-2 text-sm font-bold text-[#082B4C] hover:text-[#F47721] transition-colors cursor-pointer"
            >
              <span>Explore Complete 100+ Machinery Model Catalogue</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* ----------------- SECTION 2: GENUINE SPARES. RELIABLE SUPPORT. ----------------- */}
      <section className="py-16 sm:py-20 bg-[#F4F6F8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#F47721]">
              MAINTENANCE &amp; COMPONENT STOCK
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#102A43] tracking-tight uppercase">
              GENUINE SPARES. RELIABLE SUPPORT.
            </h2>
            <p className="text-sm text-slate-600">
              Kamla Infra provides original spare parts and direct mechanical support to keep equipment productive and prevent unexpected site shutdowns across Ghana.
            </p>
          </div>

          {/* 3 Feature Blocks */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
            {/* Block 1 */}
            <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-xs hover:border-[#082B4C]/40 transition-all space-y-4">
              <div className="w-12 h-12 rounded-lg bg-[#F4F6F8] text-[#F47721] flex items-center justify-center border border-slate-200">
                <Package className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-black uppercase text-[#102A43] tracking-tight">
                GENUINE SPARES
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Parts suited to your equipment. We supply certified filters, hydraulic pumps, seal kits, tooth points, pins, bushings, track rollers, and undercarriage components from factory partners.
              </p>
            </div>

            {/* Block 2 */}
            <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-xs hover:border-[#082B4C]/40 transition-all space-y-4">
              <div className="w-12 h-12 rounded-lg bg-[#F4F6F8] text-[#F47721] flex items-center justify-center border border-slate-200">
                <Wrench className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-black uppercase text-[#102A43] tracking-tight">
                EQUIPMENT SUPPORT
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Practical support for your machinery requirements. Mobile diagnostic vans and field technicians available for scheduled servicing, troubleshooting, and fast on-site repair.
              </p>
            </div>

            {/* Block 3 */}
            <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-xs hover:border-[#082B4C]/40 transition-all space-y-4">
              <div className="w-12 h-12 rounded-lg bg-[#F4F6F8] text-[#F47721] flex items-center justify-center border border-slate-200">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-black uppercase text-[#102A43] tracking-tight">
                LONGER EQUIPMENT LIFE
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Help keep your machines performing reliably. Preventative maintenance kits and OEM-grade lubrication schedules designed to maximize machine residual value and uptime.
              </p>
            </div>
          </div>

          {/* Quick Spare Parts Enquiry Box */}
          <div className="bg-[#082B4C] text-white rounded-2xl p-8 sm:p-10 shadow-xl border border-slate-700">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#F47721]">
                  PARTS DESK
                </span>
                <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight">
                  NEED A SPARE PART?
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Provide your machinery model, serial or part number, and our Ghana warehouse team will confirm immediate stock or air-freight lead time.
                </p>
                <div className="pt-2 flex items-center gap-4 text-xs text-slate-300">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#F47721]" /> XCMG Genuine Parts
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#F47721]" /> LiuGong &amp; SANY Parts
                  </span>
                </div>
              </div>

              <div className="lg:col-span-6">
                {sparesSubmitted ? (
                  <div className="bg-white/10 p-6 rounded-xl border border-white/20 text-center space-y-3">
                    <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                    <h4 className="text-base font-bold text-white">Parts Enquiry Received</h4>
                    <p className="text-xs text-slate-300">
                      Our Ghana spare parts specialist will check inventory for &quot;{partName}&quot; and call you at {contactPhone}.
                    </p>
                    <button
                      onClick={() => setSparesSubmitted(false)}
                      className="text-xs text-[#F47721] font-bold underline"
                    >
                      Enquire for another part
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSparesSubmit} className="space-y-3 bg-white/10 p-5 rounded-xl border border-white/15">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-semibold text-slate-300 mb-1">
                          Part Name / Number <span className="text-red-400">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Hydraulic Filter / Bucket Teeth"
                          value={partName}
                          onChange={(e) => setPartName(e.target.value)}
                          className="w-full text-xs px-3 py-2 bg-[#061E35] border border-slate-700 rounded-md text-white placeholder:text-slate-500 focus:outline-hidden focus:border-[#F47721]"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-semibold text-slate-300 mb-1">
                          Machine Model
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. XE215i or ZL50GN"
                          value={machineModel}
                          onChange={(e) => setMachineModel(e.target.value)}
                          className="w-full text-xs px-3 py-2 bg-[#061E35] border border-slate-700 rounded-md text-white placeholder:text-slate-500 focus:outline-hidden focus:border-[#F47721]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-semibold text-slate-300 mb-1">
                          Your Name <span className="text-red-400">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Name / Company"
                          value={contactName}
                          onChange={(e) => setContactName(e.target.value)}
                          className="w-full text-xs px-3 py-2 bg-[#061E35] border border-slate-700 rounded-md text-white placeholder:text-slate-500 focus:outline-hidden focus:border-[#F47721]"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-semibold text-slate-300 mb-1">
                          Phone Number <span className="text-red-400">*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+233 XX XXX XXXX"
                          value={contactPhone}
                          onChange={(e) => setContactPhone(e.target.value)}
                          className="w-full text-xs px-3 py-2 bg-[#061E35] border border-slate-700 rounded-md text-white placeholder:text-slate-500 focus:outline-hidden focus:border-[#F47721]"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-[#F47721] hover:bg-[#D96213] text-white py-2.5 rounded-md text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 mt-2 cursor-pointer"
                    >
                      <span>Send an Enquiry</span>
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

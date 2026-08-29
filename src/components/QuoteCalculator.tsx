import React, { useState } from 'react';
import { GHANA_LOCATIONS, EQUIPMENT_INVENTORY } from '../data/equipmentData';
import { Calculator, Check, Send, Phone, MessageSquare, Truck, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const QuoteCalculator: React.FC = () => {
  const [serviceType, setServiceType] = useState<'rental' | 'sales' | 'trading'>('rental');
  const [tonnageClass, setTonnageClass] = useState('20t');
  const [location, setLocation] = useState('accra-tema');
  const [duration, setDuration] = useState('1-month');
  const [needOperator, setNeedOperator] = useState(true);
  const [projectSector, setProjectSector] = useState('road-civil');

  // Contact details
  const [fullName, setFullName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [additionalNotes, setAdditionalNotes] = useState('');

  const [submitted, setSubmitted] = useState(false);

  // Recommendations based on tonnage class
  const getSelectedMachine = () => {
    if (tonnageClass === '20t') return EQUIPMENT_INVENTORY.find((m) => m.id === 'sany-sy215c') || EQUIPMENT_INVENTORY[0];
    if (tonnageClass === '30t') return EQUIPMENT_INVENTORY.find((m) => m.id === 'cat-336d2l') || EQUIPMENT_INVENTORY[1];
    if (tonnageClass === '50t') return EQUIPMENT_INVENTORY.find((m) => m.id === 'sany-sy500h') || EQUIPMENT_INVENTORY[3];
    return EQUIPMENT_INVENTORY.find((m) => m.id === 'sany-sy245lr') || EQUIPMENT_INVENTORY[5];
  };

  const selectedMachine = getSelectedMachine();
  const selectedLocationObj = GHANA_LOCATIONS.find((loc) => loc.value === location) || GHANA_LOCATIONS[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const generateWhatsAppMessage = () => {
    const text = `Hello Kamla Infra Ghana Ltd., I would like an equipment quote:
- Service: ${serviceType.toUpperCase()}
- Machinery Class: ${tonnageClass.toUpperCase()} (${selectedMachine.name})
- Location: ${selectedLocationObj.label}
- Duration/Project: ${duration} (${projectSector})
- Operator Required: ${needOperator ? 'Yes' : 'No'}
- Client: ${fullName || 'Contractor'} (${companyName || 'Private'})
- Phone: ${phone}`;
    return `https://wa.me/233244567890?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="calculator" className="py-20 lg:py-28 bg-slate-900 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/10 text-[#FFA500] text-xs font-bold uppercase tracking-wider mb-3">
            <Calculator className="w-3.5 h-3.5 text-[#E85D04]" />
            <span>Interactive Availability & Quote Builder</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Equipment Quote & Logistics Calculator
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Configure your machinery requirements in Ghana for an immediate specification estimate and rapid mobilization quotation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Form Configuration */}
          <div className="lg:col-span-7 bg-slate-800/80 rounded-2xl p-6 sm:p-8 border border-slate-700/80 shadow-xl">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold font-heading text-white">Quotation Request Received</h3>
                <p className="text-sm text-slate-300 max-w-md mx-auto">
                  Thank you, <strong>{fullName || 'Valued Client'}</strong>. Our machinery logistics desk in Tema has received your request for <strong>{selectedMachine.name}</strong> at <strong>{selectedLocationObj.label}</strong>.
                </p>
                <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3">
                  <a
                    href={generateWhatsAppMessage()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-[#E85D04] hover:bg-[#ff6d00] text-white font-bold text-xs uppercase tracking-wider rounded-lg flex items-center justify-center gap-2 shadow"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Connect Instantly on WhatsApp</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="px-4 py-3 bg-slate-700 hover:bg-slate-600 text-slate-200 text-xs font-bold rounded-lg"
                  >
                    Modify Request
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Step 1: Service Type */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    1. Select Service Type
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: 'rental', label: 'Equipment Rental' },
                      { id: 'sales', label: 'Outright Purchase' },
                      { id: 'trading', label: 'Machinery Trade-In' },
                    ].map((st) => (
                      <button
                        key={st.id}
                        type="button"
                        onClick={() => setServiceType(st.id as any)}
                        className={`py-2.5 px-3 rounded-lg text-xs font-bold transition-all border ${
                          serviceType === st.id
                            ? 'bg-[#E85D04] text-white border-[#E85D04] shadow'
                            : 'bg-slate-900/60 text-slate-300 border-slate-700 hover:bg-slate-700'
                        }`}
                      >
                        {st.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Step 2: Excavator Class */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    2. Required Machinery Class
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {[
                      { id: '20t', label: '20-22 Ton', sub: 'General Civil' },
                      { id: '30t', label: '34-36 Ton', sub: 'Infrastructure' },
                      { id: '50t', label: '50 Ton', sub: 'Heavy Mining' },
                      { id: 'reach', label: '16m Reach', sub: 'River Dredging' },
                    ].map((ton) => (
                      <button
                        key={ton.id}
                        type="button"
                        onClick={() => setTonnageClass(ton.id)}
                        className={`p-3 rounded-lg text-left transition-all border ${
                          tonnageClass === ton.id
                            ? 'bg-white text-slate-900 border-white shadow'
                            : 'bg-slate-900/60 text-slate-300 border-slate-700 hover:bg-slate-700'
                        }`}
                      >
                        <span className="block font-bold text-xs">{ton.label}</span>
                        <span className="block text-[10px] text-slate-400">{ton.sub}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Step 3: Location in Ghana & Project Type */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                      3. Project Site Location (Ghana)
                    </label>
                    <select
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#E85D04]"
                    >
                      {GHANA_LOCATIONS.map((loc) => (
                        <option key={loc.value} value={loc.value}>
                          {loc.label} ({loc.zone})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                      4. Project Industry Sector
                    </label>
                    <select
                      value={projectSector}
                      onChange={(e) => setProjectSector(e.target.value)}
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#E85D04]"
                    >
                      <option value="road-civil">Road Construction & Civil Infrastructure</option>
                      <option value="mining-gold">Mining & Mineral Concession (Gold/Bauxite)</option>
                      <option value="quarry">Granite Quarry & Aggregates</option>
                      <option value="dredging">Dredging & Maritime Lagoon Works</option>
                      <option value="real-estate">Commercial Real Estate Groundworks</option>
                    </select>
                  </div>
                </div>

                {/* Step 4: Duration & Operator */}
                {serviceType === 'rental' && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-slate-700/60">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                        Rental Estimated Duration
                      </label>
                      <select
                        value={duration}
                        onChange={(e) => setDuration(e.target.value)}
                        className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#E85D04]"
                      >
                        <option value="1-2-weeks">Short Term (1 - 2 Weeks)</option>
                        <option value="1-month">1 Month Standard Contract</option>
                        <option value="3-6-months">3 - 6 Months Project Lease</option>
                        <option value="1-year-plus">12+ Months Mining/Civil Contract</option>
                      </select>
                    </div>

                    <div className="flex items-center gap-3 pt-6">
                      <input
                        type="checkbox"
                        id="operator-check"
                        checked={needOperator}
                        onChange={(e) => setNeedOperator(e.target.checked)}
                        className="w-4 h-4 text-[#E85D04] rounded border-slate-700 focus:ring-[#E85D04]"
                      />
                      <label htmlFor="operator-check" className="text-xs text-slate-300 font-medium cursor-pointer">
                        Include Certified Heavy Machine Operator
                      </label>
                    </div>
                  </div>
                )}

                {/* Contact Information */}
                <div className="pt-4 border-t border-slate-700/60 space-y-4">
                  <span className="block text-xs font-bold uppercase tracking-wider text-slate-400">
                    Your Contact & Company Details
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="text"
                      required
                      placeholder="Full Name / Project Engineer *"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="bg-slate-900 border border-slate-700 rounded-lg px-3.5 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#E85D04]"
                    />
                    <input
                      type="text"
                      placeholder="Company / Contracting Firm"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      className="bg-slate-900 border border-slate-700 rounded-lg px-3.5 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#E85D04]"
                    />
                    <input
                      type="tel"
                      required
                      placeholder="Phone / WhatsApp Number *"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="bg-slate-900 border border-slate-700 rounded-lg px-3.5 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#E85D04]"
                    />
                    <input
                      type="email"
                      required
                      placeholder="Official Email Address *"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-slate-900 border border-slate-700 rounded-lg px-3.5 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#E85D04]"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#E85D04] hover:bg-[#ff6d00] text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-all shadow-lg flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Generate Official Quotation & Check Availability</span>
                </button>
              </form>
            )}
          </div>

          {/* Right Summary Specification Preview Card */}
          <div className="lg:col-span-5 bg-white text-slate-900 rounded-2xl p-6 sm:p-7 shadow-xl border border-slate-200">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-4">
              <div>
                <span className="text-[10px] font-bold text-[#E85D04] uppercase tracking-wider">
                  Recommended Equipment Match
                </span>
                <h3 className="font-heading text-lg font-bold text-[#0B3B60]">
                  {selectedMachine.name}
                </h3>
              </div>
              <span className="text-[11px] font-bold px-2.5 py-1 rounded bg-emerald-100 text-emerald-800">
                {selectedMachine.availability}
              </span>
            </div>

            {/* Machine Mini Preview */}
            <div className="rounded-xl overflow-hidden aspect-[16/9] mb-4 relative bg-slate-900">
              <img
                src={selectedMachine.image}
                alt={selectedMachine.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-black/70 text-white text-[10px] font-bold">
                {selectedMachine.brand} Heavy Duty
              </div>
            </div>

            {/* Spec Matrix */}
            <div className="grid grid-cols-2 gap-2 text-xs mb-4">
              <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                <span className="text-[10px] text-slate-400 block uppercase font-medium">Operating Weight</span>
                <strong className="text-slate-800 font-bold">{selectedMachine.operatingWeight}</strong>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                <span className="text-[10px] text-slate-400 block uppercase font-medium">Engine Output</span>
                <strong className="text-slate-800 font-bold">{selectedMachine.enginePower}</strong>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                <span className="text-[10px] text-slate-400 block uppercase font-medium">Bucket Capacity</span>
                <strong className="text-slate-800 font-bold">{selectedMachine.bucketCapacity}</strong>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                <span className="text-[10px] text-slate-400 block uppercase font-medium">Max Dig Depth</span>
                <strong className="text-slate-800 font-bold">{selectedMachine.maxDiggingDepth}</strong>
              </div>
            </div>

            {/* Logistics & Dispatch Estimates */}
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-2 text-xs mb-5">
              <div className="flex items-center justify-between">
                <span className="text-slate-500 font-medium">Mobilization Hub:</span>
                <span className="font-bold text-slate-800">Tema Logistics Base</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-500 font-medium">Estimated Transit to Site:</span>
                <span className="font-bold text-[#0B3B60]">
                  {location === 'accra-tema' ? 'Same-Day (4 - 8 Hours)' : '24 - 48 Hours'}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-500 font-medium">Field Maintenance SLA:</span>
                <span className="font-bold text-emerald-700">24/7 Rapid Response</span>
              </div>
            </div>

            {/* WhatsApp Direct Action Button */}
            <a
              href={generateWhatsAppMessage()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 bg-[#0B3B60] hover:bg-[#07253D] text-white text-xs font-bold rounded-lg transition-colors flex items-center justify-center gap-2 shadow-sm"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#E85D04]" />
              <span>Send Spec Direct to WhatsApp Desk</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};

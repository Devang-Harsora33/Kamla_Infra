import React, { useState } from 'react';
import { RefreshCw, CheckCircle, ArrowRight, Shield, Award, HelpCircle, CheckCircle2 } from 'lucide-react';

interface TradeInEstimatorProps {
  onOpenQuoteModal: (service?: string) => void;
}

export const TradeInEstimator: React.FC<TradeInEstimatorProps> = ({ onOpenQuoteModal }) => {
  const [currentBrand, setCurrentBrand] = useState('CAT');
  const [currentHours, setCurrentHours] = useState('5000-8000');
  const [condition, setCondition] = useState('Good');
  const [targetUpgrade, setTargetUpgrade] = useState('SANY SY215C (2024 New)');
  const [submitted, setSubmitted] = useState(false);

  const handleTradeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const steps = [
    {
      num: '01',
      title: 'Free On-Site Inspection',
      desc: 'Our certified Ghanaian engineers visit your job site anywhere in Ghana to inspect engine compression, hydraulic pump pressures, and undercarriage wear.',
    },
    {
      num: '02',
      title: 'Transparent Market Valuation',
      desc: 'Receive an honest, competitive buyback valuation certificate within 24 hours based on prevailing West African secondary equipment demand.',
    },
    {
      num: '03',
      title: 'Direct Credit & Upgrade',
      desc: 'Apply 100% of your trade-in equity directly against the purchase or long-term lease of a brand new high-efficiency excavator from our Tema yard.',
    },
  ];

  return (
    <section id="trading" className="py-20 lg:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-orange-50 text-[#E85D04] text-xs font-bold uppercase tracking-wider mb-3 border border-orange-200">
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Heavy Machinery Trading & Fleet Modernization</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B3B60] tracking-tight">
            Exchange & Upgrade Your Machinery
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Upgrade or exchange your heavy equipment with our straightforward and competitive machinery trading services. Avoid depreciation losses and upgrade to high-efficiency excavators.
          </p>
        </div>

        {/* 3 Step Workflow */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="p-7 rounded-2xl bg-slate-50 border border-slate-200 hover:border-[#0B3B60] transition-all flex flex-col justify-between group"
            >
              <div>
                <span className="font-heading text-3xl font-black text-[#E85D04] mb-4 block">
                  {step.num}
                </span>
                <h3 className="font-heading text-xl font-bold text-slate-900 mb-2 group-hover:text-[#0B3B60] transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Quick Trade-In Valuation Calculator Box */}
        <div className="bg-[#07253D] text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#FFA500] block">
                Trade-In Estimation
              </span>
              <h3 className="font-heading text-2xl sm:text-3xl font-black text-white">
                Request an On-Site Appraisal for Your Existing Equipment
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                We accept major excavator brands (Caterpillar, Komatsu, Hyundai, Hitachi, Doosan, SANY). Our mobile evaluation team can assess equipment stationed across mining pits, quarries, or civil road contracts throughout Ghana.
              </p>
              
              <div className="space-y-2 pt-2 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#E85D04]" />
                  <span>No obligation to trade — appraisal is completely free</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#E85D04]" />
                  <span>Trade multi-unit excavator fleets in a single transaction</span>
                </div>
              </div>
            </div>

            {/* Quick Valuation Form */}
            <div className="lg:col-span-6 bg-white text-slate-900 rounded-2xl p-6 sm:p-7 shadow-lg">
              {submitted ? (
                <div className="text-center py-8 space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                  <h4 className="font-heading text-xl font-bold text-slate-900">Appraisal Request Submitted</h4>
                  <p className="text-xs text-slate-600 max-w-sm mx-auto">
                    Our technical valuation officer will review your equipment parameters and contact you to schedule an on-site inspection.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-3 px-4 py-2 bg-[#0B3B60] text-white text-xs font-bold rounded-lg"
                  >
                    Submit Another Machine
                  </button>
                </div>
              ) : (
                <form onSubmit={handleTradeSubmit} className="space-y-4 text-xs">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-slate-600 font-bold uppercase text-[10px] mb-1">
                        Current Machine Brand
                      </label>
                      <select
                        value={currentBrand}
                        onChange={(e) => setCurrentBrand(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-xs font-semibold focus:outline-none focus:border-[#0B3B60]"
                      >
                        <option value="CAT">Caterpillar (CAT)</option>
                        <option value="Komatsu">Komatsu</option>
                        <option value="Hyundai">Hyundai</option>
                        <option value="Hitachi">Hitachi</option>
                        <option value="SANY">SANY</option>
                        <option value="Doosan">Doosan / Develon</option>
                        <option value="Other">Other Heavy Brand</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-slate-600 font-bold uppercase text-[10px] mb-1">
                        Operating Hours
                      </label>
                      <select
                        value={currentHours}
                        onChange={(e) => setCurrentHours(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-xs font-semibold focus:outline-none focus:border-[#0B3B60]"
                      >
                        <option value="under-3000">Under 3,000 Hours</option>
                        <option value="3000-6000">3,000 - 6,000 Hours</option>
                        <option value="6000-10000">6,000 - 10,000 Hours</option>
                        <option value="10000-plus">10,000+ Hours</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-slate-600 font-bold uppercase text-[10px] mb-1">
                      Desired Upgrade Target
                    </label>
                    <select
                      value={targetUpgrade}
                      onChange={(e) => setTargetUpgrade(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-xs font-semibold focus:outline-none focus:border-[#0B3B60]"
                    >
                      <option value="SANY SY215C (2024 New)">Brand New SANY SY215C (21.5 Ton)</option>
                      <option value="CAT 336D2 L (36 Ton)">CAT 336D2 L (36 Ton Heavy)</option>
                      <option value="SANY SY500H (50 Ton Mining)">SANY SY500H (50 Ton Mining)</option>
                      <option value="Komatsu PC200-8">Komatsu PC200-8 Series</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <input
                      type="text"
                      required
                      placeholder="Your Name / Title"
                      className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-[#0B3B60]"
                    />
                    <input
                      type="tel"
                      required
                      placeholder="Phone / WhatsApp"
                      className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-[#0B3B60]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-[#E85D04] hover:bg-[#ff6d00] text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-colors shadow"
                  >
                    Request Free On-Site Trade-In Appraisal
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

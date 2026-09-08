import React, { useState } from 'react';
import { PageId, EquipmentModel } from '../types';
import { EQUIPMENT_DATA } from '../data/equipmentData';
import {
  Calendar,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Truck,
  Wrench,
  DollarSign,
  ArrowRight,
  Phone,
  Send,
  HelpCircle,
} from 'lucide-react';

interface RentalPageProps {
  onNavigate: (page: PageId) => void;
  onOpenQuote: (modelName?: string, defaultService?: 'rental' | 'sales' | 'spares') => void;
}

export const RentalPage: React.FC<RentalPageProps> = ({ onNavigate, onOpenQuote }) => {
  // Direct Rental Form State
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [equipmentRequired, setEquipmentRequired] = useState('');
  const [rentalDuration, setRentalDuration] = useState('1 to 3 Months');
  const [projectLocation, setProjectLocation] = useState('');
  const [message, setMessage] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [quoteId, setQuoteId] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedId = `RENT-${Math.floor(100000 + Math.random() * 900000)}`;
    setQuoteId(generatedId);
    setFormSubmitted(true);
  };

  return (
    <div className="w-full bg-[#F4F6F8]">
      {/* ----------------- HERO SECTION ----------------- */}
      <section className="bg-[#061E35] text-white py-16 lg:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#F47721]">
                COMMERCIAL FLEET HIRE IN GHANA
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight uppercase leading-[1.08]">
                RENT THE RIGHT <br />
                <span className="text-[#F47721]">MACHINE FOR THE JOB.</span>
              </h1>
              <p className="text-slate-300 text-base sm:text-lg max-w-xl leading-relaxed">
                Flexible heavy equipment rental solutions for construction, mining, quarrying and infrastructure projects across Ghana.
              </p>
              <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold text-slate-300">
                <span className="flex items-center gap-1.5 bg-[#082B4C] px-3 py-1.5 rounded border border-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#F47721]" /> Fully Inspected &amp; Maintained
                </span>
                <span className="flex items-center gap-1.5 bg-[#082B4C] px-3 py-1.5 rounded border border-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#F47721]" /> Rapid Site Mobilization
                </span>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border-2 border-slate-700/80 shadow-2xl bg-[#082B4C]">
                <img
                  src="https://images.unsplash.com/photo-1618090584176-7132b9911657?q=80&w=1000&auto=format&fit=crop"
                  alt="Kamla Infra Rental Machinery"
                  className="w-full h-80 sm:h-96 object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------- WHY RENT WITH KAMLA INFRA? ----------------- */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#F47721]">
              COMMERCIAL ADVANTAGES
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#102A43] tracking-tight uppercase">
              WHY RENT WITH KAMLA INFRA?
            </h2>
            <p className="text-sm text-slate-600">
              Designed to help contractors, mine operators, and civil engineering companies preserve capital while maximizing site uptime.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Benefit 1 */}
            <div className="bg-[#F4F6F8] p-6 rounded-xl border border-slate-200 hover:border-[#082B4C]/40 transition-all flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center text-[#F47721] shadow-xs border border-slate-200">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="text-base font-black uppercase text-[#102A43] tracking-tight">
                  FLEXIBLE RENTAL
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Solutions designed around project requirements. Rent by week, month, or multi-phase construction project.
                </p>
              </div>
            </div>

            {/* Benefit 2 */}
            <div className="bg-[#F4F6F8] p-6 rounded-xl border border-slate-200 hover:border-[#082B4C]/40 transition-all flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center text-[#F47721] shadow-xs border border-slate-200">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-base font-black uppercase text-[#102A43] tracking-tight">
                  READY-TO-WORK EQUIPMENT
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Reliable machinery prepared for demanding applications, pre-tested and inspected for zero immediate downtime.
                </p>
              </div>
            </div>

            {/* Benefit 3 */}
            <div className="bg-[#F4F6F8] p-6 rounded-xl border border-slate-200 hover:border-[#082B4C]/40 transition-all flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center text-[#F47721] shadow-xs border border-slate-200">
                  <Wrench className="w-6 h-6" />
                </div>
                <h3 className="text-base font-black uppercase text-[#102A43] tracking-tight">
                  PROJECT SUPPORT
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Support throughout the rental process. Certified service technicians and on-site spare part availability.
                </p>
              </div>
            </div>

            {/* Benefit 4 */}
            <div className="bg-[#F4F6F8] p-6 rounded-xl border border-slate-200 hover:border-[#082B4C]/40 transition-all flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center text-[#F47721] shadow-xs border border-slate-200">
                  <DollarSign className="w-6 h-6" />
                </div>
                <h3 className="text-base font-black uppercase text-[#102A43] tracking-tight">
                  COST-EFFICIENT
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Avoid unnecessary capital investment for short and medium-term projects. Predictable operating expense.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------- HOW IT WORKS ----------------- */}
      <section className="py-16 sm:py-20 bg-[#F4F6F8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-12 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#F47721]">
              SIMPLE 4-STEP MOBILIZATION
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#102A43] tracking-tight uppercase">
              HOW IT WORKS
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: '01',
                title: 'Tell us your requirement',
                desc: 'Share your site location, material type, and project scope with our team.',
              },
              {
                step: '02',
                title: 'Choose the right equipment',
                desc: 'Select from our verified excavators, wheel loaders, or cranes sized for the task.',
              },
              {
                step: '03',
                title: 'Confirm rental period',
                desc: 'Agree on transparent commercial terms, maintenance support, and delivery timeline.',
              },
              {
                step: '04',
                title: 'Get equipment to your project',
                desc: 'Low-bed transport delivers machines directly to your site, ready to work.',
              },
            ].map((item) => (
              <div
                key={item.step}
                className="bg-white p-6 rounded-xl border border-slate-200 relative overflow-hidden group shadow-xs"
              >
                <div className="text-3xl font-black text-[#F47721] tracking-tight mb-3">
                  {item.step}
                </div>
                <h4 className="text-base font-black text-[#102A43] mb-1 leading-snug">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------- RENTAL ENQUIRY FORM ----------------- */}
      <section className="py-16 sm:py-20 bg-white border-t border-slate-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#F4F6F8] rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm">
            <div className="mb-8 text-center space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-[#F47721]">
                DIRECT RENTAL DESK
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#102A43] tracking-tight uppercase">
                REQUEST A RENTAL QUOTE
              </h2>
              <p className="text-xs text-slate-600 max-w-md mx-auto">
                Fill out the short form below and our equipment coordinator will provide availability and commercial rates for your project site.
              </p>
            </div>

            {formSubmitted ? (
              <div className="bg-white p-8 rounded-xl border border-slate-200 text-center space-y-4">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-[#102A43]">
                  Rental Request Successfully Logged
                </h3>
                <p className="text-xs text-slate-600 max-w-md mx-auto">
                  Thank you, <span className="font-bold text-slate-800">{name}</span>. Reference ID:{' '}
                  <span className="font-bold text-[#F47721]">{quoteId}</span>. We will review the availability of{' '}
                  <span className="font-bold text-slate-800">{equipmentRequired || 'the equipment'}</span> for your site in{' '}
                  <span className="font-bold text-slate-800">{projectLocation}</span> and respond promptly.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="bg-[#082B4C] text-white px-6 py-2.5 rounded-lg text-xs font-bold hover:bg-[#061E35] transition-colors"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John K. Mensah"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg focus:outline-hidden focus:border-[#082B4C]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Company <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ashanti Infrastructure Ltd."
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg focus:outline-hidden focus:border-[#082B4C]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Phone Number (Ghana) <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+233 XX XXX XXXX"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg focus:outline-hidden focus:border-[#082B4C]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="john@ashanti-infra.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg focus:outline-hidden focus:border-[#082B4C]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Equipment Required <span className="text-red-500">*</span>
                    </label>
                    <select
                      required
                      value={equipmentRequired}
                      onChange={(e) => setEquipmentRequired(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg focus:outline-hidden focus:border-[#082B4C]"
                    >
                      <option value="">Select Equipment Model / Type</option>
                      <optgroup label="Excavators (21T - 25T)">
                        {EQUIPMENT_DATA.filter((m) => m.category === 'excavator').map((m) => (
                          <option key={m.id} value={`${m.manufacturer} ${m.model}`}>
                            {m.manufacturer} {m.model} ({m.operatingWeight})
                          </option>
                        ))}
                      </optgroup>
                      <optgroup label="Wheel Loaders (3T - 12T Payload)">
                        {EQUIPMENT_DATA.filter((m) => m.category === 'wheel-loader').map((m) => (
                          <option key={m.id} value={`${m.manufacturer} ${m.model}`}>
                            {m.manufacturer} {m.model} ({m.payloadCapacity || m.operatingWeight})
                          </option>
                        ))}
                      </optgroup>
                      <optgroup label="Cranes (Lifting 25T - 75T)">
                        {EQUIPMENT_DATA.filter((m) => m.category === 'crane').map((m) => (
                          <option key={m.id} value={`${m.manufacturer} ${m.model}`}>
                            {m.manufacturer} {m.model} ({m.payloadCapacity})
                          </option>
                        ))}
                      </optgroup>
                      <option value="General Excavator (20T Class)">General 20-22 Ton Excavator</option>
                      <option value="General Wheel Loader (5T Class)">General 5 Ton Wheel Loader</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Rental Duration
                    </label>
                    <select
                      value={rentalDuration}
                      onChange={(e) => setRentalDuration(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg focus:outline-hidden focus:border-[#082B4C]"
                    >
                      <option>1 to 2 Weeks</option>
                      <option>1 Month</option>
                      <option>1 to 3 Months</option>
                      <option>3 to 6 Months</option>
                      <option>Long-Term (6+ Months)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Project Location in Ghana <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Takoradi Port Expansion / Tarkwa Gold Mine / Kasoa Quarry"
                    value={projectLocation}
                    onChange={(e) => setProjectLocation(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg focus:outline-hidden focus:border-[#082B4C]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Message / Special Requirements
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Operator required, shift expectations, rock breaker lines or special attachments..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg focus:outline-hidden focus:border-[#082B4C]"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full bg-[#F47721] hover:bg-[#D96213] text-white py-3.5 rounded-lg text-sm font-bold tracking-wide transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer active:scale-[0.99]"
                  >
                    <span>Request Rental Quote</span>
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

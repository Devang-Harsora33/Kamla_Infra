import React, { useState } from 'react';
import { PageId } from '../types';
import {
  ShieldCheck,
  Zap,
  Target,
  Handshake,
  MapPin,
  Phone,
  Mail,
  Clock,
  CheckCircle2,
  Send,
  Building2,
  ExternalLink,
} from 'lucide-react';

interface AboutContactPageProps {
  onNavigate: (page: PageId) => void;
  onOpenQuote: (service?: 'rental' | 'sales' | 'spares') => void;
}

export const AboutContactPage: React.FC<AboutContactPageProps> = ({ onNavigate, onOpenQuote }) => {
  // Contact Form State
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [requirement, setRequirement] = useState('Equipment Rental');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="w-full bg-[#F4F6F8]">
      {/* ----------------- HERO SECTION ----------------- */}
      <section className="bg-[#082B4C] text-white py-16 sm:py-20 border-b border-slate-800 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#F47721]">
              ABOUT KAMLA INFRA GHANA LTD.
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight uppercase leading-[1.08]">
              BUILT AROUND <br />
              <span className="text-[#F47721]">YOUR PROJECT.</span>
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed pt-2">
              Kamla Infra Ghana Ltd. provides heavy equipment solutions through sales, rental and spare parts support, helping businesses keep their projects moving.
            </p>

            <div className="flex flex-wrap gap-4 pt-3 text-xs text-slate-300">
              <span className="bg-[#061E35] px-3.5 py-1.5 rounded border border-slate-700 font-semibold">
                Accra Yard &amp; Commercial Office
              </span>
              <span className="bg-[#061E35] px-3.5 py-1.5 rounded border border-slate-700 font-semibold">
                Western Region &amp; Mining Hub Support
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------- OUR APPROACH SECTION ----------------- */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#F47721]">
              CORE VALUES &amp; COMMITMENT
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#102A43] tracking-tight uppercase">
              OUR APPROACH
            </h2>
            <p className="text-sm text-slate-600">
              How we partner with contractors, developers, and mining companies across the Republic of Ghana.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Approach 1 */}
            <div className="bg-[#F4F6F8] p-6 rounded-xl border border-slate-200 hover:border-[#082B4C]/40 transition-all flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center text-[#F47721] shadow-xs border border-slate-200">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-base font-black uppercase text-[#102A43] tracking-tight">
                  RELIABILITY
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Equipment you can depend on. Every excavator, loader, and crane goes through rigorous mechanical inspection prior to site delivery.
                </p>
              </div>
            </div>

            {/* Approach 2 */}
            <div className="bg-[#F4F6F8] p-6 rounded-xl border border-slate-200 hover:border-[#082B4C]/40 transition-all flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center text-[#F47721] shadow-xs border border-slate-200">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-base font-black uppercase text-[#102A43] tracking-tight">
                  RESPONSIVENESS
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Quick communication and practical support. Rapid quote turnaround, dispatch logistics, and direct phone lines to operational coordinators.
                </p>
              </div>
            </div>

            {/* Approach 3 */}
            <div className="bg-[#F4F6F8] p-6 rounded-xl border border-slate-200 hover:border-[#082B4C]/40 transition-all flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center text-[#F47721] shadow-xs border border-slate-200">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-base font-black uppercase text-[#102A43] tracking-tight">
                  PROJECT UNDERSTANDING
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Solutions based on your actual site requirements. We match bucket volume, undercarriage class, and reach to your geology and operational cycles.
                </p>
              </div>
            </div>

            {/* Approach 4 */}
            <div className="bg-[#F4F6F8] p-6 rounded-xl border border-slate-200 hover:border-[#082B4C]/40 transition-all flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center text-[#F47721] shadow-xs border border-slate-200">
                  <Handshake className="w-6 h-6" />
                </div>
                <h3 className="text-base font-black uppercase text-[#102A43] tracking-tight">
                  LONG-TERM PARTNERSHIP
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Focused on building lasting business relationships. Supporting your enterprise across multiple project phases and regional expansions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------- THREE BUSINESS DIVISIONS ----------------- */}
      <section className="py-14 sm:py-16 bg-[#F4F6F8] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs space-y-2">
              <div className="text-xs font-bold uppercase tracking-wider text-[#F47721]">Division 01</div>
              <h4 className="text-lg font-black text-[#102A43]">Equipment Sales</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Brand new and certified excavators, loaders, and cranes for sale with full manufacturer warranty and setup assistance.
              </p>
              <button
                onClick={() => onOpenQuote(undefined, 'sales')}
                className="text-xs font-bold text-[#082B4C] hover:text-[#F47721] pt-2 inline-flex items-center gap-1 cursor-pointer"
              >
                <span>Sales Desk Enquiry</span> →
              </button>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs space-y-2">
              <div className="text-xs font-bold uppercase tracking-wider text-[#F47721]">Division 02</div>
              <h4 className="text-lg font-black text-[#102A43]">Equipment Rental</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Flexible short-term and multi-month fleet hire solutions with on-site mechanic coverage for zero project interruptions.
              </p>
              <button
                onClick={() => onOpenQuote(undefined, 'rental')}
                className="text-xs font-bold text-[#082B4C] hover:text-[#F47721] pt-2 inline-flex items-center gap-1 cursor-pointer"
              >
                <span>Rental Fleet Enquiry</span> →
              </button>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs space-y-2">
              <div className="text-xs font-bold uppercase tracking-wider text-[#F47721]">Division 03</div>
              <h4 className="text-lg font-black text-[#102A43]">Genuine Spares &amp; Support</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Direct distribution of original filters, seal kits, ground-engaging tools (GET), hydraulic parts, and mobile technician support.
              </p>
              <button
                onClick={() => onOpenQuote(undefined, 'spares')}
                className="text-xs font-bold text-[#082B4C] hover:text-[#F47721] pt-2 inline-flex items-center gap-1 cursor-pointer"
              >
                <span>Parts Desk Enquiry</span> →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------- CONTACT SECTION ----------------- */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Contact Info & Map Visual */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#F47721] block mb-1">
                  GET IN TOUCH
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-[#102A43] tracking-tight uppercase">
                  LET&apos;S TALK ABOUT <br />
                  <span className="text-[#F47721]">YOUR NEXT PROJECT.</span>
                </h2>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                  Our commercial equipment team is ready to evaluate your site demands and provide rapid fleet mobilization across Ghana.
                </p>
              </div>

              {/* Physical Locations in Ghana */}
              <div className="space-y-4 text-xs">
                <div className="p-4 rounded-xl bg-[#F4F6F8] border border-slate-200 space-y-1">
                  <div className="flex items-center gap-2 text-sm font-bold text-[#082B4C]">
                    <Building2 className="w-4 h-4 text-[#F47721]" />
                    <span>Accra Head Office &amp; Heavy Fleet Yard</span>
                  </div>
                  <p className="text-slate-600 pl-6">
                    Industrial Area, Spintex Corridor / Tema Expressway, Greater Accra Region, Ghana
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#F4F6F8] border border-slate-200 space-y-1">
                  <div className="flex items-center gap-2 text-sm font-bold text-[#082B4C]">
                    <MapPin className="w-4 h-4 text-[#F47721]" />
                    <span>Western Regional Hub (Mining &amp; Quarry)</span>
                  </div>
                  <p className="text-slate-600 pl-6">
                    Takoradi Port Hub / Tarkwa Mining Corridor, Western Region, Ghana
                  </p>
                </div>
              </div>

              {/* Contact Directs */}
              <div className="space-y-3 text-xs">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-md bg-[#F4F6F8] flex items-center justify-center text-[#F47721] border border-slate-200">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px] font-bold uppercase">Commercial Phone</span>
                    <span className="font-bold text-[#082B4C] text-sm">+233 (0) 50 123 4567 / +233 (0) 24 987 6543</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-md bg-[#F4F6F8] flex items-center justify-center text-[#F47721] border border-slate-200">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px] font-bold uppercase">Direct Email</span>
                    <span className="font-bold text-[#082B4C] text-sm">sales@kamlainfra.com • info@kamlainfra.com</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-md bg-[#F4F6F8] flex items-center justify-center text-[#F47721] border border-slate-200">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px] font-bold uppercase">Operating Hours</span>
                    <span className="font-semibold text-slate-700">Mon – Sat: 7:30 AM – 6:00 PM (Emergency 24/7 Site Callouts)</span>
                  </div>
                </div>
              </div>

              {/* Stylized Ghana Map Visual */}
              <div className="p-4 rounded-xl bg-[#061E35] text-white border border-[#082B4C] relative overflow-hidden">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-bold uppercase text-[#F47721]">
                    Operational Coverage
                  </span>
                  <span className="text-[11px] text-slate-400">All 16 Regions of Ghana</span>
                </div>
                <div className="text-xs text-slate-300 leading-relaxed">
                  Fleet dispatch and maintenance teams operate across Greater Accra, Ashanti, Western, Eastern, Central, and Northern mining/infrastructure zones.
                </div>
              </div>
            </div>

            {/* Right Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-[#F4F6F8] p-6 sm:p-10 rounded-2xl border border-slate-200 shadow-sm">
                <h3 className="text-xl font-bold text-[#102A43] mb-1">
                  Send Project Enquiry
                </h3>
                <p className="text-xs text-slate-500 mb-6">
                  Fill in your project specifications and requirements for rapid response.
                </p>

                {submitted ? (
                  <div className="bg-white p-8 rounded-xl border border-slate-200 text-center space-y-4">
                    <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-7 h-7" />
                    </div>
                    <h4 className="text-lg font-bold text-[#102A43]">
                      Message Successfully Sent
                    </h4>
                    <p className="text-xs text-slate-600 max-w-md mx-auto">
                      Thank you, <span className="font-bold text-slate-800">{name}</span>. A commercial director from Kamla Infra Ghana Ltd. will contact you at {phone} within 2 hours.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="bg-[#082B4C] text-white px-5 py-2 rounded-lg text-xs font-bold"
                    >
                      Send Another Message
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
                          placeholder="Your Name"
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
                          placeholder="Your Company / Firm"
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
                          placeholder="name@company.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg focus:outline-hidden focus:border-[#082B4C]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Requirement Type
                      </label>
                      <select
                        value={requirement}
                        onChange={(e) => setRequirement(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg focus:outline-hidden focus:border-[#082B4C]"
                      >
                        <option>Equipment Rental (Excavators / Loaders / Cranes)</option>
                        <option>Equipment Sales (Purchase)</option>
                        <option>Genuine Spare Parts Supply</option>
                        <option>Fleet Maintenance &amp; Operator Support</option>
                        <option>General Commercial Inquiries</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Message / Project Details <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        required
                        rows={4}
                        placeholder="Describe your site location, machine class needed, project duration, or spare parts needed..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg focus:outline-hidden focus:border-[#082B4C]"
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full bg-[#F47721] hover:bg-[#D96213] text-white py-3.5 rounded-lg text-sm font-bold uppercase tracking-wider transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer active:scale-[0.99]"
                      >
                        <span>Send Enquiry</span>
                        <Send className="w-4 h-4" />
                      </button>
                    </div>
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

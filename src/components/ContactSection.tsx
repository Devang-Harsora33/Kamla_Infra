import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, CheckCircle2, Building, ShieldCheck } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formType, setFormType] = useState<'quote' | 'availability' | 'spares' | 'general'>('quote');
  const [fullName, setFullName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (Matches user prompt requirements exactly) */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-100 text-[#0B3B60] text-xs font-bold uppercase tracking-wider mb-3">
            <MessageSquare className="w-3.5 h-3.5 text-[#E85D04]" />
            <span>Direct Commercial Desk</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B3B60] tracking-tight">
            Contact Us
          </h2>
          <p className="mt-3 text-lg sm:text-xl font-medium text-slate-800">
            Let’s build the future together.
          </p>
          <p className="mt-1 text-base text-slate-600">
            Get in touch with our team in Ghana today for quotes and equipment availability.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Contact Information Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Phone Card */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-[#0B3B60] transition-colors">
              <div className="w-10 h-10 rounded-xl bg-[#0B3B60] text-white flex items-center justify-center mb-4">
                <Phone className="w-5 h-5 text-[#E85D04]" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1">
                Phone & Direct Hotline
              </span>
              <a
                href="tel:+233302984500"
                className="text-lg font-bold text-slate-900 hover:text-[#0B3B60] block"
              >
                +233 (0) 30 298 4500
              </a>
              <a
                href="tel:+233244567890"
                className="text-sm font-semibold text-slate-700 hover:text-[#E85D04] block mt-0.5"
              >
                +233 (0) 24 456 7890 (Mobile & WhatsApp)
              </a>
              <p className="text-xs text-slate-500 mt-2">
                Available Monday to Saturday, 7:30 AM – 6:00 PM GMT
              </p>
            </div>

            {/* Email Card */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-[#0B3B60] transition-colors">
              <div className="w-10 h-10 rounded-xl bg-[#0B3B60] text-white flex items-center justify-center mb-4">
                <Mail className="w-5 h-5 text-[#E85D04]" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1">
                Official Email Inquiries
              </span>
              <a
                href="mailto:quotes@kamlainfra.com"
                className="text-base font-bold text-slate-900 hover:text-[#0B3B60] block"
              >
                quotes@kamlainfra.com
              </a>
              <a
                href="mailto:info@kamlainfra.com"
                className="text-sm font-semibold text-slate-700 hover:text-[#0B3B60] block mt-0.5"
              >
                info@kamlainfra.com
              </a>
              <p className="text-xs text-slate-500 mt-2">
                Formal RFQs & tenders reviewed within 4 business hours.
              </p>
            </div>

            {/* Office & Logistics Yard Location */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-[#0B3B60] transition-colors">
              <div className="w-10 h-10 rounded-xl bg-[#0B3B60] text-white flex items-center justify-center mb-4">
                <MapPin className="w-5 h-5 text-[#E85D04]" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1">
                Office & Heavy Equipment Yard
              </span>
              <strong className="text-sm font-bold text-slate-900 block">
                Plot 14, Tema Heavy Industrial Area, Greater Accra Region, Ghana
              </strong>
              <p className="text-xs text-slate-600 mt-1">
                Commercial Office & Client Lounge: Spintex Road Commercial Corridor, Accra, Ghana
              </p>
            </div>

            {/* WhatsApp Quick Connect Card */}
            <a
              href="https://wa.me/233244567890?text=Hello%20Kamla%20Infra%20Ghana,%20I%20would%20like%20to%20request%20equipment%20availability."
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-[#07253D] text-white flex items-center justify-between hover:bg-[#0B3B60] transition-all group shadow-md"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#E85D04] text-white flex items-center justify-center">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-[#FFA500] uppercase tracking-wider block">
                    Fast Lane
                  </span>
                  <strong className="text-sm font-bold text-white block">
                    Chat Directly on WhatsApp
                  </strong>
                </div>
              </div>
              <span className="text-xs font-bold text-slate-300 group-hover:text-white transition-colors">
                Connect Now →
              </span>
            </a>

          </div>

          {/* Right Inquiry Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-7 sm:p-9 border border-slate-200 shadow-xl">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-[#0B3B60]">
                  Message Successfully Sent
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto">
                  Thank you, <strong>{fullName}</strong>. A Kamla Infra technical representative will get in touch with you shortly with equipment details and pricing.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setMessage('');
                    }}
                    className="px-6 py-2.5 bg-[#0B3B60] text-white text-xs font-bold rounded-lg"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <h3 className="font-heading text-xl font-bold text-[#0B3B60] mb-1">
                    Send Us an Official Message
                  </h3>
                  <p className="text-xs text-slate-500">
                    Fill in your project requirements for rapid response.
                  </p>
                </div>

                {/* Inquiry Type Tabs */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-2">
                    Inquiry Category
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {[
                      { id: 'quote', label: 'Excavator Quote' },
                      { id: 'availability', label: 'Fleet Rental' },
                      { id: 'spares', label: 'Spare Parts' },
                      { id: 'general', label: 'General / Trading' },
                    ].map((type) => (
                      <button
                        key={type.id}
                        type="button"
                        onClick={() => setFormType(type.id as any)}
                        className={`py-2 px-2.5 rounded-lg text-xs font-bold transition-all border ${
                          formType === type.id
                            ? 'bg-[#0B3B60] text-white border-[#0B3B60] shadow-sm'
                            : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        {type.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name & Company */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Kwame Mensah"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-[#0B3B60] focus:bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. West Coast Mining Ltd."
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-[#0B3B60] focus:bg-white"
                    />
                  </div>
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                      Official Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. kwame@construction.com.gh"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-[#0B3B60] focus:bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                      Phone Number (WhatsApp) *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +233 24 123 4567"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-[#0B3B60] focus:bg-white"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                    Equipment Details / Site Location / Requirements *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Provide details on project location in Ghana, required excavator tonnage (20T, 30T, 50T), duration, or trade-in equipment..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-[#0B3B60] focus:bg-white"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#E85D04] hover:bg-[#ff6d00] text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Inquiry to Kamla Infra Ghana</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};

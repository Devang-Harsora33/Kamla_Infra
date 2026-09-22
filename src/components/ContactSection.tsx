import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, CheckCircle2, Building, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

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
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-zinc-100 text-[#18181B] text-xs font-bold uppercase tracking-wider mb-3">
            <MessageSquare className="w-3.5 h-3.5 text-[#E85D04]" />
            <span>Direct Commercial Desk</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-[#18181B] tracking-tight">
            Contact Us
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-600 leading-relaxed">
            Require specialized machinery for your next project? Get in touch with our commercial team for duty-paid inventory and rapid mobilization in Ghana.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Left Contact Information Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Phone Card */}
            <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200/80 hover:border-[#18181B] transition-colors">
              <div className="w-10 h-10 rounded-xl bg-[#18181B] text-white flex items-center justify-center mb-4">
                <Phone className="w-5 h-5 text-[#E85D04]" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-zinc-500 block mb-1">
                Phone & Direct Hotline
              </span>
              <a
                href="tel:+233552538551"
                className="text-lg font-bold text-zinc-900 hover:text-[#18181B] block"
              >
                +233 55 253 8551
              </a>
              <p className="text-xs text-zinc-500 mt-2">
                Available Monday to Saturday, 7:30 AM – 6:00 PM GMT
              </p>
            </div>

            {/* Email Card */}
            <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200/80 hover:border-[#18181B] transition-colors">
              <div className="w-10 h-10 rounded-xl bg-[#18181B] text-white flex items-center justify-center mb-4">
                <Mail className="w-5 h-5 text-[#E85D04]" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-zinc-500 block mb-1">
                Official Email Inquiries
              </span>
              <a
                href="mailto:KamlainfraGhana@gmail.com"
                className="text-base font-bold text-zinc-900 hover:text-[#18181B] block"
              >
                KamlainfraGhana@gmail.com
              </a>
              <p className="text-xs text-zinc-500 mt-2">
                Formal RFQs & tenders reviewed within 4 business hours.
              </p>
            </div>

            {/* Office & Logistics Yard Location */}
            <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200/80 hover:border-[#18181B] transition-colors">
              <div className="w-10 h-10 rounded-xl bg-[#18181B] text-white flex items-center justify-center mb-4">
                <MapPin className="w-5 h-5 text-[#E85D04]" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-zinc-500 block mb-1">
                Registered Address
              </span>
              <strong className="text-sm font-bold text-zinc-900 block">
                House Number 46, 46 Abakan Street, Adjacent MTN Mast, Adenta, Accra, La Nkwantanang-Madina, Greater Accra, Ghana
              </strong>
              <p className="text-xs text-zinc-600 mt-1">
                Ghana Post GPS (Digital Address): GM-065-1905
              </p>
            </div>

            {/* WhatsApp Quick Connect Card */}
            <a
              href="https://wa.me/233552538551?text=Hello%20Kamla%20Infra%20Ghana,%20I%20would%20like%20to%20request%20equipment%20availability."
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-[#09090B] text-white flex items-center justify-between hover:bg-[#18181B] transition-all group shadow-md"
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
              <span className="text-xs font-bold text-zinc-300 group-hover:text-white transition-colors">
                Connect Now →
              </span>
            </a>

          </div>

          {/* Right Inquiry Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-7 sm:p-9 border border-zinc-200 shadow-xl">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-[#18181B]">
                  Message Successfully Sent
                </h3>
                <p className="text-sm text-zinc-600 max-w-md mx-auto">
                  Thank you, <strong>{fullName}</strong>. A Kamla Infra technical representative will get in touch with you shortly with equipment details and pricing.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setMessage('');
                    }}
                    className="px-6 py-2.5 bg-[#18181B] text-white text-xs font-bold rounded-lg"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <h3 className="font-heading text-xl font-bold text-[#18181B] mb-1">
                    Send Us an Official Message
                  </h3>
                  <p className="text-xs text-zinc-500">
                    Fill in your project requirements for rapid response.
                  </p>
                </div>

                {/* Inquiry Type Tabs */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-zinc-500 mb-2">
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
                            ? 'bg-[#18181B] text-white border-[#18181B] shadow-sm'
                            : 'bg-zinc-50 text-zinc-700 border-zinc-200 hover:bg-zinc-100'
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
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-zinc-600 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Kwame Mensah"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full bg-zinc-50 border border-zinc-300 rounded-lg px-3.5 py-2.5 text-xs text-zinc-900 focus:outline-none focus:border-[#18181B] focus:bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-zinc-600 mb-1">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. West Coast Mining Ltd."
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      className="w-full bg-zinc-50 border border-zinc-300 rounded-lg px-3.5 py-2.5 text-xs text-zinc-900 focus:outline-none focus:border-[#18181B] focus:bg-white"
                    />
                  </div>
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-zinc-600 mb-1">
                      Official Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. kwame@construction.com.gh"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-zinc-50 border border-zinc-300 rounded-lg px-3.5 py-2.5 text-xs text-zinc-900 focus:outline-none focus:border-[#18181B] focus:bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-zinc-600 mb-1">
                      Phone Number (WhatsApp) *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +233 24 123 4567"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-zinc-50 border border-zinc-300 rounded-lg px-3.5 py-2.5 text-xs text-zinc-900 focus:outline-none focus:border-[#18181B] focus:bg-white"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-zinc-600 mb-1">
                    Equipment Details / Site Location / Requirements *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Provide details on project location in Ghana, required excavator tonnage (20T, 30T, 50T), duration, or trade-in equipment..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-zinc-50 border border-zinc-300 rounded-lg px-3.5 py-2.5 text-xs text-zinc-900 focus:outline-none focus:border-[#18181B] focus:bg-white"
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

import React, { useState } from 'react';
import { X, Send, CheckCircle2, MessageSquare } from 'lucide-react';
import { GHANA_LOCATIONS, EQUIPMENT_INVENTORY } from '../data/equipmentData';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
  initialModel?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  initialService = 'sales',
  initialModel = '',
}) => {
  const [service, setService] = useState(initialService);
  const [model, setModel] = useState(initialModel || EQUIPMENT_INVENTORY[0].name);
  const [location, setLocation] = useState('accra-tema');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const selectedLoc = GHANA_LOCATIONS.find((l) => l.value === location)?.label || 'Ghana';

  const generateWhatsAppLink = () => {
    const text = `Hello Kamla Infra Ghana, I would like to request an official quote:
- Requirement: ${service.toUpperCase()}
- Model/Class: ${model}
- Project Location: ${selectedLoc}
- Name: ${name}
- Phone: ${phone}
- Notes: ${notes || 'Standard requisition'}`;
    return `https://wa.me/233244567890?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="bg-white rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-zinc-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="px-6 py-4 border-b border-zinc-100 flex items-center justify-between bg-zinc-50 rounded-t-2xl">
          <div>
            <span className="text-[10px] font-bold text-[#E85D04] uppercase tracking-wider block">
              Kamla Infra Ghana Ltd.
            </span>
            <h3 className="font-heading text-lg font-bold text-[#18181B]">
              Equipment Quote Request
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-zinc-400 hover:text-zinc-700 rounded-lg hover:bg-zinc-200/60"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h4 className="font-heading text-xl font-bold text-[#18181B]">
                Quote Request Dispatched
              </h4>
              <p className="text-xs text-zinc-600">
                Thank you, <strong>{name}</strong>. Our machinery desk has received your request for <strong>{model}</strong>.
              </p>
              <div className="pt-2 flex flex-col gap-2">
                <a
                  href={generateWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 bg-[#E85D04] hover:bg-[#ff6d00] text-white text-xs font-bold uppercase rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send Directly to WhatsApp Desk</span>
                </a>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    onClose();
                  }}
                  className="w-full py-2.5 bg-zinc-100 text-zinc-700 text-xs font-bold rounded-lg hover:bg-zinc-200"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block text-zinc-600 font-bold uppercase text-[10px] mb-1">
                  Service Category
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'sales', label: 'Excavator Sales' },
                    { id: 'rental', label: 'Equipment Rental' },
                    { id: 'trading', label: 'Machinery Trade-In' },
                  ].map((s) => (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => setService(s.id)}
                      className={`py-2 text-center rounded-lg font-bold border transition-all ${
                        service === s.id
                          ? 'bg-[#18181B] text-white border-[#18181B]'
                          : 'bg-zinc-50 text-zinc-700 border-zinc-200 hover:bg-zinc-100'
                      }`}
                    >
                      {s.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-zinc-600 font-bold uppercase text-[10px] mb-1">
                  Machinery Model / Class
                </label>
                <select
                  value={model}
                  onChange={(e) => setModel(e.target.value)}
                  className="w-full bg-zinc-50 border border-zinc-300 rounded-lg px-3 py-2 text-xs font-semibold focus:outline-none focus:border-[#18181B]"
                >
                  {EQUIPMENT_INVENTORY.map((item) => (
                    <option key={item.id} value={item.name}>
                      {item.name} ({item.categoryLabel})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-zinc-600 font-bold uppercase text-[10px] mb-1">
                  Ghana Site Location
                </label>
                <select
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full bg-zinc-50 border border-zinc-300 rounded-lg px-3 py-2 text-xs font-semibold focus:outline-none focus:border-[#18181B]"
                >
                  {GHANA_LOCATIONS.map((loc) => (
                    <option key={loc.value} value={loc.value}>
                      {loc.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-zinc-600 font-bold uppercase text-[10px] mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-zinc-50 border border-zinc-300 rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-[#18181B]"
                  />
                </div>
                <div>
                  <label className="block text-zinc-600 font-bold uppercase text-[10px] mb-1">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+233..."
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-zinc-50 border border-zinc-300 rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-[#18181B]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-zinc-600 font-bold uppercase text-[10px] mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="contact@company.com.gh"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-zinc-50 border border-zinc-300 rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-[#18181B]"
                />
              </div>

              <div>
                <label className="block text-zinc-600 font-bold uppercase text-[10px] mb-1">
                  Project Notes / Specifics
                </label>
                <textarea
                  rows={2}
                  placeholder="Duration, operator requirement, start date..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full bg-zinc-50 border border-zinc-300 rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-[#18181B]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[#18181B] hover:bg-[#E85D04] text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-colors shadow flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Submit Quotation Request</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

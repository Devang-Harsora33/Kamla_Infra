import React, { useState, useEffect } from 'react';
import { EQUIPMENT_DATA } from '../data/equipmentData';
import { X, CheckCircle, Send, Shield, Phone, MapPin } from 'lucide-react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  preSelectedModel?: string;
  defaultService?: 'rental' | 'sales' | 'spares';
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  preSelectedModel,
  defaultService = 'rental',
}) => {
  const [fullName, setFullName] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [serviceType, setServiceType] = useState<'rental' | 'sales' | 'spares'>(defaultService);
  const [selectedModel, setSelectedModel] = useState(preSelectedModel || '');
  const [duration, setDuration] = useState('1 to 3 Months');
  const [projectLocation, setProjectLocation] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState('');

  useEffect(() => {
    if (preSelectedModel) {
      setSelectedModel(preSelectedModel);
    }
    if (defaultService) {
      setServiceType(defaultService);
    }
  }, [preSelectedModel, defaultService]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const randomRef = `KIG-${Math.floor(100000 + Math.random() * 900000)}`;
    setReferenceId(randomRef);
    setIsSubmitted(true);
  };

  const resetForm = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-150">
      <div className="relative bg-white w-full max-w-xl rounded-xl shadow-2xl border border-slate-200 overflow-hidden">
        {/* Header */}
        <div className="bg-[#082B4C] text-white px-6 py-5 flex items-center justify-between">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#F47721]">
              Commercial Equipment Desk
            </span>
            <h3 className="text-lg font-bold tracking-tight text-white mt-0.5">
              {serviceType === 'rental'
                ? 'Request Equipment Rental Quote'
                : serviceType === 'sales'
                ? 'Equipment Sales Enquiry'
                : 'Genuine Spare Parts Enquiry'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-slate-300 hover:text-white p-1 rounded-md hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {isSubmitted ? (
          /* Submission Success State */
          <div className="p-8 text-center space-y-4">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="w-8 h-8" />
            </div>

            <div className="space-y-1">
              <h4 className="text-xl font-bold text-[#102A43]">Enquiry Received Successfully</h4>
              <p className="text-sm text-slate-600">
                Our commercial equipment coordinator in Ghana has been notified and will contact you within 2 business hours.
              </p>
            </div>

            <div className="bg-[#F4F6F8] p-4 rounded-lg border border-slate-200 text-left text-xs space-y-1.5 max-w-md mx-auto">
              <div className="flex justify-between">
                <span className="text-slate-500">Quote Reference:</span>
                <span className="font-bold text-[#082B4C]">{referenceId}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Service:</span>
                <span className="font-semibold capitalize">{serviceType}</span>
              </div>
              {selectedModel && (
                <div className="flex justify-between">
                  <span className="text-slate-500">Equipment:</span>
                  <span className="font-semibold text-slate-700">{selectedModel}</span>
                </div>
              )}
              {projectLocation && (
                <div className="flex justify-between">
                  <span className="text-slate-500">Location:</span>
                  <span className="font-semibold text-slate-700">{projectLocation}</span>
                </div>
              )}
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={resetForm}
                className="bg-[#082B4C] hover:bg-[#061E35] text-white px-6 py-2.5 rounded-lg text-sm font-semibold transition-colors cursor-pointer"
              >
                Done
              </button>
              <a
                href="tel:+233552538551"
                className="inline-flex items-center justify-center gap-2 border border-slate-300 hover:bg-slate-50 text-slate-800 px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors"
              >
                <Phone className="w-4 h-4 text-[#F47721]" />
                <span>Call Urgent Desk</span>
              </a>
            </div>
          </div>
        ) : (
          /* Form Body */
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            {/* Service Toggle */}
            <div className="grid grid-cols-3 gap-2 p-1 bg-slate-100 rounded-lg">
              {(['rental', 'sales', 'spares'] as const).map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => setServiceType(type)}
                  className={`py-2 text-xs font-bold uppercase tracking-wider rounded-md transition-all cursor-pointer ${
                    serviceType === type
                      ? 'bg-[#082B4C] text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {type === 'sales' ? 'Equipment Sale' : type === 'rental' ? 'Rental Fleet' : 'Spare Parts'}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Kwame Mensah"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#F47721]/30 focus:border-[#F47721]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Company / Organization <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Gold Coast Quarry Ltd."
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#F47721]/30 focus:border-[#F47721]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
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
                  className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#F47721]/30 focus:border-[#F47721]"
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
                  className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#F47721]/30 focus:border-[#F47721]"
                />
              </div>
            </div>

            {/* Model selector */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Equipment Category / Model
              </label>
              <select
                value={selectedModel}
                onChange={(e) => setSelectedModel(e.target.value)}
                className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#F47721]/30 focus:border-[#F47721]"
              >
                <option value="">-- Select Model or Equipment Category --</option>
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
                      {m.manufacturer} {m.model} ({m.payloadCapacity || m.operatingWeight})
                    </option>
                  ))}
                </optgroup>
                <option value="General Machine Advice Needed">Other / General Fleet Requirement</option>
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Project Location in Ghana <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Tarkwa Mining Site / Kasoa Quarry"
                  value={projectLocation}
                  onChange={(e) => setProjectLocation(e.target.value)}
                  className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#F47721]/30 focus:border-[#F47721]"
                />
              </div>

              {serviceType === 'rental' && (
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Estimated Duration
                  </label>
                  <select
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#F47721]/30 focus:border-[#F47721]"
                  >
                    <option>Daily / Short Term (&lt; 1 Month)</option>
                    <option>1 to 3 Months</option>
                    <option>3 to 6 Months</option>
                    <option>6 to 12 Months</option>
                    <option>Long-Term Project (1+ Year)</option>
                  </select>
                </div>
              )}
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Project Specifics or Machine Requirements
              </label>
              <textarea
                rows={2}
                placeholder="Include rock breaker lines, bucket capacity preference, site shift demands, or spare part serials..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#F47721]/30 focus:border-[#F47721]"
              />
            </div>

            <div className="pt-2 flex items-center justify-between border-t border-slate-200">
              <div className="flex items-center gap-1.5 text-[11px] text-slate-500">
                <Shield className="w-3.5 h-3.5 text-[#082B4C]" />
                <span>Commercial confidentiality guaranteed</span>
              </div>

              <button
                type="submit"
                className="bg-[#F47721] hover:bg-[#D96213] text-white px-6 py-2.5 rounded-lg text-sm font-bold flex items-center gap-2 shadow-xs transition-all cursor-pointer"
              >
                <span>Submit Request</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

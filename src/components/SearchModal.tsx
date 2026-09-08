import React, { useState, useMemo } from 'react';
import { EQUIPMENT_DATA } from '../data/equipmentData';
import { EquipmentModel } from '../types';
import { Search, X, ChevronRight, Weight } from 'lucide-react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectEquipment: (equipment: EquipmentModel) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectEquipment,
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filtered = useMemo(() => {
    if (!searchTerm.trim()) {
      return EQUIPMENT_DATA.slice(0, 6);
    }
    const q = searchTerm.toLowerCase();
    return EQUIPMENT_DATA.filter(
      (m) =>
        m.model.toLowerCase().includes(q) ||
        m.manufacturer.toLowerCase().includes(q) ||
        m.categoryName.toLowerCase().includes(q) ||
        m.applications.toLowerCase().includes(q) ||
        m.operatingWeight.toLowerCase().includes(q)
    );
  }, [searchTerm]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-start justify-center p-4 sm:p-6 pt-20 animate-in fade-in duration-150">
      <div className="relative bg-white w-full max-w-2xl rounded-xl shadow-2xl border border-slate-200 overflow-hidden">
        {/* Search Input Bar */}
        <div className="p-4 border-b border-slate-200 flex items-center gap-3 bg-slate-50">
          <Search className="w-5 h-5 text-[#F47721] shrink-0" />
          <input
            type="text"
            autoFocus
            placeholder="Search excavators, wheel loaders, cranes, or specs (e.g. 21 Ton, XCMG, Mining)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-transparent text-sm sm:text-base font-medium text-[#102A43] focus:outline-hidden placeholder:text-slate-400"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="text-xs text-slate-400 hover:text-slate-600 px-1.5 py-0.5"
            >
              Clear
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1 rounded-md text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-[60vh] overflow-y-auto p-3 divide-y divide-slate-100">
          <div className="px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-slate-400">
            {searchTerm ? `Found ${filtered.length} matching machines` : 'Popular Heavy Equipment in Ghana'}
          </div>

          {filtered.length === 0 ? (
            <div className="p-8 text-center text-slate-500 text-sm">
              No equipment found matching &quot;{searchTerm}&quot;. Check our categories or contact our team for custom machinery sourcing.
            </div>
          ) : (
            filtered.map((item) => (
              <div
                key={item.id}
                onClick={() => {
                  onSelectEquipment(item);
                  onClose();
                }}
                className="p-3 hover:bg-slate-50 rounded-lg flex items-center justify-between gap-4 cursor-pointer transition-colors group"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <img
                    src={item.image}
                    alt={item.model}
                    className="w-14 h-12 rounded object-cover border border-slate-200 shrink-0"
                    referrerPolicy="no-referrer"
                  />
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-[#F47721] uppercase">
                        {item.categoryName}
                      </span>
                      <span className="text-xs text-slate-400">•</span>
                      <span className="text-xs font-medium text-slate-500">
                        {item.manufacturer}
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-[#102A43] truncate group-hover:text-[#082B4C]">
                      {item.model}
                    </h4>
                    <p className="text-xs text-slate-500 truncate">
                      {item.applications}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <div className="text-right hidden sm:block">
                    <span className="text-xs font-bold text-slate-700 block">
                      {item.operatingWeight}
                    </span>
                    <span className="text-[11px] text-slate-400">
                      {item.bucketCapacity || item.payloadCapacity || item.enginePower}
                    </span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-[#F47721] transition-colors" />
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

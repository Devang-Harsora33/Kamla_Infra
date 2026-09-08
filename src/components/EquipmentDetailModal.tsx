import React from 'react';
import { EquipmentModel } from '../types';
import { X, Check, ArrowRight, ShieldCheck, Gauge, Wrench, Weight, Zap } from 'lucide-react';

interface EquipmentDetailModalProps {
  equipment: EquipmentModel | null;
  onClose: () => void;
  onRentOrBuy: (modelName: string, mode: 'rental' | 'sales') => void;
}

export const EquipmentDetailModal: React.FC<EquipmentDetailModalProps> = ({
  equipment,
  onClose,
  onRentOrBuy,
}) => {
  if (!equipment) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-150">
      <div className="relative bg-white w-full max-w-3xl rounded-xl shadow-2xl border border-slate-200 overflow-hidden">
        {/* Top Header */}
        <div className="bg-[#082B4C] text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider bg-[#F47721] text-white">
              {equipment.categoryName}
            </span>
            <span className="text-slate-300 text-xs font-semibold">
              {equipment.manufacturer}
            </span>
          </div>
          <button
            onClick={onClose}
            className="text-slate-300 hover:text-white p-1 rounded-md hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
          {/* Image & Quick Badges */}
          <div className="space-y-4">
            <div className="relative rounded-lg overflow-hidden bg-slate-100 border border-slate-200 h-64 sm:h-72">
              <img
                src={equipment.image}
                alt={`${equipment.manufacturer} ${equipment.model}`}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-3 left-3 bg-[#082B4C]/90 text-white text-xs px-2.5 py-1 rounded font-semibold backdrop-blur-xs">
                Ghana Stock Ready
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="p-3 bg-[#F4F6F8] rounded-lg border border-slate-200">
                <span className="text-slate-500 block text-[11px]">Availability</span>
                <span className="font-bold text-[#082B4C]">Sales & Rental Fleet</span>
              </div>
              <div className="p-3 bg-[#F4F6F8] rounded-lg border border-slate-200">
                <span className="text-slate-500 block text-[11px]">Ghana Support</span>
                <span className="font-bold text-[#082B4C]">Full Parts & Service</span>
              </div>
            </div>
          </div>

          {/* Details & Specs */}
          <div className="flex flex-col justify-between space-y-4">
            <div>
              <h3 className="text-2xl font-black tracking-tight text-[#102A43]">
                {equipment.model}
              </h3>
              <p className="text-sm font-semibold text-[#F47721] mt-0.5">
                {equipment.manufacturer} • Commercial Industrial Grade
              </p>

              {/* Specs Table */}
              <div className="mt-4 border border-slate-200 rounded-lg overflow-hidden text-xs divide-y divide-slate-200">
                <div className="grid grid-cols-2 p-2.5 bg-slate-50">
                  <span className="font-medium text-slate-500 flex items-center gap-1.5">
                    <Weight className="w-3.5 h-3.5 text-slate-400" />
                    Operating Weight
                  </span>
                  <span className="font-bold text-slate-800 text-right">{equipment.operatingWeight}</span>
                </div>

                {equipment.enginePower && (
                  <div className="grid grid-cols-2 p-2.5 bg-white">
                    <span className="font-medium text-slate-500 flex items-center gap-1.5">
                      <Zap className="w-3.5 h-3.5 text-slate-400" />
                      Engine Power
                    </span>
                    <span className="font-bold text-slate-800 text-right">{equipment.enginePower}</span>
                  </div>
                )}

                {equipment.bucketCapacity && (
                  <div className="grid grid-cols-2 p-2.5 bg-slate-50">
                    <span className="font-medium text-slate-500 flex items-center gap-1.5">
                      <Gauge className="w-3.5 h-3.5 text-slate-400" />
                      Capacity / Reach
                    </span>
                    <span className="font-bold text-slate-800 text-right">{equipment.bucketCapacity}</span>
                  </div>
                )}

                {equipment.payloadCapacity && (
                  <div className="grid grid-cols-2 p-2.5 bg-white">
                    <span className="font-medium text-slate-500 flex items-center gap-1.5">
                      <Weight className="w-3.5 h-3.5 text-slate-400" />
                      Rated Payload
                    </span>
                    <span className="font-bold text-[#F47721] text-right">{equipment.payloadCapacity}</span>
                  </div>
                )}

                <div className="grid grid-cols-2 p-2.5 bg-slate-50">
                  <span className="font-medium text-slate-500 flex items-center gap-1.5">
                    <Wrench className="w-3.5 h-3.5 text-slate-400" />
                    Chassis / Undercarriage
                  </span>
                  <span className="font-bold text-slate-800 text-right">{equipment.undercarriageOrType}</span>
                </div>
              </div>

              {/* Application Focus */}
              <div className="mt-4">
                <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-1">
                  Primary Application
                </span>
                <p className="text-xs text-slate-600 bg-[#F4F6F8] p-2.5 rounded-lg border border-slate-200">
                  {equipment.applications}
                </p>
              </div>

              {/* Highlights */}
              {equipment.highlights && (
                <div className="mt-3">
                  <div className="space-y-1">
                    {equipment.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-1.5 text-xs text-slate-700 font-medium">
                        <Check className="w-3.5 h-3.5 text-[#F47721] shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="pt-4 border-t border-slate-200 flex items-center gap-3">
              <button
                onClick={() => {
                  onClose();
                  onRentOrBuy(`${equipment.manufacturer} ${equipment.model}`, 'rental');
                }}
                className="flex-1 bg-[#F47721] hover:bg-[#D96213] text-white py-2.5 px-4 rounded-lg text-xs font-bold text-center transition-all cursor-pointer shadow-xs"
              >
                Rent This Machine
              </button>
              <button
                onClick={() => {
                  onClose();
                  onRentOrBuy(`${equipment.manufacturer} ${equipment.model}`, 'sales');
                }}
                className="flex-1 border border-[#082B4C] text-[#082B4C] hover:bg-[#082B4C] hover:text-white py-2.5 px-4 rounded-lg text-xs font-bold text-center transition-all cursor-pointer"
              >
                Purchase Enquiry
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

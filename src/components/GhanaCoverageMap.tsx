import React, { useState } from 'react';
import { MapPin, Navigation, Clock, ShieldCheck, CheckCircle2, Building2 } from 'lucide-react';

export const GhanaCoverageMap: React.FC = () => {
  const [selectedHub, setSelectedHub] = useState<string>('tema');

  const hubs = [
    {
      id: 'tema',
      title: 'Tema Heavy Logistics Yard & Head Depot',
      region: 'Greater Accra Region',
      status: 'Central Logistics & Spares Depot',
      dispatchTime: 'Immediate (2 - 4 Hours)',
      fleetCount: '8+ Heavy Excavators in Stock',
      capabilities: [
        'Central Spare Parts Warehouse with OEM Hydraulic Components',
        'Direct connection to Tema Port for import reception & customs clearance',
        'Master engineering overhaul workshop & testing bay',
      ],
    },
    {
      id: 'tarkwa',
      title: 'Western Mining Field Base (Tarkwa / Prestea)',
      region: 'Western Region Mining Belt',
      status: 'Active Mining Fleet Base',
      dispatchTime: 'Same-Day Field Response',
      fleetCount: '50T Mining Excavators Deployed',
      capabilities: [
        'Heavy-duty 50-ton mining class excavators stationed on concession',
        '24/7 dedicated mobile repair team with emergency hose crimping',
        'Minerals Commission certified safety standards & filtration setups',
      ],
    },
    {
      id: 'kumasi',
      title: 'Kumasi & Ashanti Infrastructure Support Hub',
      region: 'Ashanti Region',
      status: 'Regional Distribution Hub',
      dispatchTime: '4 - 8 Hours Mobilization',
      fleetCount: 'Civil & Road Work Fleet',
      capabilities: [
        '20-ton & 34-ton earthmoving inventory for central Ghana highway contracts',
        'Dedicated lube truck and preventive maintenance crews',
        'Fast transit access to Sunyani, Techiman, and northern transit arteries',
      ],
    },
    {
      id: 'shai-hills',
      title: 'Eastern Aggregate & Quarry Support (Shai Hills / Koforidua)',
      region: 'Eastern Region',
      status: 'Quarry & Breaker Hub',
      dispatchTime: '3 - 6 Hours Mobilization',
      fleetCount: 'Heavy Rock Bucket Units',
      capabilities: [
        'High-abrasion rock buckets and heavy hydraulic breaker setups',
        'Scheduled undercarriage wear inspections for granite quarries',
      ],
    },
  ];

  const activeHubData = hubs.find((h) => h.id === selectedHub) || hubs[0];

  return (
    <section className="py-20 lg:py-28 bg-zinc-50 border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-zinc-200 text-[#18181B] text-xs font-bold uppercase tracking-wider mb-3">
            <Navigation className="w-3.5 h-3.5 text-[#E85D04]" />
            <span>Nationwide Ghana Logistics</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-[#18181B] tracking-tight">
            Strategically Deployed Across Ghana
          </h2>
          <p className="mt-3 text-base text-zinc-600">
            From the bustling port of Tema to the deepest gold mines of the Western Region, our machinery and mobile technicians are positioned for rapid site mobilization.
          </p>
        </div>

        {/* Interactive Hub Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Hub Selector List */}
          <div className="lg:col-span-5 space-y-3">
            {hubs.map((hub) => (
              <div
                key={hub.id}
                onClick={() => setSelectedHub(hub.id)}
                className={`p-5 rounded-xl border transition-all cursor-pointer ${
                  selectedHub === hub.id
                    ? 'bg-white border-[#18181B] shadow-md ring-1 ring-[#18181B]'
                    : 'bg-white/60 border-zinc-200 hover:bg-white hover:border-zinc-300'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[11px] font-bold text-[#E85D04] uppercase tracking-wider">
                    {hub.region}
                  </span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-zinc-100 text-zinc-700">
                    {hub.dispatchTime}
                  </span>
                </div>
                <h4 className="font-heading text-base font-bold text-zinc-900">
                  {hub.title}
                </h4>
                <p className="text-xs text-zinc-500 mt-1">
                  {hub.status}
                </p>
              </div>
            ))}
          </div>

          {/* Active Hub Detail Card */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-7 sm:p-8 border border-zinc-200 shadow-sm">
            <div className="flex items-start justify-between border-b border-zinc-100 pb-5 mb-6">
              <div>
                <span className="text-xs font-bold text-[#E85D04] uppercase tracking-wider block">
                  {activeHubData.region} Hub
                </span>
                <h3 className="font-heading text-2xl font-black text-[#18181B]">
                  {activeHubData.title}
                </h3>
              </div>
              <div className="w-10 h-10 rounded-xl bg-zinc-100 text-[#18181B] flex items-center justify-center">
                <Building2 className="w-5 h-5" />
              </div>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              <div className="p-3.5 rounded-xl bg-zinc-50 border border-zinc-200">
                <span className="text-[10px] text-zinc-400 block uppercase font-semibold">Mobilization SLA</span>
                <strong className="text-zinc-900 font-bold text-sm">{activeHubData.dispatchTime}</strong>
              </div>
              <div className="p-3.5 rounded-xl bg-zinc-50 border border-zinc-200">
                <span className="text-[10px] text-zinc-400 block uppercase font-semibold">Capacity</span>
                <strong className="text-zinc-900 font-bold text-sm">{activeHubData.fleetCount}</strong>
              </div>
            </div>

            {/* Operational Capabilities */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-zinc-500 uppercase tracking-wider">
                Base Infrastructure & Field Capabilities
              </h4>
              <div className="space-y-2.5">
                {activeHubData.capabilities.map((cap, cIdx) => (
                  <div key={cIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-700">
                    <CheckCircle2 className="w-4 h-4 text-[#E85D04] shrink-0 mt-0.5" />
                    <span>{cap}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobilize Action */}
            <div className="mt-8 pt-6 border-t border-zinc-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-zinc-500">
                Lowbed trailer transport organized directly to your GPS coordinates.
              </span>
              <a
                href="#contact"
                className="px-5 py-2.5 bg-[#18181B] hover:bg-[#09090B] text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-colors whitespace-nowrap shadow-sm"
              >
                Inquire Site Mobilization
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

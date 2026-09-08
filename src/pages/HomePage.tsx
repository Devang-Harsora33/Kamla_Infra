import React, { useState, useEffect } from 'react';
import { PageId, EquipmentModel } from '../types';
import { EQUIPMENT_DATA } from '../data/equipmentData';
import {
  ArrowRight,
  ChevronRight,
  ChevronLeft,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Wrench,
  TrendingUp,
  MapPin,
  Clock,
  Layers,
  Sparkles,
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onOpenQuote: (modelName?: string, defaultService?: 'rental' | 'sales' | 'spares') => void;
  onSelectEquipment: (equipment: EquipmentModel) => void;
}

interface HeroSlide {
  id: string;
  image: string;
  alt: string;
  category: string;
}

const HERO_SLIDES: HeroSlide[] = [
  {
    id: 'slide-excavator',
    image: 'https://images.unsplash.com/photo-1578844251758-2f71da64c96f?q=80&w=2400&auto=format&fit=crop',
    alt: 'Kamla Infra Heavy Crawler Excavator Inventory',
    category: 'Excavator',
  },
  {
    id: 'slide-wheel-loader-heavy',
    image: 'https://images.unsplash.com/photo-1618090584176-7132b9911657?q=80&w=2400&auto=format&fit=crop',
    alt: 'Kamla Infra Heavy Wheel Loader Inventory',
    category: 'Wheel Loader',
  },
  {
    id: 'slide-articulated-loader',
    image: 'https://images.unsplash.com/photo-1579762715118-a6f1d4b934f1?q=80&w=2400&auto=format&fit=crop',
    alt: 'Kamla Infra Articulated Wheel Loader Inventory',
    category: 'Wheel Loader',
  },
  {
    id: 'slide-crane',
    image: 'https://images.unsplash.com/photo-1508873696983-2df5293cb32b?q=80&w=2400&auto=format&fit=crop',
    alt: 'Kamla Infra All-Terrain Mobile Crane Inventory',
    category: 'Crane',
  },
];

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenQuote,
  onSelectEquipment,
}) => {
  // Select top representative machines for the "POPULAR EQUIPMENT" grid
  const popularModels = EQUIPMENT_DATA.filter((m) => m.isPopular);

  // Big Hero Slide State
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlideIndex((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const prevSlide = () => {
    setCurrentSlideIndex((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  return (
    <div className="w-full">
      {/* ----------------- BIG HERO IMAGE SECTION (CONTENT ONLY IMAGE) ----------------- */}
      <section className="relative w-full h-[65vh] sm:h-[75vh] lg:h-[84vh] min-h-[480px] max-h-[820px] bg-[#F4F6F8] overflow-hidden border-b border-slate-200">
        {HERO_SLIDES.map((slide, index) => {
          const isActive = index === currentSlideIndex;
          return (
            <div
              key={slide.id}
              onClick={() => onNavigate('equipment')}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out cursor-pointer ${
                isActive ? 'opacity-100 z-10' : 'opacity-0 pointer-events-none z-0'
              }`}
            >
              <img
                src={slide.image}
                alt={slide.alt}
                className="w-full h-full object-cover select-none"
                referrerPolicy="no-referrer"
              />
            </div>
          );
        })}

        {/* Left Arrow Navigation */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            prevSlide();
          }}
          aria-label="Previous machinery image"
          className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/90 hover:bg-white text-[#082B4C] hover:text-[#F47721] flex items-center justify-center shadow-lg transition-all cursor-pointer border border-slate-200 backdrop-blur-xs active:scale-95"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Right Arrow Navigation */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            nextSlide();
          }}
          aria-label="Next machinery image"
          className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/90 hover:bg-white text-[#082B4C] hover:text-[#F47721] flex items-center justify-center shadow-lg transition-all cursor-pointer border border-slate-200 backdrop-blur-xs active:scale-95"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Minimal Dots Indicator */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 bg-white/85 backdrop-blur-sm px-3.5 py-1.5 rounded-full border border-slate-200 shadow-md">
          {HERO_SLIDES.map((slide, index) => (
            <button
              key={slide.id}
              onClick={(e) => {
                e.stopPropagation();
                setCurrentSlideIndex(index);
              }}
              aria-label={`Show ${slide.category} machinery image`}
              className={`transition-all rounded-full cursor-pointer ${
                index === currentSlideIndex
                  ? 'w-7 h-2.5 bg-[#F47721]'
                  : 'w-2.5 h-2.5 bg-slate-300 hover:bg-slate-500'
              }`}
            />
          ))}
        </div>
      </section>

      {/* ----------------- STATISTICS / TRUST STRIP ----------------- */}
      <section className="bg-white border-b border-slate-200 py-8 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-200">
            {/* Stat 1 */}
            <div className="pt-4 sm:pt-0 sm:px-4 first:pl-0">
              <div className="text-3xl lg:text-4xl font-black text-[#082B4C] tracking-tight">
                100<span className="text-[#F47721]">+</span>
              </div>
              <div className="font-bold text-[#102A43] text-sm mt-0.5">
                Equipment Models
              </div>
              <p className="text-xs text-slate-500 mt-0.5">
                Wide machinery range for every project
              </p>
            </div>

            {/* Stat 2 */}
            <div className="pt-4 sm:pt-0 sm:px-4">
              <div className="text-3xl lg:text-4xl font-black text-[#082B4C] tracking-tight">
                Sales &amp; Rental
              </div>
              <div className="font-bold text-[#102A43] text-sm mt-0.5">
                Flexible Solutions
              </div>
              <p className="text-xs text-slate-500 mt-0.5">
                Tailored contracts for short &amp; long-term
              </p>
            </div>

            {/* Stat 3 */}
            <div className="pt-4 sm:pt-0 sm:px-4">
              <div className="text-3xl lg:text-4xl font-black text-[#082B4C] tracking-tight flex items-baseline gap-1">
                Ghana <span className="text-sm font-bold text-[#F47721]">Hub</span>
              </div>
              <div className="font-bold text-[#102A43] text-sm mt-0.5">
                Local Market Support
              </div>
              <p className="text-xs text-slate-500 mt-0.5">
                Nationwide deployment &amp; on-site teams
              </p>
            </div>

            {/* Stat 4 */}
            <div className="pt-4 sm:pt-0 sm:px-4">
              <div className="text-3xl lg:text-4xl font-black text-[#082B4C] tracking-tight">
                Reliable
              </div>
              <div className="font-bold text-[#102A43] text-sm mt-0.5">
                Equipment &amp; Support
              </div>
              <p className="text-xs text-slate-500 mt-0.5">
                Genuine spares &amp; high uptime guarantee
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------- SECTION: BUILT FOR EVERY BIGGER PLAN ----------------- */}
      <section className="py-16 sm:py-20 bg-[#F4F6F8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#F47721] block mb-1">
                OUR EQUIPMENT RANGE
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#102A43] tracking-tight uppercase">
                BUILT FOR EVERY BIGGER PLAN
              </h2>
            </div>
            <button
              onClick={() => onNavigate('equipment')}
              className="inline-flex items-center gap-1.5 text-sm font-bold text-[#082B4C] hover:text-[#F47721] transition-colors cursor-pointer group"
            >
              <span>View Full Equipment Range</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Three Large Equipment Category Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Category 1: EXCAVATORS */}
            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-all group flex flex-col justify-between">
              <div>
                <div className="relative h-56 sm:h-60 overflow-hidden bg-slate-100">
                  <img
                    src="https://images.unsplash.com/photo-1578844251758-2f71da64c96f?q=80&w=800&auto=format&fit=crop"
                    alt="Kamla Infra Excavators"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 right-3 bg-[#082B4C] text-white text-[11px] font-bold px-2.5 py-1 rounded">
                    21T – 25T Class
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-black uppercase text-[#102A43] tracking-tight mb-2">
                    EXCAVATORS
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    High-performance excavators for earthmoving, quarrying and construction. Engineered for deep trenching, rock digging, and high-productivity aggregate extraction.
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2">
                <button
                  onClick={() => onNavigate('equipment')}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#F47721] hover:text-[#D96213] uppercase tracking-wider cursor-pointer"
                >
                  <span>View Range</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Category 2: WHEEL LOADERS */}
            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-all group flex flex-col justify-between">
              <div>
                <div className="relative h-56 sm:h-60 overflow-hidden bg-slate-100">
                  <img
                    src="https://images.unsplash.com/photo-1579762715118-a6f1d4b934f1?q=80&w=800&auto=format&fit=crop"
                    alt="Kamla Infra Wheel Loaders"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 right-3 bg-[#082B4C] text-white text-[11px] font-bold px-2.5 py-1 rounded">
                    3T – 12T Payload
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-black uppercase text-[#102A43] tracking-tight mb-2">
                    WHEEL LOADERS
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Powerful wheel loaders for material handling, mining and bulk loading. Robust articulated chassis with rapid cycle speeds for crushing plants and port logistics.
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2">
                <button
                  onClick={() => onNavigate('equipment')}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#F47721] hover:text-[#D96213] uppercase tracking-wider cursor-pointer"
                >
                  <span>View Range</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Category 3: CRANES */}
            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-all group flex flex-col justify-between">
              <div>
                <div className="relative h-56 sm:h-60 overflow-hidden bg-slate-100">
                  <img
                    src="https://images.unsplash.com/photo-1508873696983-2df5293cb32b?q=80&w=800&auto=format&fit=crop"
                    alt="Kamla Infra Cranes"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 right-3 bg-[#082B4C] text-white text-[11px] font-bold px-2.5 py-1 rounded">
                    25T – 75T Lifting
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-black uppercase text-[#102A43] tracking-tight mb-2">
                    CRANES
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Reliable lifting equipment for infrastructure and industrial projects. High-mobility truck-mounted and all-terrain cranes equipped with multi-section hydraulic booms.
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2">
                <button
                  onClick={() => onNavigate('equipment')}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#F47721] hover:text-[#D96213] uppercase tracking-wider cursor-pointer"
                >
                  <span>View Range</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------- SECTION: POPULAR EQUIPMENT ----------------- */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#F47721] block mb-1">
                OUR EQUIPMENT FLEET
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#102A43] tracking-tight uppercase">
                POPULAR EQUIPMENT
              </h2>
            </div>
            <button
              onClick={() => onNavigate('equipment')}
              className="text-sm font-bold text-[#082B4C] hover:text-[#F47721] transition-colors flex items-center gap-1 cursor-pointer"
            >
              <span>View All Models</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Clean Product Grid using machinery from uploaded list */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
            {popularModels.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs hover:border-[#082B4C]/40 transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Machinery Image */}
                  <div className="relative h-44 bg-slate-100 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.model}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-2.5 left-2.5 bg-white/90 backdrop-blur-xs text-[#082B4C] text-[10px] font-bold px-2 py-0.5 rounded shadow-xs uppercase tracking-wider">
                      {item.categoryName}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-4 space-y-2">
                    <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wide">
                      {item.manufacturer}
                    </div>
                    <h4 className="text-base font-black text-[#102A43] leading-tight">
                      {item.model}
                    </h4>

                    {/* Weight / Payload Spec */}
                    <div className="bg-[#F4F6F8] px-2.5 py-1.5 rounded text-xs font-semibold text-slate-700 flex items-center justify-between">
                      <span className="text-slate-500 text-[11px]">Weight:</span>
                      <span className="font-bold text-[#082B4C]">{item.operatingWeight}</span>
                    </div>

                    {/* Primary Application */}
                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed pt-1">
                      {item.applications}
                    </p>
                  </div>
                </div>

                {/* Card Actions: "View Details" & "Rent / Enquire" */}
                <div className="p-4 pt-0 space-y-2">
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => onOpenQuote(`${item.manufacturer} ${item.model}`, 'rental')}
                      className="bg-[#F47721] hover:bg-[#D96213] text-white py-2 px-2.5 rounded-lg text-xs font-bold text-center transition-colors cursor-pointer"
                    >
                      Rent Now
                    </button>
                    <button
                      onClick={() => onSelectEquipment(item)}
                      className="border border-slate-300 hover:border-[#082B4C] text-slate-700 hover:text-[#082B4C] py-2 px-2 rounded-lg text-xs font-semibold text-center transition-colors cursor-pointer"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------- DARK NAVY CTA SECTION ----------------- */}
      <section className="bg-[#061E35] text-white py-16 sm:py-20 border-t border-b border-[#082B4C] relative overflow-hidden">
        {/* Machine Silhouette background accent */}
        <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-[radial-gradient(#F47721_1px,transparent_1px)] [background-size:20px_20px] opacity-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Headline */}
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#F47721]">
                NEED EQUIPMENT FOR YOUR NEXT PROJECT?
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight uppercase leading-tight">
                RENT HEAVY EQUIPMENT <br />
                <span className="text-[#F47721]">WITH CONFIDENCE.</span>
              </h2>
              <p className="text-slate-300 text-sm sm:text-base max-w-lg leading-relaxed">
                Streamline your project mobilization with well-maintained equipment, certified operators, and responsive local maintenance support across Ghana.
              </p>
            </div>

            {/* Right Supporting Points & Button */}
            <div className="lg:col-span-6 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { title: 'Flexible Rental Plans', desc: 'Daily, monthly, or project-duration terms' },
                  { title: 'Well-Maintained Equipment', desc: 'Serviced and inspected to OEM standard' },
                  { title: 'Reliable Availability', desc: 'Fast equipment dispatch to any Ghana site' },
                  { title: 'Project Support', desc: 'Dedicated technical team on standby' },
                ].map((point, index) => (
                  <div key={index} className="flex items-start gap-3 p-3.5 rounded-lg bg-[#082B4C]/80 border border-slate-700/80">
                    <CheckCircle2 className="w-5 h-5 text-[#F47721] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-white">{point.title}</h4>
                      <p className="text-xs text-slate-300 mt-0.5">{point.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  onClick={() => onOpenQuote(undefined, 'rental')}
                  className="bg-[#F47721] hover:bg-[#D96213] text-white px-8 py-3.5 rounded-lg text-sm font-bold tracking-wide transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Request a Rental Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <div className="text-xs text-slate-400 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>Let&apos;s get your project moving</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------- VALUE PROPS STRIP ----------------- */}
      <section className="bg-white py-10 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-center gap-3 p-3">
              <div className="w-10 h-10 rounded-lg bg-[#F4F6F8] flex items-center justify-center text-[#082B4C] shrink-0 border border-slate-200">
                <Wrench className="w-5 h-5 text-[#F47721]" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-[#102A43] uppercase">Genuine Spares</h4>
                <p className="text-xs text-slate-500">For longer equipment life</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3">
              <div className="w-10 h-10 rounded-lg bg-[#F4F6F8] flex items-center justify-center text-[#082B4C] shrink-0 border border-slate-200">
                <ShieldCheck className="w-5 h-5 text-[#F47721]" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-[#102A43] uppercase">Expert Maintenance</h4>
                <p className="text-xs text-slate-500">Heavy equipment site mechanics</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3">
              <div className="w-10 h-10 rounded-lg bg-[#F4F6F8] flex items-center justify-center text-[#082B4C] shrink-0 border border-slate-200">
                <TrendingUp className="w-5 h-5 text-[#F47721]" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-[#102A43] uppercase">Flexible Purchase</h4>
                <p className="text-xs text-slate-500">Commercial ownership options</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3">
              <div className="w-10 h-10 rounded-lg bg-[#F4F6F8] flex items-center justify-center text-[#082B4C] shrink-0 border border-slate-200">
                <MapPin className="w-5 h-5 text-[#F47721]" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-[#102A43] uppercase">Trusted In Ghana</h4>
                <p className="text-xs text-slate-500">Mining, roads &amp; quarrying</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

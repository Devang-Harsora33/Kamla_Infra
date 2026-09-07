export type EquipmentCategory = 'all' | 'excavator' | 'wheel-loader' | 'ev-equipment' | 'mining' | 'long-reach';

export type ServiceType = 'sales' | 'rental' | 'trading' | 'spares';

export interface EquipmentItem {
  id: string;
  name: string;
  model: string;
  category: EquipmentCategory;
  categoryLabel: string;
  type: 'Excavator' | 'Wheel Loader';
  brand: 'Caterpillar' | 'Komatsu' | 'SANY' | 'Hyundai' | 'Hitachi' | 'XCMG' | 'LiuGong' | 'Tata Hitachi' | 'JCB';
  operatingWeight: string;
  bucketCapacity: string;
  enginePower: string;
  maxDiggingDepth?: string; // Optional for wheel loaders
  payload?: string; // For wheel loaders
  yearOfManufacture: number;
  condition: 'Brand New' | 'Certified Pre-Owned' | 'Rental Ready';
  availability: 'Ready for Dispatch' | 'On Site (Book Next)' | 'In Yard - Tema';
  hourlyRateEstimate?: string;
  purchasePriceEstimate?: string;
  image: string;
  description: string;
  highlightFeatures: string[];
  specs: {
    engineModel?: string;
    operatingWeightKg?: number;
    hydraulicFlow?: string;
    fuelTankCapacity?: string;
    groundPressure?: string;
    boomLength?: string;
    trackShoeWidth?: string;
    dumpClearance?: string; // Added for wheel loaders
  };
  suitableFor: string[];
}

export interface QuoteRequestData {
  serviceType: ServiceType;
  equipmentModel?: string;
  tonnageClass?: string;
  location: string;
  duration?: string;
  operatorRequired?: boolean;
  projectType: string;
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  notes?: string;
}

export interface TradeInRequestData {
  currentBrand: string;
  currentModel: string;
  year: string;
  operatingHours: string;
  condition: 'Excellent' | 'Good' | 'Fair' | 'Requires Overhaul';
  interestedInModel: string;
  location: string;
  contactName: string;
  contactPhone: string;
  contactEmail: string;
}

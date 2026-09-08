export type PageId = 'home' | 'equipment' | 'rental' | 'sales-spares' | 'about-contact';

export type EquipmentCategory = 'excavator' | 'wheel-loader' | 'crane';

export interface EquipmentModel {
  id: string;
  category: EquipmentCategory;
  categoryName: string;
  manufacturer: string;
  model: string;
  operatingWeight: string;
  enginePower?: string;
  bucketCapacity?: string;
  payloadCapacity?: string;
  undercarriageOrType: string;
  applications: string;
  isPopular?: boolean;
  availableFor: ('sale' | 'rental')[];
  image: string;
  highlights?: string[];
}

export interface QuoteRequest {
  fullName: string;
  company: string;
  phone: string;
  email: string;
  serviceType: 'rental' | 'sales' | 'spares';
  equipmentModel?: string;
  duration?: string;
  projectLocation: string;
  notes: string;
}

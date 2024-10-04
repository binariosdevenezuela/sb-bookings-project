import { Business } from '../../businesses/entities/business.entity';
export declare class BusinessLocation {
  id: number;
  business: Business;
  is_mobile: boolean;
  latitude: number;
  longitude: number;
  service_radius: number;
  street: string;
  city: string;
  state: string;
  postal_code: string;
  phone: string;
}

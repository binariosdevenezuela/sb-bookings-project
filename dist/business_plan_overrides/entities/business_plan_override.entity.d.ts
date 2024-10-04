import { Business } from '../../businesses/entities/business.entity';
export declare class BusinessPlanOverride {
  override_id: number;
  business: Business;
  max_users: number;
  has_marketing: boolean;
  custom_domain: boolean;
  storage_space: number;
  max_appointments: number;
}

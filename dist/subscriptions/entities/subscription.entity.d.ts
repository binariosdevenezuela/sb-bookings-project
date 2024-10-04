import { Business } from '../../businesses/entities/business.entity';
import { Plan } from '../../plans/entities/plan.entity';
export declare class Subscription {
  subscription_id: number;
  business: Business;
  plan: Plan;
  start_date: string;
  end_date: string;
  is_active: boolean;
}

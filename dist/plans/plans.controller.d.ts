import { PlansService } from './plans.service';
import { CreatePlanDto } from './dto/create-plan.dto';
import { UpdatePlanDto } from './dto/update-plan.dto';
export declare class PlansController {
  private readonly plansService;
  constructor(plansService: PlansService);
  create(createPlanDto: CreatePlanDto): string;
  findAll(): string;
  findOne(id: string): string;
  update(id: string, updatePlanDto: UpdatePlanDto): string;
  remove(id: string): string;
}

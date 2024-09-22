import { CreatePlanDto } from './dto/create-plan.dto';
import { UpdatePlanDto } from './dto/update-plan.dto';
export declare class PlansService {
    create(createPlanDto: CreatePlanDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updatePlanDto: UpdatePlanDto): string;
    remove(id: number): string;
}

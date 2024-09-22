import { WorkersService } from './workers.service';
import { CreateWorkerDto } from './dto/create-worker.dto';
import { UpdateWorkerDto } from './dto/update-worker.dto';
export declare class WorkersController {
    private readonly workersService;
    constructor(workersService: WorkersService);
    create(createWorkerDto: CreateWorkerDto): string;
    findAll(): string;
    findOne(id: string): {
        hola: string;
    };
    update(id: string, updateWorkerDto: UpdateWorkerDto): string;
    remove(id: string): string;
}

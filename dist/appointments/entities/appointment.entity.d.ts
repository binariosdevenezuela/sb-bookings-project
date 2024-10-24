import { Client } from '../../clients/entities/client.entity';
import { Worker } from '../../workers/entities/worker.entity';
import { Service } from '../../services/entities/service.entity';
export declare class Appointment {
    id: number;
    client: Client;
    worker: Worker;
    service: Service;
    start_time: Date;
    end_time: Date;
    service_location: string;
    appointment_status: 'Scheduled' | 'In Progress' | 'Completed';
}

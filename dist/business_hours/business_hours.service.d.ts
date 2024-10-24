import { DataSource } from 'typeorm';
import { UpdateBusinessHourDto } from './dto/update-business_hour.dto';
export declare class BusinessHoursService {
    private readonly dataSource;
    constructor(dataSource: DataSource);
    update(locationId: number, updateBusinessHourDto: UpdateBusinessHourDto): Promise<void>;
}

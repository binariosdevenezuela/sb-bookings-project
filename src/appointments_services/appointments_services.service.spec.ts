import { Test, TestingModule } from '@nestjs/testing';
import { AppointmentsServicesService } from './appointments_services.service';

describe('AppointmentsServicesService', () => {
  let service: AppointmentsServicesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AppointmentsServicesService],
    }).compile();

    service = module.get<AppointmentsServicesService>(AppointmentsServicesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { AppointmentsServicesController } from './appointments_services.controller';
import { AppointmentsServicesService } from './appointments_services.service';

describe('AppointmentsServicesController', () => {
  let controller: AppointmentsServicesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AppointmentsServicesController],
      providers: [AppointmentsServicesService],
    }).compile();

    controller = module.get<AppointmentsServicesController>(AppointmentsServicesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

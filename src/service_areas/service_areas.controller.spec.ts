import { Test, TestingModule } from '@nestjs/testing';
import { ServiceAreasController } from './service_areas.controller';
import { ServiceAreasService } from './service_areas.service';

describe('ServiceAreasController', () => {
  let controller: ServiceAreasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ServiceAreasController],
      providers: [ServiceAreasService],
    }).compile();

    controller = module.get<ServiceAreasController>(ServiceAreasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

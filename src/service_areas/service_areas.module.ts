import { Module } from '@nestjs/common';
import { ServiceAreasService } from './service_areas.service';
import { ServiceAreasController } from './service_areas.controller';

@Module({
  controllers: [ServiceAreasController],
  providers: [ServiceAreasService],
})
export class ServiceAreasModule {}

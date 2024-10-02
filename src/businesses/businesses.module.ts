import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Business } from './entities/business.entity'; // Importar la entidad Business
import { BusinessesService } from './businesses.service';
import { BusinessesController } from './businesses.controller';

@Module({
  imports: [
  TypeOrmModule.forFeature([Business]), // Registrar la entidad Business
],
  controllers: [BusinessesController],
  providers: [BusinessesService],
})
export class BusinessesModule {}

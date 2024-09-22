import { PartialType } from '@nestjs/mapped-types';
import { CreateServiceAreaDto } from './create-service_area.dto';

export class UpdateServiceAreaDto extends PartialType(CreateServiceAreaDto) {}

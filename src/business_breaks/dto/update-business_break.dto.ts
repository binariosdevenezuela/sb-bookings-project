import { PartialType } from '@nestjs/mapped-types';
import { CreateBusinessBreakDto } from './create-business_break.dto';

export class UpdateBusinessBreakDto extends PartialType(CreateBusinessBreakDto) {}

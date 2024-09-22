import { Module } from '@nestjs/common';
import { BusinessBreaksService } from './business_breaks.service';
import { BusinessBreaksController } from './business_breaks.controller';

@Module({
  controllers: [BusinessBreaksController],
  providers: [BusinessBreaksService],
})
export class BusinessBreaksModule {}

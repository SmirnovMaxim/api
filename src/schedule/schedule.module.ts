import { Schedule } from '@/schedule/entities/schedule.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ScheduleService } from '@/schedule/schedule.service';
import { ScheduleController } from '@/schedule/schedule.controller';

@Module({
  controllers: [ScheduleController],
  providers: [ScheduleService],
  imports: [TypeOrmModule.forFeature([Schedule])],
})
export class ScheduleModule {}

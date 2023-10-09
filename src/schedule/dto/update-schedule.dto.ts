import { PartialType } from '@nestjs/swagger';
import { CreateScheduleDto } from '@/schedule/dto/create-schedule.dto';

export class UpdateScheduleDto extends PartialType(CreateScheduleDto) {}

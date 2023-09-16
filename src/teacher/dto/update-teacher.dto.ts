import { PartialType } from '@nestjs/swagger';
import { CreateTeacherDto } from '@/teacher/dto/create-teacher.dto';

export class UpdateTeacherDto extends PartialType(CreateTeacherDto) {}

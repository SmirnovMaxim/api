import { PartialType } from '@nestjs/swagger';
import { CreateLessonDto } from '@/lesson/dto/create-lesson.dto';

export class UpdateLessonDto extends PartialType(CreateLessonDto) {}

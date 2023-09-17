import { AuthModule } from '@/auth/auth.module';
import { Lesson } from '@/lesson/entities/lesson.entity';
import { Module } from '@nestjs/common';
import { LessonService } from '@/lesson/lesson.service';
import { LessonController } from '@/lesson/lesson.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [LessonController],
  providers: [LessonService],
  imports: [TypeOrmModule.forFeature([Lesson]), AuthModule],
})
export class LessonModule {}

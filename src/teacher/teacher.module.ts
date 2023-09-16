import { AuthModule } from '@/auth/auth.module';
import { Teacher } from '@/teacher/entities/teacher.entity';
import { Module } from '@nestjs/common';
import { TeacherService } from '@/teacher/teacher.service';
import { TeacherController } from '@/teacher/teacher.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [TeacherController],
  providers: [TeacherService],
  imports: [TypeOrmModule.forFeature([Teacher]), AuthModule],
})
export class TeacherModule {}

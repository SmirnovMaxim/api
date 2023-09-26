import { Department } from '@/department/entities/department.entity';
import { Module } from '@nestjs/common';
import { DepartmentService } from '@/department/department.service';
import { DepartmentController } from '@/department/department.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [DepartmentController],
  providers: [DepartmentService],
  imports: [TypeOrmModule.forFeature([Department])],
})
export class DepartmentModule {}

import { Teacher } from '@/teacher/entities/teacher.entity';
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTeacherDto } from '@/teacher/dto/create-teacher.dto';
import { UpdateTeacherDto } from '@/teacher/dto/update-teacher.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TeacherService {
  constructor(
    @InjectRepository(Teacher)
    private readonly teacherRepository: Repository<Teacher>,
  ) {}
  create(createTeacherDto: CreateTeacherDto) {
    return this.teacherRepository.save(createTeacherDto);
  }

  findAll() {
    return this.teacherRepository.find();
  }

  async findOne(id: number) {
    const teacher = await this.teacherRepository.findOneBy({ id });
    if (!teacher) {
      throw new NotFoundException();
    }
    return this.teacherRepository.findOneBy({ id });
  }

  async update(id: number, updateTeacherDto: UpdateTeacherDto) {
    await this.teacherRepository.update({ id }, updateTeacherDto);
    return this.findOne(id);
  }

  remove(id: number) {
    return this.teacherRepository.delete(id);
  }
}

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
  async create(createTeacherDto: CreateTeacherDto) {
    const data = {
      ...createTeacherDto,
      lessons: (createTeacherDto.lessonIds || []).map((id) => ({ id })),
    };

    const teacher = await this.teacherRepository.save(data);
    return this.findOne(teacher.id);
  }

  findAll() {
    return this.teacherRepository.find({
      relations: {
        lessons: true,
        department: true,
      },
    });
  }

  async findOne(id: number) {
    try {
      return await this.teacherRepository.findOneOrFail({
        where: { id },
        relations: {
          lessons: true,
          department: true,
        },
      });
    } catch (e) {
      throw new NotFoundException();
    }
  }

  async update(id: number, updateTeacherDto: UpdateTeacherDto) {
    const entity = {
      ...updateTeacherDto,
      id,
      lessons: (updateTeacherDto.lessonIds || []).map((id) => ({ id })),
    };

    await this.teacherRepository.save(entity);
    return this.findOne(id);
  }

  remove(id: number) {
    return this.teacherRepository.delete(id);
  }
}

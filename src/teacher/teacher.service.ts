import { Lesson } from '@/lesson/entities/lesson.entity';
import { Teacher } from '@/teacher/entities/teacher.entity';
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTeacherDto } from '@/teacher/dto/create-teacher.dto';
import { UpdateTeacherDto } from '@/teacher/dto/update-teacher.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';

@Injectable()
export class TeacherService {
  constructor(
    @InjectRepository(Teacher)
    private readonly teacherRepository: Repository<Teacher>,
    @InjectRepository(Lesson)
    private readonly lessonRepository: Repository<Lesson>,
  ) {}
  async create(createTeacherDto: CreateTeacherDto) {
    const lessons = await this.lessonRepository.find({
      where: {
        id: In(createTeacherDto.lessonIds),
      },
    });

    const data = {
      ...createTeacherDto,
      lessons,
    };

    const teacher = await this.teacherRepository.save(data);
    return this.findOne(teacher.id);
  }

  findAll() {
    return this.teacherRepository.find({
      relations: {
        lessons: true,
      },
    });
  }

  async findOne(id: number) {
    try {
      return await this.teacherRepository.findOneOrFail({
        where: { id },
        relations: {
          lessons: true,
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

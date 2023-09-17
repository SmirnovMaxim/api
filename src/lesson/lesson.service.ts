import { Lesson } from '@/lesson/entities/lesson.entity';
import { Injectable } from '@nestjs/common';
import { CreateLessonDto } from '@/lesson/dto/create-lesson.dto';
import { UpdateLessonDto } from '@/lesson/dto/update-lesson.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class LessonService {
  constructor(
    @InjectRepository(Lesson)
    private readonly lessonRepository: Repository<Lesson>,
  ) {}

  create(createLessonDto: CreateLessonDto) {
    return this.lessonRepository.save(createLessonDto);
  }

  findAll() {
    return this.lessonRepository.find({
      relations: {
        teachers: true,
      },
    });
  }

  findOne(id: number) {
    return this.lessonRepository.findOneBy({ id, teachers: true });
  }

  update(id: number, updateLessonDto: UpdateLessonDto) {
    return this.lessonRepository.update({ id }, updateLessonDto);
  }

  remove(id: number) {
    return this.lessonRepository.delete(id);
  }
}

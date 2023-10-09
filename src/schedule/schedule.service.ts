import { Schedule } from '@/schedule/entities/schedule.entity';
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateScheduleDto } from '@/schedule/dto/create-schedule.dto';
import { UpdateScheduleDto } from '@/schedule/dto/update-schedule.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ScheduleService {
  #relations: object = {
    child: {
      client: true,
    },
    teacher: {
      lessons: true,
      department: true,
    },
  };

  constructor(
    @InjectRepository(Schedule)
    private readonly scheduleRepository: Repository<Schedule>,
  ) {}
  async create(createScheduleDto: CreateScheduleDto) {
    const schedule = await this.scheduleRepository.save(createScheduleDto);
    return this.findOne(schedule.id);
  }

  findAll() {
    return this.scheduleRepository.find({
      relations: this.#relations,
    });
  }

  async findOne(id: number) {
    try {
      return await this.scheduleRepository.findOneOrFail({
        where: { id },
        relations: this.#relations,
      });
    } catch (e) {
      throw new NotFoundException();
    }
  }

  async update(id: number, updateScheduleDto: UpdateScheduleDto) {
    await this.scheduleRepository.save({
      ...updateScheduleDto,
      id,
    });
    return this.findOne(id);
  }

  remove(id: number) {
    return this.scheduleRepository.delete(id);
  }
}

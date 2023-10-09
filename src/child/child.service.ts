import { Child } from '@/child/child';
import { CreateChildDto } from '@/child/dto/createChildDto';
import { UpdateChildDto } from '@/child/dto/updateChildDto';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ChildService {
  #relations: object = {
    client: true,
    schedules: true,
  };
  constructor(
    @InjectRepository(Child)
    private readonly childRepository: Repository<Child>,
  ) {}

  async createChild(dto: CreateChildDto) {
    const child = await this.childRepository.save(dto);
    return this.getOne(child.id);
  }

  async getOne(id: number) {
    try {
      return await this.childRepository.findOneOrFail({
        where: { id },
        relations: this.#relations,
      });
    } catch (e) {
      throw new NotFoundException();
    }
  }

  async update(id: number, dto: UpdateChildDto) {
    await this.childRepository.save({
      ...dto,
      id,
    });
    return this.getOne(id);
  }

  getAllChildren() {
    return this.childRepository.find({
      relations: this.#relations,
    });
  }

  delete(id: number) {
    return this.childRepository.delete(id);
  }
}

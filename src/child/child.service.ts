import { Child } from '@/child/child';
import { CreateChildDto } from '@/child/dto/createChildDto';
import { UpdateChildDto } from '@/child/dto/updateChildDto';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ChildService {
  constructor(
    @InjectRepository(Child)
    private readonly childRepository: Repository<Child>,
  ) {}

  async createChild(dto: CreateChildDto) {
    const child = await this.childRepository.save({
      ...dto,
      client: { id: dto.clientId },
    });
    return this.getOne(child.id);
  }

  async getOne(id: number) {
    const child = await this.childRepository.findOneBy({ id });
    if (!child) {
      throw new NotFoundException();
    }
    return child;
  }

  async update(id: number, dto: UpdateChildDto) {
    const isExist = await this.childRepository.exist({ where: { id } });
    if (!isExist) {
      throw new NotFoundException();
    }
    await this.childRepository.update({ id }, dto);
    return this.getOne(id);
  }

  getAllClients() {
    return this.childRepository.find();
  }

  delete(id: number) {
    return this.childRepository.delete(id);
  }
}

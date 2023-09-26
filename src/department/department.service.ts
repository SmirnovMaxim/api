import { Department } from '@/department/entities/department.entity';
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateDepartmentDto } from '@/department//dto/create-department.dto';
import { UpdateDepartmentDto } from '@/department//dto/update-department.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class DepartmentService {
  constructor(
    @InjectRepository(Department)
    private readonly departmentRepository: Repository<Department>,
  ) {}
  create(createDepartmentDto: CreateDepartmentDto) {
    return this.departmentRepository.save(createDepartmentDto);
  }

  findAll() {
    return this.departmentRepository.find();
  }

  async findOne(id: number) {
    try {
      return await this.departmentRepository.findOneOrFail({
        where: { id },
      });
    } catch (e) {
      throw new NotFoundException();
    }
  }

  async update(id: number, updateDepartmentDto: UpdateDepartmentDto) {
    await this.departmentRepository.save({
      ...updateDepartmentDto,
      id,
    });
    return this.findOne(id);
  }

  remove(id: number) {
    return this.departmentRepository.delete(id);
  }
}

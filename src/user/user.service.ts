import { CreateUserDto } from '@/user/dto/create-user.dto';
import { User } from '@/user/entities/user.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  create(dto: CreateUserDto) {
    return this.userRepository.save(dto);
  }

  findByLogin(login: string) {
    return this.userRepository.findOneBy({ login });
  }
}

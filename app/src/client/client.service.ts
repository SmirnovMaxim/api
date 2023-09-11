import {Injectable, NotFoundException} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {Client} from './client';
import {CreateClientDto} from './dto/createClientDto';

@Injectable()
export class ClientService {
  constructor(
    @InjectRepository(Client)
    private readonly clientRepository: Repository<Client>
  ) {}

  createClient(dto: CreateClientDto) {
    return this.clientRepository.save(dto);
  }

  async getOne(id: number) {
    const client = await this.clientRepository.findOneBy({ id });
    if (!client) {
      throw new NotFoundException();
    }
    return client;
  }

  getAllClients() {
    return this.clientRepository.find();
  }

  delete(id: number) {
    return this.clientRepository.delete(id);
  }
}

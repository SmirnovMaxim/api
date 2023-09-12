import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Client } from '@/client/client';
import { CreateClientDto } from '@/client/dto/createClientDto';
import { UpdateClientDto } from '@/client/dto/updateClientDto';

@Injectable()
export class ClientService {
  constructor(
    @InjectRepository(Client)
    private readonly clientRepository: Repository<Client>,
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

  async update(id: number, dto: UpdateClientDto) {
    const isExist = await this.clientRepository.exist({ where: { id } });
    if (!isExist) {
      throw new NotFoundException();
    }
    await this.clientRepository.update({ id }, dto);
    return this.getOne(id);
  }

  getAllClients() {
    return this.clientRepository.find();
  }

  delete(id: number) {
    return this.clientRepository.delete(id);
  }
}

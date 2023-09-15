import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Client } from './client';
import { ClientController } from './client.controller';
import { ClientService } from './client.service';

@Module({
  providers: [ClientService],
  controllers: [ClientController],
  imports: [TypeOrmModule.forFeature([Client])],
})
export class ClientModule {}

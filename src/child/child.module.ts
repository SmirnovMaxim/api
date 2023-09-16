import { Child } from '@/child/child';
import { Client } from '@/client/client';
import { ClientService } from '@/client/client.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChildController } from '@/child/child.controller';
import { ChildService } from '@/child/child.service';

@Module({
  providers: [ChildService, ClientService],
  controllers: [ChildController],
  imports: [TypeOrmModule.forFeature([Child, Client])],
})
export class ChildModule {}

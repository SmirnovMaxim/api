import { AuthModule } from '@/auth/auth.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Client } from '@/client/client';
import { ClientController } from '@/client/client.controller';
import { ClientService } from '@/client/client.service';

@Module({
  providers: [ClientService],
  controllers: [ClientController],
  imports: [TypeOrmModule.forFeature([Client]), AuthModule],
})
export class ClientModule {}

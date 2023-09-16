import { CreateClientDto } from '@/client/dto/createClientDto';
import { PartialType } from '@nestjs/swagger';

export class UpdateClientDto extends PartialType(CreateClientDto) {}

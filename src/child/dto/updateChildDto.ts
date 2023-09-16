import { CreateChildDto } from '@/child/dto/createChildDto';
import { PartialType } from '@nestjs/swagger';

export class UpdateChildDto extends PartialType(CreateChildDto) {}

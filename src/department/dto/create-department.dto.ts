import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateDepartmentDto {
  @ApiProperty({ example: 'Советский пр. 99' })
  @IsNotEmpty()
  @IsString()
  address: string;
}

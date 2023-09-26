import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { IsExist } from '@/validators';

export class CreateClientDto {
  @ApiProperty({ example: 'Иван', description: 'Имя' })
  @IsString()
  @IsNotEmpty()
  readonly firstName: string;

  @ApiProperty({ example: 'Иванов', description: 'Фамилия' })
  @IsString()
  @IsNotEmpty()
  readonly lastName: string;

  @ApiProperty({ example: 'Иванов', description: 'Отчество' })
  @IsString()
  @IsNotEmpty()
  readonly surName: string;

  @ApiProperty({ example: 'ivanov@mail.ru', description: 'E-mail' })
  @IsEmail()
  @IsExist({ column: 'email', tableName: 'client', isUnique: true })
  @IsNotEmpty()
  readonly email: string;

  @ApiProperty({ example: 'id123', description: 'ID VK', required: false })
  @IsString()
  @IsOptional()
  readonly vkId?: string;
}

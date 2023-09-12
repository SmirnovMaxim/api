import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { IsUnique } from '@/validators';

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
  @IsUnique({ column: 'email', tableName: 'client' })
  @IsNotEmpty()
  readonly email: string;

  @ApiProperty({ example: 'id123', description: 'ID VK', required: false })
  @IsString()
  readonly vkId?: string;
}

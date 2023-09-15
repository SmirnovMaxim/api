import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, ValidateIf } from 'class-validator';
import { IsUnique } from '@/validators';

export class UpdateClientDto {
  @ApiProperty({ example: 'Иван', description: 'Имя', required: false })
  @IsString()
  @ValidateIf((dto) => Object.prototype.hasOwnProperty.call(dto, 'firstName'))
  readonly firstName: string;

  @ApiProperty({ example: 'Иванов', description: 'Фамилия', required: false })
  @IsString()
  @ValidateIf((dto) => Object.prototype.hasOwnProperty.call(dto, 'lastName'))
  readonly lastName: string;

  @ApiProperty({ example: 'Иванов', description: 'Отчество', required: false })
  @IsString()
  @ValidateIf((dto) => Object.prototype.hasOwnProperty.call(dto, 'surName'))
  readonly surName: string;

  @ApiProperty({
    example: 'ivanov@mail.ru',
    description: 'E-mail',
    required: false,
  })
  @IsEmail()
  @IsUnique({ column: 'email', tableName: 'client' })
  @ValidateIf((dto) => Object.prototype.hasOwnProperty.call(dto, 'email'))
  readonly email: string;

  @ApiProperty({ example: 'id123', description: 'ID VK', required: false })
  @IsString()
  @ValidateIf((dto) => Object.prototype.hasOwnProperty.call(dto, 'vkId'))
  readonly vkId?: string;
}

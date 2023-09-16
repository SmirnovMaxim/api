import { IsExist } from '@/validators';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsPhoneNumber, IsString } from 'class-validator';

export class CreateChildDto {
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

  @ApiProperty({ example: '+79008007060', description: 'Телефон' })
  @IsPhoneNumber('RU')
  readonly phone: string;

  @ApiProperty({ example: 1, description: 'ID клиента' })
  @IsNumber()
  @IsNotEmpty()
  @IsExist({ column: 'id', tableName: 'client', isUnique: false })
  readonly clientId: number;
}

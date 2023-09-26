import { IsExist } from '@/validators';
import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNotEmpty, IsString } from 'class-validator';

export class CreateTeacherDto {
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

  @ApiProperty({ example: [1, 2, 5], required: false })
  @IsArray()
  @IsExist({ column: 'id', tableName: 'lesson', isUnique: false })
  readonly lessonIds: number[];
}

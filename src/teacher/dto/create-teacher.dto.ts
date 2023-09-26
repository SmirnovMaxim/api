import { IsExist } from '@/validators';
import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

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

  @ApiProperty({ example: 1 })
  @IsExist({ column: 'id', tableName: 'department', isUnique: false })
  @IsNotEmpty()
  @IsNumber()
  readonly departmentId: number;

  @ApiProperty({ example: [1, 2, 5], type: [Number], required: false })
  @IsArray()
  @IsOptional()
  @IsExist({ column: 'id', tableName: 'lesson', isUnique: false })
  readonly lessonIds: number[];
}

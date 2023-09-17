import { IsExist } from '@/validators';
import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateLessonDto {
  @ApiProperty({ example: 'Математика' })
  @IsString()
  @IsExist({ column: 'name', tableName: 'lesson', isUnique: true })
  name: string;
}

import { Days } from '@/enums/days';
import { IsExist } from '@/validators';
import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsNumber, Max, Min } from 'class-validator';

export class CreateScheduleDto {
  @ApiProperty({ type: Number, example: 1 })
  @IsNumber()
  @IsNotEmpty()
  @IsExist({ tableName: 'child', column: 'id', isUnique: false })
  childId: number;

  @ApiProperty({ type: Number, example: 1 })
  @IsNumber()
  @IsNotEmpty()
  @IsExist({ tableName: 'teacher', column: 'id', isUnique: false })
  teacherId: number;

  @ApiProperty({ type: String, enum: Days })
  @IsEnum(Days)
  @IsNotEmpty()
  day: Days;

  @ApiProperty({ type: Number, example: 8 })
  @IsNumber()
  @Max(23)
  @Min(0)
  fromHour: number;

  @ApiProperty({ type: Number, example: 30 })
  @IsNumber()
  @Max(59)
  @Min(0)
  fromMinute: number;

  @ApiProperty({ type: Number, example: 10 })
  @IsNumber()
  @Max(23)
  @Min(0)
  toHour: number;

  @ApiProperty({ type: Number, example: 0 })
  @IsNumber()
  @Max(59)
  @Min(0)
  toMinute: number;
}

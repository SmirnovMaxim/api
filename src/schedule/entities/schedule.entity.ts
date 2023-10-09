import { Child } from '@/child/child';
import { Days } from '@/enums';
import { Teacher } from '@/teacher/entities/teacher.entity';
import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Schedule {
  @ApiProperty({ example: 1, required: false })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ type: Number, example: 1 })
  @Column()
  childId: number;

  @ApiProperty({ type: Number, example: 1 })
  @Column()
  teacherId: number;

  @ApiProperty({ enum: Days, example: Days.MONDAY })
  @Column({ type: 'enum', enum: Days })
  day: string;

  @ApiProperty({ type: Number, example: 8 })
  @Column({ type: 'tinyint' })
  fromHour: number;

  @ApiProperty({ type: Number, example: 30 })
  @Column({ type: 'tinyint' })
  fromMinute: number;

  @ApiProperty({ type: Number, example: 10 })
  @Column({ type: 'tinyint' })
  toHour: number;

  @ApiProperty({ type: Number, example: 0 })
  @Column({ type: 'tinyint' })
  toMinute: number;

  @ApiProperty({ type: () => Child })
  @ManyToOne(() => Child, (child) => child.schedules, {
    nullable: false,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  child: Child;

  @ApiProperty({ type: () => Teacher })
  @ManyToOne(() => Teacher, (teacher) => teacher.schedules, {
    nullable: false,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  teacher: Teacher;
}

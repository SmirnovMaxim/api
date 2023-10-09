import { Department } from '@/department/entities/department.entity';
import { Lesson } from '@/lesson/entities/lesson.entity';
import { Schedule } from '@/schedule/entities/schedule.entity';
import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Teacher {
  @ApiProperty({ example: 1, required: false })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 'Иван', required: false })
  @Column()
  firstName: string;

  @ApiProperty({ example: 'Иванов', required: false })
  @Column()
  lastName: string;

  @ApiProperty({ example: 'Иванович', required: false })
  @Column()
  surName: string;

  @ApiProperty({ example: 1 })
  @Column()
  departmentId: number;

  @ApiProperty({ type: () => Department })
  @ManyToOne(() => Department, (department) => department.teachers, {
    nullable: false,
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
  })
  department: Department;

  @ApiProperty({ type: () => [Lesson], required: false })
  @ManyToMany(() => Lesson, (lesson) => lesson.teachers, {
    nullable: true,
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
  })
  lessons?: Lesson[];

  @ApiProperty({ type: () => [Schedule] })
  @OneToMany(() => Schedule, (schedule) => schedule.teacher)
  schedules: Schedule[];
}

import { Teacher } from '@/teacher/entities/teacher.entity';
import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Lesson {
  @ApiProperty({ example: 1 })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 'Математика' })
  @Column({ nullable: false, unique: true })
  name: string;

  @ApiProperty({ type: [Teacher] })
  @ManyToMany(() => Teacher, {
    nullable: false,
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
    eager: true,
  })
  @JoinTable()
  teachers: Teacher[];
}

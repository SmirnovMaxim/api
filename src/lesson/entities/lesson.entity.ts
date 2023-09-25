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
  @ApiProperty({ example: 1, required: false })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 'Математика', required: false })
  @Column({ unique: true })
  name: string;

  @ApiProperty({ type: () => [Teacher], required: false })
  @ManyToMany(() => Teacher, (teacher) => teacher.lessons, {
    nullable: true,
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
  })
  @JoinTable({
    name: 'teachers_lessons',
    joinColumn: {
      name: 'lessonId',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'teacherId',
      referencedColumnName: 'id',
    },
  })
  teachers?: Teacher[];
}

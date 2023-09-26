import { Teacher } from '@/teacher/entities/teacher.entity';
import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Department {
  @ApiProperty({ example: 1 })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 'Советский пр. 99' })
  @Column()
  address: string;

  @OneToMany(() => Teacher, (teacher) => teacher.department)
  teachers: Teacher[];
}

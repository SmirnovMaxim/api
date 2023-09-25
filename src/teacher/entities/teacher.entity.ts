import { Lesson } from '@/lesson/entities/lesson.entity';
import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

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

  @ApiProperty({ type: () => [Lesson], required: false })
  @ManyToMany(() => Lesson, (lesson) => lesson.teachers, {
    nullable: true,
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
  })
  lessons?: Lesson[];
}

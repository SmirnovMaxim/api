import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Teacher {
  @ApiProperty({ example: 1 })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 'Иван' })
  @Column({ nullable: false })
  firstName: string;

  @ApiProperty({ example: 'Иванов' })
  @Column({ nullable: false })
  lastName: string;

  @ApiProperty({ example: 'Иванович' })
  @Column({ nullable: false })
  surName: string;
}

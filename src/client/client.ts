import { Child } from '@/child/child';
import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ClientStatus } from '@/enums';

@Entity()
export class Client {
  @ApiProperty({ example: 1 })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 'Иван' })
  @Column()
  firstName: string;

  @ApiProperty({ example: 'Иванов' })
  @Column()
  lastName: string;

  @ApiProperty({ example: 'Иванович' })
  @Column()
  surName: string;

  @ApiProperty({ example: 'ivanov@mail.ru' })
  @Column({ unique: true })
  email: string;

  @ApiProperty({ example: 'id123', required: false })
  @Column({ unique: true, nullable: true })
  vkId: string;

  @ApiProperty({
    example: 'new',
    required: false,
    default: ClientStatus.NEW,
    enum: ClientStatus,
  })
  @Column({ type: 'enum', enum: ClientStatus, default: ClientStatus.NEW })
  status: string;

  @OneToMany(() => Child, (child) => child.client)
  children: Child[];
}

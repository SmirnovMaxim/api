import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ClientStatus } from '../enums';

@Entity()
export class Client {
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

  @ApiProperty({ example: 'ivanov@mail.ru' })
  @Column({ nullable: false, unique: true })
  email: string;

  @ApiProperty({ example: 'id123', required: false })
  @Column({ unique: true })
  vkId: string;

  @ApiProperty({
    example: 'new',
    required: false,
    default: ClientStatus.NEW,
    enum: ClientStatus,
  })
  @Column({ type: 'enum', enum: ClientStatus, default: ClientStatus.NEW })
  status: string;
}

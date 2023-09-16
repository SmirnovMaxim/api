import { Client } from '@/client/client';
import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Child {
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

  @ApiProperty({ example: '89008007060' })
  @Column({ nullable: true })
  phone: string;

  @ApiProperty({ type: () => Client })
  @ManyToOne(() => Client, (client) => client.children, {
    nullable: false,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
    eager: true,
  })
  client: Client;
}

import { IsExist } from '@/validators';
import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @ApiProperty({ example: 1 })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 'login' })
  @Column({ nullable: false })
  @IsExist({ column: 'login', tableName: 'user', isUnique: true })
  login: string;

  @ApiProperty({ example: 'ZSYW6@e*Q' })
  @Column({ nullable: false })
  password: string;
}

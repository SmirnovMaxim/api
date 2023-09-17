import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class SignupDto {
  constructor(id: number, login: string) {
    this.id = id;
    this.login = login;
  }

  @ApiProperty({ example: 1 })
  @IsNumber()
  id: number;

  @ApiProperty({ example: 'login' })
  @IsString()
  login: string;
}

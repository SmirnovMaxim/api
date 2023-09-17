import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class LoginDto {
  constructor(accessToken: string, expires: number) {
    this.accessToken = accessToken;
    this.expires = expires;
  }

  @ApiProperty({ example: 'eyJhbGciOiJIUzUxMiIsI...' })
  @IsString()
  accessToken: string;

  @ApiProperty({ example: Math.round(Date.now() / 1000) })
  @IsNumber()
  expires: number;
}

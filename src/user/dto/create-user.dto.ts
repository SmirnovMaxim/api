import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsStrongPassword } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'login' })
  @IsNotEmpty()
  @IsString()
  login: string;

  @ApiProperty({ example: 'password' })
  @IsNotEmpty()
  @IsStrongPassword({ minLength: 6 })
  password: string;
}

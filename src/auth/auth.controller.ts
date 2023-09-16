import { AuthService } from '@/auth/auth.service';
import { CreateUserDto } from '@/user/dto/create-user.dto';
import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation({ summary: 'Login user' })
  @ApiBody({ type: CreateUserDto })
  @HttpCode(201)
  @Post('login')
  login(@Body() dto: CreateUserDto) {
    return this.authService.login(dto);
  }

  @ApiOperation({ summary: 'Signup user' })
  @ApiBody({ type: CreateUserDto })
  @HttpCode(201)
  @Post('signup')
  signup(@Body() dto: CreateUserDto) {
    return this.authService.signup(dto);
  }
}

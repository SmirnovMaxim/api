import { AuthService } from '@/auth/auth.service';
import { LoginDto } from '@/auth/dto/login.dto';
import { CreateUserDto } from '@/user/dto/create-user.dto';
import {
  Body,
  Controller,
  HttpCode,
  NotFoundException,
  Post,
  UnauthorizedException,
} from '@nestjs/common';
import {
  ApiBody,
  ApiNotFoundResponse,
  ApiOperation,
  ApiResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation({ summary: 'Login user' })
  @ApiBody({ type: CreateUserDto })
  @ApiResponse({ type: LoginDto, status: 200 })
  @ApiNotFoundResponse({ type: NotFoundException })
  @ApiUnauthorizedResponse({ type: UnauthorizedException })
  @HttpCode(200)
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

import { AuthService } from '@/auth/auth.service';
import { LoginDto } from '@/auth/dto/login.dto';
import { SignupDto } from '@/auth/dto/signup.dto';
import { Public } from '@/decorators/public.decorator';
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
@Public()
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
  @ApiResponse({ type: SignupDto, status: 201 })
  @HttpCode(201)
  @Post('signup')
  signup(@Body() dto: CreateUserDto) {
    return this.authService.signup(dto);
  }
}

import { LoginDto } from '@/auth/dto/login.dto';
import { CreateUserDto } from '@/user/dto/create-user.dto';
import { User } from '@/user/entities/user.entity';
import { UserService } from '@/user/user.service';
import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private jwtService: JwtService,
  ) {}

  async login(dto: CreateUserDto) {
    const user = await this.validateUser(dto);
    return this.generateToken(user);
  }

  async signup(dto: CreateUserDto) {
    const password = await bcrypt.hash(dto.password, 5);
    return this.userService.create({
      ...dto,
      password,
    });
  }

  private async validateUser(dto: CreateUserDto) {
    const user = await this.userService.findByLogin(dto.login);
    if (!user) {
      throw new NotFoundException();
    }
    const isEquals = await bcrypt.compare(dto.password, user.password);
    if (isEquals) {
      return user;
    }
    throw new UnauthorizedException();
  }

  private generateToken(user: User) {
    const payload = {
      id: user.id,
      login: user.login,
    };
    const accessToken = this.jwtService.sign(payload);
    const verify = this.jwtService.verify(accessToken);

    return new LoginDto(accessToken, verify.exp);
  }
}

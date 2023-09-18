// import { AuthGuard } from '@/auth/auth.guard';
import { UserModule } from '@/user/user.module';
import { forwardRef, Module } from '@nestjs/common';
// import { APP_GUARD } from '@nestjs/core';
import { JwtModule } from '@nestjs/jwt';
import * as process from 'process';
import { AuthController } from '@/auth/auth.controller';
import { AuthService } from '@/auth/auth.service';

@Module({
  controllers: [AuthController],
  providers: [
    AuthService,
    // {
    //   provide: APP_GUARD,
    //   useClass: AuthGuard,
    // },
  ],
  imports: [
    forwardRef(() => UserModule),
    JwtModule.register({
      secret: process.env.PRIVATE_KEY,
      signOptions: {
        expiresIn: '24h',
      },
    }),
  ],
  exports: [AuthService, JwtModule],
})
export class AuthModule {}

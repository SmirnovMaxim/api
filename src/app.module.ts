import { Module } from '@nestjs/common';
import * as process from 'process';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { ClientModule } from '@/client/client.module';
import { ChildModule } from '@/child/child.module';
import { IsExistConstraint } from '@/validators/isExist/isExistConstraint';
import { TeacherModule } from '@/teacher/teacher.module';
import { AuthModule } from '@/auth/auth.module';
import { UserModule } from '@/user/user.module';
import { LessonModule } from '@/lesson/lesson.module';
import { DepartmentModule } from '@/department/department.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.MYSQL_HOST,
      port: 3306,
      username: process.env.DB_USER,
      password: process.env.MYSQL_ROOT_PASSWORD,
      database: process.env.DB_NAME,
      synchronize: true,
      logging: true,
      autoLoadEntities: true,
    }),
    ClientModule,
    ChildModule,
    TeacherModule,
    AuthModule,
    UserModule,
    LessonModule,
    DepartmentModule,
  ],
  providers: [IsExistConstraint],
})
export class AppModule {}

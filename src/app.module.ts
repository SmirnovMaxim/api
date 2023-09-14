import { Module } from '@nestjs/common';
import * as process from 'process';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { ClientModule } from './client/client.module';
import { IsUniqueConstraint } from './validators/isUnique/isUniqueConstraint';

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
      autoLoadEntities: true,
    }),
    ClientModule,
  ],
  controllers: [],
  providers: [IsUniqueConstraint],
})
export class AppModule {}

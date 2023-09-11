import {ValidationPipe} from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import {useContainer} from 'class-validator';
import { AppModule } from './app.module';

// @ts-ignore
async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder().build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('/api/docs', app, document)
  app.useGlobalPipes(new ValidationPipe());

  useContainer(app.select(AppModule), {fallbackOnErrors: true});

  await app.listen(8080);
}
bootstrap();

import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { useContainer } from 'class-validator';
import { AppModule } from '@/app.module';
import * as process from 'process';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder().build();

  console.log(process.env.PMA_HOST);

  const document = SwaggerModule.createDocument(app, config, {
    operationIdFactory: (controllerKey: string, methodKey: string) => methodKey,
  });

  SwaggerModule.setup('/api/docs', app, document);
  app.useGlobalPipes(new ValidationPipe());

  useContainer(app.select(AppModule), { fallbackOnErrors: true });

  await app.listen(8080);
}
bootstrap();

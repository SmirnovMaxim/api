import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { useContainer } from 'class-validator';
import { AppModule } from '@/app.module';
import * as fs from 'fs';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule, {
    cors: false,
  });
  const config = new DocumentBuilder().addBearerAuth().build();
  const document = SwaggerModule.createDocument(app, config, {
    operationIdFactory: (controllerKey: string, methodKey: string) => methodKey,
  });
  fs.writeFileSync('./swagger-spec.json', JSON.stringify(document));
  SwaggerModule.setup('/api/docs', app, document);
  app.useGlobalPipes(new ValidationPipe());

  useContainer(app.select(AppModule), { fallbackOnErrors: true });

  await app.listen(8080);
}
bootstrap();

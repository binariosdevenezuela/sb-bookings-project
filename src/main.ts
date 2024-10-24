import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { TypeormStore } from 'connect-typeorm/out';
import * as session from 'express-session';
import { AppModule } from './app.module';
import { getDataSourceToken } from '@nestjs/typeorm';
import { SessionEntity } from './auth/entities/session.entity'; // Importa la entidad de sesión

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const dataSource = app.get<DataSource>(getDataSourceToken());
  const sessionRepository = dataSource.getRepository(SessionEntity);

  app.use(
    session({
      secret: '948u89sj9j',
      resave: false,
      saveUninitialized: false,
      store: new TypeormStore().connect(sessionRepository),
      cookie: {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 3600000,
        sameSite: 'strict',
      },
    })
  );

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      forbidUnknownValues: true,
      transform: true
    })
  );

  await app.listen(3000);
}
bootstrap();

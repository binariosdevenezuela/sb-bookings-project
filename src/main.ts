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
      secret: '948u89sj9j', // Llave secreta para la cookie de sesión
      resave: false,
      saveUninitialized: false,
      store: new TypeormStore().connect(sessionRepository), // Conecta el repositorio de sesiones
      cookie: {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production', // Solo HTTPS en producción
        maxAge: 3600000, // Expira en 1 hora
        sameSite: 'strict', // Protección CSRF
      },
    })
  );

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Solo permite campos definidos en el DTO
      forbidNonWhitelisted: true, // Rechaza campos que no estén en el DTO
      forbidUnknownValues: true, // Asegura que los valores desconocidos generen error
      transform: true,
    })
  );

  await app.listen(3000);
}
bootstrap();

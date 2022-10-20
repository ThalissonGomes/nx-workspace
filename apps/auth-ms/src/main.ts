import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';

import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'auth';
  const port = process.env.PORT || 4444;

  app.connectMicroservice(
    {
      transport: Transport.NATS,
      options: {
        servers: ['nats://localhost:4222'],
      },
    },
    { inheritAppConfig: true }
  );

  app.setGlobalPrefix(globalPrefix);

  await app.startAllMicroservices();
  await app.listen(port);

  Logger.log(
    `🚀 Aplicação "auth-ms" rodando em: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();

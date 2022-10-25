import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';

import { AuthAppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AuthAppModule);
  const port = process.env.PORT || 4444;

  app.connectMicroservice(
    {
      transport: Transport.NATS,
      options: {
        servers: ['nats://localhost:4222'],
      },
    }
    // { inheritAppConfig: true }
  );

  //Enable Cors
  app.enableCors();

  await app.startAllMicroservices();
  await app.listen(port);

  Logger.log(`🚀 Aplicação "auth-ms" rodando em: http://localhost:${port}`);
}

bootstrap();

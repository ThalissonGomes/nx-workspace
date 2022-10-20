import { JwtModule } from '@nestjs/jwt';
import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy } from '../outros/jwt.strategy';
import { LocalStrategy } from '../outros/local.strategy';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'USUARIO_MS',
        transport: Transport.NATS,
        options: {
          servers: ['nats://localhost:4222'],
        },
      },
    ]),
    JwtModule.register({
      secret: 'segredoTesteMedClub',
      signOptions: { expiresIn: '60s' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, JwtStrategy],
})
export class AuthModule {}

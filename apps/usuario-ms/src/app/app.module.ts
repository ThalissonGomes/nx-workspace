import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { UsuariosModule } from './../usuarios/usuarios.module';
import { Usuario } from '../usuarios/usuarios.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'teste2-ms-user',
      synchronize: true,
      entities: [Usuario],
    }),
    UsuariosModule,
  ],
})
export class AppModule {}

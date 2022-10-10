import { TypeOrmModule } from '@nestjs/typeorm';
import { PessoasModule } from './../pessoas/pessoas.module';
import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Pessoa } from '../pessoas/entities/pessoa.entity';

@Module({
  imports: [
    PessoasModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'testemcdb',
      synchronize: true,
      entities: [Pessoa],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

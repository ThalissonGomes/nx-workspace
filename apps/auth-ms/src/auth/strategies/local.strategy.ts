import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AppService } from '../../app/app.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly appService: AppService) {
    super();
  }

  async validate(username: string, password: string) {
    const user = await this.appService.validateUser(username, password);

    if (!user) {
      throw new UnauthorizedException('Usuário e/ou senha inválidos.');
    }

    return user;
  }
}

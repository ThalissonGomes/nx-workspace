import { firstValueFrom } from 'rxjs';
import { Injectable, Logger } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compareSync } from 'bcrypt';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class AppService {
  constructor(
    private readonly as: AuthService,
    private readonly jwtService: JwtService
  ) {}

  async login(user) {
    const payload = { sub: user.id, username: user.username };
    return {
      token: this.jwtService.sign(payload),
    };
  }

  async validateUser(username: string, password: string) {
    let user;
    try {
      user = await firstValueFrom(this.as.findOneByUsername(username));
    } catch (error) {
      return null;
    }

    const isPassValid = compareSync(password, user.password);
    if (!isPassValid) return null;

    return user;
  }
}

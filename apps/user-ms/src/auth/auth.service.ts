import { JwtService } from '@nestjs/jwt';
import { UsersEntity } from './../app/users/entities/user.entity';
import { UsersService } from './../app/users/users.service';
import { Injectable, Logger } from '@nestjs/common';
import { compareSync } from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService
  ) {}

  async login(user) {
    const payload = { sub: user.id, username: user.username };

    return {
      token: this.jwtService.sign(payload),
    };
  }

  async validateUser(username: string, password: string) {
    let user: UsersEntity;
    try {
      user = await this.userService.findOneByOrFail({ username });
    } catch (error) {
      return null;
    }

    const isPassValid = compareSync(password, user.password);
    if (!isPassValid) return null;

    return user;
  }
}

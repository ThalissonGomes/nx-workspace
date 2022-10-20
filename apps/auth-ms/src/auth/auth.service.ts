import { JwtService } from '@nestjs/jwt';
import { compareSync } from 'bcrypt';
import {
  catchError,
  throwError,
  timeout,
  TimeoutError,
  firstValueFrom,
} from 'rxjs';
import {
  Inject,
  Injectable,
  RequestTimeoutException,
  Logger,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import CreateUserDto from '../outros/create-usuario.dto';

@Injectable()
export class AuthService {
  constructor(
    @Inject('USUARIO_MS')
    private readonly cp: ClientProxy,
    private readonly jwtService: JwtService
  ) {}

  create(p: CreateUserDto) {
    return this.cp.send({ role: 'user', cmd: 'add-one' }, p);
  }

  getAll() {
    return this.cp.send({ role: 'user', cmd: 'get-all' }, '');
  }

  async validateUser(username: string, password: string) {
    try {
      const u = await firstValueFrom(
        this.cp.send({ role: 'user', cmd: 'get-one' }, { username }).pipe(
          timeout(5000),
          catchError((err) => {
            if (err instanceof TimeoutError) {
              return throwError(() => new RequestTimeoutException());
            }
            return throwError(() => err);
          })
        )
      );

      if (compareSync(password, u?.password)) {
        return u;
      }
      return null;
    } catch (e) {
      Logger.log(e);
      throw e;
    }
  }

  async login(user) {
    const payload = { user, sub: user.id };

    return {
      userId: user.id,
      accessToken: this.jwtService.sign(payload),
    };
  }

  async delete(id: number) {
    this.cp.send({ role: 'user', cmd: 'delete-one' }, id);
  }
}

import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import CreateUserDto from './dto/create-usuario.dto';
import UpdateUserDto from './dto/update-usuario.dto';

@Injectable()
export class AuthService {
  constructor(
    @Inject('USUARIO_MS')
    private readonly cp: ClientProxy
  ) {}

  create(u: CreateUserDto) {
    return this.cp.send({ role: 'user', cmd: 'create' }, u);
  }

  findAll() {
    return this.cp.send({ role: 'user', cmd: 'find-all' }, '');
  }

  findOneById(id: string) {
    return this.cp.send({ role: 'user', cmd: 'find-by-id' }, id);
  }

  findOneByUsername(username: string) {
    return this.cp.send({ role: 'user', cmd: 'find-by-username' }, username);
  }

  update(id: string, u: UpdateUserDto) {
    return this.cp.send({ role: 'user', cmd: 'update' }, [id, u]);
  }

  delete(id: string) {
    this.cp.emit({ role: 'user', cmd: 'delete-one' }, id);
  }

  // async validateUser(username: string, password: string) {
  //   let user;
  //   try {
  //     user = await this.findOneByUsername(username);
  //   } catch (error) {
  //     return null;
  //   }

  //   const isPassValid = compareSync(password, user.password);
  //   if (!isPassValid) return null;

  //   return user;

  // try {
  //   const u = await firstValueFrom(
  //     this.cp.send({ role: 'user', cmd: 'get-one' }, { username }).pipe(
  //       timeout(5000),
  //       catchError((err) => {
  //         if (err instanceof TimeoutError) {
  //           return throwError(() => new RequestTimeoutException());
  //         }
  //         return throwError(() => err);
  //       })
  //     )
  //   );

  //   if (compareSync(password, u?.password)) {
  //     return u;
  //   }
  //   return null;
  // } catch (e) {
  //   Logger.log(e);
  //   throw e;
  // }
  //   }

  //   async login(user) {
  //     const payload = { sub: user.id, username: user.username };

  //     return {
  //       token: this.jwtService.sign(payload),
  //     };
  //   }
  // }
}

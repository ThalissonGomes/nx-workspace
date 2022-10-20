// import { ClientProxy } from '@nestjs/microservices';
// import { Logger, ExecutionContext, CanActivate, Inject } from '@nestjs/common';
// import { timeout, firstValueFrom } from 'rxjs';

// export class AuthGuard implements CanActivate {
//   constructor(
//     @Inject('GUARD')
//     private readonly client: ClientProxy
//   ) {}

//   async canActivate(context: ExecutionContext): Promise<boolean> {
//     const req = context.switchToHttp().getRequest();

//     try {
//       const res = await firstValueFrom<boolean>(
//         this.client
//           .send(
//             { role: 'auth', cmd: 'check' },
//             { jwt: req.headers['authorization']?.split(' ')[1] }
//           )
//           .pipe(timeout(5000))
//       );

//       return res;
//     } catch (err) {
//       Logger.error(err);
//       return false;
//     }
//   }
// }

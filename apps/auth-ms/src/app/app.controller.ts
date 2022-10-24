import { Controller, Post, Req, UseGuards, Logger } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly aS: AppService) {}

  // @UseGuards(AuthGuard('local'))
  // @Post('login')
  // async login(@Req() req) {
  //   return await this.aS.login(req.user);
  // }

  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Req() req) {
    return await this.aS.login(req.user);
  }
}

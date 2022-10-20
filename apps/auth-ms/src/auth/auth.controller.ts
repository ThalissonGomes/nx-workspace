import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';

import CreateUserDto from '../outros/create-usuario.dto';
import { LocalAuthGuard } from '../outros/local-auth.guard';
import { AuthService } from './auth.service';

@Controller()
export class AuthController {
  constructor(private readonly aS: AuthService) {}

  @Post('create')
  create(@Body() p: CreateUserDto) {
    return this.aS.create(p);
  }

  @Get('listAll')
  getAll() {
    return this.aS.getAll();
  }

  @UseGuards(LocalAuthGuard)
  @Post('auth')
  async login(@Request() req) {
    return this.aS.login(req.user);
  }

  @Post('delete/' + 'id')
  async delete(id: number) {
    this.aS.delete(id);
  }
}

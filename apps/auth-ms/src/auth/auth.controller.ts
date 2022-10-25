import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import CreateUserDto from './dto/create-usuario.dto';
import { AuthService } from './auth.service';

@Controller('auth')
// @UseGuards(AuthGuard('jwt'))
export class AuthController {
  constructor(private readonly aS: AuthService) {}

  // CREATE
  @Post()
  async create(@Body() u: CreateUserDto) {
    return this.aS.create(u);
  }
  // FIND ALL
  @Get()
  async findAll() {
    return this.aS.findAll();
  }
  //FIND BY ID
  @Get(':id')
  async findById(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.aS.findOneById(id);
  }
  //FIND BY USERNAME
  @Get('findByUsername/:username')
  async findByUsername(@Param('username') username: string) {
    return this.aS.findOneByUsername(username);
  }

  @Patch(':id')
  async update(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() u: CreateUserDto
  ) {
    return this.aS.update(id, u);
  }

  //DELETE
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@Param('id', new ParseUUIDPipe()) id: string) {
    this.aS.delete(id);
  }
  //editPage
  @Get('edit/:id')
  async editPage(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.aS.findOneById(id);
  }
}

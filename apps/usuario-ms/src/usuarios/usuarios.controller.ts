import { Body, Controller, Param, ParseUUIDPipe } from '@nestjs/common';
import { EventPattern, MessagePattern } from '@nestjs/microservices';
import { CreateUserDto } from './dto/create-usuario.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsuariosService } from './usuarios.service';

@Controller()
export class UsuariosController {
  constructor(private readonly uServ: UsuariosService) {}

  // CREATE
  @MessagePattern({ role: 'user', cmd: 'create' })
  async create(user: CreateUserDto) {
    return await this.uServ.create(user);
  }

  // FIND ALL
  @MessagePattern({ role: 'user', cmd: 'find-all' })
  async findAll() {
    return await this.uServ.findAll();
  }

  // FIND ONE BY ID
  @MessagePattern({ role: 'user', cmd: 'find-by-id' })
  async findOneById(id: string) {
    return await this.uServ.findOneByOrFail({ id });
  }

  // FIND ONE BY USERNAME
  @MessagePattern({ role: 'user', cmd: 'find-by-username' })
  async findOneByUsername(username: string) {
    return await this.uServ.findOneByOrFail({ username });
  }

  // UPDATE_USER
  @MessagePattern({ role: 'user', cmd: 'update' })
  async update([id, updateUserDto]) {
    return await this.uServ.update(id, updateUserDto);
  }

  // DELETE_USER
  @EventPattern({ role: 'user', cmd: 'delete-one' })
  async delete(id: string) {
    await this.uServ.delete(id);
  }
}

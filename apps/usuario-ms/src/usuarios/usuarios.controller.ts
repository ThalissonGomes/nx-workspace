import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { CreateUserDto } from './create-usuario.dto';
import { UsuariosService } from './usuarios.service';

@Controller()
export class UsuariosController {
  constructor(private readonly uServ: UsuariosService) {}

  @MessagePattern({ role: 'user', cmd: 'add-one' })
  addUser(user: CreateUserDto) {
    return this.uServ.createUser(user);
  }

  @MessagePattern({ role: 'user', cmd: 'get-all' })
  findAllUsers() {
    return this.uServ.getAll();
  }

  @MessagePattern({ role: 'user', cmd: 'get-one' })
  getUser(data) {
    return this.uServ.getByUsername(data.username);
  }

  @MessagePattern({ role: 'user', cmd: 'delete-one' })
  deleteUser(id: number) {
    this.uServ.delete(id);
  }
}

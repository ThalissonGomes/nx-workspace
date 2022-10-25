import {
  Injectable,
  NotFoundException,
  Logger,
  HttpException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { error } from 'console';
import { throwError } from 'rxjs';
import { FindOptionsWhere, Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-usuario.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Usuario } from './entities/usuarios.entity';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(Usuario)
    private userRepo: Repository<Usuario>
  ) {}

  // CREATE
  async create(usuarioDto: CreateUserDto) {
    const newUser = this.userRepo.create(usuarioDto);
    return await this.userRepo.save(newUser);
  }
  // FIND ALL
  async findAll() {
    return this.userRepo.find({
      select: ['id', 'name', 'username', 'email'],
    });
  }

  // FIND ONE BY OR FAIL
  async findOneByOrFail(where: FindOptionsWhere<Usuario>) {
    try {
      return await this.userRepo.findOneByOrFail(where);
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  //UPDATE User
  async update(id: string, data: UpdateUserDto) {
    const u = await this.findOneByOrFail({ id });
    this.userRepo.merge(u, data);
    return await this.userRepo.save(u);
  }

  // DELETE User
  async delete(id: string) {
    await this.findOneByOrFail({ id });
    this.userRepo.softDelete({ id });
  }
}

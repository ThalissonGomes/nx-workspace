import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import CreateUsuarioDto from './create-usuario.dto';
import { Usuario } from './usuarios.entity';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(Usuario)
    private userRepo: Repository<Usuario>
  ) {}

  // CREATE
  async createUser(usuarioDto: CreateUsuarioDto) {
    try {
      const newUser = this.userRepo.create(usuarioDto);
      const res = await this.userRepo.save(newUser);
      return res;
    } catch (e) {
      Logger.log(e);
      throw e;
    }
  }
  // GET ONE
  async getAll() {
    return this.userRepo.find();
  }
  // GET BY USERNAME
  async getByUsername(username: string) {
    const user = await this.userRepo.findOneBy({ username });
    if (user) {
      return user;
    }
    throw new HttpException(
      `Usuário com Username: ${username} não encontrado.`,
      HttpStatus.NOT_FOUND
    );
  }
  //GET BY EMAIL
  async getByEmail(email: string) {
    const user = await this.userRepo.findOneBy({ email });
    if (user) {
      return user;
    }
    throw new HttpException(
      `Usuário com Email: ${email} não encontrado.`,
      HttpStatus.NOT_FOUND
    );
  }

  async delete(id: number) {
    const u = await this.userRepo.findOneBy({ id });
    this.userRepo.remove(u);
  }
}

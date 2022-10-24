import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOptionsWhere, Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersEntity } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UsersEntity) private uRepo: Repository<UsersEntity>
  ) {}
  // CREATE User
  async create(createU: CreateUserDto) {
    const u = this.uRepo.create(createU);
    return await this.uRepo.save(u);
  }
  // FIND ALL Users
  async findAll() {
    return await this.uRepo.find({
      select: ['id', 'name', 'username', 'email'],
    });
  }
  // FIND User BY
  async findOneByOrFail(where: FindOptionsWhere<UsersEntity>) {
    try {
      return await this.uRepo.findOneByOrFail(where);
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }
  //UDPATE User
  async update(id: string, data: UpdateUserDto) {
    const u = await this.findOneByOrFail({ id });
    this.uRepo.merge(u, data);
    return await this.uRepo.save(u);
  }
  // DELETE User
  async delete(id: string) {
    await this.findOneByOrFail({ id });
    this.uRepo.softDelete({ id });
  }
}

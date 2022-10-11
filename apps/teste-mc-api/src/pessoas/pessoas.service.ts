import { Pessoa } from './entities/pessoa.entity';
import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePessoaDto } from './dto/create-pessoa.dto';
import { UpdatePessoaDto } from './dto/update-pessoa.dto';

@Injectable()
export class PessoasService {
  constructor(
    @InjectRepository(Pessoa)
    private pessoaRepository: Repository<Pessoa>
  ) {}

  async findAll() {
    try {
      return await this.pessoaRepository.find();
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  async findOne(id: number) {
    try {
      const pessoas = await this.pessoaRepository.findOneBy({ id });
      if (!pessoas) {
        throw new BadRequestException('Pessoa não encontrada');
      }
      return pessoas;
    } catch (error) {
      return new InternalServerErrorException(error.message);
    }
  }

  async findOneByEmail(email: string) {
    try {
      const pessoas = await this.pessoaRepository.findOneBy({ email });
      if (!pessoas) {
        throw new BadRequestException('Pessoa não encontrada');
      }
      return pessoas;
    } catch (error) {
      return new InternalServerErrorException(error.message);
    }
  }

  async create(createPessoaDto: CreatePessoaDto) {
    try {
      await this.pessoaRepository.save(createPessoaDto);
      return createPessoaDto;
    } catch (error) {
      return new InternalServerErrorException(error.message);
    }
  }

  async update(updatePessoaDto: UpdatePessoaDto, id: number) {
    try {
      await this.pessoaRepository.update({ id }, updatePessoaDto);
      return await this.findOne(id);
    } catch (error) {
      return new InternalServerErrorException(error.message);
    }
  }

  async delete(id: number) {
    try {
      return await this.pessoaRepository.delete(id);
    } catch (error) {
      return new InternalServerErrorException(error.message);
    }
  }
}

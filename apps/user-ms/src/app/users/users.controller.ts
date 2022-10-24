import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('users')
@UseGuards(AuthGuard('jwt'))
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // CREATE_USER
  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    return await this.usersService.create(createUserDto);
  }

  // FIND_ALL_USER
  @Get()
  async findAll() {
    return await this.usersService.findAll();
  }
  FIND_ONE_USER;
  @Get('id/:id')
  async findOne(@Param('id', new ParseUUIDPipe()) id: string) {
    return await this.usersService.findOneByOrFail({ id });
  }
  // FIND BY USERNAME
  @Get('un/:username')
  async findByUsername(@Param('username') username: string) {
    return await this.usersService.findOneByOrFail({ username });
  }
  // UPDATE_USER
  @Patch(':id')
  async update(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() updateUserDto: UpdateUserDto
  ) {
    return await this.usersService.update(id, updateUserDto);
  }
  // DELETE_USER
  @Delete(':id')
  async remove(@Param('id') id: string) {
    await this.usersService.delete(id);
  }
}

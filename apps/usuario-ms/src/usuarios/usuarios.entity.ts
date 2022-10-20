import { hash } from 'bcrypt';
import { IsAlpha, IsEmail, IsString, Min } from 'class-validator';
import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
import { IUser } from './usuarios.interface';

@Entity()
@Unique(['username'])
@Unique(['email'])
export class Usuario implements IUser {
  @PrimaryGeneratedColumn()
  id: number;

  @IsString()
  @Column()
  username: string;

  @Column()
  @Min(8)
  password: string;

  @IsAlpha()
  @Column()
  name: string;

  @IsEmail()
  @Column()
  email: string;

  @CreateDateColumn()
  createdAt: Date;

  @BeforeInsert()
  async hashPassword() {
    this.password = await hash(this.password, 10);
  }
}

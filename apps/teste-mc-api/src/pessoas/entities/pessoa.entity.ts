import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Pessoa {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  email: string;
  @Column()
  phoneNumber: string;
}

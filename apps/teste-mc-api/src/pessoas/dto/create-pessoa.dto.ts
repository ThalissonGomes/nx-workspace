import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreatePessoaDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(2)
  name: string;

  @IsEmail()
  email: string;

  // @IsMobilePhone('pt-BR')
  @IsString()
  phoneNumber: string;

  // @IsNotEmpty()
  // @IsDate()
  // birthDate: Date;
}

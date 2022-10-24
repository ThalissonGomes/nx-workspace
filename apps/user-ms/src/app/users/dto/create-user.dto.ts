import {
  IsEmail,
  IsNotEmpty,
  MaxLength,
  MinLength,
  Validate,
} from 'class-validator';
import {
  PasswordValidation,
  PasswordValidationRequirement,
} from 'class-validator-password-check';

const passRequirement: PasswordValidationRequirement = {
  mustContainLowerLetter: true,
  mustContainSpecialCharacter: true,
  mustContainNumber: true,
  mustContainUpperLetter: true,
};

export class CreateUserDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  username: string;

  @MinLength(6)
  @MaxLength(20)
  @Validate(PasswordValidation, [passRequirement])
  password: string;

  @IsEmail()
  email: string;
}

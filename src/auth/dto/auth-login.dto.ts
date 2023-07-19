import { IsEmail } from "class-validator"
import { IsString, MinLength } from "class-validator/types/decorator/decorators"

export class AuthLoginDTO {

  @IsEmail()
  email: string

  @IsString()
  @MinLength(6)
  password: string
}
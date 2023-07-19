import { IsJWT, IsString, MinLength } from "class-validator/types/decorator/decorators"

export class AuthResetDTO {
  @IsString()
  @MinLength(6)
  password: string

  @IsJWT()
  token: string
}
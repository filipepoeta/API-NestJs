/* eslint-disable prettier/prettier */

import { IsEmail, IsString, IsStrongPassword } from "class-validator";

export class UsuarioCreateDto{
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsStrongPassword({
      
  })
  password:string;
  
}
/* eslint-disable prettier/prettier */
import { PartialType } from "@nestjs/mapped-types";
import { UsuarioCreateDto } from "./Create-usuario.dto";

//PartialType temos que instalar o mapped-types. Server para o DTO apenas atualizar parcialmente.
export class UsuarioPatchDto extends PartialType(UsuarioCreateDto){

}
/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { UsuarioController } from "./Usuario.Controller";

@Module({
  imports: [],
  controllers: [UsuarioController],
  providers: [],
  exports:[]
})
export class UsuarioModule {}

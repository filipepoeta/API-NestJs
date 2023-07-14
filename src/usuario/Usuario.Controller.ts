/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Put } from '@nestjs/common';
import { UsuarioCreateDto } from './Dto/Create-usuario.dto';
import { UsuarioPutDto } from './Dto/Put-usuario.dto';
import { UsuarioPatchDto } from './Dto/Patch-usuario.dto';

@Controller('usuarios')
export class UsuarioController {

  @Post()
  async criar(@Body() {name,email,password}: UsuarioCreateDto) {
    return {name,email,password} ;
  }

  @Get()
  async list(){
    return {usuarios: []}
  }

  @Get(":id")
  async show(@Param("id", ParseIntPipe) id:number){
    return { usuario:{}, id}

  }

  @Put(':id')
  async update(@Body() {name,email,password}:UsuarioPutDto,@Param("id", ParseIntPipe) id:number){
    return {
      method: 'Put',
      name,email,password,
      id
    }
  }

  @Patch(':id')
  async updatePartial(@Body() {name,email,password}:UsuarioPatchDto, @Param("id", ParseIntPipe) id:number){
    return {
      method: 'Patch',
      name,email,password,
      id
    }
  }

  @Delete(':id')
  async delete(@Param("id", ParseIntPipe) id:number){
    return{
      id
    }
  }











}

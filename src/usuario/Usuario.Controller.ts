import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Put } from '@nestjs/common';
import { UsuarioDto } from './Dto/usuario.Dto';
import { UsuarioService } from './usuario.service';

@Controller('usuarios')
export class UsuarioController {

  constructor(private readonly usuarioService: UsuarioService) { }

  @Post()
  async criar(@Body() data: UsuarioDto) {
    return this.usuarioService.create(data);
  }

  @Get()
  async list() {
    return this.usuarioService.list();
  }

  @Get(":id")
  async show(@Param("id", ParseIntPipe) id: number) {
    return this.usuarioService.GetOne(id)

  }

  @Put(':id')
  async update(@Body() { name, email, password }: UsuarioDto, @Param("id", ParseIntPipe) id: number) {
    return {
      method: 'Put',
      name, email, password,
      id
    }
  }

  @Patch(':id')
  async updatePartial(@Body() { name, email, password }: UsuarioDto, @Param("id", ParseIntPipe) id: number) {
    return {
      method: 'Patch',
      name, email, password,
      id
    }
  }

  @Delete(':id')
  async delete(@Param("id", ParseIntPipe) id: number) {
    return {
      id
    }
  }

}

import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Put, UseInterceptors } from '@nestjs/common';
import { LogInterceptor } from 'src/interceptors/log.interceptor';
import { UsuarioDto } from './Dto/usuario.Dto';
import { UsuarioService } from './usuario.service';

@UseInterceptors(LogInterceptor)
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
  async update(@Body() data: UsuarioDto, @Param("id", ParseIntPipe) id: number) {
    return this.usuarioService.update(id, data)
  }

  @Patch(':id')
  async updatePartial(@Body() data: UsuarioDto, @Param("id", ParseIntPipe) id: number) {
    return this.usuarioService.updatePartial(id, data)
  }

  @Delete(':id')
  async delete(@Param("id", ParseIntPipe) id: number) {
    return this.usuarioService.delete(id)

  }



}
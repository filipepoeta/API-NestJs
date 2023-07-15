
import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { UsuarioDto } from "./Dto/usuario.Dto";

@Injectable()
export class UsuarioService {

  constructor(private readonly prisma: PrismaService) { }

  async create(data: UsuarioDto) {

    return this.prisma.usuario.create({
      data,
    });
  }

  async list() {
    return this.prisma.usuario.findMany()
  }

  async GetOne(id: number) {
    await this.exist(id);
    return this.prisma.usuario.findUnique({
      where: {
        id,
      }
    })
  }

  async update(id: number, data: UsuarioDto) {
    await this.exist(id);

    return this.prisma.usuario.update({
      data,
      where: {
        id
      }
    })
  }
  async updatePartial(id: number, data: UsuarioDto) {
    await this.exist(id);

    return this.prisma.usuario.update({
      data,
      where: {
        id
      }
    })
  }

  async delete(id: number) {

    await this.exist(id);

    return this.prisma.usuario.delete({
      where: {
        id
      }
    })
  }

  async exist(id: number) {
    if (!(await this.prisma.usuario.count({
      where: {
        id
      }
    }))) {
      throw new NotFoundException(`O usuário ${id} não existe!`)
    }
  }
}

import { Injectable } from "@nestjs/common";
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
    return this.prisma.usuario.findUnique({
      where: {
        id,
      }
    })

  }
}
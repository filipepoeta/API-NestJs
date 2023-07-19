import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { PrismaService } from "src/prisma/prisma.service";
@Injectable()
export class AuthService {
  constructor(
    private readonly jwtServide: JwtService,
    private readonly prisma: PrismaService) { }

  async createToken() {
    //return this.jwtService.sign();
  }

  async checkToken(token: string) {
    // return this.jwtService.verify();
  }

  async login(email: string, password: string) {

    const usuario = this.prisma.usuario.findFirst({
      where: {
        email,
        password
      }
    });

    if (!usuario) {
      throw new UnauthorizedException('Usuário ou Senha inválidos!')

    }

    return usuario;
  }


  async forget(email: string) {
    const usuario = this.prisma.usuario.findFirst({
      where: {
        email

      }
    });

    if (!usuario) {
      throw new UnauthorizedException('E-mail incorreto!')

    }
    //TO DO: Enviar o e-mail
    return true;
  }


  async reset(password: string, token: string) {

    // TO DO? validar o token

    const id = 0;
    await this.prisma.usuario.update({
      where: {
        id,
      },
      data: {
        password
      },
    })
    return true;
  }



}
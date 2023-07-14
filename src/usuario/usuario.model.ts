import { Prisma } from "@prisma/client";

export class Usuario implements Prisma.UsuarioCreateInput{
  id: number;
  name: string;
  email: string;
  password: string;
  criadoEm?: string | Date;
  atualizadoEm?: string | Date;
}
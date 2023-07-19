import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { PrismaModule } from "src/prisma/prisma.module";
import { UsuarioModule } from "src/usuario/usuario.module";
import { AuthController } from "./auth.controller";

@Module({
  imports: [JwtModule.register({
    secret: `z7VMC!m,qBl-Es]PnUb9MQDtwKHZU.hp`
  }),
    UsuarioModule,
    PrismaModule
  ],
  controllers: [AuthController]
})
export class AuthModule {

}
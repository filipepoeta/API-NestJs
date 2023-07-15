import { UsuarioIdCheckMiddleware } from './../middleware/usuario-id-check.middleware';
import { MiddlewareConsumer, Module, NestModule, RequestMethod } from "@nestjs/common";
import { UsuarioController } from "./Usuario.Controller";
import { UsuarioService } from "./usuario.service";
import { PrismaModule } from "src/prisma/prisma.module";

@Module({
  imports: [PrismaModule],
  controllers: [UsuarioController],
  providers: [UsuarioService],
  exports: []
})
export class UsuarioModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(UsuarioIdCheckMiddleware).forRoutes({
      path: 'usuarios/:id',
      method: RequestMethod.ALL
    })
  }
}

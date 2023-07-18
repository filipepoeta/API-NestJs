import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";

@Module({
  imports: [JwtModule.register({
    secret: `z7VMC!m,qBl-Es]PnUb9MQDtwKHZU.hp`
  })]
})
export class AuthModule {

}
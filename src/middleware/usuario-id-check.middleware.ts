import { BadRequestException } from "@nestjs/common/exceptions";
import { NestMiddleware } from "@nestjs/common/interfaces";
import { NextFunction, Request, Response } from "express";

export class UsuarioIdCheckMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {

    if (isNaN(Number(req.params.id)) || Number(req.params.id) <= 0) {
      throw new BadRequestException('ID inválido!');
    }

    next();
  }

}
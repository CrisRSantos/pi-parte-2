import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Usuario } from "../entities/usuario.entity";

@Injectable()
export class TokenService {
  constructor(private readonly jwtService: JwtService) {}

  generateToken(usuario: Usuario) {
    const payload = {
      sub: usuario.id,
      email: usuario.email,
      nome: usuario.nome,
      tipo_usuario: usuario.tipo_usuario,
    };

    return {
      access_token: this.jwtService.sign(payload),
      user: {
        id: usuario.id,
        email: usuario.email,
        nome: usuario.nome,
        tipo_usuario: usuario.tipo_usuario,
      },
    };
  }

  validateToken(token: string) {
    try {
      return this.jwtService.verify(token);
    } catch (error) {
      return null;
    }
  }
}

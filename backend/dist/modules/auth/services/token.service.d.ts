import { JwtService } from "@nestjs/jwt";
import { Usuario } from "../entities/usuario.entity";
export declare class TokenService {
    private readonly jwtService;
    constructor(jwtService: JwtService);
    generateToken(usuario: Usuario): {
        access_token: string;
        user: {
            id: string;
            email: string;
            nome: string;
            tipo_usuario: string;
        };
    };
    validateToken(token: string): any;
}

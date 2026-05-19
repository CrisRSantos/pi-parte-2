import { Repository } from "typeorm";
import { Usuario } from "../entities/usuario.entity";
import { LoginDto, RegisterDto } from "../dto/auth.dto";
import { TokenService } from "./token.service";
export declare class AuthService {
    private usuarioRepository;
    private tokenService;
    constructor(usuarioRepository: Repository<Usuario>, tokenService: TokenService);
    login(loginDto: LoginDto): Promise<{
        access_token: string;
        user: {
            id: string;
            email: string;
            nome: string;
            tipo_usuario: string;
        };
    }>;
    register(registerDto: RegisterDto): Promise<{
        access_token: string;
        user: {
            id: string;
            email: string;
            nome: string;
            tipo_usuario: string;
        };
    }>;
    private hashPassword;
    private validatePassword;
}

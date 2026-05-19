import { AuthService } from "./services/auth.service";
import { LoginDto, RegisterDto } from "./dto/auth.dto";
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
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
}

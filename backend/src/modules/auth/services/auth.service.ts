import {
  Injectable,
  UnauthorizedException,
  BadRequestException,
} from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Usuario } from "../entities/usuario.entity";
import { LoginDto, RegisterDto } from "../dto/auth.dto";
import { TokenService } from "./token.service";
import * as bcrypt from "bcrypt";

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Usuario)
    private usuarioRepository: Repository<Usuario>,
    private tokenService: TokenService,
  ) {}

  async login(loginDto: LoginDto) {
    const usuario = await this.usuarioRepository.findOne({
      where: { email: loginDto.email },
    });

    if (!usuario) {
      throw new UnauthorizedException("Email ou senha inválidos");
    }

    const senhaValida = await this.validatePassword(
      loginDto.senha,
      usuario.senha,
    );
    if (!senhaValida) {
      throw new UnauthorizedException("Email ou senha inválidos");
    }

    return this.tokenService.generateToken(usuario);
  }

  async register(registerDto: RegisterDto) {
    const usuarioExistente = await this.usuarioRepository.findOne({
      where: { email: registerDto.email },
    });

    if (usuarioExistente) {
      throw new BadRequestException("Este email já está registrado");
    }

    const senhaCriptografada = await this.hashPassword(registerDto.senha);

    const novoUsuario = this.usuarioRepository.create({
      email: registerDto.email,
      nome: registerDto.nome,
      senha: senhaCriptografada,
      tipo_usuario: "tutor",
    });

    await this.usuarioRepository.save(novoUsuario);

    return this.tokenService.generateToken(novoUsuario);
  }

  private async hashPassword(senha: string): Promise<string> {
    const saltRounds = 10;
    return bcrypt.hash(senha, saltRounds);
  }

  private async validatePassword(
    senha: string,
    senhaHash: string,
  ): Promise<boolean> {
    return bcrypt.compare(senha, senhaHash);
  }
}

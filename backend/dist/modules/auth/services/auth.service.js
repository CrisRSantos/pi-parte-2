"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const usuario_entity_1 = require("../entities/usuario.entity");
const token_service_1 = require("./token.service");
const bcrypt = require("bcrypt");
let AuthService = class AuthService {
    constructor(usuarioRepository, tokenService) {
        this.usuarioRepository = usuarioRepository;
        this.tokenService = tokenService;
    }
    async login(loginDto) {
        const usuario = await this.usuarioRepository.findOne({
            where: { email: loginDto.email },
        });
        if (!usuario) {
            throw new common_1.UnauthorizedException("Email ou senha inválidos");
        }
        const senhaValida = await this.validatePassword(loginDto.senha, usuario.senha);
        if (!senhaValida) {
            throw new common_1.UnauthorizedException("Email ou senha inválidos");
        }
        return this.tokenService.generateToken(usuario);
    }
    async register(registerDto) {
        const usuarioExistente = await this.usuarioRepository.findOne({
            where: { email: registerDto.email },
        });
        if (usuarioExistente) {
            throw new common_1.BadRequestException("Este email já está registrado");
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
    async hashPassword(senha) {
        const saltRounds = 10;
        return bcrypt.hash(senha, saltRounds);
    }
    async validatePassword(senha, senhaHash) {
        return bcrypt.compare(senha, senhaHash);
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(usuario_entity_1.Usuario)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        token_service_1.TokenService])
], AuthService);
//# sourceMappingURL=auth.service.js.map
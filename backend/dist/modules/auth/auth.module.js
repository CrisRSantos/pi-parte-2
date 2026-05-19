"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const jwt_1 = require("@nestjs/jwt");
const passport_1 = require("@nestjs/passport");
const usuario_entity_1 = require("./entities/usuario.entity");
const auth_controller_1 = require("./auth.controller");
const auth_service_1 = require("./services/auth.service");
const token_service_1 = require("./services/token.service");
const jwt_strategy_1 = require("./strategies/jwt.strategy");
const app_config_1 = require("../../config/app.config");
let AuthModule = class AuthModule {
};
exports.AuthModule = AuthModule;
exports.AuthModule = AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([usuario_entity_1.Usuario]),
            passport_1.PassportModule,
            jwt_1.JwtModule.register({
                secret: app_config_1.jwtConfig.secret,
                signOptions: { expiresIn: app_config_1.jwtConfig.expiresIn },
            }),
        ],
        providers: [auth_service_1.AuthService, token_service_1.TokenService, jwt_strategy_1.JwtStrategy],
        controllers: [auth_controller_1.AuthController],
        exports: [auth_service_1.AuthService, token_service_1.TokenService, jwt_1.JwtModule],
    })
], AuthModule);
//# sourceMappingURL=auth.module.js.map
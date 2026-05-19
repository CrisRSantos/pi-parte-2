import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { Usuario } from "./entities/usuario.entity";
import { AuthController } from "./auth.controller";
import { AuthService } from "./services/auth.service";
import { TokenService } from "./services/token.service";
import { JwtStrategy } from "./strategies/jwt.strategy";
import { jwtConfig } from "../../config/app.config";

@Module({
  imports: [
    TypeOrmModule.forFeature([Usuario]),
    PassportModule,
    JwtModule.register({
      secret: jwtConfig.secret,
      signOptions: { expiresIn: jwtConfig.expiresIn },
    }),
  ],
  providers: [AuthService, TokenService, JwtStrategy],
  controllers: [AuthController],
  exports: [AuthService, TokenService, JwtModule],
})
export class AuthModule {}

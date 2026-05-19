"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appConfig = exports.jwtConfig = void 0;
exports.jwtConfig = {
    secret: process.env.JWT_SECRET || "sua-chave-secreta-super-segura-petcare-2024",
    expiresIn: process.env.JWT_EXPIRES_IN || "24h",
};
exports.appConfig = {
    port: parseInt(process.env.APP_PORT || "3000"),
    environment: process.env.NODE_ENV || "development",
    apiPrefix: process.env.API_PREFIX || "/api",
};
//# sourceMappingURL=app.config.js.map
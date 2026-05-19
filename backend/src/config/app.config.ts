export const jwtConfig = {
  secret:
    process.env.JWT_SECRET || "sua-chave-secreta-super-segura-petcare-2024",
  expiresIn: process.env.JWT_EXPIRES_IN || "24h",
};

export const appConfig = {
  port: parseInt(process.env.APP_PORT || "3000"),
  environment: process.env.NODE_ENV || "development",
  apiPrefix: process.env.API_PREFIX || "/api",
};

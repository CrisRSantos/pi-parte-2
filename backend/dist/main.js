"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const common_1 = require("@nestjs/common");
const app_module_1 = require("./app.module");
const app_config_1 = require("./config/app.config");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors({
        origin: process.env.CORS_ORIGIN || "http://localhost:4200",
        credentials: true,
    });
    app.useGlobalPipes(new common_1.ValidationPipe({ transform: true }));
    app.setGlobalPrefix(app_config_1.appConfig.apiPrefix);
    await app.listen(app_config_1.appConfig.port);
    console.log(`🐾 PetCare Backend running on http://localhost:${app_config_1.appConfig.port}${app_config_1.appConfig.apiPrefix}`);
}
bootstrap().catch((err) => {
    console.error("Error starting application:", err);
    process.exit(1);
});
//# sourceMappingURL=main.js.map
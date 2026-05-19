import { NestFactory } from "@nestjs/core";
import { ValidationPipe } from "@nestjs/common";
import { AppModule } from "./app.module";
import { appConfig } from "./config/app.config";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS
  app.enableCors({
    origin: process.env.CORS_ORIGIN || "http://localhost:4200",
    credentials: true,
  });

  // Add validation pipe globally
  app.useGlobalPipes(new ValidationPipe({ transform: true }));

  // Set API prefix
  app.setGlobalPrefix(appConfig.apiPrefix);

  // Start the application
  await app.listen(appConfig.port);
  console.log(
    `🐾 PetCare Backend running on http://localhost:${appConfig.port}${appConfig.apiPrefix}`,
  );
}

bootstrap().catch((err) => {
  console.error("Error starting application:", err);
  process.exit(1);
});

import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigModule } from "@nestjs/config";
import { databaseConfig } from "./config/database.config";
import { AuthModule } from "./modules/auth/auth.module";
import { PetsModule } from "./modules/pets/pets.module";
import { VacinasModule } from "./modules/vacinas/vacinas.module";
import { AgendamentosModule } from "./modules/agendamentos/agendamentos.module";
import { ConsultasModule } from "./modules/consultas/consultas.module";
import { ClinicasModule } from "./modules/clinicas/clinicas.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ".env",
    }),
    TypeOrmModule.forRoot(databaseConfig),
    AuthModule,
    PetsModule,
    VacinasModule,
    AgendamentosModule,
    ConsultasModule,
    ClinicasModule,
  ],
})
export class AppModule {}

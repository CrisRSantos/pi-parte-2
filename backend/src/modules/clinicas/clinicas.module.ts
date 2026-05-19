import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Clinica } from "./entities/clinica.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Clinica])],
})
export class ClinicasModule {}

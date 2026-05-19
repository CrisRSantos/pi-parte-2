import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Prontuario } from "./entities/prontuario.entity";
import { Medicacao } from "./entities/medicacao.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Prontuario, Medicacao])],
})
export class ConsultasModule {}

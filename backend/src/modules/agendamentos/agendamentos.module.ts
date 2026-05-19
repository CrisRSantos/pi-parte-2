import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Agendamento } from "./entities/agendamento.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Agendamento])],
})
export class AgendamentosModule {}

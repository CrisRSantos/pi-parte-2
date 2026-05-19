import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Vacina } from "./entities/vacina.entity";
import { VacinaAplicada } from "./entities/vacina-aplicada.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Vacina, VacinaAplicada])],
})
export class VacinasModule {}

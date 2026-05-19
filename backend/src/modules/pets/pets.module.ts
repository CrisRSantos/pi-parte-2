import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Pet } from "./entities/pet.entity";
import { PetController } from "./pets.controller";
import { PetService } from "./services/pet.service";

@Module({
  imports: [TypeOrmModule.forFeature([Pet])],
  providers: [PetService],
  controllers: [PetController],
})
export class PetsModule {}

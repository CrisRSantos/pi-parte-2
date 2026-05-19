import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Pet } from "../entities/pet.entity";
import { CreatePetDto, UpdatePetDto } from "../dto/pet.dto";

@Injectable()
export class PetService {
  constructor(
    @InjectRepository(Pet)
    private petRepository: Repository<Pet>,
  ) {}

  async findAll(
    usuarioId: string,
    page: number = 1,
    limit: number = 10,
    search?: string,
  ) {
    const skip = (page - 1) * limit;
    const query = this.petRepository
      .createQueryBuilder("pet")
      .where("pet.usuario_id = :usuarioId", { usuarioId });

    if (search) {
      query.andWhere("pet.nome ILIKE :search", { search: `%${search}%` });
    }

    const [data, total] = await query.skip(skip).take(limit).getManyAndCount();

    return { data, total, page, limit };
  }

  async findOne(id: string, usuarioId: string) {
    const pet = await this.petRepository.findOne({
      where: { id, usuario_id: usuarioId },
      relations: ["vacinas", "agendamentos", "prontuarios"],
    });

    if (!pet) {
      throw new NotFoundException("Pet não encontrado");
    }

    return pet;
  }

  async create(createPetDto: CreatePetDto, usuarioId: string) {
    const pet = this.petRepository.create({
      ...createPetDto,
      usuario_id: usuarioId,
    });

    return this.petRepository.save(pet);
  }

  async update(id: string, updatePetDto: UpdatePetDto, usuarioId: string) {
    const pet = await this.findOne(id, usuarioId);

    Object.assign(pet, updatePetDto);

    return this.petRepository.save(pet);
  }

  async remove(id: string, usuarioId: string) {
    const pet = await this.findOne(id, usuarioId);
    await this.petRepository.remove(pet);
    return { message: "Pet removido com sucesso" };
  }
}

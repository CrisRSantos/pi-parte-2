import { Repository } from "typeorm";
import { Pet } from "../entities/pet.entity";
import { CreatePetDto, UpdatePetDto } from "../dto/pet.dto";
export declare class PetService {
    private petRepository;
    constructor(petRepository: Repository<Pet>);
    findAll(usuarioId: string, page?: number, limit?: number, search?: string): Promise<{
        data: Pet[];
        total: number;
        page: number;
        limit: number;
    }>;
    findOne(id: string, usuarioId: string): Promise<Pet>;
    create(createPetDto: CreatePetDto, usuarioId: string): Promise<Pet>;
    update(id: string, updatePetDto: UpdatePetDto, usuarioId: string): Promise<Pet>;
    remove(id: string, usuarioId: string): Promise<{
        message: string;
    }>;
}

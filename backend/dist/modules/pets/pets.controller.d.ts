import { PetService } from "./services/pet.service";
import { CreatePetDto, UpdatePetDto } from "./dto/pet.dto";
export declare class PetController {
    private readonly petService;
    constructor(petService: PetService);
    findAll(req: any, page?: number, limit?: number, search?: string): Promise<{
        data: import("./entities/pet.entity").Pet[];
        total: number;
        page: number;
        limit: number;
    }>;
    findOne(id: string, req: any): Promise<import("./entities/pet.entity").Pet>;
    create(createPetDto: CreatePetDto, req: any): Promise<import("./entities/pet.entity").Pet>;
    update(id: string, updatePetDto: UpdatePetDto, req: any): Promise<import("./entities/pet.entity").Pet>;
    remove(id: string, req: any): Promise<{
        message: string;
    }>;
}

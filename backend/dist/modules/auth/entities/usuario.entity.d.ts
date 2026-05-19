import { Pet } from "../../pets/entities/pet.entity";
export declare class Usuario {
    id: string;
    email: string;
    senha: string;
    nome: string;
    tipo_usuario: string;
    criado_em: Date;
    atualizado_em: Date;
    pets: Pet[];
}

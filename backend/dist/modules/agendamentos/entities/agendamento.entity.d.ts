import { Pet } from "../../pets/entities/pet.entity";
import { Clinica } from "../../clinicas/entities/clinica.entity";
export declare class Agendamento {
    id: string;
    pet_id: string;
    clinica_id: string;
    data_hora: Date;
    status: string;
    tipo_servico: string;
    descricao: string;
    notas: string;
    criado_em: Date;
    atualizado_em: Date;
    pet: Pet;
    clinica: Clinica;
}

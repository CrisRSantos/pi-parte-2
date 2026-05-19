import { Pet } from "../../pets/entities/pet.entity";
import { Clinica } from "../../clinicas/entities/clinica.entity";
import { Medicacao } from "./medicacao.entity";
export declare class Prontuario {
    id: string;
    pet_id: string;
    clinica_id: string;
    descricao: string;
    diagnostico: string;
    tratamento: string;
    data_atendimento: Date;
    proxima_consulta: Date;
    profissional: string;
    criado_em: Date;
    atualizado_em: Date;
    pet: Pet;
    clinica: Clinica;
    medicacoes: Medicacao[];
}

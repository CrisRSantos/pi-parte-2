import { Pet } from "../../pets/entities/pet.entity";
import { Vacina } from "./vacina.entity";
import { Clinica } from "../../clinicas/entities/clinica.entity";
export declare class VacinaAplicada {
    id: string;
    pet_id: string;
    vacina_id: string;
    clinica_id: string;
    data_aplicacao: Date;
    data_proxima_dose: Date;
    criado_em: Date;
    atualizado_em: Date;
    pet: Pet;
    vacina: Vacina;
    clinica: Clinica;
}

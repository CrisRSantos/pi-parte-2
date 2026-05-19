export declare class CreateVacinaDto {
    nome: string;
    descricao?: string;
    validade_meses: number;
}
export declare class AplicarVacinaDto {
    pet_id: string;
    vacina_id: string;
    clinica_id: string;
    data_aplicacao: string;
    data_proxima_dose: string;
}

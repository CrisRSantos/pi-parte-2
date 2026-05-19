export declare class CreateAgendamentoDto {
    pet_id: string;
    clinica_id: string;
    data_hora: string;
    tipo_servico: string;
    descricao?: string;
    notas?: string;
}
export declare class UpdateAgendamentoDto {
    status?: string;
    descricao?: string;
    notas?: string;
}

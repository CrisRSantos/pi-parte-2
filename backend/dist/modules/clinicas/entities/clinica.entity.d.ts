import { Agendamento } from "../../agendamentos/entities/agendamento.entity";
export declare class Clinica {
    id: string;
    nome: string;
    endereco: string;
    telefone: string;
    email: string;
    cnpj: string;
    criado_em: Date;
    atualizado_em: Date;
    agendamentos: Agendamento[];
}

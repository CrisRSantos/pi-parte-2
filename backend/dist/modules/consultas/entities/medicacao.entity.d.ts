import { Prontuario } from "./prontuario.entity";
export declare class Medicacao {
    id: string;
    prontuario_id: string;
    nome: string;
    dosagem: string;
    frequencia: string;
    duracao_dias: number;
    data_inicio: Date;
    data_fim: Date;
    criado_em: Date;
    atualizado_em: Date;
    prontuario: Prontuario;
}

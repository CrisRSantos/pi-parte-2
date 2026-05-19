import { VacinaAplicada } from "./vacina-aplicada.entity";
export declare class Vacina {
    id: string;
    nome: string;
    descricao: string;
    validade_meses: number;
    criado_em: Date;
    atualizado_em: Date;
    vacinasAplicadas: VacinaAplicada[];
}

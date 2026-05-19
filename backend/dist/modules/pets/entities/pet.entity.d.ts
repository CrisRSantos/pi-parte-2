import { Usuario } from "../../auth/entities/usuario.entity";
import { VacinaAplicada } from "../../vacinas/entities/vacina-aplicada.entity";
import { Agendamento } from "../../agendamentos/entities/agendamento.entity";
import { Prontuario } from "../../consultas/entities/prontuario.entity";
export declare class Pet {
    id: string;
    usuario_id: string;
    nome: string;
    especie: string;
    raca: string;
    idade: number;
    peso: number;
    data_nascimento: Date;
    cor: string;
    sexo: string;
    criado_em: Date;
    atualizado_em: Date;
    usuario: Usuario;
    vacinas: VacinaAplicada[];
    agendamentos: Agendamento[];
    prontuarios: Prontuario[];
}

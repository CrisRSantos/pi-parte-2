export interface Prontuario {
  id: string;
  pet_id: string;
  clinica_id: string;
  descricao: string;
  diagnostico: string;
  tratamento: string;
  data_atendimento: Date;
  proxima_consulta: Date;
  profissional: string;
  medicacoes: Medicacao[];
}

export interface Medicacao {
  id: string;
  nome: string;
  dosagem: string;
  frequencia: string;
  duracao_dias: number;
  data_inicio: Date;
  data_fim: Date;
}

export interface Exame {
  id: string;
  tipo: string;
  data_realizacao: Date;
  resultado: string;
  observacoes: string;
}

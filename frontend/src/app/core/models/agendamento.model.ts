export interface Agendamento {
  id: string;
  pet_id: string;
  clinica_id: string;
  data_hora: Date;
  status: "agendado" | "confirmado" | "cancelado" | "concluido";
  tipo_servico: "consulta" | "vacinacao" | "exame" | "cirurgia" | "limpeza";
  descricao: string;
  notas: string;
  criadoEm: Date;
}

export interface CreateAgendamentoRequest {
  pet_id: string;
  clinica_id: string;
  data_hora: Date;
  tipo_servico: Agendamento["tipo_servico"];
  descricao: string;
}

export interface AgendamentoResponse {
  data: Agendamento[];
  total: number;
  page: number;
  limit: number;
}

export interface TimeSlot {
  horario: string;
  disponivel: boolean;
}

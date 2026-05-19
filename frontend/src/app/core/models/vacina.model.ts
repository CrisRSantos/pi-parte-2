export interface Vacina {
  id: string;
  nome: string;
  descricao: string;
  validade_meses: number;
}

export interface VacinaAplicada {
  id: string;
  pet_id: string;
  vacina_id: string;
  vacina: Vacina;
  clinica_id: string;
  data_aplicacao: Date;
  data_proxima_dose: Date;
  status: "ativa" | "vencida" | "proxima";
}

export interface LembreteVacina {
  id: string;
  pet_id: string;
  pet_nome: string;
  vacina: Vacina;
  data_proxima_dose: Date;
  dias_faltantes: number;
  urgencia: "critica" | "alta" | "media" | "baixa";
}

export interface Pet {
  id: string;
  tutor_id: string;
  nome: string;
  especie: "cachorro" | "gato" | "pássaro" | "roedor" | "outro";
  raca: string;
  idade: number;
  peso: number;
  dataNascimento: Date;
  cor: string;
  sexo: "macho" | "fêmea";
  criadoEm: Date;
  atualizadoEm: Date;
}

export interface CreatePetRequest {
  nome: string;
  especie: string;
  raca: string;
  idade: number;
  peso: number;
  dataNascimento: Date;
  cor: string;
  sexo: string;
}

export interface PetListResponse {
  data: Pet[];
  total: number;
  page: number;
  limit: number;
}

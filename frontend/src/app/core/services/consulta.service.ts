import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Prontuario, Exame } from "../models/consulta.model";

@Injectable({
  providedIn: "root",
})
export class ConsultaService {
  private mockConsultas: Prontuario[] = [
    {
      id: "1",
      pet_id: "1",
      clinica_id: "1",
      descricao: "Consulta de rotina",
      data_atendimento: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000),
      diagnostico: "Pet saudável",
      tratamento: "Sem medicação necessária",
      proxima_consulta: new Date(Date.now() + 180 * 24 * 60 * 60 * 1000),
      profissional: "Dra. Maria Silva",
      medicacoes: [],
    },
    {
      id: "2",
      pet_id: "2",
      clinica_id: "1",
      descricao: "Acompanhamento de peso",
      data_atendimento: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
      diagnostico: "Sobrepeso leve",
      tratamento: "Ajuste de dieta e caminhada diária",
      proxima_consulta: new Date(Date.now() + 60 * 24 * 60 * 60 * 1000),
      profissional: "Dr. João Santos",
      medicacoes: [],
    },
  ];

  constructor() {}

  getConsultasPorPet(petId: string): Observable<Prontuario[]> {
    const filtered = this.mockConsultas.filter((item) => item.pet_id === petId);
    return of(filtered);
  }

  getConsultaById(id: string): Observable<Prontuario> {
    const consulta = this.mockConsultas.find((item) => item.id === id);
    return of(consulta!);
  }

  criarConsulta(consulta: any): Observable<Prontuario> {
    const newConsulta: Prontuario = {
      ...consulta,
      id: String(this.mockConsultas.length + 1),
    };
    this.mockConsultas.push(newConsulta);
    return of(newConsulta);
  }

  updateConsulta(
    id: string,
    consulta: Partial<Prontuario>,
  ): Observable<Prontuario> {
    const index = this.mockConsultas.findIndex((item) => item.id === id);
    if (index >= 0) {
      this.mockConsultas[index] = {
        ...this.mockConsultas[index],
        ...consulta,
      };
    }
    return of(this.mockConsultas[index]);
  }

  getExamesPorPet(petId: string): Observable<Exame[]> {
    return of([
      {
        id: "1",
        tipo: "Exame de sangue", // Add the missing property
        data_realizacao: new Date("2022-01-01"), // Replace with your desired date
        resultado: "Normal",
        observacoes: "", // Add the missing property
      },
    ]);
  }
}

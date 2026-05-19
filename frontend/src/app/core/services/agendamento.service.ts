import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import {
  Agendamento,
  CreateAgendamentoRequest,
  AgendamentoResponse,
  TimeSlot,
} from "../models/agendamento.model";

@Injectable({
  providedIn: "root",
})
export class AgendamentoService {
  private mockAgendamentos: Agendamento[] = [
    {
      id: "1",
      pet_id: "1",
      clinica_id: "1",
      data_hora: new Date(),
      status: "confirmado",
      tipo_servico: "consulta",
      descricao: "Revisão geral e aplicação de vacina",
      notas: "Pet saudável",
      criadoEm: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
    },
    {
      id: "2",
      pet_id: "2",
      clinica_id: "1",
      data_hora: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
      status: "agendado",
      tipo_servico: "vacinacao",
      descricao: "Acompanhamento de vermifugação",
      notas: "Agendar de novo em 30 dias",
      criadoEm: new Date(),
    },
  ];

  constructor() {}

  getAgendamentos(
    page: number = 1,
    limit: number = 10,
  ): Observable<AgendamentoResponse> {
    const start = (page - 1) * limit;
    const pagedAgendamentos = this.mockAgendamentos.slice(start, start + limit);

    return of({
      data: pagedAgendamentos,
      total: this.mockAgendamentos.length,
      page,
      limit,
    });
  }

  getAgendamentosPorPet(petId: string): Observable<Agendamento[]> {
    const filtered = this.mockAgendamentos.filter(
      (item) => item.pet_id === petId,
    );
    return of(filtered);
  }

  getAgendamentoById(id: string): Observable<Agendamento> {
    const agendamento = this.mockAgendamentos.find((item) => item.id === id);
    return of(agendamento!);
  }

  criarAgendamento(
    agendamento: CreateAgendamentoRequest,
  ): Observable<Agendamento> {
    const newAgendamento: Agendamento = {
      ...agendamento,
      id: String(this.mockAgendamentos.length + 1),
      status: "agendado",
      notas: "",
      criadoEm: new Date(),
    };
    this.mockAgendamentos.push(newAgendamento);
    return of(newAgendamento);
  }

  updateAgendamento(
    id: string,
    agendamento: Partial<Agendamento>,
  ): Observable<Agendamento> {
    const index = this.mockAgendamentos.findIndex((item) => item.id === id);
    if (index >= 0) {
      this.mockAgendamentos[index] = {
        ...this.mockAgendamentos[index],
        ...agendamento,
      };
    }
    return of(this.mockAgendamentos[index]);
  }

  cancelarAgendamento(id: string): Observable<void> {
    this.mockAgendamentos = this.mockAgendamentos.filter(
      (item) => item.id !== id,
    );
    return of(void 0);
  }

  getHorariosDisponiveis(
    clinicaId: string,
    data: Date,
  ): Observable<TimeSlot[]> {
    return of([
      { horario: "08:00", disponivel: true },
      { horario: "09:00", disponivel: true },
      { horario: "10:00", disponivel: false },
      { horario: "14:00", disponivel: true },
      { horario: "15:00", disponivel: true },
    ]);
  }
}

import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Vacina, VacinaAplicada, LembreteVacina } from "../models/vacina.model";

@Injectable({
  providedIn: "root",
})
export class VacinaService {
  private mockVacinas: Vacina[] = [
    {
      id: "1",
      nome: "V8",
      descricao: "Vacina para 8 doenças",
      validade_meses: 12,
    },
    {
      id: "2",
      nome: "Raiva",
      descricao: "Vacina para raiva",
      validade_meses: 12,
    },
    {
      id: "3",
      nome: "Hepatite",
      descricao: "Vacina para hepatite",
      validade_meses: 12,
    },
  ];

  private mockVacinasAplicadas: VacinaAplicada[] = [
    {
      id: "1",
      pet_id: "1",
      vacina_id: "1",
      clinica_id: "1",
      vacina: {
        id: "1",
        nome: "V8",
        descricao: "Vacina para 8 doenças",
        validade_meses: 12,
      },
      data_aplicacao: new Date(Date.now() - 90 * 24 * 60 * 60 * 1000),
      data_proxima_dose: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
      status: "ativa",
    },
    {
      id: "2",
      pet_id: "2",
      vacina_id: "2",
      clinica_id: "1",
      vacina: {
        id: "2",
        nome: "Raiva",
        descricao: "Vacina para raiva",
        validade_meses: 12,
      },
      data_aplicacao: new Date(Date.now() - 120 * 24 * 60 * 60 * 1000),
      data_proxima_dose: new Date(Date.now() + 120 * 24 * 60 * 60 * 1000),
      status: "proxima",
    },
  ];

  private mockLembretes: LembreteVacina[] = [
    {
      id: "1",
      pet_id: "1",
      pet_nome: "Luna",
      vacina: {
        id: "1",
        nome: "V8",
        descricao: "Vacina para 8 doenças",
        validade_meses: 12,
      },
      data_proxima_dose: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
      dias_faltantes: 5,
      urgencia: "alta",
    },
    {
      id: "2",
      pet_id: "2",
      pet_nome: "Thor",
      vacina: {
        id: "2",
        nome: "Raiva",
        descricao: "Vacina para raiva",
        validade_meses: 12,
      },
      data_proxima_dose: new Date(Date.now() + 12 * 24 * 60 * 60 * 1000),
      dias_faltantes: 12,
      urgencia: "media",
    },
    {
      id: "3",
      pet_id: "3",
      pet_nome: "Mimi",
      vacina: {
        id: "3",
        nome: "Hepatite",
        descricao: "Vacina para hepatite",
        validade_meses: 12,
      },
      data_proxima_dose: new Date(Date.now() + 25 * 24 * 60 * 60 * 1000),
      dias_faltantes: 25,
      urgencia: "baixa",
    },
  ];

  constructor() {}

  getVacinas(): Observable<Vacina[]> {
    return of(this.mockVacinas);
  }

  getVacinasAplicadas(petId: string): Observable<VacinaAplicada[]> {
    const filtered = this.mockVacinasAplicadas.filter(
      (item) => item.pet_id === petId,
    );
    return of(filtered);
  }

  aplicarVacina(vacinaAplicada: any): Observable<VacinaAplicada> {
    const newVacina = {
      ...vacinaAplicada,
      id: String(this.mockVacinasAplicadas.length + 1),
    };
    this.mockVacinasAplicadas.push(newVacina);
    return of(newVacina);
  }

  getLembretes(): Observable<LembreteVacina[]> {
    return of(this.mockLembretes);
  }

  getLembretesProximos(dias: number = 30): Observable<LembreteVacina[]> {
    const filtered = this.mockLembretes.filter(
      (item) => item.dias_faltantes <= dias,
    );
    return of(filtered);
  }
}

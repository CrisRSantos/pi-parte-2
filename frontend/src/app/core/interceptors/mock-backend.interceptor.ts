import { Injectable } from "@angular/core";
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
  HttpErrorResponse,
} from "@angular/common/http";
import { Observable, of, throwError } from "rxjs";
import { delay, dematerialize, materialize, mergeMap } from "rxjs/operators";
import { environment } from "src/environments/environment";

@Injectable()
export class MockBackendInterceptor implements HttpInterceptor {
  private users = [
    {
      id: "1",
      nome: "Administrador PetCare",
      email: "admin.teste@adm.com",
      senha: "12345",
    },
  ];

  private pets = [
    {
      id: "1",
      nome: "Luna",
      especie: "gato",
      raca: "Siames",
      idade: 3,
      peso: 4.2,
      sexo: "Fêmea",
      cor: "Cinza",
    },
    {
      id: "2",
      nome: "Thor",
      especie: "cachorro",
      raca: "Vira-lata",
      idade: 5,
      peso: 16.1,
      sexo: "Macho",
      cor: "Marrom",
    },
    {
      id: "3",
      nome: "Mimi",
      especie: "roedor",
      raca: "Hamster",
      idade: 1,
      peso: 0.2,
      sexo: "Fêmea",
      cor: "Branco",
    },
  ];

  private agendamentos = [
    {
      id: "1",
      pet_id: "1",
      clinica_id: "1",
      data_hora: new Date().toISOString(),
      tipo_servico: "Consulta de rotina",
      descricao: "Revisão geral e aplicação de vacina",
    },
    {
      id: "2",
      pet_id: "2",
      clinica_id: "1",
      data_hora: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString(),
      tipo_servico: "Consulta de vacinas",
      descricao: "Acompanhamento de vermifugação",
    },
  ];

  private vacinasAplicadas = [
    {
      id: "1",
      pet_id: "1",
      vacina: { id: "1", nome: "V8" },
      data_aplicacao: new Date(
        Date.now() - 90 * 24 * 60 * 60 * 1000,
      ).toISOString(),
      data_proxima_dose: new Date(
        Date.now() + 90 * 24 * 60 * 60 * 1000,
      ).toISOString(),
      status: "agendada",
    },
    {
      id: "2",
      pet_id: "2",
      vacina: { id: "2", nome: "Raiva" },
      data_aplicacao: new Date(
        Date.now() - 120 * 24 * 60 * 60 * 1000,
      ).toISOString(),
      data_proxima_dose: new Date(
        Date.now() + 120 * 24 * 60 * 60 * 1000,
      ).toISOString(),
      status: "pendente",
    },
  ];

  private lembretes = [
    {
      id: "1",
      pet_id: "1",
      vacina: "V8",
      dias_faltantes: 5,
      urgencia: "alta",
    },
    {
      id: "2",
      pet_id: "2",
      vacina: "Raiva",
      dias_faltantes: 12,
      urgencia: "media",
    },
    {
      id: "3",
      pet_id: "3",
      vacina: "Hepatite",
      dias_faltantes: 25,
      urgencia: "baixa",
    },
  ];

  private consultas = [
    {
      id: "1",
      pet_id: "1",
      descricao: "Consulta de rotina",
      data_atendimento: new Date(
        Date.now() - 10 * 24 * 60 * 60 * 1000,
      ).toISOString(),
      diagnostico: "Pet saudável",
      tratamento: "Sem medicação necessária",
      proxima_consulta: new Date(
        Date.now() + 180 * 24 * 60 * 60 * 1000,
      ).toISOString(),
    },
    {
      id: "2",
      pet_id: "2",
      descricao: "Acompanhamento de peso",
      data_atendimento: new Date(
        Date.now() - 5 * 24 * 60 * 60 * 1000,
      ).toISOString(),
      diagnostico: "Sobrepeso leve",
      tratamento: "Ajuste de dieta e caminhada diária",
      proxima_consulta: new Date(
        Date.now() + 60 * 24 * 60 * 60 * 1000,
      ).toISOString(),
    },
  ];

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {
    // Only intercept requests targeting /api/* so assets and other calls pass through
    if (!request.url.includes("/api/")) {
      return next.handle(request);
    }

    return of(null).pipe(
      mergeMap(() => this.handleRoute(request)),
      materialize(),
      delay(300),
      dematerialize(),
    );
  }

  private handleRoute(request: HttpRequest<any>): Observable<HttpEvent<any>> {
    const { url, method, body, params } = request;
    // Normalize path to start after '/api'
    const apiIndex = url.indexOf("/api");
    const path = apiIndex >= 0 ? url.substring(apiIndex + "/api".length) : url;

    if (path.endsWith("/auth/login") && method === "POST") {
      return this.authenticate(body);
    }

    if (path === "/pets" && method === "GET") {
      return this.getPets(params);
    }

    if (/^\/pets\/[^/]+$/.test(path) && method === "GET") {
      return this.getPetById(path);
    }

    if (/^\/pets\/[^/]+$/.test(path) && method === "DELETE") {
      return this.deletePet(path);
    }

    if (path === "/agendamentos" && method === "GET") {
      return this.getAgendamentos();
    }

    if (path === "/agendamentos" && method === "POST") {
      return this.createAgendamento(body);
    }

    if (/^\/agendamentos\/pet\/[^/]+$/.test(path) && method === "GET") {
      return this.getAgendamentosPorPet(path);
    }

    if (/^\/vacinas\/pet\/[^/]+$/.test(path) && method === "GET") {
      return this.getVacinasAplicadas(path);
    }

    if (path === "/vacinas/lembretes/proximos" && method === "GET") {
      return this.getLembretesProximos(params);
    }

    if (/^\/consultas\/pet\/[^/]+$/.test(path) && method === "GET") {
      return this.getConsultasPorPet(path);
    }

    return this.error("Rota mock não encontrada", 404);
  }

  private authenticate(body: any): Observable<HttpEvent<any>> {
    const { email, senha } = body;
    const user = this.users.find((u) => u.email === email && u.senha === senha);
    if (!user) {
      return this.error("Email ou senha inválidos", 401);
    }

    const responseBody = {
      access_token: "mock-token",
      user: {
        id: user.id,
        nome: user.nome,
        email: user.email,
      },
    };

    return this.ok(responseBody);
  }

  private getPets(params: any): Observable<HttpEvent<any>> {
    const page = Number(params.get("page") || 1);
    const limit = Number(params.get("limit") || 10);
    const search = params.get("search")?.toLowerCase() || "";

    let filteredPets = [...this.pets];
    if (search) {
      filteredPets = filteredPets.filter(
        (pet) =>
          pet.nome.toLowerCase().includes(search) ||
          pet.especie.toLowerCase().includes(search) ||
          pet.raca.toLowerCase().includes(search),
      );
    }

    const start = (page - 1) * limit;
    const pagedPets = filteredPets.slice(start, start + limit);

    return this.ok({
      data: pagedPets,
      total: filteredPets.length,
      page,
      limit,
    });
  }

  private getPetById(path: string): Observable<HttpEvent<any>> {
    const id = path.split("/").pop();
    const pet = this.pets.find((item) => item.id === id);
    if (!pet) {
      return this.error("Pet não encontrado", 404);
    }
    return this.ok(pet);
  }

  private deletePet(path: string): Observable<HttpEvent<any>> {
    const id = path.split("/").pop();
    this.pets = this.pets.filter((item) => item.id !== id);
    return this.ok(null);
  }

  private getAgendamentos(): Observable<HttpEvent<any>> {
    return this.ok({
      data: this.agendamentos,
      total: this.agendamentos.length,
    });
  }

  private createAgendamento(body: any): Observable<HttpEvent<any>> {
    const newAgendamento = {
      ...body,
      id: String(this.agendamentos.length + 1),
    };
    this.agendamentos.push(newAgendamento);
    return this.ok(newAgendamento);
  }

  private getAgendamentosPorPet(path: string): Observable<HttpEvent<any>> {
    const petId = path.split("/")[3];
    const filtered = this.agendamentos.filter((item) => item.pet_id === petId);
    return this.ok(filtered);
  }

  private getVacinasAplicadas(path: string): Observable<HttpEvent<any>> {
    const petId = path.split("/").pop();
    const filtered = this.vacinasAplicadas.filter(
      (item) => item.pet_id === petId,
    );
    return this.ok(filtered);
  }

  private getConsultasPorPet(path: string): Observable<HttpEvent<any>> {
    const petId = path.split("/").pop();
    const filtered = this.consultas.filter((item) => item.pet_id === petId);
    return this.ok(filtered);
  }

  private getLembretesProximos(params: any): Observable<HttpEvent<any>> {
    const dias = Number(params.get("dias") || 30);
    const filtered = this.lembretes.filter(
      (item) => item.dias_faltantes <= dias,
    );
    return this.ok(filtered);
  }

  private ok(body: any): Observable<HttpEvent<any>> {
    return of(new HttpResponse({ status: 200, body }));
  }

  private error(message: string, status = 400): Observable<HttpEvent<any>> {
    return throwError(
      () =>
        new HttpErrorResponse({
          status,
          error: { message },
        }),
    );
  }
}

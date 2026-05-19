import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { RouterModule } from "@angular/router";
import { PetService } from "../../core/services/pet.service";
import { AgendamentoService } from "../../core/services/agendamento.service";
import { VacinaService } from "../../core/services/vacina.service";

interface DashboardStats {
  totalPets: number;
  agendamentosProximos: number;
  vacinasVencidas: number;
  consultasProximas: number;
}

@Component({
  selector: "app-dashboard",
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    RouterModule,
  ],
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit {
  stats: DashboardStats = {
    totalPets: 0,
    agendamentosProximos: 0,
    vacinasVencidas: 0,
    consultasProximas: 0,
  };

  constructor(
    private petService: PetService,
    private agendamentoService: AgendamentoService,
    private vacinaService: VacinaService,
  ) {}

  ngOnInit(): void {
    this.loadStats();
  }

  private loadStats(): void {
    // Simular carregamento de dados
    this.petService.getPets().subscribe((response) => {
      this.stats.totalPets = response.total;
    });

    this.agendamentoService.getAgendamentos().subscribe((response) => {
      this.stats.agendamentosProximos = response.total;
    });

    this.vacinaService.getLembretesProximos(30).subscribe((lembretes) => {
      this.stats.vacinasVencidas = lembretes.length;
    });
  }
}

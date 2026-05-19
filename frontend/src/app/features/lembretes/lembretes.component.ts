import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatChipsModule } from "@angular/material/chips";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { VacinaService } from "../../core/services/vacina.service";
import { LembreteVacina } from "../../core/models/vacina.model";

@Component({
  selector: "app-lembretes",
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    MatProgressBarModule,
  ],
  templateUrl: "./lembretes.component.html",
  styleUrls: ["./lembretes.component.scss"],
})
export class LembretesComponent implements OnInit {
  lembretes: LembreteVacina[] = [];
  filtro: "todas" | "critica" | "alta" | "media" | "baixa" = "todas";
  Math = Math;

  constructor(private vacinaService: VacinaService) {}

  ngOnInit(): void {
    this.loadLembretes();
  }

  private loadLembretes(): void {
    this.vacinaService.getLembretesProximos(30).subscribe((lembretes) => {
      this.lembretes = lembretes;
    });
  }

  getFiltrados(): LembreteVacina[] {
    if (this.filtro === "todas") {
      return this.lembretes;
    }
    return this.lembretes.filter((l) => l.urgencia === this.filtro);
  }

  getCountByStatus(status: string): number {
    if (status === "todas") {
      return this.lembretes.length;
    }
    return this.lembretes.filter((l) => l.urgencia === status).length;
  }

  getProgressValue(lembrete: LembreteVacina): number {
    const diasParaVencer = Math.max(0, 30 - lembrete.dias_faltantes);
    return (diasParaVencer / 30) * 100;
  }

  getProgressColor(lembrete: LembreteVacina): "primary" | "accent" | "warn" {
    switch (lembrete.urgencia) {
      case "critica":
      case "alta":
        return "warn";
      case "media":
        return "accent";
      default:
        return "primary";
    }
  }
}

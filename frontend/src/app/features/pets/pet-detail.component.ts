import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ActivatedRoute, Router, RouterModule } from "@angular/router";
import { MatCardModule } from "@angular/material/card";
import { MatTabsModule } from "@angular/material/tabs";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatDividerModule } from "@angular/material/divider";
import { MatTableModule } from "@angular/material/table";
import { PetService } from "../../core/services/pet.service";
import { ConsultaService } from "../../core/services/consulta.service";
import { VacinaService } from "../../core/services/vacina.service";
import { Pet } from "../../core/models/pet.model";
import { Prontuario } from "../../core/models/consulta.model";
import { VacinaAplicada } from "../../core/models/vacina.model";

@Component({
  selector: "app-pet-detail",
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatTabsModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatTableModule,
  ],
  templateUrl: "./pet-detail.component.html",
  styleUrls: ["./pet-detail.component.scss"],
})
export class PetDetailComponent implements OnInit {
  pet: Pet | null = null;
  vacinas: VacinaAplicada[] = [];
  consultas: Prontuario[] = [];
  vacinaColumns: string[] = [
    "vacina",
    "data_aplicacao",
    "proxima_dose",
    "status",
  ];

  constructor(
    private petService: PetService,
    private consultaService: ConsultaService,
    private vacinaService: VacinaService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.loadPet();
  }

  loadPet(): void {
    const id = this.route.snapshot.paramMap.get("id");
    if (id) {
      this.petService.getPetById(id).subscribe((pet: Pet) => {
        this.pet = pet;
        this.loadVacinas(id);
        this.loadConsultas(id);
      });
    }
  }

  loadVacinas(petId: string): void {
    this.vacinaService.getVacinasAplicadas(petId).subscribe((vacinas) => {
      this.vacinas = vacinas;
    });
  }

  loadConsultas(petId: string): void {
    this.consultaService.getConsultasPorPet(petId).subscribe((consultas) => {
      this.consultas = consultas;
    });
  }

  getPetEmoji(): string {
    if (!this.pet) return "🐾";
    switch (this.pet.especie) {
      case "cachorro":
        return "🐶";
      case "gato":
        return "🐱";
      case "pássaro":
        return "🦜";
      case "roedor":
        return "🐭";
      default:
        return "🐾";
    }
  }

  goBack(): void {
    this.router.navigate(["/pets"]);
  }
}

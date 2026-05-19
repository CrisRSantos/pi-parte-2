import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from "@angular/forms";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from "@angular/material/core";
import { MatSelectModule } from "@angular/material/select";
import { MatStepperModule } from "@angular/material/stepper";
import { MatIconModule } from "@angular/material/icon";
import { AgendamentoService } from "../../core/services/agendamento.service";
import { PetService } from "../../core/services/pet.service";
import { Router } from "@angular/router";
import { Pet, PetListResponse } from "../../core/models/pet.model";

@Component({
  selector: "app-agendamento",
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatStepperModule,
    MatIconModule,
  ],
  templateUrl: "./agendamento.component.html",
  styleUrls: ["./agendamento.component.scss"],
})
export class AgendamentoComponent implements OnInit {
  petForm!: FormGroup;
  dataHoraForm!: FormGroup;
  consultaForm!: FormGroup;
  pets: Pet[] = [];
  isLoading = false;

  constructor(
    private fb: FormBuilder,
    private agendamentoService: AgendamentoService,
    private petService: PetService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.initializeForms();
    this.loadPets();
  }

  private initializeForms(): void {
    this.petForm = this.fb.group({
      pet_id: ["", Validators.required],
    });

    this.dataHoraForm = this.fb.group({
      data: ["", Validators.required],
      hora: ["", Validators.required],
    });

    this.consultaForm = this.fb.group({
      tipo_servico: ["", Validators.required],
      descricao: [""],
    });
  }

  private loadPets(): void {
    this.petService.getPets(1, 100).subscribe((response: PetListResponse) => {
      this.pets = response.data;
    });
  }

  getSelectedPetName(): string {
    const petId = this.petForm.get("pet_id")?.value;
    const pet = this.pets.find((p) => p.id === petId);
    return pet ? pet.nome : "Não selecionado";
  }

  confirmarAgendamento(): void {
    this.isLoading = true;
    const agendamento = {
      pet_id: this.petForm.get("pet_id")?.value,
      clinica_id: "1",
      data_hora: new Date(
        `${this.dataHoraForm.get("data")?.value}T${this.dataHoraForm.get("hora")?.value}`,
      ),
      tipo_servico: this.consultaForm.get("tipo_servico")?.value,
      descricao: this.consultaForm.get("descricao")?.value,
    };

    this.agendamentoService.criarAgendamento(agendamento).subscribe({
      next: () => {
        alert("Agendamento realizado com sucesso!");
        this.router.navigate(["/dashboard"]);
      },
      error: (error: any) => {
        this.isLoading = false;
        alert("Erro ao agendar consulta");
      },
    });
  }
}

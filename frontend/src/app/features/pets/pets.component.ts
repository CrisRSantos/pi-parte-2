import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from "@angular/forms";
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule, PageEvent } from "@angular/material/paginator";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatCardModule } from "@angular/material/card";
import { MatDialogModule, MatDialog } from "@angular/material/dialog";
import { MatSelectModule } from "@angular/material/select";
import { RouterModule } from "@angular/router";
import { PetService } from "../../core/services/pet.service";
import { Pet, PetListResponse } from "../../core/models/pet.model";

@Component({
  selector: "app-pets",
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatDialogModule,
    MatSelectModule,
    RouterModule,
  ],
  templateUrl: "./pets.component.html",
  styleUrls: ["./pets.component.scss"],
})
export class PetsComponent implements OnInit {
  pets: Pet[] = [];
  displayedColumns: string[] = [
    "nome",
    "especie",
    "raca",
    "idade",
    "peso",
    "acoes",
  ];
  totalItems = 0;
  pageSize = 10;
  currentPage = 0;

  constructor(
    private petService: PetService,
    private dialog: MatDialog,
  ) {}

  ngOnInit(): void {
    this.loadPets();
  }

  loadPets(search?: string): void {
    this.petService
      .getPets(this.currentPage + 1, this.pageSize, search)
      .subscribe({
        next: (response: PetListResponse) => {
          this.pets = response.data;
          this.totalItems = response.total;
        },
        error: (error: any) => {
          alert("Erro ao carregar pets");
        },
      });
  }

  onSearch(event: any): void {
    const searchTerm = event.target.value;
    this.currentPage = 0;
    this.loadPets(searchTerm);
  }

  onPageChange(event: PageEvent): void {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
    this.loadPets();
  }

  openAddPetDialog(): void {
    // Implementar diálogo de adição de pet
  }

  openEditPetDialog(pet: Pet): void {
    // Implementar diálogo de edição de pet
  }

  deletePet(petId: string): void {
    if (confirm("Tem certeza que deseja deletar este pet?")) {
      this.petService.deletePet(petId).subscribe({
        next: () => {
          alert("Pet deletado com sucesso");
          this.loadPets();
        },
        error: (error: any) => {
          alert("Erro ao deletar pet");
        },
      });
    }
  }
}

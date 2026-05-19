import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Pet, CreatePetRequest, PetListResponse } from "../models/pet.model";

@Injectable({
  providedIn: "root",
})
export class PetService {
  private mockPets: Pet[] = [
    {
      id: "1",
      tutor_id: "1",
      nome: "Luna",
      especie: "gato",
      raca: "Siames",
      idade: 3,
      peso: 4.2,
      dataNascimento: new Date(2021, 0, 15),
      sexo: "fêmea",
      cor: "Cinza",
      criadoEm: new Date(2021, 0, 15),
      atualizadoEm: new Date(),
    },
    {
      id: "2",
      tutor_id: "2",
      nome: "Thor",
      especie: "cachorro",
      raca: "Vira-lata",
      idade: 5,
      peso: 16.1,
      dataNascimento: new Date(2019, 5, 10),
      sexo: "macho",
      cor: "Marrom",
      criadoEm: new Date(2019, 5, 10),
      atualizadoEm: new Date(),
    },
    {
      id: "3",
      tutor_id: "3",
      nome: "Mimi",
      especie: "roedor",
      raca: "Hamster",
      idade: 1,
      peso: 0.2,
      dataNascimento: new Date(2025, 0, 20),
      sexo: "fêmea",
      cor: "Branco",
      criadoEm: new Date(2025, 0, 20),
      atualizadoEm: new Date(),
    },
  ];

  constructor() {}

  getPets(
    page: number = 1,
    limit: number = 10,
    search?: string,
  ): Observable<PetListResponse> {
    let filtered = [...this.mockPets];

    if (search) {
      const searchLower = search.toLowerCase();
      filtered = filtered.filter(
        (pet) =>
          pet.nome.toLowerCase().includes(searchLower) ||
          pet.especie.toLowerCase().includes(searchLower) ||
          pet.raca.toLowerCase().includes(searchLower),
      );
    }

    const start = (page - 1) * limit;
    const pagedPets = filtered.slice(start, start + limit);

    return of({
      data: pagedPets,
      total: filtered.length,
      page,
      limit,
    });
  }

  getPetById(id: string): Observable<Pet> {
    const pet = this.mockPets.find((p) => p.id === id);
    return of(pet!);
  }

  createPet(pet: CreatePetRequest): Observable<Pet> {
    const allowedSpecies = ["roedor", "cachorro", "gato", "pássaro", "outro"];
    if (!allowedSpecies.includes(pet.especie)) {
      throw new Error("Invalid species");
    }

    const newPet: Pet = {
      id: String(this.mockPets.length + 1),
      tutor_id: "", // replace with appropriate value
      nome: pet.nome, // add the nome property
      especie: pet.especie as Pet["especie"], // cast the value to the allowed type
      raca: pet.raca, // add the raca property
      idade: pet.idade, // add the idade property
      peso: pet.peso, // add the peso property
      dataNascimento: pet.dataNascimento, // add the dataNascimento property
      cor: pet.cor, // add the cor property
      sexo: pet.sexo as Pet["sexo"], // add the sexo property
      criadoEm: new Date(), // replace with appropriate value
      atualizadoEm: new Date(),
    };
    this.mockPets.push(newPet);
    return of(newPet);
  }

  updatePet(id: string, pet: Partial<Pet>): Observable<Pet> {
    const index = this.mockPets.findIndex((p) => p.id === id);
    if (index >= 0) {
      this.mockPets[index] = { ...this.mockPets[index], ...pet };
    }
    return of(this.mockPets[index]);
  }

  deletePet(id: string): Observable<void> {
    this.mockPets = this.mockPets.filter((p) => p.id !== id);
    return of(void 0);
  }
}

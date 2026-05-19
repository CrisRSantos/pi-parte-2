import { Routes } from "@angular/router";
import { LoginComponent } from "./features/auth/login.component";
import { DashboardComponent } from "./features/dashboard/dashboard.component";
import { PetsComponent } from "./features/pets/pets.component";
import { PetDetailComponent } from "./features/pets/pet-detail.component";
import { AgendamentoComponent } from "./features/agendamento/agendamento.component";
import { LembretesComponent } from "./features/lembretes/lembretes.component";
import { AuthGuard } from "./core/guards/auth.guard";

export const routes: Routes = [
  {
    path: "",
    redirectTo: "/login",
    pathMatch: "full",
  },
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "dashboard",
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "pets",
    component: PetsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "pets/:id",
    component: PetDetailComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "agendamento",
    component: AgendamentoComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "lembretes",
    component: LembretesComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "**",
    redirectTo: "/login",
  },
];

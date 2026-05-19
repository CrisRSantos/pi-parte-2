import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, of, throwError } from "rxjs";
import { delay } from "rxjs/operators";
import {
  LoginRequest,
  LoginResponse,
  User,
  AuthState,
} from "../models/auth.model";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private mockUser = {
    id: "1",
    nome: "Administrador PetCare",
    email: "admin.teste@adm.com",
    tipo_usuario: "admin" as const,
  };

  private mockPassword = "12345";
  private mockToken = "mock-jwt-token-12345";

  private authState = new BehaviorSubject<AuthState>({
    user: this.getUserFromStorage(),
    token: this.getTokenFromStorage(),
    isAuthenticated: !!this.getTokenFromStorage(),
    loading: false,
    error: null,
  });

  public auth$ = this.authState.asObservable();

  constructor() {}

  login(credentials: LoginRequest): Observable<LoginResponse> {
    this.authState.next({
      ...this.authState.value,
      loading: true,
      error: null,
    });

    // Simulate network delay
    return of({
      access_token: this.mockToken,
      user: this.mockUser,
    }).pipe(delay(500));
  }

  logout(): void {
    this.removeTokenFromStorage();
    this.removeUserFromStorage();
    this.authState.next({
      user: null,
      token: null,
      isAuthenticated: false,
      loading: false,
      error: null,
    });
  }

  setAuthState(user: User, token: string): void {
    this.setTokenInStorage(token);
    this.setUserInStorage(user);
    this.authState.next({
      user,
      token,
      isAuthenticated: true,
      loading: false,
      error: null,
    });
  }

  isAuthenticated(): boolean {
    return !!this.getTokenFromStorage();
  }

  getToken(): string | null {
    return this.getTokenFromStorage();
  }

  getUser(): User | null {
    return this.getUserFromStorage();
  }

  private setTokenInStorage(token: string): void {
    localStorage.setItem("petcare_token", token);
  }

  private getTokenFromStorage(): string | null {
    return localStorage.getItem("petcare_token");
  }

  private removeTokenFromStorage(): void {
    localStorage.removeItem("petcare_token");
  }

  private setUserInStorage(user: User): void {
    localStorage.setItem("petcare_user", JSON.stringify(user));
  }

  private getUserFromStorage(): User | null {
    const user = localStorage.getItem("petcare_user");
    return user ? JSON.parse(user) : null;
  }

  private removeUserFromStorage(): void {
    localStorage.removeItem("petcare_user");
  }
}

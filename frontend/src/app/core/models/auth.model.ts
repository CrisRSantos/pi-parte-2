export interface User {
  id: string;
  email: string;
  nome: string;
  tipo_usuario: "admin" | "tutor" | "clinica";
}

export interface LoginRequest {
  email: string;
  senha: string;
}

export interface LoginResponse {
  access_token: string;
  user: User;
}

export interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
}

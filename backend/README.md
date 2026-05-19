# 🐾 PetCare - Backend NestJS

Sistema de Gestão Veterinária - API Backend com NestJS, PostgreSQL, TypeORM e JWT

## 📋 Pré-requisitos

- Node.js 18+ e npm
- PostgreSQL 12+
- Git

## 🚀 Quick Start

### Instalação

```bash
# Navegar até a pasta do projeto
cd backend

# Instalar dependências
npm install

# Copiar arquivo de ambiente
cp .env.example .env

# Editar .env com suas configurações de banco de dados
# Importante: Configure suas credenciais PostgreSQL
```

### Configuração do Banco de Dados

```bash
# Executar migrations para criar as tabelas
npm run typeorm:migrate:run

# (Opcional) Popular banco com dados mockados
npm run db:seed
```

### Iniciar o servidor

```bash
# Modo desenvolvimento com hot-reload
npm run start:dev

# Modo produção
npm run start:prod

# Modo debug
npm run start:debug
```

O servidor será iniciado em `http://localhost:3000/api`

## 🗂️ Estrutura do Projeto

```
backend/
├── src/
│   ├── modules/                  # Módulos da aplicação
│   │   ├── auth/                 # Autenticação e JWT
│   │   │   ├── controllers/      # Controllers do Auth
│   │   │   ├── services/         # Services do Auth
│   │   │   ├── strategies/       # Estratégias JWT/Passport
│   │   │   ├── entities/         # Entidades do banco
│   │   │   ├── dto/              # Data Transfer Objects
│   │   │   └── auth.module.ts    # Módulo do Auth
│   │   ├── pets/                 # Gestão de Pets
│   │   ├── vacinas/              # Gestão de Vacinação
│   │   ├── agendamentos/         # Gestão de Agendamentos
│   │   ├── consultas/            # Gestão de Prontuários
│   │   └── clinicas/             # Gestão de Clínicas
│   ├── config/                   # Configurações da aplicação
│   │   ├── database.config.ts    # Configuração do banco
│   │   └── app.config.ts         # Configurações gerais
│   ├── database/                 # Banco de dados
│   │   ├── migrations/           # Migrations do TypeORM
│   │   ├── seeds/                # Dados mockados
│   │   └── data-source.ts        # DataSource do TypeORM
│   ├── common/                   # Funcionalidades comuns
│   │   ├── filters/              # Exception filters
│   │   ├── interceptors/         # Interceptadores
│   │   └── decorators/           # Decoradores customizados
│   ├── app.module.ts             # Módulo raiz
│   └── main.ts                   # Ponto de entrada
├── .env.example                  # Variáveis de ambiente exemplo
├── tsconfig.json                 # Configuração TypeScript
├── package.json                  # Dependências
└── README.md                     # Este arquivo
```

## 📊 Modelo de Dados

### Entidades Principais

#### 1. **Usuario**

```typescript
{
  id: UUID;
  email: string(unique);
  senha: string(hashed);
  nome: string;
  tipo_usuario: "admin" | "tutor" | "clinica";
  criado_em: Date;
  atualizado_em: Date;
}
```

#### 2. **Pet**

```typescript
{
  id: UUID;
  usuario_id: UUID(FK);
  nome: string;
  especie: "cachorro" | "gato" | "pássaro" | "roedor" | "outro";
  raca: string;
  idade: number;
  peso: decimal;
  data_nascimento: Date;
  cor: string;
  sexo: "macho" | "fêmea";
  criado_em: Date;
  atualizado_em: Date;
}
```

#### 3. **Vacina**

```typescript
{
  id: UUID;
  nome: string;
  descricao: string;
  validade_meses: number;
  criado_em: Date;
  atualizado_em: Date;
}
```

#### 4. **VacinaAplicada**

```typescript
{
  id: UUID;
  pet_id: UUID(FK);
  vacina_id: UUID(FK);
  clinica_id: UUID(FK);
  data_aplicacao: Date;
  data_proxima_dose: Date;
  criado_em: Date;
  atualizado_em: Date;
}
```

#### 5. **Agendamento**

```typescript
{
  id: UUID;
  pet_id: UUID(FK);
  clinica_id: UUID(FK);
  data_hora: DateTime;
  status: "agendado" | "confirmado" | "cancelado" | "concluido";
  tipo_servico: "consulta" | "vacinacao" | "exame" | "cirurgia" | "limpeza";
  descricao: string;
  notas: string;
  criado_em: Date;
  atualizado_em: Date;
}
```

#### 6. **Prontuario**

```typescript
{
  id: UUID;
  pet_id: UUID(FK);
  clinica_id: UUID(FK);
  descricao: string;
  diagnostico: string;
  tratamento: string;
  data_atendimento: Date;
  proxima_consulta: Date;
  profissional: string;
  criado_em: Date;
  atualizado_em: Date;
}
```

#### 7. **Clinica**

```typescript
{
  id: UUID;
  nome: string;
  endereco: string;
  telefone: string;
  email: string;
  cnpj: string;
  criado_em: Date;
  atualizado_em: Date;
}
```

## 🔐 Autenticação

### JWT (JSON Web Token)

O sistema utiliza JWT para autenticação com Passport.js

#### Login

```bash
POST /api/auth/login
Content-Type: application/json

{
  "email": "admin@petcare.com",
  "senha": "123456"
}

Response 200:
{
  "access_token": "eyJhbGciOiJIUzI1NiIs...",
  "user": {
    "id": "uuid",
    "email": "admin@petcare.com",
    "nome": "Admin PetCare",
    "tipo_usuario": "admin"
  }
}
```

#### Registro

```bash
POST /api/auth/register
Content-Type: application/json

{
  "email": "novo@petcare.com",
  "nome": "Novo Usuário",
  "senha": "123456"
}
```

#### Usar Token

Todas as rotas protegidas requerem o token no header:

```
Authorization: Bearer <token_aqui>
```

### AuthGuard

Protege rotas que requerem autenticação:

```typescript
@UseGuards(AuthGuard('jwt'))
```

## 📡 API Endpoints

### Auth

```
POST   /api/auth/login              # Login
POST   /api/auth/register           # Registro
```

### Pets

```
GET    /api/pets                    # Listar pets (paginado)
GET    /api/pets/:id                # Obter pet específico
POST   /api/pets                    # Criar novo pet
PUT    /api/pets/:id                # Atualizar pet
DELETE /api/pets/:id                # Deletar pet
```

### Vacinas

```
GET    /api/vacinas                 # Listar todas as vacinas
GET    /api/vacinas/pet/:id         # Vacinas de um pet específico
POST   /api/vacinas/aplicar         # Aplicar vacina a um pet
GET    /api/vacinas/lembretes       # Lembretes de vacinação
GET    /api/vacinas/lembretes/proximos?dias=30  # Lembretes próximos
```

### Agendamentos

```
GET    /api/agendamentos            # Listar agendamentos (paginado)
GET    /api/agendamentos/:id        # Obter agendamento
GET    /api/agendamentos/pet/:id    # Agendamentos de um pet
POST   /api/agendamentos            # Criar agendamento
PUT    /api/agendamentos/:id        # Atualizar agendamento
DELETE /api/agendamentos/:id        # Cancelar agendamento
GET    /api/agendamentos/horarios/:clinicaId?data=2024-01-01  # Horários disponíveis
```

### Consultas/Prontuários

```
GET    /api/consultas/pet/:id       # Consultas de um pet
GET    /api/consultas/:id           # Obter consulta específica
POST   /api/consultas               # Criar consulta
PUT    /api/consultas/:id           # Atualizar consulta
GET    /api/exames/pet/:id          # Exames de um pet
```

### Clínicas

```
GET    /api/clinicas                # Listar clínicas
POST   /api/clinicas                # Criar clínica
GET    /api/clinicas/:id            # Obter clínica
PUT    /api/clinicas/:id            # Atualizar clínica
DELETE /api/clinicas/:id            # Deletar clínica
```

## ✅ Validação de Dados

DTOs utilizam `class-validator` para validação automática:

```typescript
export class CreatePetDto {
  @IsString()
  @IsNotEmpty()
  nome: string;

  @IsNotEmpty()
  @IsNumber()
  idade: number;

  @IsEmail()
  @IsOptional()
  email?: string;
}
```

## 🛡️ Regras de Negócio

1. **Pets**: Um pet pertence a um usuário específico (relação 1:N)
2. **Agendamentos**: Não permitir agendamento em horários já ocupados
3. **Vacinação**: Validar data de próxima dose baseada em validade da vacina
4. **Segurança**: Usuário só pode acessar dados que pertencem a ele
5. **Autenticação**: Todas as rotas exceto /auth requerem JWT válido

## 🔧 Configuração

### Variáveis de Ambiente (.env)

```env
# Servidor
NODE_ENV=development
APP_PORT=3000
API_PREFIX=/api

# Banco de Dados
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=postgres
DB_NAME=petcare
DB_SSL=false

# JWT
JWT_SECRET=sua-chave-secreta-super-segura-petcare-2024
JWT_EXPIRES_IN=24h

# CORS
CORS_ORIGIN=http://localhost:4200
```

### Conectar PostgreSQL

1. Instalar PostgreSQL
2. Criar banco de dados:

```bash
createdb petcare
```

3. Atualizar `.env` com suas credenciais
4. Executar migrations:

```bash
npm run typeorm:migrate:run
```

## 📚 DTOs Principais

### Auth DTOs

```typescript
LoginDto {
  email: string;
  senha: string;
}

RegisterDto {
  email: string;
  nome: string;
  senha: string;
}
```

### Pet DTOs

```typescript
CreatePetDto {
  nome: string;
  especie: string;
  raca: string;
  idade: number;
  peso: number;
  data_nascimento: Date;
  cor?: string;
  sexo?: string;
}
```

### Agendamento DTOs

```typescript
CreateAgendamentoDto {
  pet_id: string;
  clinica_id: string;
  data_hora: string (ISO);
  tipo_servico: string;
  descricao?: string;
}
```

## 🧪 Testes

```bash
# Executar testes unitários
npm test

# Testes com coverage
npm run test:cov

# Testes em modo watch
npm run test:watch

# Testes e2e
npm run test:e2e
```

## 📝 Lint e Formatação

```bash
# Verificar lint
npm run lint

# Formatar código
npm run format
```

## 🐛 Tratamento de Erros

Erros são retornados no formato:

```json
{
  "statusCode": 400,
  "message": "Descrição do erro",
  "error": "BadRequest"
}
```

### Status Codes Comuns

- `200`: OK
- `201`: Created
- `400`: Bad Request
- `401`: Unauthorized
- `403`: Forbidden
- `404`: Not Found
- `500`: Internal Server Error

## 🚀 Deploy

### Build para Produção

```bash
npm run build
npm run start:prod
```

### Deploy em Docker

```bash
docker build -t petcare-backend .
docker run -p 3000:3000 --env-file .env petcare-backend
```

### Deploy em Servidor

Usar PM2 para gerenciar o processo:

```bash
npm install -g pm2
pm2 start dist/main.js --name petcare-backend
pm2 startup
pm2 save
```

## 📊 Swagger/OpenAPI

Adicionar Swagger para documentação automática:

```bash
npm install @nestjs/swagger swagger-ui-express
```

Implementar no app.module.ts para documentação interactive em `/api/docs`

## 🔗 Integração com Frontend

Frontend espera endpoints em `http://localhost:3000/api`

Configurar CORS se frontend estiver em porta diferente:

```typescript
// app.module.ts
app.enableCors({
  origin: process.env.CORS_ORIGIN,
  credentials: true,
});
```

## 📚 Recursos Adicionais

- [NestJS Documentation](https://docs.nestjs.com)
- [TypeORM Documentation](https://typeorm.io)
- [Passport.js](http://www.passportjs.org)
- [JWT.io](https://jwt.io)
- [PostgreSQL Docs](https://www.postgresql.org/docs)

## 🤝 Troubleshooting

### Erro: "Cannot connect to database"

- Verificar se PostgreSQL está rodando
- Verificar credenciais em `.env`
- Verificar porta (padrão 5432)

### Erro: "JWT secret is not defined"

- Copiar `.env.example` para `.env`
- Preencher `JWT_SECRET`

### Erro: "CORS error"

- Verificar `CORS_ORIGIN` em `.env`
- Frontend deve estar na URL configurada

## 📄 Licença

MIT

## 🤝 Contribuindo

Projeto desenvolvido como Projeto Integrador (PI) 2ª Parte - Senac

---

**Desenvolvido com ❤️ para o PetCare**

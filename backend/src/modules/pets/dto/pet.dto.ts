import { IsNotEmpty, IsString, IsOptional } from "class-validator";

export class CreatePetDto {
  @IsString()
  @IsNotEmpty()
  nome: string;

  @IsString()
  @IsNotEmpty()
  especie: string;

  @IsString()
  @IsNotEmpty()
  raca: string;

  @IsNotEmpty()
  idade: number;

  @IsNotEmpty()
  peso: number;

  @IsNotEmpty()
  data_nascimento: Date;

  @IsString()
  @IsOptional()
  cor?: string;

  @IsString()
  @IsOptional()
  sexo?: string;
}

export class UpdatePetDto {
  @IsString()
  @IsOptional()
  nome?: string;

  @IsString()
  @IsOptional()
  especie?: string;

  @IsString()
  @IsOptional()
  raca?: string;

  @IsOptional()
  idade?: number;

  @IsOptional()
  peso?: number;

  @IsString()
  @IsOptional()
  cor?: string;

  @IsString()
  @IsOptional()
  sexo?: string;
}

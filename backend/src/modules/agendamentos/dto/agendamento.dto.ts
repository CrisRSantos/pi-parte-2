import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsDateString,
} from "class-validator";

export class CreateAgendamentoDto {
  @IsString()
  @IsNotEmpty()
  pet_id: string;

  @IsString()
  @IsNotEmpty()
  clinica_id: string;

  @IsDateString()
  @IsNotEmpty()
  data_hora: string;

  @IsString()
  @IsNotEmpty()
  tipo_servico: string;

  @IsString()
  @IsOptional()
  descricao?: string;

  @IsString()
  @IsOptional()
  notas?: string;
}

export class UpdateAgendamentoDto {
  @IsString()
  @IsOptional()
  status?: string;

  @IsString()
  @IsOptional()
  descricao?: string;

  @IsString()
  @IsOptional()
  notas?: string;
}

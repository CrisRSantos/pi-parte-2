import {
  IsString,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsDateString,
} from "class-validator";

export class CreateVacinaDto {
  @IsString()
  @IsNotEmpty()
  nome: string;

  @IsString()
  @IsOptional()
  descricao?: string;

  @IsNumber()
  @IsNotEmpty()
  validade_meses: number;
}

export class AplicarVacinaDto {
  @IsString()
  @IsNotEmpty()
  pet_id: string;

  @IsString()
  @IsNotEmpty()
  vacina_id: string;

  @IsString()
  @IsNotEmpty()
  clinica_id: string;

  @IsDateString()
  @IsNotEmpty()
  data_aplicacao: string;

  @IsDateString()
  @IsNotEmpty()
  data_proxima_dose: string;
}

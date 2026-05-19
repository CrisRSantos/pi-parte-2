export declare class CreatePetDto {
    nome: string;
    especie: string;
    raca: string;
    idade: number;
    peso: number;
    data_nascimento: Date;
    cor?: string;
    sexo?: string;
}
export declare class UpdatePetDto {
    nome?: string;
    especie?: string;
    raca?: string;
    idade?: number;
    peso?: number;
    cor?: string;
    sexo?: string;
}

import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { Pet } from "../../pets/entities/pet.entity";
import { Vacina } from "./vacina.entity";
import { Clinica } from "../../clinicas/entities/clinica.entity";

@Entity("vacinas_aplicadas")
export class VacinaAplicada {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "uuid" })
  pet_id: string;

  @Column({ type: "uuid" })
  vacina_id: string;

  @Column({ type: "uuid" })
  clinica_id: string;

  @Column({ type: "date" })
  data_aplicacao: Date;

  @Column({ type: "date" })
  data_proxima_dose: Date;

  @CreateDateColumn()
  criado_em: Date;

  @UpdateDateColumn()
  atualizado_em: Date;

  @ManyToOne(() => Pet, (pet) => pet.vacinas, { onDelete: "CASCADE" })
  @JoinColumn({ name: "pet_id" })
  pet: Pet;

  @ManyToOne(() => Vacina, (vacina) => vacina.vacinasAplicadas, {
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "vacina_id" })
  vacina: Vacina;

  @ManyToOne(() => Clinica, { onDelete: "CASCADE" })
  @JoinColumn({ name: "clinica_id" })
  clinica: Clinica;
}

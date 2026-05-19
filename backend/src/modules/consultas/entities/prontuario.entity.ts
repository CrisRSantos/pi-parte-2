import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from "typeorm";
import { Pet } from "../../pets/entities/pet.entity";
import { Clinica } from "../../clinicas/entities/clinica.entity";
import { Medicacao } from "./medicacao.entity";

@Entity("prontuarios")
export class Prontuario {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "uuid" })
  pet_id: string;

  @Column({ type: "uuid" })
  clinica_id: string;

  @Column({ type: "text", nullable: true })
  descricao: string;

  @Column({ type: "text", nullable: true })
  diagnostico: string;

  @Column({ type: "text", nullable: true })
  tratamento: string;

  @Column({ type: "date" })
  data_atendimento: Date;

  @Column({ type: "date", nullable: true })
  proxima_consulta: Date;

  @Column({ type: "varchar", length: 255, nullable: true })
  profissional: string;

  @CreateDateColumn()
  criado_em: Date;

  @UpdateDateColumn()
  atualizado_em: Date;

  @ManyToOne(() => Pet, (pet) => pet.prontuarios, { onDelete: "CASCADE" })
  @JoinColumn({ name: "pet_id" })
  pet: Pet;

  @ManyToOne(() => Clinica, { onDelete: "CASCADE" })
  @JoinColumn({ name: "clinica_id" })
  clinica: Clinica;

  @OneToMany(() => Medicacao, (medicacao) => medicacao.prontuario)
  medicacoes: Medicacao[];
}

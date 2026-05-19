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
import { Clinica } from "../../clinicas/entities/clinica.entity";

@Entity("agendamentos")
export class Agendamento {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "uuid" })
  pet_id: string;

  @Column({ type: "uuid" })
  clinica_id: string;

  @Column({ type: "timestamp" })
  data_hora: Date;

  @Column({
    type: "enum",
    enum: ["agendado", "confirmado", "cancelado", "concluido"],
    default: "agendado",
  })
  status: string;

  @Column({
    type: "enum",
    enum: ["consulta", "vacinacao", "exame", "cirurgia", "limpeza"],
    default: "consulta",
  })
  tipo_servico: string;

  @Column({ type: "text", nullable: true })
  descricao: string;

  @Column({ type: "text", nullable: true })
  notas: string;

  @CreateDateColumn()
  criado_em: Date;

  @UpdateDateColumn()
  atualizado_em: Date;

  @ManyToOne(() => Pet, (pet) => pet.agendamentos, { onDelete: "CASCADE" })
  @JoinColumn({ name: "pet_id" })
  pet: Pet;

  @ManyToOne(() => Clinica, (clinica) => clinica.agendamentos, {
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "clinica_id" })
  clinica: Clinica;
}

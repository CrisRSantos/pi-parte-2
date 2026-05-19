import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from "typeorm";
import { Agendamento } from "../../agendamentos/entities/agendamento.entity";

@Entity("clinicas")
export class Clinica {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "varchar", length: 255 })
  nome: string;

  @Column({ type: "text", nullable: true })
  endereco: string;

  @Column({ type: "varchar", length: 20, nullable: true })
  telefone: string;

  @Column({ type: "varchar", length: 255, nullable: true })
  email: string;

  @Column({ type: "varchar", length: 20, nullable: true })
  cnpj: string;

  @CreateDateColumn()
  criado_em: Date;

  @UpdateDateColumn()
  atualizado_em: Date;

  @OneToMany(() => Agendamento, (agendamento) => agendamento.clinica)
  agendamentos: Agendamento[];
}

import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { Prontuario } from "./prontuario.entity";

@Entity("medicacoes")
export class Medicacao {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "uuid" })
  prontuario_id: string;

  @Column({ type: "varchar", length: 255 })
  nome: string;

  @Column({ type: "varchar", length: 255 })
  dosagem: string;

  @Column({ type: "varchar", length: 255 })
  frequencia: string;

  @Column({ type: "int" })
  duracao_dias: number;

  @Column({ type: "date" })
  data_inicio: Date;

  @Column({ type: "date", nullable: true })
  data_fim: Date;

  @CreateDateColumn()
  criado_em: Date;

  @UpdateDateColumn()
  atualizado_em: Date;

  @ManyToOne(() => Prontuario, (prontuario) => prontuario.medicacoes, {
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "prontuario_id" })
  prontuario: Prontuario;
}

import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from "typeorm";
import { VacinaAplicada } from "./vacina-aplicada.entity";

@Entity("vacinas")
export class Vacina {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "varchar", length: 255 })
  nome: string;

  @Column({ type: "text", nullable: true })
  descricao: string;

  @Column({ type: "int" })
  validade_meses: number;

  @CreateDateColumn()
  criado_em: Date;

  @UpdateDateColumn()
  atualizado_em: Date;

  @OneToMany(() => VacinaAplicada, (vacinaAplicada) => vacinaAplicada.vacina)
  vacinasAplicadas: VacinaAplicada[];
}

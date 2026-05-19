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
import { Usuario } from "../../auth/entities/usuario.entity";
import { VacinaAplicada } from "../../vacinas/entities/vacina-aplicada.entity";
import { Agendamento } from "../../agendamentos/entities/agendamento.entity";
import { Prontuario } from "../../consultas/entities/prontuario.entity";

@Entity("pets")
export class Pet {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "uuid" })
  usuario_id: string;

  @Column({ type: "varchar", length: 255 })
  nome: string;

  @Column({
    type: "enum",
    enum: ["cachorro", "gato", "pássaro", "roedor", "outro"],
    default: "cachorro",
  })
  especie: string;

  @Column({ type: "varchar", length: 255 })
  raca: string;

  @Column({ type: "int" })
  idade: number;

  @Column({ type: "decimal", precision: 5, scale: 2 })
  peso: number;

  @Column({ type: "date" })
  data_nascimento: Date;

  @Column({ type: "varchar", length: 50, nullable: true })
  cor: string;

  @Column({ type: "enum", enum: ["macho", "fêmea"], nullable: true })
  sexo: string;

  @CreateDateColumn()
  criado_em: Date;

  @UpdateDateColumn()
  atualizado_em: Date;

  @ManyToOne(() => Usuario, (usuario) => usuario.pets, { onDelete: "CASCADE" })
  @JoinColumn({ name: "usuario_id" })
  usuario: Usuario;

  @OneToMany(() => VacinaAplicada, (vacinaAplicada) => vacinaAplicada.pet)
  vacinas: VacinaAplicada[];

  @OneToMany(() => Agendamento, (agendamento) => agendamento.pet)
  agendamentos: Agendamento[];

  @OneToMany(() => Prontuario, (prontuario) => prontuario.pet)
  prontuarios: Prontuario[];
}

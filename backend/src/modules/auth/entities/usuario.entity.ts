import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from "typeorm";
import { Pet } from "../../pets/entities/pet.entity";

@Entity("usuarios")
export class Usuario {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "varchar", length: 255, unique: true })
  email: string;

  @Column({ type: "varchar", length: 255 })
  senha: string;

  @Column({ type: "varchar", length: 255 })
  nome: string;

  @Column({
    type: "enum",
    enum: ["admin", "tutor", "clinica"],
    default: "tutor",
  })
  tipo_usuario: string;

  @CreateDateColumn()
  criado_em: Date;

  @UpdateDateColumn()
  atualizado_em: Date;

  @OneToMany(() => Pet, (pet) => pet.usuario)
  pets: Pet[];
}

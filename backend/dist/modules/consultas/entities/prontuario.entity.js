"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Prontuario = void 0;
const typeorm_1 = require("typeorm");
const pet_entity_1 = require("../../pets/entities/pet.entity");
const clinica_entity_1 = require("../../clinicas/entities/clinica.entity");
const medicacao_entity_1 = require("./medicacao.entity");
let Prontuario = class Prontuario {
};
exports.Prontuario = Prontuario;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], Prontuario.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "uuid" }),
    __metadata("design:type", String)
], Prontuario.prototype, "pet_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "uuid" }),
    __metadata("design:type", String)
], Prontuario.prototype, "clinica_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "text", nullable: true }),
    __metadata("design:type", String)
], Prontuario.prototype, "descricao", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "text", nullable: true }),
    __metadata("design:type", String)
], Prontuario.prototype, "diagnostico", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "text", nullable: true }),
    __metadata("design:type", String)
], Prontuario.prototype, "tratamento", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "date" }),
    __metadata("design:type", Date)
], Prontuario.prototype, "data_atendimento", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "date", nullable: true }),
    __metadata("design:type", Date)
], Prontuario.prototype, "proxima_consulta", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 255, nullable: true }),
    __metadata("design:type", String)
], Prontuario.prototype, "profissional", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Prontuario.prototype, "criado_em", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Prontuario.prototype, "atualizado_em", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => pet_entity_1.Pet, (pet) => pet.prontuarios, { onDelete: "CASCADE" }),
    (0, typeorm_1.JoinColumn)({ name: "pet_id" }),
    __metadata("design:type", pet_entity_1.Pet)
], Prontuario.prototype, "pet", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => clinica_entity_1.Clinica, { onDelete: "CASCADE" }),
    (0, typeorm_1.JoinColumn)({ name: "clinica_id" }),
    __metadata("design:type", clinica_entity_1.Clinica)
], Prontuario.prototype, "clinica", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => medicacao_entity_1.Medicacao, (medicacao) => medicacao.prontuario),
    __metadata("design:type", Array)
], Prontuario.prototype, "medicacoes", void 0);
exports.Prontuario = Prontuario = __decorate([
    (0, typeorm_1.Entity)("prontuarios")
], Prontuario);
//# sourceMappingURL=prontuario.entity.js.map
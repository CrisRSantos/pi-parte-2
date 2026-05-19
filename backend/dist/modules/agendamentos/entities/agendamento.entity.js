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
exports.Agendamento = void 0;
const typeorm_1 = require("typeorm");
const pet_entity_1 = require("../../pets/entities/pet.entity");
const clinica_entity_1 = require("../../clinicas/entities/clinica.entity");
let Agendamento = class Agendamento {
};
exports.Agendamento = Agendamento;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], Agendamento.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "uuid" }),
    __metadata("design:type", String)
], Agendamento.prototype, "pet_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "uuid" }),
    __metadata("design:type", String)
], Agendamento.prototype, "clinica_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "timestamp" }),
    __metadata("design:type", Date)
], Agendamento.prototype, "data_hora", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "enum",
        enum: ["agendado", "confirmado", "cancelado", "concluido"],
        default: "agendado",
    }),
    __metadata("design:type", String)
], Agendamento.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "enum",
        enum: ["consulta", "vacinacao", "exame", "cirurgia", "limpeza"],
        default: "consulta",
    }),
    __metadata("design:type", String)
], Agendamento.prototype, "tipo_servico", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "text", nullable: true }),
    __metadata("design:type", String)
], Agendamento.prototype, "descricao", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "text", nullable: true }),
    __metadata("design:type", String)
], Agendamento.prototype, "notas", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Agendamento.prototype, "criado_em", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Agendamento.prototype, "atualizado_em", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => pet_entity_1.Pet, (pet) => pet.agendamentos, { onDelete: "CASCADE" }),
    (0, typeorm_1.JoinColumn)({ name: "pet_id" }),
    __metadata("design:type", pet_entity_1.Pet)
], Agendamento.prototype, "pet", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => clinica_entity_1.Clinica, (clinica) => clinica.agendamentos, {
        onDelete: "CASCADE",
    }),
    (0, typeorm_1.JoinColumn)({ name: "clinica_id" }),
    __metadata("design:type", clinica_entity_1.Clinica)
], Agendamento.prototype, "clinica", void 0);
exports.Agendamento = Agendamento = __decorate([
    (0, typeorm_1.Entity)("agendamentos")
], Agendamento);
//# sourceMappingURL=agendamento.entity.js.map
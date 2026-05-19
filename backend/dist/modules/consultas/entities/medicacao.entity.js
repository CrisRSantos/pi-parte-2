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
exports.Medicacao = void 0;
const typeorm_1 = require("typeorm");
const prontuario_entity_1 = require("./prontuario.entity");
let Medicacao = class Medicacao {
};
exports.Medicacao = Medicacao;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], Medicacao.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "uuid" }),
    __metadata("design:type", String)
], Medicacao.prototype, "prontuario_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 255 }),
    __metadata("design:type", String)
], Medicacao.prototype, "nome", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 255 }),
    __metadata("design:type", String)
], Medicacao.prototype, "dosagem", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 255 }),
    __metadata("design:type", String)
], Medicacao.prototype, "frequencia", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "int" }),
    __metadata("design:type", Number)
], Medicacao.prototype, "duracao_dias", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "date" }),
    __metadata("design:type", Date)
], Medicacao.prototype, "data_inicio", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "date", nullable: true }),
    __metadata("design:type", Date)
], Medicacao.prototype, "data_fim", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Medicacao.prototype, "criado_em", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Medicacao.prototype, "atualizado_em", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => prontuario_entity_1.Prontuario, (prontuario) => prontuario.medicacoes, {
        onDelete: "CASCADE",
    }),
    (0, typeorm_1.JoinColumn)({ name: "prontuario_id" }),
    __metadata("design:type", prontuario_entity_1.Prontuario)
], Medicacao.prototype, "prontuario", void 0);
exports.Medicacao = Medicacao = __decorate([
    (0, typeorm_1.Entity)("medicacoes")
], Medicacao);
//# sourceMappingURL=medicacao.entity.js.map
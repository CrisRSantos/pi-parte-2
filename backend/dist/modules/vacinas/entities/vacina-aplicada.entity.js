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
exports.VacinaAplicada = void 0;
const typeorm_1 = require("typeorm");
const pet_entity_1 = require("../../pets/entities/pet.entity");
const vacina_entity_1 = require("./vacina.entity");
const clinica_entity_1 = require("../../clinicas/entities/clinica.entity");
let VacinaAplicada = class VacinaAplicada {
};
exports.VacinaAplicada = VacinaAplicada;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], VacinaAplicada.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "uuid" }),
    __metadata("design:type", String)
], VacinaAplicada.prototype, "pet_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "uuid" }),
    __metadata("design:type", String)
], VacinaAplicada.prototype, "vacina_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "uuid" }),
    __metadata("design:type", String)
], VacinaAplicada.prototype, "clinica_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "date" }),
    __metadata("design:type", Date)
], VacinaAplicada.prototype, "data_aplicacao", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "date" }),
    __metadata("design:type", Date)
], VacinaAplicada.prototype, "data_proxima_dose", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], VacinaAplicada.prototype, "criado_em", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], VacinaAplicada.prototype, "atualizado_em", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => pet_entity_1.Pet, (pet) => pet.vacinas, { onDelete: "CASCADE" }),
    (0, typeorm_1.JoinColumn)({ name: "pet_id" }),
    __metadata("design:type", pet_entity_1.Pet)
], VacinaAplicada.prototype, "pet", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => vacina_entity_1.Vacina, (vacina) => vacina.vacinasAplicadas, {
        onDelete: "CASCADE",
    }),
    (0, typeorm_1.JoinColumn)({ name: "vacina_id" }),
    __metadata("design:type", vacina_entity_1.Vacina)
], VacinaAplicada.prototype, "vacina", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => clinica_entity_1.Clinica, { onDelete: "CASCADE" }),
    (0, typeorm_1.JoinColumn)({ name: "clinica_id" }),
    __metadata("design:type", clinica_entity_1.Clinica)
], VacinaAplicada.prototype, "clinica", void 0);
exports.VacinaAplicada = VacinaAplicada = __decorate([
    (0, typeorm_1.Entity)("vacinas_aplicadas")
], VacinaAplicada);
//# sourceMappingURL=vacina-aplicada.entity.js.map
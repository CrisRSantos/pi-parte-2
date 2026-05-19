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
exports.Vacina = void 0;
const typeorm_1 = require("typeorm");
const vacina_aplicada_entity_1 = require("./vacina-aplicada.entity");
let Vacina = class Vacina {
};
exports.Vacina = Vacina;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], Vacina.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 255 }),
    __metadata("design:type", String)
], Vacina.prototype, "nome", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "text", nullable: true }),
    __metadata("design:type", String)
], Vacina.prototype, "descricao", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "int" }),
    __metadata("design:type", Number)
], Vacina.prototype, "validade_meses", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Vacina.prototype, "criado_em", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Vacina.prototype, "atualizado_em", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => vacina_aplicada_entity_1.VacinaAplicada, (vacinaAplicada) => vacinaAplicada.vacina),
    __metadata("design:type", Array)
], Vacina.prototype, "vacinasAplicadas", void 0);
exports.Vacina = Vacina = __decorate([
    (0, typeorm_1.Entity)("vacinas")
], Vacina);
//# sourceMappingURL=vacina.entity.js.map
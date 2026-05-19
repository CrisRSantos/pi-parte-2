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
exports.Usuario = void 0;
const typeorm_1 = require("typeorm");
const pet_entity_1 = require("../../pets/entities/pet.entity");
let Usuario = class Usuario {
};
exports.Usuario = Usuario;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], Usuario.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 255, unique: true }),
    __metadata("design:type", String)
], Usuario.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 255 }),
    __metadata("design:type", String)
], Usuario.prototype, "senha", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 255 }),
    __metadata("design:type", String)
], Usuario.prototype, "nome", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "enum",
        enum: ["admin", "tutor", "clinica"],
        default: "tutor",
    }),
    __metadata("design:type", String)
], Usuario.prototype, "tipo_usuario", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Usuario.prototype, "criado_em", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Usuario.prototype, "atualizado_em", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => pet_entity_1.Pet, (pet) => pet.usuario),
    __metadata("design:type", Array)
], Usuario.prototype, "pets", void 0);
exports.Usuario = Usuario = __decorate([
    (0, typeorm_1.Entity)("usuarios")
], Usuario);
//# sourceMappingURL=usuario.entity.js.map
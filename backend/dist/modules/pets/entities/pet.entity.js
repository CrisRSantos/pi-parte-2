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
exports.Pet = void 0;
const typeorm_1 = require("typeorm");
const usuario_entity_1 = require("../../auth/entities/usuario.entity");
const vacina_aplicada_entity_1 = require("../../vacinas/entities/vacina-aplicada.entity");
const agendamento_entity_1 = require("../../agendamentos/entities/agendamento.entity");
const prontuario_entity_1 = require("../../consultas/entities/prontuario.entity");
let Pet = class Pet {
};
exports.Pet = Pet;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], Pet.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "uuid" }),
    __metadata("design:type", String)
], Pet.prototype, "usuario_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 255 }),
    __metadata("design:type", String)
], Pet.prototype, "nome", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "enum",
        enum: ["cachorro", "gato", "pássaro", "roedor", "outro"],
        default: "cachorro",
    }),
    __metadata("design:type", String)
], Pet.prototype, "especie", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 255 }),
    __metadata("design:type", String)
], Pet.prototype, "raca", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "int" }),
    __metadata("design:type", Number)
], Pet.prototype, "idade", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "decimal", precision: 5, scale: 2 }),
    __metadata("design:type", Number)
], Pet.prototype, "peso", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "date" }),
    __metadata("design:type", Date)
], Pet.prototype, "data_nascimento", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 50, nullable: true }),
    __metadata("design:type", String)
], Pet.prototype, "cor", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "enum", enum: ["macho", "fêmea"], nullable: true }),
    __metadata("design:type", String)
], Pet.prototype, "sexo", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Pet.prototype, "criado_em", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Pet.prototype, "atualizado_em", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => usuario_entity_1.Usuario, (usuario) => usuario.pets, { onDelete: "CASCADE" }),
    (0, typeorm_1.JoinColumn)({ name: "usuario_id" }),
    __metadata("design:type", usuario_entity_1.Usuario)
], Pet.prototype, "usuario", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => vacina_aplicada_entity_1.VacinaAplicada, (vacinaAplicada) => vacinaAplicada.pet),
    __metadata("design:type", Array)
], Pet.prototype, "vacinas", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => agendamento_entity_1.Agendamento, (agendamento) => agendamento.pet),
    __metadata("design:type", Array)
], Pet.prototype, "agendamentos", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => prontuario_entity_1.Prontuario, (prontuario) => prontuario.pet),
    __metadata("design:type", Array)
], Pet.prototype, "prontuarios", void 0);
exports.Pet = Pet = __decorate([
    (0, typeorm_1.Entity)("pets")
], Pet);
//# sourceMappingURL=pet.entity.js.map
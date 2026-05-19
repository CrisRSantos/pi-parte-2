"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PetsModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const pet_entity_1 = require("./entities/pet.entity");
const pets_controller_1 = require("./pets.controller");
const pet_service_1 = require("./services/pet.service");
let PetsModule = class PetsModule {
};
exports.PetsModule = PetsModule;
exports.PetsModule = PetsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([pet_entity_1.Pet])],
        providers: [pet_service_1.PetService],
        controllers: [pets_controller_1.PetController],
    })
], PetsModule);
//# sourceMappingURL=pets.module.js.map
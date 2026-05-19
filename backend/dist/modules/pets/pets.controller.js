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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PetController = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const pet_service_1 = require("./services/pet.service");
const pet_dto_1 = require("./dto/pet.dto");
let PetController = class PetController {
    constructor(petService) {
        this.petService = petService;
    }
    findAll(req, page = 1, limit = 10, search) {
        return this.petService.findAll(req.user.id, page, limit, search);
    }
    findOne(id, req) {
        return this.petService.findOne(id, req.user.id);
    }
    create(createPetDto, req) {
        return this.petService.create(createPetDto, req.user.id);
    }
    update(id, updatePetDto, req) {
        return this.petService.update(id, updatePetDto, req.user.id);
    }
    remove(id, req) {
        return this.petService.remove(id, req.user.id);
    }
};
exports.PetController = PetController;
__decorate([
    (0, common_1.Get)(),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)("jwt")),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Query)("page")),
    __param(2, (0, common_1.Query)("limit")),
    __param(3, (0, common_1.Query)("search")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number, Number, String]),
    __metadata("design:returntype", void 0)
], PetController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(":id"),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)("jwt")),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], PetController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)("jwt")),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pet_dto_1.CreatePetDto, Object]),
    __metadata("design:returntype", void 0)
], PetController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(":id"),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)("jwt")),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, pet_dto_1.UpdatePetDto, Object]),
    __metadata("design:returntype", void 0)
], PetController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(":id"),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)("jwt")),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], PetController.prototype, "remove", null);
exports.PetController = PetController = __decorate([
    (0, common_1.Controller)("pets"),
    __metadata("design:paramtypes", [pet_service_1.PetService])
], PetController);
//# sourceMappingURL=pets.controller.js.map
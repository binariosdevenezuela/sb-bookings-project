"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusinessesService = void 0;
const common_1 = require("@nestjs/common");
let BusinessesService = class BusinessesService {
    create(createBusinessDto) {
        return 'This action adds a new business';
    }
    findAll() {
        return `This action returns all businesses`;
    }
    findOne(id) {
        return `This action returns a #${id} business`;
    }
    update(id, updateBusinessDto) {
        return `This action updates a #${id} business`;
    }
    remove(id) {
        return `This action removes a #${id} business`;
    }
};
exports.BusinessesService = BusinessesService;
exports.BusinessesService = BusinessesService = __decorate([
    (0, common_1.Injectable)()
], BusinessesService);
//# sourceMappingURL=businesses.service.js.map
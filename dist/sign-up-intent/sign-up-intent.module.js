"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignUpIntentModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const sign_up_intent_service_1 = require("./sign-up-intent.service");
const sign_up_intent_controller_1 = require("./sign-up-intent.controller");
const sign_up_intent_entity_1 = require("./entities/sign-up-intent.entity");
const users_service_1 = require("../users/users.service");
const user_entity_1 = require("../users/entities/user.entity");
let SignUpIntentModule = class SignUpIntentModule {
};
exports.SignUpIntentModule = SignUpIntentModule;
exports.SignUpIntentModule = SignUpIntentModule = __decorate([
    (0, common_1.Module)({
        controllers: [sign_up_intent_controller_1.SignUpIntentController],
        providers: [sign_up_intent_service_1.SignUpIntentService, users_service_1.UsersService],
        imports: [typeorm_1.TypeOrmModule.forFeature([sign_up_intent_entity_1.SignUpIntent, user_entity_1.User])],
    })
], SignUpIntentModule);
//# sourceMappingURL=sign-up-intent.module.js.map
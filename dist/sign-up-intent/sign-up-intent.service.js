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
exports.SignUpIntentService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const bcrypt = require("bcrypt");
const sign_up_intent_entity_1 = require("../sign-up-intent/entities/sign-up-intent.entity");
const users_service_1 = require("../users/users.service");
const user_entity_1 = require("../users/entities/user.entity");
let SignUpIntentService = class SignUpIntentService {
    constructor(signUpIntentRepository, userRepository, usersService) {
        this.signUpIntentRepository = signUpIntentRepository;
        this.userRepository = userRepository;
        this.usersService = usersService;
    }
    async create(signUpDto) {
        const signUpIntent = await this.userRepository.findOne({
            where: { email: signUpDto.email },
        });
        if (signUpIntent) {
            throw new common_1.ConflictException('There is an user with this email.');
        }
        else {
            const newSignUpIntent = new sign_up_intent_entity_1.SignUpIntent();
            signUpDto.password = await bcrypt.hash(signUpDto.password, 10);
            newSignUpIntent.object = signUpDto;
            newSignUpIntent.code = this.generateRandomSixDigitNumber();
            await this.signUpIntentRepository.save(newSignUpIntent);
        }
    }
    async complete(id, code) {
        const signUpIntent = await this.signUpIntentRepository.findOne({
            where: { id, code },
        });
        if (signUpIntent) {
            const user = await this.userRepository.findOne({ where: { email: signUpIntent.object.email } });
            if (user) {
                throw new common_1.ConflictException('User exists already.');
            }
            return this.usersService.signup(signUpIntent);
        }
        else {
            throw new common_1.BadRequestException('No valid.');
        }
    }
    findOne(id) {
        return `This action returns a #${id} signUpIntent`;
    }
    update(id, updateSignUpIntentDto) {
        return `This action updates a #${id} signUpIntent`;
    }
    remove(id) {
        return `This action removes a #${id} signUpIntent`;
    }
    generateRandomSixDigitNumber() {
        return Math.floor(100000 + Math.random() * 900000)
            .toString()
            .padStart(6, '0');
    }
};
exports.SignUpIntentService = SignUpIntentService;
exports.SignUpIntentService = SignUpIntentService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(sign_up_intent_entity_1.SignUpIntent)),
    __param(1, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        users_service_1.UsersService])
], SignUpIntentService);
//# sourceMappingURL=sign-up-intent.service.js.map
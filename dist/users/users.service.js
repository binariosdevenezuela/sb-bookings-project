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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const typeorm_3 = require("typeorm");
const user_entity_1 = require("./entities/user.entity");
const enums_1 = require("../common/enums");
let UsersService = class UsersService {
    constructor(usersRepository, dataSource) {
        this.usersRepository = usersRepository;
        this.dataSource = dataSource;
        this.saltRounds = 10;
    }
    async signup(signUpIntent) {
        const { email } = signUpIntent.object;
        const queryRunner = this.dataSource.createQueryRunner();
        await queryRunner.connect();
        try {
            await queryRunner.startTransaction();
            const newUser = new user_entity_1.User();
            newUser.email = email;
            newUser.role = enums_1.UserRoleEnum.Owner;
            newUser.password = signUpIntent.object.password;
            const savedNewUser = await queryRunner.manager.save(user_entity_1.User, newUser);
            delete savedNewUser.password;
            await queryRunner.manager.remove(signUpIntent);
            await queryRunner.commitTransaction();
            return savedNewUser;
        }
        catch (error) {
            await queryRunner.rollbackTransaction();
            throw error;
        }
        finally {
            await queryRunner.release();
        }
    }
    async add() { }
    async findByUsername(email) {
        return await this.usersRepository.findOne({ where: { email } });
    }
    async findAll() {
        return await this.usersRepository.find();
    }
    async findOne(user_id) {
        return await this.usersRepository.findOne({ where: { id: user_id } });
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_3.DataSource])
], UsersService);
//# sourceMappingURL=users.service.js.map
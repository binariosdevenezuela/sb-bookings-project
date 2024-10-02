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
const bcrypt = require("bcrypt");
const user_entity_1 = require("./entities/user.entity");
const business_entity_1 = require("../businesses/entities/business.entity");
const business_location_entity_1 = require("../business_locations/entities/business_location.entity");
let UsersService = class UsersService {
    constructor(usersRepository, dataSource) {
        this.usersRepository = usersRepository;
        this.dataSource = dataSource;
        this.saltRounds = 10;
    }
    async signup(signUpDto) {
        const { user: userDto, business: businessDto, business_location: businessLocationDto } = signUpDto;
        const queryRunner = this.dataSource.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            const newBusiness = new business_entity_1.Business();
            Object.assign(newBusiness, businessDto);
            const savedBusiness = await queryRunner.manager.save(newBusiness);
            const newBusinessLocation = new business_location_entity_1.BusinessLocation();
            Object.assign(newBusinessLocation, businessLocationDto);
            newBusinessLocation.business = savedBusiness;
            await queryRunner.manager.save(newBusinessLocation);
            const newUser = new user_entity_1.User();
            Object.assign(newUser, userDto);
            newUser.businessLocation = newBusinessLocation;
            const savedUser = this.create(userDto, queryRunner);
            await queryRunner.commitTransaction();
            return savedUser;
        }
        catch (error) {
            await queryRunner.rollbackTransaction();
            throw error;
        }
        finally {
            await queryRunner.release();
        }
    }
    async add() {
    }
    async create(createUserDto, queryRunner) {
        const { email } = createUserDto;
        const userExists = await this.usersRepository.findOne({ where: { email } });
        if (userExists) {
            throw new common_1.ConflictException('Username already exists');
        }
        const newUser = new user_entity_1.User;
        Object.assign(newUser, createUserDto);
        newUser.password = await bcrypt.hash(newUser.password, this.saltRounds);
        return await queryRunner.manager.save(newUser);
    }
    async findByUsername(email) {
        return await this.usersRepository.findOne({ where: { email } });
    }
    async findAll() {
        return await this.usersRepository.find();
    }
    async findOne(user_id) {
        return await this.usersRepository.findOne({ where: { user_id } });
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
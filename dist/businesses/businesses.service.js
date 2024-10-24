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
exports.BusinessesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const business_entity_1 = require("./entities/business.entity");
const business_location_entity_1 = require("../business_locations/entities/business_location.entity");
const business_hour_entity_1 = require("../business_hours/entities/business_hour.entity");
const enums_1 = require("../common/enums");
let BusinessesService = class BusinessesService {
    constructor(dataSource, businessRepository) {
        this.dataSource = dataSource;
        this.businessRepository = businessRepository;
    }
    async insert(user, createBusinessDto) {
        const queryRunner = this.dataSource.createQueryRunner();
        await queryRunner.connect();
        try {
            await queryRunner.startTransaction();
            const newBusiness = queryRunner.manager.create(business_entity_1.Business, createBusinessDto);
            newBusiness.user = user;
            const newLocation = queryRunner.manager.create(business_location_entity_1.BusinessLocation, createBusinessDto.location);
            const mondayBusinessHour = queryRunner.manager.create(business_hour_entity_1.BusinessHour, { day_of_week: enums_1.DayOfWeekEnum.Monday, is_closed: true });
            const tuesdayBusinessHour = queryRunner.manager.create(business_hour_entity_1.BusinessHour, { day_of_week: enums_1.DayOfWeekEnum.Tuesday, is_closed: true });
            const wednesdayBusinessHour = queryRunner.manager.create(business_hour_entity_1.BusinessHour, { day_of_week: enums_1.DayOfWeekEnum.Wednesday, is_closed: true });
            const thrusdayBusinessHour = queryRunner.manager.create(business_hour_entity_1.BusinessHour, { day_of_week: enums_1.DayOfWeekEnum.Thursday, is_closed: true });
            const fridayBusinessHour = queryRunner.manager.create(business_hour_entity_1.BusinessHour, { day_of_week: enums_1.DayOfWeekEnum.Friday, is_closed: true });
            const saturdayBusinessHour = queryRunner.manager.create(business_hour_entity_1.BusinessHour, { day_of_week: enums_1.DayOfWeekEnum.Saturday, is_closed: true });
            const sundayBusinessHour = queryRunner.manager.create(business_hour_entity_1.BusinessHour, { day_of_week: enums_1.DayOfWeekEnum.Sunday, is_closed: true });
            newLocation.businessHours = [mondayBusinessHour, tuesdayBusinessHour, wednesdayBusinessHour, thrusdayBusinessHour, fridayBusinessHour, saturdayBusinessHour, sundayBusinessHour];
            newBusiness.locations = [newLocation];
            const savedNewBusiness = await queryRunner.manager.save(newBusiness);
            await queryRunner.commitTransaction();
            return savedNewBusiness;
        }
        catch (error) {
            await queryRunner.rollbackTransaction();
            throw error;
        }
        finally {
            await queryRunner.release();
        }
    }
    async update(user, updateBusinessDto) {
        const result = await this.businessRepository.update({ user: user }, updateBusinessDto);
        if (result.affected === 0) {
            throw new common_1.NotFoundException('Business not found');
        }
    }
};
exports.BusinessesService = BusinessesService;
exports.BusinessesService = BusinessesService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, typeorm_1.InjectRepository)(business_entity_1.Business)),
    __metadata("design:paramtypes", [typeorm_2.DataSource,
        typeorm_2.Repository])
], BusinessesService);
//# sourceMappingURL=businesses.service.js.map
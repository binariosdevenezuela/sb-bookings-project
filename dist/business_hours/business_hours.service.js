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
exports.BusinessHoursService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const business_location_entity_1 = require("../business_locations/entities/business_location.entity");
const business_hour_entity_1 = require("./entities/business_hour.entity");
const business_break_entity_1 = require("./entities/business_break.entity");
const luxon_1 = require("luxon");
let BusinessHoursService = class BusinessHoursService {
    constructor(dataSource) {
        this.dataSource = dataSource;
    }
    async update(locationId, updateBusinessHourDto) {
        const queryRunner = this.dataSource.createQueryRunner();
        await queryRunner.connect();
        try {
            await queryRunner.startTransaction();
            const businessLocation = await queryRunner.manager.findOne(business_location_entity_1.BusinessLocation, { where: { id: locationId } });
            if (businessLocation) {
                for (const createBusinessHourDto of updateBusinessHourDto.business_hours) {
                    var businessHour = await queryRunner.manager.findOne(business_hour_entity_1.BusinessHour, { where: { location: businessLocation, day_of_week: createBusinessHourDto.day_of_week }, relations: ["breaks"] });
                    await queryRunner.manager.remove(businessHour.breaks);
                    businessHour.breaks = [];
                    if (createBusinessHourDto.is_closed) {
                        businessHour.start_time = null;
                        businessHour.end_time = null;
                        businessHour.is_closed = true;
                    }
                    else {
                        if (createBusinessHourDto.breaks) {
                            const createBusinessHourDtoStartTimeDto = luxon_1.DateTime.fromFormat(createBusinessHourDto.start_time, 'HH:mm');
                            const createBusinessHourDtoEndTimeDto = luxon_1.DateTime.fromFormat(createBusinessHourDto.end_time, 'HH:mm');
                            for (const businessHourBreakDto of createBusinessHourDto.breaks) {
                                const businessHourBreakStartTimeDto = luxon_1.DateTime.fromFormat(businessHourBreakDto.start_time, 'HH:mm');
                                const businessHourBreakEndTimeDto = luxon_1.DateTime.fromFormat(businessHourBreakDto.end_time, 'HH:mm');
                                const isBreakWithinBounds = businessHourBreakStartTimeDto >= createBusinessHourDtoStartTimeDto && businessHourBreakEndTimeDto <= createBusinessHourDtoEndTimeDto;
                                if (!isBreakWithinBounds) {
                                    throw new common_1.BadRequestException(`Break ${businessHourBreakDto.start_time} - ${businessHourBreakDto.end_time} is out of bounds for hours ${createBusinessHourDto.start_time} - ${createBusinessHourDto.end_time}`);
                                }
                                const newBusinessBreak = queryRunner.manager.create(business_break_entity_1.BusinessBreak, businessHourBreakDto);
                                businessHour.breaks.push(newBusinessBreak);
                            }
                            if (businessHour.breaks.length == 2) {
                                const break1StartTime = luxon_1.DateTime.fromFormat(businessHour.breaks[0].start_time, 'HH:mm');
                                const break1EndTime = luxon_1.DateTime.fromFormat(businessHour.breaks[0].end_time, 'HH:mm');
                                const break2StartTime = luxon_1.DateTime.fromFormat(businessHour.breaks[1].start_time, 'HH:mm');
                                const break2EndTime = luxon_1.DateTime.fromFormat(businessHour.breaks[1].end_time, 'HH:mm');
                                const isOverlapping = break1StartTime < break2EndTime && break1EndTime > break2StartTime;
                                if (isOverlapping) {
                                    throw new common_1.BadRequestException(`${createBusinessHourDto.day_of_week}'s breaks must not overlap each other.`);
                                }
                            }
                        }
                        businessHour.start_time = createBusinessHourDto.start_time;
                        businessHour.end_time = createBusinessHourDto.end_time;
                        businessHour.is_closed = createBusinessHourDto.is_closed;
                    }
                    await queryRunner.manager.save(business_hour_entity_1.BusinessHour, businessHour);
                }
                await queryRunner.commitTransaction();
            }
            else {
                throw new common_1.NotFoundException(`Business location with ID ${locationId} not found`);
            }
        }
        catch (error) {
            await queryRunner.rollbackTransaction();
            throw error;
        }
        finally {
            await queryRunner.release();
        }
    }
};
exports.BusinessHoursService = BusinessHoursService;
exports.BusinessHoursService = BusinessHoursService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeorm_1.DataSource])
], BusinessHoursService);
//# sourceMappingURL=business_hours.service.js.map
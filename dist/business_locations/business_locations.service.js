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
exports.BusinessLocationsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const business_location_entity_1 = require("./entities/business_location.entity");
let BusinessLocationsService = class BusinessLocationsService {
    constructor(dataSource) {
        this.dataSource = dataSource;
    }
    async insert(business, createBusinessLocationDto, queryRunner) {
        const shouldReleaseQueryRunner = !queryRunner;
        if (!queryRunner) {
            queryRunner = this.dataSource.createQueryRunner();
            await queryRunner.connect();
            await queryRunner.startTransaction();
        }
        try {
            const newLocation = queryRunner.manager.create(business_location_entity_1.BusinessLocation, createBusinessLocationDto);
            newLocation.business = business;
            const savedLocation = await queryRunner.manager.save(newLocation);
            if (shouldReleaseQueryRunner) {
                await queryRunner.commitTransaction();
            }
            return savedLocation;
        }
        catch (error) {
            if (shouldReleaseQueryRunner) {
                await queryRunner.rollbackTransaction();
            }
            throw error;
        }
        finally {
            if (shouldReleaseQueryRunner) {
                await queryRunner.release();
            }
        }
    }
    findAll() {
        return `This action returns all businessLocations`;
    }
    findOne(id) {
        return `This action returns a #${id} businessLocation`;
    }
    update(id, updateBusinessLocationDto) {
        return `This action updates a #${id} businessLocation`;
    }
    remove(id) {
        return `This action removes a #${id} businessLocation`;
    }
};
exports.BusinessLocationsService = BusinessLocationsService;
exports.BusinessLocationsService = BusinessLocationsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeorm_1.DataSource])
], BusinessLocationsService);
//# sourceMappingURL=business_locations.service.js.map
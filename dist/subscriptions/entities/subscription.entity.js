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
exports.Subscription = void 0;
const typeorm_1 = require("typeorm");
const business_entity_1 = require("../../businesses/entities/business.entity");
const plan_entity_1 = require("../../plans/entities/plan.entity");
let Subscription = class Subscription {
};
exports.Subscription = Subscription;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Subscription.prototype, "subscription_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => business_entity_1.Business, (business) => business.business_id),
    __metadata("design:type", business_entity_1.Business)
], Subscription.prototype, "business", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => plan_entity_1.Plan, (plan) => plan.plan_id),
    __metadata("design:type", plan_entity_1.Plan)
], Subscription.prototype, "plan", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date' }),
    __metadata("design:type", String)
], Subscription.prototype, "start_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    __metadata("design:type", String)
], Subscription.prototype, "end_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', default: true }),
    __metadata("design:type", Boolean)
], Subscription.prototype, "is_active", void 0);
exports.Subscription = Subscription = __decorate([
    (0, typeorm_1.Entity)('subscriptions')
], Subscription);
//# sourceMappingURL=subscription.entity.js.map
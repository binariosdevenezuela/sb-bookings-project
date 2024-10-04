'use strict';
var __decorate =
  (this && this.__decorate) ||
  function (decorators, target, key, desc) {
    var c = arguments.length,
      r =
        c < 3
          ? target
          : desc === null
            ? (desc = Object.getOwnPropertyDescriptor(target, key))
            : desc,
      d;
    if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if ((d = decorators[i]))
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
var __metadata =
  (this && this.__metadata) ||
  function (k, v) {
    if (typeof Reflect === 'object' && typeof Reflect.metadata === 'function')
      return Reflect.metadata(k, v);
  };
var __param =
  (this && this.__param) ||
  function (paramIndex, decorator) {
    return function (target, key) {
      decorator(target, key, paramIndex);
    };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.SubscriptionsController = void 0;
const common_1 = require('@nestjs/common');
const subscriptions_service_1 = require('./subscriptions.service');
const create_subscription_dto_1 = require('./dto/create-subscription.dto');
const update_subscription_dto_1 = require('./dto/update-subscription.dto');
let SubscriptionsController = class SubscriptionsController {
  constructor(subscriptionsService) {
    this.subscriptionsService = subscriptionsService;
  }
  create(createSubscriptionDto) {
    return this.subscriptionsService.create(createSubscriptionDto);
  }
  findAll() {
    return this.subscriptionsService.findAll();
  }
  findOne(id) {
    return this.subscriptionsService.findOne(+id);
  }
  update(id, updateSubscriptionDto) {
    return this.subscriptionsService.update(+id, updateSubscriptionDto);
  }
  remove(id) {
    return this.subscriptionsService.remove(+id);
  }
};
exports.SubscriptionsController = SubscriptionsController;
__decorate(
  [
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata('design:type', Function),
    __metadata('design:paramtypes', [
      create_subscription_dto_1.CreateSubscriptionDto,
    ]),
    __metadata('design:returntype', void 0),
  ],
  SubscriptionsController.prototype,
  'create',
  null
);
__decorate(
  [
    (0, common_1.Get)(),
    __metadata('design:type', Function),
    __metadata('design:paramtypes', []),
    __metadata('design:returntype', void 0),
  ],
  SubscriptionsController.prototype,
  'findAll',
  null
);
__decorate(
  [
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata('design:type', Function),
    __metadata('design:paramtypes', [String]),
    __metadata('design:returntype', void 0),
  ],
  SubscriptionsController.prototype,
  'findOne',
  null
);
__decorate(
  [
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata('design:type', Function),
    __metadata('design:paramtypes', [
      String,
      update_subscription_dto_1.UpdateSubscriptionDto,
    ]),
    __metadata('design:returntype', void 0),
  ],
  SubscriptionsController.prototype,
  'update',
  null
);
__decorate(
  [
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata('design:type', Function),
    __metadata('design:paramtypes', [String]),
    __metadata('design:returntype', void 0),
  ],
  SubscriptionsController.prototype,
  'remove',
  null
);
exports.SubscriptionsController = SubscriptionsController = __decorate(
  [
    (0, common_1.Controller)('subscriptions'),
    __metadata('design:paramtypes', [
      subscriptions_service_1.SubscriptionsService,
    ]),
  ],
  SubscriptionsController
);
//# sourceMappingURL=subscriptions.controller.js.map

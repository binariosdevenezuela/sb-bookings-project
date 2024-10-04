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
exports.SignUpIntentController = void 0;
const common_1 = require('@nestjs/common');
const sign_up_intent_service_1 = require('./sign-up-intent.service');
const create_sign_up_intent_dto_1 = require('./dto/create-sign-up-intent.dto');
const update_sign_up_intent_dto_1 = require('./dto/update-sign-up-intent.dto');
const response_service_1 = require('../response/response.service');
let SignUpIntentController = class SignUpIntentController {
  constructor(signUpIntentService, responseService) {
    this.signUpIntentService = signUpIntentService;
    this.responseService = responseService;
  }
  async create(createSignUpIntentDto, res) {
    await this.signUpIntentService.create(createSignUpIntentDto);
    return res
      .status(common_1.HttpStatus.OK)
      .json(
        this.responseService.success(
          'Confirm email by going to the link sent to your email.'
        )
      );
  }
  async findAll(id, code) {
    return await this.signUpIntentService.complete(id, code);
  }
  findOne(id) {
    return this.signUpIntentService.findOne(+id);
  }
  update(id, updateSignUpIntentDto) {
    return this.signUpIntentService.update(+id, updateSignUpIntentDto);
  }
  remove(id) {
    return this.signUpIntentService.remove(+id);
  }
};
exports.SignUpIntentController = SignUpIntentController;
__decorate(
  [
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata('design:type', Function),
    __metadata('design:paramtypes', [
      create_sign_up_intent_dto_1.CreateSignUpIntentDto,
      Object,
    ]),
    __metadata('design:returntype', Promise),
  ],
  SignUpIntentController.prototype,
  'create',
  null
);
__decorate(
  [
    (0, common_1.Get)('complete/:id/:code'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Param)('code')),
    __metadata('design:type', Function),
    __metadata('design:paramtypes', [String, String]),
    __metadata('design:returntype', Promise),
  ],
  SignUpIntentController.prototype,
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
  SignUpIntentController.prototype,
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
      update_sign_up_intent_dto_1.UpdateSignUpIntentDto,
    ]),
    __metadata('design:returntype', void 0),
  ],
  SignUpIntentController.prototype,
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
  SignUpIntentController.prototype,
  'remove',
  null
);
exports.SignUpIntentController = SignUpIntentController = __decorate(
  [
    (0, common_1.Controller)('sign-up-intent'),
    __metadata('design:paramtypes', [
      sign_up_intent_service_1.SignUpIntentService,
      response_service_1.ResponseService,
    ]),
  ],
  SignUpIntentController
);
//# sourceMappingURL=sign-up-intent.controller.js.map

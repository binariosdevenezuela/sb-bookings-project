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
Object.defineProperty(exports, '__esModule', { value: true });
exports.SignUpIntent = void 0;
const typeorm_1 = require('typeorm');
const create_sign_up_intent_dto_1 = require('../dto/create-sign-up-intent.dto');
const uuid_1 = require('uuid');
let SignUpIntent = class SignUpIntent {
  generateId() {
    this.id = (0, uuid_1.v4)();
  }
};
exports.SignUpIntent = SignUpIntent;
__decorate(
  [
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata('design:type', String),
  ],
  SignUpIntent.prototype,
  'id',
  void 0
);
__decorate(
  [
    (0, typeorm_1.Column)('json'),
    __metadata(
      'design:type',
      create_sign_up_intent_dto_1.CreateSignUpIntentDto
    ),
  ],
  SignUpIntent.prototype,
  'object',
  void 0
);
__decorate(
  [(0, typeorm_1.Column)({ length: 6 }), __metadata('design:type', String)],
  SignUpIntent.prototype,
  'code',
  void 0
);
__decorate(
  [
    (0, typeorm_1.BeforeInsert)(),
    __metadata('design:type', Function),
    __metadata('design:paramtypes', []),
    __metadata('design:returntype', void 0),
  ],
  SignUpIntent.prototype,
  'generateId',
  null
);
exports.SignUpIntent = SignUpIntent = __decorate(
  [(0, typeorm_1.Entity)('signup_intent')],
  SignUpIntent
);
//# sourceMappingURL=sign-up-intent.entity.js.map

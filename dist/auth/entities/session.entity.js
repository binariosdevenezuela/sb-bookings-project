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
exports.SessionEntity = void 0;
const typeorm_1 = require('typeorm');
const user_entity_1 = require('../../users/entities/user.entity');
let SessionEntity = class SessionEntity {};
exports.SessionEntity = SessionEntity;
__decorate(
  [
    (0, typeorm_1.PrimaryColumn)('varchar', { length: 255 }),
    __metadata('design:type', String),
  ],
  SessionEntity.prototype,
  'id',
  void 0
);
__decorate(
  [
    (0, typeorm_1.ManyToOne)(
      () => user_entity_1.User,
      (user) => user.user_id
    ),
    __metadata('design:type', user_entity_1.User),
  ],
  SessionEntity.prototype,
  'user',
  void 0
);
__decorate(
  [(0, typeorm_1.Column)('text'), __metadata('design:type', String)],
  SessionEntity.prototype,
  'json',
  void 0
);
__decorate(
  [
    (0, typeorm_1.Column)({
      type: 'timestamp',
      default: () => 'CURRENT_TIMESTAMP',
    }),
    __metadata('design:type', Date),
  ],
  SessionEntity.prototype,
  'logged_on',
  void 0
);
__decorate(
  [
    (0, typeorm_1.Index)(),
    (0, typeorm_1.Column)('bigint'),
    __metadata('design:type', Number),
  ],
  SessionEntity.prototype,
  'expiredAt',
  void 0
);
__decorate(
  [(0, typeorm_1.DeleteDateColumn)(), __metadata('design:type', Date)],
  SessionEntity.prototype,
  'deletedAt',
  void 0
);
exports.SessionEntity = SessionEntity = __decorate(
  [(0, typeorm_1.Entity)('sessions')],
  SessionEntity
);
//# sourceMappingURL=session.entity.js.map

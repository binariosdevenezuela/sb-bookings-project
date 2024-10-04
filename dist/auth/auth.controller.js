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
exports.AuthController = void 0;
const common_1 = require('@nestjs/common');
const auth_service_1 = require('./auth.service');
const response_service_1 = require('../response/response.service');
let AuthController = class AuthController {
  constructor(authService, responseService) {
    this.authService = authService;
    this.responseService = responseService;
  }
  async login(req, res) {
    if (req.session.user) {
      throw new common_1.ConflictException('There is a session already.');
    }
    const { email, password } = req.body;
    const user = await this.authService.validateUser(email, password);
    if (user) {
      req.session.user = user;
      return res
        .status(common_1.HttpStatus.OK)
        .json(
          this.responseService.success('Login successful', req.session.user)
        );
    } else {
      throw new common_1.UnauthorizedException('Invalid credentials');
    }
  }
  logout(req, res) {
    if (req.session.user) {
      req.session.destroy(() => {});
      return res
        .status(common_1.HttpStatus.OK)
        .json(this.responseService.success('Logout successful'));
    } else {
      throw new common_1.UnauthorizedException('No session to destroy');
    }
  }
};
exports.AuthController = AuthController;
__decorate(
  [
    (0, common_1.Post)('login'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata('design:type', Function),
    __metadata('design:paramtypes', [Object, Object]),
    __metadata('design:returntype', Promise),
  ],
  AuthController.prototype,
  'login',
  null
);
__decorate(
  [
    (0, common_1.Post)('logout'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata('design:type', Function),
    __metadata('design:paramtypes', [Object, Object]),
    __metadata('design:returntype', void 0),
  ],
  AuthController.prototype,
  'logout',
  null
);
exports.AuthController = AuthController = __decorate(
  [
    (0, common_1.Controller)('auth'),
    __metadata('design:paramtypes', [
      auth_service_1.AuthService,
      response_service_1.ResponseService,
    ]),
  ],
  AuthController
);
//# sourceMappingURL=auth.controller.js.map

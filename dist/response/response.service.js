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
Object.defineProperty(exports, '__esModule', { value: true });
exports.ResponseService = void 0;
const common_1 = require('@nestjs/common');
let ResponseService = class ResponseService {
  success(message, data = null, statusCode = common_1.HttpStatus.OK) {
    return {
      statusCode,
      message,
      data,
    };
  }
  error(message, statusCode = common_1.HttpStatus.BAD_REQUEST, errors = null) {
    return {
      statusCode,
      message,
      errors,
    };
  }
};
exports.ResponseService = ResponseService;
exports.ResponseService = ResponseService = __decorate(
  [(0, common_1.Injectable)()],
  ResponseService
);
//# sourceMappingURL=response.service.js.map

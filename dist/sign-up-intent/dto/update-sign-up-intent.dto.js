"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateSignUpIntentDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_sign_up_intent_dto_1 = require("./create-sign-up-intent.dto");
class UpdateSignUpIntentDto extends (0, mapped_types_1.PartialType)(create_sign_up_intent_dto_1.CreateSignUpIntentDto) {
}
exports.UpdateSignUpIntentDto = UpdateSignUpIntentDto;
//# sourceMappingURL=update-sign-up-intent.dto.js.map
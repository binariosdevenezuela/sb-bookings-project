'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.SchedulingModelEnum =
  exports.UserPlatformRoleEnum =
  exports.UserRoleEnum =
  exports.DayOfWeekEnum =
    void 0;
var DayOfWeekEnum;
(function (DayOfWeekEnum) {
  DayOfWeekEnum['Monday'] = 'Monday';
  DayOfWeekEnum['Tuesday'] = 'Tuesday';
  DayOfWeekEnum['Wednesday'] = 'Wednesday';
  DayOfWeekEnum['Thursday'] = 'Thursday';
  DayOfWeekEnum['Friday'] = 'Friday';
  DayOfWeekEnum['Saturday'] = 'Saturday';
  DayOfWeekEnum['Sunday'] = 'Sunday';
})(DayOfWeekEnum || (exports.DayOfWeekEnum = DayOfWeekEnum = {}));
var UserRoleEnum;
(function (UserRoleEnum) {
  UserRoleEnum['Owner'] = 'owner';
  UserRoleEnum['Manager'] = 'manager';
  UserRoleEnum['Worker'] = 'worker';
})(UserRoleEnum || (exports.UserRoleEnum = UserRoleEnum = {}));
var UserPlatformRoleEnum;
(function (UserPlatformRoleEnum) {
  UserPlatformRoleEnum['Owner'] = 'admin';
  UserPlatformRoleEnum['Worker'] = 'manager';
})(
  UserPlatformRoleEnum ||
    (exports.UserPlatformRoleEnum = UserPlatformRoleEnum = {})
);
var SchedulingModelEnum;
(function (SchedulingModelEnum) {
  SchedulingModelEnum['PredefinedBlocks'] = 'Predefined Blocks';
  SchedulingModelEnum['ServiceDuration'] = 'Service Duration';
})(
  SchedulingModelEnum ||
    (exports.SchedulingModelEnum = SchedulingModelEnum = {})
);
//# sourceMappingURL=enums.js.map

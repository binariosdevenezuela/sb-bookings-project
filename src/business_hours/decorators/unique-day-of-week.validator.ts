import { registerDecorator, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator';
import { CreateBusinessHourDto } from '../dto/create-business_hour.dto';

@ValidatorConstraint({ async: false })
export class UniqueDayOfWeekConstraint implements ValidatorConstraintInterface {
  validate(business_hours: CreateBusinessHourDto[]) {

    if (!Array.isArray(business_hours)) {
      return true;
    }

    const days = business_hours.map(bh => bh.day_of_week);
    const uniqueDays = new Set(days);
    return days.length === uniqueDays.size;
  }

  defaultMessage() {
    return 'Duplicate days of the week are not allowed!';
  }
}

export function UniqueDayOfWeek(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: UniqueDayOfWeekConstraint
    });
  };
}
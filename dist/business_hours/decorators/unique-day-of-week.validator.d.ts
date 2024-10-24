import { ValidationOptions, ValidatorConstraintInterface } from 'class-validator';
import { CreateBusinessHourDto } from '../dto/create-business_hour.dto';
export declare class UniqueDayOfWeekConstraint implements ValidatorConstraintInterface {
    validate(business_hours: CreateBusinessHourDto[]): boolean;
    defaultMessage(): string;
}
export declare function UniqueDayOfWeek(validationOptions?: ValidationOptions): (object: Object, propertyName: string) => void;

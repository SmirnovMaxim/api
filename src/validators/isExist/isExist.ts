import { ValidationOptions, registerDecorator } from 'class-validator';
import { IsExistConstraint } from '@/validators/isExist/isExistConstraint';

export type IsExistConstraintInput = {
  tableName: string;
  column: string;
  isUnique: boolean;
};

export function IsExist(
  options: IsExistConstraintInput,
  validationOptions?: ValidationOptions,
) {
  return function (object: any, propertyName: string) {
    registerDecorator({
      name: 'is-exist',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [options],
      validator: IsExistConstraint,
    });
  };
}

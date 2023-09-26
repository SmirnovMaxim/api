import {
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { IsExistConstraintInput } from '@/validators/isExist/isExist';
import { EntityManager } from 'typeorm';
import { Injectable } from '@nestjs/common';

@ValidatorConstraint({ name: 'IsUniqueConstraint', async: true })
@Injectable()
export class IsExistConstraint implements ValidatorConstraintInterface {
  constructor(private readonly entityManager: EntityManager) {}

  async validate(value: any, args?: ValidationArguments): Promise<boolean> {
    const { tableName, column, isUnique }: IsExistConstraintInput =
      args.constraints[0];

    const isExist = (val) =>
      this.entityManager
        .getRepository(tableName)
        .createQueryBuilder(tableName)
        .where({ [column]: val })
        .getExists();

    if (!Array.isArray(value)) {
      value = [value];
    }

    const result = await Promise.all(value.map((item) => isExist(item)));
    return result.every((exists) => (isUnique ? !exists : exists));
  }

  defaultMessage?(validationArguments?: ValidationArguments): string {
    const { isUnique } = validationArguments.constraints[0];

    return `This ${validationArguments.property} ${
      isUnique ? 'already' : "doesn't"
    } exist`;
  }
}

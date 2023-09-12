import {
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { EntityManager } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { IsUniqueConstraintInput } from '@/validators/isUnique/isUnique';

@ValidatorConstraint({ name: 'IsUniqueConstraint', async: true })
@Injectable()
export class IsUniqueConstraint implements ValidatorConstraintInterface {
  constructor(private readonly entityManager: EntityManager) {}

  async validate(value: any, arguments_?: ValidationArguments): Promise<boolean> {
    const { tableName, column }: IsUniqueConstraintInput = arguments_.constraints[0];

    const exists = await this.entityManager
      .getRepository(tableName)
      .createQueryBuilder(tableName)
      .where({ [column]: value })
      .getExists();

    return !exists;
  }

  defaultMessage?(validationArguments?: ValidationArguments): string {
    return `This ${validationArguments.property} already exist`;
  }
}

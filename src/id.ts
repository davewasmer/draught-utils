import { kebabCase } from 'lodash';
import { customAlphabet } from 'nanoid';

export class Brand<T extends string> {
  private as!: T;
}

export type Id = string & Brand<'Id'>;

const alphabet =
  '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
const nanoid = customAlphabet(alphabet, 12);

export default function id(prefix?: string): Id {
  return (prefix ? kebabCase(prefix) + '_' + nanoid() : nanoid()) as Id;
}

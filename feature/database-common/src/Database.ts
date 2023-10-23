import { Row } from './types';

export abstract class Database {
  abstract connect(): void

  abstract rows(): Row[]
}

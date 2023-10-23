import { Database } from './Database';
import { DatabaseImpl } from './DatabaseImpl';

export { Database } from './Database';

export function createDatabase(): Database {
  return new DatabaseImpl();
}

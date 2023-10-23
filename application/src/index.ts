import { createDatabase, Database } from '../../feature/database-common/src';
import { DatabaseImpl } from '../../feature/database-common/src/DatabaseImpl';

console.log('Hello from application');
const database: Database = createDatabase();
const impl: DatabaseImpl | null = null;
database.connect();
console.log(impl);
// const database = new Database();
// database.connect();
// database.rows().forEach((r) => r.name);

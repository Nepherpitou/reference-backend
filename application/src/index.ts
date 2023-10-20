import '@backend/auth-database';
import { Database } from '@backend/database-common';

console.log('Hello from application');
const database: Database = new Database();
// const database = new Database();
// database.connect();
// database.rows().forEach((r) => r.name);

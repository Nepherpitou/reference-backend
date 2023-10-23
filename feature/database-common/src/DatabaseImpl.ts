import { Database } from './Database';
import { Row } from './types';

export class DatabaseImpl implements Database {
  connect(): void {
    console.log('Connect called');
  }

  rows(): Row[] {
    return [
      {
        id: 10,
        name: 'Foo Bar',
      },
    ];
  }

}

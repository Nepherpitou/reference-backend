export class Database {
  connect() {
    console.log("DB Connect!");
  }

  rows(): Row[] {
    return [
      {
        id: 1,
        name: "foo",
      },
    ];
  }
}

/**
 * @inter1nal1
 */
export type Row = {
  id: number;
  name: string;
};

const TotalScore: Array<number> = [];
const names: Array<string> = [];

function identityOne(val: boolean | number): boolean | number {
  return val;
}

function identityTwo(val: any): any {
  return val;
}

// locks type
function identityThree<Type>(val: Type): Type {
  return val;
}

identityThree("jkkj");

// The "Type" can be anything . For Example
function identityFour<T>(val: T): T {
  return val;
}

function getSearchPRoducts<T>(products: T[]): T {
  return products[0];
}

interface data {
  id: number;
  name: string;
}

function getData<data>(obj: data) {
  return;
}

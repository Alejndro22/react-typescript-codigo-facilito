/* eslint-disable @typescript-eslint/no-unused-vars */
// A function overload means that a function can behave different based on
// the parameters received. Remember that this is common in Java

// function add(a: number, b: number): number {
//   return a + b;
// }

// function add(a: string, b: string): string {
//   return a + b;
// }

// function add(a: string, b: number): string {
//   return a + b;
// }

// This isn't allowed on JS, but TS has a way to make it work, but not completely
// The idea is to stack the possible overloads
// But to work this all possible overloads must have the same number of params

function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: string, b: number): string;
// Finally the 'real' implementation needs to be compatible with all possible overloads
// By real implementation this means the last one declared.
function add(a: any, b: any): any {
  return a + b;
}

const res1 = add(1, 2);
const res2 = add('a', 'b');
const res3 = add('a', 2);

// This doesn't work because there isn't any overload that matches this structure (number, string)
// No overload matches this call.
// const res4 = add(2,'a');

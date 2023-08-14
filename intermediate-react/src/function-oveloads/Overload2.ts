/* eslint-disable @typescript-eslint/no-unused-vars */
// More specific case where Generics can be used

// To make sure which cases I want to accept, hero overloads are very useful

function concat(a: string, b: string): string;
function concat(a: any[], b: any[]): any[];
// Now with my overloads i don't have to define my function return types, i can trust TS
// function concat(a: string | any[], b: string | any[]): string | any[] {
function concat(a: string | any[], b: string | any[]) {
  if (typeof a === 'string' && typeof b === 'string') {
    return a + b;
  } else if (Array.isArray(a) && Array.isArray(b)) {
    return [...a, ...b];
  }
  return undefined;
}

const result = concat('Hello', 'World');
const result2 = concat([1, 2, 3], [4, 5, 6]);

// Now thanks to my overloads, if I try to send a case that wasn't defined this happens
// No overload matches this call.
// const result3 = concat([1, 2, 3], 'World');

// But this accepts arrays of different types
const result3 = concat([1, 2, 3], ['a', 'b', 'c']);

// If I want to keep integrity, i need to use Generics.
// This is done in Overload3.ts

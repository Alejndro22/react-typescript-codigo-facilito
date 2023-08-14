/* eslint-disable @typescript-eslint/no-unused-vars */

function concat2(a: string, b: string): string;
// To make sure that arrays a and b are the same type, here i use generics
function concat2<T>(a: T[], b: T[]): T[];
// OPTIONAL: If i'd like to accept concats of different type arrays, it'd be like this
// function concat2<T, P>(a: T[], b: P[]): (T | P)[];

// And event though I need to use any to match above overloads, by the restrictions
// defined on every overload i can keep the code integrity
function concat2(a: string | any[], b: string | any[]) {
  if (typeof a === 'string' && typeof b === 'string') {
    return a + b;
  } else if (Array.isArray(a) && Array.isArray(b)) {
    return [...a, ...b];
  }
  return undefined;
}

const resultt = concat2('Hello', 'World');
// Now when calling my overload y have to define my type
// This <number> is optional, ts can infer based on my code
const resultt2 = concat2<number>([1, 2, 3], [4, 5, 6]);

// And now this doesn't work hehe
// No overload matches this call.
// const resultt3 = concat2([1, 2, 3], ['a', 'b', 'c']);

// THIS CONCEPT ISN'T VERY USED WITH REACT, IS MORE COMMON TO FOUND TYPE GUARDS AND NARROWINGS
// BUT IT'S A GREAT CONCEPT TO LEARN

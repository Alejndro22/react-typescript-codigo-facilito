// This is a type alias. It's like an interface, but it can't be extended - and it can represent things that interfaces can't.
export type fnStrToNumber = (str: string) => number;

// Second way to define types is with interfaces.
// This is an interface declaration. It's like a type alias, but it can be extended
export interface fnStrToNumber2 {
  (str: string): number;
}

// Then what's the difference:
// Usually i can use whichever i want, but there are some advanced differences
// that for now i won't use

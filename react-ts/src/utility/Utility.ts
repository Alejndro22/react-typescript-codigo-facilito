/* eslint-disable @typescript-eslint/no-unused-vars */
interface Person {
  // Optional property, but if not sent is type: undefined
  name?: string;
  age: number;
  address: {
    city: string;
    country: string;
  };
  hobbies: string[];
}

// ReturnType -- utility type

function returnNumber(a: number) {
  if (a < 10) {
    return undefined;
  }
  if (a > 10) {
    return 'hi';
  }
  return a;
}

// When i have a variable, and i want to initialize without a value
// As I know that return Number can be a number or 'hi', this could work
// let x: number | 'hi';

// But this doen't goes with DRY principle, because if in the future return
// number return more types, i'd have to modify x definition

// Thanks to this utility, my variable will get the return value type from returnNumber
// The ReturnType utility type lets you get the return type of a function type.
let x: ReturnType<typeof returnNumber>;

// ----------------------------------------------------------------------------------------------------------------

// Omit, Pick -- utility types

// The Omit utility type lets you create an object type by omitting a set of properties from another type.
// The structure is: Omit<-Base type-, -properties to omit->
type PersonNameless = Omit<Person, 'name' | 'age'>;

// The Pick utility type lets you create an object type by picking a set of properties from another type.
// The structure is: Omit<-Base type-, -properties to include->
type PersonData = Pick<Person, 'name' | 'age'>;

// Helpful when i want to access to an object properties but omit a few or select only a few
// This solves the problem of setting properties as optional, (like name?: string)
// Because TS cannot prevent error if property doesn't exist (like a server call with a null id)

// ----------------------------------------------------------------------------------------------------------------

// Required -- Utility type

const doug: Person = {
  age: 22,
  address: {
    city: 'Quetgo',
    country: 'Guatemala',
  },
  hobbies: ['Futbol, Basketball'],
};

const alej = {
  hobbies: ['Futbol, Basketball'],
};

// But if I found code where they work with optional properties (like name?: string)
// Another useful utility type is:

// The Required utility type lets you make all the properties of an object required.
function logDataOfPersonWithName(person: Required<Person>) {
  const { name } = person;
  console.log(name);
}

// If i tried to send doug (doesn't hava name property) this error appear thanks to Required utility type:
// Argument of type 'Person' is not assignable to parameter of type 'Required<Person>'.
//   Types of property 'name' are incompatible.
//     Type 'string | undefined' is not assignable to type 'string'.

// logDataOfPersonWithName(doug);

// ----------------------------------------------------------------------------------------------------------------

// Partial -- Utility type

// The Partial utility type lets you make all the properties of an object optional.
function setHobbies(person: Partial<Person>) {
  const { hobbies } = person;
  console.log(hobbies);
}

// Now even that alej doesn't have all requierd properties from desired type,  but should at least
// have 1 in common or an error will apear: has no properties in common with type 'Partial<Person>

setHobbies(alej);

// ----------------------------------------------------------------------------------------------------------------

// Record, Awaited, Parameters, ReadOnly, NonNullable -- utility types

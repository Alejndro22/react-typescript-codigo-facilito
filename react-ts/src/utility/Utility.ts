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

// -- Record --

// Very useful if all my properties are of the same type
// The Record utility type lets you create an object type with a set of properties whose keys
// are of one type and whose values are of another type.
// structure is Record< -Key types- , -Value types->

// This would accept any string property with string value
// type PersonRecord = Record<string, string>

// Here only name and age are expected, and if there's another property will be cosidered an error
// And expected value types can be string and number
type PersonRecord = Record<'name' | 'age', string | number>;

const newDoug: PersonRecord = {
  name: 'Doug',
  age: 22,
};

// -- Awaited --

async function returnNumberAsync(a: number) {
  return a;
}

// y type is a Promise with numbeer type, but mainly a Promise: y: Promise<number>
// let y: ReturnType<typeof returnNumberAsync>;
// y = returnNumberAsync(1)

// That's why if I try to use a number func this displays an error
// Property 'toFixed' does not exist on type 'Promise<number>'
// y.toFixed(2)

// Here I can used an Awaited
// The Awaited utility type lets you get the type of a Promise's resolved value.
// Now y is number type
let y: Awaited<ReturnType<typeof returnNumberAsync>>;

// -- Parameters --

async function returnNumberAndStringAsync(a: number, b: string) {
  console.log(b);
  return a;
}

// The generated types are the same as the ones receibe as parameters on function
// The Parameters utility type lets you get the parameters of a function type.
// Now z types are = z: [a: number, b: string]

let z: Parameters<typeof returnNumberAndStringAsync>;

// -- NonNullable --

// Usually local storage items can or cannot exist = string | null
type Preferences = string | null;
const preferences: Preferences = localStorage.getItem('preferences');

// To prevent a null or undefined value, I can use NonNullable (Could happen when cleaning localStorage)
// The NonNullable utility type lets you exclude null and undefined from a union type.
type CleanPreferences = NonNullable<Preferences>;
// You can postfix an expression with ! to tell TypeScript that you know it's not null or undefined.
// This works the same as an 'as' assertion.
const cleanPreferences: CleanPreferences = preferences!;

// -- Readonly --

// Useful when i want to prevent my properties from being modified
interface ImmutablePerson {
  name: string;
  age: number;
}

// The Readonly utility type lets you make all the properties of an object readonly.
const immutableDoug: Readonly<ImmutablePerson> = {
  name: 'Doug',
  age: 22,
};

// Now if I try to change age of newDoug, this error would appear
// Cannot assign to 'age' because it is a read-only property.
// immutableDoug.age = 22;

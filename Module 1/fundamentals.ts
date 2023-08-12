// ts can infer type even if not defined, and could help me to prevent errors
// doesn't work everytime, so the best practice is to define each variable type.
let variable = 'hola';
// In ts, number is used to represent any number (even floats)
let variable2: number = 2023;
let variable3: boolean = true;
let variable4: null = null;
let variable5: undefined = undefined;

// I can define what type of data i want in my arrays
// Array can also be defined with Array<>
let variable6: [] = [];

// let variable6: Array<string> = ['a', 'e'];
let variable6n: string[] = ['a', 'b', '3'];

// There can also be different types for an array
let variable6dt: (string | number | boolean)[] = ['a', 'b', 3, 4, true, false];

// ts gives a very flexible type, but also can be dangerous if I don't take precautions
// It could lead to errors, and ts wouldn't be able to warn me. Type:any should be used as little as possible.
// accepts any type :any
let variable6any: any[] = ['a', 'b', 3, 4, true, false];

let variable7: object = {};

// ..
console.log(variable);
console.log(variable6n);

variable6any.map((n) => {
  n.toLowerCase();
});

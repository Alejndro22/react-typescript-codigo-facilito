import { fnStrToNumber, fnStrToNumber2 } from './example';

// Why to type my functions?
// Useful to autodocument my code, making it highly reusable
// in this example if i hover the fuction it displays:

// function strToNumber(num: string): number
// This shows expected type for params (string), and that return value is a number
function strToNumber(str: string) {
  // ...
  console.log(str);

  return 3;
}

// I can declare a type alias or an interface to avoid declaring type in every declaration
// and after that declaration, i can assign the alias to te desired function

// with type alias
const strToNumber2: fnStrToNumber = (str) => {
  // ...
  console.log(str);

  return 3;
};

// with an interface
const strToNumber3: fnStrToNumber2 = (str) => {
  // ...
  console.log(str);

  return 3;
};

function strToNumber4(str: string): number {
  // different implementation than strToNumber
  console.log(str);

  return 3;
}

export { strToNumber, strToNumber2, strToNumber3, strToNumber4 };

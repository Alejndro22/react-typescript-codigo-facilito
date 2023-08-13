/* eslint-disable @typescript-eslint/no-unused-vars */
interface Square {
  size: number;
  color: string;
}

interface Circle {
  radius: number;
  color: string;
}

interface Triangle {
  size: number;
  color: string;
  height: number;
}

type Shape = Square | Circle | Triangle;

// ---- Type Guarding/Narrowing ----

// The problem is when i want to get Area from shape, because it's different for each one
// This narrowing is used to determine which shape I'm  treating
function getArea(shape: Shape) {
  // Type guarding

  // You can use the 'in' operator to narrow the type of a variable.
  // Here size must exist as property in the interface. Here Circle is excluded.
  if ('size' in shape) {
    // By now this can be Square | Triangle
    if ('height' in shape) {
      // Now height property must exist. Only Triangle has this porperty.
      return (shape.size * shape.height) / 2;
    }
    // If size exists but height doesn't, this is a square
    return shape.size ** 2;
  } else {
    // And if size doesn't exist, the only shape left is circle
    return Math.PI * shape.radius ** 2;
  }
}

// ---- Type Branding ----

// interface Human {
//   name: string;
// }

// interface Animal {
//   name: string;
// }

// interface Thing {
//   age: number;
// }

// function printHuman(human: Human) {
//   console.log(human.name);
// }

// const rock: Thing = {
//   age: 20,
// };

// const ale: Human = {
//   name: 'Alejandro',
// };

// const dog: Animal = {
//   name: 'Oxford',
// };

// Here I send an human and works :)
// printHuman(ale);

// As expected, as printHuman expects parameter: Human, since rock:Thing this won't work
// Argument of type 'Thing' is not assignable to parameter of type 'Human'.
// printHuman(rock);

// But if I call printHuman() with dog:Animal this works!
// printHuman(dog);

// Why is this happening?? Because ts typing depends on the object shape.
// As Human shape is an object with name property, it has the same shape as Animal.
// In other words, Animal has the same shape as Human.

// To prevent this here we use Type Branding with Symbols
// Even though Symbol(desc) has the same desc, a symbol alwaus return a unique value
const humanSpecies = Symbol('human');
const animalSpecies = Symbol('animal');

interface Human {
  name: string;
  species: typeof humanSpecies;
}

interface Animal {
  name: string;
  species: typeof animalSpecies;
}

function printHuman(human: Human) {
  console.log(human.name);
}

// Now when defining these, property: species helps to differentiate them
const ale: Human = {
  name: 'Alejandro',
  species: humanSpecies,
};

const dog: Animal = {
  name: 'Oxford',
  species: animalSpecies,
};

// Here I send an human and works :)
printHuman(ale);

// And now if I call printHuman() with dog:Animal this won't work
// Argument of type 'Animal' is not assignable to parameter of type 'Human'.
// Types of property 'species' are incompatible.
//   Type 'typeof animalSpecies' is not assignable to type 'typeof humanSpecies'
// printHuman(dog);

// This way every Key species would be hidden | private
Object.keys(ale).forEach((key) => {
  console.log(key);
});

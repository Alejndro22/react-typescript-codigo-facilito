# What's the difference between Interfaces and Types

## Similarities

### Both can be extended

When a subclass extends a parent class, it inherits all of its public and protected properties and methods.
Both extend from error, and add new property code.

- For interfaces:

        interface CustomError extends Error {
          code: number
        }

- For type objects:

        type CustomErrorType = Error & {
          code: number
        }

### Both can be implemented on classes

When a class implements an interface, it must provide an implementation for all of its properties and methods.

- For interfaces:

        class NewError implements CustomError {
          code: number;
          name: string;
          message: string;
          constructor(code: number, message: string) {
            this.code = code
            this.message = message
            this.name = 'NewError'
          }
        }

- For type objects:

        class NewError implements CustomErrorType {
          code: number;
          name: string;
          message: string;
          constructor(code: number, message: string) {
            this.code = code
            this.message = message
            this.name = 'NewError'
          }
        }

## Differences

### Type exclusives - Intersection types and Tuples

An intersection type combines multiple types into one. This allows you to add together existing types to get a single type that has all the features you need.

Let's say we have an Object type and an Interface for different animals

        type Eagle = {
          name: string;
          fly: () => void;
        }

        interface Dog {
          name: string;
          bark: () => void;
        }

When using types, it's really easy to create type combinations (union and intersection)

        type animal = Eagle | Dog;
        type animal = Eagle & Dog;

Tuples can also be created, and only works with types

        type animalTuple = [Eagle, Dog]

Finally when working with type when you hover it will show object definition, that doesn't occur when using interfaces.

### Interface exclusive - Interface merging

If i have 2 interfaces with the same name, on the same scope, they merge.
Let's say we have 2 interfaces in the same file:

        interface Dog {
          name: string;
          bark: () => void;
        }

        interface Dog {
          age: number;
        }

Both interfaces merge and now we have this interface (logically)

        interface Dog {
          name: string;
          bark: () => void;
          age: number;
        }

This is useful because it's easier to extend interfaces, or to extend third parties libraries interfaces.
Just be careful to add properties accidentally.

### Course recomendations

Use interfaces for object definitions, and types for everything else.
But remember, both can be used for almost everything, except the cases described above.

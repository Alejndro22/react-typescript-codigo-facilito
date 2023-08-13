import { createContext, useContext } from 'react';

// Here i define desired types for my context Provider value
export interface TypesAgeContext {
  age: number;
  setAge: React.Dispatch<React.SetStateAction<number>>;
}

// I cannot send context empty because a value is expected

// This way it would work, but i would need to validate that value is not null
// A union type is a type formed from two or more other types, representing values that may be any one of those types
// export const AgeContext = createContext<TypesAgeContext | null>(null);

// A great way to set types is this one
// When I use 'as' I can tell typescript to consider that this object has the structure of the interface, even if it isn't true
export const AgeContext = createContext<TypesAgeContext>({} as TypesAgeContext);

// Useful hook to consume my context and prevent errors when trying to use it without the Provider
export const useAge = () => {
  const context = useContext(AgeContext);

  if (!context)
    throw new Error(
      'componet where you are using useAge should be wrapped by an AgeProvider'
    );

  return context;
};

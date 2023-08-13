import { useState } from 'react';
import { AgeContext, TypesAgeContext } from './';

// any is a type that pauses type-checking on whatever it's assigned to.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const AgeProvider = ({ children }: any) => {
  const [age, setAge] = useState<number>(26);

  // Here the defined type is the same that i created on AgeContext
  const sharedData: TypesAgeContext = {
    age,
    setAge,
  };

  // Value that returns with the Provider has to match the same type that was
  // defined when creating the context
  return (
    <AgeContext.Provider value={sharedData}>{children}</AgeContext.Provider>
  );
};

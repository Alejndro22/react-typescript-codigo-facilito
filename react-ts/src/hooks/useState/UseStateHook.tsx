import { useState } from 'react';
import '../../App.css';
import { ModifyAge } from '.';

export const UseStateHook = () => {
  // To set the desired type for this hook I can write: useState<type>
  const [age, setAge] = useState<number>(0);

  // There could be some cases like this for more complex structures
  // For this example are objects
  /*
  type number2 = {
    actualAge: number;
  };

  const [age, setAge] = useState<number2>({ actualAge: 8 });
  */

  return (
    <div className='App'>
      <p>{age}</p>
      <ModifyAge age={age} setAge={setAge} />
    </div>
  );
};

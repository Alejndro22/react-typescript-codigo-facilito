import { useState, useRef } from 'react';
import '../../App.css';
import { Child } from '.';

// Every React component is re-rendered when one of these options occur
// 1. State change
// 2. Props change
// 3. Parent component is re-rendered

export const MemoCallAppBadUse = () => {
  const [age, setAge] = useState(1);
  const totalCicles = useRef(1_000_000_000);

  const multiplyAge = () => {
    setAge((prev) => prev * 2);
  };

  const expensiveInitialState = () => {
    for (let i = 0; i < totalCicles.current; i++) {
      /* empty */
    }
    console.log('value recalculated');
    return totalCicles.current;
  };

  // When button from childe is clicked, multiplyAge is called and age state changes
  // Hence, both parent and child components re-render (expensiveInitalState runs again)
  const value = expensiveInitialState();

  return (
    <div className='App'>
      <p>
        {age} and {value}
      </p>
      <Child multiplyAge={multiplyAge} />
    </div>
  );
};

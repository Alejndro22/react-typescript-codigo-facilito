import { useState, useRef, useMemo, useCallback } from 'react';
import '../../App.css';
import { Child } from '.';

export const MemoCallbackApp = () => {
  const [age, setAge] = useState(1);
  const totalCicles = useRef(1_000_000_000);

  // Now this function is memoized with useCallback, and the dependency should be setAge
  // because the function logic depends on what setAge does

  // Ts helps me here because it validate params types and order :)
  const multiplyAge = useCallback(() => {
    setAge((prev) => prev * 2);
  }, [setAge]);

  const expensiveInitialState = () => {
    for (let i = 0; i < totalCicles.current; i++) {
      /* empty */
    }
    console.log('value recalculated');
    return totalCicles.current;
  };

  // Normal useMemo behaviour, the value is the result of expensiveInitialState,
  // and that'll only change if totalCycles.current value change

  // Ts helps me to understand memo value type, and also args order when hovering useMemo
  // Also would help me if i forgot to return something from expensiveInitialState
  const value = useMemo(expensiveInitialState, [totalCicles.current]);

  return (
    <div className='App'>
      <p>
        {age} and {value}
      </p>
      {/* Now that Child component is wrapped by Memo, thanks to TS I can hover this component
          and it displays that it's type Child: React.MemoExoticComponent, and could help me to
          prevent errors  */}
      <Child multiplyAge={multiplyAge} />
    </div>
  );
};

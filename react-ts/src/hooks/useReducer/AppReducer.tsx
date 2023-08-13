import { useReducer } from 'react';
import { personReducer } from '.';
import '../../App.css';

export const AppReducer = () => {
  const [person, dispatch] = useReducer(personReducer, { name: 'John', age: 20 });

  return (
    <div className='App'>
      <h1>Age: {person.age}</h1>

      {/* Thanks to applying literal types to the reducer, now ts can detect and warn */}
      {/* Type '"incrementar"' is not assignable to type '"increment" | "decrement" | "reset"'. 
          Did you mean '"increment"'? */}
      {/* <button onClick={() => { dispatch({ type: 'incrementar' })}}> */}

      <button onClick={() => { dispatch({ type: 'increment' })}}>
        Increment
      </button>
      
      <button onClick={() => { dispatch({ type: 'decrement' });}}>
        Decrement
      </button>

      <button onClick={() => { dispatch({ type: 'reset' });}}>
        Reset
      </button>
    </div>
  );
};

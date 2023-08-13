import { useReducer } from 'react';
import '../../App.css';

export const AppReducerBadUse = () => {

  // Here the type of name: 'John', and thats because sometimes I can assign
  // a type very specefic as the value of the variable
  // let name: 'John' = 'John'

  // If I happened to assign 'Luis' this error would appear
  // name = 'Luis'
  // Type '"Luis"' is not assignable to type '"John"'

  // If let name: string = 'John' is type string, this wouuld work normally

  // Here ts shows two errors that warns me about possible bad implementations
  // Parameter 'action' implicitly has an 'any' type
  // Parameter 'state' implicitly has an 'any' type.
  const reducer = (state, action) => {
    switch (action.type) {
      case 'increment':
        return { ...state, age: state.age + 1 };
      case 'decrement':
        return { ...state, age: state.age - 1 };
      case 'reset':
        return { ...state, age: 20 };
      default:
        return state;
    }
  };

  // Here the best practice is to use a reducer, because with useState there's too
  // much flexibility, and it could lead to bad implementations, here an example:

  // const [person2, setPerson2] = useState {{ name: 'John', age: 20 });
  // setPerson() ...person, age: person. age + 1 })

  // Someone could do this and ther wouldn't be a problem, even if this logic wasn't
  // the one that was intendend (increment | decrement by 1)
  // setPerson2({ ...person2, age: person2.age * 3 });

  // Thats why here is best to use a reducer, because it limits what I can do with the state
  const [person, dispatch] = useReducer(reducer, { name: 'John', age: 20 });

  return (
    <div className='App'>
      <h1>Age: {person.age}</h1>
      
      {/* If i where to send a type that doesn't exist, if i don't validate 
      the reducer actions it could lead to app not working */}
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

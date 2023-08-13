// To solve state warning, the best practice is to assign an object type about
// what is expected to receive
// This are literal types. It's a way to represent a specific value in TypeScript.

export const personReducer = (
  state: { name: string; age: number },
  action: { type: 'increment' | 'decrement' | 'reset' }
) => {
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

import { useAge } from '.';

export const Children3 = () => {
  // Typescript helps with this context because if i din't create the context
  // it help me to know that types are expected without much trouble
  const { age, setAge } = useAge();

  return (
    <div style={{ border: '2px solid white', padding: '10px' }}>
      <h2>Children 3</h2>
      <p>Age: {age}</p>

      <button onClick={() => setAge(age + 1)}>Increment by 1</button>
    </div>
  );
};

import { Children3, useAge } from '.';

export const Children2 = () => {
  const { age } = useAge();

  return (
    <div style={{ border: '2px solid white', padding: '10px' }}>
      <h2>Children 2</h2>
      <p>Age: {age}</p>

      <Children3 />
    </div>
  );
};

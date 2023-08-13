import { memo } from 'react';

type Props = {
  multiplyAge: () => void;
};

// As learned from Fernando's React Course, memo can be used to prevent a child component
// to re-render if props doesn't change. To achieve this, multiplyAge shouldn't change
// but since is a function with parent re-render gets destroyed and created again.
// That's why useCallback is needed
export const Child = memo(({ multiplyAge }: Props) => {
  console.log('Child re-rendered');
  return (
    <div>
      <button onClick={multiplyAge}>Multiply Age</button>
    </div>
  );
});

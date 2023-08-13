import { Child } from '.';
import '../App.css';

// If an error is not handled, it propagates to children components
// and so on, after the whole app breaks

export const ErrorsApp = () => {
  return (
    <div>
      Parent
      <Child />
    </div>
  );
};

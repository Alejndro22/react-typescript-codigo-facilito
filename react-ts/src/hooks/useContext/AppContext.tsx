import '../../App.css';
import { AgeProvider, Children1 } from '.';

export const AppContext = () => {
  return (
    <div className='App'>
      <AgeProvider>
        <Children1 />
      </AgeProvider>
    </div>
  );
};

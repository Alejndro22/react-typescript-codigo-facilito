import Greeter from './Greeter';
import './App.css';

function App() {
  return (
    <>
      <div>
        <Greeter name={'Doug'} age={22}>
          <div>Hello, I'm a child component</div>
        </Greeter>
      </div>
    </>
  );
}

export default App;

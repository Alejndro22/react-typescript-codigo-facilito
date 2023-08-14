import Polymorphic from './Polymorphic';
import '../App.css';

function App() {
  return (
    <div>
      <Polymorphic
        variant='black'
        // Now thanks that as property is type: React.ElementType, TS helps me to find
        // incorrect properties, like trying to use an incorrect tag. For example:
        // Type '"divee"' is not assignable to type 'ElementType<any> | undefined'. Did you mean '"div"'?
        as={'a'}
        // and if i'd like to pass and href to a div element, this error would appear
        // ... Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref">'.
        href='src/images/image.jpg'
        target={'_blank'}
      >
        Hey
      </Polymorphic>
    </div>
  );
}

export default App;

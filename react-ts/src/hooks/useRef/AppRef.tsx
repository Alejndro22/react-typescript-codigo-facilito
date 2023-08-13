import { useRef } from 'react';
import '../../App.css';

export const AppRef = () => {
  //  Here i set the specific type to support div tags from HTML, useful to be sure
  // to work with the desired element

  // I could define type with a most ambiguous type like HTML, i can think of it like a parent
  // for more specific types, and is useful if i'm not sure which HTML element i'll work with
  // HTMLDivElement is super specific for divs
  const ref1 = useRef<HTMLDivElement>(null);

  return (
    <div className='App'>
      <div ref={ref1}>Div 1</div>
      <button
        onClick={() => {
          // ref1.current wrapped in a type guard to make sure it isn't null to prevent runtime errors
          if (ref1.current != null) {
            ref1.current.style.backgroundColor = 'red';
          }

          // Here if I tried to do this, thanks to my ref definition it show me this warning
          // property 'href' doesn't exist for type 'HTMLDivElement' (usually href is for imgs)
          // ref1.current.href = 'google.com'
        }}
      >
        Change background color
      </button>
    </div>
  );
};

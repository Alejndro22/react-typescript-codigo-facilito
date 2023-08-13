import { useRef } from 'react';
import '../../App.css';

export const AppRefBadUse = () => {
  // const ref1: React.MutableRefObject<string>;
  // Original ref1 type is React.MutableRefObject
  // Everytime somthing is wrapped by <> is used to complement original type, in this case string

  // But I can tell TS specifically what type i want the same way as useState or useContext
  // If i would like to support two types it would be useRef<string | number>
  // Here this ref can have string
  const ref1 = useRef<string>('Hi');

  return (
    <div className='App'>
      {/* First error shows up when i change types from string to HTMLDivElement*/}
      <div ref={ref1}>Div 1</div>
      <button
        onClick={() => {
          // If I left useRef<string> it shows this error
          // aproperty 'style' doesn't exist on type 'string'
          ref1.current.style.backgroundColor = 'red';
        }}
      >
        Change background color
      </button>
    </div>
  );
};

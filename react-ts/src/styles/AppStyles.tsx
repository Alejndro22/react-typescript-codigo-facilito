import '../App.css';
// import { CSSProperties } from 'react';

export const AppStyles = () => {
  return (
    <div className='App'>
      {/* Instead of using a CSS class defined on App.css like this      
      <p className="text-style">Good Night!</p> */}

      {/* Typescript is really helpful to define in-line styles
          Just remember that in-line style is not really a good practice
          if using plain css */}
      <p
        // If I hover style this shows React.HTMLAttributes<HTMLParagraphElement>.style?: React.CSSProperties
        // Telling me that type is React.CSSProperties, which can be imported from react
        style={{
          color: 'red',
          fontSize: '2rem',
          // If i tried to pull this: fontSizez: '2rem'
          // this error would show up, very useful
          // Object literal may only specify known properties, but 'fontSizez' does not exist
          // in type 'Properties<string | number, string & {}>'. Did you mean to write 'fontSize'?
        }}
      >
        Good Night!
      </p>
    </div>
  );
};

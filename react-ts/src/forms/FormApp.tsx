import { useState } from 'react';
import '../App.css';

export const FormApp = () => {
  const [clickPos, setClickPos] = useState({ x: 0, y: 0 });

  // Common Events
  // -----------------------
  // AnimationEvent
  // ChangeEvent
  // ClipboardEvent
  // CompositionEvent
  // DragEvent
  // FocusEvent
  // FormEvent
  // KeyboardEvent
  // MouseEvent
  // PointerEvent
  // TouchEvent
  // TransitionEvent

  // SyntheticEvent (this is like a very basic event, almost like an any for events)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // If I try to left this code:
    // const name = e.currentTarget.elements.namedItem('name');
    // const password = e.target.password;

    // This errors are displayes
    // Property 'elements' does not exist on type 'EventTarget & Element'
    // Property 'password' does not exist on type 'EventTarget'

    // Since forms are by default empty, TS cannot be sure that this elements are gonna exist
    // Hence, const handleSubmit = (e: React.FormEvent) needs to be indicated that a Form Element
    // is being targeted and first error is solved.

    // Here I can use as HTMLInputElement to tell TS to trust me that this wont be null
    // This actually works, but below there's a solution for both problems
    // const name = e.currentTarget.elements.namedItem('name') as HTMLInputElement;

    // Another way To prevent errors (if name is null), is to left name as:
    // const name = e.currentTarget.elements.namedItem('name');
    // and I can define a type guard
    // if (!name) return null

    // Now if I left this as:
    // const password = e.target.password;
    // It displays error: Property 'password' does not exist on type 'EventTarget'

    // To solve this, the best way is to modify a bit this type. To achieve this:
    // This is a type assertion. It's a way to tell TypeScript that you know better than it does what the type of something is
    // The typeof operator can be used to infer the type of a runtime construct.
    // Here i'm telling that target is type e.target and has name and password properties, and it would solve both problems
    const target = e.target as typeof e.target & {
      name: { value: string };
      password: { value: string };
    };

    const name = e.currentTarget.elements.namedItem('name') as HTMLInputElement;

    const password = target.password;

    console.log(name.value, password.value);
  };

  // Events are objects and are related to the input device that creates them, in this case
  // as this is a click handler, the type is a MouseEvent

  // What React does is that it takes original event objects from JS and converts them
  // to a new object, and it's type is React Object.
  // That's why i need to specify that I need a React.MouseEvent on click handler
  // const handleClick = (e: React.MouseEvent) => {

  // This can be even more specific, and define where i'm expecting this event (in a div)
  // Hence, it could also help me to prevent errors like trying to acces to properties that doesn't
  // exist on the specified event (like trying to acces to an href from a div)

  // React.MouseEvent<T = Element, E = MouseEvent>
  // First arg (T) is the element i want to 'listen'
  // Second (E) is native JS event, but ts can help me to automatically select the appropiate (99% cases)
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // If i were to make a mistake when trying to use an object property that doesnt exists
    // TS would show: Property 'clienteeeX' does not exist on type 'MouseEvent'. Did you mean 'clientX'?
    // setClickPos({ x: e.clienteeeX, y: e.clientY });

    // TS also is very useful to suggest or autocomplete with more accuracy than plain JS
    setClickPos({ x: e.clientX, y: e.clientY });
  };

  // This also works, but now im setting the type to the function instead of the arg event
  // This is more specific
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleClick2: React.MouseEventHandler<HTMLDivElement> = (e) => {
    setClickPos({ x: e.clientX, y: e.clientY });
  };

  return (
    <div
      className='App'
      style={{ border: '2px solid white', padding: '50px' }}
      // if I were to left this: onClick={handleClick}
      // TS shows this warning: Type '(e: MouseEvent) => void' is not assignable to type
      // 'MouseEventHandler<HTMLDivElement>'. Types of parameters 'e' and 'event' are incompatible.
      // This happens because i need a React.Event, as stated before

      onClick={handleClick}

      // Finally if i can't remember desired types i can define the function in-line and ts
      // would show me the types i'd be looking for
      // and when hovering on this it would show: function(e: React.MouseEvent<HTMLDivElement, MouseEvent>): void
      // just the same types I used on the handleClick function
      // onClick={(e) => setClickPos({ x: e.clientX, y: e.clientY })}
    >
      <p>
        {clickPos.x} and {clickPos.y}
      </p>
      <form
        onSubmit={handleSubmit}
        style={{ display: 'flex', flexDirection: 'column' }}
      >
        <label htmlFor='name'>Name</label>
        <input type='text' id='name' />

        <label htmlFor='password'>Password</label>
        <input type='password' id='password' />

        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

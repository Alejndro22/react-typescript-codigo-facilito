// This is a Polymorphic Component
// It is a component that can act in more than one way depending on how it is instantiated

// For dynamic props the best way to type them is by extending Props
// You can use generics in types to make them more flexible. It turns them into a kind of function,
// which can return different types depending on what you pass in.

// With this extend, i'm telling TS that there's a condition for this generic, and has to be a HTML element
type Props<C extends React.ElementType> = {
  variant: 'black' | 'white' | 'red';
  children: React.ReactNode;
  as?: C;
} & React.ComponentPropsWithoutRef<C>;
// READ THIS COMMENT AT LAST
// Now additionally to my defined properties, with & React.ComponentPropsWithoutRef<C>
// I'm telling TS to receib all the properties related to the element I send as prop to Polymorphic component

// remember that when using spread I'm passing all props without having to define them
// Now because im using Generic, i have to send a value to these Props

// You can use generics in functions to infer types based on what you call your function with.

// NOTE!!!! This doesn't work with arrow function component
// To get initial value, it can be obtained by what this function receives as prop
function Polymorphic<C extends React.ElementType>({
  variant,
  children,
  as,
  ...rest
}: Props<C>) {
  // ...
  const Component = as || 'div';
  // So now those rest props are assigned to the component with a lot of flexibility
  return (
    <Component {...rest} style={{ background: variant }}>
      {children}
    </Component>
  );
}

export default Polymorphic;

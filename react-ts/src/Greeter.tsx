// This is an object type. It's used to represent object types in TypeScript
// type Props = {
//   name: string;
//   age: number;
// For children the type used is JSX.Element or React.ReactNode
// children: React.ReactNode;

// };

// This also works when using the interface
interface Props {
  name: string;
  age: number;
  // For children the type used is JSX.Element (mostly) or React.ReactNode
  // The question mark next to this object property means that it's optional
  children?: JSX.Element;
}

// Using that object type, I can define the types i expect for my props
// This is very useful and works like Prop-Types npm package for JS
const Greeter = ({ name, age, children }: Props) => {
  const betterAge = age.toFixed();

  return (
    <div>
      <p>
        Greeter {name} you are {betterAge} years old
      </p>
      {children}
    </div>
  );
};

// This could also work instead of using and object type or an interface
//  but it'd be recommended for max 2 args
// const Greeter = ({ name, age }: { name: string, age: number }) => {

export default Greeter;

// Prop types validation can also be used in runtime, but with the above
// declarations should be enough.

// Greeter.propTypes = {
//   name: PropTypes.string.isRequired,
//   age: PropTypes.string.isRequired,
//   children: PropTypes.element
// }

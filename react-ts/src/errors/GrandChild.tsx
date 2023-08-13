type Props = {};

export const GrandChild = ({}: Props) => {
  // ... some code
  // but this doesn't work and throws an error
  // throw new Error("I'm an error");

  // When this happens, the initial scope is this component. If this error
  // isn't handled, it propagates in the component tree. And because this is never
  // handled the app braks

  // I can handle this by wrapping this component by an ErrorBoundary on the parent
  const randomFunction = () => {
    throw new Error("I'm an error");
  };

  try {
    randomFunction();
  } catch (error) {
    // This catch cannot be defined as error, because any object could be thrown to catch (not only errors)
    // Thats why it ust be 'any' or 'unknown' (unknown is by default withot setting type)

    // I can also check if this error is an instance of Error type, SyntaxError, etc
    if (error instanceof Error) {
      console.error(error.message);
    } else if (error instanceof SyntaxError) {
      console.error(error.message);
    }
  }

  // Or use the traditional Try Catch

  return <div>GrandChild</div>;
};

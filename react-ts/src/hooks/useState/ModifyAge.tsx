type Props = {
  age: number;

  // Even though prop sent is type: React.Dispatch<React.SetStateAction<number>>
  // While these types are compatible there won't be any problem.
  // This means that I get a function that gets a newAge that has number type
  // and that doesn't return anything (void)

  // setAge: (newAge: number) => void;

  // But this has some flaws, and if I send a function that matches that same type
  // structure it can lead to problems that typescript wont be able to perceive.
  // That's why the best practice is to match te exact type

  // Just like functions in JavaScript, I can pass types to other types as arguments.
  // Just like functions, they then return other types.
  setAge: React.Dispatch<React.SetStateAction<number>>;
};

export const ModifyAge = ({ age, setAge }: Props) => {
  return (
    <>
      <input
        type='number'
        value={age}
        // This triggers an error because target.value will always be a string
        // onChange={(e) => setAge(e.target.value)}

        // It can be solved like this
        onChange={(e) => setAge(parseInt(e.target.value))}
      />
      <button onClick={() => setAge(age + 1)}>Increase</button>
    </>
  );
};

/* eslint-disable @typescript-eslint/no-unused-vars */
import '../App.css';

function App() {
  const name = 'doug';

  return (
    <div>
      <SubscribedSideBar name={name} isSubscribed={false} />
      <SubscribedHeader name={name} isSubscribed={false} />
    </div>
  );
}

type OriginalProps = {
  name: string;
};

const SideBar = ({ name }: OriginalProps) => {
  // ... code

  return <div>Hi, {name}</div>;
};

const Header = ({ name }: OriginalProps) => {
  // ... code

  const favs = [1, 2, 3, 4, 5];
  return (
    <div>
      Your favs, {name}
      {favs.map((fav) => (
        <div key={fav}>{fav}</div>
      ))}
    </div>
  );
};

// Now i want this components to show contento only if user is subscribed
// This could be with an if like
// if (!isSubscribed) return <div>Please subscribe</div>

// but i would need to have this code on every component, and if something changes,
// i'd have to manually change each one

// To solve this problem, we can uso HOCs

// For these HOC i need an extended Prop types, adding isSubscribed
type ExtendedProps = OriginalProps & {
  isSubscribed: boolean;
};

// Here i define that this function is expecting only components that receive OriginalProps
function withSubscription(
  OriginalComponent: React.ComponentType<OriginalProps>
) {
  // Here I send extended props because i need isSubscribed
  const WithSubscription = (props: ExtendedProps) => {
    const { isSubscribed } = props;

    // if desired condition es false then behaves like this
    if (!isSubscribed) return <div>Please subscribe</div>;

    // if is subscribed, return original component with props
    return <OriginalComponent {...props} />;
  };

  return WithSubscription;
}

// We can create components using the above HOC and they would follow that logic
// And every change i need to made would only be on the HOC, and every component would adopt that changes
const SubscribedSideBar = withSubscription(SideBar);
const SubscribedHeader = withSubscription(Header);

export default App;

// NOTE
// Nowadays this can be achieved by customHooks, but depending my project or context
// this HOCs can also be useful

import { GrandChild } from '.';
import ErrorBoundary from './ErrorBoundary';

type Props = {};

export const Child = ({}: Props) => {
  return (
    <div>
      Child
      {/* Thanks that ErrorBoundary is wrapping GrandChild, when an error occurs
          The error stops spreading */}
      <ErrorBoundary>
        <GrandChild />
      </ErrorBoundary>
    </div>
  );
};

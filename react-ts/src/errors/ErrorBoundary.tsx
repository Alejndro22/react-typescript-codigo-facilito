// Works like a try catch but from React
// Delimits the scope for error propagation

import { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children?: ReactNode;
}

// describes component state
interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  // This component receibes an error _: Error
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public static getDerivedStateFromError(_: Error): State {
    // Update state so the nex render will show the fallback UI
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error: ', error, errorInfo);
    // Here should happen the Error management
    // Notify backend, try again, etc
  }

  // To prevent the error to keep propagating, it renders this bit of HTML
  public render() {
    if (this.state.hasError) {
      return <h1>Sorry... there was an error</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

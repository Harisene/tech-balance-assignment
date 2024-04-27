import React from 'react';
import Toast from '@components/Toast';

// Define a generic type for the incoming component's props
export type ToastProps = {
  showToast: (message: string) => void;
};

// This HOC takes a component and returns a new component
const withToast = <P extends object>(WrappedComponent: React.ComponentType<P>) => {
  // Return a new functional component
  return function WrappedWithToast(props: P) {
    // Prepare some extra information
    const [message, setMessage] = React.useState<string | undefined>(undefined);
    
    function handleClear() {
      setMessage(undefined);
    }

    function showToast(message: string) {
      setMessage(message);
    }

    // Pass all incoming props through, and add new props
    return (
      <>
      <WrappedComponent {...props as P} showToast={showToast} />
      <Toast message={message} onClear={handleClear} />
      </>
    );
  
  };
};

export default withToast;
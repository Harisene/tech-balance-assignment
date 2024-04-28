import React from 'react';
import Toast from '@components/Toast';

export type ToastProps = {
  showToast: (message: string) => void;
};

const withToast = <P extends object>(WrappedComponent: React.ComponentType<P>) => {
  return function WrappedWithToast(props: P) {
    const [message, setMessage] = React.useState<string | undefined>(undefined);
    
    function handleClear() {
      setMessage(undefined);
    }

    function showToast(message: string) {
      setMessage(message);
    }

    return (
      <>
      <WrappedComponent {...props} showToast={showToast} />
      <Toast message={message} onClear={handleClear} />
      </>
    );
  
  };
};

export default withToast;
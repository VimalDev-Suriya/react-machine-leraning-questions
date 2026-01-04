import { useCallback, useState } from 'react';
import { ToastContext } from './ToastContext';

const ToastProvider = (props) => {
  const { children } = props;
  const [toasts, setToast] = useState([]);

  const addToast = useCallback((toast) => {
    console.log('toast add', toast);
    setToast((prev) => [...prev, toast]);
  }, []);

  const removeToast = useCallback((toastId) => {
    console.log('toastid', toastId);
    setToast((prev) => prev.filter(({ id }) => id !== toastId));
  }, []);

  return (
    <ToastContext.Provider
      value={{
        toasts: toasts,
        addToast,
        removeToast,
      }}
    >
      {children}
    </ToastContext.Provider>
  );
};

export default ToastProvider;

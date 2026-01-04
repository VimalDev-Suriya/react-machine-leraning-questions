import { useCallback, useContext } from 'react';
import { ToastContext } from './ToastContext';
import { SUCCESS } from './constants';

export const useToast = () => {
  const { addToast } = useContext(ToastContext);

  const success = useCallback(
    (message, options = {}) => {
      addToast({
        ...options,
        message,
        type: SUCCESS,
      });
    },
    [addToast]
  );

  return {
    success,
  };
};

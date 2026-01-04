import { createContext } from 'react';

export const ToastContext = createContext({
  toasts: [],
  addToast: (toast) => {},
  removeToast: (id) => {},
});

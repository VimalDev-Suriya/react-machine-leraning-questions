import { useContext } from 'react';
import { ERROR, SUCCESS } from './constants';
import Toast from './Toast';
import { ToastContext } from './ToastContext';

const ToastContainer = () => {
  const { toasts, removeToast } = useContext(ToastContext);

  console.log('toasts', toasts);

  const position = 'top-right';

  const handleToastClose = (i) => {
    removeToast(i);
  };

  return (
    <div className={`toast-container toast-pos-${position}`}>
      {/* <Toast
        id={'test - 1'}
        message="hello its is success"
        type={SUCCESS}
        isClosable={true}
        handleClick={handleToastClose}
      />
      <Toast
        id={'test - 2'}
        message="hello its is failure"
        type={ERROR}
        isClosable={true}
        handleClick={handleToastClose}
      /> */}
      {toasts.map((toast) => (
        <Toast key={'id-toast-1'} {...toast} handleClick={handleToastClose} />
      ))}
    </div>
  );
};

export default ToastContainer;

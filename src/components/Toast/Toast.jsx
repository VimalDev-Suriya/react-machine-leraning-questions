import { useEffect } from 'react';
import { CLOSE } from './constants';
import ToastIcon from './ToastIcon';

const Toast = (props) => {
  const { id, message, isClosable = true, type, handleClick } = props;

  useEffect(() => {
    const timer = setTimeout(() => {
      handleClick(id);
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className={`toast toast-${type}`}>
      <ToastIcon type={type} />
      <p>{message}</p>
      {isClosable ? (
        <button
          className="toast-dismissable-button"
          onClick={() => handleClick(id)}
        >
          <ToastIcon type={CLOSE} />
        </button>
      ) : null}
    </div>
  );
};

export default Toast;

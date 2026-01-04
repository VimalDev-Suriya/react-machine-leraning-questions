import { CLOSE } from './constants';
import ToastIcon from './ToastIcon';

const Toast = (props) => {
  const { id, message, isClosable = true, type, handleClick } = props;

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

import { SiTicktick } from 'react-icons/si';
import { CLOSE, ERROR, INFO, SUCCESS, WARNING } from './constants';
import { CiCircleInfo, CiWarning } from 'react-icons/ci';
import { MdOutlineErrorOutline } from 'react-icons/md';
import { IoCloseSharp } from 'react-icons/io5';

const ToastIcon = (props) => {
  const { type } = props;

  switch (type) {
    case SUCCESS:
      return <SiTicktick />;
    case WARNING:
      return <CiWarning />;
    case ERROR:
      return <MdOutlineErrorOutline />;
    case INFO:
      return <CiCircleInfo />;
    case CLOSE:
      return <IoCloseSharp />;
    default:
      return null;
  }
};

export default ToastIcon;

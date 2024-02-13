import { Bounce, toast } from 'react-toastify';
import { ToastOptions } from 'react-toastify/dist/types';


const options: ToastOptions = {
  position: 'bottom-right',
  autoClose: 5000,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  theme: 'light',
  transition: Bounce,
}

class Notification {
  static info(text: string) {
    toast.info(text, options);
  }
  static success(text: string) {
    toast.success(text, options);
  }
  static warning(text: string) {
    toast.warning(text, options);
  }
  static error(text: string, errMessage: Error){
    toast.error(text, options);
    throw new Error(errMessage.message);
  }
}

export default Notification;

import {ToastAndroid} from 'react-native';

const Toast = (message, duration = 'LONG', position = 'CENTER') => {
  ToastAndroid.showWithGravity(
    message,
    ToastAndroid[duration],
    ToastAndroid[position],
  );
};
export default Toast;

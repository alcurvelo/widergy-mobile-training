import {ToastAndroid} from 'react-native';

const Toast = (message, duration, position) => {
  ToastAndroid.showWithGravity(
    message,
    ToastAndroid[duration],
    ToastAndroid[position],
  );
};
export default Toast;

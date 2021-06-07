import {ToastAndroid} from 'react-native';

const Toast = (message, duration, position, x, y) => {
  ToastAndroid.showWithGravityAndOffset(
    message,
    ToastAndroid[duration],
    ToastAndroid[position],
    x,
    y,
  );
};
export default Toast;

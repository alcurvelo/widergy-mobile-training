import { ToastAndroid } from 'react-native';

const Toast = (
  message,
  duration = 'SHORT',
  position = 'CENTER',
  x = 0,
  y = 0,
) => {
  ToastAndroid.showWithGravityAndOffset(
    message,
    ToastAndroid[duration],
    ToastAndroid[position],
    x,
    y,
  );
};
export default Toast;

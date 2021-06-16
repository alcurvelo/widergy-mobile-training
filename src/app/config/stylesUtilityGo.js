import { UTProgressBar } from '@widergy/mobile-ui';

import Colors from './colors';

export default {
  colors: {
    primary: Colors.secondary,
    secondary: Colors.primaryVariant,
  },
  progressBar: {
    borderStyle: UTProgressBar.BorderStyles.ROUND,
    barContainer: {
      backgroundColor: Colors.white,
      height: 7,
    },
    progressBar: {
      backgroundColor: Colors.status0,
    },
  },
  alert: {
    error: Colors.status1,
    info: Colors.status3,
    warning: Colors.status2,
    success: Colors.status0,
  },
  modal: {
    accept: '#4D98FA',
  },
};

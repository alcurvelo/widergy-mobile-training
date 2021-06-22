import { lowerCaracter } from './normalizers';
import { validateEmail, validatePassword, equalPasswords } from './validations';

const REP_EXP_EMAIL = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const MIN_LENGHT_PASSWORD = 8;

export const FIELDS_LOGIN = [
  {
    name: 'email',
    type: 'email',
    placeholder: 'Correo eléctronico',
    normalize: lowerCaracter,
    validate: validateEmail(REP_EXP_EMAIL),
  },
  {
    name: 'password',
    type: 'password',
    placeholder: 'Contraseña',
    validate: validatePassword(MIN_LENGHT_PASSWORD),
  },
];

export const FIELS_NEW_USER = [
  ...FIELDS_LOGIN,
  {
    name: 'confirmPassword',
    type: 'password',
    placeholder: 'Confirma la contraseña',
    validate: equalPasswords,
  },
];

export const PROPERTIES_BY_TYPE_FIELD = {
  password: {
    secureTextEntry: true,
  },
};

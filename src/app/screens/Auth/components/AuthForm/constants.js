import { lowerCaracter } from './normalizers';

export const fieldsLogin = [
  {
    name: 'email',
    type: 'email',
    placeholder: 'Correo eléctronico',
    normalize: lowerCaracter,
  },
  { name: 'password', type: 'password', placeholder: 'Contraseña' },
];

export const fieldsNewUser = [
  ...fieldsLogin,
  {
    name: 'confirmPassword',
    type: 'password',
    placeholder: 'Confirma la contraseña',
  },
];

export const propertiesByTypeField = {
  password: {
    secureTextEntry: true,
  },
};

export const validateEmail = REG_EXP_MAIL => email => {
  if (!REG_EXP_MAIL.test(email)) {
    return 'Debe ser una direccion de correo eléctronico valida.';
  }
};

export const validatePassword = MIN_LENGHT_PASSWORD => password => {
  if (password?.length < MIN_LENGHT_PASSWORD) {
    return `La longitud debe ser de almenos ${MIN_LENGHT_PASSWORD} caracteres`;
  }
};

export const equalPasswords =
  () =>
  ({ password, confirmPassword }) => {
    if (password !== confirmPassword) {
      return 'Las contraseñas deben ser iguales.';
    }
  };

export const required = () => value => {
  if (value?.length < 1 || value === undefined) {
    return 'Este campo es requerido';
  }
};

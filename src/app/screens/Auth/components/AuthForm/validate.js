export const validate = ({ email, password, confirmPassword = false }) => {
  const errors = {};
  if (!email) {
    errors.username = 'Este campo es requerido';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
    errors.email = 'Debe ser una direccion de correo eléctronico.';
  }
  if (!password) {
    errors.password = 'La contraseña es requerida.';
  }
  if (confirmPassword && password !== confirmPassword) {
    errors.confirmPassword = 'Las contraseñas deben ser iguales.';
  }
  return errors;
};

export const warn = ({ email, password, confirmPassword = false }) => {
  const warnings = {};
  if (email && email.length < 8) {
    warnings.email = 'Debe tener más de 8 caracteres.';
  }
  if (password && password.length < 8) {
    warnings.password = 'La longitud debe ser de almenos 8 caracteres.';
  }
  if (confirmPassword && confirmPassword.length < 8) {
    warnings.confirmPassword = 'La longitud debe ser de almenos 8 caracteres.';
  }
  return warnings;
};

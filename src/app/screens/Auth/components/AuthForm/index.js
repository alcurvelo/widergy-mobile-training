import React, { Fragment } from 'react';
import { Text, Keyboard, TouchableOpacity } from 'react-native';
import { Field, reduxForm } from 'redux-form';
import { useSelector, useDispatch } from 'react-redux';

import { validate, warn } from './validate';
import authActions from '../../../../redux/auth/actions';
import renderField from './components/renderField';
import { fieldsLogin, fieldsNewUser, propertiesByTypeField } from './constants';
import styles from './styles';

const AuthForm = ({ handleSubmit, pristine, reset, screenView, invalid }) => {
  const values = useSelector(state => state.form.authForm.values);
  const dispatch = useDispatch();
  const signIn = () => dispatch(authActions.signIn(values));
  const newUser = () => dispatch(authActions.newUser(values));
  const fields = screenView ? fieldsLogin : fieldsNewUser;

  const handleOnSubmit = objValues => {
    Keyboard.dismiss();
    handleSubmit(objValues);
    screenView ? signIn() : newUser();
  };
  return (
    <Fragment>
      {fields.map(({ name, type, placeholder, normalize }, key) => {
        return (
          <Field
            key={key}
            placeholder={placeholder}
            name={name}
            {...propertiesByTypeField[type]}
            component={renderField}
            normalize={normalize}
          />
        );
      })}
      <TouchableOpacity
        onPress={handleOnSubmit}
        style={[styles.buttonConfirm]}
        disabled={
          invalid ||
          pristine ||
          (!screenView &&
            !(
              values.hasOwnProperty('confirmPassword') &&
              values.password === values.confirmPassword
            ))
        }
      >
        <Text style={styles.textButonConfirm}>
          {screenView ? 'Entrar' : 'Regístrar'}
        </Text>
      </TouchableOpacity>
    </Fragment>
  );
};

export default reduxForm({
  form: 'authForm',
  validate,
  warn,
})(AuthForm);

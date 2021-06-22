import React, { Fragment } from 'react';
import { Text, Keyboard, TouchableOpacity } from 'react-native';
import { Field, reduxForm } from 'redux-form';
import { useSelector, useDispatch } from 'react-redux';

import authActions from '../../../../redux/auth/actions';
import renderField from './components/renderField';
import {
  FIELDS_LOGIN,
  FIELS_NEW_USER,
  PROPERTIES_BY_TYPE_FIELD,
} from './constants';
import styles from './styles';

const AuthForm = ({
  handleSubmit,
  screenView,
  invalid,
  submitFailed,
  pristine,
}) => {
  const values = useSelector(state => state.form.authForm?.values);
  const dispatch = useDispatch();
  const signIn = () => dispatch(authActions.signIn(values));
  const newUser = () => dispatch(authActions.newUser(values));
  const fields = screenView ? FIELDS_LOGIN : FIELS_NEW_USER;

  const handleOnSubmit = value => {
    Keyboard.dismiss();
    handleSubmit(value);
    if (!(invalid && pristine) && submitFailed) {
      screenView ? signIn() : newUser();
    }
  };
  return (
    <Fragment>
      {fields.map(({ name, type, placeholder, normalize, validate }, key) => {
        return (
          <Field
            key={key}
            placeholder={placeholder}
            name={name}
            {...PROPERTIES_BY_TYPE_FIELD[type]}
            component={renderField}
            normalize={normalize}
            validate={validate}
          />
        );
      })}
      <TouchableOpacity
        disabled={submitFailed && invalid}
        onPress={handleOnSubmit}
        style={[styles.buttonConfirm]}
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
})(AuthForm);

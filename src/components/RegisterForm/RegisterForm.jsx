import { useMemo } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

import useForm from '../../hooks/useForm';

import TextField from '../../components/TextField/TextField';
import fields from './fields';
import s from './RegisterForm.module.css';

const RegisterForm = ({ onSubmit }) => {
  const initialState = {
    name: '',
    email: '',
    password: '',
  };

  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });

  const nameId = useMemo(() => nanoid(), []);
  const emailId = useMemo(() => nanoid(), []);
  const passwordId = useMemo(() => nanoid(), []);

  const { name, email, password } = state;

  return (
    <div className={s.register_form}>
      <form onSubmit={handleSubmit} autoComplete="on">
        <div className={s.input_list}>
          <TextField
            id={nameId}
            value={name}
            handleChange={handleChange}
            {...fields.name}
          />
          <TextField
            id={emailId}
            value={email}
            handleChange={handleChange}
            {...fields.email}
          />
          <TextField
            id={passwordId}
            value={password}
            handleChange={handleChange}
            {...fields.password}
          />
        </div>
        <button className={s.register_btn}>Register</button>
      </form>
    </div>
  );
};

export default RegisterForm;

RegisterForm.defaultProps = {
  onSubmit: () => {},
};

RegisterForm.propTypes = {
  onSubmit: PropTypes.func,
};

import { useMemo } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

import useForm from '../../hooks/useForm';
import TextField from '../../components/TextField/TextField';
import s from './LoginForm.module.css';

const LoginForm = ({ onSubmit }) => {
  const initialState = {
    email: '',
    password: '',
  };

  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });

  const emailId = useMemo(() => nanoid(), []);
  const passwordId = useMemo(() => nanoid(), []);

  const { email, password } = state;
  return (
    <>
      {' '}
      <div className={s.login_form}>
        <form className={s.form} onSubmit={handleSubmit} autoComplete="off">
          <div className={s.input_list}>
            <TextField
              id={emailId}
              value={email}
              handleChange={handleChange}
              label="Email"
              name="email"
              type="email"
              placeholder="Enter user email"
              required
            />
            <TextField
              id={passwordId}
              value={password}
              handleChange={handleChange}
              label="Password"
              name="password"
              type="password"
              placeholder="Enter user password"
              required
            />
          </div>
          <button className={s.login_btn}>Login</button>
        </form>
      </div>
    </>
  );
};

export default LoginForm;

LoginForm.defaultProps = {
  onSubmit: () => {},
};

LoginForm.propTypes = {
  onSubmit: PropTypes.func,
};

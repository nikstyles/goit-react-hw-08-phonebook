// // redux
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/auth-operations';
import LoginForm from '../../components/LoginForm/LoginForm';
import s from './LoginPage.module.css';

export default function LoginPage() {
  const dispatch = useDispatch();

  const onLogin = data => {
    dispatch(login(data));
  };

  return (
    <div className={s.login_form}>
      <LoginForm onSubmit={onLogin} />
    </div>
  );
}

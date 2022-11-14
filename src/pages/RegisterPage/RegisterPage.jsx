// redux
import { useDispatch } from 'react-redux';
import { signup } from '../../redux/auth/auth-operations';
// components
import RegisterForm from '../../components/RegisterForm/RegisterForm';
import s from './RegisterPage.module.css';

export default function RegisterPage() {
  const dispatch = useDispatch();

  const onRegister = data => {
    dispatch(signup(data));
  };

  return (
    <div className={s.register_form}>
      <RegisterForm onSubmit={onRegister} />
    </div>
  );
}

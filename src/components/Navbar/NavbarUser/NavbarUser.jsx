//redux
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../../redux/auth/auth-operations';
import { getUser } from '../../../redux/auth/auth-selectors';
import s from './NavbarUser.module.css';

export default function NavbarUser({ openMenu }) {
  const dispatch = useDispatch();
  const { name } = useSelector(getUser);

  const onLogout = () => {
    dispatch(logout());
  };

  return (
    <div className={openMenu ? [s.user, s.active].join(' ') : s.user}>
      <div className={s.user_wrap}>
        <p className={s.title_welcome}>{`Welcome, ${name}`} </p>
        <button className={s.logout_btn} onClick={onLogout}>
          Logout
        </button>
      </div>
    </div>
  );
}

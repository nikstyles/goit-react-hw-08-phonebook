import { NavLink } from 'react-router-dom';
import s from './NavbarAuth.module.css';
import { useState, useEffect } from 'react';

export default function NavbarAuth({ openMenu, openBtn }) {
  const [matches, setMatches] = useState(
    window.matchMedia('(min-width: 768px)').matches
  );

  useEffect(() => {
    window
      .matchMedia('(min-width: 768px)')
      .addEventListener('change', e => setMatches(e.matches));
  }, []);

  const onLinkes = () => {
    openBtn(false);
  };

  return (
    <div
      className={openMenu ? [s.navbar_auth, s.active].join(' ') : s.navbar_auth}
    >
      <div className={s.links}>
        <NavLink className={s.register} to="/register" onClick={onLinkes}>
          Register
        </NavLink>
        {matches && '  |  '}
        <NavLink className={s.login} to="/login" onClick={onLinkes}>
          Login
        </NavLink>
      </div>
    </div>
  );
}

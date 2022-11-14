import { NavLink } from 'react-router-dom';
import s from './NavbarAuth.module.css';
import { useState, useEffect } from 'react';

export default function NavbarAuth() {
  const [matches, setMatches] = useState(
    window.matchMedia('(min-width: 1140px)').matches
  );

  useEffect(() => {
    window
      .matchMedia('(min-width: 1140px)')
      .addEventListener('change', e => setMatches(e.matches));
  }, []);

  return (
    <div className={s.navbar_auth}>
      <NavLink className={s.register} to="/register">
        Register
      </NavLink>
      {matches && '|'}
      <NavLink className={s.login} to="/login">
        Login
      </NavLink>
    </div>
  );
}

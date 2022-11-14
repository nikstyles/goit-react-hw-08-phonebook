import { Link } from 'react-router-dom';
import { MdOutlineContactPhone } from 'react-icons/md';
import NavbarMenu from './NavbarMenu/NavbarMenu';
import NavbarAuth from './NavbarAuth/NavbarAuth';
import NavbarUser from './NavbarUser/NavbarUser';
import useAuth from 'hooks/useAuth';
import s from './navbar.module.css';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [matches, setMatches] = useState(
    window.matchMedia('(min-width: 1140px)').matches
  );

  useEffect(() => {
    window
      .matchMedia('(min-width: 1140px)')
      .addEventListener('change', e => setMatches(e.matches));
  }, []);

  const isLogin = useAuth();
  return (
    <nav className={s.navbar}>
      <div className={s.container}>
        <div className={s.row}>
          <Link className={s.logo} to="/">
            <MdOutlineContactPhone size={30} />
            &lt;MyPhonebook&gt;
          </Link>
          {isLogin && matches && <NavbarMenu />}
          {isLogin ? <NavbarUser /> : <NavbarAuth />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

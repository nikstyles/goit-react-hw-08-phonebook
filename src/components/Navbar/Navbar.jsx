import { Link } from 'react-router-dom';
import { MdOutlineContactPhone } from 'react-icons/md';
import NavbarMenu from './NavbarMenu/NavbarMenu';
import NavbarAuth from './NavbarAuth/NavbarAuth';
import NavbarUser from './NavbarUser/NavbarUser';
import useAuth from 'hooks/useAuth';
import s from './navbar.module.css';
import React, { useState, useEffect } from 'react';
import MobileBtn from './MobileBtn/MobileBtn';

const Navbar = () => {
  const [matches, setMatches] = useState(
    window.matchMedia('(min-width: 768px)').matches
  );

  useEffect(() => {
    window
      .matchMedia('(min-width: 768px)')
      .addEventListener('change', e => setMatches(e.matches));
  }, []);

  const [openMenu, setOpenMenu] = useState(false);

  const isLogin = useAuth();

  return (
    <nav className={s.navbar}>
      <div className={s.container}>
        <div className={s.row}>
          <Link className={s.logo} to="/">
            <MdOutlineContactPhone size={30} />
            &lt;MyPhonebook&gt;
          </Link>

          <React.Fragment>
            {isLogin && (
              <NavbarMenu openBtn={setOpenMenu} openMenu={openMenu} />
            )}
            {isLogin ? (
              <NavbarUser openBtn={setOpenMenu} openMenu={openMenu} />
            ) : (
              <NavbarAuth openBtn={setOpenMenu} openMenu={openMenu} />
            )}
            {!matches && (
              <MobileBtn openBtn={setOpenMenu} openMenuBoolin={openMenu} />
            )}
          </React.Fragment>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

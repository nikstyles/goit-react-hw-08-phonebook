import { NavLink } from 'react-router-dom';

import s from './navbar-menu.module.css';

import items from './items';

const getClassName = ({ isActive }) => {
  return isActive ? `${s.link} ${s.active}` : s.link;
};

const NavbarMenu = ({ openMenu, openBtn }) => {
  const elements = items.map(({ id, to, text }) => (
    <li className={s.li} key={id}>
      <NavLink
        className={getClassName}
        onClick={() => {
          openMenu ? openBtn(false) : console.log('ybxtuj');
        }}
        to={to}
      >
        {text}
      </NavLink>
    </li>
  ));

  console.log(openMenu);
  return (
    <div className={openMenu ? [s.menu, s.active].join(' ') : s.menu}>
      <ul className={s.ul}>{elements}</ul>
    </div>
  );
};

export default NavbarMenu;

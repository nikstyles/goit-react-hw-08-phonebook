import { NavLink } from 'react-router-dom';

import s from './navbar-menu.module.css';

import items from './items';

const getClassName = ({ isActive }) => {
  return isActive ? `${s.link} ${s.active}` : s.link;
};

const NavbarMenu = () => {
  const elements = items.map(({ id, to, text }) => (
    <li key={id}>
      <NavLink className={getClassName} to={to}>
        {text}
      </NavLink>
    </li>
  ));

  return <ul className={s.menu}>{elements}</ul>;
};

export default NavbarMenu;

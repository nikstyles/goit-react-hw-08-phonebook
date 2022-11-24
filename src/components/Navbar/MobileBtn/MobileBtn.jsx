import s from './MobileBtn.module.css';
// import { useState } from 'react';

export default function MobileBtn({ openBtn, openMenuBoolin }) {
  //   const [openMenu, setOpenMenu] = useState(false);

  const menu = () => {
    openBtn(!openMenuBoolin);
  };

  return (
    <div onClick={menu} className={s.hamburger_lines}>
      <span
        className={openMenuBoolin ? `${s.line1} ${s.checked}` : s.line1}
      ></span>
      <span
        className={openMenuBoolin ? `${s.line2} ${s.checked}` : s.line2}
      ></span>
      <span
        className={openMenuBoolin ? `${s.line3} ${s.checked}` : s.line3}
      ></span>
    </div>
  );
}

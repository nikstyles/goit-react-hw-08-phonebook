// import { Link } from 'react-router-dom';
import phonebookImg from '../../images/home-page.png';
import s from './NotFoundPage.module.css';

const NotFoundPage = () => {
  return (
    <div className={s.container}>
      {/* <h1 className="page-title">Page not found</h1> */}
      <div className={s.hero_wrap}>
        <div className={s.text}>
          <h1 className={s.title}>Create your personal phonebook</h1>
          <p className={s.second_text}>
            welcome page{' '}
            <span role="img" aria-label="Greeting icon">
              💁‍♀️
            </span>
          </p>
        </div>
        <img className={s.phonebook_img} src={phonebookImg} alt="phonebook" />
      </div>
      {/* <Link to="/">To home page</Link> */}
    </div>
  );
};

export default NotFoundPage;

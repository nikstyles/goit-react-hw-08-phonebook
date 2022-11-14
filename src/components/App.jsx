// react
import { useEffect } from 'react';
// redux
import { useDispatch, useSelector } from 'react-redux';

import { current } from '../redux/auth/auth-operations';
import { getLoadingUserStatus } from '../redux/auth/auth-selectors';

import s from './App.module.css';
import UserRoutes from '../UserRoutes';
import Navbar from '../components/Navbar/Navbar';

export function App() {
  const dispatch = useDispatch();
  const isLoadingUser = useSelector(getLoadingUserStatus);

  useEffect(() => {
    dispatch(current());
  }, [dispatch]);

  return (
    <div className={s.phonebook}>
      {isLoadingUser ? (
        <p>Loading ...</p>
      ) : (
        <>
          <Navbar />
          <UserRoutes />
        </>
      )}
    </div>
  );
}

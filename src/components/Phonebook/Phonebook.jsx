import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import s from './Phonebook.module.css';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchContacts,
  addContact,
} from '../../redux/contacts/contacts-operation';

import { getFilteredContacts } from '../../redux/contacts/contacts-selectors';
import { useEffect } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MoonLoader from 'react-spinners/MoonLoader';

export default function Phonebook() {
  const loading = useSelector(state => state.contacts.loading);
  const items = useSelector(getFilteredContacts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const formSubmitHandler = contact => {
    const { name } = contact;
    const checkAddName = items.some(el => el.name === name);

    if (checkAddName) {
      return toast.error(`${name} is already in contacts.`, {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }

    // в contacts записується новий масив в який розпилюється
    // попереднє значення та додається новий контакт
    const action = addContact(contact);
    dispatch(action);
  };

  return (
    <div className={s.phonebook}>
      <div className={s.phonebook__card}>
        <h1 className={s.phonebook__title}>Phonebook</h1>
        <ContactForm addContact={formSubmitHandler} />

        <div className={s.phonebook__wrapper}>
          <h2 className={s.phonebook__second_title}>Contacts</h2>
          <MoonLoader
            color={'#6afff3'}
            loading={loading}
            size={15}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
        <Filter />
        {items.length === 0 ? (
          <p className={s.empty__text}>Phone book is empty</p>
        ) : (
          <ContactList contacts={items} />
        )}
      </div>
      <ToastContainer
        theme="colored"
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

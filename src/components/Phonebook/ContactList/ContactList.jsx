import PropTypes from 'prop-types';
import ContactItem from 'components/Phonebook/ContactItem/ContactItem';
import s from './ContactList.module.css';

export default function ContactList({ contacts }) {
  console.log(contacts);
  return (
    <>
      <ul className={s.contacts__list}>
        {contacts?.map(({ id, name, number }) => (
          <ContactItem key={id} id={id} name={name} number={number} />
        ))}
      </ul>
    </>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
};

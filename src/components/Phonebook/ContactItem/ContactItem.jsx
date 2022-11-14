import { RiDeleteBin2Fill, RiUser3Fill } from 'react-icons/ri';
import s from './ContactItem.module.css';
import PropTypes from 'prop-types';
import { removeContact } from '../../../redux/contacts/contacts-operation';
import { useDispatch } from 'react-redux';

export default function ContactItem({ name, number, id }) {
  const dispatch = useDispatch();

  const deleteContact = () => {
    // повертаються всі контакти що не дорівнюють "Id",
    // тобто того що ми хочемо видалити
    const action = removeContact(id);
    dispatch(action);
  };

  return (
    <>
      <li className={s.contacts__item}>
        <RiUser3Fill size={20} />
        {name} <span>{number}</span>
        <button className={s.contacts__btn} id={id} onClick={deleteContact}>
          <RiDeleteBin2Fill size={20} cursor="pointer" />
        </button>
      </li>
    </>
  );
}

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

import s from './Filter.module.css';
import { RiSearchLine } from 'react-icons/ri';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../../../redux/filter/filter-actions';
import { getFilter } from '../../../redux/filter/filter-selectors';

export default function Filter({ input }) {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const handleChange = event => {
    dispatch(setFilter(event.currentTarget.value));
  };

  return (
    <div className={s.search}>
      {/* <p>Find contacts by name</p> */}
      <RiSearchLine size={20} className={s.search__icon} />
      <input
        className={s.search__input}
        type="text"
        placeholder="Find contacts by name"
        name="filter"
        onChange={handleChange}
        value={filter}
      />
    </div>
  );
}

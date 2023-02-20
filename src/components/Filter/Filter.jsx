import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filterSlice';
import { selectContacts, selectFilter } from 'redux/selectors';
import css from './Filter.module.scss';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleChangeFilter = event => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <label className={css.label}>
      Find contact by name:
      <input
        className={css.input}
        type="text"
        name="filter"
        onChange={handleChangeFilter}
        value={useSelector(selectFilter)}
        disabled={useSelector(selectContacts).length === 0}
      />
    </label>
  );
};
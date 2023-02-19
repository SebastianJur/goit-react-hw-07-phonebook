import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectContactsCount } from '../../redux/selectors';
import {
  sortContactsAz,
  sortContactsAzReverse,
  sortContactsByDate,
  sortContactsByDateReverse,
} from '../../redux/contactsSlice';
import { Filter } from '../Filter/Filter';
import css from './StatusBar.module.scss';

export const StatusBar = () => {
  const [sorted, setSorted] = useState({
    sortedAlphabetically: false,
    sortedByDate: false,
  });
  const dispatch = useDispatch();
  const { total } = useSelector(selectContactsCount);

  const handleSortAzContacts = () => {
    if (sorted.sortedAlphabetically) {
      dispatch(sortContactsAzReverse());
      setSorted({ sortedAlphabetically: false, sortedByDate: false });
    } else {
      dispatch(sortContactsAz());
      setSorted({ sortedAlphabetically: true, sortedByDate: false });
    }
  };

  const handleSortDateContacts = () => {
    if (sorted.sortedByDate) {
      dispatch(sortContactsByDateReverse());
      setSorted({ sortedAlphabetically: false, sortedByDate: false });
    } else {
      dispatch(sortContactsByDate());
      setSorted({ sortedAlphabetically: false, sortedByDate: true });
    }
  };

  return (
    <div className={css.StatusBar}>
      <div className={css.infoSection}>
        <div className={css.counter}>
          <p className={css.counter__header}>You have</p>
          <p className={css.counter__data}>
            {total} {total === 1 ? 'contact' : 'contacts'}
          </p>
        </div>
        {total > 0 && (
          <div className={css.buttons}>
            <button
              className={css.button}
              type="button"
              title={
                sorted.sortedAlphabetically
                  ? 'Sort by name Z-A'
                  : 'Sort by name A-Z'
              }
              onClick={handleSortAzContacts}
            >
              Sort alphabetically
            </button>
            <button
              className={css.button}
              type="button"
              title={
                sorted.sortedByDate
                  ? 'Sort by date added reverse'
                  : 'Sort by date added'
              }
              onClick={handleSortDateContacts}
            >
              Sort by date added
            </button>
          </div>
        )}
      </div>
      <Filter />
    </div>
  );
};

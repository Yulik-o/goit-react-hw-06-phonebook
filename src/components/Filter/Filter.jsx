//import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/selectors';
import { changeFilter } from 'redux/slice';

export function Filter() {
  const dispatch = useDispatch();
  const value = useSelector(selectFilter);
  const onChange = event => {
    const { value } = event.target;
    dispatch(changeFilter(value));
  };

  return (
    <div>
      <h4>Find contacts by name</h4>
      <input type="text" name="filter" value={value} onChange={onChange} />
    </div>
  );
}

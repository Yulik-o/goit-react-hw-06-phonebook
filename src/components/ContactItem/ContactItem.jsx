import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/slice';
import StyledButton from './ContactItem.styled';

export function ContactItem({ name, number, btnId }) {
  const dispatch = useDispatch();
  const deleteItem = event => {
    dispatch(deleteContact(event.target.id));
  };
  return (
    <li>
      {name}: {number}
      <StyledButton id={btnId} onClick={deleteItem}>
        Delete
      </StyledButton>
    </li>
  );
}

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,

  btnId: PropTypes.string.isRequired,
};

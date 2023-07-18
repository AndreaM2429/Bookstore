import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../../redux/books/booksSlice';

const ButtonDelete = ({ id }) => {
  const dispatch = useDispatch();
  return (
    <button type="button" onClick={() => dispatch(removeBook(id))}>Delete</button>
  );
};

ButtonDelete.propTypes = {
  id: PropTypes.string.isRequired,
};

export default ButtonDelete;

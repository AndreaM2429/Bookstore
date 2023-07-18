import { useDispatch } from 'react-redux';
import { addBook } from '../../redux/books/booksSlice';
import books from '../ListBooks';

const ButtonAdd = () => {
  const dispatch = useDispatch();

  const SubmitBook = (e) => {
    const button = e.target;
    const dataForm = button.parentElement;
    const book = dataForm.querySelector('#bookTitle').value;
    const author = dataForm.querySelector('#author').value;

    if (book === '' || author === '') {
      const message = 'Enter all the data please';
      document.querySelector('.messagecont').textContent = message;
    } else {
      document.querySelector('.messagecont').textContent = '';
      dispatch(addBook(books(book, author)));
      dataForm.reset();
    }
  };
  return (
    <button type="submit" onClick={(e) => SubmitBook(e)}>Submit</button>
  );
};

export default ButtonAdd;

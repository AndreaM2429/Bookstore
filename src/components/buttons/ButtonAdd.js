import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { addBook } from '../../redux/books/booksSlice';
import books from '../ListBooks';

const ButtonAdd = () => {
  const dispatch = useDispatch();
  const [book, setBook] = useState('');
  const [author, setAuthor] = useState('');

  const SubmitBook = (e) => {
    const button = e.target;
    const dataForm = button.parentElement;

    setBook(dataForm.bookTitle.value);
    setAuthor(dataForm.author.value);
    if (book === '' || author === '') {
      document.querySelector('.messagecont').textContent = 'Enter all the data please';
    }
  };

  useEffect(() => {
    if (book !== '' && author !== '') {
      dispatch(addBook(books(book, author)));
      setBook('');
      setAuthor('');
      document.querySelector('form').reset();
      document.querySelector('.messagecont').textContent = '';
    }
  }, [book, author, dispatch]);
  return (
    <button type="button" onClick={SubmitBook}>Submit</button>
  );
};

export default ButtonAdd;

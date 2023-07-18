import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { addNewBook } from '../../redux/books/booksSlice';
import books from '../ListBooks';

const ButtonAdd = () => {
  const dispatch = useDispatch();
  const [book, setBook] = useState('');
  const [author, setAuthor] = useState('');
  const [catego, setCatego] = useState('');

  const SubmitBook = (e) => {
    const button = e.target;
    const dataForm = button.parentElement;

    setBook(dataForm.bookTitle.value);
    setAuthor(dataForm.author.value);
    setCatego(dataForm.categories.value);
    if (book === '' || author === '' || catego === 'None') {
      document.querySelector('.messagecont').textContent = 'Enter all the data please';
    }
  };

  useEffect(() => {
    if (book !== '' && author !== '' && catego !== 'None') {
      dispatch(addNewBook(books(book, author, catego)));
      setBook('');
      setAuthor('');
      document.querySelector('form').reset();
      document.querySelector('.messagecont').textContent = '';
    }
  }, [book, author, catego, dispatch]);
  return (
    <button type="button" onClick={SubmitBook}>Submit</button>
  );
};

export default ButtonAdd;

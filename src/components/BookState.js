import { useSelector } from 'react-redux';
import Bookcard from './BookCard';

function BookState() {
  const { arrBooks } = useSelector((state) => state.books);
  return (
    <section className="d-flex-column books-container">
      {arrBooks.map((book) => (
        <Bookcard bookArr={book} key={book.item_id} />
      ))}
    </section>
  );
}

export default BookState;

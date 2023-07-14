import { books as ArrBooks } from './ListBooks';
import Bookcard from './BookCard';

function BookState() {
  return (
    <section className="d-flex-column books-container">
      {ArrBooks.map((book) => (
        <Bookcard bookArr={book} key={book.id} />
      ))}
    </section>
  );
}

export default BookState;

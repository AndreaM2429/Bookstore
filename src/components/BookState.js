import { useSelector } from 'react-redux';
import Bookcard from './BookCard';

function BookState() {
  const { arrBooks, generalError } = useSelector((state) => state.books);
  if (generalError === true) {
    return (
      <section className="d-flex-column catego-page">
        <h2>Ops....something went wrong!</h2>
        <h4>Refresh the page please.</h4>
      </section>
    );
  }
  if (arrBooks.length !== 0) {
    return (
      <section className="d-flex-column books-container">
        {arrBooks.map((book) => (
          <Bookcard bookArr={book} key={book.item_id} />
        ))}
      </section>
    );
  }
  return (
    <section className="d-flex-column books-container">
      <h2>Your bookstore is empty....</h2>
      <h3>Let&apos;s add some books!</h3>
    </section>
  );
}

export default BookState;

import '../styles/books.css';
import BookState from '../components/BookState';
import AddBook from '../components/Form';

function BooksPage() {
  return (
    <>
      <BookState />
      <AddBook />
    </>
  );
}

export default BooksPage;

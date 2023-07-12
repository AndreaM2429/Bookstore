import { books as ArrBooks } from './ListBooks';

function BookState() {
  return (
    <section className="d-flex-column books-container">
      {ArrBooks.map((book) => (
        <section className="d-flex book-card" key={book.tittle}>
          <div key={book.tittle}>
            <h2>{book.tittle}</h2>
            <p>{book.author}</p>
            <button type="button">Delete</button>
          </div>
          <div className="d-flex-column book-status">
            <div>
              <span>{book.completed}</span>
              <span>Completed</span>
            </div>
            <div>
              <span>Current Chapter</span>
              <span>
                Chapter
                {book.chapter}
              </span>
            </div>
          </div>
        </section>
      ))}
    </section>
  );
}

export default BookState;

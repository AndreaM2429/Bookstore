import PropTypes from 'prop-types';

function Bookcard({ bookArr }) {
  return (
    <section className="d-flex book-card" key={bookArr.id}>
      <div key={bookArr.id}>
        <h4 className="book-data">{bookArr.category}</h4>
        <h2 className="book-data">{bookArr.tittle}</h2>
        <p className="book-data">{bookArr.author}</p>
        <button type="button">Delete</button>
      </div>
      <div className="d-flex-column book-status">
        <div>
          <span>{bookArr.completed}</span>
          <span>Completed</span>
        </div>
        <div>
          <span>Current Chapter</span>
          <span>
            Chapter
            {bookArr.chapter}
          </span>
        </div>
      </div>
    </section>
  );
}

Bookcard.propTypes = {
  bookArr: PropTypes.shape({
    id: PropTypes.string.isRequired,
    tittle: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    completed: PropTypes.string.isRequired,
    chapter: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};

export default Bookcard;

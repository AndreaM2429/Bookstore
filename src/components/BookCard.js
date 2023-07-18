import PropTypes from 'prop-types';
import ButtonDelete from './buttons/ButtonDelete';

function Bookcard({ bookArr }) {
  return (
    <section className="d-flex book-card" key={bookArr.item_id}>
      <div key={bookArr.item_id}>
        <h4 className="book-data">{bookArr.category}</h4>
        <h2 className="book-data">{bookArr.title}</h2>
        <p className="book-data">{bookArr.author}</p>
        <ButtonDelete id={bookArr.item_id} />
      </div>
    </section>
  );
}

Bookcard.propTypes = {
  bookArr: PropTypes.shape({
    item_id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};

export default Bookcard;

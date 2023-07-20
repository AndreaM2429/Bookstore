import PropTypes from 'prop-types';
import ButtonDelete from './buttons/ButtonDelete';

function Bookcard({ bookArr }) {
  return (
    <section className="d-flex book-card" key={bookArr.item_id}>
      <div className="book-info" key={bookArr.item_id}>
        <h4 className="catego">{bookArr.category}</h4>
        <h2 className="title">{bookArr.title}</h2>
        <p className="author">{bookArr.author}</p>
        <button type="button">Comments</button>
        <ButtonDelete id={bookArr.item_id} />
        <button type="button">Edit</button>
      </div>
      <div className="d-flex porcentage">
        <div className="circle" />
        <div>
          <span className="d-flex-column">
            {Math.floor(Math.random() * (90 - 30 + 1) + 30)}
            %
          </span>
          <span className="complete">Completed</span>
        </div>
      </div>
      <div className="chap-container d-flex-column">
        <span className="chap-title">CURRENT CHAPTER</span>
        <span className="chap">
          Chapter
          {` ${Math.floor(Math.random() * (30 - 12 + 1) + 12)}`}
        </span>
        <button type="button">UPDATE PROGRESS</button>
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

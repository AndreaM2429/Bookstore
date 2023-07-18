import ButtonAdd from './buttons/ButtonAdd';
import Select from './Select';

function AddBook() {
  return (
    <>
      <h2>Add new book</h2>
      <form className="d-flex addbook" onSubmit={(ev) => ev.preventDefault()}>
        <input name="bookTitle" id="bookTitle" placeholder="Book title" />
        <input name="author" id="author" placeholder="Author" />
        <Select />
        <ButtonAdd />
        <span className="messagecont" />
      </form>
    </>
  );
}

export default AddBook;

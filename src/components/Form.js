function AddBook() {
  return (
    <>
      <h2>Add new book</h2>
      <form className="d-flex addbook">
        <input placeholder="Book tittle" />
        <input placeholder="Author" />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default AddBook;

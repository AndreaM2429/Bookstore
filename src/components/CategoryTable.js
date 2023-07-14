import { books as bookList } from './ListBooks';

function CategoriesTable() {
  return (
    <table>
      <tr>
        <th>Categories</th>
      </tr>
      {bookList.map((book) => (
        <tr key={book.id}>
          <td>{book.category}</td>
        </tr>
      ))}
    </table>
  );
}

export default CategoriesTable;

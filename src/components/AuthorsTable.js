import { books as bookList } from './ListBooks';

function AuthorsTable() {
  return (
    <table>
      <tr>
        <th>Authors</th>
      </tr>
      {bookList.map((book) => (
        <tr key={book.author}>
          <td>{book.author}</td>
        </tr>
      ))}
    </table>
  );
}

export default AuthorsTable;

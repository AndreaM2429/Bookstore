import { v4 as uuidv4 } from 'uuid';

const books = (titleBook, authorbook) => ({
  item_id: uuidv4(),
  title: titleBook,
  author: authorbook,
  category: 'Unknown',
});

export default books;

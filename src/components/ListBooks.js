import { v4 as uuidv4 } from 'uuid';

const books = (titleBook, authorbook, catego) => ({
  item_id: uuidv4(),
  title: titleBook,
  author: authorbook,
  category: catego,
});

export default books;

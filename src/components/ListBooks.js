import { v4 as uuidv4 } from 'uuid';

export const books = [
  {
    id: uuidv4(),
    tittle: 'Book1',
    author: 'Author1',
    completed: '64%',
    chapter: '17',
    category: 'category 1',
  },
  {
    id: uuidv4(),
    tittle: 'Book2',
    author: 'Author2',
    completed: '8%',
    chapter: '3: "A lesson learned"',
    category: 'category 2',
  },
  {
    id: uuidv4(),
    tittle: 'Book3',
    author: 'Author3',
    completed: '0%',
    chapter: 'Introduction',
    category: 'category 3',
  },
];

export default books;

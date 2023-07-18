import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  arrBooks: [
    {
      item_id: 'item1',
      title: 'The Great Gatsby',
      author: 'John Smith',
      category: 'Fiction',
    },
    {
      item_id: 'item2',
      title: 'Anna Karenina',
      author: 'Leo Tolstoy',
      category: 'Fiction',
    },
    {
      item_id: 'item3',
      title: 'The Selfish Gene',
      author: 'Richard Dawkins',
      category: 'Nonfiction',
    },
  ],
};

const bookSlice = createSlice({
  name: 'Books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      const newBook = action.payload;
      state.arrBooks.push(newBook);
    },
    removeBook: (state, action) => {
      const newState = state.arrBooks.filter((book) => book.item_id !== action.payload);
      state.arrBooks = newState;
    },
  },
});

export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice.reducer;

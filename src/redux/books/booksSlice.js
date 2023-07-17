import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  arrBooks: [],
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
      state.arrBooks.filter((book) => book.id !== action.payload);
    },
  },
});

export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice.reducer;

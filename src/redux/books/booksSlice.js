import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { addbookAPI, getBooks, deleteBook } from '../API/ApiMethods';

const initialState = {
  arrBooks: [],
  isload: true,
  generalError: false,
};

export const getBookList = createAsyncThunk('get/bookList', async (thunkAPI) => {
  try {
    const resp = await getBooks();
    return resp;
  } catch (error) {
    return thunkAPI.rejectWithValue('Something went wrong');
  }
});

export const addNewBook = createAsyncThunk('addbook/', async (book, thunkAPI) => {
  try {
    const resp = await addbookAPI(book);
    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue('Something went wrong');
  }
});

export const deleteBooks = createAsyncThunk('deletebook/', async (id, thunkAPI) => {
  try {
    const resp = await deleteBook(id);
    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue('Something went wrong');
  }
});

const createObjt = (books) => {
  const keys = Object.keys(books);
  const values = Object.values(books);
  const newArr = [];
  for (let i = 0; i < keys.length; i += 1) {
    const values2 = Object.values(values[i]);
    newArr.push({
      item_id: keys[i],
      title: values2[0].title,
      author: values2[0].author,
      category: values2[0].category,
    });
  }
  return newArr;
};

const bookSlice = createSlice({
  name: 'Books',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(addNewBook.fulfilled, (state, action) => {
        state.arrBooks.push(action.meta.arg);
      })
      .addCase(addNewBook.rejected, (state) => {
        state.generalError = true;
      })
      .addCase(getBookList.fulfilled, (state, action) => {
        const arr = createObjt(action.payload);
        state.arrBooks = arr;
        state.isload = false;
      })
      .addCase(getBookList.rejected, (state) => {
        state.generalError = true;
      })
      .addCase(deleteBooks.fulfilled, (state, action) => {
        const { arrBooks } = state;
        const newState = arrBooks.filter((book) => book.item_id !== action.meta.arg);
        state.arrBooks = newState;
      })
      .addCase(deleteBooks.rejected, (state) => {
        state.generalError = true;
      });
  },
});

export default bookSlice.reducer;

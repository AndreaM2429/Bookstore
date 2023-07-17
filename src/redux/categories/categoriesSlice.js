import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  arrCatego: [],
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    load: (state) => {
      if (state.arrCatego.length === 0) {
        return 'Under construction';
      }
      return state;
    },
  },
});

export const { load } = categoriesSlice.actions;
export default categoriesSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const initialState = { inputValue: '' };

const filterSlice = createSlice({
  name: 'filter',
  initialState: initialState,
  reducers: {
    changeFilter: {
      reducer: (state, action) => {
        state.inputValue = action.payload;
      },
    },
  },
});

export const { changeFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
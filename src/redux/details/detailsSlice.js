/* eslint-disable no-param-reassign */
import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getBestSellerBooks = createAsyncThunk(
  'details/getBestSellerBooks',
  async (url, thunkApi) => {
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue('Error...');
    }
  },
);

const detailsSlice = createSlice({
  name: 'details',
  initialState: {
    booksDetails: [],
    listName: 'No list loaded',
    publishedDate: 'no Date',
    isLoading: true,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBestSellerBooks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.listName = action.payload.results.display_name;
        state.publishedDate = action.payload.results.bestsellers_date;
        const listBooks = action.payload.results.books;
        state.booksDetails = listBooks;
      })
      .addCase(getBestSellerBooks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBestSellerBooks.rejected, (state, action) => {
        state.booksDetails = action.payload;
        state.error = action.error.message;
      });
  },
});

export default detailsSlice.reducer;

/* eslint-disable no-param-reassign */
import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getCategoriesList = createAsyncThunk(
  'categories/getCategoriesList',
  async (_, thunkApi) => {
    try {
      const response = await axios.get('https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=ojoeVThZ3GLU2SAZCITvtT1smz6qZuGq');
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue('Error...');
    }
  },
);

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    categoriesList: [],
    categoriesFiltered: [],
    isLoading: true,
  },
  reducers: {
    filterBySearch: (state, action) => {
      const filteredCategories = state.categoriesList.filter(
        (categorie) => categorie.list_name_encoded.includes(action.payload),
      );
      state.categoriesFiltered = filteredCategories;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCategoriesList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.numlist = action.payload.num_results;
        const listCat = action.payload.results.filter((cat) => cat.newest_published_date.startsWith('2023'));
        const listCatWithIndex = listCat.map((obj, index) => {
          obj.newindex = index;
          return obj;
        });
        state.categoriesList = listCatWithIndex;
      });
  },
});

export const { filterBySearch } = categoriesSlice.actions;

export default categoriesSlice.reducer;

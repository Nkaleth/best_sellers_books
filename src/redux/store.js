import { configureStore } from '@reduxjs/toolkit';
import categoriesReducer from './categories/categoriesSlice';

const store = configureStore({
  reducer: {
    categories: categoriesReducer,
  },
});

export default store;

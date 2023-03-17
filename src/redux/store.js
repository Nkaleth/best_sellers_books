import { configureStore } from '@reduxjs/toolkit';
import categoriesReducer from './categories/categoriesSlice';
import detailsReducer from './details/detailsSlice';

const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    details: detailsReducer,
  },
});

export default store;

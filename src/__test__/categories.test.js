import { configureStore, createSlice } from '@reduxjs/toolkit';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import CategoriesList from '../components/CategoriesList';

describe('Testing Home Page: <CategoriesList /> component', () => {
  const initialState = {
    categoriesList: [{
      list_name: 'Combined Print and E-Book Fiction',
      display_name: 'Combined Print & E-Book Fiction',
      list_name_encoded: 'combined-print-and-e-book-fiction',
      oldest_published_date: '2011-02-13',
      newest_published_date: '2023-03-19',
      updated: 'WEEKLY',
    },
    {
      list_name: 'Combined Print and E-Book Nonfiction',
      display_name: 'Combined Print & E-Book Nonfiction',
      list_name_encoded: 'combined-print-and-e-book-nonfiction',
      oldest_published_date: '2011-02-13',
      newest_published_date: '2023-03-19',
      updated: 'WEEKLY',
    },
    {
      list_name: 'Hardcover Fiction',
      display_name: 'Hardcover Fiction',
      list_name_encoded: 'hardcover-fiction',
      oldest_published_date: '2008-06-08',
      newest_published_date: '2023-03-19',
      updated: 'WEEKLY',
    }],
    categoriesFiltered: [],
    isLoading: false,
  };

  const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
  });

  const store = configureStore({
    reducer: {
      categories: categoriesSlice.reducer,
    },
  });

  const wrapper = (component) => (
    <Provider store={store}>
      <BrowserRouter>
        {component}
      </BrowserRouter>
    </Provider>
  );

  it("Should render 'books by category' text", () => {
    render(wrapper(<CategoriesList />));
    expect(screen.getByText(/books by category/i)).toBeInTheDocument();
  });

  it('Should render 3 categories', () => {
    render(wrapper(<CategoriesList />));
    expect(screen.getAllByTestId('categorieBox')).toHaveLength(3);
  });

  it('Should match the snapshot', () => {
    expect(renderer.create(wrapper(<CategoriesList />)).toJSON()).toMatchSnapshot();
  });
});

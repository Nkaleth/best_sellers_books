import { configureStore, createSlice } from '@reduxjs/toolkit';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import BooksList from '../components/BooksList';

describe('Tests for details page: <BooksList /> component', () => {
  const initialState = {
    booksDetails: [
      {
        rank: 1,
        rank_last_week: 15,
        weeks_on_list: 9,
        title: 'THE MAID',
        author: 'Nita Prose',
        book_image: 'https://storage.googleapis.com/du-prd/books/images/9780593356159.jpg',
      },
      {
        rank: 2,
        rank_last_week: 15,
        weeks_on_list: 9,
        title: 'Book 2',
        author: 'Author2',
        book_image: 'https://storage.googleapis.com/du-prd/books/images/9780593356159.jpg',
      },
      {
        rank: 3,
        rank_last_week: 15,
        weeks_on_list: 9,
        title: 'Book 3',
        author: 'Author3',
        book_image: 'https://storage.googleapis.com/du-prd/books/images/9780593356159.jpg',
      },
      {
        rank: 4,
        rank_last_week: 15,
        weeks_on_list: 9,
        title: 'Book 4',
        author: 'Author4',
        book_image: 'https://storage.googleapis.com/du-prd/books/images/9780593356159.jpg',
      },
    ],
    listName: 'No list loaded',
    publishedDate: 'no Date',
    isLoading: false,
  };

  const detailsSlice = createSlice({
    name: 'details',
    initialState,
  });

  const store = configureStore({
    reducer: {
      details: detailsSlice.reducer,
    },
  });

  const wrapper = (component) => (
    <Provider store={store}>
      <BrowserRouter>
        {component}
      </BrowserRouter>
    </Provider>
  );

  it("Should render '4 categories' text", () => {
    render(wrapper(<BooksList />));
    expect(screen.getByText(/4 categories/i)).toBeInTheDocument();
  });

  it('Should render 4 books', () => {
    render(wrapper(<BooksList />));
    expect(screen.getAllByTestId('bookBox')).toHaveLength(4);
  });

  it('Should match the snapshot', () => {
    expect(renderer.create(wrapper(<BooksList />)).toJSON()).toMatchSnapshot();
  });
});

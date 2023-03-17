import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import BooksList from './BooksList';
import store from '../redux/store';

describe('testing BooksList component', () => {
  it('expects to render it well each time', () => {
    const BooklistComponent = render(
      <Provider store={store}>
        <BooksList />
      </Provider>,
    );
    expect(BooklistComponent).toMatchSnapshot();
  });
});

import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import CategoriesList from '../components/CategoriesList';
import store from '../redux/store';

describe('testing BooksList component', () => {
  it('expects to render it well each time', () => {
    const CategoriesListComponent = render(
      <Provider store={store}>
        <CategoriesList />
      </Provider>,
    );
    expect(CategoriesListComponent).toMatchSnapshot();
  });
});

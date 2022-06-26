import { render, screen, cleanup } from '@testing-library/react';
import Header from './Header';
import { DataProvider } from '../../contexts/DataContext';

afterEach(cleanup);

test('should render Header component with menu title', () => {
  const detail = {
    name: 'Mr. Magoo\'s Sandwich Shop',
    phone: '555-5555',
  };

  render(
    <DataProvider detail={detail}>
      <Header />
    </DataProvider>,
  );

  // Todo: complete test...
  const headerElement = screen.getByTestId('header');
});

import { render, screen, cleanup } from '@testing-library/react';
import ShopCart from './ShopCart';
import { DataProvider } from '../../contexts/DataContext';

afterEach(cleanup);

test('should render ShopCart component without item', () => {
  const total = 0;
  const cart = [];

  render(
    <DataProvider cart={cart} total={total}>
      <ShopCart />
    </DataProvider>,
  );

  // Todo: complete test...
  const noOrderAvailable = screen.getByText(/Nothing in order/i);
});

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

  const noOrderAvailable = screen.getByText(/Nothing in order/i);
  expect(noOrderAvailable).toBeInTheDocument();
});

/*
test('should render ShopCart component with item', () => {
  const total = 1;
  const cart = [
    {
      'id': 1,
      'name': 'sandwich',
      'price': 5,
      'quantity': 1,
    },
  ];

  render(
    <DataProvider cart={cart} total={total}>
      <ShopCart />
    </DataProvider>,
  );

  const quantity = screen.getByText(/Quantity/i);
  expect(quantity).toBeInTheDocument();
});
*/
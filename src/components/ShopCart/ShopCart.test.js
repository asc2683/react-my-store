import { render, screen, cleanup } from '@testing-library/react';
import ShopCart from './ShopCart';

afterEach(cleanup);

test('should render ShopCart component without item', () => {
  const total = 0;
  const cart = [];

  render(<ShopCart cart={cart} total={total} />);
  const noOrderAvailable = screen.getByText(/Nothing in order/i);
  expect(noOrderAvailable).toBeInTheDocument();
});

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

  render(<ShopCart cart={cart} total={total} />);
  const quantity = screen.getByText(/Quantity/i);
  expect(quantity).toBeInTheDocument();
});

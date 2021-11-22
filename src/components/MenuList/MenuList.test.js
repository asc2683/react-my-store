import { render, screen, cleanup } from '@testing-library/react';
import MenuList from './MenuList';
import { DataProvider } from '../../contexts/DataContext';

afterEach(cleanup);

const menu = [
  {
    'id': 1,
    'name': 'sandwich',
    'price': 5,
  },
  {
    'id': 2,
    'name': 'chips',
    'price': 1,
  },
  {
    'id': 3,
    'name': 'cake',
    'price': 3,
  },
  {
    'id': 4,
    'name': 'soup',
    'price': 4,
  },
  {
    'id': 5,
    'name': 'drink',
    'price': 2,
  },
];

test('should render MenuList component', () => {
  const menuVisible = true;
  const mockAddToCart = jest.fn();

  render(
    <DataProvider menu={menu} menuVisible={menuVisible} addToCart={mockAddToCart}>
      <MenuList />
    </DataProvider>,
  );

  const chips = screen.getByText(/Chips/i);
  const quantity = screen.queryAllByText('Quantity');
  expect(chips).toBeInTheDocument();
  expect(quantity).toHaveLength(0);
});

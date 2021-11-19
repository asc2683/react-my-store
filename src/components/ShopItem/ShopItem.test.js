import { render, screen, cleanup } from '@testing-library/react';
import ShopItem from './ShopItem';

afterEach(cleanup);

test('should render ShopItem component without quantity', () => {
  const menuVisible = false
  const item = {
      "id": 2,
      "name": "chips",
      "price": 1,
      "quantity": 1
  }

  render(<ShopItem menuVisible={menuVisible} item={item} />);
  const shopItemElement = screen.getByTestId('shopItem'); 
  const quantity = screen.queryAllByText('Quantity');
  expect(shopItemElement).toBeInTheDocument();
  expect(shopItemElement).toHaveTextContent(item.name);
  expect(shopItemElement).toHaveTextContent(item.price);
  expect(quantity).toHaveLength(0);  
});

test('should render ShopItem component with quantity', () => {
  const menuVisible = true
  const item = {
      "id": 2,
      "name": "chips",
      "price": 1,
      "quantity": 1
  }

  render(<ShopItem menuVisible={menuVisible} item={item} />);
  const shopItemElement = screen.getByTestId('shopItem');  
  expect(shopItemElement).toBeInTheDocument();
  expect(shopItemElement).toHaveTextContent(item.name);
  expect(shopItemElement).toHaveTextContent(item.price);
  expect(shopItemElement).toHaveTextContent(item.quantity);
});


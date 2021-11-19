import { render, screen, cleanup } from '@testing-library/react';
import Header from './Header';

afterEach(cleanup);

test('should render Header component with menu title', () => {
  const detail = {
    name: 'Mr. Magoo\'s Sandwich Shop',
    phone: '555-5555'
  }

  render(<Header detail={detail} />);
  const headerElement = screen.getByTestId('header');  
  expect(headerElement).toBeInTheDocument();
  expect(headerElement).toHaveTextContent(detail.name);
  expect(headerElement).toHaveTextContent(detail.phone);
});

test('should render Header component with order title', () => {
  const detail = {
    name: 'My Order'
  }

  render(<Header detail={detail} />);
  const headerElement = screen.getByTestId('header');  
  expect(headerElement).toBeInTheDocument();
  expect(headerElement).toHaveTextContent(detail.name);
});

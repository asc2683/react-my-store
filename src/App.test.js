import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import App from './App';

afterEach(cleanup);

test('renders menu header', () => {
  render(<App />);
  const headerElement = screen.getByText(/Mr. Magoo's Sandwich Shop/i);
  expect(headerElement).toBeInTheDocument();
});

test("view order", () => {
    render(<App />);
    const button = screen.getByText(/View Order/i);
    fireEvent.click(button);
    const orderTitle = screen.getByText(/My Order/i);
    expect(orderTitle).toBeInTheDocument();
});

test("add to cart", () => {
    render(<App />);
    const addButton = screen.getAllByText('Add to Order')[0];
    fireEvent.click(addButton);
    const button = screen.getByText(/View Order/i);
    fireEvent.click(button);
    const quantity = screen.getByText(/Quantity: 1/i);
    expect(quantity).toBeInTheDocument();
});

test("submit order", async () => {
    const total = 0;
    window.alert = jest.fn();
    render(<App />);
    const button = screen.getByText(/Submit Order/i);
    fireEvent.click(button);
    expect(window.alert).toBeCalledWith('Order Submitted: $' + total);
    window.alert.mockClear();
});

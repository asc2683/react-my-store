import { render, screen } from '@testing-library/react';
import App from './App';

test('renders menu header', () => {
  render(<App />);
  const linkElement = screen.getByText(/Mr. Magoo's Sandwich Shop/i);
  expect(linkElement).toBeInTheDocument();
});

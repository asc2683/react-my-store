import { render, screen, cleanup } from '@testing-library/react';
import Button from './Button';

afterEach(cleanup);

test('should render Button component with label', () => {
  const label = 'Return to menu';
  const mockHandleClick = jest.fn();
  const item = {
    'id': 2,
    'name': 'chips',
    'price': 1,
  };

  // Todo: complete test...
  render(<Button label={label} handleClick={mockHandleClick} item={item} />);
  const buttonElement = screen.getByTestId('button');
});

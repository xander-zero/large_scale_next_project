import { describe } from 'node:test';
import { Button } from './button';
import { render, screen } from '@testing-library/react';

describe('Button Component', () => {
  test('renders a default button', () => {
    // const div = document.createElement('div');
    // ReactDOM.render(<Button>Click here</Button>, div);
    // document.body.appendChild(div);
    const { getByText } = render(<Button>Click here</Button>);
    expect(getByText('Click here')).toBeInTheDocument();
  });

  test('disabled the button when isDisabled prop is true', () => {
    render(<Button isDisabled>Click here</Button>);
    expect(screen.getByRole('button')).toBeDisabled();
  });

  test('applies the correct css class for different variant button!', () => {
    const { rerender } = render(<Button variant="primary">Click here</Button>);
    expect(screen.getByRole('button')).toHaveClass('btn-primary');

    rerender(<Button variant="info">Click here</Button>);
    expect(screen.getByRole('button')).toHaveClass('btn-info');
  });

  test('loading the button when loading prop is true', () => {
    const loadingText = 'درحال ارسال درخواست';
    render(
      <Button isLoading loadingText={loadingText}>
        Click here
      </Button>
    );

    // Check that the loading spinner is in the document
    expect(screen.getByRole('button')).toHaveTextContent(loadingText);
  });
});

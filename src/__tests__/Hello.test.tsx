import { render } from '@testing-library/react';
import Hello from '../components/Hello';

describe('Hello', () => {
  it('renders the correct name', () => {
    const { getByText } = render(<Hello name="aman" />);
    expect(getByText('Hello aman')).toBeInTheDocument();
  });
});

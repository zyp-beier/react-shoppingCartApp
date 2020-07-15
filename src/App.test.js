import React from 'react';
import { render } from '@testing-library/react';
import Shopping from './Shopping';

test('renders learn react link', () => {
  const { getByText } = render(<Shopping />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

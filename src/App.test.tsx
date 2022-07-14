import React from 'react';
import { render, screen } from '@testing-library/react';
import ContactHome from './components/contact-home/contact-home';

test('renders learn react link', () => {
  render(<ContactHome />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

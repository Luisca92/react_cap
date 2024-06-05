import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Little Lemon heading', () => {
  render(<App />);
  const headingElements = screen.getAllByText(/Little Lemon/i);
  expect(headingElements.length).toBeGreaterThan(0);
});

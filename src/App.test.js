import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders game container', () => {
  const { container } = render(<App />);
  expect(container.firstChild).not.toBeNull();
});

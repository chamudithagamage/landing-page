import { render, screen } from '@testing-library/react';


test('renders learn react link', () => {
  render();
  const linkElement = screen.getByText();
  expect(linkElement).toBeInTheDocument();
});

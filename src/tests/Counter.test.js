// import necessary react testing library helpers here
import { render, screen, fireEvent, getByText, getByTestId } from '@testing-library/react';
// import the Counter component here
import Counter from '../components/Counter';

beforeEach(() => {
  // Render the Counter component here
  render(<Counter />);
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  const counterMessage = screen.getByText(/Counter/i);
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  const counterInitial = screen.getByText(/0/i);
  expect(counterInitial).toBeInTheDocument();
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  const counter = screen.getByTestId("count");
  const plusButton = screen.getByText('+');
  // simulate user clicking (act)
  fireEvent.click(plusButton);
  // assert that it updates count variable to 1
  expect(counter).toHaveTextContent("1");

});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  const counter = screen.getByTestId("count");
  const minusButton = screen.getByText('-');
  // simulate user clicking (act)
  fireEvent.click(minusButton);
  // assert that it updates count variable to -1
  expect(counter).toHaveTextContent("-1");
});

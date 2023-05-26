import {render, screen, within} from '@testing-library/react';
import App from './App';
import userEvent from "@testing-library/user-event";

test('shows selected restaurant after selection', async () => {
  const user = userEvent.setup();
  render(<App />);

  const button = screen.getByRole('button', { name: 'Type de restaurant:' });

  await user.click(button);

  const firstOption = screen.getByRole('radio', { name: 'Français'})
  await user.click(firstOption);

  const selection = screen.getByTestId('selection')
  expect(selection).toHaveTextContent('vous avez choisi: Français')
})

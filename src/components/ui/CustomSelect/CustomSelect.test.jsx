
import { render, screen } from "@testing-library/react";
import { CustomSelect } from "../CustomSelect/CustomSelect";
import userEvent from "@testing-library/user-event";

describe('CustomSelect',() => {
  it('render the component', async () => {
    const user = userEvent.setup();
    render(<CustomSelect/>)

    const button = screen.getByRole('button', { name: 'Type de restaurant:' });
    expect(button).toBeInTheDocument();

    await user.click(button);

    const firstOption = screen.getByRole('radio', { name: 'Français'})
    expect(firstOption).toBeVisible()
  });
})

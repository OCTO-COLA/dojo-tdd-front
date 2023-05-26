
import {render, screen, within} from "@testing-library/react";
import { CustomSelect } from "../CustomSelect/CustomSelect";
import userEvent from "@testing-library/user-event";

const listOptions = [
  {label: 'Français', value: 'fr'},
  {label: 'Méxicain', value: 'mex'}
]

describe('CustomSelect',() => {
  it('render the component', async () => {
    const user = userEvent.setup();
    render(<CustomSelect listOptions={listOptions}/>)

    const button = screen.getByRole('button', { name: 'Type de restaurant:' });
    expect(button).toBeInTheDocument();

    await user.click(button);

    const firstOption = screen.getByRole('radio', { name: 'Français'})
    expect(firstOption).toBeVisible()
  });
})


test('le selecteur doit se fermer après la sélection', async () => {

})

describe('Le selecteur est modulable', () => {
  const user = userEvent.setup();
  it('le selecteur doit avoir un nombre de choix affiché correspondant aux envoyé au component', async () => {
    render(<CustomSelect listOptions={listOptions}/>)
    const button = screen.getByRole('button', { name: 'Type de restaurant:' });
    expect(button).toBeInTheDocument()
    await user.click(button);
    const optionList = screen.getByRole('list')
    expect(optionList).toBeVisible()
    const options = within(optionList).getAllByRole('listitem')
    expect(options.length).toEqual(2)
  })
  it('le selecteur doit contenir les labels en choix', async () => {
    render(<CustomSelect listOptions={[listOptions[1]]}/>)
    const button = screen.getByRole('button', { name: 'Type de restaurant:' });
    expect(button).toBeInTheDocument()
    await user.click(button);
    const optionList = screen.getByRole('list')
    expect(optionList).toBeVisible()
    const options = within(optionList).getAllByRole('listitem')

    expect(options[0]).toHaveTextContent('Méxicain')
  })
})

describe('Le placeholder du bouton doit varié', () => {
  const user = userEvent.setup();
  it('Le placeholder doit contenir un texte meme sans selection', async () => {
    render(<CustomSelect listOptions={listOptions}/>)
    const button = screen.getByRole('button', { name: 'Type de restaurant:' });
    expect(button).toBeInTheDocument()
    const expected = 'Choisis ton type de resto !'
    expect(button).toHaveTextContent(expected)
  })
  it('Le placeholder doit contenir un texte correspondant à la selection', async () => {
    render(<CustomSelect onSelect={() => {}} listOptions={listOptions}/>)
    const button = screen.getByRole('button', { name: 'Type de restaurant:' });
    expect(button).toBeInTheDocument()
    await user.click(button)
    const firstOption = screen.getByRole('radio', { name: 'Français'})
    await user.click(firstOption);
    const expected = 'Français'
    expect(button).toHaveTextContent(expected)
  })
})


describe('La touche espace deploie le composant', () => {
  const user = userEvent.setup();
  it('Le composant deploie sa liste', async () => {
    render(<CustomSelect onSelect={() => {}} listOptions={listOptions}/>)
    const button = screen.getByRole('button', { name: 'Type de restaurant:' });
    expect(button).toBeInTheDocument()
    button.focus()
    await user.keyboard(' ')
    const firstOption = screen.getByRole('radio', { name: 'Français'})
    expect(firstOption).toBeInTheDocument()
  })
})
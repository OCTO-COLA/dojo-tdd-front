import './App.css';
import { useState } from "react";
import { CustomSelect } from "./components/ui/CustomSelect/CustomSelect";

function App() {

  const [resto, setResto] = useState('')


  return (
    <div className="App">
      <header>DOJO TDD FRONT</header>
      <main>
        {resto && <p data-testid="selection">vous avez choisi: {resto}</p>}
        <h1>
          Créer un custom composant select accessible
        </h1>
        <CustomSelect value={resto} onSelect={(value) => setResto(value)}/>
        <footer>
          <p>hint: docs utiles {' '}
            <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select"> mdn</a> {' '} et {' '}
            <a href="https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-select-only/">{' '}w3org</a> {' '} et {' '}
            <a href="https://testing-library.com/docs/react-testing-library/example-intro">rtl</a> {' '} mais aussi {' '}
            <a href="https://www.google.com/">google</a>
          </p>
        </footer>
      </main>


    </div>
  );
}

export default App;

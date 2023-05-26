import { Radio } from "../Radio/Radio";
import { useCallback, useId, useState } from "react";
import './CustomSelect.css';

export const CustomSelect = ({ value, onSelect, listOptions}) => {
  const labelledBy = useId();
  const [selectedValue, setSelectedValue] = useState(value || '');
  const [isOptionListOpen, setIsOptionListOpen] = useState(false);

  const isCurrentItemSelected = useCallback((value) => {
    return selectedValue === value;
  }, [selectedValue]);
  const unPlaceholder = 'Choisis ton type de resto !'


  return(
    <div className="selectWrapper">
      <label htmlFor="restaurant-select" className="label" id={labelledBy}>Type de restaurant:</label>

      <div className="container">
        <button
          aria-haspopup="listbox"
          aria-expanded={isOptionListOpen}
          aria-labelledby={labelledBy}
          className="button"
          type="button"
          onClick={() => setIsOptionListOpen(!isOptionListOpen)}>
            <span>{ unPlaceholder && getOptionLabelByValue(listOptions, selectedValue, unPlaceholder) }</span>
        <input hidden value={selectedValue} className="input" id="restaurant-select" onChange={() => ({})}/>
        </button>
      </div>
      {isOptionListOpen && (
        <ul className="options">
            {
                listOptions.map((uneOption) => (
                    <li className="option" key={uneOption.value}>
                        <Radio
                            label={ uneOption.label }
                            value={ uneOption.value }
                            checked={ isCurrentItemSelected(uneOption.value) }
                            onChange={ () => {
                                setIsOptionListOpen(false);
                                setSelectedValue(uneOption.value);
                                onSelect(uneOption.label);
                            }}/>
                    </li>
                ))
            }
      </ul>)}
    </div>
  )
}

function getOptionLabelByValue (optionList, value, unLabelParDefaut) {
    const filteredOption = optionList.filter((option) => option.value === value)
    if (filteredOption.length < 1){
        return unLabelParDefaut
    }
    return filteredOption[0].label
}
import { Radio } from "../Radio/Radio";
import { useCallback, useId, useState } from "react";
import './CustomSelect.css';

export const CustomSelect = ({ value, onSelect }) => {
  const labelledBy = useId();
  const [selectedValue, setSelectedValue] = useState(value || '');
  const [isOptionListOpen, setIsOptionListOpen] = useState(false);

  const isCurrentItemSelected = useCallback((value) => {
    return selectedValue === value;
  }, [selectedValue]);


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
          Choisir un restaurant
        <input hidden value={selectedValue} className="input" id="restaurant-select" onChange={() => ({})}/>
        </button>
      </div>
      {isOptionListOpen && (
        <ul className="options">
          <li className="option">
            <Radio
              label="Français"
              value="fr"
              checked={isCurrentItemSelected("fr")}
              onChange={() => {
                setIsOptionListOpen(false);
                setSelectedValue("fr");
                onSelect("Français");
              }}/>
          </li>
          <li className="option">
            <Radio
              label="Indien"
              value="indi"
              checked={isCurrentItemSelected("indi")}
              onChange={() => {
                setIsOptionListOpen(false);
                setSelectedValue("indi");
                onSelect("Indien");
              }}/>
          </li>
          <li className="option">
            <Radio
              label="Japonais"
              value="jap"
              checked={isCurrentItemSelected("jap")}
              onChange={() => {
                setIsOptionListOpen(false);
                setSelectedValue("jap");
                onSelect("Japonais");
              }}/>
          </li>
          <li className="option">
            <Radio
              label="Chinois"
              value="ch"
              checked={isCurrentItemSelected("ch")}
              onChange={() => {
                setIsOptionListOpen(false);
                setSelectedValue("ch");
                onSelect("Chinois");
              }}/>
          </li>
          <li className="option">
            <Radio
              label="Italien"
              value="ita"
              checked={isCurrentItemSelected("ita")}
              onChange={() => {
                setIsOptionListOpen(false);
                setSelectedValue("ita");
                onSelect("Italien");
              }}/>
          </li>
          <li className="option">
            <Radio
              label="Coréen"
              value="cor"
              checked={isCurrentItemSelected("cor")}
              onChange={() => {
                setIsOptionListOpen(false);
                setSelectedValue("cor");
                onSelect("Coréen");
              }}/>
          </li>
      </ul>)}
    </div>
  )
}
